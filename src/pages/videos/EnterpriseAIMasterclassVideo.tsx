import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Clock } from "lucide-react";
import { Helmet } from "react-helmet";

const EnterpriseAIMasterclassVideo = () => {
  return (
    <Layout>
      <Helmet>
        <title>Enterprise AI Architecture Masterclass - Krishna Bajpai</title>
        <meta
          name="description"
          content="Enterprise AI architecture patterns, production MLOps, and scalable delivery—from discovery to hardened inference."
        />
        <link rel="canonical" href="https://krishnabajpai.me/videos/enterprise-ai-masterclass" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Enterprise AI Architecture Masterclass",
            description: "Krishna Bajpai explains advanced enterprise AI architecture patterns and best practices.",
            thumbnailUrl: "https://krishnabajpai.me/videos/masterclass-thumb.jpg",
            uploadDate: "2025-09-01T00:00:00Z",
            duration: "PT1H30M",
            contentUrl: "https://krishnabajpai.me/videos/enterprise-ai-masterclass",
            embedUrl: "https://krishnabajpai.me/videos/embed/enterprise-ai-masterclass",
            interactionStatistic: {
              "@type": "InteractionCounter",
              interactionType: "https://schema.org/WatchAction",
              userInteractionCount: 15000,
            },
            author: {
              "@type": "Person",
              "@id": "https://krishnabajpai.me/#person",
              name: "Krishna Bajpai",
            },
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <nav className="mb-10 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Enterprise AI Masterclass</span>
        </nav>

        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Enterprise AI Architecture Masterclass
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
          Patterns for production-grade enterprise AI delivery: bounded contexts for models, eval harnesses, feature/data contracts,
          and scalable inference—with security and observability baked in.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-10">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> <span>~90 minutes (planned runtime)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Embed:</span>
            <Link to="/videos/embed/enterprise-ai-masterclass" className="text-accent hover:underline">
              Open embed viewer
            </Link>
          </div>
        </div>

        <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center mb-14">
          <div className="text-center px-6">
            <Play className="w-14 h-14 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-foreground mb-2">Video publication pipeline</p>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The public player is rotated through the canonical watch page once the finalized cut is cleared for distribution.
            </p>
            <Link to="/contact">
              <Button>Book a tailored walkthrough for your architecture</Button>
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <Link to="/videos/quantum-computing-ai">
            <Button variant="outline">Quantum AI hub</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default EnterpriseAIMasterclassVideo;
