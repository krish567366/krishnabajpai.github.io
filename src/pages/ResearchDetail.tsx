import Layout from "@/components/layout/Layout";
import { researchPublications } from "@/data/rssContentCollector";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://krishnabajpai.me";

export default function ResearchDetail() {
  const { slug } = useParams();
  const pub = researchPublications.find((p) => p.id === slug);

  if (!pub) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-light text-foreground mb-4">Research not found</h1>
          <p className="text-muted-foreground mb-8">The requested research page doesn’t exist.</p>
          <Link to="/blog" className="text-accent hover:underline">
            Browse writing
          </Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${BASE_URL}/research/${pub.id}`;

  return (
    <Layout>
      <Helmet>
        <title>{pub.title} | Krishna Bajpai</title>
        <meta name="description" content={pub.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${pub.title} | Krishna Bajpai`} />
        <meta property="og:description" content={pub.description} />
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
                  <span className="text-sm text-foreground">Research</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <h1 className="text-4xl font-light text-foreground mb-4">{pub.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{pub.description}</p>

        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: pub.content ?? "" }} />
        </div>
      </div>
    </Layout>
  );
}

