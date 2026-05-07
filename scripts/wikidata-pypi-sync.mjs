#!/usr/bin/env node
/**
 * Discover PyPI projects for an account via XML-RPC `user_packages`, fetch each project's JSON API,
 * skip items already on Wikidata (P5568 / PyPI project id), optionally create items with references
 * **stated in: Python Package Index (Q2984686)** and multiple P854 URLs (project page + JSON + docs/source).
 * With --submit, ensures P800 (notable work) on --about for each package Wikidata item (existing or new), unless --no-notable-work.
 *
 * (Historic note: if you ever used a tool that set **P248 = Q8447**, that item is *French Wikipedia* — not
 * GitHub. GitHub should be **Q364**; PyPI registry should be **Q2984686**.)
 *
 * Usage:
 *   node scripts/wikidata-pypi-sync.mjs --user PYPI_USERNAME     # list packages only (fast)
 *   node scripts/wikidata-pypi-sync.mjs --user U --dry-run       # check P5568 + show would-create (slow)
 *   node scripts/wikidata-pypi-sync.mjs --packages foo,bar --submit
 *
 * Env:
 *   PYPI_USER   Default PyPI username when --user omitted
 *   (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
 */
import process from "node:process";
import {
  API_URL_DEFAULT,
  toWbTimeValue,
  buildWikibasePypiPackageEntity,
  pypiRefSnaks,
  submitAddP800NotableWorkIfMissing,
  submitNewItemWithRetry,
  wikidataDuplicateItemIdFromErrorMessage,
} from "./lib/wikidata-item-core.mjs";

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

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function printHelp() {
  console.log(`wikidata-pypi-sync.mjs

Arguments:
  --user NAME        PyPI username (see also env PYPI_USER)
  --packages A,B,C   Comma-separated project names (skips XML-RPC discovery)
  --about QID        Developer (P178); default Q137462720
  --limit N          Stop after N new items
  --submit           Create items via Wikidata API (checks P5568 first)
  --dry-run          Check each project against P5568 and print would-create (no writes). For --user, use this when you want a full-profile preview (slow). --packages without --submit implies --dry-run.
  --delay-ms MS      Pause between network calls (default 1100; PyPI rate-limits XML-RPC)
  --summary TEXT     Edit summary (--submit)
  --retrieved YYYY-MM-DD   Retrieval date for P813 (default: today UTC)
  --no-notable-work  Do not add P800 on --about (default: link each package as notable work)

Environment:
  PYPI_USER
  (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
`);
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

async function wikidataItemForPypiProject(projectName) {
  const safe = String(projectName).trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const q = `
SELECT ?item WHERE {
  ?item wdt:P5568 ?v .
  FILTER( LCASE(STR(?v)) = LCASE("${safe}") )
} LIMIT 1`;
  return wikidataSelectSparql(q);
}

function xmlRpcParamString(s) {
  const escaped = String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return `<param><value><string>${escaped}</string></value></param>`;
}

async function pypiXmlRpcUserPackages(username) {
  const body = `<?xml version="1.0"?><methodCall><methodName>user_packages</methodName><params>${xmlRpcParamString(username)}</params></methodCall>`;
  const res = await fetch("https://pypi.org/pypi", {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      "User-Agent": API_UA,
    },
    body,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`PyPI XML-RPC HTTP ${res.status}: ${text.slice(0, 300)}`);
  if (text.includes("<fault>")) {
    throw new Error(`PyPI XML-RPC fault: ${text.slice(0, 500)}`);
  }
  const out = [];
  const re =
    /<value><string>(Owner|Maintainer)<\/string><\/value>\s*<value><string>([^<]*)<\/string><\/value>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ role: m[1], name: m[2] });
  }
  return out;
}

