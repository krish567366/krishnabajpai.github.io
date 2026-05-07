#!/usr/bin/env node
/**
 * Merge person statements for Q137462720 from scripts/data/wikidata-person-enrich.json
 * (and optionally every static public page from src/App.tsx) — aligned with krishnabajpai.me.
 *
 * P973: qualifier P407 = content language (manifest contentLanguageQ, default Q7979 British English),
 *         references: described URL + profile + ORCID + Google Scholar + Crunchbase + optional paper URLs + P813.
 *         Existing P973 / P856 / identifiers / P101 / P106 are updated (same statement id) when references are incomplete or P407 is missing/wrong.
 * Other new claims use the same multi-P854 reference (profile + authorities + papers + P813).
 * P800 (notable work): resolves items from DOIs in referenceExtraP854 (WDQS, P356). Optional non-empty arrays:
 * notableWork (Q-ids), notableWorkByGithubRepo (repo URLs, P1324), notableWorkByPypi (package names, P5568).
 *
 * Usage:
 *   node scripts/wikidata-person-enrich.mjs
 *   node scripts/wikidata-person-enrich.mjs --include-site-routes   # blog + case studies + /tools URLs, etc.
 *   node scripts/wikidata-person-enrich.mjs --include-site-routes --max-p973 40
 *   node scripts/wikidata-person-enrich.mjs --submit
 *
 * Env (--submit): WIKIDATA_USERNAME, WIKIDATA_PASSWORD
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import {
  API_URL_DEFAULT,
  toWbTimeValue,
  fetchWikidataEntity,
  submitEditEntity,
  buildPersonEnrichReference,
  canonicalItemQid,
  mergePersonEnrichRefSnaks,
  normalizeDoiForWikidataQuery,
  normalizeReferenceUrl,
  personEnrichReferenceNeedsMerge,
  qualifiersLanguageOfWork,
  wikidataClaimItem,
  wikidataClaimString,
  wikidataItemIdForDoi,
  wikidataItemIdForGithubRepoUrl,
  wikidataItemIdForPypiPackage,
} from "./lib/wikidata-item-core.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEFAULT_ROUTE_EXCLUDE = [
  "/privacy",
  "/terms",
  "/faq",
  "/rss",
  "/feed",
  "/rss-feed",
  "/search",
  "/webinars",
  "/consortium-application",
  "/consortium-process",
];

const P973_CHUNK = 22;

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function getArg(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** Same logical URL as in reference P854 (Scholar, LinkedIn, DOI, trailing slash). */
function canonicalUrl(u) {
  const n = normalizeReferenceUrl(u);
  if (n) return n;
  return String(u ?? "").trim().replace(/\/$/, "");
}

function normQid(q) {
  const m = String(q).trim().match(/^Q?(\d+)$/i);
  return m ? `Q${m[1]}` : null;
}

function existingUrlSet(claims, prop) {
  const list = claims?.[prop];
  if (!Array.isArray(list)) return new Set();
  const out = new Set();
  for (const st of list) {
    const v = st.mainsnak?.datavalue?.value;
    if (typeof v === "string") out.add(canonicalUrl(v));
  }
  return out;
}

function existingItemQidSet(claims, prop) {
  const list = claims?.[prop];
  if (!Array.isArray(list)) return new Set();
  const out = new Set();
  for (const st of list) {
    const q = canonicalItemQid(st.mainsnak?.datavalue?.value);
    if (q) out.add(q);
  }
  return out;
}

function firstStringClaimStatementForValue(claims, prop, rawValue) {
  const list = claims?.[prop];
  if (!Array.isArray(list)) return null;
  const want = String(rawValue).trim();
  for (const st of list) {
    const v = st.mainsnak?.datavalue?.value;
    if (typeof v === "string" && String(v).trim() === want) return st;
  }
  return null;
}

function firstItemClaimStatementForQid(claims, prop, qid) {
  const want = canonicalItemQid(qid);
  if (!want) return null;
  const list = claims?.[prop];
  if (!Array.isArray(list)) return null;
  for (const st of list) {
    const got = canonicalItemQid(st.mainsnak?.datavalue?.value);
    if (got && got === want) return st;
  }
  return null;
}

function statementLanguageOfWorkQ(st) {
  const id = st.qualifiers?.P407?.[0]?.datavalue?.value?.id;
  return id ? normQid(id) : null;
}

function p973QualifierNeedsUpdate(st, langQ) {
  const want = normQid(langQ || "Q7979");
  if (!want) return false;
  const got = statementLanguageOfWorkQ(st);
  if (!got) return true;
  return got !== want;
}

