import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const ManufacturingCaseStudy = () => {
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
                  <span className="text-sm text-foreground">Manufacturing Predictive Maintenance</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-light text-foreground mb-6">
              Predictive Maintenance for{" "}
              <span className="font-sketch font-bold relative">
                Global Manufacturing
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              87% reduction in unplanned downtime with ML-powered predictive maintenance
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">XGBoost</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">LSTM</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">IoT</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Docker</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Kubernetes</span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 border border-border relative">
            <div className="font-sketch text-sm text-sketch absolute -top-2 -right-2 bg-background px-3 py-1 border border-border rotate-3">
              Project Summary
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Client</h3>
                <p className="text-foreground">Global Manufacturing Corp</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Industry</h3>
                <p className="text-foreground">Manufacturing</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Timeline</h3>
                <p className="text-foreground">3 months</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Key Result</h3>
                <p className="text-foreground">87% reduction in unplanned downtime</p>
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
                Equipment failures were causing a 12% production loss and $3.2M in annual costs. The client had no predictive capabilities and was relying on purely reactive maintenance strategies.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Challenge Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The client's maintenance team was overwhelmed, with high overtime costs and stressed staff responding to emergency breakdowns. Critical production lines were experiencing unpredictable downtime, impacting delivery schedules and customer satisfaction.
              </p>
            </section>

            {/* Approach Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We deployed IoT sensors across 200+ machines, built ensemble ML models with XGBoost and LSTM networks, and created a real-time monitoring dashboard for the maintenance team.
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 1: Sensor Deployment & Data Collection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deployed industrial IoT sensors to measure vibration, temperature, acoustic signatures, and energy consumption patterns across critical equipment. Developed a secure data pipeline to capture and store time-series data.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 2: Model Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Engineered features from raw sensor data, built ensemble models combining XGBoost for pattern recognition and LSTM networks for time-series prediction. Fine-tuned models for each equipment type.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 3: Integration & Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a real-time dashboard for maintenance teams, implemented alert systems with prioritization logic, and developed a maintenance scheduling optimizer.
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
                  <div className="text-3xl font-light text-foreground">87%</div>
                  <div className="text-sm text-muted-foreground">reduction in unplanned downtime</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">$2.4M</div>
                  <div className="text-sm text-muted-foreground">annual savings</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">94.4%</div>
                  <div className="text-sm text-muted-foreground">prediction accuracy</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The predictive maintenance solution successfully reduced unplanned downtime by 87%, resulting in $2.4M annual savings. The system achieved 94.4% prediction accuracy for failures 2-4 weeks in advance, giving maintenance teams ample time to schedule repairs.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Results Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the direct financial benefits, the solution also improved workforce satisfaction by shifting from emergency response to planned maintenance. The client reported a 35% reduction in maintenance overtime hours and a significant decrease in staff stress levels.
              </p>
            </section>

            {/* Testimonial Section */}
            <div className="bg-card border border-border p-8 relative">
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-sketch text-xl">
                "
              </div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed mb-6">
                Krishna's predictive maintenance solution transformed our operations. What seemed impossible became our competitive advantage.
              </blockquote>
              <div className="font-medium text-foreground">VP of Operations</div>
              <div className="text-sm text-muted-foreground">Global Manufacturing Corp</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Ready to solve your maintenance challenges?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how predictive maintenance can transform your operations and boost your bottom line.
              </p>
              <Link to="/contact">
                <Button className="w-full">Book a Consultation</Button>
              </Link>
            </div>

            {/* Related Case Studies */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Related Case Studies</h3>
              <div className="space-y-4">
                <Link to="/case-studies/fintech-fraud" className="block">
                  <div className="bg-background border border-border p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-1">FinTech Fraud Detection</h4>
                    <p className="text-sm text-muted-foreground">99.7% fraud detection accuracy</p>
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
                  <div className="text-muted-foreground">XGBoost & LSTM Networks</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">IoT Sensors & Gateways</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Docker & Kubernetes</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Time-Series Analysis</div>
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
              <Link to="/case-studies/fintech-fraud" className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                FinTech Fraud Detection →
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

export default ManufacturingCaseStudy;
