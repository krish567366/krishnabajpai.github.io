import Layout from "@/components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const SiteSearch = () => {
  const [params] = useSearchParams();
  const rawQ = params.get("q")?.trim() || "";

  const title = rawQ ? `Search results for "${rawQ}"` : "Search";

  return (
    <Layout>
      <Helmet>
        <title>{title} — Krishna Bajpai</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Find technical articles, consulting services, and resources on Krishna Bajpai’s AI, ML, and quantitative systems site."
        />
        <link rel="canonical" href="https://krishnabajpai.me/search" />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="text-4xl font-light mb-6">{title}</h1>
        <p className="text-muted-foreground mb-10">
          This site doesn’t expose a crawlable templated Google “site search” URL. Browse high-signal hubs below instead.
          {rawQ ? (
            <>
              {" "}
              You entered:{" "}
              <span className="text-foreground font-medium">{rawQ}</span>
            </>
          ) : null}
        </p>
        <ul className="space-y-4 text-accent">
          <li>
            <Link to="/blog" className="hover:underline">
              Blog &amp; guides
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services overview
            </Link>
          </li>
          <li>
            <Link to="/tools" className="hover:underline">
              Open-source tools
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact / consultation
            </Link>
          </li>
          <li>
            <Link to="/profiles" className="hover:underline">
              Profiles &amp; authoritative identifiers (ORCID / Scholar / Wikidata)
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default SiteSearch;
