import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Press = () => {
  const title = "Press & Mentions | Krishna Bajpai";
  const description =
    "Independent press and public mentions featuring Krishna Bajpai: press releases, event highlights, and public coverage. Built to help search engines connect coverage to the same person entity.";
  const canonical = "https://krishnabajpai.me/press";

  /** SocialMediaPosting / NewsArticle: include author + full ISO8601 dates for Google's discussion/social parsers */
  function orgAuthor(name: string, url: string) {
    return { "@type": "Organization" as const, name, url };
  }
  function datePublishedIso(ymd: string) {
    return ymd.includes("T") ? ymd : `${ymd}T12:00:00.000Z`;
  }

  const mentions = [
    {
      id: "qwoted-890ns",
      type: "NewsArticle" as const,
      headline:
        "19-Year-Old Developer Unveils 890-Nanosecond Execution Engine, Challenging HFT Industry Standards",
      url: "https://app.qwoted.com/press_releases/19-year-old-developer-unveils-890-nanosecond-execution-engine-challenging-hft-industry-standards",
      datePublished: "2026-04-24",
      publisher: { name: "Qwoted", url: "https://app.qwoted.com/" },
      authorOrg: orgAuthor("Qwoted", "https://app.qwoted.com/"),
    },
    {
      id: "stpi-instagram-reel",
      type: "SocialMediaPosting" as const,
      headline: "STPI AI Summit 2026 — reel featuring Krishna Bajpai (Instagram)",
      url: "https://www.instagram.com/p/DVqSofckez5/",
      datePublished: "2026-03-09",
      publisher: { name: "STPI", url: "https://www.linkedin.com/company/stpiindia/" },
      authorOrg: orgAuthor("STPI", "https://www.linkedin.com/company/stpiindia/"),
    },
    {
      id: "stpi-linkedin-post",
      type: "SocialMediaPosting" as const,
      headline: "STPI AI Summit 2026 — reel featuring Krishna Bajpai (LinkedIn)",
      url: "https://www.linkedin.com/posts/stpiindia_indiaaiimpactsummit2026-indiaai-digitalindia-activity-7436723695202697216-0A60",
      datePublished: "2026-03-09",
      publisher: { name: "STPI", url: "https://www.linkedin.com/company/stpiindia/" },
      authorOrg: orgAuthor("STPI", "https://www.linkedin.com/company/stpiindia/"),
    },
  ] as const;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="me" href="https://krishnabajpai.me/about/krishna-bajpai" />
        <link rel="me" href="https://www.wikidata.org/wiki/Q137462720" />
        <link rel="me" href="https://orcid.org/0009-0006-5618-1834" />
        <link rel="me" href="https://scholar.google.com/citations?user=zhQAzQoAAAAJ" />
        <link rel="me" href="https://linkedin.com/in/bajpai-krishna" />
        <link rel="me" href="https://github.com/krish567366" />
        <link rel="me" href="https://www.instagram.com/bajpai__krishna/" />
        <meta
          name="keywords"
          content="Krishna Bajpai press, Krishna Bajpai mentions, press release, Qwoted, STPI, AI Summit 2026, coverage"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${canonical}#press`,
            url: canonical,
            name: title,
            description,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: mentions.map((m, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: {
                  "@type": m.type,
                  "@id": `${m.url}#mention`,
                  headline: m.headline,
                  url: m.url,
                  datePublished: datePublishedIso(m.datePublished),
                  author: m.authorOrg,
                  publisher: {
                    "@type": "Organization",
                    name: m.publisher.name,
                    url: m.publisher.url,
                  },
                  about: {
                    "@type": "Person",
                    "@id": "https://krishnabajpai.me/#person",
                    name: "Krishna Bajpai",
                  },
                },
              })),
            },
            about: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
            isPartOf: { "@type": "WebSite", "@id": "https://krishnabajpai.me/#website" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://krishnabajpai.me/" },
              { "@type": "ListItem", position: 2, name: "Press & Mentions", item: canonical },
            ],
          })}
        </script>
      </Helmet>

      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <nav className="mb-8">
                <Link to="/" className="text-accent hover:text-foreground">
                  ← Back to Home
                </Link>
              </nav>

              <header className="mb-10">
                <h1 className="text-4xl font-light text-foreground mb-4 leading-tight">Press & Mentions</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              </header>

              <section className="space-y-4">
                {mentions.map((m) => (
                  <a
                    key={m.id}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-border bg-background/40 p-5 hover:bg-background/60 transition-colors"
                  >
                    <div className="text-sm text-muted-foreground mb-2">
                      {m.publisher.name} • {m.datePublished}
                    </div>
                    <div className="text-lg text-foreground">{m.headline}</div>
                  </a>
                ))}
              </section>

              <div className="mt-10 text-sm text-muted-foreground">
                For identity context, see{" "}
                <Link to="/about/krishna-bajpai" className="text-accent hover:text-foreground underline">
                  the canonical entity page
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Press;

