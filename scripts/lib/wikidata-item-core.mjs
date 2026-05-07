/**
 * Shared helpers for QuickStatements output + Wikidata wbeditentity (scholar sync + quickstatements CLI).
 */
export const API_URL_DEFAULT = "https://www.wikidata.org/w/api.php";

export function toWikidataTimeQS(dateStr) {
  if (!dateStr) return undefined;
  const m = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return undefined;
  return `+${m[1]}-${m[2]}-${m[3]}T00:00:00Z/11`;
}

export function toWbTimeValue(dateStr) {
  if (!dateStr) return undefined;
  const m = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return undefined;
  const time = `+${m[1]}-${m[2]}-${m[3]}T00:00:00Z`;
  return {
    time,
    timezone: 0,
    before: 0,
    after: 0,
    precision: 11,
    calendarmodel: "http://www.wikidata.org/entity/Q1985727",
  };
}

export function escapeQSString(s) {
  return `"${String(s).replaceAll('"', '\\"')}"`;
}

export function normalizeKind(value) {
  if (!value) return "article";
  const v = value.trim().toLowerCase();
  if (v === "paper" || v === "research" || v === "scholarly") return "paper";
  if (v === "video" || v === "vedio" || v === "vedios") return "video";
  return "article";
}

export function defaultInstanceForKind(kind) {
  if (kind === "paper") return "Q13442814";
  if (kind === "video") return "Q34508";
  return "Q36774";
}

export async function fetchHtml(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; WikidataItemTool/1.0; +https://krishnabajpai.me)",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) return undefined;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("text/html") && !ct.includes("application/xhtml+xml")) return undefined;
  return await res.text();
}

export function pickMeta(html, propertyOrName) {
  const esc = propertyOrName.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `<meta\\s+(?:property|name)=(["'])${esc}\\1\\s+content=(["'])([^"']+)\\2\\s*/?>`,
    "i",
  );
  const m = html.match(re);
  return m?.[3]?.trim();
}

export function pickTitle(html) {
  const og = pickMeta(html, "og:title");
  if (og) return og;
  const tw = pickMeta(html, "twitter:title");
  if (tw) return tw;
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m?.[1]?.trim();
}

export function decodeBasicEntities(text) {
  return String(text)
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replaceAll(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)));
}

