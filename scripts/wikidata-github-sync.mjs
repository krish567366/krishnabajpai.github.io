#!/usr/bin/env node
/**
 * List public GitHub repos for a user (or org), skip those already wired on Wikidata via P1324,
 * then optionally create items (--submit) with GitHub-backed references on each claim.
 * With --submit, ensures P800 (notable work) on --about for each repo Wikidata item (existing or new), unless --no-notable-work.
 *
 * Usage:
 *   node scripts/wikidata-github-sync.mjs --user YOUR_LOGIN
 *   node scripts/wikidata-github-sync.mjs --user YOUR_LOGIN --submit
 *   node scripts/wikidata-github-sync.mjs --org ORG_LOGIN --submit
 *
 * Env:
 *   GITHUB_TOKEN         Strongly recommended (higher rate limit, full repo fields including topics)
 *   GITHUB_LOGIN         Default for --user when --user omitted
 *   (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
 */
import process from "node:process";
import {
  API_URL_DEFAULT,
  toWbTimeValue,
  buildWikibaseGithubRepoEntity,
  githubRefSnaks,
  submitAddP800NotableWorkIfMissing,
  submitEnsureGithubRepoAnchorsIfMissing,
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

function canonicalRepoUrl(htmlUrl) {
  return String(htmlUrl || "")
    .trim()
    .replace(/\/$/, "");
}

function printHelp() {
  console.log(`wikidata-github-sync.mjs

Arguments:
  --user LOGIN       GitHub username (default: env GITHUB_LOGIN)
  --org LOGIN        GitHub organization (uses /orgs/{login}/repos)
  --about QID        Developer (P178); default Q137462720
  --limit N          Stop after N new items
  --submit           Create items via Wikidata API (wbeditentity)
  --include-forks    Include forked repositories
  --include-private  Include private repos (only when authenticated; not recommended for Wikidata)
  --skip-archived    Skip archived repositories
  --no-notable-work  Do not add P800 on --about (default: add missing P800 for each repo item)
  --delay-ms MS      Pause between network calls (default 900)
  --summary TEXT     Edit summary for --submit
  --retrieved YYYY-MM-DD   Retrieval date for P813 (default: today UTC)

Environment:
  GITHUB_TOKEN
  GITHUB_LOGIN
  (--submit) WIKIDATA_USERNAME, WIKIDATA_PASSWORD
`);
}

function githubApiUrlFromHtml(htmlUrl) {
  try {
    const u = new URL(htmlUrl);
    const p = u.pathname.replace(/\/$/, "").split("/").filter(Boolean);
    if (p.length >= 2 && u.hostname === "github.com") {
      return `https://api.github.com/repos/${p[0]}/${p[1]}`;
    }
  } catch {
    /* ignore */
  }
  return null;
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

async function wikidataItemForRepoUrl(repoUrl) {
  const base = canonicalRepoUrl(repoUrl).replace(/"/g, '\\"');
  const variants = [base, `${base}/`];
  for (const v of variants) {
    const q = `
SELECT ?item WHERE {
  ?item wdt:P1324 "${v}" .
} LIMIT 1`;
    const hit = await wikidataSelectSparql(q);
    if (hit) return hit;
  }
  return null;
}

/**
 * @param {"user"|"org"} kind
 * @param {string} login
 * @param {string|undefined} token
 * @param {{ includeForks: boolean, includePrivate: boolean, skipArchived: boolean }} filters
 */
async function fetchAllRepos(kind, login, token, filters) {
  const out = [];
  for (let page = 1; ; page++) {
    const path =
      kind === "org"
        ? `https://api.github.com/orgs/${encodeURIComponent(login)}/repos`
        : `https://api.github.com/users/${encodeURIComponent(login)}/repos`;
    const u = new URL(path);
    u.searchParams.set("per_page", "100");
    u.searchParams.set("page", String(page));
    u.searchParams.set("sort", "updated");
    u.searchParams.set("direction", "desc");
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": API_UA,
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(u, { headers });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`GitHub API ${res.status}: ${t.slice(0, 500)}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    for (const repo of batch) {
      if (!filters.includeForks && repo.fork) continue;
      if (!filters.includePrivate && repo.private) continue;
      if (filters.skipArchived && repo.archived) continue;
      out.push(repo);
    }

    if (batch.length < 100) break;
  }
  return out;
}

async function main() {
  if (hasFlag("--help") || hasFlag("-h")) {
    printHelp();
    process.exit(0);
  }

  const userArg = getArg("--user");
  const orgArg = getArg("--org");
  if (userArg && orgArg) {
    console.error("Use either --user or --org, not both.");
    process.exit(1);
  }

  const login = (orgArg || userArg || process.env.GITHUB_LOGIN || "").trim();
  if (!login) {
    console.error("Set --user LOGIN or --org LOGIN or GITHUB_LOGIN.");
    process.exit(1);
  }

  const kind = orgArg ? "org" : "user";
  const token = (process.env.GITHUB_TOKEN || "").trim() || undefined;
  if (!token) {
    console.error(
      "Warning: no GITHUB_TOKEN — rate limit is low and some fields (e.g. topics) may be missing.",
    );
  }

  const about = getArg("--about") || "Q137462720";
  const limit = getArg("--limit") ? parseInt(getArg("--limit"), 10) : Infinity;
  const delayMs = parseInt(getArg("--delay-ms") || "900", 10);
  const submit = hasFlag("--submit");
  const includeForks = hasFlag("--include-forks");
  const includePrivate = hasFlag("--include-private");
  const skipArchived = hasFlag("--skip-archived");
  const summaryArg = getArg("--summary");
  const retrievedArg = getArg("--retrieved");

  const apiUrl = process.env.WIKIDATA_API_URL || API_URL_DEFAULT;
  const lgUser = process.env.WIKIDATA_USERNAME || process.env.WIKIMEDIA_USERNAME;
  const lgPass = process.env.WIKIDATA_PASSWORD || process.env.WIKIMEDIA_PASSWORD;

  if (submit && (!lgUser || !lgPass)) {
    console.error("Set WIKIDATA_USERNAME and WIKIDATA_PASSWORD for --submit.");
    process.exit(1);
  }

  console.error(
    `GitHub ${kind}: ${login}${token ? " (token ok)" : " (unauthenticated)"} → Wikidata developer ${about}`,
  );

  let repos;
  try {
    repos = await fetchAllRepos(kind, login, token, {
      includeForks,
      includePrivate,
      skipArchived,
    });
  } catch (e) {
    console.error(String(e.message || e));
    process.exit(1);
  }

  const rawRetrieved =
    retrievedArg ||
    `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, "0")}-${String(new Date().getUTCDate()).padStart(2, "0")}`;
  const retrievedWbTime = toWbTimeValue(rawRetrieved);

  let created = 0;
  for (const repo of repos) {
    if (created >= limit) {
      console.error(`Stopped (--limit ${limit}).`);
      break;
    }

    const htmlUrl = canonicalRepoUrl(repo.html_url);
    const shortTitle = String(repo.name || "").slice(0, 72);
    const apiFromHtml = githubApiUrlFromHtml(htmlUrl);
    console.error(`— ${shortTitle}${String(repo.name || "").length > 72 ? "…" : ""}`);

    await sleep(delayMs);

    let existing = null;
    try {
      existing = await wikidataItemForRepoUrl(htmlUrl);
    } catch {
      existing = null;
    }
    if (existing) {
      console.error(`  skip: P1324 already → ${existing}`);
      if (submit && !hasFlag("--no-notable-work")) {
        try {
          const ref = githubRefSnaks(htmlUrl, retrievedWbTime, apiFromHtml ? [apiFromHtml] : []);
          const p800 = await submitAddP800NotableWorkIfMissing(
            apiUrl,
            lgUser,
            lgPass,
            about,
            existing,
            ref,
            summaryArg || `P800 notable work: GitHub ${shortTitle} (${existing})`,
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

    if (!submit) {
      console.error(`  dry-run: would create for ${htmlUrl}`);
      created++;
      continue;
    }

    try {
      const entity = buildWikibaseGithubRepoEntity(repo, { about, retrievedWbTime });
      const { id } = await submitNewItemWithRetry(
        apiUrl,
        lgUser,
        lgPass,
        entity,
        summaryArg || `Create GitHub repository item (${login})`,
        { maxAttempts: 5, baseDelayMs: Math.max(1200, delayMs) },
      );
      console.error(`  created https://www.wikidata.org/wiki/${id}`);
      console.log(id);
      created++;
      if (!hasFlag("--no-notable-work")) {
        try {
          const apiLine = repo.full_name
            ? `https://api.github.com/repos/${repo.full_name}`
            : apiFromHtml;
          const ref = githubRefSnaks(htmlUrl, retrievedWbTime, apiLine ? [apiLine] : []);
          const p800 = await submitAddP800NotableWorkIfMissing(
            apiUrl,
            lgUser,
            lgPass,
            about,
            id,
            ref,
            summaryArg || `P800 notable work: GitHub ${shortTitle} (${id})`,
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
          `  existing item ${dupQ} (label conflict — item may lack P1324; repairing identifiers + P800 on ${about})`,
        );
        if (submit) {
          const apiLine = repo.full_name
            ? `https://api.github.com/repos/${repo.full_name}`
            : apiFromHtml;
          const ref = githubRefSnaks(htmlUrl, retrievedWbTime, apiLine ? [apiLine] : []);
          try {
            console.error(
              "  repo claims: calling Wikidata (wbgetentities + login + wbeditentity for P1324/P973/P178) — typically 10–40s…",
            );
            const patch = await submitEnsureGithubRepoAnchorsIfMissing(
              apiUrl,
              lgUser,
              lgPass,
              dupQ,
              htmlUrl,
              about,
              ref,
              summaryArg || `P1324/P973/P178 on duplicate GitHub item ${dupQ}`,
            );
            if (patch.edited) {
              const bits = Object.entries(patch.added)
                .filter(([, v]) => v)
                .map(([k]) => k);
              console.error(
                bits.length
                  ? `  repo claims on ${dupQ}: added ${bits.join(", ")}`
                  : `  repo claims on ${dupQ}: no change`,
              );
            } else {
              console.error(`  repo claims on ${dupQ}: P1324/P973/P178 already present`);
            }
          } catch (e2) {
            console.error(`  repo claims failed: ${e2?.message || e2}`);
          }
          if (!hasFlag("--no-notable-work")) {
            try {
              console.error(
                "  P800: calling Wikidata (fetch claims + login + wbeditentity) — usually 10–40s…",
              );
              const p800 = await submitAddP800NotableWorkIfMissing(
                apiUrl,
                lgUser,
                lgPass,
                about,
                dupQ,
                ref,
                summaryArg || `P800 notable work: GitHub ${shortTitle} (${dupQ})`,
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
      }
      await sleep(delayMs);
    }
  }

  console.error(`Done. Repos processed (new / dry-run): ${created}.`);
}

await main();
