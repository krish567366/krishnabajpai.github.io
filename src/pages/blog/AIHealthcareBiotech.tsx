import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AIHealthcareBiotech = () => {
  const title = "AI in Healthcare & Biotech: Diagnostics, Drug Discovery, and Real Deployments";
  const description =
    "AI in healthcare is real now: diagnostics, document automation, clinical workflows, and drug discovery. Here’s where the value is—and how to ship safely.";
  const canonical = "https://krishnabajpai.me/blog/ai-healthcare-biotech";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="AI healthcare, biotech AI, diagnostics, drug discovery, clinical NLP, medical imaging, compliance"
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
          articleSection: "Healthcare",
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
                    Healthcare
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">{title}</h1>
                <p className="text-xl leading-relaxed text-muted-foreground">{description}</p>
              </header>

              <article className="prose prose-lg max-w-none text-foreground">
                <h2>Where AI is delivering today</h2>
                <ul>
                  <li><strong>Clinical NLP</strong>: summaries, coding, prior auth, intake automation.</li>
                  <li><strong>Medical imaging</strong>: triage and decision support.</li>
                  <li><strong>Operational efficiency</strong>: scheduling, claims, denial prediction.</li>
                </ul>

                <h2>Biotech workflows gaining speed</h2>
                <ul>
                  <li>Protein/compound prioritization and simulation pipelines</li>
                  <li>Lab automation and experiment planning</li>
                  <li>Knowledge graphs for literature + assay linking</li>
                </ul>

                <h2>Safety & compliance checklist</h2>
                <ul>
                  <li><strong>Human oversight</strong> for clinical decisions</li>
                  <li><strong>PHI handling</strong>: redaction, access control, retention policies</li>
                  <li><strong>Evaluation</strong>: cohort-based metrics, bias checks, drift monitoring</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AIHealthcareBiotech;