export function normalizeTitleForWikidata(text) {
  if (!text) return text;
  const cleaned = decodeBasicEntities(text).replaceAll(/\s+/g, " ").trim();
  const max = 220;
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

export function pickPublisher(html) {
  return (
    pickMeta(html, "og:site_name") ||
    pickMeta(html, "application-name") ||
    pickMeta(html, "twitter:site")
  );
}

export function pickPublishedDate(html) {
  return (
    pickMeta(html, "article:published_time") ||
    pickMeta(html, "og:published_time") ||
    pickMeta(html, "date") ||
    pickMeta(html, "pubdate")
  );
}

export function parseQid(q) {
  if (!q) return null;
  const s = String(q).trim();
  const m = s.match(/^Q(\d+)$/i);
  if (!m) return null;
  return { id: `Q${m[1]}`, numeric: parseInt(m[1], 10) };
}

/**
 * Canonical `Qnnnn` for comparisons and API ids — accepts `Q123`, `123`, a number, or a wbgetentities
 * wikibase-entityid value object (`id` / `numeric-id`).
 */
export function canonicalItemQid(input) {
  if (input == null || input === "") return null;
  if (typeof input === "object" && !Array.isArray(input)) {
    if (typeof input.id === "string") {
      const p = parseQid(input.id);
      if (p) return p.id;
    }
    const n = input["numeric-id"];
    if (typeof n === "number" && Number.isInteger(n) && n > 0) return `Q${n}`;
    return null;
  }
  if (typeof input === "number" && Number.isInteger(input) && input > 0) return `Q${input}`;
  const p = parseQid(String(input).trim());
  if (p) return p.id;
  const digits = String(input).trim().match(/^(\d+)$/);
  if (digits) return `Q${digits[1]}`;
  return null;
}

function itemSnak(property, qidParsed) {
  return {
    snaktype: "value",
    property,
    datavalue: {
      type: "wikibase-entityid",
      value: {
        "entity-type": "item",
        "numeric-id": qidParsed.numeric,
        id: qidParsed.id,
      },
    },
  };
}

function stringSnak(property, value) {
  return {
    snaktype: "value",
    property,
    datavalue: { type: "string", value: String(value) },
  };
}

function monoSnak(property, text, lang = "en") {
  return {
    snaktype: "value",
    property,
    datavalue: {
      type: "monolingualtext",
      value: { text: String(text), language: lang },
    },
  };
}

function timeSnak(property, wbTime) {
  return {
    snaktype: "value",
    property,
    datavalue: { type: "time", value: wbTime },
  };
}

function refSnaks(url, retrievedWbTime) {
  return {
    P854: [stringSnak("P854", url)],
    P813: [timeSnak("P813", retrievedWbTime)],
  };
}

function statement(mainsnak, refs, qualifiers = null) {
  const st = {
    mainsnak,
    type: "statement",
    rank: "normal",
  };
  if (refs) {
    st.references = [{ snaks: refs }];
  }
  if (qualifiers && typeof qualifiers === "object" && Object.keys(qualifiers).length > 0) {
    st.qualifiers = qualifiers;
    st["qualifiers-order"] = Object.keys(qualifiers);
  }
  return st;
}

export function wikidataClaimItem(property, targetQidString, referenceSnaksObject, qualifiers = null) {
  const p = parseQid(targetQidString);
  if (!p) throw new Error(`Bad Q: ${targetQidString}`);
  return statement(itemSnak(property, p), referenceSnaksObject, qualifiers);
}

export function wikidataClaimString(property, stringValue, referenceSnaksObject, qualifiers = null) {
  return statement(stringSnak(property, String(stringValue)), referenceSnaksObject, qualifiers);
}

/** Qualifier: P407 language of work or name (default English Q1860; use Q7979 for British English). */
export function qualifiersLanguageOfWork(languageItemQ = "Q1860") {
  const lang = parseQid(languageItemQ);
  if (!lang) throw new Error(`Bad language Q for P407: ${languageItemQ}`);
  return { P407: [itemSnak("P407", lang)] };
}

/**
 * Reference: stated in GitHub (Q364) + retrieved + one or more reference URLs (repo page, API, homepage, etc.).
 * @param {string} repoHtmlUrl
 * @param {object} retrievedWbTime
 * @param {string[]} [extraP854]
 */
export function githubRefSnaks(repoHtmlUrl, retrievedWbTime, extraP854 = []) {
  const gh = parseQid("Q364");
  if (!gh) throw new Error("Q364 GitHub");
  const seen = new Set();
  const p854 = [];
  for (const raw of [repoHtmlUrl, ...(extraP854 || [])]) {
    if (!raw) continue;
    const key = normalizeUrl(String(raw).trim());
    if (seen.has(key)) continue;
    seen.add(key);
    p854.push(stringSnak("P854", key));
  }
  if (!p854.length) {
    throw new Error("githubRefSnaks: need at least one P854 URL");
  }
  return {
    P854: p854,
    P813: [timeSnak("P813", retrievedWbTime)],
    P248: [itemSnak("P248", gh)],
  };
}

/**
 * Reference: stated in Python Package Index (Q2984686) + retrieved + PyPI project + JSON API + optional extra URLs.
 * @param {string} projectPageUrl e.g. https://pypi.org/project/pkgname/
 * @param {object} retrievedWbTime
 * @param {string[]} [extraP854]
 */
export function pypiRefSnaks(projectPageUrl, retrievedWbTime, extraP854 = []) {
  const stated = parseQid("Q2984686");
  if (!stated) throw new Error("Q2984686 Python Package Index");
  const seen = new Set();
  const p854 = [];
  for (const raw of [projectPageUrl, ...(extraP854 || [])]) {
    if (!raw) continue;
    const key = normalizeUrl(String(raw).trim());
    if (seen.has(key)) continue;
    seen.add(key);
    p854.push(stringSnak("P854", key));
  }
  if (!p854.length) {
    throw new Error("pypiRefSnaks: need at least one P854 URL");
  }
  return {
    P854: p854,
    P813: [timeSnak("P813", retrievedWbTime)],
    P248: [itemSnak("P248", stated)],
  };
}

/**
 * Reference for P800 after Scholar sync: Google Scholar article URL, optional https://doi.org/…, P813.
 * @param {string} scholarArticleUrl
 * @param {object} retrievedWbTime
 * @param {string} [doiOrNull]
 */
export function scholarWorkNotableRefSnaks(scholarArticleUrl, retrievedWbTime, doiOrNull) {
  const extra = [];
  if (doiOrNull) {
    const d = normalizeDoiForWikidataQuery(doiOrNull);
    if (d) extra.push(`https://doi.org/${d}`);
  }
  const seen = new Set();
  const p854 = [];
  for (const raw of [scholarArticleUrl, ...extra]) {
    if (!raw) continue;
    const key = normalizeUrl(String(raw).trim());
    if (seen.has(key)) continue;
    seen.add(key);
    p854.push(stringSnak("P854", key));
  }
  if (!p854.length) {
    throw new Error("scholarWorkNotableRefSnaks: need Scholar URL or DOI");
  }
  return {
    P854: p854,
    P813: [timeSnak("P813", retrievedWbTime)],
  };
}

const LICENSE_SPDX_TO_QID = {
  mit: "Q334661",
  "apache-2.0": "Q1131686",
  "apache-2.0+": "Q1131686",
  "gpl-3.0": "Q27016754",
  "gpl-2.0": "Q10569",
  "gpl-2.0+": "Q10569",
  "gpl-3.0+": "Q27016754",
  "bsd-3-clause": "Q18539263",
  "bsd-2-clause": "Q27974347",
  bsd: "Q18491847",
  isc: "Q38972619",
  "lgpl-3.0": "Q17987647",
  "lgpl-2.1": "Q6609615",
  "mpl-2.0": "Q33775461",
  unlicense: "Q6859761",
  "cc0-1.0": "Q22953335",
  "agpl-3.0": "Q13087912",
  "epl-2.0": "Q51214250",
  "ms-pl": "Q20742321",
  wtfpl: "Q17498957",
  "artistic-2.0": "Q18518589",
};

const GITHUB_LANG_TO_QID = {
  python: "Q28865",
  javascript: "Q2005",
  typescript: "Q97818505",
  java: "Q378",
  "c++": "Q2407",
  c: "Q15777",
  go: "Q809430",
  rust: "Q5718005",
  ruby: "Q5396",
  php: "Q878333",
  shell: "Q15169",
  html: "Q8811",
  css: "Q46441",
  "jupyter notebook": "Q18913790",
  dart: "Q15296802",
  kotlin: "Q17981350",
  swift: "Q200567",
  "c#": "Q2370",
  scala: "Q460552",
  haskell: "Q34230",
  lua: "Q207316",
  perl: "Q283285",
  r: "Q206904",
  matlab: "Q27525",
  vue: "Q20094563",
};

/** @param {object} repo GitHub API repo object; @param {{ about: string, retrievedWbTime: object }} opts */
export function buildWikibaseGithubRepoEntity(repo, opts) {
  const { about, retrievedWbTime } = opts;
  const aboutParsed = parseQid(about);
  if (!aboutParsed) throw new Error(`Invalid author QID: ${about}`);

  const instanceRepo = parseQid("Q116673117");
  if (!instanceRepo) throw new Error("Q116673117");
  const copyrighted = parseQid("Q50423863");
  if (!copyrighted) throw new Error("Q50423863");

  const htmlUrl = String(repo.html_url || "").replace(/\/$/, "");
  if (!htmlUrl) throw new Error("repo.html_url required");

  const fullName = repo.full_name || `${repo.owner?.login || "unknown"}/${repo.name}`;
  const name = normalizeTitleForWikidata(String(repo.name || fullName).split("/").pop() || fullName);
  const label = normalizeTitleForWikidata(fullName.replaceAll("/", " / ").slice(0, 250));

  const descParts = [`GitHub public source repository (${fullName}).`];
  if (repo.description) descParts.push(String(repo.description).slice(0, 140));
  if (repo.fork) descParts.push("Fork.");
  if (repo.archived) descParts.push("Archived.");
  const descriptionText = normalizeTitleForWikidata(descParts.join(" ").replaceAll(/\s+/g, " ").trim()).slice(0, 220);

  const apiUrl = `https://api.github.com/repos/${fullName}`;
  const extraP854 = [apiUrl];
  const homepageRaw = repo.homepage && String(repo.homepage).trim() ? String(repo.homepage).trim() : "";
  if (homepageRaw && normalizeUrl(homepageRaw) !== normalizeUrl(htmlUrl)) {
    extraP854.push(homepageRaw);
  }

  const claims = {};
  const ref = githubRefSnaks(htmlUrl, retrievedWbTime, extraP854);

  claims.P31 = [statement(itemSnak("P31", instanceRepo), ref)];

  claims.P1324 = [statement(stringSnak("P1324", htmlUrl), ref)];

  const official =
    homepageRaw && normalizeUrl(homepageRaw) !== normalizeUrl(htmlUrl) ? homepageRaw : htmlUrl;
  claims.P856 = [statement(stringSnak("P856", official), ref)];

  claims.P973 = [statement(stringSnak("P973", htmlUrl), ref)];

  claims.P1476 = [statement(monoSnak("P1476", name, "en"), ref)];

  claims.P178 = [statement(itemSnak("P178", aboutParsed), ref)];

  const created = repo.created_at ? repo.created_at.slice(0, 10) : null;
  const inceptionWb = created ? toWbTimeValue(created) : null;
  if (inceptionWb) {
    claims.P571 = [statement(timeSnak("P571", inceptionWb), ref)];
  }

  const lang = repo.language ? String(repo.language).toLowerCase() : "";
  const langQ = lang ? GITHUB_LANG_TO_QID[lang] : null;
  const langParsed = langQ ? parseQid(langQ) : null;
  if (langParsed) {
    claims.P277 = [statement(itemSnak("P277", langParsed), ref)];
  }

  const spdx = (repo.license?.spdx_id || repo.license?.key || "").toLowerCase().replace(/\s+/g, "");
  const licQid = spdx ? LICENSE_SPDX_TO_QID[spdx] : null;
  const licParsed = licQid ? parseQid(licQid) : null;
  if (licParsed) {
    claims.P275 = [statement(itemSnak("P275", licParsed), ref)];
  }

  claims.P6216 = [statement(itemSnak("P6216", copyrighted), ref)];

  /** @type {{ en: { language: string; value: string }[] }} */
  let aliases = undefined;
  if (name && name !== label) {
    aliases = { en: [{ language: "en", value: name.slice(0, 250) }] };
  }

  return {
    labels: { en: { language: "en", value: label.slice(0, 250) } },
    descriptions: { en: { language: "en", value: descriptionText || `GitHub repository ${fullName}` } },
    ...(aliases ? { aliases } : {}),
    claims,
  };
}

/**
 * Map free-text PyPI `info.license` toward SPDX keys used in LICENSE_SPDX_TO_QID.
 * @param {string|null|undefined} lic
 */
function spdxFromPypiLicense(lic) {
  if (!lic) return "";
  let s = String(lic).trim().toLowerCase();
  if (!s) return "";
  s = s.replace(/\s+/g, " ");
  if (LICENSE_SPDX_TO_QID[s]) return s;
  const paren = s.match(/\(([a-z0-9.+_-]+)\)\s*$/i);
  if (paren) {
    const k = paren[1].toLowerCase();
    if (LICENSE_SPDX_TO_QID[k]) return k;
  }
  if (LICENSE_SPDX_TO_QID[s.replace(/\s+/g, "-")]) return s.replace(/\s+/g, "-");
  if (s.includes("apache") && (s.includes("2") || s.includes("two"))) return "apache-2.0";
  if (/\bmit\b/.test(s)) return "mit";
  if (s.includes("bsd")) {
    if (s.includes("3") || s.includes("three")) return "bsd-3-clause";
    if (s.includes("2") || s.includes("two")) return "bsd-2-clause";
    return "bsd";
  }
  if (s.includes("gpl") && (s.includes("3") || s.includes("v3"))) return "gpl-3.0";
  if (s.includes("gpl") && (s.includes("2") || s.includes("v2"))) return "gpl-2.0";
  if (s.includes("lesser") || s.includes("lgpl")) {
    if (s.includes("3")) return "lgpl-3.0";
    return "lgpl-2.1";
  }
  if (s.includes("unlicense")) return "unlicense";
  return "";
}

/**
 * Full JSON from `GET https://pypi.org/pypi/{name}/json`.
 * @param {{ info: object, urls?: object[] }} apiJson
 * @param {{ about: string, retrievedWbTime: object, pypiUser?: string }} opts
 */
export function buildWikibasePypiPackageEntity(apiJson, opts) {
  const { about, retrievedWbTime, pypiUser } = opts;
  const aboutParsed = parseQid(about);
  if (!aboutParsed) throw new Error(`Invalid author QID: ${about}`);

  const instancePkg = parseQid("Q29642950");
  if (!instancePkg) throw new Error("Q29642950");
  const copyrighted = parseQid("Q50423863");
  if (!copyrighted) throw new Error("Q50423863");
  const pythonLang = parseQid("Q28865");
  if (!pythonLang) throw new Error("Q28865");

  const info = apiJson.info;
  if (!info || !info.name) throw new Error("PyPI JSON missing info.name");
  const name = String(info.name).trim();
  if (!name) throw new Error("empty PyPI project name");

  const projectUrl = normalizeUrl(`https://pypi.org/project/${encodeURIComponent(name)}/`);
  const jsonApiUrl = normalizeUrl(`https://pypi.org/pypi/${encodeURIComponent(name)}/json`);

  const pu = info.project_urls && typeof info.project_urls === "object" ? info.project_urls : {};

  const homepageCandidate =
    (typeof pu.Homepage === "string" && pu.Homepage.trim() && normalizeUrl(pu.Homepage.trim())) || "";
  const officialSite =
    homepageCandidate && homepageCandidate !== projectUrl ? homepageCandidate : projectUrl;

  const extraP854 = [jsonApiUrl];
  for (const k of ["Source", "Repository", "Homepage", "Documentation", "Changelog", "Bug Tracker"]) {
    const u = pu[k];
    if (u && String(u).trim()) extraP854.push(String(u).trim());
  }

  const claims = {};
  const ref = pypiRefSnaks(projectUrl, retrievedWbTime, extraP854);

  claims.P31 = [statement(itemSnak("P31", instancePkg), ref)];
  claims.P5568 = [statement(stringSnak("P5568", name), ref)];
  claims.P973 = [statement(stringSnak("P973", projectUrl), ref)];
  claims.P856 = [statement(stringSnak("P856", officialSite), ref)];

  const title1476 = normalizeTitleForWikidata(name).slice(0, 250);
  claims.P1476 = [statement(monoSnak("P1476", title1476, "en"), ref)];

  claims.P178 = [statement(itemSnak("P178", aboutParsed), ref)];

  claims.P277 = [statement(itemSnak("P277", pythonLang), ref)];

  claims.P6216 = [statement(itemSnak("P6216", copyrighted), ref)];

  if (info.version) {
    claims.P348 = [statement(stringSnak("P348", String(info.version)), ref)];
  }

  const urls = Array.isArray(apiJson.urls) ? apiJson.urls : [];
  const uploadIso = urls.map((u) => u.upload_time_iso_8601).filter(Boolean).sort()[0];
  if (uploadIso) {
    const d = String(uploadIso).slice(0, 10);
    const wb = toWbTimeValue(d);
    if (wb) claims.P577 = [statement(timeSnak("P577", wb), ref)];
  }

  const spdx = spdxFromPypiLicense(info.license);
  const licQid = spdx ? LICENSE_SPDX_TO_QID[spdx] : null;
  const licParsed = licQid ? parseQid(licQid) : null;
  if (licParsed) {
    claims.P275 = [statement(itemSnak("P275", licParsed), ref)];
  }

  const src =
    (typeof pu.Source === "string" && pu.Source) ||
    (typeof pu.Repository === "string" && pu.Repository) ||
    "";
  if (src && /(github\.com|gitlab\.com|bitbucket\.org|codeberg\.org)\b/i.test(src)) {
    const vcs = normalizeUrl(src);
    claims.P1324 = [statement(stringSnak("P1324", vcs), ref)];
  }

  if (pypiUser) {
    claims.P11534 = [statement(stringSnak("P11534", String(pypiUser).trim()), ref)];
  }

  const descParts = [`Python package published on PyPI (${name}).`];
  if (info.summary) descParts.push(String(info.summary).slice(0, 130));
  const descriptionText = normalizeTitleForWikidata(descParts.join(" ").replaceAll(/\s+/g, " ").trim()).slice(
    0,
    220,
  );

  const sumLine = info.summary && String(info.summary).trim();
  let aliases = undefined;
  if (sumLine) {
    const av = normalizeTitleForWikidata(sumLine).slice(0, 250);
    if (av && av.toLowerCase() !== title1476.toLowerCase()) {
      aliases = { en: [{ language: "en", value: av }] };
    }
  }

  return {
    labels: { en: { language: "en", value: name.slice(0, 250) } },
    descriptions: { en: { language: "en", value: descriptionText || `Python package ${name}` } },
    ...(aliases ? { aliases } : {}),
    claims,
  };
}

function normalizeUrl(u) {
  try {
    return new URL(String(u)).href.replace(/\/$/, "");
  } catch {
    return String(u).replace(/\/$/, "");
  }
}

export async function submitNewItemWithRetry(apiUrl, lgname, lgpassword, entity, summary, options = {}) {
  const max = options.maxAttempts ?? 4;
  const baseMs = options.baseDelayMs ?? 1500;
  let lastErr;
  for (let attempt = 1; attempt <= max; attempt++) {
    try {
      return await submitNewItem(apiUrl, lgname, lgpassword, entity, summary);
    } catch (e) {
      lastErr = e;
      const msg = String(e?.message || e);
      const transient =
        msg.includes("fetch failed") ||
        msg.includes("ETIMEDOUT") ||
        msg.includes("ECONNRESET") ||
        msg.includes("ECONNREFUSED") ||
        msg.includes("ENOTFOUND") ||
        msg.includes("EAI_AGAIN");
      if (!transient || attempt === max) throw e;
      await new Promise((r) => setTimeout(r, baseMs * attempt));
    }
  }
  throw lastErr;
}

export function buildQuickStatementsLines(ctx) {
  const { url, about, kind, title, publisher, publishedTimeQS, retrievedQS, instance, doiArg, arxivArg } =
    ctx;

  const lines = [];
  lines.push(["CREATE"].join("\t"));
  lines.push(["LAST", "P31", instance].join("\t"));
  lines.push(["LAST", "P973", escapeQSString(url)].join("\t"));
  if (title) lines.push(["LAST", "P1476", escapeQSString(title)].join("\t"));
  if (publishedTimeQS) lines.push(["LAST", "P577", publishedTimeQS].join("\t"));
  if (publisher) lines.push(["LAST", "P123", escapeQSString(publisher)].join("\t"));

  if (kind === "paper") {
    lines.push(["LAST", "P50", about].join("\t"));
    if (doiArg) lines.push(["LAST", "P356", escapeQSString(doiArg)].join("\t"));
    if (arxivArg) lines.push(["LAST", "P818", escapeQSString(arxivArg)].join("\t"));
  } else if (kind === "video") {
    lines.push(["LAST", "P710", about].join("\t"));
  } else {
    lines.push(["LAST", "P921", about].join("\t"));
  }

  lines.push(["LAST", "P973", escapeQSString(url), "S854", escapeQSString(url), "S813", retrievedQS].join("\t"));
  if (title) {
    lines.push(
      ["LAST", "P1476", escapeQSString(title), "S854", escapeQSString(url), "S813", retrievedQS].join("\t"),
    );
  }
  if (publishedTimeQS) {
    lines.push(
      ["LAST", "P577", publishedTimeQS, "S854", escapeQSString(url), "S813", retrievedQS].join("\t"),
    );
  }

  return lines;
}

export function buildWikibaseEntity(ctx) {
  const {
    url,
    about,
    kind,
    title,
    publishedRaw,
    instance,
    doiArg,
    arxivArg,
    publisherQ,
    retrievedWbTime,
  } = ctx;

  const label =
    title ||
    (() => {
      try {
        return new URL(url).hostname;
      } catch {
        return url;
      }
    })();

  const aboutParsed = parseQid(about);
  if (!aboutParsed) {
    throw new Error(`Invalid --about QID: ${about}`);
  }
  const instanceParsed = parseQid(instance);
  if (!instanceParsed) {
    throw new Error(`Invalid --instance QID: ${instance}`);
  }

  const publishedWb = toWbTimeValue(publishedRaw);
  const claims = {};

  const p31 = itemSnak("P31", instanceParsed);
  const p973 = stringSnak("P973", url);
  claims.P31 = [statement(p31, refSnaks(url, retrievedWbTime))];
  claims.P973 = [statement(p973, refSnaks(url, retrievedWbTime))];

  if (title) {
    const p1476 = monoSnak("P1476", title, "en");
    claims.P1476 = [statement(p1476, refSnaks(url, retrievedWbTime))];
  }

  if (publishedWb) {
    const p577 = timeSnak("P577", publishedWb);
    claims.P577 = [statement(p577, refSnaks(url, retrievedWbTime))];
  }

  const publisherParsed = publisherQ ? parseQid(publisherQ) : null;
  if (publisherParsed) {
    const p123 = itemSnak("P123", publisherParsed);
    claims.P123 = [statement(p123, refSnaks(url, retrievedWbTime))];
  }

  if (kind === "paper") {
    claims.P50 = [statement(itemSnak("P50", aboutParsed), refSnaks(url, retrievedWbTime))];
    if (doiArg) {
      claims.P356 = [statement(stringSnak("P356", doiArg), refSnaks(url, retrievedWbTime))];
    }
    if (arxivArg) {
      claims.P818 = [statement(stringSnak("P818", arxivArg), refSnaks(url, retrievedWbTime))];
    }
  } else if (kind === "video") {
    claims.P710 = [statement(itemSnak("P710", aboutParsed), refSnaks(url, retrievedWbTime))];
  } else {
    claims.P921 = [statement(itemSnak("P921", aboutParsed), refSnaks(url, retrievedWbTime))];
  }

  const descMap = {
    article: "Web page described at URL",
    paper: "Scholarly article",
    video: "Video recording",
  };

  return {
    labels: { en: { language: "en", value: label.slice(0, 250) } },
    descriptions: { en: { language: "en", value: descMap[kind] || descMap.article } },
    claims,
  };
}

export function mergeCookieHeader(existing, setCookieLines) {
  const map = new Map();
  const ingestHeader = (header) => {
    if (!header) return;
    for (const part of String(header).split(";").map((s) => s.trim())) {
      if (!part) continue;
      const eq = part.indexOf("=");
      if (eq === -1) continue;
      map.set(part.slice(0, eq).trim(), part.slice(eq + 1).trim());
    }
  };
  ingestHeader(existing);
  for (const line of setCookieLines || []) {
    const pair = line.split(";")[0]?.trim();
    if (pair) {
      const eq = pair.indexOf("=");
      if (eq !== -1) map.set(pair.slice(0, eq).trim(), pair.slice(eq + 1).trim());
    }
  }
  return [...map.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
}

export function getSetCookieLines(res) {
  if (typeof res.headers.getSetCookie === "function") {
    return res.headers.getSetCookie();
  }
  const raw = res.headers.raw?.()?.["set-cookie"];
  if (Array.isArray(raw)) return raw;
  const single = res.headers.get("set-cookie");
  return single ? [single] : [];
}

/** Official site reference: P854 + P813 (no P248; avoids wrong "stated in"). */
export function buildSiteProfileReference(profilePageUrl, retrievedWbTime) {
  const url = (() => {
    try {
      return new URL(String(profilePageUrl).trim()).href.replace(/\/$/, "");
    } catch {
      return String(profilePageUrl).trim().replace(/\/$/, "");
    }
  })();
  return {
    P854: [stringSnak("P854", url)],
    P813: [timeSnak("P813", retrievedWbTime)],
  };
}

export function normalizeReferenceUrl(raw) {
  if (raw == null || raw === "") return null;
  const s = String(raw).trim();
  if (!s) return null;
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return u.href.replace(/\/$/, "");
    }
    if (u.hostname.endsWith("doi.org") && u.pathname.length > 1) {
      return `https://doi.org${u.pathname}${u.search}`;
    }
    /* One canonical Scholar profile URL so ?hl=en and &oi=ao variants dedupe on merge. */
    if (u.hostname === "scholar.google.com" && u.pathname.replace(/\/$/, "") === "/citations") {
      const user = u.searchParams.get("user");
      if (user) {
        return `https://scholar.google.com/citations?user=${encodeURIComponent(user)}&hl=en&oi=ao`;
      }
    }
    /* LinkedIn: always https://www.… for /in/ profiles. */
    if (
      (u.hostname === "linkedin.com" || u.hostname === "www.linkedin.com") &&
      u.pathname.startsWith("/in/")
    ) {
      const path = u.pathname.replace(/\/$/, "");
      return `https://www.linkedin.com${path}`;
    }
    return u.href.replace(/\/$/, "");
  } catch {
    return s.replace(/\/$/, "");
  }
}

