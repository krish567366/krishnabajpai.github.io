import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PhysicalAIRobotsDrones = () => {
  const title = "Physical AI: Robots, Drones, and Real‑World Autonomy";
  const description =
    "Physical AI is the shift from software-only to systems that sense, decide, and act. Learn the stack (perception → planning → control) and real deployment constraints.";
  const canonical = "https://krishnabajpai.me/blog/physical-ai-robots-drones";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="physical AI, robotics, drones, autonomy, perception, control systems, reinforcement learning, edge AI"
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
          articleSection: "Robotics",
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
                    Robotics
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">{title}</h1>
                <p className="text-xl leading-relaxed text-muted-foreground">{description}</p>
              </header>

              <article className="prose prose-lg max-w-none text-foreground">
                <h2>The autonomy stack</h2>
                <ol>
                  <li><strong>Perception</strong>: cameras/LiDAR, detection, tracking, mapping</li>
                  <li><strong>Planning</strong>: goals, constraints, safe trajectories</li>
                  <li><strong>Control</strong>: low-level actuation, stability, latency</li>
                </ol>

                <h2>What makes physical AI hard</h2>
                <ul>
                  <li><strong>Safety</strong>: fail-safe behavior under uncertainty</li>
                  <li><strong>Latency</strong>: real-time constraints and edge compute</li>
                  <li><strong>Data</strong>: long-tail environments and sim-to-real gaps</li>
                </ul>

                <h2>Where to build</h2>
                <ul>
                  <li>Warehouse automation and inspection</li>
                  <li>Precision agriculture drones</li>
                  <li>Industrial safety monitoring with edge inference</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PhysicalAIRobotsDrones;

