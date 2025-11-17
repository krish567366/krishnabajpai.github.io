import Layout from "@/components/layout/Layout";
const Services = () => {
  const services = [
    {
      title: "Predictive Modeling",
      description: "Custom ML models that forecast trends, demand, failures, and opportunities with 90%+ accuracy using Krishna's proven methodologies.",
      features: [
        "Time series forecasting with Prophet Plus",
        "Classification & regression models", 
        "Ensemble methods with XGBoost/LightGBM",
        "Model interpretability with SHAP",
        "Production deployment with MLOps"
      ],
      pricing: "$25k - $75k",
      timeline: "2-4 months",
      annotation: "Most popular!",
      caseStudy: "Manufacturing Corp: 94.4% prediction accuracy"
    },
    {
      title: "Quantum-Enhanced Optimization",
      description: "Breakthrough optimization algorithms combining classical and quantum computing for problems that seemed impossible to solve.",
      features: [
        "Supply chain optimization",
        "Resource allocation with constraints",
        "Portfolio optimization for finance",
        "Quantum hybrid algorithms",
        "Custom optimization frameworks"
      ],
      pricing: "$50k - $150k",
      timeline: "4-8 months",
      annotation: "Cutting edge",
      caseStudy: "Supply Chain Co: 31% cost reduction"
    },
    {
      title: "AI Workflow Automation",
      description: "Intelligent automation systems that learn from your processes and adapt continuously, delivering immediate ROI.",
      features: [
        "Process automation with RPA+AI",
        "Intelligent document processing",
        "Conversational AI & chatbots",
        "Decision support systems",
        "Human-in-the-loop workflows"
      ],
      pricing: "$15k - $50k",
      timeline: "1-3 months",
      annotation: "High ROI",
      caseStudy: "Healthcare AI: 92% time reduction"
    },
    {
      title: "Custom MLOps Infrastructure",
      description: "End-to-end machine learning operations that scale with your business and maintain model performance in production.",
      features: [
        "Data pipeline architecture",
        "Model training & deployment automation",
        "Monitoring & maintenance systems",
        "A/B testing frameworks",
        "Model versioning & rollback"
      ],
      pricing: "$30k - $100k", 
      timeline: "3-6 months",
      annotation: "Enterprise ready",
      caseStudy: "FinTech: 99.7% fraud detection"
    },
    {
      title: "AI Platform Development",
      description: "Custom agents, workflow systems, and enterprise APIs that power your business operations with intelligent automation and scalability.",
      features: [
        "Custom AI agent development",
        "Multi-agent workflow systems",
        "Enterprise API architecture",
        "Intelligent task orchestration",
        "Real-time decision systems"
      ],
      pricing: "$40k - $120k",
      timeline: "3-6 months",
      annotation: "Revolutionary",
      caseStudy: "Enterprise Corp: 85% task automation"
    },
    {
      title: "ML/Optimization Implementation",
      description: "Advanced optimization pipelines with AutoML, hyperparameter tuning, and quantum-inspired search algorithms for maximum performance.",
      features: [
        "Automated optimization pipelines",
        "AutoML framework implementation",
        "Advanced hyperparameter tuning",
        "Quantum-inspired search algorithms",
        "Performance monitoring & scaling"
      ],
      pricing: "$35k - $90k",
      timeline: "2-5 months",
      annotation: "Next-gen",
      caseStudy: "Tech Startup: 40% model performance boost"
    },
    {
      title: "AI Infrastructure Setup",
      description: "GPU servers, Docker/NIM deployments, and scalable inference stacks for production-ready AI systems with enterprise-grade reliability.",
      features: [
        "GPU server configuration & optimization",
        "Docker/NIM deployment automation",
        "Scalable inference architecture",
        "Cloud infrastructure optimization",
        "Load balancing & fault tolerance"
      ],
      pricing: "$20k - $60k",
      timeline: "1-3 months",
      annotation: "Production ready",
      caseStudy: "AI Startup: 99.9% uptime achieved"
    },
    {
      title: "Custom AI Model Integration",
      description: "ASR, NLP, image processing, LLMs, embeddings, and comprehensive monitoring for seamless AI integration across your systems.",
      features: [
        "ASR & speech processing integration",
        "Advanced NLP & language models",
        "Computer vision & image AI",
        "LLM integration & fine-tuning",
        "Embeddings & semantic search"
      ],
      pricing: "$30k - $85k",
      timeline: "2-4 months",
      annotation: "Comprehensive",
      caseStudy: "Media Co: 95% content automation"
    }
  ];

  const process = [
    { 
      step: "01", 
      title: "Discovery & Data Audit", 
      desc: "Deep dive into your business goals, data quality, and technical requirements. I identify the highest-impact opportunities.",
      duration: "1-2 weeks"
    },
    { 
      step: "02", 
      title: "Prototype & Validation", 
      desc: "Build and test MVP solution with your real data. Validate approach and establish success metrics before full development.",
      duration: "2-4 weeks"
    },
    { 
      step: "03", 
      title: "Production Development", 
      desc: "Scale prototype to production-ready system with proper infrastructure, monitoring, and documentation.",
      duration: "4-12 weeks"
    },
    { 
      step: "04", 
      title: "Deploy & Optimize", 
      desc: "Launch system, monitor performance, and continuously optimize based on real-world feedback and results.",
      duration: "2-4 weeks"
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-background font-body pt-16">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-foreground mb-6">
              Services{" "}
              <span className="font-sketch font-bold relative">
                That Actually Work
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every solution is tailored to your specific business goals and built for maximum ROI. 
              No cookie-cutter approaches, no unnecessary complexity, just results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border p-8 relative">
                {/* Handwritten annotation */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-sketch transform rotate-3">
                  {service.annotation}
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-light text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-accent mb-3 uppercase tracking-wide">What You Get</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Timeline */}
                  <div className="bg-secondary p-4 border border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Investment</div>
                        <div className="font-medium text-foreground">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-medium text-foreground">{service.timeline}</div>
                      </div>
                    </div>
                  </div>

                  {/* Case Study Reference */}
                  <div className="text-xs text-muted-foreground bg-wireframe-light p-3 border-l-2 border-accent">
                    <span className="font-medium">Real Result:</span> {service.caseStudy}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <button className="text-accent hover:text-foreground transition-colors font-medium">
                      Discuss this service →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-center text-foreground mb-4">
              My Process{" "}
              <span className="font-sketch text-sketch">(proven over 50+ projects)</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Every project follows this systematic approach to ensure predictable results 
              and maximum business impact.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((phase, index) => (
                <div key={index} className="text-center bg-secondary p-6 border border-border relative">
                  {/* Step connector */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-wireframe-medium"></div>
                  )}
                  
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-light mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{phase.desc}</p>
                  <div className="text-xs text-accent font-sketch">{phase.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Krishna Section */}
          <div className="bg-secondary p-12 border border-border mb-20">
            <h2 className="text-3xl font-light text-center text-foreground mb-8">
              Why Work With Krishna?{" "}
              <span className="font-sketch text-sketch">(the real difference)</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light text-foreground mb-2">29+</div>
                <div className="text-sm text-muted-foreground mb-4">Open source libraries</div>
                <p className="text-xs text-muted-foreground">
                  My code powers ML systems at companies worldwide. You get battle-tested solutions.
                </p>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2">23+</div>
                <div className="text-sm text-muted-foreground mb-4">Research Projects</div>
                <p className="text-xs text-muted-foreground">
                  Published research in top venues. You get cutting-edge methods that actually work.
                </p>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2">5</div>
                <div className="text-sm text-muted-foreground mb-4">Clients maximum</div>
                <p className="text-xs text-muted-foreground">
                  I limit clients to ensure exceptional results. You get my full attention and expertise.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-background border border-border p-12">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Ready to Start Your Project?{" "}
              <span className="font-sketch text-sketch">(let's talk)</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently booking projects for 2025. Every project starts with a free 
              30-minute strategy call to understand your needs and determine if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                aria-label="Book a free 30-minute strategy call"
                className="bg-primary text-primary-foreground px-8 py-3 hover:bg-accent transition-colors">
                Book Strategy Call
              </button>
              <button 
                aria-label="Request a custom project quote"
                className="border border-border bg-background text-foreground px-8 py-3 hover:bg-secondary transition-colors">
                Get Custom Quote
              </button>
            </div>
            
            <div className="mt-8 inline-block bg-wireframe-light px-6 py-3 border border-border">
              <p className="text-sm text-foreground font-sketch">
                → Currently booking: 2 spots available for  2025
              </p>
            </div>
          </div>
          
          {/* Pricing Disclaimer */}
          <div className="text-center mt-12">
            <p className="font-sketch text-xs text-sketch rotate-[-1deg]">
              * Final pricing depends on project scale, data requirements and availability. Contact to know accurate prices. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Services;