/** Normalized P854 URL strings from a statement's references (wbgetentities shape). */
export function p854NormalizedSetFromStatement(statement) {
  const set = new Set();
  for (const ref of statement.references || []) {
    const row = ref.snaks?.P854;
    if (!Array.isArray(row)) continue;
    for (const snak of row) {
      const v = snak.datavalue?.value;
      if (typeof v !== "string") continue;
      const n = normalizeReferenceUrl(v);
      if (n) set.add(n);
    }
  }
  return set;
}

/** Normalized P854 strings from a reference snaks object (e.g. buildPersonEnrichReference). */
export function p854NormalizedSetFromRefSnaks(snaksObj) {
  const set = new Set();
  for (const snak of snaksObj?.P854 || []) {
    const v = snak.datavalue?.value;
    if (typeof v !== "string") continue;
    const n = normalizeReferenceUrl(v);
    if (n) set.add(n);
  }
  return set;
}

/** True if any target P854 is missing from the statement's references. */
export function personEnrichReferenceNeedsMerge(existingStatement, targetReferenceSnaks) {
  const have = p854NormalizedSetFromStatement(existingStatement);
  const want = p854NormalizedSetFromRefSnaks(targetReferenceSnaks);
  for (const u of want) {
    if (!have.has(u)) return true;
  }
  return false;
}

