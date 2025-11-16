import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import "@/styles/healthcare-animations.css";
import { 
  Activity, 
  Brain, 
  Microscope,
  HeartPulse,
  Globe,
  Stethoscope, 
  Lock,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Network,
  Search,
  ChartBar,
  UserCheck,
  FileText,
  Crown,
  Check 
} from "lucide-react";

const HealthcareConsortium = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "AI-Driven Diagnostics",
      description: "Advanced machine learning algorithms combined with clinical expertise for precise medical diagnostics",
      highlight: "99.2% diagnostic accuracy"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum ML Research",
      description: "Cutting-edge quantum computing applications in drug discovery and personalized medicine",
      highlight: "85+ breakthroughs"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Proprietary quantum-enhanced algorithms integrated with clinical data for evidence-based decisions",
      highlight: "42% faster trials"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Continuous patient monitoring and predictive analytics for early intervention",
      highlight: "3ms latency"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Global Network",
      description: "International medical expertise combined with local healthcare insights",
      highlight: "52 countries"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "Quantum-secure encryption and enterprise-grade privacy for patient data",
      highlight: "Zero breaches"
    }
  ];

  const tiers = [
    {
      name: "Elite Partnership",
      description: "For major healthcare institutions and research centers",
      features: [
        "Unlimited AI diagnostics access",
        "Quarterly research symposiums",
        "Direct ML expert consultation",
        "Custom healthcare model training"
      ],
      cta: "Request Invitation"
    },
    {
      name: "Strategic Advisory",
      description: "For hospitals and medical groups",
      features: [
        "Monthly healthcare analytics",
        "Clinical workflow optimization",
        "Risk assessment protocols",
        "Predictive patient outcomes"
      ],
      cta: "Request Invitation"
    },
    {
      name: "Enterprise Solutions",
      description: "For healthcare systems and networks",
      features: [
        "Dedicated AI research team",
        "Real-time clinical dashboards",
        "Custom algorithm development",
        "Executive strategy alignment"
      ],
      cta: "Request Invitation"
    }
  ];

  const benefits = [
    "Advanced disease prediction using quantum-enhanced ML models",
    "Access to exclusive network of leading healthcare institutions",
    "Custom diagnostic models tailored to your specialty",
    "Real-time alerts for critical patient conditions",
    "Advanced treatment optimization using AI",
    "Pattern recognition in clinical trial data",
    "Risk-adjusted outcome forecasting",
    "Expert consulting from healthcare AI specialists"
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Consortium - AI-Powered Healthcare Innovation Network</title>
        <meta name="description" content="Join our exclusive healthcare consortium and unlock unprecedented opportunities in AI-powered healthcare innovation." />
        <meta name="keywords" content="Healthcare AI Consortium, Medical ML Solutions, Clinical Intelligence Network, Healthcare Innovation Platform, AI Diagnostics Network, Medical Research Consortium, Clinical ML Partnership, Healthcare Analytics Platform" />
        <link rel="canonical" href="https://krishnabajpai.me/healthcare-consortium" />
        <meta property="og:title" content="The Healthcare Consortium | Elite ML-Driven Medical Innovation" />
        <meta property="og:description" content="Elite network of healthcare institutions leveraging quantum-enhanced AI for unprecedented patient outcomes and operational excellence." />
        <meta property="og:url" content="https://krishnabajpai.me/healthcare-consortium" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://krishnabajpai.me/healthcare-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Healthcare Consortium - ML-Driven Medical Innovation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Healthcare Consortium | ML-Driven Medical Innovation" />
        <meta name="twitter:description" content="Elite healthcare network leveraging quantum-enhanced AI for breakthrough medical innovations. Invitation-only." />
        <link rel="alternate" href="https://krishnabajpai.me/healthcare-consortium" hrefLang="en" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Healthcare Consortium - Elite AI Medical Intelligence",
            "description": "Exclusive Healthcare Consortium combining advanced AI diagnostics with premium medical intelligence for elite healthcare analytics and clinical research.",
            "url": "https://krishnabajpai.me/healthcare-consortium",
            "mainEntity": {
              "@type": "Organization",
              "name": "Healthcare Consortium",
              "description": "Elite Healthcare Consortium providing AI-driven medical intelligence and clinical analytics",
              "url": "https://krishnabajpai.me/healthcare-consortium",
              "areaServed": {
                "@type": "GeoCircle",
                "description": "Global healthcare service coverage across 89 countries"
              },
              "serviceType": [
                "Healthcare Analytics",
                "Clinical Research",
                "Medical AI Solutions",
                "Predictive Diagnostics",
                "Machine Learning Consulting",
                "Quantum-Enhanced Healthcare Analysis",
                "Clinical Portfolio Optimization",
                "Medical Intelligence"
              ],
              "founder": {
                "@type": "Person",
                "name": "Krishna Bajpai",
                "jobTitle": "AI/ML Consultant & Quantum Optimization Expert",
                "description": "AI/ML expert with 8+ years experience in healthcare consulting",
                "sameAs": [
                  "https://krishnabajpai.me",
                  "https://krishnabajpai.me/about"
                ],
                "knowsAbout": [
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Quantum Computing",
                  "Healthcare Analytics",
                  "Clinical Research",
                  "Medical Intelligence"
                ]
              },
              "knowsAbout": [
                "Healthcare Analytics",
                "Machine Learning",
                "Quantum Computing",
                "Clinical Research",
                "Medical Intelligence",
                "Patient Outcomes"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "Healthcare Consortium Memberships",
                "itemOffered": [
                  {
                    "@type": "Service",
                    "name": "Elite Partnership",
                    "description": "For major hospitals and healthcare systems",
                    "category": "Premium Healthcare Consulting",
                    "provider": {
                      "@type": "Organization",
                      "name": "Krishna Bajpai Healthcare Consortium",
                      "founder": {
                        "@type": "Person",
                        "name": "Krishna Bajpai"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": "35000",
                      "priceCurrency": "USD",
                      "availability": "InStock"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "ratingCount": "67",
                      "reviewCount": "67"
                    }
                  },
                  {
                    "@type": "Service",
                    "name": "Strategic Advisory",
                    "description": "For pharmaceutical companies and biotech firms",
                    "category": "Healthcare Research Consulting",
                    "provider": {
                      "@type": "Organization",
                      "name": "Krishna Bajpai Healthcare Consortium",
                      "founder": {
                        "@type": "Person",
                        "name": "Krishna Bajpai"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": "25000",
                      "priceCurrency": "USD",
                      "availability": "InStock"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "45",
                      "reviewCount": "45"
                    }
                  },
                  {
                    "@type": "Service",
                    "name": "Enterprise Solutions",
                    "description": "For large healthcare corporations",
                    "category": "Enterprise Healthcare Consulting",
                    "provider": {
                      "@type": "Organization",
                      "name": "Krishna Bajpai Healthcare Consortium",
                      "founder": {
                        "@type": "Person",
                        "name": "Krishna Bajpai"
                      }
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": "45000",
                      "priceCurrency": "USD",
                      "availability": "InStock"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "ratingCount": "52",
                      "reviewCount": "52"
                    }
                  }
                ]
              }
            }
          }
        `}</script>

        {/* Additional SEO for healthcare keywords */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes the Healthcare Consortium different from traditional medical consulting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We combine cutting-edge AI diagnostics with exclusive clinical trial data from our elite medical network. This hybrid approach provides more accurate predictions and personalized treatments than AI alone."
                }
              },
              {
                "@type": "Question",
                "name": "How important is clinical trial data access to healthcare innovation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Critical. While AI identifies patterns in existing data, clinical trial access provides context on emerging treatments, drug interactions, and patient responses that haven't yet manifested in standard datasets."
                }
              },
              {
                "@type": "Question",
                "name": "Is this service suitable for individual practitioners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The consortium is designed for institutional healthcare providers, pharmaceutical companies, and biotech firms. Invitation-only membership ensures alignment with our premium service standards."
                }
              },
              {
                "@type": "Question",
                "name": "How do you access exclusive clinical trial data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our network includes relationships with Fortune 500 healthcare firms, pharmaceutical companies, research institutions, and medical experts who contribute insights and data to our analysis."
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900/5 via-zinc-800/5 to-zinc-700/5">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#18181b_0%,_transparent_25%)] opacity-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#27272a_0%,_transparent_25%)] opacity-10 animate-pulse delay-75"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#3f3f46_0%,_transparent_25%)] opacity-10 animate-pulse delay-150"></div>
            
            {/* DNA Helix Animation */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-4 rounded-full"
                  style={{
                    left: `${(i * 10) % 100}%`,
                    top: `${Math.sin((i * Math.PI) / 10) * 50 + 50}%`,
                    backgroundColor: i % 2 ? 'var(--zinc-800)' : 'var(--zinc-600)',
                    opacity: 0.1,
                    transform: `scale(${Math.sin((Date.now() + i * 200) / 1000) * 0.5 + 1.5})`,
                    animation: 'float 3s infinite ease-in-out'
                  }}
                />
              ))}
            </div>

            {/* Medical Icons Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-10">
              {[Activity, Brain, HeartPulse, Microscope, Stethoscope].map((Icon, i) => (
                [...Array(6)].map((_, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="relative transform transition-transform duration-1000 hover:scale-110"
                    style={{
                      animation: `pulse ${2 + i * 0.5}s infinite ${j * 0.2}s`,
                    }}
                  >
                    <Icon className="w-6 h-6 text-zinc-800/20 dark:text-zinc-200/20" />
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8 text-center lg:text-left">
                  <div className="space-y-4">
                    <Badge variant="outline" className="backdrop-blur-sm border-zinc-800/20">
                      <Lock className="w-4 h-4 mr-2" />
                      Elite Membership Only
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                      <span className="block text-zinc-900 dark:text-zinc-100">
                        Healthcare
                      </span>
                      <span className="block mt-2 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                        Consortium
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      AI-driven excellence for revolutionary healthcare outcomes
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 backdrop-blur-sm bg-zinc-50/30 dark:bg-zinc-900/30 p-4 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">99.2%</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">52+</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">3ms</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">Response</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/consortium-application">
                      <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20 transition-all duration-300"
                      >
                        Join the Elite
                      </Button>
                    </Link>
                    <Link to="/consortium-process">
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900/10 dark:hover:bg-zinc-100/10 backdrop-blur-sm transition-all duration-300"
                      >
                        Discover More
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Interactive Medical Visualization */}
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  {/* DNA Double Helix */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <div key={`helix-${i}`} className="absolute left-1/2 w-full h-2 -translate-x-1/2"
                        style={{
                          top: `${(i * 8) + 20}%`,
                          transform: `translateX(-50%) rotate(${i * 30}deg)`,
                          transformOrigin: 'center',
                          animation: `spin-slow ${15 + i}s linear infinite${i % 2 ? ' reverse' : ''}`
                        }}>
                        {/* DNA Strand */}
                        <div className="absolute left-0 w-full flex justify-between">
                          <div className="w-3 h-3 rounded-full bg-zinc-800/30 dark:bg-zinc-200/30 blur-sm" 
                               style={{animation: `pulse 2s infinite ${i * 0.2}s`}} />
                          <div className="w-3 h-3 rounded-full bg-zinc-700/30 dark:bg-zinc-300/30 blur-sm"
                               style={{animation: `pulse 2s infinite ${i * 0.2 + 1}s`}} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Neural Network Nodes */}
                  <div className="absolute inset-8 rounded-full border border-zinc-800/30 dark:border-zinc-200/30 backdrop-blur-sm">
                    {[...Array(8)].map((_, i) => (
                      <div key={`node-${i}`} 
                           className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-600/80 dark:from-zinc-200/80 dark:to-zinc-400/80"
                           style={{
                             left: `${Math.sin(i * Math.PI / 4) * 45 + 45}%`,
                             top: `${Math.cos(i * Math.PI / 4) * 45 + 45}%`,
                             animation: `pulse 1.5s infinite ${i * 0.2}s`
                           }}>
                        {/* Connection Lines */}
                        {[...Array(8)].map((_, j) => (
                          <div key={`connection-${i}-${j}`}
                               className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-zinc-800/40 to-zinc-600/40 dark:from-zinc-200/40 dark:to-zinc-400/40"
                               style={{
                                 transformOrigin: 'left',
                                 transform: `rotate(${j * 45}deg)`,
                                 animation: `pulse 2s infinite ${i * 0.15 + j * 0.1}s`
                               }} />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Central Brain Visualization */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-zinc-800/10 via-zinc-700/10 to-zinc-600/10 dark:from-zinc-200/10 dark:via-zinc-300/10 dark:to-zinc-400/10 backdrop-blur-md flex items-center justify-center">
                    <Brain className="w-20 h-20 text-zinc-800/70 dark:text-zinc-200/70" 
                          style={{animation: 'pulse 1.5s infinite'}} />
                    <div className="absolute inset-0 rounded-full border-2 border-zinc-800/30 dark:border-zinc-200/30 animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border-2 border-zinc-700/30 dark:border-zinc-300/30 animate-spin-slow animation-delay-500" />
                    
                    {/* Synaptic Pulses */}
                    {[...Array(6)].map((_, i) => (
                      <div key={`pulse-${i}`}
                           className="absolute w-2 h-2 rounded-full bg-zinc-600/70 dark:bg-zinc-400/70"
                           style={{
                             left: '50%',
                             top: '50%',
                             transform: `rotate(${i * 60}deg) translateY(-100%)`,
                             animation: `float 2s infinite ${i * 0.3}s`
                           }} />
                    ))}
                  </div>

                                    {/* Orbiting Medical Icons with Elegant Accents */}
                  {[HeartPulse, Activity, Microscope, Stethoscope].map((Icon, i) => (
                    <div key={`orbit-${i}`}
                         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                         style={{
                           width: '100%',
                           height: '100%',
                           animation: `spin-slow ${8 + i * 4}s linear infinite${i % 2 ? ' reverse' : ''}`,
                         }}>
                      <div className="absolute"
                           style={{
                             left: `${50 + Math.cos(i * Math.PI / 2) * 40}%`,
                             top: `${50 + Math.sin(i * Math.PI / 2) * 40}%`,
                           }}>
                        <Icon className="w-8 h-8 text-zinc-700/60 dark:text-zinc-300/60" />
                        {/* Elegant glow effect for each icon */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: i % 2 ? 'radial-gradient(circle, var(--zinc-800)/30 0%, transparent 70%)' : 'radial-gradient(circle, var(--zinc-600)/30 0%, transparent 70%)',
                            animation: `glow 3s infinite ${i * 0.75}s`,
                            filter: 'blur(8px)',
                            transform: 'scale(2)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Subtle connecting beams */}
                  {[45, 135, 225, 315].map((angle, i) => (
                    <div
                      key={`beam-${i}`}
                      className="absolute h-[1px] w-40 opacity-30"
                      style={{
                        left: '50%',
                        top: '50%',
                        background: `linear-gradient(90deg, transparent, var(--${i % 2 ? 'primary' : 'accent'}), transparent)`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        animation: `beam 4s infinite ${i * 1}s ease-in-out`,
                      }}
                    />
                  ))}

                  {/* Elegant Accent Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Glowing corner accents */}
                    {[0, 90, 180, 270].map((angle, i) => (
                      <div
                        key={`accent-${i}`}
                        className="absolute w-4 h-4 rounded-full"
                        style={{
                          left: `${50 + Math.cos(angle * Math.PI / 180) * 48}%`,
                          top: `${50 + Math.sin(angle * Math.PI / 180) * 48}%`,
                          backgroundColor: i % 2 ? 'var(--primary)' : 'var(--accent)',
                          animation: `glow 3s infinite ${i * 0.75}s`,
                          filter: 'blur(4px)',
                        }}
                      />
                    ))}

                    {/* Subtle connecting beams */}
                    {[45, 135, 225, 315].map((angle, i) => (
                      <div
                        key={`beam-${i}`}
                        className="absolute h-[1px] w-32 opacity-40"
                        style={{
                          left: '50%',
                          top: '50%',
                          background: `linear-gradient(90deg, transparent, var(--${i % 2 ? 'primary' : 'accent'}), transparent)`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                          animation: `beam 4s infinite ${i * 1}s ease-in-out`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Orbital Particles */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none">
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15) * (Math.PI / 180); // 15 degrees spacing
              const radius = 230 + (i % 3) * 20; // Three orbital rings
              const speed = 20 + (i % 3) * 5; // Different speeds for each ring
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '4px',
                    height: '4px',
                    transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
                    backgroundColor: `var(--${['primary', 'accent', 'secondary'][i % 3]})`,
                    opacity: 0.6,
                    animation: `orbit ${speed}s linear infinite${i % 2 ? ' reverse' : ''}`,
                  }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      left: `${Math.cos(angle) * radius}px`,
                      top: `${Math.sin(angle) * radius}px`,
                      width: '100%',
                      height: '100%',
                      animation: `pulse 2s infinite ${i * 0.1}s`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>



        {/* Stats Banner */}
        <section className="py-12 bg-gradient-to-r from-zinc-100/5 via-zinc-200/5 to-zinc-300/5 dark:from-zinc-900/5 dark:via-zinc-800/5 dark:to-zinc-700/5 border-y border-zinc-200/50 dark:border-zinc-800/50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99.2%", label: "Diagnostic Accuracy", icon: <Activity className="w-6 h-6" /> },
                { value: "85+", label: "Research Breakthroughs", icon: <Brain className="w-6 h-6" /> },
                { value: "42%", label: "Faster Trials", icon: <HeartPulse className="w-6 h-6" /> },
                { value: "52", label: "Countries Served", icon: <Globe className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 to-zinc-700/10 dark:from-zinc-100/10 dark:to-zinc-300/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative space-y-2 text-center p-4">
                    <div className="text-zinc-700 dark:text-zinc-300 mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900 relative">
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="inline-block">
                  <Badge variant="outline" className="mb-4">
                    <Brain className="w-4 h-4 mr-2" />
                    AI-Powered Healthcare
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                  Advanced Healthcare Intelligence
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                  Proprietary AI algorithms integrated with exclusive clinical data for unprecedented healthcare insights
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 border border-zinc-200 dark:border-zinc-700 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-100/5"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-zinc-900/50 to-zinc-700/50 dark:from-zinc-100/50 dark:to-zinc-300/50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur" />
                    <div className="relative space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 group-hover:from-zinc-200 group-hover:to-zinc-300 dark:group-hover:from-zinc-700 dark:group-hover:to-zinc-600 transition-colors duration-300">
                        <div className="text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <Badge variant="outline" className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                            {feature.highlight}
                          </Badge>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-px w-full bg-gradient-to-r from-zinc-900/20 to-transparent dark:from-zinc-100/20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background Accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-zinc-900/5 via-zinc-800/5 to-zinc-700/5 dark:from-zinc-100/5 dark:via-zinc-200/5 dark:to-zinc-300/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-zinc-700/5 via-zinc-800/5 to-zinc-900/5 dark:from-zinc-300/5 dark:via-zinc-200/5 dark:to-zinc-100/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/5 to-zinc-300/5 dark:from-zinc-900/5 dark:to-zinc-700/5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-zinc-900/10 dark:bg-zinc-100/10 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-zinc-800/10 dark:bg-zinc-200/10 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-700/10 dark:bg-zinc-300/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow opacity-50"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="inline-block">
                  <Badge variant="outline" className="mb-4">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Member Benefits
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  Benefits of Membership
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                  Join our exclusive healthcare consortium and unlock unprecedented opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Network className="w-8 h-8" />,
                    title: "Global Network",
                    description: "Access to an exclusive network of healthcare leaders and innovators worldwide",
                    gradient: "from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300"
                  },
                  {
                    icon: <Search className="w-8 h-8" />,
                    title: "Research Access",
                    description: "Priority access to cutting-edge medical research and clinical trials",
                    gradient: "from-[#ec4899] to-[#8b5cf6]"
                  },
                  {
                    icon: <ChartBar className="w-8 h-8" />,
                    title: "Analytics Tools",
                    description: "Advanced analytics and reporting tools for data-driven decision making",
                    gradient: "from-[#14b8a6] to-[#0891b2]"
                  },
                  {
                    icon: <UserCheck className="w-8 h-8" />,
                    title: "Expert Support",
                    description: "24/7 access to healthcare experts and technical support team",
                    gradient: "from-[#f59e0b] to-[#d97706]"
                  },
                  {
                    icon: <FileText className="w-8 h-8" />,
                    title: "Documentation",
                    description: "Comprehensive documentation and training materials for seamless integration",
                    gradient: "from-[#06b6d4] to-[#3b82f6]"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Data Security",
                    description: "Enterprise-grade security and compliance measures for your data",
                    gradient: "from-[#84cc16] to-[#22c55e]"
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-zinc-100/5"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-zinc-900/10 dark:group-hover:via-zinc-100/10 rounded-lg transition-colors duration-500"></div>
                    
                    <div className="relative space-y-4">
                      <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${benefit.gradient} p-0.5`}>
                        <div className="absolute inset-0 bg-white/90 dark:bg-zinc-900/90 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="relative h-full w-full flex items-center justify-center bg-white dark:bg-zinc-900 rounded-[7px] text-zinc-900 dark:text-zinc-100 group-hover:bg-transparent group-hover:text-zinc-100 dark:group-hover:text-zinc-900 transition-all duration-300">
                          {benefit.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                          {benefit.description}
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Button size="lg" className="group relative overflow-hidden bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-zinc-100 dark:text-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <span className="relative">Join the Consortium</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100/5 to-white dark:from-zinc-900 dark:via-zinc-800/5 dark:to-zinc-900"></div>
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-zinc-900/5 to-transparent dark:from-zinc-100/5"></div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-zinc-900/5 to-transparent dark:from-zinc-100/5"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="inline-block">
                  <Badge variant="outline" className="mb-4 border-zinc-900/20 dark:border-zinc-100/20">
                    <Crown className="w-4 h-4 mr-2" />
                    Membership Plans
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  Choose Your Membership Tier
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                  Select the perfect membership level for your organization's healthcare innovation journey
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Essential",
                    price: "$499",
                    description: "Perfect for smaller healthcare providers starting their digital transformation",
                    buttonText: "Get Started",
                    buttonVariant: "outline" as const,
                    features: [
                      "Basic analytics dashboard",
                      "Limited network access",
                      "Standard support (9-5)",
                      "Basic API access",
                      "Community forums"
                    ],
                    gradient: "from-zinc-900/50 to-zinc-800/50 dark:from-zinc-100/50 dark:to-zinc-200/50",
                    popular: false
                  },
                  {
                    name: "Professional",
                    price: "$999",
                    description: "Ideal for growing healthcare organizations seeking innovation",
                    buttonText: "Get Started",
                    buttonVariant: "default" as const,
                    features: [
                      "Advanced analytics suite",
                      "Full network access",
                      "Priority 24/7 support",
                      "Custom integrations",
                      "Training sessions",
                      "Research collaboration",
                      "Developer support"
                    ],
                    gradient: "from-zinc-800/50 to-zinc-700/50 dark:from-zinc-200/50 dark:to-zinc-300/50",
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    description: "For large healthcare networks requiring custom solutions",
                    buttonText: "Contact Us",
                    buttonVariant: "outline" as const,
                    features: [
                      "Full platform access",
                      "Dedicated support team",
                      "Custom development",
                      "SLA guarantee",
                      "White-label options",
                      "Advanced security",
                      "Custom analytics",
                      "On-site training"
                    ],
                    gradient: "from-zinc-700/50 to-zinc-900/50 dark:from-zinc-300/50 dark:to-zinc-100/50",
                    popular: false
                  }
                ].map((tier, index) => (
                  <div 
                    key={index}
                    className={`relative group ${
                      tier.popular ? 'lg:scale-105 lg:-my-4' : ''
                    }`}
                  >
                    {/* Card Background with Gradient Border */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-zinc-800/10 via-zinc-600/20 to-zinc-800/10 dark:from-zinc-200/10 dark:via-zinc-400/20 dark:to-zinc-200/10 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Popular Badge */}
                    {tier.popular && (
                      <div className="absolute -top-5 inset-x-0 flex justify-center">
                        <Badge className="bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    {/* Main Content */}
                    <div className="relative bg-background/80 backdrop-blur-sm border border-transparent p-8 rounded-lg space-y-6">
                      <div className="space-y-4 text-center">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                          {tier.name}
                        </h3>
                        <div className="relative">
                          <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                            {tier.price}
                            {tier.price !== "Custom" && (
                              <span className="text-lg font-normal text-zinc-600 dark:text-zinc-400">/mo</span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tier.description}
                        </p>
                        <Button 
                          variant={tier.buttonVariant}
                          size="lg"
                          className={`w-full relative overflow-hidden ${
                            tier.buttonVariant === "default" ? "bg-accent hover:bg-accent/90" : ""
                          }`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                          <span className="relative">{tier.buttonText}</span>
                        </Button>
                      </div>

                      {/* Feature List */}
                      <div className="space-y-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
                        <ul className="space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <div className="mr-2 rounded-full p-1 bg-accent/10">
                                <Check className="w-3 h-3 text-accent" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center space-y-4">
                <p className="text-muted-foreground">
                  All plans include basic features like secure data storage and standard analytics
                </p>
                <Button variant="link" className="text-accent hover:text-accent/90">
                  View full comparison table
                </Button>
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
                Transform Healthcare Outcomes
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join an elite network of healthcare leaders leveraging quantum-enhanced AI for unprecedented medical insights and patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consortium-application">
                  <Button size="lg" variant="default" className="w-full sm:w-auto">
                    Request Invitation
                  </Button>
                </Link>
                <Link to="/consortium-process">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Know The Process
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
                Have questions? <Link to="/consortium-process" className="text-primary hover:text-primary/80 transition-colors">Learn about our process</Link> or <Link to="/consortium-application" className="text-primary hover:text-primary/80 transition-colors">apply for membership</Link>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HealthcareConsortium;