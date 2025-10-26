import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Globe, TrendingUp, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import realEstateImage from "@/assets/me.jpg"; // Using same image as placeholder

const RealEstateConsortium = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ML-Powered Valuations",
      description: "Advanced machine learning forecasts combined with exclusive market intelligence for precision property valuations",
      highlight: "94.8% valuation accuracy"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exclusive Network",
      description: "Access to influential firms and individuals providing actionable insights gathered through extensive industry connections",
      highlight: "75+ elite members"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data-Driven Strategy",
      description: "Proprietary quantum-enhanced algorithms integrated with network intelligence for informed decision-making",
      highlight: "31% better returns"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Live market monitoring and predictive analytics for dynamic property valuations and investment opportunities",
      highlight: "< 5ms latency"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Market Intelligence",
      description: "International expertise combined with local market knowledge for comprehensive portfolio analysis",
      highlight: "47 countries"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Premium Confidentiality",
      description: "Quantum-secure encryption and enterprise-grade discretion for high-value transactions",
      highlight: "Zero breaches"
    }
  ];

  const tiers = [
    {
      name: "Elite Partnership",
      description: "For institutional investors and development firms",
      features: [
        "Unlimited property valuations",
        "Quarterly market briefings",
        "Direct consultant access",
        "Custom ML model training"
      ],
      cta: "Request Invitation"
    },
    {
      name: "Strategic Advisory",
      description: "For portfolio managers and family offices",
      features: [
        "Monthly market analysis",
        "Investment strategy sessions",
        "Risk assessment reports",
        "Predictive portfolio optimization"
      ],
      cta: "Request Invitation"
    },
    {
      name: "Enterprise Solutions",
      description: "For large real estate corporations",
      features: [
        "Dedicated consulting team",
        "Real-time data dashboards",
        "Custom algorithm development",
        "Executive strategy alignment"
      ],
      cta: "Request Invitation"
    }
  ];

  const benefits = [
    "Predictive market trend analysis using quantum-enhanced ML models",
    "Access to exclusive network intelligence from Fortune 500 real estate firms",
    "Custom valuation models tailored to your investment strategy",
    "Real-time alerts on emerging market opportunities and risks",
    "Advanced portfolio optimization using AI and operations research",
    "Actionable insights from pattern recognition in historical transactions",
    "Risk-adjusted return forecasting and scenario modeling",
    "White-glove consulting from AI/ML experts with 8+ years experience"
  ];

  return (
    <>
      <Helmet>
        <title>The Real Estate Consortium | Elite ML-Driven Property Valuation & Market Intelligence</title>
        <meta name="description" content="Exclusive Real Estate Consortium combining advanced machine learning forecasts with premium network intelligence. Professional property valuations, market analysis, and investment strategies for elite institutions. Invitation-only." />
        <meta name="keywords" content="Krishna Bajpai Consortium, Krishna Bajpai Real Estate Consortium, Krishna Bajpai ML Consulting, Krishna Bajpai AI Expert, Krishna Bajpai Quantum Computing, Krishna Bajpai Property Analytics, Elite Real Estate Intelligence Network, Quantum-Enhanced Property Valuation, Machine Learning Real Estate Expert, Fortune 500 Real Estate Analytics, Premium Real Estate Consortium India, Global Real Estate AI Solutions, Institutional Real Estate Intelligence, Property Portfolio Optimization Expert, Real Estate Quantum Algorithms, Elite Property Investment Network, Advanced Real Estate Forecasting, AI-Driven Market Analysis, Quantum Computing Real Estate, Property Technology Innovation, Real Estate Data Science Leader, Enterprise Real Estate Solutions, Global Property Analytics Platform, Premium Real Estate Advisory, Exclusive Real Estate Network, ML Property Valuation Expert, Real Estate Innovation Leader, Real Estate AI Architecture, Real Estate Technology Pioneer, Machine Learning Property Expert, Quantum Real Estate Analytics" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://krishnabajpai.me/real-estate-consortium" />
        <meta property="og:title" content="Real Estate Consortium | Elite ML Property Valuation & Market Intelligence" />
        <meta property="og:description" content="Exclusive invitation-only Real Estate Consortium combining machine learning forecasts with premium network intelligence for elite property valuations and investment strategies." />
        <meta property="og:url" content="https://krishnabajpai.me/real-estate-consortium" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Real Estate Consortium - Elite ML-Driven Property Valuation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Consortium | Elite ML Property Valuation" />
        <meta name="twitter:description" content="Exclusive Real Estate Consortium: Machine learning + exclusive network intelligence = precise valuations and strategic insights. Invitation-only." />
        <link rel="alternate" href="https://krishnabajpai.me/real-estate-consortium" hrefLang="en" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Real Estate Consortium - Elite ML Property Valuation",
            "description": "Exclusive Real Estate Consortium combining advanced machine learning with premium network intelligence for elite property valuations and market analysis.",
            "url": "https://krishnabajpai.me/real-estate-consortium",
            "mainEntity": {
              "@type": "Organization",
              "name": "Real Estate Consortium",
              "description": "Elite Real Estate Consortium providing ML-driven property valuations and exclusive market intelligence",
              "url": "https://krishnabajpai.me/real-estate-consortium",
              "areaServed": {
                "@type": "GeoCircle",
                "description": "Global service coverage across 47 countries"
              },
              "serviceType": [
                "Real Estate Valuation",
                "Property Market Analysis",
                "Investment Advisory",
                "Predictive Analytics",
                "Machine Learning Consulting",
                "Quantum-Enhanced Property Analysis",
                "Portfolio Optimization",
                "Market Intelligence"
              ],
              "founder": {
                "@type": "Person",
                "name": "Krishna Bajpai",
                "jobTitle": "AI/ML Consultant & Quantum Optimization Expert",
                "description": "AI/ML expert with 8+ years experience in enterprise consulting",
                "sameAs": [
                  "https://krishnabajpai.me",
                  "https://krishnabajpai.me/about"
                ],
                "knowsAbout": [
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Quantum Computing",
                  "Real Estate Analytics",
                  "Property Valuation",
                  "Portfolio Optimization"
                ]
              },
              "knowsAbout": [
                "Real Estate Analytics",
                "Machine Learning",
                "Quantum Computing",
                "Property Valuation",
                "Market Intelligence",
                "Portfolio Optimization"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Real Estate Consortium Services",
                "itemListElement": [
                  {
                    "@type": "Service",
                    "name": "Elite Partnership",
                    "description": "For institutional investors and development firms",
                    "serviceType": "Premium Consulting",
                    "provider": {
                      "@type": "Person",
                      "name": "Krishna Bajpai"
                    }
                  },
                  {
                    "@type": "Service",
                    "name": "Strategic Advisory",
                    "description": "For portfolio managers and family offices",
                    "serviceType": "Advisory Services",
                    "provider": {
                      "@type": "Person",
                      "name": "Krishna Bajpai"
                    }
                  },
                  {
                    "@type": "Service",
                    "name": "Enterprise Solutions",
                    "description": "For large real estate corporations",
                    "serviceType": "Enterprise Consulting",
                    "provider": {
                      "@type": "Person",
                      "name": "Krishna Bajpai"
                    }
                  }
                ]
              }
            }
          }
        `}</script>

        {/* Additional SEO for real estate keywords */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes the Real Estate Consortium different from traditional valuation services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We combine cutting-edge machine learning forecasts with actionable insights from our exclusive network of influential firms and individuals. This hybrid approach provides more informed and precise valuations than ML alone."
                }
              },
              {
                "@type": "Question",
                "name": "How important is network intelligence to real estate valuations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Critical. While ML identifies patterns in historical data, network intelligence provides context on emerging trends, development plans, regulatory changes, and market sentiment that haven't yet manifested in transaction data."
                }
              },
              {
                "@type": "Question",
                "name": "Is this service suitable for individual investors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The consortium is designed for institutional investors, family offices, and portfolio managers. Invitation-only membership ensures alignment with our premium service standards."
                }
              },
              {
                "@type": "Question",
                "name": "How do you access exclusive market intelligence?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our network includes relationships with Fortune 500 real estate firms, investment banks, development companies, and industry veterans who contribute insights and context to our analysis."
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      <Layout>
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
            <div className="container">
              <div className="mb-8 flex items-center gap-2">
                <Badge variant="outline" className="border-primary text-primary">
                  <Lock className="mr-2 h-4 w-4" />
                  Invitation Only
                </Badge>
                <Badge variant="secondary">
                  Quantum Enhanced
                </Badge>
              </div>
            </div>
              
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-2xl rounded-3xl"></div>
                  <div className="relative">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-sketch">
                      Elite Real Estate Intelligence
                    </h1>
                    
                    <p className="mb-8 text-xl text-muted-foreground/90">
                      Where <span className="font-semibold text-primary">Quantum-Enhanced ML</span> Meets <span className="font-semibold text-accent">Elite Network Intelligence</span>
                    </p>

                    <div className="mb-12 p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Our exclusive consortium merges quantum-powered AI valuations with privileged insights from the world's most influential real estate leaders. The result: Unmatched accuracy and foresight for elite investors.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button size="lg" variant="default" className="relative overflow-hidden group w-full">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                          <span className="relative">Contact for Membership</span>
                        </Button>
                      </Link>
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="group"
                        onClick={() => {
                          const benefitsSection = document.getElementById('benefits');
                          benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span className="text-primary group-hover:text-inherit transition-colors">Explore Benefits</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
                  
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-xl border border-border bg-background/95 backdrop-blur-xl p-8 transition-all duration-500 group-hover:border-primary/50">
                      {/* Neural Network Visualization */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-30"></div>
                        {/* Animated Nodes */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-primary/20"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `pulse 2s ${i * 0.5}s infinite`
                            }}
                          >
                            <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
                          </div>
                        ))}
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
                              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.1" />
                              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          {[...Array(15)].map((_, i) => (
                            <line
                              key={i}
                              x1={`${Math.random() * 100}%`}
                              y1={`${Math.random() * 100}%`}
                              x2={`${Math.random() * 100}%`}
                              y2={`${Math.random() * 100}%`}
                              stroke="url(#lineGradient)"
                              strokeWidth="1"
                              className="animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </svg>
                      </div>

                      {/* Main Content */}
                      <div className="relative h-full flex flex-col justify-between">
                        {/* Top Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 via-transparent to-transparent backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-500">
                            <div className="text-2xl font-bold text-primary">94.8%</div>
                            <div className="text-sm text-muted-foreground/75">Valuation Accuracy</div>
                          </div>
                          <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 via-transparent to-transparent backdrop-blur-sm border border-border/50 group-hover:border-accent/50 transition-all duration-500">
                            <div className="text-2xl font-bold text-accent">31%</div>
                            <div className="text-sm text-muted-foreground/75">Better Returns</div>
                          </div>
                        </div>

                        {/* Center Section */}
                        <div className="relative flex-1 flex items-center justify-center mb-8">
                          <div className="p-6 rounded-lg bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl border border-border/50 group-hover:border-accent/50 transition-all duration-500">
                            <div className="text-center mb-2">
                              <div className="text-3xl font-bold text-primary">75+</div>
                              <div className="text-sm text-muted-foreground">Elite Members</div>
                            </div>
                            <div className="mt-2 text-center text-xs text-muted-foreground/75">Across 15 Countries</div>
                          </div>
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: "24/7", label: "Analysis", gradient: "from-primary to-accent" },
                            { value: "5ms", label: "Latency", gradient: "from-accent to-secondary" },
                            { value: "100%", label: "Secure", gradient: "from-secondary to-primary" }
                          ].map((stat, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 group-hover:border-accent/30 transition-all duration-500">
                              <div className="text-sm font-medium text-primary">{stat.value}</div>
                              <div className="text-xs text-muted-foreground/75">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>


          {/* The Hybrid Approach Section */}
          <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/50 border-y border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
            <div className="container relative">
              <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl font-sketch">
                Beyond Traditional ML
              </h2>

              <div className="grid gap-12 md:grid-cols-3">
                {/* Quantum ML Section */}
                <div className="rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="mb-4 text-2xl font-bold text-primary">Quantum ML</div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Quantum-enhanced predictions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Pattern recognition at scale
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Efficient market simulation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span> Risk-aware optimization
                    </li>
                  </ul>
                  <div className="mt-6 text-sm text-muted-foreground/75">
                    94.8% prediction accuracy
                  </div>
                </div>

                {/* Network Section */}
                <div className="rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="mb-4 text-2xl font-bold text-accent">Elite Network</div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Fortune 500 insights
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Regulatory foresight
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Development intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span> Market sentiment
                    </li>
                  </ul>
                  <div className="mt-6 text-sm text-muted-foreground/75">
                    75+ elite members
                  </div>
                </div>

                {/* Result Section */}
                <div className="rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="mb-4 text-2xl font-bold text-foreground">Results</div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-foreground">✓</span> 31% better returns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-foreground">✓</span> Risk reduction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-foreground">✓</span> Market leadership
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-foreground">✓</span> Strategic advantage
                    </li>
                  </ul>
                  <div className="mt-6 text-sm text-muted-foreground/75">
                    Proven track record
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border">
            <div className="container">
              <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl font-sketch">
                Consortium Capabilities
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg blur transition-all duration-500 group-hover:blur-xl" />
                    <div className="relative rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary">
                      <div className="absolute -top-4 -right-4">
                        <div className="rounded bg-primary/10 backdrop-blur-sm px-3 py-1 text-xs text-primary font-medium">
                          {feature.highlight}
                        </div>
                      </div>
                      <div className="mb-4 text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="px-4 py-20 sm:px-6 lg:px-8 border-b border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
            <div className="container relative">
              <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl font-sketch">
                Member Advantages
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg blur-sm transition-all duration-500 group-hover:blur-xl" />
                    <div className="relative flex gap-4 rounded-lg border border-border bg-background/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary">
                      <div className="h-6 w-6 flex-shrink-0 text-primary">✓</div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Membership Tiers */}
          <section className="px-4 py-20 sm:px-6 lg:px-8 bg-muted/50 border-y border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
            <div className="container relative">
              <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl font-sketch">
                Membership Tiers
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {tiers.map((tier, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-lg blur transition-all duration-500 group-hover:blur-xl" />
                    <div className="relative rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary h-full flex flex-col">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                        <p className="text-muted-foreground text-sm">{tier.description}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-8 flex-1">
                        {tier.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <span className="text-xs text-primary flex-shrink-0">■</span>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/contact" className="w-full mt-auto">
                        <Button className="w-full" variant="default">
                          {tier.cta}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg blur-sm"></div>
                <div className="relative rounded-lg border border-border bg-background/80 backdrop-blur-sm p-8">
                  <p className="text-center text-muted-foreground">
                    <span className="font-semibold text-foreground">Custom Enterprise Solutions</span> available for organizations with unique requirements. Contact us for details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20"></div>
            <div className="container relative">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl font-sketch">
                  Transform Your Real Estate Strategy
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Join an elite network of institutional investors, family offices, and real estate leaders leveraging quantum-enhanced AI for unprecedented returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" variant="default" className="w-full sm:w-auto">
                      Request Membership Invitation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="px-4 py-12 sm:px-6 lg:px-8 border-t border-border">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-muted-foreground">
                  Have questions? <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">Contact our team</Link> to discuss membership opportunities.
                </p>
              </div>
            </div>
          </section>
      </Layout>
    </>
  );
};

export default RealEstateConsortium;
