import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutKrishnaBajpai = () => {
  const title = "Krishna Bajpai (Official Entity Page)";
  const description =
    "Official entity page for Krishna Bajpai. This page consolidates authoritative identifiers (Wikidata, ORCID, Google Scholar) and profiles to help search engines resolve the correct person entity.";
  const canonical = "https://krishnabajpai.me/about/krishna-bajpai";

  return (
    <>
      <Helmet>
        <title>{title} | Krishna Bajpai</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Krishna Bajpai, Krishna Bajpai official, Krishna Bajpai entity, ORCID, Wikidata, Google Scholar, knowledge graph"
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${title} | Krishna Bajpai`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${canonical}#webpage`,
                url: canonical,
                name: title,
                description,
                isPartOf: { "@type": "WebSite", "@id": "https://krishnabajpai.me/#website" },
                about: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
                primaryImageOfPage: { "@type": "ImageObject", url: "https://krishnabajpai.me/me.jpg" },
                inLanguage: "en-US",
              },
              {
                "@type": "Person",
                "@id": "https://krishnabajpai.me/#person",
                name: "Krishna Bajpai",
                url: "https://krishnabajpai.me",
                image: "https://krishnabajpai.me/me.jpg",
                jobTitle: [
                  "AI & ML Solutions Architect",
                  "Senior Machine Learning Consultant",
                  "Quantum Computing Specialist",
                  "Quantitative Finance Researcher",
                ],
                homeLocation: {
                  "@type": "Place",
                  name: "Kanpur, Uttar Pradesh, India",
                },
                identifier: [
                  {
                    "@type": "PropertyValue",
                    propertyID: "Wikidata",
                    value: "Q137462720",
                    url: "https://www.wikidata.org/wiki/Q137462720",
                  },
                  {
                    "@type": "PropertyValue",
                    propertyID: "ORCID",
                    value: "0009-0006-5618-1834",
                    url: "https://orcid.org/0009-0006-5618-1834",
                  },
                  {
                    "@type": "PropertyValue",
                    propertyID: "Google Scholar",
                    value: "zhQAzQoAAAAJ",
                    url: "https://scholar.google.com/citations?user=zhQAzQoAAAAJ",
                  },
                ],
                sameAs: [
                  "https://krishnabajpai.me",
                  "https://linkedin.com/in/bajpai-krishna",
                  "https://github.com/krish567366",
                  "https://scholar.google.com/citations?user=zhQAzQoAAAAJ",
                  "https://www.wikidata.org/wiki/Q137462720",
                  "https://orcid.org/0009-0006-5618-1834",
                  "https://www.crunchbase.com/person/krishna-bajpai-265d",
                  "https://medium.com/@krishnabajpai",
                  "https://www.instagram.com/bajpai__krishna/",
                ],
                subjectOf: [
                  {
                    "@type": "CollectionPage",
                    "@id": "https://krishnabajpai.me/press#press",
                    url: "https://krishnabajpai.me/press",
                    name: "Press & Mentions",
                  },
                ],
              },
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
                <h1 className="text-4xl font-light text-foreground mb-4 leading-tight">
                  Krishna Bajpai (Official Entity Page)
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              </header>

              <section className="grid gap-6">
                <div className="rounded-xl border border-border bg-background/40 p-6">
                  <h2 className="text-xl text-foreground mb-3">Authoritative identifiers</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a
                        href="https://www.wikidata.org/wiki/Q137462720"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        Wikidata: Q137462720
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://orcid.org/0009-0006-5618-1834"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        ORCID: 0009-0006-5618-1834
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://scholar.google.com/citations?user=zhQAzQoAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        Google Scholar: zhQAzQoAAAAJ
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-6">
                  <h2 className="text-xl text-foreground mb-3">Primary profiles</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a
                        href="https://linkedin.com/in/bajpai-krishna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/krish567366"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bajpai__krishna/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-6">
                  <h2 className="text-xl text-foreground mb-3">Press & public mentions</h2>
                  <p className="text-muted-foreground mb-4">
                    A curated list of third‑party pages that mention or feature Krishna Bajpai.
                  </p>
                  <Link to="/press" className="text-accent hover:text-foreground underline">
                    View Press & Mentions →
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutKrishnaBajpai;