/**
 * One reference block: union of existing P854s and target P854s; P813 from target.
 * @param {object} existingStatement
 * @param {Record<string, object[]>} targetReferenceSnaks
 */
export function mergePersonEnrichRefSnaks(existingStatement, targetReferenceSnaks) {
  const urls = new Set([
    ...p854NormalizedSetFromStatement(existingStatement),
    ...p854NormalizedSetFromRefSnaks(targetReferenceSnaks),
  ]);
  const P854 = [...urls].sort().map((url) => stringSnak("P854", url));
  const p813 = targetReferenceSnaks?.P813;
  if (!Array.isArray(p813) || !p813.length) {
    throw new Error("mergePersonEnrichRefSnaks: targetReferenceSnaks must include P813");
  }
  return { P854, P813: p813 };
}

/**
 * P854 stack for person-enrich: cited page(s), profile, ORCID / Scholar (from identifiers), optional Crunchbase,
 * optional paper landing pages, then P813. Deduped; no P248.
 *
 * @param {object} opts
 * @param {string[]} [opts.citedUrls]
 * @param {string} opts.profileUrl
 * @param {unknown} opts.retrievedWbTime
 * @param {Record<string, string>} [opts.identifiers]
 * @param {string} [opts.crunchbaseUrl]
 * @param {string[]} [opts.extraP854]
 */
