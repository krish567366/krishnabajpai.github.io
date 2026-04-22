import Layout from "@/components/layout/Layout";
import { revolutionaryDiscoveries } from "@/data/rssContentCollector";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://krishnabajpai.me";

export default function DiscoveryDetail() {
  const { slug } = useParams();
  const discovery = revolutionaryDiscoveries.find((d) => d.id === slug);

  if (!discovery) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-light text-foreground mb-4">Discovery not found</h1>
          <p className="text-muted-foreground mb-8">The requested discovery page doesn’t exist.</p>
          <Link to="/" className="text-accent hover:underline">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${BASE_URL}/discoveries/${discovery.id}`;

  return (
    <Layout>
      <Helmet>
        <title>{discovery.title} | Krishna Bajpai</title>
        <meta name="description" content={discovery.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${discovery.title} | Krishna Bajpai`} />
        <meta property="og:description" content={discovery.description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground">Discoveries</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <h1 className="text-4xl font-light text-foreground mb-4">{discovery.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{discovery.description}</p>

        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: discovery.content ?? "" }} />
        </div>
      </div>
    </Layout>
  );
}

