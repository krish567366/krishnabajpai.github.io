import { Link as LucideLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const cases = [
    {
      id: "manufacturing-predictive",
      client: "Manufacturing Corp",
      challenge: "Unpredictable equipment failures causing 12% production loss",
      solution: "Predictive maintenance ML model with IoT sensor integration",
      result: "87% reduction in unplanned downtime, $2.4M annual savings",
      metric: "87%",
      metricLabel: "downtime reduction"
    },
    {
      id: "fintech-fraud",
      client: "FinTech Startup",
      challenge: "Manual fraud detection missing 23% of fraudulent transactions",
      solution: "Real-time ML fraud detection with ensemble modeling",
      result: "99.7% fraud detection accuracy, 15x faster processing",
      metric: "99.7%",
      metricLabel: "fraud detection"
    },
    {
      id: "supply-chain",
      client: "Supply Chain Co",
      challenge: "Inventory optimization across 200+ locations",
      solution: "Quantum-enhanced optimization for multi-constraint problems",
      result: "31% inventory cost reduction, 28% fewer stockouts",
      metric: "31%",
      metricLabel: "cost reduction"
    },
    {
      id: "healthcare-automation",
      client: "Healthcare Provider",
      challenge: "Inefficient patient data processing causing long wait times",
      solution: "AI-driven automation for medical records processing",
      result: "73% reduction in processing time, 45% fewer errors",
      metric: "73%",
      metricLabel: "faster processing"
    },
    {
      id: "opentx-payment-gateway",
      client: "OpenTX - Open Source",
      challenge: "Legacy payment networks lack modern cloud integration",
      solution: "Canonical transaction protocol bridging ISO 8583 and cloud systems",
      result: "Multi-network support with full observability and security",
      metric: "Multi-Network",
      metricLabel: "payment protocol"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6">
              Results That{" "}
              <span className="font-sketch font-bold relative">
                Speak For Themselves
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real projects, real problems, real impact on the bottom line.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div key={index} className="bg-card border border-border p-8 relative">
                {/* Sketchy corner accent */}
                <div className="absolute top-4 right-4 font-sketch text-xs text-sketch rotate-12">
                  Case #{index + 1}
                </div>
                
                <div className="space-y-6">
                  {/* Metric Highlight */}
                  <div className="text-center py-6 bg-secondary">
                    <div className="text-4xl font-light text-foreground">{case_.metric}</div>
                    <div className="text-sm text-muted-foreground font-sketch">{case_.metricLabel}</div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{case_.client}</h3>
                      <div className="text-sm text-muted-foreground">Anonymous client</div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{case_.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{case_.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-2">Result</h4>
                      <p className="text-sm text-foreground font-medium">{case_.result}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border">
                    <Link 
                      to={`/case-studies/${case_.id}`}
                      className="text-sm text-accent hover:text-foreground transition-colors"
                    >
                      Read full case study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom annotation */}
          <div className="text-center mt-12">
            <p className="font-sketch text-sm text-sketch">
              ↑ All results verified by independent audits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;