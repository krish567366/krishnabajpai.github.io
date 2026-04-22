import { promises as fs } from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve(process.cwd(), "dist");

async function listHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listHtmlFiles(p)));
    else if (e.isFile() && e.name === "index.html") out.push(p);
  }
  return out;
}

function deferStylesheetLink(html) {
  // Convert: <link rel="stylesheet" ... href="/assets/style-XYZ.css">
  // Into:   <link rel="preload" as="style" ... onload="...rel='stylesheet'">
  //         <noscript>fallback</noscript>
  return html.replace(
    /<link\s+([^>]*?)rel=["']stylesheet["']([^>]*?)href=["'](\/assets\/style-[^"']+?\.css)["']([^>]*?)>/i,
    (_m, a, b, href, c) => {
      const attrs = `${a}${b}`.trim();
      const cleaned = attrs
        .replace(/\s+/g, " ")
        .replace(/\s*(crossorigin|referrerpolicy|integrity|media|type)=["'][^"']*["']/gi, (x) => x)
        .trim();
      const preload = `<link ${cleaned} rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">`;
      const noscript = `<noscript><link ${cleaned} rel="stylesheet" href="${href}"></noscript>`;
      return `${preload}\n    ${noscript}`;
    },
  );
}

async function main() {
  const files = await listHtmlFiles(DIST_DIR);
  await Promise.all(
    files.map(async (file) => {
      const html = await fs.readFile(file, "utf8");
      const optimized = deferStylesheetLink(html);
      if (optimized !== html) await fs.writeFile(file, optimized, "utf8");
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

