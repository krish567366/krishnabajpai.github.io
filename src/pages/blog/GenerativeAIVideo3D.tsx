import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GenerativeAIVideo3D = () => {
  const title = "Generative AI for Video, Games, and 3D: What’s Real vs Hype";
  const description =
    "Generative AI is moving beyond text: video, 3D assets, and game workflows. Here’s what’s production-ready, what’s not, and where startups can win.";
  const canonical = "https://krishnabajpai.me/blog/generative-ai-video-3d";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="generative AI, video generation, 3D generation, game development, content automation, diffusion models"
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
          articleSection: "Generative AI",
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
                    Generative AI
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">{title}</h1>
                <p className="text-xl leading-relaxed text-muted-foreground">{description}</p>
              </header>

              <article className="prose prose-lg max-w-none text-foreground">
                <h2>Production-ready workflows</h2>
                <ul>
                  <li><strong>Asset generation</strong>: thumbnails, b-roll, concept art</li>
                  <li><strong>Editing copilots</strong>: cut detection, captions, repurposing</li>
                  <li><strong>3D pipelines</strong>: texture + material generation</li>
                </ul>

                <h2>Hard problems (still unsolved)</h2>
                <ul>
                  <li><strong>Consistency</strong> across scenes and long videos</li>
                  <li><strong>IP governance</strong> and provenance</li>
                  <li><strong>Real-time</strong> interactive generation at scale</li>
                </ul>

                <h2>Startup wedges</h2>
                <ul>
                  <li>Creator workflows: script → storyboard → publish automation</li>
                  <li>Game studios: 3D asset tooling with human review</li>
                  <li>Enterprise marketing: brand-safe content generation + approvals</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GenerativeAIVideo3D;

