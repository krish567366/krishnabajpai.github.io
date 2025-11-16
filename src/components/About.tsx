import serviceIcons from "@/assets/service-icons.png";

const ServiceIcons = () => (
  <img 
    src={serviceIcons}
    alt="AI and ML Services Icons"
    className="w-full h-auto"
    loading="lazy"
    width={400}
    height={300}
    srcSet={`${serviceIcons} 1x, ${serviceIcons} 2x`}
  />
);

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6">
              Expertise That{" "}
              <span className="font-sketch font-bold relative">
                Delivers Results
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Krishna Bajpai is an elite AI/ML consultant and quantum computing specialist with 8+ years 
              of experience building production-grade systems that solve complex business challenges. 
              As a Harvard-educated expert, Krishna Bajpai specializes in enterprise AI transformations, 
              delivering measurable ROI and transformative solutions for Fortune 500 companies worldwide.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">ML & AI Model Development</h3>
                <p className="text-muted-foreground">
                  Krishna Bajpai develops custom machine learning models, deep neural networks, and 
                  enterprise AI systems using TensorFlow and PyTorch. These production-grade solutions 
                  integrate seamlessly with existing infrastructure, delivering proven ROI and 
                  measurable business impact for clients.
                </p>
              </div>
              
              <div className="border-l-2 border-wireframe-medium pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Quantum-Classical Hybrid Optimization</h3>
                <p className="text-muted-foreground">
                  Krishna Bajpai develops quantum-enhanced algorithms for complex optimization problems 
                  that classical computers struggle with, using frameworks like Qiskit and Cirq to 
                  deliver breakthrough performance improvements.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-wireframe-medium pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Data Pipelines & Deployment</h3>
                <p className="text-muted-foreground">
                  End-to-end MLOps pipelines, automated model training, and scalable 
                  deployment infrastructure.
                </p>
              </div>
              
              <div className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">AI-Powered Workflow Automation</h3>
                <p className="text-muted-foreground">
                  Intelligent automation systems that learn from your processes and 
                  continuously improve efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="text-center">
            <img 
              src={serviceIcons} 
              alt="Service icons: ML, Optimization, Quantum, Automation"
              className="w-full max-w-2xl mx-auto opacity-60"
            />
          </div>

          {/* Social Proof Hint */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground font-sketch">
              Krishna Bajpai is trusted by Fortune 500 companies and innovative startups worldwide for 
              transformative AI solutions and quantum computing expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;