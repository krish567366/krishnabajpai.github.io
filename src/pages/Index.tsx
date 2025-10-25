
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import me from "@/assets/me.jpg";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Krishna Bajpai - Leading AI/ML Consulting Expert | Quantum Computing & Algorithmic Trading Specialist</title>
        <meta name="description" content="Transform your business with Krishna Bajpai's advanced AI/ML solutions. Expert in Quantum Hybrid Optimization, Custom ML Pipelines, and Enterprise AI Architecture. Harvard-educated consultant trusted by Fortune 500 companies. Schedule a consultation today." />
        <meta name="keywords" content="AI/ML Consulting Expert, Quantum Hybrid Optimization Specialist, Custom ML Pipeline Architect, Enterprise AI Solutions, Algorithmic Trading Systems, Advanced ML Infrastructure, Krishna Bajpai, MLOps Architecture, Quantum Computing Innovation, Fortune 500 AI Consultant, Technical ML Architecture, AI/ML Strategy Consultant" />
        <link rel="canonical" href="https://krishnabajpai.me/" />
        <meta property="og:title" content="Krishna Bajpai - AI & ML Consulting | Quantum Optimization Expert" />
        <meta property="og:description" content="Krishna Bajpai - Expert AI/ML consultant specializing in Quantum optimization, Predictive analytics, Healthcare AI, Fintech AI, Supply Chain AI, Retail AI, MLOps, and Automation solutions." />
        <meta property="og:url" content="https://krishnabajpai.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Krishna Bajpai - AI/ML Consultant & Quantum Optimization Expert" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krishna Bajpai - AI & ML Consulting | Quantum Optimization Expert" />
        <meta name="twitter:description" content="Krishna Bajpai - Expert AI/ML consultant specializing in Quantum optimization, Predictive analytics, Healthcare AI, Fintech AI, Supply Chain AI, Retail AI, MLOps, and Automation solutions." />
        <link rel="alternate" href="https://krishnabajpai.me/" hrefLang="en" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI & ML Consulting | Krishna Bajpai",
            "description": "AI, ML, Quantum, Automation, Predictive Modeling, Supply Chain, Fintech, Healthcare, Retail, E-Commerce, MLOps, and more. Results-driven solutions for business growth.",
            "url": "https://krishnabajpai.me/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Krishna Bajpai AI/ML Consulting",
              "description": "Expert AI/ML consulting services specializing in Quantum optimization, Predictive analytics, Healthcare AI, Fintech AI, Supply Chain AI, and Retail AI solutions.",
              "url": "https://krishnabajpai.me/",
              "founder": {
                "@type": "Person",
                "name": "Krishna Bajpai",
                "jobTitle": "AI/ML Consultant & Quantum Optimization Expert",
                "description": "AI/ML expert with 23+ research Projects, 29+ Python libraries, and 8+ years experience in AI consulting for Fortune 500 companies."
              },
              "serviceType": [
                "AI Consulting",
                "Machine Learning Consulting",
                "Quantum Optimization",
                "Predictive Analytics",
                "Healthcare AI Solutions",
                "Fintech AI Solutions",
                "Supply Chain AI",
                "Retail AI Solutions",
                "MLOps",
                "Automation Solutions"
              ],
              "areaServed": "Global",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://krishnabajpai.me/contact"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://krishnabajpai.me/"
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      <Layout>
        <div id="hero">
          <Hero />
        </div>
        {/* Expertise Preview Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light text-foreground mb-6">
                Krishna Bajpai - AI & ML Consulting Expert
              </h1>
              <h2 className="text-3xl font-light text-foreground mb-6">
                What I <span className="font-sketch font-bold relative">Do<div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div></span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-background border border-border p-6 relative">
                <div className="w-12 h-12 mb-4 opacity-80">
                  <div className="w-full h-full border border-dashed border-foreground rounded-full flex items-center justify-center">
                    <span className="font-sketch" role="img" aria-label="Predictive Modeling">📊</span>
                  </div>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-2">Predictive Modeling</h2>
                <p className="text-sm text-muted-foreground mb-4">Krishna Bajpai specializes in AI predictive modeling to reduce costs & improve forecasting accuracy. <Link to="/case-studies" className="underline">See case studies</Link></p>
                <Link to="/services" className="text-sm text-accent hover:text-foreground transition-colors">Learn More →</Link>
              </div>
              {/* Card 2 */}
              <div className="bg-secondary border border-border p-6 relative">
                <div className="w-12 h-12 mb-4 opacity-80">
                  <div className="w-full h-full border border-dashed border-foreground rounded-full flex items-center justify-center">
                    <span className="font-sketch" role="img" aria-label="Quantum Hybrid Optimization">🔄</span>
                  </div>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-2">Quantum Hybrid Optimization</h2>
                <p className="text-sm text-muted-foreground mb-4">Krishna Bajpai's quantum optimization solves complex problems classical methods can't handle. <Link to="/case-studies" className="underline">See case studies</Link></p>
                <Link to="/services" className="text-sm text-accent hover:text-foreground transition-colors">Learn More →</Link>
              </div>
              {/* Card 3 */}
              <div className="bg-background border border-border p-6 relative">
                <div className="w-12 h-12 mb-4 opacity-80">
                  <div className="w-full h-full border border-dashed border-foreground rounded-full flex items-center justify-center">
                    <span className="font-sketch" role="img" aria-label="AI Automation">⚙️</span>
                  </div>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-2">AI Automation</h2>
                <p className="text-sm text-muted-foreground mb-4">Krishna Bajpai streamlines workflows & AI-powered decision-making systems. <Link to="/case-studies" className="underline">See case studies</Link></p>
                <Link to="/services" className="text-sm text-accent hover:text-foreground transition-colors">Learn More →</Link>
              </div>
              {/* Card 4 */}
              <div className="bg-secondary border border-border p-6 relative">
                <div className="w-12 h-12 mb-4 opacity-80">
                  <div className="w-full h-full border border-dashed border-foreground rounded-full flex items-center justify-center">
                    <span className="font-sketch" role="img" aria-label="Custom ML Pipelines">🔌</span>
                  </div>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-2">Custom ML Pipelines</h2>
                <p className="text-sm text-muted-foreground mb-4">Krishna Bajpai builds end-to-end ML pipelines with measurable ROI. <Link to="/case-studies" className="underline">See case studies</Link></p>
                <Link to="/services" className="text-sm text-accent hover:text-foreground transition-colors">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlights Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-foreground mb-6">
                Proven{" "}
                <span className="font-sketch font-bold relative">
                  Impact
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-card border border-border p-8 relative">
                <div className="space-y-6">
                  {/* Mini bar chart */}
                  <div className="flex items-end h-16 space-x-2 mb-4">
                    <div className="w-6 h-8 bg-muted"></div>
                    <div className="w-6 h-14 bg-accent"></div>
                    <div className="w-6 h-6 bg-muted"></div>
                    <div className="w-6 h-12 bg-accent"></div>
                    <div className="absolute -top-2 -right-2 font-sketch text-xs text-sketch rotate-12">
                      +35% improvement
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-1">E-commerce, Dubai</h3>
                    <div className="text-sm text-muted-foreground mb-4">Client since 2023</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">Inefficient logistics, high cost</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Result</h4>
                      <p className="text-sm text-foreground font-medium">94.4% accuracy, 35% savings</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-card border border-border p-8 relative">
                <div className="space-y-6">
                  {/* Mini bar chart */}
                  <div className="flex items-end h-16 space-x-2 mb-4">
                    <div className="w-6 h-6 bg-muted"></div>
                    <div className="w-6 h-12 bg-accent"></div>
                    <div className="w-6 h-8 bg-muted"></div>
                    <div className="w-6 h-14 bg-accent"></div>
                    <div className="absolute -top-2 -right-2 font-sketch text-xs text-sketch rotate-12">
                      2.3x faster
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Manufacturing Corp</h3>
                    <div className="text-sm text-muted-foreground mb-4">Client since 2022</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">Unpredictable equipment failures</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Result</h4>
                      <p className="text-sm text-foreground font-medium">87% downtime reduction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-card border border-border p-8 relative">
                <div className="space-y-6">
                  {/* Mini bar chart */}
                  <div className="flex items-end h-16 space-x-2 mb-4">
                    <div className="w-6 h-10 bg-muted"></div>
                    <div className="w-6 h-6 bg-accent"></div>
                    <div className="w-6 h-8 bg-muted"></div>
                    <div className="w-6 h-14 bg-accent"></div>
                    <div className="absolute -top-2 -right-2 font-sketch text-xs text-sketch rotate-12">
                      31% reduction
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Supply Chain Co</h3>
                    <div className="text-sm text-muted-foreground mb-4">Client since 2023</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">Inventory optimization challenges</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-accent mb-1">Result</h4>
                      <p className="text-sm text-foreground font-medium">31% inventory cost reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/case-studies">
                <Button variant="outline" size="lg">
                  Read Full Case Stories →
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
              {/* Profile image */}
              <div className="w-48 h-48 bg-wireframe-light border-2 border-accent overflow-hidden rounded-full flex items-center justify-center">
                <img 
                  src={me} 
                  alt="Krishna Bajpai"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={192}
                  height={192}
                  srcSet={`${me} 1x, ${me} 2x`}
                  fetchPriority="high"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  "I'm Krishna Bajpai, a AI/ML & Quantum Optimization contractor. 
                  I've published 23 Python libraries and help enterprises turn advanced tech 
                  into measurable business results."
                </p>
                <Link to="/about">
                  <Button size="lg">
                    About Me →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="bg-card border border-border p-8 relative">
              {/* Sketchy speech bubble */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="font-sketch text-xl text-accent-foreground">"</span>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Krishna's model reduced our operational costs by 35% in just 2 weeks — incredible results.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full"></div>
                <div>
                  <div className="font-medium text-foreground">Director</div>
                  <div className="text-sm text-muted-foreground">E-commerce, Dubai</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-light text-foreground mb-8">
                Ready to See{" "}
                <span className="font-sketch font-bold relative">
                  Results?
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
                </span>
              </h2>
              
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6 mb-6">
                  Let's Talk
                </Button>
              </Link>
              
              <p className="font-sketch text-sm text-sketch">
                I only take 5 clients at a time
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-sketch text-foreground mb-4 md:mb-0">
              Krishna Bajpai © 2025
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
      </>
  );
};

export default Index;