async function fetchPypiProjectJson(packageName) {
  const u = `https://pypi.org/pypi/${encodeURIComponent(packageName)}/json`;
  const res = await fetch(u, {
    headers: { "User-Agent": API_UA, Accept: "application/json" },
  });
  if (!res.ok) return null;
  return await res.json();
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    printHelp();
    process.exit(0);
  }

  const packagesArg = getArg("--packages");
  const pypiAccount = (getArg("--user") || process.env.PYPI_USER || "").trim();
  let packageNames = [];
  if (packagesArg) {
    packageNames = packagesArg
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  } else if (pypiAccount) {
    await sleep(parseInt(getArg("--delay-ms") || "1100", 10));
    let pairs;
    try {
      pairs = await pypiXmlRpcUserPackages(pypiAccount);
    } catch (e) {
      console.error(String(e.message || e));
      process.exit(1);
    }
    const seen = new Set();
    for (const { name } of pairs) {
      if (!name || seen.has(name)) continue;
      seen.add(name);
      packageNames.push(name);
    }
    if (packageNames.length === 0) {
      console.error(`No Owner/Maintainer packages for PyPI user "${pypiAccount}" (XML-RPC returned empty).`);
    }
  } else {
    console.error("Provide --user PYPI_USERNAME or --packages a,b,c (or env PYPI_USER).");
    process.exit(1);
  }

  const about = getArg("--about") || "Q137462720";
  const limit = getArg("--limit") ? parseInt(getArg("--limit"), 10) : Infinity;
  const delayMs = parseInt(getArg("--delay-ms") || "1100", 10);
  const submit = hasFlag("--submit");
  const dryRun = hasFlag("--dry-run");
  const profileFromUser = Boolean(pypiAccount && !packagesArg);
  const summaryArg = getArg("--summary");
  const retrievedArg = getArg("--retrieved");

  const apiUrl = process.env.WIKIDATA_API_URL || API_URL_DEFAULT;
  const lgUser = process.env.WIKIDATA_USERNAME || process.env.WIKIMEDIA_USERNAME;
  const lgPass = process.env.WIKIDATA_PASSWORD || process.env.WIKIMEDIA_PASSWORD;

  if (submit && dryRun) {
    console.error("Use only one of --submit or --dry-run.");
    process.exit(1);
  }

  if (submit && (!lgUser || !lgPass)) {
    console.error("Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD for --submit.");
    process.exit(1);
  }

  if (profileFromUser && !submit && !dryRun) {
    for (const pkg of packageNames) {
      console.log(pkg);
    }
    console.error(
      `Listed ${packageNames.length} package(s). Add --submit (and Wikidata credentials) to create items, or --dry-run to check each package against P5568 without creating.`,
    );
    process.exit(0);
  }

  const packagesExplicit = Boolean(packagesArg);
  const wikidataPreview = dryRun || (!submit && packagesExplicit);

  console.error(
    `PyPI → Wikidata (P178=${about}) | ${packagesArg ? `${packageNames.length} package(s) from --packages` : `user ${pypiAccount}`} | ${submit ? "SUBMIT" : wikidataPreview ? "dry-run" : "list"}`,
  );

  const rawRetrieved =
    retrievedArg ||
    `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, "0")}-${String(new Date().getUTCDate()).padStart(2, "0")}`;
  const retrievedWbTime = toWbTimeValue(rawRetrieved);

  let created = 0;
  for (const pkg of packageNames) {
    if (created >= limit) {
      console.error(`Stopped (--limit ${limit}).`);
      break;
    }

    console.error(`— ${pkg.slice(0, 72)}${pkg.length > 72 ? "…" : ""}`);

    await sleep(delayMs);

    let existing = null;
    try {
      existing = await wikidataItemForPypiProject(pkg);
    } catch {
      existing = null;
    }
    if (existing) {
      console.error(`  skip: P5568 already → ${existing}`);
      if (submit && !hasFlag("--no-notable-work")) {
        try {
          const projectPage = `https://pypi.org/project/${encodeURIComponent(pkg)}/`;
          const jsonUrl = `https://pypi.org/pypi/${encodeURIComponent(pkg)}/json`;
          const ref = pypiRefSnaks(projectPage, retrievedWbTime, [jsonUrl]);
          const p800 = await submitAddP800NotableWorkIfMissing(
            apiUrl,
            lgUser,
            lgPass,
            about,
            existing,
            ref,
            summaryArg || `P800 notable work: PyPI ${pkg} (${existing})`,
          );
          console.error(
            p800.added
              ? `  P800 on ${about}: added → ${existing}`
              : `  P800 on ${about}: already lists ${existing}`,
          );
          await sleep(Math.max(delayMs, 800));
        } catch (e) {
          console.error(`  P800 failed: ${e?.message || e}`);
        }
      }
      continue;
    }

    const json = await fetchPypiProjectJson(pkg);
    await sleep(delayMs);
    if (!json?.info?.name) {
      console.error(`  skip: PyPI JSON not found or invalid for "${pkg}"`);
      continue;
    }

    if (!submit) {
      console.error(`  dry-run: would create for https://pypi.org/project/${encodeURIComponent(json.info.name)}/`);
      created++;
      continue;
    }

    try {
      const entity = buildWikibasePypiPackageEntity(json, {
        about,
        retrievedWbTime,
        pypiUser: pypiAccount || undefined,
      });
      const { id } = await submitNewItemWithRetry(
        apiUrl,
        lgUser,
        lgPass,
        entity,
        summaryArg || `Create PyPI package (${json.info.name})`,
        { maxAttempts: 5, baseDelayMs: Math.max(1200, delayMs) },
      );
      console.error(`  created https://www.wikidata.org/wiki/${id}`);
      console.log(id);
      created++;
      if (!hasFlag("--no-notable-work")) {
        try {
          const nameNorm = json.info.name;
          const projectPage = `https://pypi.org/project/${encodeURIComponent(nameNorm)}/`;
          const jsonUrl = `https://pypi.org/pypi/${encodeURIComponent(nameNorm)}/json`;
          const ref = pypiRefSnaks(projectPage, retrievedWbTime, [jsonUrl]);
          const p800 = await submitAddP800NotableWorkIfMissing(
            apiUrl,
            lgUser,
            lgPass,
            about,
            id,
            ref,
            summaryArg || `P800 notable work: PyPI ${nameNorm} (${id})`,
          );
          console.error(
            p800.added
              ? `  P800 on ${about}: added → ${id}`
              : `  P800 on ${about}: already lists ${id}`,
          );
        } catch (e) {
          console.error(`  P800 failed: ${e?.message || e}`);
        }
      }
      await sleep(Math.max(delayMs, 1500));
    } catch (e) {
      const msg = String(e?.message || e);
      console.error(`  wbeditentity failed: ${msg}`);
      const dupQ = wikidataDuplicateItemIdFromErrorMessage(msg);
      if (dupQ) {
        console.error(
          `  existing item ${dupQ} (label conflict — item may lack P5568; linking P800 on ${about})`,
        );
        if (submit && !hasFlag("--no-notable-work")) {
          try {
            console.error(
              "  P800: calling Wikidata (fetch claims + login + wbeditentity) — usually 10–40s…",
            );
            const nameNorm = json.info.name;
            const projectPage = `https://pypi.org/project/${encodeURIComponent(nameNorm)}/`;
            const jsonUrl = `https://pypi.org/pypi/${encodeURIComponent(nameNorm)}/json`;
            const ref = pypiRefSnaks(projectPage, retrievedWbTime, [jsonUrl]);
            const p800 = await submitAddP800NotableWorkIfMissing(
              apiUrl,
              lgUser,
              lgPass,
              about,
              dupQ,
              ref,
              summaryArg || `P800 notable work: PyPI ${nameNorm} (${dupQ})`,
            );
            console.error(
              p800.added
                ? `  P800 on ${about}: added → ${dupQ}`
                : `  P800 on ${about}: already lists ${dupQ}`,
            );
          } catch (e2) {
            console.error(`  P800 failed: ${e2?.message || e2}`);
          }
        }
      }
      await sleep(delayMs);
    }
  }

  console.error(
    submit ? `Done. Wikidata items created: ${created}.` : `Done. Dry-run, packages without P5568: ${created}.`,
  );
}

await main();
