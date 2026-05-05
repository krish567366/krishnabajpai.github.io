import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Webinars = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Leadership Webinars — Krishna Bajpai</title>
        <meta
          name="description"
          content="AI leadership webinars and online sessions covering enterprise AI, MLOps, low-latency systems, and quantitative infrastructure."
        />
        <link rel="canonical" href="https://krishnabajpai.me/webinars" />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-16 max-w-3xl">
        <h1 className="text-4xl font-light mb-6">AI Leadership Webinars</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Public schedules and registrations are coordinated by email so links stay authoritative and avoid duplicated event URLs.
          If you’re organising a cohort or invite-only executive session, mention your audience size, timezone stack, and whether you’d
          prefer a quantum / trading systems / enterprise MLOps focus.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="text-accent hover:underline">
            Request a webinar / briefing
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/videos/quantum-computing-ai" className="text-accent hover:underline">
            Featured video hub
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/press" className="text-accent hover:underline">
            Press &amp; mentions
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Webinars;