export function buildPersonEnrichReference(opts) {
  const {
    citedUrls = [],
    profileUrl,
    retrievedWbTime,
    identifiers = {},
    crunchbaseUrl,
    extraP854 = [],
  } = opts || {};
  const seen = new Set();
  const p854 = [];
  const push = (raw) => {
    const key = normalizeReferenceUrl(raw);
    if (!key || seen.has(key)) return;
    seen.add(key);
    p854.push(stringSnak("P854", key));
  };

  for (const u of citedUrls) push(u);
  push(profileUrl);

  const orcid = String(identifiers.P496 || "").trim();
  if (orcid) push(`https://orcid.org/${orcid}`);

  const scholarId = String(identifiers.P1960 || "").trim();
  if (scholarId) {
    push(
      `https://scholar.google.com/citations?user=${encodeURIComponent(scholarId)}&hl=en&oi=ao`,
    );
  }

  push(crunchbaseUrl);
  for (const u of extraP854) push(u);

  return {
    P854: p854,
    P813: [timeSnak("P813", retrievedWbTime)],
  };
}

/**
 * Reference for "described at URL": cite the page being described first, then profile and authority URLs (deduped).
 * P813 retrieval date. No P248.
 */
export function buildDescribedAtReference(
  citedPageUrl,
  profilePageUrl,
  retrievedWbTime,
  identifiers = {},
  crunchbaseUrl,
  extraP854 = [],
) {
  return buildPersonEnrichReference({
    citedUrls: citedPageUrl ? [citedPageUrl] : [],
    profileUrl: profilePageUrl,
    retrievedWbTime,
    identifiers,
    crunchbaseUrl,
    extraP854,
  });
}

