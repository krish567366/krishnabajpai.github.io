#!/usr/bin/env node
/**
 * Pull publications from a Google Scholar profile (json=1 API), resolve DOI via
 * hints in the snippet + Crossref + OpenAlex, skip items already on Wikidata (P356 or P973),
 * then print QuickStatements batches or create items (--submit).
 *
 * Default profile matches:
 *   https://scholar.google.com/citations?user=zhQAzQoAAAAJ&hl=en&oi=ao
 *
 * Usage:
 *   node scripts/wikidata-scholar-sync.mjs
 *   node scripts/wikidata-scholar-sync.mjs --submit
 *   node scripts/wikidata-scholar-sync.mjs --user OTHER_ID
 *   node scripts/wikidata-scholar-sync.mjs --profile-url "https://scholar.google.com/citations?user=…"
 *
 * Env:
 *   SCHOLAR_USER_ID     Override default Scholar user id
 *   (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
 *
 * Notes:
 * - Google may rate-limit; use --delay-ms between Crossref/OpenAlex/Wikidata calls.
 * - Respect Google Scholar Terms of Service; prefer moderate pagesize and personal profiles only.
 */
import process from "node:process";
import {
  API_URL_DEFAULT,
  toWikidataTimeQS,
  toWbTimeValue,
  normalizeTitleForWikidata,
  buildQuickStatementsLines,
  buildWikibaseEntity,
  submitNewItem,
} from "./lib/wikidata-item-core.mjs";

/** Default: Krishna Bajpai — https://scholar.google.com/citations?user=zhQAzQoAAAAJ&hl=en&oi=ao */
const DEFAULT_SCHOLAR_USER = "zhQAzQoAAAAJ";

const SCHOLAR_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";
const API_UA =
  "KrishnaBajpaiPortfolio/1.0 (https://krishnabajpai.me; mailto:krishna@krishnabajpai.me)";

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function resolveScholarUserId() {
  const explicit = getArg("--user") || getArg("--scholar-user");
  if (explicit) return explicit.trim();
  const profileUrl = getArg("--profile-url");
  if (profileUrl) {
    try {
      const u = new URL(profileUrl);
      const id = u.searchParams.get("user");
      if (id) return id.trim();
    } catch {
      console.error("Invalid --profile-url (expected full https://scholar.google.com/citations?... URL).");
      process.exit(1);
    }
    console.error("--profile-url must include ?user=…");
    process.exit(1);
  }
  return (process.env.SCHOLAR_USER_ID || DEFAULT_SCHOLAR_USER).trim();
}

function printHelp() {
  console.log(`wikidata-scholar-sync.mjs

Default Scholar profile: ${DEFAULT_SCHOLAR_USER} (oi=ao — “Articles” tab, same as):
  https://scholar.google.com/citations?user=${DEFAULT_SCHOLAR_USER}&hl=en&oi=ao
Override with --user, --profile-url, or env SCHOLAR_USER_ID.

Optional:
  --user USER_ID       Scholar user id (from citations?user=___)
  --profile-url URL    Full citations URL (extracts user=)
  --about Q123         Author item for P50 (default Q137462720)
  --pagesize N         Page size per request (default 80, max ~100)
  --limit N            Stop after N new items (testing)
  --submit             Create missing items via Wikidata API
  --allow-no-doi       Create without DOI (Scholar URL as P973 only)
  --no-crossref        Skip Crossref
  --no-openalex        Skip OpenAlex
  --delay-ms MS        Pause between calls (default 800)
  --summary TEXT       Edit summary (--submit)

Environment:
  SCHOLAR_USER_ID
  (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
`);
}

