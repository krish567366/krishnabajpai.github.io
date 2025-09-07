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
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6">
              How I Can{" "}
              <span className="font-sketch font-bold relative">
                Help You Win
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every solution is tailored to your specific business goals and built for maximum ROI. 
              No cookie-cutter approaches, no unnecessary complexity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background border border-border p-8 relative">
                {/* Handwritten annotation */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-sketch transform rotate-3">
                  {service.annotation}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-accent mb-3">What you get:</h4>
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
                    <button className="text-accent hover:text-foreground transition-colors font-medium">
                      Learn more about this service →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-center text-foreground mb-12">
              My Process{" "}
              <span className="font-sketch text-sketch">(it actually works)</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understand your business & data" },
                { step: "02", title: "Prototype", desc: "Build & test MVP solution" },
                { step: "03", title: "Deploy", desc: "Scale to production systems" },
                { step: "04", title: "Optimize", desc: "Monitor & improve performance" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-lg font-light mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;