/** User-Agent for Wikidata Query Service (identify the client). */
export const WIKIDATA_QUERY_USER_AGENT =
  "KrishnaBajpaiPortfolio/1.0 (https://krishnabajpai.me; mailto:krishna@krishnabajpai.me)";

/**
 * Run SPARQL on WDQS; return first bound ?item as Q-id or null.
 * @param {string} sparql
 */
export async function wikidataSparqlSelectFirstItemId(sparql) {
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(sparql)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/sparql-results+json",
      "User-Agent": WIKIDATA_QUERY_USER_AGENT,
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const bindings = data.results?.bindings;
  if (!bindings?.length) return null;
  const v = bindings[0]?.item?.value;
  if (!v) return null;
  const m = String(v).match(/entity\/(Q\d+)$/);
  return m ? m[1] : null;
}

/** DOI string for P356 lookup (strip resolver prefix, lowercase). */
export function normalizeDoiForWikidataQuery(raw) {
  let s = String(raw || "").trim();
  if (!s) return "";
  s = s.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
  return s.toLowerCase();
}

export async function wikidataItemIdForDoi(doi) {
  const d = normalizeDoiForWikidataQuery(doi);
  if (!d) return null;
  const safe = d.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const q = `
SELECT ?item WHERE {
  ?item wdt:P356 ?x .
  FILTER( LCASE(STR(?x)) = LCASE("${safe}") )
} LIMIT 1`;
  return wikidataSparqlSelectFirstItemId(q);
}