function stripTags(s) {
  return String(s).replaceAll(/<[^>]+>/g, " ").replaceAll(/\s+/g, " ").trim();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normTitle(t) {
  return String(t)
    .toLowerCase()
    .replaceAll(/[^\p{L}\p{N}\s]/gu, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
}

function titleSimilarity(a, b) {
  const x = normTitle(a);
  const y = normTitle(b);
  if (!x || !y) return 0;
  if (x === y) return 1;
  const pref = 48;
  if (x.slice(0, pref) === y.slice(0, pref)) return 0.95;
  if (x.includes(y.slice(0, Math.min(pref, y.length))) || y.includes(x.slice(0, Math.min(pref, x.length))))
    return 0.85;
  const ax = new Set(x.split(" ").filter((w) => w.length > 3));
  const by = new Set(y.split(" ").filter((w) => w.length > 3));
  let inter = 0;
  for (const w of ax) if (by.has(w)) inter++;
  return inter / Math.max(ax.size, by.size, 1);
}

function extractDoiHints(text) {
  const hints = new Set();
  const t = stripTags(text);
  const doiRe = /10\.\d{4,}\/[^\s"'<>]+/gi;
  for (const m of t.matchAll(doiRe)) {
    hints.add(m[0].replace(/[.,;:)\]]+$/, "").toLowerCase());
  }
  const ssrn = t.match(/SSRN\s*[:\s#]*(\d{5,12})/i);
  if (ssrn) hints.add(`10.2139/ssrn.${ssrn[1]}`.toLowerCase());
  return [...hints];
}

function parseScholarTableRows(bHtml) {
  const rows = [];
  const trRe = /<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g;
  let m;
  while ((m = trRe.exec(bHtml)) !== null) {
    const row = m[1];
    const hrefM = row.match(/href="([^"]+)"[^>]*class="gsc_a_at"/);
    const titleM = row.match(/class="gsc_a_at"[^>]*>([^<]+)<\/a>/);
    if (!hrefM || !titleM) continue;
    let path = hrefM[1].replaceAll("&amp;", "&");
    const title = normalizeTitleForWikidata(decodeBasicHtml(titleM[1].trim()));
    const gray = [...row.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)];
    const authors = gray[0] ? stripTags(gray[0][1]) : "";
    const venueLine = gray[1] ? stripTags(gray[1][1]) : "";
    let year = "";
    const y1 = row.match(/class="gsc_a_y"[\s\S]*?>(\d{4})</);
    const y2 = row.match(/class="gsc_a_y"[\s\S]*?gsc_a_h[^>]*>(\d{4})</);
    if (y1) year = y1[1];
    else if (y2) year = y2[1];
    const scholarUrl = path.startsWith("http") ? path : `https://scholar.google.com${path}`;
    rows.push({
      title,
      scholarUrl,
      authors,
      venueLine,
      year,
      combinedSnippet: `${authors}\n${venueLine}`,
    });
  }
  return rows;
}

function decodeBasicHtml(s) {
  return String(s)
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

async function fetchScholarPage(user, cstart, pagesize) {
  const url = new URL("https://scholar.google.com/citations");
  url.searchParams.set("user", user);
  url.searchParams.set("hl", "en");
  url.searchParams.set("oi", "ao");
  url.searchParams.set("cstart", String(cstart));
  url.searchParams.set("pagesize", String(pagesize));
  url.searchParams.set("json", "1");
  const res = await fetch(url, { headers: { "user-agent": SCHOLAR_UA, accept: "application/json,*/*" } });
  if (!res.ok) {
    throw new Error(`Scholar HTTP ${res.status}`);
  }
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Scholar returned non-JSON (blocked or captcha). Try again later or from another network.");
  }
}

async function crossrefResolveDoi(title, year, { useCrossref }) {
  if (!useCrossref) return null;
  const params = new URLSearchParams({
    "query.title": title.slice(0, 400),
    "query.author": "Bajpai",
    rows: "10",
  });
  const res = await fetch(`https://api.crossref.org/works?${params}`, {
    headers: { "User-Agent": API_UA },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const items = data.message?.items || [];
  const wantYear = year ? parseInt(year, 10) : null;
  let best = null;
  let bestScore = 0;
  for (const it of items) {
    const itTitle = it.title?.[0] || "";
    const sim = titleSimilarity(title, itTitle);
    const ty = it.published?.["date-parts"]?.[0]?.[0];
    let score = sim;
    if (wantYear && ty === wantYear) score += 0.15;
    if (score > bestScore) {
      bestScore = score;
      best = it;
    }
  }
  if (bestScore < 0.62 || !best?.DOI) return null;
  return String(best.DOI).toLowerCase();
}

async function openalexResolveDoi(title, year, { useOpenAlex }) {
  if (!useOpenAlex) return null;
  const u = new URL("https://api.openalex.org/works");
  u.searchParams.set("search", title.slice(0, 280));
  u.searchParams.set("per_page", "8");
  u.searchParams.set("mailto", "krishna@krishnabajpai.me");
  const res = await fetch(u, { headers: { "User-Agent": API_UA } });
  if (!res.ok) return null;
  const data = await res.json();
  const results = data.results || [];
  const wantYear = year ? parseInt(year, 10) : null;
  let best = null;
  let bestScore = 0;
  for (const w of results) {
    const sim = titleSimilarity(title, w.title || "");
    const ty = w.publication_year;
    let score = sim;
    if (wantYear && ty === wantYear) score += 0.15;
    if (score > bestScore) {
      bestScore = score;
      best = w;
    }
  }
  if (bestScore < 0.62 || !best?.doi) return null;
  return String(best.doi).replace("https://doi.org/", "").toLowerCase();
}

async function wikidataSelectSparql(query) {
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/sparql-results+json",
      "User-Agent": API_UA,
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const bindings = data.results?.bindings;
  if (!bindings?.length) return null;
  const v = bindings[0]?.item?.value;
  if (!v) return null;
  const m = v.match(/entity\/(Q\d+)$/);
  return m ? m[1] : null;
}

async function verifyDoiMatchesTitle(doi, title) {
  try {
    const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
      headers: { "User-Agent": API_UA },
    });
    if (!res.ok) return true;
    const it = (await res.json()).message;
    const ct = it.title?.[0] || it["short-container-title"]?.[0] || "";
    if (!ct) return true;
    return titleSimilarity(title, ct) >= 0.52;
  } catch {
    return true;
  }
}

async function wikidataItemForDoi(doi) {
  if (!doi) return null;
  const safe = doi.replace(/"/g, '\\"');
  const q = `
SELECT ?item WHERE {
  ?item wdt:P356 ?d .
  FILTER( LCASE(STR(?d)) = LCASE("${safe}") )
} LIMIT 1`;
  return wikidataSelectSparql(q);
}

async function wikidataItemForScholarUrl(scholarUrl) {
  const safe = scholarUrl.replace(/"/g, '\\"');
  const q = `
SELECT ?item WHERE {
  ?item wdt:P973 "${safe}" .
} LIMIT 1`;
  return wikidataSelectSparql(q);
}

function buildPaperCtx(row, aboutQ, doi, arxivId, retrievedRaw) {
  const yearNum = row.year && /^\d{4}$/.test(row.year) ? row.year : "";
  const publishedRaw = yearNum ? `${yearNum}-01-01` : undefined;
  const publishedTimeQS = publishedRaw ? toWikidataTimeQS(publishedRaw) : undefined;
  const retrievedQS =
    toWikidataTimeQS(retrievedRaw) ||
    (() => {
      const d = new Date();
      return `+${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}T00:00:00Z/11`;
    })();
  const retrievedWbTime = toWbTimeValue(
    retrievedRaw ||
      `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, "0")}-${String(new Date().getUTCDate()).padStart(2, "0")}`,
  );

  return {
    url: row.scholarUrl,
    about: aboutQ,
    kind: "paper",
    title: row.title,
    publisher: "",
    publishedRaw,
    publishedTimeQS,
    retrievedQS,
    retrievedWbTime,
    instance: "Q13442814",
    doiArg: doi ? String(doi).trim().toLowerCase() : undefined,
    arxivArg: arxivId || undefined,
    publisherQ: undefined,
  };
}

function extractArxivId(text) {
  const m = stripTags(text).match(/arxiv[:\s]*(\d{4}\.\d{4,5}(?:v\d+)?)/i);
  return m ? m[1] : undefined;
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    printHelp();
    process.exit(0);
  }

  const userId = resolveScholarUserId();
  const about = getArg("--about") || "Q137462720";
  const pagesize = Math.min(100, Math.max(10, parseInt(getArg("--pagesize") || "80", 10)));
  const limit = getArg("--limit") ? parseInt(getArg("--limit"), 10) : Infinity;
  const delayMs = parseInt(getArg("--delay-ms") || "800", 10);
  const submit = hasFlag("--submit");
  const allowNoDoi = hasFlag("--allow-no-doi");
  const useCrossref = !hasFlag("--no-crossref");
  const useOpenAlex = !hasFlag("--no-openalex");
  const summaryArg = getArg("--summary");
  const retrievedArg = getArg("--retrieved");

  console.error(
    `Scholar: user=${userId} oi=ao | https://scholar.google.com/citations?user=${encodeURIComponent(userId)}&hl=en&oi=ao`,
  );

  const apiUrl = process.env.WIKIDATA_API_URL || API_URL_DEFAULT;
  const lgUser = process.env.WIKIDATA_USERNAME || process.env.WIKIMEDIA_USERNAME;
  const lgPass = process.env.WIKIDATA_PASSWORD || process.env.WIKIMEDIA_PASSWORD;

  if (submit && (!lgUser || !lgPass)) {
    console.error("Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD for --submit.");
    process.exit(1);
  }

  const resolveOpts = { useCrossref, useOpenAlex };
  let cstart = 0;
  let created = 0;
  const rawRetrieved =
    retrievedArg ||
    `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, "0")}-${String(new Date().getUTCDate()).padStart(2, "0")}`;

  for (;;) {
    const json = await fetchScholarPage(userId, cstart, pagesize);
    const b = json.B;
    if (!b || typeof b !== "string" || !b.includes("gsc_a_tr")) break;

    const rows = parseScholarTableRows(b);
    if (rows.length === 0) break;

    for (const row of rows) {
      if (created >= limit) {
        console.error(`Stopped (--limit ${limit}).`);
        process.exit(0);
      }

      console.error(`— ${row.title.slice(0, 72)}${row.title.length > 72 ? "…" : ""}`);

      const existingScholar = await wikidataItemForScholarUrl(row.scholarUrl);
      if (existingScholar) {
        console.error(`  skip: P973 already → ${existingScholar}`);
        await sleep(delayMs);
        continue;
      }

      await sleep(delayMs);
      const doiHintList = extractDoiHints(row.combinedSnippet);
      let doi = doiHintList[0] || null;
      const arxivFromSnippet = extractArxivId(row.combinedSnippet);
      if (!doi && useCrossref) {
        doi = await crossrefResolveDoi(row.title, row.year, resolveOpts);
        await sleep(delayMs);
      }
      if (!doi && useOpenAlex) {
        doi = await openalexResolveDoi(row.title, row.year, resolveOpts);
        await sleep(delayMs);
      }
      if (doi) doi = doi.trim().toLowerCase();

      if (doi) {
        const ok = await verifyDoiMatchesTitle(doi, row.title);
        await sleep(delayMs);
        if (!ok) {
          console.error(`  reject DOI ${doi} (Crossref title mismatch)`);
          doi = null;
        }
      }

      if (doi) {
        const existingDoi = await wikidataItemForDoi(doi);
        await sleep(delayMs);
        if (existingDoi) {
          console.error(`  skip: DOI ${doi} → ${existingDoi}`);
          continue;
        }
      } else if (!allowNoDoi) {
        console.error("  skip: no DOI (use --allow-no-doi to create from Scholar metadata only)");
        continue;
      }

      const ctx = buildPaperCtx(row, about, doi || undefined, arxivFromSnippet, rawRetrieved);

      if (!submit) {
        const lines = buildQuickStatementsLines(ctx);
        console.log(lines.join("\n"));
        console.log("");
        created++;
        continue;
      }

      try {
        const entity = buildWikibaseEntity(ctx);
        const { id } = await submitNewItem(
          apiUrl,
          lgUser,
          lgPass,
          entity,
          summaryArg ||
            `Create work from Google Scholar list (scholar user ${userId})`,
        );
        console.error(`  created https://www.wikidata.org/wiki/${id}`);
        console.log(id);
        created++;
        await sleep(Math.max(delayMs, 1500));
      } catch (e) {
        console.error(`  wbeditentity failed: ${e.message || e}`);
        await sleep(delayMs);
      }
    }

    cstart += rows.length;
    await sleep(delayMs);
  }

  console.error(`Done. New batches / items: ${created}.`);
}

await main();
