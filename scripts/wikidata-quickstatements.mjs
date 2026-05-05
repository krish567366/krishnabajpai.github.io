#!/usr/bin/env node
/**
 * Wikidata helper: scrape URL metadata → QuickStatements TSV **or** create the item via API.
 * Shared logic: scripts/lib/wikidata-item-core.mjs
 *
 * Scholar profile batch sync: scripts/wikidata-scholar-sync.mjs
 *
 * Default (no --submit): print QuickStatements batch to stdout (paste into quickstatements.toolforge.org).
 *
 * With --submit: log in with a bot password and call action=wbeditentity.
 *
 * Usage:
 *   node scripts/wikidata-quickstatements.mjs --url "https://example.com/post" --about Q137462720
 *   node scripts/wikidata-quickstatements.mjs --submit --url "https://example.com/post" --about Q137462720
 *
 * Submit requires env:
 *   WIKIDATA_USERNAME / WIKIDATA_PASSWORD  (or WIKIMEDIA_*)
 */
import process from "node:process";
import {
  API_URL_DEFAULT,
  toWikidataTimeQS,
  toWbTimeValue,
  normalizeKind,
  defaultInstanceForKind,
  fetchHtml,
  pickTitle,
  normalizeTitleForWikidata,
  pickPublisher,
  pickPublishedDate,
  buildQuickStatementsLines,
  buildWikibaseEntity,
  submitNewItem,
} from "./lib/wikidata-item-core.mjs";

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function requireArg(flag, value) {
  if (!value) {
    console.error(`Missing required arg ${flag}.`);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`wikidata-quickstatements.mjs

Generate QuickStatements TSV (default) or create a Wikidata item via API (--submit).

For Google Scholar → DOI → skip-if-exists → create many items, use:
  npm run wikidata:scholar
  (defaults to profile https://scholar.google.com/citations?user=zhQAzQoAAAAJ&hl=en&oi=ao )

Required:
  --url / -u           Page URL (article, paper landing page, or video page)

Optional:
  --about Q123         Person or subject QID to link (default: Q137462720)
  --kind article|paper|video
  --instance Q…        P31 (default: Q36774 web page, Q13442814 paper, Q34508 video)
  --title              Override scraped title
  --publisher          Plain-text publisher (QS only for P123 string)
  --publisher-q Q…     Publisher as item (API submit only → P123)
  --date YYYY-MM-DD    Publication date
  --doi                DOI (paper)
  --arxiv              arXiv id (paper)
  --retrieved YYYY-MM-DD  Reference "retrieved" date (default: today UTC)
  --submit             Create item via Wikidata API (needs bot password env)
  --summary TEXT       Edit summary for the new item (--submit only)
  --help / -h

Environment (--submit):
  WIKIDATA_USERNAME    e.g. MyAccount@mybot
  WIKIDATA_PASSWORD    Bot password from Special:BotPasswords
  WIKIDATA_API_URL     Optional (${API_URL_DEFAULT})
`);
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    printHelp();
    process.exit(0);
  }

  const url = getArg("--url") || getArg("-u");
  const about = getArg("--about") || "Q137462720";
  const kind = normalizeKind(getArg("--kind"));
  const titleArg = getArg("--title");
  const publisherArg = getArg("--publisher");
  const publisherQ = getArg("--publisher-q");
  const dateArg = getArg("--date");
  const doiArg = getArg("--doi");
  const arxivArg = getArg("--arxiv");
  const retrievedArg = getArg("--retrieved");
  const instance = getArg("--instance") || defaultInstanceForKind(kind);
  const submit = hasFlag("--submit");
  const summary = getArg("--summary");

  requireArg("--url", url);
  requireArg("--about", about);

  const retrievedQS =
    toWikidataTimeQS(retrievedArg) ||
    (() => {
      const d = new Date();
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      return `+${yyyy}-${mm}-${dd}T00:00:00Z/11`;
    })();

  const rawRetrievedDate =
    retrievedArg ||
    (() => {
      const d = new Date();
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    })();

  const retrievedWbTime = toWbTimeValue(rawRetrievedDate);
  if (!retrievedWbTime) {
    console.error("Could not build retrieved time.");
    process.exit(1);
  }

  let title = titleArg;
  let publisher = publisherArg;
  let published = dateArg;

  if (!title || !publisher || !published) {
    try {
      const html = await fetchHtml(url);
      if (html) {
        title ||= pickTitle(html);
        publisher ||= pickPublisher(html);
        published ||= pickPublishedDate(html);
      }
    } catch {
      // ignore
    }
  }

  title = normalizeTitleForWikidata(title);
  const publishedTimeQS = toWikidataTimeQS(published);

  const ctxBase = {
    url,
    about,
    kind,
    title,
    publisher,
    publishedRaw: published,
    publishedTimeQS,
    retrievedQS,
    retrievedWbTime,
    instance,
    doiArg,
    arxivArg,
    publisherQ,
  };

  if (!submit) {
    const lines = buildQuickStatementsLines(ctxBase);
    process.stdout.write(lines.join("\n") + "\n");
    return;
  }

  const user = process.env.WIKIDATA_USERNAME || process.env.WIKIMEDIA_USERNAME;
  const pass = process.env.WIKIDATA_PASSWORD || process.env.WIKIMEDIA_PASSWORD;
  if (!user || !pass) {
    console.error(
      "For --submit set WIKIDATA_USERNAME and WIKIDATA_PASSWORD (bot password from Special:BotPasswords).",
    );
    process.exit(1);
  }

  const apiUrl = process.env.WIKIDATA_API_URL || API_URL_DEFAULT;
  let entity;
  try {
    entity = buildWikibaseEntity(ctxBase);
  } catch (e) {
    console.error(e.message || e);
    process.exit(1);
  }

  try {
    const { id, raw } = await submitNewItem(apiUrl, user, pass, entity, summary);
    console.error(`Created https://www.wikidata.org/wiki/${id}`);
    if (raw?.warnings) {
      console.error("Warnings:", JSON.stringify(raw.warnings, null, 2));
    }
    console.log(id);
  } catch (e) {
    console.error(e.message || e);
    process.exit(1);
  }
}

await main();
