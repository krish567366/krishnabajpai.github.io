import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const QuantumAIExplained60Seconds = () => {
  const title = "Quantum AI Explained in 60 Seconds (Then the Real Details)";
  const description =
    "A fast explanation of quantum + AI in plain language, followed by the practical truth: where hybrid quantum-classical methods matter and how to evaluate them.";
  const canonical = "https://krishnabajpai.me/blog/quantum-ai-explained-60-seconds";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="quantum AI, quantum computing explained, hybrid quantum classical, optimization, QAOA, VQE"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          author: { "@type": "Person", name: "Krishna Bajpai", url: "https://krishnabajpai.me" },
          publisher: { "@type": "Person", name: "Krishna Bajpai", url: "https://krishnabajpai.me" },
          datePublished: "2026-04-22",
          dateModified: "2026-04-22",
          url: canonical,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          articleSection: "Quantum Computing",
          inLanguage: "en-US",
        })}</script>
      </Helmet>

      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <nav className="mb-8">
                <Link to="/blog" className="text-accent hover:text-foreground">
                  ← Back to Blog
                </Link>
              </nav>

              <header className="mb-12">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Quantum Computing
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">{title}</h1>
                <p className="text-xl leading-relaxed text-muted-foreground">{description}</p>
              </header>

              <article className="prose prose-lg max-w-none text-foreground">
                <h2>60‑second version</h2>
                <p>
                  Quantum computing explores many states at once (in a very specific mathematical way).
                  In AI, it’s most promising for <strong>optimization and sampling</strong>—where classical
                  methods struggle with huge search spaces.
                </p>

                <h2>The practical truth</h2>
                <ul>
                  <li><strong>Hybrid wins</strong>: quantum subroutines + classical heuristics.</li>
                  <li><strong>Measure</strong>: quality vs cost vs reproducibility.</li>
                  <li><strong>Start with constraints</strong>: define the real optimization objective.</li>
                </ul>

                <h2>When to use it</h2>
                <ul>
                  <li>Complex scheduling and routing with constraints</li>
                  <li>Portfolio optimization under risk bounds</li>
                  <li>Drug discovery ranking / candidate search pipelines</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QuantumAIExplained60Seconds;