/**
 * @param {object} st
 * @param {Record<string, object[]>} mergedSnaks
 * @param {Record<string, object[]>} [qualifiers]
 * @param {string[]} [qualifiersOrder]
 */
function claimUpdateWithRefs(st, mergedSnaks, qualifiers = null, qualifiersOrder = null) {
  const out = {
    id: st.id,
    mainsnak: st.mainsnak,
    type: "statement",
    rank: st.rank || "normal",
    references: [{ snaks: mergedSnaks }],
  };
  const q = qualifiers != null ? qualifiers : st.qualifiers;
  if (q && typeof q === "object" && Object.keys(q).length > 0) {
    out.qualifiers = q;
    out["qualifiers-order"] = qualifiersOrder?.length
      ? qualifiersOrder
      : st["qualifiers-order"] || Object.keys(q);
  }
  return out;
}

/**
 * @param {string} appTsxPath
 * @param {string} siteOrigin
 * @param {string[]} excludePrefixes
 */
function collectStaticSiteUrls(appTsxPath, siteOrigin, excludePrefixes) {
  const text = readFileSync(appTsxPath, "utf8");
  const origin = siteOrigin.replace(/\/$/, "");
  const paths = new Set();
  const re = /path="([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const p = m[1];
    if (p.includes(":") || p === "*") continue;
    const excluded = excludePrefixes.some((pre) => p === pre || (pre !== "/" && p.startsWith(pre)));
    if (excluded) continue;
    paths.add(p);
  }
  const urls = [];
  for (const p of paths) {
    if (p === "/") urls.push(`${origin}/`);
    else urls.push(`${origin}${p}`);
  }
  return [...new Set(urls.map((u) => canonicalUrl(u)))].sort();
}

function printHelp() {
  console.log(`wikidata-person-enrich.mjs

  --config PATH           JSON manifest (default: scripts/data/wikidata-person-enrich.json)
  --include-site-routes   Add P973 for static routes from src/App.tsx (blog posts, tools, case studies, …)
  --max-p973 N            Cap **new** P973 only (does not limit reference/P407 upgrades on existing P973)
  --submit                Apply via Wikidata API
  --update-description    Set English description from manifest
  --retrieved YYYY-MM-DD
  --summary TEXT

Optional manifest keys (omit if unused): occupation (P106 Q-ids), notableWork, notableWorkByGithubRepo, notableWorkByPypi.
  occupation: matches site jobTitle / JSON-LD hasOccupation — e.g. Q1650915 researcher, Q3789906 solutions architect (industry term for systems architect).
P800 also uses DOIs parsed from referenceExtraP854.

Env (--submit): WIKIDATA_USERNAME, WIKIDATA_PASSWORD
`);
}

function countStatements(claimsObj) {
  let n = 0;
  for (const arr of Object.values(claimsObj)) {
    if (Array.isArray(arr)) n += arr.length;
  }
  return n;
}

