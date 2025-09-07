import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const HealthcareAutomationCaseStudy = () => {
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
                  <span className="text-sm text-foreground">Healthcare Document Automation</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-light text-foreground mb-6">
              Intelligent Document Processing for{" "}
              <span className="font-sketch font-bold relative">
                Healthcare AI Platform
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              95% reduction in document processing time with NLP-powered automation
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">NLP</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">OCR</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">BERT</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Workflow Automation</span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 border border-border relative">
            <div className="font-sketch text-sm text-sketch absolute -top-2 -right-2 bg-background px-3 py-1 border border-border rotate-3">
              Project Summary
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Client</h3>
                <p className="text-foreground">Healthcare AI Platform</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Industry</h3>
                <p className="text-foreground">Healthcare</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Timeline</h3>
                <p className="text-foreground">5 months</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Key Result</h3>
                <p className="text-foreground">95% reduction in processing time</p>
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
                Manual document processing was taking 4-6 hours per patient file with a 15% error rate, and staff were experiencing burnout from repetitive tasks.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Challenge Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The healthcare provider was processing thousands of patient records daily, each containing medical histories, insurance information, test results, and treatment plans. The manual process was slow, error-prone, and required skilled staff to spend time on mundane tasks instead of patient care.
              </p>
            </section>

            {/* Approach Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                We built an intelligent document processing system with NLP, created an automated workflow with human oversight, and implemented a continuous learning system.
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 1: Document Digitization & Analysis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed an advanced OCR pipeline with medical-specific enhancements, implemented BERT-based NLP models for entity recognition, and created document classification systems for routing.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 2: Intelligent Workflow Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built a configurable workflow engine that could adapt to different document types, implemented confidence scoring to route uncertain cases to human reviewers, and created an intuitive verification interface.
                  </p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">Phase 3: Continuous Learning System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented a feedback loop to capture human corrections, developed active learning models that improved over time, and created performance dashboards for monitoring system accuracy.
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
                  <div className="text-3xl font-light text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">reduction in processing time</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">3.8x</div>
                  <div className="text-sm text-muted-foreground">staff productivity</div>
                </div>
                <div className="bg-secondary p-4 border border-border text-center">
                  <div className="text-3xl font-light text-foreground">99.2%</div>
                  <div className="text-sm text-muted-foreground">document accuracy</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The intelligent document processing system reduced processing time from 4-6 hours to just 15 minutes per patient file, improved document accuracy to 99.2%, and allowed staff to focus on higher-value tasks.
              </p>
              <div className="bg-wireframe-light h-60 flex items-center justify-center text-muted-foreground border border-dashed border-border">
                [Results Visualization Placeholder]
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The healthcare provider was able to reassign staff to patient care roles, reducing administrative costs while improving patient satisfaction. The system also enabled faster insurance processing, reducing payment cycles by an average of 15 days.
              </p>
            </section>

            {/* Testimonial Section */}
            <div className="bg-card border border-border p-8 relative">
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-sketch text-xl">
                "
              </div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed mb-6">
                The automation system Krishna built has transformed our operations. Our staff can now focus on patient care instead of paperwork.
              </blockquote>
              <div className="font-medium text-foreground">Director of Operations</div>
              <div className="text-sm text-muted-foreground">Healthcare AI Platform</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Ready to automate document processing?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how AI-powered document automation can reduce costs and free up your staff for more valuable work.
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
                <Link to="/case-studies/manufacturing-predictive" className="block">
                  <div className="bg-background border border-border p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-1">Manufacturing Predictive Maintenance</h4>
                    <p className="text-sm text-muted-foreground">87% downtime reduction</p>
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
                  <div className="text-muted-foreground">Natural Language Processing</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">BERT & Transformers</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Advanced OCR</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Workflow Automation</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  <div className="text-muted-foreground">Active Learning</div>
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
              <Link to="/case-studies/manufacturing-predictive" className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                Manufacturing Predictive Maintenance →
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

export default HealthcareAutomationCaseStudy;
