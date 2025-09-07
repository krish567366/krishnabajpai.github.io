import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const SupplyChainCaseStudy = () => {
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
                  <span className="text-sm text-foreground">Supply Chain Optimization</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-light text-foreground mb-6">
              Quantum-Enhanced Optimization for{" "}
              <span className="font-sketch font-bold relative">
                Global Supply Chain
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              31% inventory cost reduction with quantum-inspired optimization algorithms
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Quantum Computing</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Prophet</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Optimization</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">TensorFlow</span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 border border-border relative">
            <div className="font-sketch text-sm text-sketch absolute -top-2 -right-2 bg-background px-3 py-1 border border-border rotate-3">
              Project Summary
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Client</h3>
                <p className="text-foreground">Global Supply Chain Co</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Industry</h3>
                <p className="text-foreground">Logistics</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Timeline</h3>
                <p className="text-foreground">6 months</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Key Result</h3>
                <p className="text-foreground">31% inventory cost reduction</p>
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
                The client needed inventory optimization across 200+ locations with complex constraints. $5M was tied up in excess inventory, and frequent stockouts were affecting customer satisfaction.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Challenge Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Traditional optimization methods couldn't handle the complexity of the problem, which involved thousands of products, multiple warehouses, varying lead times, and complex delivery constraints. Classical algorithms were either too slow or produced sub-optimal solutions.
              </p>
            </section>

            {/* Approach Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We developed quantum-enhanced optimization algorithms, implemented a multi-constraint solver, and built demand forecasting with Prophet Plus.
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 1: Advanced Demand Forecasting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed enhanced time series forecasting models using Prophet Plus with custom seasonality handling, event modeling, and anomaly detection to improve prediction accuracy.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 2: Quantum-Inspired Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a quantum-inspired optimization engine that could handle thousands of variables and constraints simultaneously. Leveraged quantum annealing techniques to find global optima for complex multi-constraint problems.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 3: Integration & Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented a user-friendly decision support system for logistics planners, built automated reordering systems with safety stock calculations, and created scenario modeling tools for strategic planning.
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
                  <div className="text-3xl font-light text-foreground">31%</div>
                  <div className="text-sm text-muted-foreground">inventory cost reduction</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">28%</div>
                  <div className="text-sm text-muted-foreground">fewer stockouts</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">2.3x</div>
                  <div className="text-sm text-muted-foreground">ROI improvement</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The quantum optimization solution achieved a 31% inventory cost reduction, 28% fewer stockouts, a 2.3x ROI improvement, and optimized $50M+ inventory annually.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Results Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The solution also provided unexpected benefits in transportation cost reduction by optimizing delivery routes and consolidating shipments. The client was able to reduce their logistics footprint while improving service levels across all customer segments.
              </p>
            </section>

            {/* Testimonial Section */}
            <div className="bg-card border border-border p-8 relative">
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-sketch text-xl">
                "
              </div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed mb-6">
                The quantum optimization solution saved us $1.2M in the first year. Incredible technical depth and business acumen.
              </blockquote>
              <div className="font-medium text-foreground">Head of Supply Chain</div>
              <div className="text-sm text-muted-foreground">Global Supply Chain Co</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Ready to optimize your supply chain?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how quantum-inspired optimization can transform your logistics operations and reduce costs.
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
                <Link to="/case-studies/fintech-fraud" className="block">
                  <div className="bg-background border border-border p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-1">FinTech Fraud Detection</h4>
                    <p className="text-sm text-muted-foreground">99.7% fraud detection accuracy</p>
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
                  <div className="text-muted-foreground">Quantum Computing</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Prophet Plus Forecasting</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Multi-Constraint Optimization</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Python & TensorFlow</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Time Series Analysis</div>
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
              <Link to="/case-studies/healthcare-automation" className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                Healthcare Document Automation →
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

export default SupplyChainCaseStudy;
