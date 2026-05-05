import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, "dist");
const INDEX_HTML = path.join(DIST_DIR, "index.html");
const SITEMAP_XML = path.join(ROOT, "public", "sitemap.xml");
const TOOLS_MANIFEST = path.join(ROOT, "public", "data", "tools-manifest.json");

const SITE_HOSTS = new Set(["krishnabajpai.me", "www.krishnabajpai.me"]);

/** Paths that resolve to plain files — do not stamp index.html copies here. */
const SKIP_PATH_RE =
  /\.(txt|xml|json|ico|png|jpe?g|gif|webp|svg|css|js|mjs|cjs|map|woff2?|ttf|eot|pdf|zip)$/i;

/** Extra SPA routes advertised in structured data but not always present in sitemap. */
const EXTRA_ROUTES = [
  "/search",
  "/webinars",
  "/services/ml-consulting",
  "/services/technical-leadership",
  "/services/data-strategy",
  "/videos/enterprise-ai-masterclass",
  "/videos/embed/enterprise-ai-masterclass",
  "/videos/embed/quantum-computing-ai",
];

async function routesFromSitemap() {
  const xml = await fs.readFile(SITEMAP_XML, "utf8");
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim());
  const routes = [];
  for (const raw of urls) {
    let u;
    try {
      u = new URL(raw);
    } catch {
      continue;
    }
    if (!SITE_HOSTS.has(u.hostname)) continue;
    const pathname =
      u.pathname.replace(/\/+$/, "") === "" ? "/" : u.pathname.replace(/\/+$/, "") || "/";
    if (pathname !== "/" && SKIP_PATH_RE.test(pathname)) continue;
    routes.push(pathname);
  }
  return routes;
}

async function routesFromToolsManifest() {
  const raw = await fs.readFile(TOOLS_MANIFEST, "utf8");
  const parsed = JSON.parse(raw);
  const slugs =
    parsed?.tools?.map((t) => t?.slug).filter((s) => typeof s === "string" && s.length > 0) ?? [];
  const uniq = [...new Set(slugs)];
  return uniq.map((slug) => `/tools/${slug}`);
}

function normalizeRoutes(list) {
  const out = new Set();
  for (let r of list) {
    if (!r.startsWith("/")) r = `/${r}`;
    r = r.replace(/\/+$/, "") || "/";
    out.add(r);
  }
  return [...out];
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function main() {
  const [sitemapRoutes, manifestToolRoutes] = await Promise.all([
    routesFromSitemap(),
    routesFromToolsManifest(),
  ]);

  const routes = normalizeRoutes([
    ...sitemapRoutes,
    ...manifestToolRoutes,
    ...EXTRA_ROUTES,
  ]);

  const index = await fs.readFile(INDEX_HTML, "utf8");

  await Promise.all(
    routes.map(async (route) => {
      if (route === "/") return;
      const targetDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      await ensureDir(targetDir);
      await fs.writeFile(path.join(targetDir, "index.html"), index, "utf8");
    }),
  );

  console.log(`Prerendered ${routes.filter((r) => r !== "/").length} route folders into dist/ (${routes.length} unique paths).`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
