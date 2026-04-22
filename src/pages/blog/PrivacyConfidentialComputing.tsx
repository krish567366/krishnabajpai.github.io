import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PrivacyConfidentialComputing = () => {
  const title = "Privacy + Confidential Computing: Secure AI Systems in 2026";
  const description =
    "Enterprises want AI without data leakage. Learn privacy-by-design patterns, confidential computing, and how to build secure AI products that pass audits.";
  const canonical = "https://krishnabajpai.me/blog/privacy-confidential-computing-ai";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="privacy, confidential computing, secure AI, data protection, encryption, enclaves, compliance, governance"
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
          articleSection: "Security",
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
                    Security
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">{title}</h1>
                <p className="text-xl leading-relaxed text-muted-foreground">{description}</p>
              </header>

              <article className="prose prose-lg max-w-none text-foreground">
                <h2>Why this trend is accelerating</h2>
                <ul>
                  <li><strong>Regulation</strong>: privacy laws + industry compliance</li>
                  <li><strong>Model risk</strong>: data leakage and prompt injection</li>
                  <li><strong>IP protection</strong>: sensitive docs and code</li>
                </ul>

                <h2>Confidential computing in plain terms</h2>
                <p>
                  It’s about protecting data <em>while in use</em> (not just at rest or in transit),
                  typically using hardware-backed secure enclaves.
                </p>

                <h2>Secure AI design patterns</h2>
                <ul>
                  <li><strong>Scoped retrieval</strong>: least-privilege access to documents</li>
                  <li><strong>Redaction</strong>: PHI/PII removal before model calls</li>
                  <li><strong>Audit logging</strong>: who accessed what, when, why</li>
                  <li><strong>Key management</strong>: rotation, separation of duties</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyConfidentialComputing;

