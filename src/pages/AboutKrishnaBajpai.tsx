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
        <link rel="me" href="https://krishnabajpai.me/" />
        <link rel="me" href="https://www.wikidata.org/wiki/Q137462720" />
        <link rel="me" href="https://orcid.org/0009-0006-5618-1834" />
        <link rel="me" href="https://scholar.google.com/citations?user=zhQAzQoAAAAJ" />
        <link rel="me" href="https://linkedin.com/in/bajpai-krishna" />
        <link rel="me" href="https://github.com/krish567366" />
        <link rel="me" href="https://www.instagram.com/bajpai__krishna/" />
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
                /**
                 * ProfilePage is the primary KG signal — Google uses this type to
                 * create / anchor the knowledge panel for a person entity.
                 * mainEntity links the page to the canonical Person @id.
                 */
                "@type": "ProfilePage",
                "@id": `${canonical}#profilepage`,
                url: canonical,
                name: title,
                description,
                dateCreated: "2025-01-01T00:00:00Z",
                dateModified: "2026-04-22T12:00:00.000Z",
                isPartOf: { "@type": "WebSite", "@id": "https://krishnabajpai.me/#website" },
                mainEntity: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://krishnabajpai.me/me.jpg",
                  caption: "Krishna Bajpai — AI/ML consultant and quantitative finance researcher",
                },
                inLanguage: "en-US",
              },
              {
                "@type": "Organization",
                "@id": "https://krishnabajpai.me/#organization",
                name: "PragyaaAI",
                alternateName: ["Krishna Bajpai Consulting", "Krishna Bajpai Elite AI Solutions"],
                url: "https://krishnabajpai.me",
                description:
                  "Boutique enterprise AI and quantitative systems practice: architecture, MLOps, quantum optimization, and ultra-low latency trading infrastructure.",
                founder: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
                employee: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
                foundingDate: "2024",
                logo: {
                  "@type": "ImageObject",
                  url: "https://krishnabajpai.me/me.jpg",
                  caption: "PragyaaAI",
                },
                sameAs: [
                  "https://www.wikidata.org/wiki/Q137462720",
                  "https://www.linkedin.com/in/bajpai-krishna",
                  "https://github.com/krish567366",
                ],
              },
              {
                "@type": "Person",
                "@id": "https://krishnabajpai.me/#person",
                name: "Krishna Bajpai",
                description:
                  "Krishna Bajpai is an AI/ML consultant, quantum computing specialist, and quantitative finance researcher. He delivers enterprise AI architecture, MLOps, and ultra-low latency trading systems (890 ns median execution).",
                url: "https://krishnabajpai.me",
                mainEntityOfPage: `${canonical}#profilepage`,
                image: {
                  "@type": "ImageObject",
                  url: "https://krishnabajpai.me/me.jpg",
                  width: 800,
                  height: 800,
                  caption: "Krishna Bajpai",
                },
                email: "krishna@krishnabajpai.me",
                nationality: { "@type": "Country", name: "India" },
                jobTitle: [
                  "AI & ML Solutions Architect",
                  "Senior Machine Learning Consultant",
                  "Quantum Computing Specialist",
                  "Quantitative Finance Researcher",
                ],
                worksFor: { "@type": "Organization", "@id": "https://krishnabajpai.me/#organization" },
                homeLocation: {
                  "@type": "Place",
                  name: "Kanpur, Uttar Pradesh, India",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kanpur",
                    addressRegion: "Uttar Pradesh",
                    addressCountry: "IN",
                  },
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Indian Institute of Technology",
                  sameAs: "https://www.iit.ac.in/",
                },
                knowsAbout: [
                  { "@type": "DefinedTerm", name: "Artificial Intelligence", sameAs: "https://www.wikidata.org/wiki/Q11660" },
                  { "@type": "DefinedTerm", name: "Machine Learning", sameAs: "https://www.wikidata.org/wiki/Q2539" },
                  { "@type": "DefinedTerm", name: "Quantum Computing", sameAs: "https://www.wikidata.org/wiki/Q207958" },
                  { "@type": "DefinedTerm", name: "Quantitative Finance", sameAs: "https://www.wikidata.org/wiki/Q748349" },
                  { "@type": "DefinedTerm", name: "High-Frequency Trading", sameAs: "https://www.wikidata.org/wiki/Q1068258" },
                  { "@type": "DefinedTerm", name: "Deep Learning", sameAs: "https://www.wikidata.org/wiki/Q197536" },
                  { "@type": "DefinedTerm", name: "MLOps", sameAs: "https://www.wikidata.org/wiki/Q110588591" },
                  { "@type": "DefinedTerm", name: "Natural Language Processing", sameAs: "https://www.wikidata.org/wiki/Q30642" },
                  { "@type": "DefinedTerm", name: "Computer Vision", sameAs: "https://www.wikidata.org/wiki/Q1156518" },
                ],
                identifier: [
                  { "@type": "PropertyValue", propertyID: "Wikidata", value: "Q137462720", url: "https://www.wikidata.org/wiki/Q137462720" },
                  { "@type": "PropertyValue", propertyID: "ORCID", value: "0009-0006-5618-1834", url: "https://orcid.org/0009-0006-5618-1834" },
                  { "@type": "PropertyValue", propertyID: "Google Scholar", value: "zhQAzQoAAAAJ", url: "https://scholar.google.com/citations?user=zhQAzQoAAAAJ" },
                ],
                sameAs: [
                  "https://www.wikidata.org/wiki/Q137462720",
                  "https://orcid.org/0009-0006-5618-1834",
                  "https://scholar.google.com/citations?user=zhQAzQoAAAAJ",
                  "https://www.linkedin.com/in/bajpai-krishna",
                  "https://github.com/krish567366",
                  "https://medium.com/@krishnabajpai",
                  "https://www.crunchbase.com/person/krishna-bajpai-265d",
                  "https://www.instagram.com/bajpai__krishna/",
                  "https://krishnabajpai.me",
                ],
                subjectOf: [
                  {
                    "@type": "CollectionPage",
                    "@id": "https://krishnabajpai.me/press#press",
                    url: "https://krishnabajpai.me/press",
                    name: "Press & Mentions",
                  },
                  {
                    "@type": "SoftwareSourceCode",
                    "@id": "https://github.com/krish567366/submicro-execution-engine#repo",
                    name: "Sub-Microsecond Trading Execution Engine",
                    codeRepository: "https://github.com/krish567366/submicro-execution-engine",
                    url: "https://github.com/krish567366/submicro-execution-engine",
                    programmingLanguage: ["C++", "Assembly", "Python"],
                    author: { "@type": "Person", "@id": "https://krishnabajpai.me/#person" },
                  },
                ],
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://krishnabajpai.me/" },
              { "@type": "ListItem", position: 2, name: "Official Entity Page", item: canonical },
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

