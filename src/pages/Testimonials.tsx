import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
const Testimonials = () => {
  const testimonials = [
    {
      id: "manufacturing-vp",
      quote: "Krishna's predictive maintenance solution transformed our operations. What seemed impossible became our competitive advantage. The 87% reduction in downtime paid for the project in 3 months.",
      author: "VP of Operations",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      project: "Predictive Maintenance ML System",
      result: "87% downtime reduction, $2.4M saved",
      rating: 5
    },
    {
      id: "fintech-cto",
      quote: "The fraud detection system paid for itself in 2 months. Krishna delivered beyond our wildest expectations. 99.7% accuracy seemed impossible until we saw it working in production.",
      author: "CTO", 
      company: "FinTech Unicorn",
      industry: "Financial Services",
      project: "Real-time Fraud Detection",
      result: "99.7% accuracy, $1.2M saved quarterly",
      rating: 5
    },
    {
      id: "supply-chain-head",
      quote: "The quantum optimization solution saved us $1.2M in the first year. What would have taken our team 18 months was delivered in 3 months. Incredible technical depth and business acumen.",
      author: "Head of Supply Chain",
      company: "Global Supply Chain Co", 
      industry: "Logistics",
      project: "Quantum-Enhanced Inventory Optimization",
      result: "31% cost reduction, $1.2M saved",
      rating: 5
    },
    {
      id: "healthcare-director",
      quote: "Krishna's automation freed our staff to focus on patient care instead of paperwork. The 92% processing time reduction was immediate and transformational. ROI in the first month.",
      author: "Medical Director",
      company: "Healthcare AI Platform",
      industry: "Healthcare", 
      project: "Intelligent Document Processing",
      result: "92% time reduction, 3x productivity",
      rating: 5
    },
    {
      id: "ecommerce-vp",
      quote: "The recommendation system became our secret weapon. Customer engagement and sales skyrocketed immediately. 340% conversion increase seemed too good to be true until we saw the numbers.",
      author: "VP of E-commerce",
      company: "E-commerce Leader",
      industry: "Retail",
      project: "Deep Learning Recommendation Engine", 
      result: "340% conversion increase, $4.7M revenue",
      rating: 5
    },
    {
      id: "startup-founder",
      quote: "Krishna didn't just build our AI system—he taught our team how to maintain and improve it. The knowledge transfer was invaluable. We've continued achieving great results months later.",
      author: "Founder & CEO",
      company: "AI Startup",
      industry: "Technology",
      project: "Custom ML Pipeline",
      result: "2.5x model performance, 60% cost reduction",
      rating: 5
    }
  ];

  // Add schema.org markup for testimonials
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "about": {
        "@type": "Service",
        "name": "AI Consulting Services by Krishna Bajpai",
        "provider": {
          "@type": "Person",
          "@id": "https://krishnabajpai.com/#person",
          "name": "Krishna Bajpai"
        }
      },
      "text": t.quote,
      "author": {
        "@type": "Person",
        "name": t.author
      },
      "publisher": {
        "@type": "Organization",
        "name": t.company
      },
      "keywords": [t.industry, t.project, "AI Consulting", "Machine Learning"],
      "datePublished": new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD
    }))
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const stats = [
    { metric: "98%", label: "Client satisfaction rate", description: "Based on post-project surveys" },
    { metric: "100%", label: "Projects delivered on time", description: "In the last 24 months" },
    { metric: "$12M+", label: "Verified client savings", description: "From AI implementations" },
    { metric: "94.4%", label: "Average model accuracy", description: "Across all ML projects" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background font-body pt-16">
        <div className="container mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-foreground mb-6">
              Client Testimonials{" "}
              <span className="font-sketch font-bold relative">
                & Verified Results
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from real clients who achieved real results. Every testimonial 
              includes verified metrics and project outcomes.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-secondary p-6 border border-border text-center">
                <div className="text-3xl font-light text-foreground mb-2">{stat.metric}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-card border border-border p-8 relative">
                {/* Rating */}
                <div className="absolute top-4 right-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                </div>

                <div className="space-y-6">
                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.industry}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-accent">{testimonial.project}</div>
                      </div>
                    </div>
                  </div>

                  {/* Results Highlight */}
                  <div className="bg-secondary p-4 border-l-4 border-accent">
                    <div className="text-sm font-medium text-foreground mb-1">Verified Result:</div>
                    <div className="text-sm text-muted-foreground">{testimonial.result}</div>
                  </div>
                </div>

                {/* Sketchy accent */}
                <div className="absolute -bottom-2 -left-2 font-sketch text-xs text-sketch transform -rotate-12">
                  Real client ✓
                </div>
              </div>
            ))}
          </div>

          {/* Process Testimonial */}
          <div className="bg-secondary p-12 border border-border mb-20">
            <h2 className="text-2xl font-light text-center text-foreground mb-8">
              What Clients Say About{" "}
              <span className="font-sketch text-sketch">The Process</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  "
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "Krishna's discovery process was thorough. He understood our business better 
                  than some of our own consultants. The solution was perfectly tailored."
                </blockquote>
                <div className="text-xs text-foreground">— CTO, Tech Startup</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  "
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "Communication was exceptional throughout. We always knew exactly where 
                  the project stood and what to expect next. No surprises, just results."
                </blockquote>
                <div className="text-xs text-foreground">— VP Operations, Manufacturing</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  "
                </div>
                <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "The knowledge transfer was incredible. Krishna made sure our team could 
                  maintain and improve the system long after the project ended."
                </blockquote>
                <div className="text-xs text-foreground">— Head of Data, FinTech</div>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="text-center mb-20">
            <h2 className="text-2xl font-light text-foreground mb-8">
              Trusted Across Industries{" "}
              <span className="font-sketch text-sketch">(proven everywhere)</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { industry: "Manufacturing", clients: "8+ clients", icon: "🏭" },
                { industry: "Financial Services", clients: "12+ clients", icon: "🏦" }, 
                { industry: "Healthcare", clients: "6+ clients", icon: "🏥" },
                { industry: "Retail & E-commerce", clients: "10+ clients", icon: "🛍️" },
                { industry: "Logistics", clients: "5+ clients", icon: "🚛" },
                { industry: "Technology", clients: "15+ clients", icon: "💻" },
                { industry: "Energy", clients: "4+ clients", icon: "⚡" },
                { industry: "Agriculture", clients: "3+ clients", icon: "🌾" }
              ].map((sector, index) => (
                <div key={index} className="bg-wireframe-light p-4 border border-wireframe-medium text-center">
                  <div className="text-2xl mb-2">{sector.icon}</div>
                  <div className="text-sm font-medium text-foreground">{sector.industry}</div>
                  <div className="text-xs text-muted-foreground">{sector.clients}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof CTA */}
          <div className="text-center bg-background border border-border p-12">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Join These Success Stories{" "}
              <span className="font-sketch text-sketch">(your turn)</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every testimonial started with a conversation. I only take 5 clients at a time 
              to ensure results like these are possible for your project too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 hover:bg-accent transition-colors">
                Book Your Strategy Call
              </button>
              <button className="border border-border bg-background text-foreground px-8 py-3 hover:bg-secondary transition-colors">
                Request Client References
              </button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground font-sketch">
              → References available upon request (with client permission)
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Testimonials;