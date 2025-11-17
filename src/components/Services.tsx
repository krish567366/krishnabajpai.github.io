import Head from 'next/head';

const Services = () => {
  const services = [
    {
      title: "Predictive Modeling",
      description: "Custom ML models that forecast trends, demand, failures, and opportunities with 90%+ accuracy.",
      features: [
        "Time series forecasting",
        "Classification & regression models", 
        "Ensemble methods",
        "Model interpretability"
      ],
      annotation: "Most popular!"
    },
    {
      title: "Optimization & Quantum Solutions",
      description: "Quantum-enhanced algorithms for complex optimization problems that save millions in operational costs.",
      features: [
        "Supply chain optimization",
        "Resource allocation",
        "Portfolio optimization",
        "Quantum hybrid algorithms"
      ],
      annotation: "Cutting edge"
    },
    {
      title: "AI Automation",
      description: "Intelligent workflow automation that learns and adapts to your business processes.",
      features: [
        "Process automation",
        "Intelligent document processing",
        "Chatbots & virtual assistants",
        "Decision support systems"
      ],
      annotation: "High ROI"
    },
    {
      title: "Custom ML Pipelines",
      description: "End-to-end MLOps infrastructure that scales with your business and maintains model performance.",
      features: [
        "Data pipeline architecture",
        "Model training & deployment",
        "Monitoring & maintenance",
        "A/B testing frameworks"
      ],
      annotation: "Enterprise ready"
    },
    {
      title: "AI Platform Development",
      description: "Custom agents, workflow systems, enterprise APIs that power your business operations with intelligent automation.",
      features: [
        "Custom AI agents",
        "Workflow automation systems",
        "Enterprise API development",
        "Multi-agent orchestration"
      ],
      annotation: "Revolutionary"
    },
    {
      title: "ML/Optimization Implementation",
      description: "Advanced optimization pipelines with AutoML, hyperparameter tuning, and quantum-inspired search algorithms.",
      features: [
        "Optimization pipelines",
        "AutoML implementation",
        "Hyperparameter tuning",
        "Quantum-inspired search"
      ],
      annotation: "Next-gen"
    },
    {
      title: "AI Infrastructure Setup",
      description: "GPU servers, Docker/NIM deployments, and scalable inference stacks for production-ready AI systems.",
      features: [
        "GPU server configuration",
        "Docker/NIM deployments",
        "Scalable inference stacks",
        "Cloud infrastructure optimization"
      ],
      annotation: "Production ready"
    },
    {
      title: "Custom AI Model Integration",
      description: "ASR, NLP, image processing, LLMs, embeddings, and comprehensive monitoring for seamless AI integration.",
      features: [
        "ASR & speech processing",
        "NLP & language models",
        "Computer vision & image AI",
        "LLMs, embeddings & monitoring"
      ],
      annotation: "Comprehensive"
    }
  ];

  // --- SEO/SRE/Edge Best Practices ---
  // 1. Structured Data (JSON-LD) for Services
  // 2. Canonical Tag (SSR/Head)
  // 3. H1-H6 Hierarchy
  // 4. Internal Linking for Topic Clusters
  // 5. Lazy Loading for Images
  // 6. Meta Tags (SSR/Head)
  // 7. SRE/SEO/Edge Comments
  // 8. Privacy/GDPR links
  // 9. Hreflang for international SEO
  // 10. HTTPS/Security comments
  // 11. Monitoring/Observability comments

  // SSR/Head rendering for SEO
  // One JSON-LD per service

  return (
    <>
      <Head>
        <title>Krishna Bajpai - AI & ML Consulting Services | Healthcare, Fintech, Supply Chain AI</title>
        <meta name="description" content="Krishna Bajpai - Healthcare AI solutions, Fintech AI solutions, Supply chain optimization, Retail AI, Predictive analytics, MLOps, Quantum ML, Business process AI integration, and more. Expert SRE/SEO/Edge/AI integration." />
        <meta name="keywords" content="Healthcare AI solutions, Predictive patient analytics, Medical ML models, AI for diagnostics & triage, Clinical data modeling, Fintech AI solutions, Fraud detection ML models, Predictive risk analytics, Algorithmic trading optimization, Credit scoring ML models, Supply chain optimization AI, Predictive maintenance ML, Industrial AI automation, Production efficiency AI, Resource allocation ML, Customer behavior prediction AI, Recommendation engine ML, Demand forecasting models, Inventory optimization AI, Personalized marketing AI, Machine intelligence consulting, Data-driven decision making, AI workflow automation, Predictive analytics solutions, Hybrid AI-quantum algorithms, Scalable MLOps infrastructure, Business process AI integration" />
        <link rel="canonical" href="https://krishnabajpai.me/services" />
        <meta property="og:title" content="Krishna Bajpai - AI & ML Consulting Services | Healthcare, Fintech, Supply Chain AI" />
        <meta property="og:description" content="Krishna Bajpai - Healthcare, Fintech, Manufacturing, Retail, and E-Commerce AI solutions. Predictive analytics, automation, and quantum ML for business growth." />
        <meta property="og:url" content="https://krishnabajpai.me/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Krishna Bajpai - AI/ML Consulting Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krishna Bajpai - AI & ML Consulting Services | Healthcare, Fintech, Supply Chain AI" />
        <meta name="twitter:description" content="Krishna Bajpai - Healthcare, Fintech, Manufacturing, Retail, and E-Commerce AI solutions. Predictive analytics, automation, and quantum ML for business growth." />
        {/* International SEO: hreflang tags */}
        <link rel="alternate" href="https://krishnabajpai.me/services" hrefLang="en" />
        <link rel="alternate" href="https://krishnabajpai.me/services?lang=hi" hrefLang="hi" />
        {/* Security: Ensure HTTPS, TLS 1.3, HTTP/3 at infra level */}
        {/* Monitoring: Integrate synthetic checks, Prometheus, Grafana */}
      </Head>
      {/* Structured Data: One per service for rich results */}
      {services.map(service => (
        <Head key={service.title}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": service.title,
                "provider": {
                  "@type": "Person",
                  "name": "Krishna Bajpai"
                },
                "serviceType": service.title,
                "areaServed": "Global",
                "description": service.description
              })
            }}
          />
        </Head>
      ))}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-foreground mb-6">
                How I Can{" "}
                <span className="font-sketch font-bold relative">
                  Help You Win
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every solution is tailored to your specific business goals and built for maximum ROI. 
                No cookie-cutter approaches, no unnecessary complexity.
              </p>
            </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <section key={index} aria-labelledby={`service-title-${index}`}>
                <div className="bg-background border border-border p-8 relative">
                  {/* Handwritten annotation, ARIA accessible */}
                  <div
                    className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-sketch transform rotate-3"
                    aria-label={service.annotation}
                    role="note"
                  >
                    {service.annotation}
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 id={`service-title-${index}`} className="text-2xl font-light text-foreground mb-3">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {/* Industry/LSI keywords for SEO */}
                        {service.title === "Predictive Modeling" && "Healthcare AI solutions, Predictive patient analytics, Medical ML models, AI for diagnostics & triage, Clinical data modeling. "}
                        {service.title === "Optimization & Quantum Solutions" && "Fintech AI solutions, Fraud detection ML models, Predictive risk analytics, Algorithmic trading optimization, Credit scoring ML models. "}
                        {service.title === "AI Automation" && "Supply chain optimization AI, Predictive maintenance ML, Industrial AI automation, Production efficiency AI, Resource allocation ML. "}
                        {service.title === "Custom ML Pipelines" && "Customer behavior prediction AI, Recommendation engine ML, Demand forecasting models, Inventory optimization AI, Personalized marketing AI. "}
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-accent mb-3">What you get:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      {/* Internal linking for topic clusters */}
                      <a href="/case-studies" className="text-accent hover:text-foreground transition-colors font-medium">
                        Learn more about this service →
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mt-20">
            <h2 className="text-2xl font-light text-center text-foreground mb-12">
              My Process{" "}
              <span className="font-sketch text-sketch">(it actually works)</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understand your business & data" },
                { step: "02", title: "Prototype", desc: "Build & test MVP solution" },
                { step: "03", title: "Deploy", desc: "Scale to production systems" },
                { step: "04", title: "Optimize", desc: "Monitor & improve performance" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  {/* Visible image for SEO/performance with descriptive alt text */}
                  <img src={`/assets/process-${phase.step}.webp`} alt={`Process step ${phase.step}: ${phase.title}`} loading="lazy" width={48} height={48} className="mx-auto mb-4" />
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-light mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Privacy Policy & GDPR Compliance */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          <a href="/privacy" className="underline mr-4">Privacy Policy</a>
          <a href="/gdpr" className="underline">GDPR Compliance</a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;