async function submitBatchedP973(apiUrl, lgUser, lgPass, itemId, partial, summaryBase) {
  const p973 = partial.claims.P973;
  if (!p973 || p973.length <= P973_CHUNK) {
    const { raw } = await submitEditEntity(apiUrl, lgUser, lgPass, itemId, partial, summaryBase);
    if (raw.success !== undefined) console.error("success:", raw.success);
    if (raw.entity?.id) console.error("entity:", raw.entity.id);
    return;
  }

  const { P973, ...rest } = partial.claims;
  const firstClaims = { ...rest, P973: p973.slice(0, P973_CHUNK) };
  const firstPartial = { claims: firstClaims };
  if (partial.descriptions) firstPartial.descriptions = partial.descriptions;

  let batch = 1;
  const { raw: raw1 } = await submitEditEntity(
    apiUrl,
    lgUser,
    lgPass,
    itemId,
    firstPartial,
    `${summaryBase} (batch ${batch}, P973+other)`,
  );
  if (raw1.success !== undefined) console.error("success:", raw1.success);
  if (raw1.entity?.id) console.error("entity:", raw1.entity.id);

  for (let i = P973_CHUNK; i < p973.length; i += P973_CHUNK) {
    batch++;
    await sleep(1800);
    const chunk = p973.slice(i, i + P973_CHUNK);
    const { raw } = await submitEditEntity(
      apiUrl,
      lgUser,
      lgPass,
      itemId,
      { claims: { P973: chunk } },
      `${summaryBase} (batch ${batch}, P973 only)`,
    );
    if (raw.success !== undefined) console.error(`success (batch ${batch}):`, raw.success);
  }
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    printHelp();
    process.exit(0);
  }

  const submit = hasFlag("--submit");
  const updateDescription = hasFlag("--update-description");
  const includeSiteRoutes = hasFlag("--include-site-routes");
  const configPath = getArg("--config") || join(__dirname, "data", "wikidata-person-enrich.json");
  const summaryArg = getArg("--summary");
  const retrievedArg = getArg("--retrieved");
  const maxP973Arg = getArg("--max-p973");

  const apiUrl = process.env.WIKIDATA_API_URL || API_URL_DEFAULT;
  const lgUser = process.env.WIKIDATA_USERNAME || process.env.WIKIMEDIA_USERNAME;
  const lgPass = process.env.WIKIDATA_PASSWORD || process.env.WIKIMEDIA_PASSWORD;

  if (submit && (!lgUser || !lgPass)) {
    console.error("Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD for --submit.");
    process.exit(1);
  }

  /** @type {{ itemId: string, siteOrigin?: string, appRoutesFile?: string, excludeRoutePrefixes?: string[], referenceProfileUrl: string, crunchbaseUrl?: string, referenceExtraP854?: string[], notableWork?: string[], notableWorkByGithubRepo?: string[], notableWorkByPypi?: string[], enDescription?: string, officialWebsite?: string, describedAt?: string[], identifiers?: Record<string, string>, fieldOfWork?: string[], occupation?: string[] }} */
  const manifest = JSON.parse(readFileSync(configPath, "utf8"));
  const itemId = manifest.itemId || "Q137462720";
  const profileUrl = manifest.referenceProfileUrl || "https://krishnabajpai.me/about/krishna-bajpai";
  const siteOrigin = manifest.siteOrigin || "https://krishnabajpai.me";
  const idMap = manifest.identifiers || {};
  const extraRefUrls = [...(manifest.referenceExtraP854 || [])];
  const crunchbaseUrl = manifest.crunchbaseUrl;

  const rawRetrieved =
    retrievedArg ||
    `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, "0")}-${String(new Date().getUTCDate()).padStart(2, "0")}`;
  const retrievedWb = toWbTimeValue(rawRetrieved);

  const refBase = {
    profileUrl,
    retrievedWbTime: retrievedWb,
    identifiers: idMap,
    crunchbaseUrl,
    extraP854: extraRefUrls,
  };
  const refFor = (citedUrls) =>
    buildPersonEnrichReference({
      ...refBase,
      citedUrls: Array.isArray(citedUrls) ? citedUrls : citedUrls ? [citedUrls] : [],
    });

  let describedPool = [...(manifest.describedAt || [])].map((u) => canonicalUrl(u));
  if (includeSiteRoutes) {
    const appRelative = manifest.appRoutesFile || join("..", "src", "App.tsx");
    const appPath = join(__dirname, appRelative);
    const exclude = manifest.excludeRoutePrefixes?.length
      ? manifest.excludeRoutePrefixes
      : DEFAULT_ROUTE_EXCLUDE;
    const fromRoutes = collectStaticSiteUrls(appPath, siteOrigin, exclude);
    console.error(`--include-site-routes: ${fromRoutes.length} static URLs from App.tsx`);
    describedPool = [...new Set([...describedPool, ...fromRoutes])];
  }

  const entity = await fetchWikidataEntity(apiUrl, itemId, "claims");
  const claims = entity.claims || {};
  const outClaims = {};

  const p973Have = existingUrlSet(claims, "P973");
  let urlsToAdd = describedPool.filter((u) => u && !p973Have.has(u));
  if (maxP973Arg) {
    const cap = parseInt(maxP973Arg, 10);
    if (!Number.isNaN(cap) && cap >= 0) {
      const before = urlsToAdd.length;
      urlsToAdd = urlsToAdd.slice(0, cap);
      if (before > urlsToAdd.length) {
        console.error(`--max-p973 ${cap}: adding ${urlsToAdd.length} of ${before} new P973 candidates`);
      }
    }
  }

  const p973LangQ = manifest.contentLanguageQ || "Q7979";
  const p973Qual = qualifiersLanguageOfWork(p973LangQ);
  const p973Out = [];

  if (urlsToAdd.length) {
    p973Out.push(
      ...urlsToAdd.map((u) => wikidataClaimString("P973", u, refFor(u), p973Qual)),
    );
    console.error(
      `P973 described at URL: add ${urlsToAdd.length} (P407=${p973LangQ}, multi P854 + P813)`,
    );
    if (urlsToAdd.length <= 30) {
      console.error(`  ${urlsToAdd.join("\n  ")}`);
    } else {
      console.error(`  ${urlsToAdd.slice(0, 15).join("\n  ")}`);
      console.error(`  … +${urlsToAdd.length - 15} more`);
    }
  }

  for (const st of claims.P973 || []) {
    const raw = st.mainsnak?.datavalue?.value;
    if (typeof raw !== "string" || !st.id) continue;
    if (st.mainsnak?.snaktype && st.mainsnak.snaktype !== "value") continue;
    const u = canonicalUrl(raw);
    const targetRef = refFor(u);
    const needsRef = personEnrichReferenceNeedsMerge(st, targetRef);
    const needsQual = p973QualifierNeedsUpdate(st, p973LangQ);
    if (!needsRef && !needsQual) continue;
    const merged = mergePersonEnrichRefSnaks(st, targetRef);
    p973Out.push(
      claimUpdateWithRefs(st, merged, needsQual ? p973Qual : null, needsQual ? ["P407"] : null),
    );
    console.error(
      `P973: update ${u}${needsRef ? "; merge P854" : ""}${needsQual ? "; set P407" : ""}`,
    );
  }

  if (p973Out.length) outClaims.P973 = p973Out;

  if (manifest.officialWebsite) {
    const want = canonicalUrl(manifest.officialWebsite);
    const have = existingUrlSet(claims, "P856");
    if (!have.has(want)) {
      outClaims.P856 = [wikidataClaimString("P856", want, refFor(want))];
      console.error(`P856 official website: add ${want}`);
    } else {
      for (const st of claims.P856 || []) {
        const v = st.mainsnak?.datavalue?.value;
        if (typeof v !== "string" || canonicalUrl(v) !== want || !st.id) continue;
        const targetRef = refFor(want);
        if (!personEnrichReferenceNeedsMerge(st, targetRef)) break;
        const merged = mergePersonEnrichRefSnaks(st, targetRef);
        outClaims.P856 = [claimUpdateWithRefs(st, merged)];
        console.error(`P856: update references for ${want}`);
        break;
      }
    }
  }

  for (const [pid, value] of Object.entries(idMap)) {
    if (!/^P\d+$/.test(pid) || !value) continue;
    const stMatch = firstStringClaimStatementForValue(claims, pid, value);
    if (!stMatch) {
      const anySt = (claims[pid] || [])[0];
      const cur = anySt?.mainsnak?.datavalue?.value;
      const curStr = typeof cur === "string" ? cur : null;
      if (curStr != null && String(curStr).trim() !== String(value).trim()) {
        console.error(`${pid}: skip (existing "${curStr}" ≠ manifest "${value}")`);
        continue;
      }
      if (!outClaims[pid]) outClaims[pid] = [];
      outClaims[pid].push(wikidataClaimString(pid, value, refFor([])));
      console.error(`${pid}: add "${value}"`);
      continue;
    }
    const targetRef = refFor([]);
    if (!personEnrichReferenceNeedsMerge(stMatch, targetRef)) continue;
    const merged = mergePersonEnrichRefSnaks(stMatch, targetRef);
    if (!outClaims[pid]) outClaims[pid] = [];
    outClaims[pid].push(claimUpdateWithRefs(stMatch, merged));
    console.error(`${pid}: update references for "${value}"`);
  }

  const foQidsSorted = [...new Set((manifest.fieldOfWork || []).map(normQid).filter(Boolean))].sort();
  const foHave = existingItemQidSet(claims, "P101");
  const foAdd = foQidsSorted.filter((id) => !foHave.has(id));
  const p101Out = [];
  if (foAdd.length) {
    p101Out.push(...foAdd.map((q) => wikidataClaimItem("P101", q, refFor([]))));
    console.error(`P101 field of work: add ${foAdd.join(", ")}`);
  }
  for (const qid of foQidsSorted) {
    const st = firstItemClaimStatementForQid(claims, "P101", qid);
    if (!st) continue;
    const targetRef = refFor([]);
    if (!personEnrichReferenceNeedsMerge(st, targetRef)) continue;
    const merged = mergePersonEnrichRefSnaks(st, targetRef);
    p101Out.push(claimUpdateWithRefs(st, merged));
    console.error(`P101 field of work: update references for ${qid}`);
  }
  if (p101Out.length) outClaims.P101 = p101Out;

  const occQidsSorted = [...new Set((manifest.occupation || []).map(normQid).filter(Boolean))].sort();
  const occHave = existingItemQidSet(claims, "P106");
  const occAdd = occQidsSorted.filter((id) => !occHave.has(id));
  const p106Out = [];
  if (occAdd.length) {
    p106Out.push(...occAdd.map((q) => wikidataClaimItem("P106", q, refFor([]))));
    console.error(`P106 occupation: add ${occAdd.join(", ")}`);
  }
  for (const qid of occQidsSorted) {
    const st = firstItemClaimStatementForQid(claims, "P106", qid);
    if (!st) continue;
    const targetRef = refFor([]);
    if (!personEnrichReferenceNeedsMerge(st, targetRef)) continue;
    const merged = mergePersonEnrichRefSnaks(st, targetRef);
    p106Out.push(claimUpdateWithRefs(st, merged));
    console.error(`P106 occupation: update references for ${qid}`);
  }
  if (p106Out.length) outClaims.P106 = p106Out;

  const WDQS_DELAY_MS = 400;
  const notableTargets = [];
  const seenP800Q = new Set();
  const noteP800 = (qid, label) => {
    const q = normQid(qid);
    if (!q || seenP800Q.has(q)) return;
    seenP800Q.add(q);
    notableTargets.push({ q, label });
  };

  if (Array.isArray(manifest.notableWork) && manifest.notableWork.length) {
    for (const raw of manifest.notableWork) noteP800(raw, "notableWork");
  }
  for (const raw of extraRefUrls) {
    const doi = normalizeDoiForWikidataQuery(raw);
    if (!doi || !/^10\.\d{4,}\//.test(doi)) continue;
    const workId = await wikidataItemIdForDoi(doi);
    await sleep(WDQS_DELAY_MS);
    if (workId) noteP800(workId, `DOI ${doi}`);
    else console.error(`P800: no Wikidata item for DOI ${doi}`);
  }
  if (Array.isArray(manifest.notableWorkByGithubRepo) && manifest.notableWorkByGithubRepo.length) {
    for (const url of manifest.notableWorkByGithubRepo) {
      const workId = await wikidataItemIdForGithubRepoUrl(url);
      await sleep(WDQS_DELAY_MS);
      if (workId) noteP800(workId, `GitHub ${url}`);
      else console.error(`P800: no Wikidata item for ${url}`);
    }
  }
  if (Array.isArray(manifest.notableWorkByPypi) && manifest.notableWorkByPypi.length) {
    for (const pkg of manifest.notableWorkByPypi) {
      if (!String(pkg).trim()) continue;
      const workId = await wikidataItemIdForPypiPackage(pkg);
      await sleep(WDQS_DELAY_MS);
      if (workId) noteP800(workId, `PyPI ${pkg}`);
      else console.error(`P800: no Wikidata item for PyPI project ${pkg}`);
    }
  }

  const p800Have = existingItemQidSet(claims, "P800");
  const p800Out = [];
  for (const { q, label } of notableTargets) {
    if (!p800Have.has(q)) {
      p800Out.push(wikidataClaimItem("P800", q, refFor([])));
      console.error(`P800 notable work: add ${q} (${label})`);
    }
  }
  for (const { q } of notableTargets) {
    const st = firstItemClaimStatementForQid(claims, "P800", q);
    if (!st) continue;
    const targetRef = refFor([]);
    if (!personEnrichReferenceNeedsMerge(st, targetRef)) continue;
    const merged = mergePersonEnrichRefSnaks(st, targetRef);
    p800Out.push(claimUpdateWithRefs(st, merged));
    console.error(`P800 notable work: update references for ${q}`);
  }
  if (p800Out.length) outClaims.P800 = p800Out;

  const partial = { claims: outClaims };
  if (updateDescription && manifest.enDescription) {
    partial.descriptions = {
      en: { language: "en", value: manifest.enDescription.slice(0, 250) },
    };
    console.error(`en description: set (${manifest.enDescription.length} chars)`);
  }

  const nClaimProps = Object.keys(outClaims).length;
  const hasDesc = Boolean(partial.descriptions);
  if (nClaimProps === 0 && !hasDesc) {
    console.error("Nothing to merge or upgrade (manifest already satisfied or only conflicts).");
    process.exit(0);
  }

  console.error(`Total claim operations: ${countStatements(outClaims)}${hasDesc ? " + description" : ""}`);

  if (!submit) {
    console.error("\nDry-run only. Re-run with --submit to apply.");
    process.exit(0);
  }

  const summaryBase =
    summaryArg || `Enrich Q137462720 from site manifest & routes (${canonicalUrl(profileUrl)})`;

  await submitBatchedP973(apiUrl, lgUser, lgPass, itemId, partial, summaryBase);
}

await main();
