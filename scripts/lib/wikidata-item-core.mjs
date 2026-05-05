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

function statement(mainsnak, refs) {
  const st = {
    mainsnak,
    type: "statement",
    rank: "normal",
  };
  if (refs) {
    st.references = [{ snaks: refs }];
  }
  return st;
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

export async function submitNewItem(apiUrl, lgname, lgpassword, entity, summary) {
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
