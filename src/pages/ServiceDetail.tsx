import Layout from "@/components/layout/Layout";
import { services } from "@/data/rssContentCollector";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://krishnabajpai.me";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-light text-foreground mb-4">Service not found</h1>
          <p className="text-muted-foreground mb-8">The requested service page doesn’t exist.</p>
          <Link to="/services" className="text-accent hover:underline">
            Browse services
          </Link>
        </div>
      </Layout>
    );
  }

  const canonical = `${BASE_URL}/services/${service.id}`;

  return (
    <Layout>
      <Helmet>
        <title>{service.title} | Krishna Bajpai</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${service.title} | Krishna Bajpai`} />
        <meta property="og:description" content={service.description} />
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
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground">{service.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <h1 className="text-4xl font-light text-foreground mb-4">{service.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>

        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: service.content ?? "" }} />
        </div>
      </div>
    </Layout>
  );
}

