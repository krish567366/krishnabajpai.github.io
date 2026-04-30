import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Profiles = () => {
  const title = "Profiles & Identifiers | Krishna Bajpai";
  const description =
    "A single hub page linking authoritative identifiers and primary profiles for Krishna Bajpai. Designed to help faster entity reconciliation for search engines.";
  const canonical = "https://krishnabajpai.me/profiles";

  const profiles = [
    { name: "Official entity page", url: "https://krishnabajpai.me/about/krishna-bajpai" },
    { name: "Press & Mentions", url: "https://krishnabajpai.me/press" },
    { name: "Wikidata (Q137462720)", url: "https://www.wikidata.org/wiki/Q137462720" },
    { name: "ORCID (0009-0006-5618-1834)", url: "https://orcid.org/0009-0006-5618-1834" },
    { name: "Google Scholar (zhQAzQoAAAAJ)", url: "https://scholar.google.com/citations?user=zhQAzQoAAAAJ" },
    { name: "LinkedIn", url: "https://linkedin.com/in/bajpai-krishna" },
    { name: "GitHub", url: "https://github.com/krish567366" },
    { name: "Medium", url: "https://medium.com/@krishnabajpai" },
    { name: "Crunchbase", url: "https://www.crunchbase.com/person/krishna-bajpai-265d" },
    { name: "Instagram", url: "https://www.instagram.com/bajpai__krishna/" },
  ] as const;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {profiles.map((p) => (
          <link key={p.url} rel="me" href={p.url} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${canonical}#profiles`,
            url: canonical,
            name: title,
            description,
            about: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: profiles.map((p, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: { "@type": "Thing", name: p.name, url: p.url },
              })),
            },
            isPartOf: { "@type": "WebSite", "@id": "https://krishnabajpai.me/#website" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://krishnabajpai.me/" },
              { "@type": "ListItem", position: 2, name: "Profiles & Identifiers", item: canonical },
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
                <h1 className="text-4xl font-light text-foreground mb-4 leading-tight">Profiles & Identifiers</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              </header>

              <section className="space-y-3">
                {profiles.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-border bg-background/40 p-5 hover:bg-background/60 transition-colors"
                  >
                    <div className="text-lg text-foreground">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-1 break-all">{p.url}</div>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profiles;

