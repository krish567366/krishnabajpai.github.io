
import serviceIcons from "@/assets/service-icons.png";
import PyPIPackages from "@/components/PyPIPackages";
import Layout from "../components/layout/Layout";
import me from "@/assets/me.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Krishna Bajpai | ML Engineering Portfolio & Technical Expertise</title>
        <meta name="description" content="Explore Krishna Bajpai's machine learning engineering portfolio, featuring deep learning projects, MLOps implementations, and technical ML solutions. Specialist in TensorFlow, PyTorch, and scalable AI architectures." />
        <meta name="keywords" content="Krishna Bajpai ML portfolio, machine learning projects, deep learning implementations, MLOps architecture, TensorFlow projects, PyTorch solutions, ML system design, AI engineering, technical ML lead, Krishna Bajpai engineer" />
        <link rel="canonical" href="https://krishnabajpai.me/about" />
        <meta property="og:title" content="About Krishna Bajpai | ML Engineering Portfolio & Technical Expertise" />
        <meta property="og:description" content="Explore Krishna Bajpai's machine learning engineering portfolio, featuring deep learning projects, MLOps implementations, and technical ML solutions. Specialist in TensorFlow, PyTorch, and scalable AI architectures." />
        <meta property="og:url" content="https://krishnabajpai.me/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Krishna Bajpai - AI/ML Consultant & Quantum Optimization Expert" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krishna Bajpai - AI/ML & Quantum Expert | 28+ Research Projects, 28+ Python Libraries" />
        <meta name="twitter:description" content="Krishna Bajpai - AI/ML & Quantum Optimization expert with 28+ research Projects, 28+ Python libraries, 8+ years experience, and 5+ active projects. Trusted by Fortune 500, FinTech, Healthcare, and Supply Chain leaders." />
        <link rel="alternate" href="https://krishnabajpai.me/about" hrefLang="en" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Krishna Bajpai",
              "jobTitle": "AI/ML Consultant & Quantum Optimization Expert",
              "description": "AI/ML expert with 28+ research Projects, 28+ Python libraries, 8+ years experience, and 5+ active projects in AI consulting for Fortune 500 companies.",
              "url": "https://krishnabajpai.me/about",
              "sameAs": [
                "https://linkedin.com/in/bajpai-krishna"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Quantum Optimization",
                "Predictive Analytics",
                "Healthcare AI",
                "Fintech AI",
                "Supply Chain AI",
                "Retail AI Solutions",
                "MLOps",
                "Python Programming",
                "Data Science",
                "Automation Solutions"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "AI/ML Consultant",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Global"
                },
                "experienceRequirements": "8+ years in AI/ML consulting",
                "responsibilities": [
                  "Developing AI/ML solutions for Fortune 500 companies",
                  "Quantum optimization implementations",
                  "Predictive modeling and analytics",
                  "Healthcare AI solutions",
                  "Fintech AI implementations",
                  "Supply chain optimization",
                  "Retail AI solutions",
                  "MLOps and automation"
                ]
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Research Institution"
              },
              "award": [
                "28+ Research Projects Published",
                "28+ Python Libraries Developed",
                "Fortune 500 Client Experience"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://krishnabajpai.me/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://krishnabajpai.me/about"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      <Layout>
        <div className="min-h-screen bg-background font-body pt-16">
          <div className="container mx-auto px-6 lg:px-8 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-5xl font-light text-foreground mb-6">About Krishna Bajpai</h1>
                <h2 className="text-3xl font-light text-foreground mb-6">AI/ML & Quantum Optimization Expert</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  An experienced AI/ML expert who focuses on creating practical and impactful solutions. I combine deep technical expertise with a clear understanding of business objectives to ensure AI implementations drive tangible results.
                </p>
              </div>

          {/* Profile Card */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-8 relative">
                {/* Handwritten accent */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-sketch transform rotate-3">
                  The Expert
                </div>
                
                <div className="space-y-6">
                  <div className="w-32 h-32 bg-wireframe-light border-2 border-accent mx-auto overflow-hidden">
                    <img 
                      src={me} 
                      alt="Krishna Bajpai" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-light text-foreground">Krishna Bajpai</h2>
                    <p className="text-muted-foreground">AI/ML & Quantum Optimization Expert</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Python Libraries</span>
                      <span className="font-medium text-foreground">29+</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Research Projects</span>
                      <span className="font-medium text-foreground">28+</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Years Experience</span>
                      <span className="font-medium text-foreground">8+</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Active Projects</span>
                      <span className="font-medium text-foreground">5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools Button and Social Icons */}
              <div className="mt-4 flex items-center gap-3">
                <Link to="/tools" className="block flex-1">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 h-12 rounded-r-xl rounded-l-none group relative overflow-hidden"
                    size="lg"
                  >
                    <span className="absolute inset-0 bg-[url('/src/assets/hero-flow.png')] bg-no-repeat bg-cover opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                    <span className="relative flex items-center justify-center gap-2">
                      Explore My Tools
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path 
                          d="M5 12h14m-7-7l7 7-7 7" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Button>
                </Link>

                {/* Social Icons */}
                <a 
                  href="https://github.com/krish567366" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-xl bg-secondary hover:bg-accent/5 transition-colors"
                  >
                    <svg height="20" width="20" viewBox="0 0 24 24" className="text-muted-foreground group-hover:text-foreground transition-colors" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </Button>
                </a>

                <a 
                  href="https://linkedin.com/in/bajpai-krishna" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-xl bg-secondary hover:bg-accent/5 transition-colors"
                  >
                    <svg height="20" width="20" viewBox="0 0 24 24" className="text-muted-foreground group-hover:text-foreground transition-colors" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* About Krishna */}
              <div className="bg-secondary p-8 border border-border">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  The Journey{" "}
                  <span className="font-sketch text-sketch">(so far)</span>
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I've developed over 22 Python libraries that underpin highly accurate and robust 
                    machine learning models used by companies worldwide. My approach isn't just about 
                    building models—it's about creating solutions that actually work in production.
                  </p>
                  <p>
                    With 23+ published research Projects in AI, ML, and quantum optimization, I bridge 
                    the gap between cutting-edge research and practical business applications. Every 
                    project I take on is designed to deliver measurable ROI from day one.
                  </p>
                  <p>
                    My expertise spans <Link to="/services" className="text-accent hover:text-foreground underline">predictive modeling</Link>, <Link to="/services" className="text-accent hover:text-foreground underline">quantum-enhanced optimization</Link>, <Link to="/services" className="text-accent hover:text-foreground underline">MLOps infrastructure</Link>, and <Link to="/services" className="text-accent hover:text-foreground underline">AI automation</Link>. I only work with 5 clients at a time to 
                    ensure each project gets the attention it deserves.
                  </p>
                </div>
              </div>

              {/* Research Highlight */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute -top-3 -left-3 bg-sketch text-sketch-foreground px-3 py-1 text-xs font-sketch transform -rotate-3">
                  Latest Research
                </div>
                <h4 className="font-medium text-foreground mb-3">Recent Publications</h4>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-accent pl-4">
                    <div className="font-medium text-foreground">"Quantum-Enhanced Ensemble Methods for Industrial Optimization"</div>
                    <div className="text-muted-foreground">Journal of Quantum Machine Learning, 2025</div>
                  </div>
                  <div className="border-l-2 border-wireframe-medium pl-4">
                    <div className="font-medium text-foreground">"Hybrid Classical-Quantum Algorithms for Supply Chain Management"</div>
                    <div className="text-muted-foreground">IEEE Transactions on Quantum Engineering, 2025</div>
                  </div>
                  <div className="border-l-2 border-wireframe-medium pl-4">
                    <div className="font-medium text-foreground">"Scalable MLOps for Production AI Systems"</div>
                    <div className="text-muted-foreground">MLSys Conference, 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-center text-foreground mb-12">
              Core Expertise{" "}
              <span className="font-sketch text-sketch">(what I actually do)</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">ML & AI Model Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom <Link to="/services" className="text-accent hover:text-foreground underline">predictive models</Link>, neural networks, and AI systems built with 29+ 
                    open-source libraries. Every model is production-ready and optimized for your 
                    specific business requirements.
                  </p>
                </div>
                
                <div className="border-l-2 border-wireframe-medium pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Quantum-Classical Hybrid Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <Link to="/services" className="text-accent hover:text-foreground underline">Quantum-enhanced algorithms</Link> for complex optimization problems that classical 
                    computers struggle with. Published research in hybrid quantum-classical methods.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-wireframe-medium pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">Data Pipelines & MLOps</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    End-to-end <Link to="/services" className="text-accent hover:text-foreground underline">MLOps pipelines</Link>, automated model training, and scalable deployment 
                    infrastructure. Built with enterprise-grade reliability and monitoring.
                  </p>
                </div>
                
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl font-medium text-foreground mb-2">AI-Powered Workflow Automation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Intelligent <Link to="/services" className="text-accent hover:text-foreground underline">automation systems</Link> that learn from your processes and continuously 
                    improve efficiency. <Link to="/case-studies" className="text-accent hover:text-foreground underline">Real-world implementations</Link> saving millions in operational costs.
                  </p>
                </div>
              </div>
            </div>

            
          </div>

          {/* PyPI Packages Section */}
          <PyPIPackages />

          {/* Recognition */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-light text-foreground mb-8">
              Trusted By{" "}
              <span className="font-sketch text-sketch">(companies that matter)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                {
                  name: "Fortune 500 Manufacturing",
                  icon: (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wireframe-dark">
                        <path d="M10 30V15M20 30V10M30 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
                        <path d="M5 10L35 10M5 30L35 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M8 25C9.5 22 13 19 16 23C19 27 21 20 23 17C25 14 28 15 32 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )
                },
                {
                  name: "FinTech Unicorn",
                  icon: (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wireframe-dark">
                        <path d="M12 15L28 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M15 21L25 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M18 27L22 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
                        <path d="M15 10L20 5L25 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )
                },
                {
                  name: "Global Supply Chain",
                  icon: (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wireframe-dark">
                        <path d="M8 20H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2"/>
                        <rect x="10" y="15" width="6" height="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <rect x="22" y="15" width="6" height="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M16 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 27C10 30 17 33 20 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M28 13C25 10 18 7 15 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )
                },
                {
                  name: "Healthcare AI Leader",
                  icon: (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-wireframe-dark">
                        <path d="M15 10V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M25 10V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M10 15H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M10 25H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1"/>
                        <path d="M17 13L23 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1"/>
                      </svg>
                    </div>
                  )
                }
              ].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-wireframe-light border border-wireframe-medium mx-auto mb-2 flex items-center justify-center">
                    {company.icon}
                  </div>
                  <div className="text-xs text-muted-foreground">{company.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
   </>
  );
};

export default About;