export async function wikidataItemIdForGithubRepoUrl(repoUrl) {
  const base = String(repoUrl || "")
    .trim()
    .replace(/\/$/, "");
  if (!base || !/\/github\.com\//i.test(base)) return null;
  for (const v of [base, `${base}/`]) {
    const safe = v.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const q = `
SELECT ?item WHERE {
  ?item wdt:P1324 "${safe}" .
} LIMIT 1`;
    const hit = await wikidataSparqlSelectFirstItemId(q);
    if (hit) return hit;
  }
  return null;
}

export async function wikidataItemIdForPypiPackage(packageName) {
  const safe = String(packageName || "").trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  if (!safe) return null;
  const q = `
SELECT ?item WHERE {
  ?item wdt:P5568 ?v .
  FILTER( LCASE(STR(?v)) = LCASE("${safe}") )
} LIMIT 1`;
  return wikidataSparqlSelectFirstItemId(q);
}

export async function fetchWikidataEntity(apiUrl, itemId, props = "claims|descriptions|labels|aliases") {
  const id = String(itemId).replace(/^q/i, "Q").match(/^(Q\d+)$/)?.[1];
  if (!id) throw new Error(`Invalid item id: ${itemId}`);
  const u = `${apiUrl}?${new URLSearchParams({ action: "wbgetentities", ids: id, format: "json", props })}`;
  const res = await fetch(u);
  if (!res.ok) throw new Error(`wbgetentities HTTP ${res.status}`);
  const j = await res.json();
  const ent = j.entities?.[id];
  if (!ent) throw new Error(`No entity ${id}: ${JSON.stringify(j)}`);
  return ent;
}

export async function wikidataLoginSession(apiUrl, lgname, lgpassword) {
  let cookie = "";
  const getLoginToken = await fetch(
    `${apiUrl}?${new URLSearchParams({ action: "query", meta: "tokens", type: "login", format: "json" })}`,
  );
  const ltJson = await getLoginToken.json();
  const loginToken = ltJson?.query?.tokens?.logintoken;
  if (!loginToken) {
    throw new Error(`Login token failed: ${JSON.stringify(ltJson)}`);
  }
  cookie = mergeCookieHeader(cookie, getSetCookieLines(getLoginToken));

  const loginBody = new URLSearchParams({
    action: "login",
    lgname,
    lgpassword,
    lgtoken: loginToken,
    format: "json",
  });
  const loginRes = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      cookie,
    },
    body: loginBody,
  });
  const loginJson = await loginRes.json();
  cookie = mergeCookieHeader(cookie, getSetCookieLines(loginRes));
  if (loginJson?.login?.result !== "Success") {
    throw new Error(`Login failed: ${JSON.stringify(loginJson)}`);
  }

  const csrfRes = await fetch(
    `${apiUrl}?${new URLSearchParams({ action: "query", meta: "tokens", type: "csrf", format: "json" })}`,
    { headers: { cookie } },
  );
  const csrfJson = await csrfRes.json();
  cookie = mergeCookieHeader(cookie, getSetCookieLines(csrfRes));
  const csrf = csrfJson?.query?.tokens?.csrftoken;
  if (!csrf) {
    throw new Error(`CSRF token failed: ${JSON.stringify(csrfJson)}`);
  }
  return { cookie, csrf };
}

/** Merge `data` into an existing item (only include keys you want to change). */
export async function submitEditEntity(apiUrl, lgname, lgpassword, itemId, partialEntity, summary) {
  const id = String(itemId).replace(/^q/i, "Q").match(/^(Q\d+)$/)?.[1];
  if (!id) throw new Error(`Invalid item id: ${itemId}`);
  const { cookie, csrf } = await wikidataLoginSession(apiUrl, lgname, lgpassword);

  const editBody = new URLSearchParams({
    action: "wbeditentity",
    id,
    token: csrf,
    format: "json",
    bot: "1",
    data: JSON.stringify(partialEntity),
    summary: summary || "Edit item (wikidata tool)",
  });

  const editRes = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      cookie,
    },
    body: editBody,
  });
  const editJson = await editRes.json();
  if (editJson.error) {
    throw new Error(`wbeditentity: ${JSON.stringify(editJson.error)}`);
  }
  return { id: editJson.entity?.id || id, raw: editJson };
}

/**
 * Parse existing item Q-id from wbeditentity failure (label/description conflict, etc.).
 * Matches `[[Q12345|Q12345]]` in thrown `wbeditentity: {...}` messages.
 */
