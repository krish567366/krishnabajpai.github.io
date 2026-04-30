#!/usr/bin/env node
/**
 * Generate QuickStatements TSV for:
 * - creating a Wikidata item for an external article/press link
 * - linking it to a person item via "main subject" (P921)
 *
 * Usage:
 *   node scripts/wikidata-quickstatements.mjs --url "https://example.com/post" --about Q137462720
 *   node scripts/wikidata-quickstatements.mjs --url "..." --about Q137462720 --title "..." --publisher "..." --date 2026-04-24
 *
 * Output:
 *   Prints TSV you can paste into QuickStatements.
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
const titleArg = getArg("--title");
const publisherArg = getArg("--publisher");
const dateArg = getArg("--date");
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
const instance = getArg("--instance") || "Q36774";

const lines = [];
lines.push(["CREATE"].join("\t"));
lines.push(["LAST", "P31", instance].join("\t"));
lines.push(["LAST", "P973", escapeQSString(url)].join("\t"));
if (title) lines.push(["LAST", "P1476", escapeQSString(title)].join("\t"));
if (publishedTime) lines.push(["LAST", "P577", publishedTime].join("\t"));
if (publisher) lines.push(["LAST", "P123", escapeQSString(publisher)].join("\t"));
lines.push(["LAST", "P921", about].join("\t"));

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
