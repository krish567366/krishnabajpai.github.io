import { promises as fs } from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve(process.cwd(), "dist");
const INDEX_HTML = path.join(DIST_DIR, "index.html");

// Routes that should resolve directly on GitHub Pages without relying on 404.html redirects.
// This avoids Search Console "Page with redirect" for deep links.
const ROUTES = [
  "/real-estate-consortium",
  "/consortium-process",
  "/case-studies",
  "/services",
  "/testimonials",
  "/tools",
  "/blog",
  "/blog/ai-agents-multi-agent-systems",
  "/blog/domain-specific-ai-dslms",
  "/blog/ai-digital-coworkers",
  "/blog/quantum-ai-optimization-frontier",
  "/blog/climate-tech-sustainability-ai",
  "/blog/ai-cybersecurity-defense",
  "/blog/ai-healthcare-biotech",
  "/blog/no-code-ai-coding",
  "/blog/generative-ai-video-3d",
  "/blog/hyper-personalization-ai",
  "/blog/physical-ai-robots-drones",
  "/blog/privacy-confidential-computing-ai",
  "/case-studies/fintech-fraud-case-study",
  "/case-studies/healthcare-automation-case-study",
  "/case-studies/manufacturing-case-study",
  "/case-studies/supply-chain-case-study",
  "/case-studies/opentx-payment-gateway",
  "/services/quantum-optimization",
  "/research/markets-adversarial-control-systems",
  "/research/market-control-illusion",
  "/research/pan-omic-framework",
  "/discoveries/ultra-low-latency-execution-engine",
];

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function main() {
  const index = await fs.readFile(INDEX_HTML, "utf8");

  await Promise.all(
    ROUTES.map(async (route) => {
      const targetDir = path.join(DIST_DIR, route.replace(/^\//, ""));
      await ensureDir(targetDir);
      await fs.writeFile(path.join(targetDir, "index.html"), index, "utf8");
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

