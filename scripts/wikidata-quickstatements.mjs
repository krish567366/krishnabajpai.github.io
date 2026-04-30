#!/usr/bin/env node
/**
 * Generate QuickStatements TSV for creating a Wikidata item for:
 * - an article / press link
 * - a research paper
 * - a video
 *
 * And linking it back to a person QID (you).
 *
 * Usage:
 *   node scripts/wikidata-quickstatements.mjs --url "https://example.com/post" --about Q137462720
 *   node scripts/wikidata-quickstatements.mjs --kind article --url "..." --about Q137462720 --instance Q5707594
 *   node scripts/wikidata-quickstatements.mjs --kind paper --url "..." --about Q137462720 --doi 10.xxxx/yyy --date 2026-04-24
 *   node scripts/wikidata-quickstatements.mjs --kind video --url "..." --about Q137462720 --date 2026-04-24
 *
 * Notes:
 * - This script generates QuickStatements you paste/run (no Wikidata auth needed locally).
 * - For papers we link you via author (P50).
 * - For videos we link you via participant (P710).
 * - For articles we link you via main subject (P921).
 */
import process from "node:process";

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

function toWikidataTime(dateStr) {
  // Accept YYYY-MM-DD or full ISO; output QS time with day precision.
  if (!dateStr) return undefined;
  const m = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return undefined;
  return `+${m[1]}-${m[2]}-${m[3]}T00:00:00Z/11`;
}

function escapeQSString(s) {
  // QuickStatements expects quotes around strings; escape internal quotes.
  return `"${String(s).replaceAll('"', '\\"')}"`;
}

function normalizeKind(value) {
  if (!value) return "article";
  const v = value.trim().toLowerCase();
  if (v === "paper" || v === "research" || v === "scholarly") return "paper";
  if (v === "video" || v === "vedio" || v === "vedios") return "video";
  return "article";
}

function defaultInstanceForKind(kind) {
  // Reasonable defaults:
  // - article: web page (Q36774)
  // - paper: scholarly article (Q13442814)
  // - video: video (Q34508)
  if (kind === "paper") return "Q13442814";
  if (kind === "video") return "Q34508";
  return "Q36774";
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) return undefined;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("text/html") && !ct.includes("application/xhtml+xml")) return undefined;
  return await res.text();
}

function pickMeta(html, propertyOrName) {
  const esc = propertyOrName.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Try <meta property="..."> first, then <meta name="...">
  const re = new RegExp(
    `<meta\\s+(?:property|name)=(["'])${esc}\\1\\s+content=(["'])([^"']+)\\2\\s*/?>`,
    "i",
  );
  const m = html.match(re);
  return m?.[3]?.trim();
}

function pickTitle(html) {
  const og = pickMeta(html, "og:title");
  if (og) return og;
  const tw = pickMeta(html, "twitter:title");
  if (tw) return tw;
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m?.[1]?.trim();
}

function decodeBasicEntities(text) {
  // Lightweight decode for common entities seen in OG/title tags.
  return String(text)
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    // numeric entities (decimal + hex)
    .replaceAll(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replaceAll(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

function normalizeTitleForWikidata(text) {
  if (!text) return text;
  const cleaned = decodeBasicEntities(text).replaceAll(/\s+/g, " ").trim();
  // Keep titles reasonable; long social captions make Wikidata messy.
  const max = 220;
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

function pickPublisher(html) {
  return (
    pickMeta(html, "og:site_name") ||
    pickMeta(html, "application-name") ||
    pickMeta(html, "twitter:site")
  );
}

function pickPublishedDate(html) {
  return (
    pickMeta(html, "article:published_time") ||
    pickMeta(html, "og:published_time") ||
    pickMeta(html, "date") ||
    pickMeta(html, "pubdate")
  );
}

const url = getArg("--url") || getArg("-u");
const about = getArg("--about") || "Q137462720";
const kind = normalizeKind(getArg("--kind"));
const titleArg = getArg("--title");
const publisherArg = getArg("--publisher");
const dateArg = getArg("--date");
const doiArg = getArg("--doi");
const arxivArg = getArg("--arxiv");
const retrievedArg = getArg("--retrieved"); // YYYY-MM-DD

requireArg("--url", url);
requireArg("--about", about);

const retrieved =
  toWikidataTime(retrievedArg) ||
  (() => {
    const d = new Date();
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `+${yyyy}-${mm}-${dd}T00:00:00Z/11`;
  })();

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
    // ignore fetch errors; user can pass fields explicitly
  }
}

title = normalizeTitleForWikidata(title);

// Normalize date if we scraped full ISO.
const publishedTime = toWikidataTime(published);

// Conservative defaults:
// - instance of: web page (Q36774)
// - described at URL (P973) = URL
// - title (P1476) = title (string)
// - published date (P577) if available
// - publisher (P123) as string fallback (P2093 author name style isn't right here; keep it minimal)
// - main subject (P921) = about person QID
//
// If you want "news article" (Q5707594) or "press release" (Q1999706), pass --instance Q...
const instance = getArg("--instance") || defaultInstanceForKind(kind);

const lines = [];
lines.push(["CREATE"].join("\t"));
lines.push(["LAST", "P31", instance].join("\t"));
lines.push(["LAST", "P973", escapeQSString(url)].join("\t"));
if (title) lines.push(["LAST", "P1476", escapeQSString(title)].join("\t"));
if (publishedTime) lines.push(["LAST", "P577", publishedTime].join("\t"));
if (publisher) lines.push(["LAST", "P123", escapeQSString(publisher)].join("\t"));

// Link the created item back to the person.
if (kind === "paper") {
  // author
  lines.push(["LAST", "P50", about].join("\t"));
  if (doiArg) lines.push(["LAST", "P356", escapeQSString(doiArg)].join("\t"));
  if (arxivArg) lines.push(["LAST", "P818", escapeQSString(arxivArg)].join("\t"));
} else if (kind === "video") {
  // participant / featured person
  lines.push(["LAST", "P710", about].join("\t"));
} else {
  // article / press
  lines.push(["LAST", "P921", about].join("\t"));
}

// Add a reference to the "described at URL" statement and (optionally) to title/published date.
// QuickStatements can add refs to existing statements by repeating the same property+value and appending S854/S813.
lines.push(["LAST", "P973", escapeQSString(url), "S854", escapeQSString(url), "S813", retrieved].join("\t"));
if (title) {
  lines.push(["LAST", "P1476", escapeQSString(title), "S854", escapeQSString(url), "S813", retrieved].join("\t"));
}
if (publishedTime) {
  lines.push(["LAST", "P577", publishedTime, "S854", escapeQSString(url), "S813", retrieved].join("\t"));
}

process.stdout.write(lines.join("\n") + "\n");
