import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const META: Record<string, { title: string; description: string }> = {
  "enterprise-ai-masterclass": {
    title: "Enterprise AI Architecture Masterclass (embed)",
    description: "Embeddable watch surface for the enterprise AI architecture masterclass.",
  },
  "quantum-computing-ai": {
    title: "Quantum Computing in AI: Future Trends (embed)",
    description: "Embeddable surface for quantum computing × AI commentary by Krishna Bajpai.",
  },
};

const VideoEmbedPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const key = slug?.trim().toLowerCase() ?? "";
  const meta =
    META[key] ?? {
      title: "Video embed",
      description: "Hosted video embed surface.",
    };

  const canonical =
    slug && /^[a-z0-9-]+$/i.test(slug)
      ? `https://krishnabajpai.me/videos/embed/${encodeURIComponent(slug)}`
      : "https://krishnabajpai.me/videos/embed/placeholder";

  return (
    <Layout>
      <Helmet>
        <title>{meta.title} — Krishna Bajpai</title>
        <meta name="robots" content="noindex, indexifembedded" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <p className="text-sm text-muted-foreground mb-4">
          <Link to={`/videos/${key || "quantum-computing-ai"}`} className="text-accent hover:underline">
            Open canonical watch page
          </Link>
        </p>
        <div className="aspect-video rounded-lg border border-border bg-card flex flex-col items-center justify-center px-8 text-center">
          <p className="text-foreground font-medium mb-3">{meta.title}</p>
          <p className="text-muted-foreground text-sm mb-8 max-w-lg">
            This route exists so branded <code className="text-xs">embedUrl</code> targets resolve with HTTP&nbsp;200 on static hosting,
            avoiding crawler 404 noise. Final iframe sources are swapped in alongside the canonical player release.
          </p>
          <Link
            to={`/videos/${
              key === "enterprise-ai-masterclass"
                ? "enterprise-ai-masterclass"
                : "quantum-computing-ai"
            }`}
            className="text-accent hover:underline"
          >
            Continue to full layout &amp; context
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default VideoEmbedPage;
