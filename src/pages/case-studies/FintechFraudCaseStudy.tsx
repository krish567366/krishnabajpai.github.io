import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const FintechFraudCaseStudy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
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
                  <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground">FinTech Fraud Detection</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-light text-foreground mb-6">
              Real-Time Fraud Detection for{" "}
              <span className="font-sketch font-bold relative">
                FinTech Unicorn
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              99.7% fraud detection accuracy with ML-powered real-time analysis
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Scikit-learn</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Apache Kafka</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Redis</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">FastAPI</span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 border border-border relative">
            <div className="font-sketch text-sm text-sketch absolute -top-2 -right-2 bg-background px-3 py-1 border border-border rotate-3">
              Project Summary
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Client</h3>
                <p className="text-foreground">FinTech Unicorn</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Industry</h3>
                <p className="text-foreground">Financial Services</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Timeline</h3>
                <p className="text-foreground">4 months</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Key Result</h3>
                <p className="text-foreground">99.7% fraud detection accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Manual fraud detection was missing 23% of fraudulent transactions, leading to $1.8M quarterly losses and raising serious regulatory concerns.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Challenge Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The client's existing fraud detection system relied heavily on manual reviews and static rules that couldn't keep up with evolving fraud patterns. False positives were creating friction in the customer experience, while false negatives were resulting in significant financial losses.
              </p>
            </section>

            {/* Approach Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We built a real-time ML fraud detection system with ensemble modeling, implemented anomaly detection, and created an automated decision engine with human-in-the-loop capabilities.
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 1: Data Engineering & Feature Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a comprehensive feature engineering pipeline to extract patterns from transaction data, user behavior, and network connections. Implemented real-time feature computation using Kafka and Redis.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 2: ML Model Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed a tiered ensemble model combining supervised learning for known fraud patterns with unsupervised anomaly detection for emerging threats. Fine-tuned the models using advanced techniques to balance precision and recall.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 3: Real-Time Decision System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built a high-throughput decision engine with automated scoring, risk stratification, and intelligent routing of edge cases to human reviewers. Implemented continuous feedback loops for ongoing model improvement.
                  </p>
                </div>
              </div>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Solution Architecture Diagram Placeholder]
              </div>
            </section>

            {/* Results Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">The Results</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">99.7%</div>
                  <div className="text-sm text-muted-foreground">fraud detection accuracy</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">15x</div>
                  <div className="text-sm text-muted-foreground">faster processing</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">68%</div>
                  <div className="text-sm text-muted-foreground">fewer false positives</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The new fraud detection system achieved 99.7% accuracy, processed transactions 15x faster than the previous system, reduced false positives by 68%, and saved $1.2M in the first quarter of implementation.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Results Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The improved customer experience from fewer false positives led to a 12% increase in transaction volume as users faced fewer interruptions. The system was also able to detect sophisticated fraud schemes that were previously undetectable, preventing several major fraud attacks.
              </p>
            </section>

            {/* Testimonial Section */}
            <div className="bg-card border border-border p-8 relative">
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-sketch text-xl">
                "
              </div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed mb-6">
                The fraud detection system paid for itself in 2 months. Krishna delivered beyond our wildest expectations.
              </blockquote>
              <div className="font-medium text-foreground">CTO</div>
              <div className="text-sm text-muted-foreground">FinTech Unicorn</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Ready to secure your transactions?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how advanced ML fraud detection can protect your business while enhancing customer experience.
              </p>
              <Link to="/contact">
                <Button className="w-full">Book a Consultation</Button>
              </Link>
            </div>

            {/* Related Case Studies */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Related Case Studies</h3>
              <div className="space-y-4">
                <Link to="/case-studies/manufacturing-predictive" className="block">
                  <div className="bg-background border border-border p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-1">Manufacturing Predictive Maintenance</h4>
                    <p className="text-sm text-muted-foreground">87% downtime reduction</p>
                  </div>
                </Link>
                <Link to="/case-studies/supply-chain" className="block">
                  <div className="bg-background border border-border p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-1">Supply Chain Optimization</h4>
                    <p className="text-sm text-muted-foreground">31% inventory cost reduction</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Technologies Used</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Python & Scikit-learn</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Ensemble Learning</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Apache Kafka</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Redis & FastAPI</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Anomaly Detection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Case Study */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <div className="text-sm text-muted-foreground">Next Case Study</div>
              <Link to="/case-studies/supply-chain" className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                Supply Chain Optimization →
              </Link>
            </div>
            <Link to="/case-studies">
              <Button variant="outline" className="mt-4 md:mt-0">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FintechFraudCaseStudy;