export function wikidataDuplicateItemIdFromErrorMessage(msg) {
  const m = String(msg || "").match(/\[\[(Q\d+)\|/);
  return m ? m[1] : null;
}

/** True if person `claims` already has P800 → workQid (any statement with matching item value). */
export function claimsIncludeP800Target(claims, workQid) {
  const want = canonicalItemQid(workQid);
  if (!want) return false;
  const list = claims?.P800;
  if (!Array.isArray(list)) return false;
  for (const st of list) {
    if (st.mainsnak?.snaktype !== "value") continue;
    const got = canonicalItemQid(st.mainsnak?.datavalue?.value);
    if (got && got === want) return true;
  }
  return false;
}

/** Same canonical form as GitHub sync SPARQL + `buildWikibaseGithubRepoEntity` P1324/P973. */
export function canonicalGithubRepoHtmlUrl(htmlUrl) {
  return String(htmlUrl || "")
    .trim()
    .replace(/\/$/, "");
}

function wikidataStringClaimUrlsMatch(stored, wanted) {
  const a = canonicalGithubRepoHtmlUrl(stored);
  const b = canonicalGithubRepoHtmlUrl(wanted);
  if (!a || !b) return false;
  try {
    return new URL(a).href.replace(/\/$/, "") === new URL(b).href.replace(/\/$/, "");
  } catch {
    return a.toLowerCase() === b.toLowerCase();
  }
}

function claimsIncludeStringUrl(claims, property, repoHtmlUrl) {
  const list = claims?.[property];
  if (!Array.isArray(list)) return false;
  for (const st of list) {
    if (st.mainsnak?.snaktype !== "value") continue;
    const v = st.mainsnak?.datavalue?.value;
    if (typeof v === "string" && wikidataStringClaimUrlsMatch(v, repoHtmlUrl)) return true;
  }
  return false;
}

/** True if any P178 statement points at developerQid. */
export function claimsIncludeP178Developer(claims, developerQid) {
  const want = canonicalItemQid(developerQid);
  if (!want) return false;
  const list = claims?.P178;
  if (!Array.isArray(list)) return false;
  for (const st of list) {
    if (st.mainsnak?.snaktype !== "value") continue;
    const got = canonicalItemQid(st.mainsnak?.datavalue?.value);
    if (got && got === want) return true;
  }
  return false;
}

/**
 * When create hits label/description duplicate, the existing work item may lack P1324/P973,
 * so SPARQL skip misses it and the script loops. Merge missing P1324, P973, and P178 when absent.
 * @returns {Promise<{ edited: boolean, workId: string, added: { P1324: boolean, P973: boolean, P178: boolean } }>}
 */
export async function submitEnsureGithubRepoAnchorsIfMissing(
  apiUrl,
  lgname,
  lgpassword,
  workItemId,
  htmlUrl,
  developerPersonQid,
  referenceSnaksObject,
  summary,
) {
  const workId = canonicalItemQid(workItemId);
  const devId = canonicalItemQid(developerPersonQid);
  const wantUrl = canonicalGithubRepoHtmlUrl(htmlUrl);
  if (!workId || !devId) {
    throw new Error(
      `submitEnsureGithubRepoAnchorsIfMissing: invalid Q id work=${workItemId} developer=${developerPersonQid}`,
    );
  }
  if (!wantUrl) throw new Error("submitEnsureGithubRepoAnchorsIfMissing: htmlUrl required");

  const ent = await fetchWikidataEntity(apiUrl, workId, "claims");
  const claims = ent.claims || {};
  const hadP1324 = claimsIncludeStringUrl(claims, "P1324", wantUrl);
  const hadP973 = claimsIncludeStringUrl(claims, "P973", wantUrl);
  const hadP178 = claimsIncludeP178Developer(claims, devId);

  const patchClaims = {};
  if (!hadP1324) {
    patchClaims.P1324 = [wikidataClaimString("P1324", wantUrl, referenceSnaksObject)];
  }
  if (!hadP973) {
    patchClaims.P973 = [wikidataClaimString("P973", wantUrl, referenceSnaksObject)];
  }
  if (!hadP178) {
    patchClaims.P178 = [wikidataClaimItem("P178", devId, referenceSnaksObject)];
  }

  if (Object.keys(patchClaims).length === 0) {
    return {
      edited: false,
      workId,
      added: { P1324: false, P973: false, P178: false },
    };
  }

  await submitEditEntity(
    apiUrl,
    lgname,
    lgpassword,
    workId,
    { claims: patchClaims },
    summary || `Add GitHub repo identifiers (P1324/P973/P178) on ${workId}`,
  );
  return {
    edited: true,
    workId,
    added: {
      P1324: !hadP1324,
      P973: !hadP973,
      P178: !hadP178,
    },
  };
}

/**
 * Add P800 (notable work) on personItemId → workItemId when missing. Requires login.
 * @returns {Promise<{ added: boolean, personId: string, workId: string }>}
 */
export async function submitAddP800NotableWorkIfMissing(
  apiUrl,
  lgname,
  lgpassword,
  personItemId,
  workItemId,
  referenceSnaksObject,
  summary,
) {
  const personId = canonicalItemQid(personItemId);
  const workId = canonicalItemQid(workItemId);
  if (!personId || !workId) {
    throw new Error(
      `submitAddP800NotableWorkIfMissing: invalid Q id person=${personItemId} work=${workItemId}`,
    );
  }
  const ent = await fetchWikidataEntity(apiUrl, personId, "claims");
  if (claimsIncludeP800Target(ent.claims, workId)) {
    return { added: false, personId, workId };
  }
  await submitEditEntity(
    apiUrl,
    lgname,
    lgpassword,
    personId,
    {
      claims: {
        P800: [wikidataClaimItem("P800", workId, referenceSnaksObject)],
      },
    },
    summary || `Add notable work (P800) ${workId}`,
  );
  return { added: true, personId, workId };
}

export async function submitNewItem(apiUrl, lgname, lgpassword, entity, summary) {
  const { cookie, csrf } = await wikidataLoginSession(apiUrl, lgname, lgpassword);

  const editBody = new URLSearchParams({
    action: "wbeditentity",
    new: "item",
    token: csrf,
    format: "json",
    bot: "1",
    data: JSON.stringify(entity),
    summary: summary || "Create item (wikidata tool)",
  });

  const editRes = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      cookie,
    },
    body: editBody,
  });
  const editJson = await editRes.json();
  if (editJson.error) {
    throw new Error(`wbeditentity: ${JSON.stringify(editJson.error)}`);
  }
  const id = editJson.entity?.id;
  if (!id) {
    throw new Error(`Unexpected response: ${JSON.stringify(editJson)}`);
  }
  return { id, raw: editJson };
}
