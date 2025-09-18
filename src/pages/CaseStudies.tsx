import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CaseStudies = () => {
  const cases = [
    {
      id: "manufacturing-predictive",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Equipment failures causing 12% production loss and $3.2M annual costs. No predictive capabilities, purely reactive maintenance.",
      approach: "Deployed IoT sensors across 200+ machines, built ensemble ML models with XGBoost and LSTM networks, created real-time monitoring dashboard.",
      results: "87% reduction in unplanned downtime, $2.4M annual savings, 94.4% prediction accuracy for failures 2-4 weeks in advance.",
      testimonial: "Krishna's predictive maintenance solution transformed our operations. What seemed impossible became our competitive advantage.",
      testimonialAuthor: "VP of Operations",
      metric: "87%",
      metricLabel: "downtime reduction",
      technologies: ["Python", "XGBoost", "LSTM", "IoT", "Docker", "Kubernetes"],
      timeline: "3 months"
    },
    {
      id: "fintech-fraud",
      client: "FinTech Unicorn",
      industry: "Financial Services", 
      challenge: "Manual fraud detection missing 23% of fraudulent transactions, leading to $1.8M quarterly losses and regulatory concerns.",
      approach: "Built real-time ML fraud detection with ensemble modeling, implemented anomaly detection, created automated decision engine with human-in-the-loop.",
      results: "99.7% fraud detection accuracy, 15x faster processing, reduced false positives by 68%, saved $1.2M in first quarter.",
      testimonial: "The fraud detection system paid for itself in 2 months. Krishna delivered beyond our wildest expectations.",
      testimonialAuthor: "CTO",
      metric: "99.7%",
      metricLabel: "fraud detection accuracy",
      technologies: ["Python", "Scikit-learn", "Apache Kafka", "Redis", "FastAPI"],
      timeline: "4 months"
    },
    {
      id: "supply-chain",
      client: "Global Supply Chain Co",
      industry: "Logistics",
      challenge: "Inventory optimization across 200+ locations with complex constraints. $5M tied up in excess inventory, frequent stockouts affecting customer satisfaction.",
      approach: "Developed quantum-enhanced optimization algorithms, implemented multi-constraint solver, built demand forecasting with Prophet Plus.",
      results: "31% inventory cost reduction, 28% fewer stockouts, 2.3x ROI improvement, optimized $50M+ inventory annually.",
      testimonial: "The quantum optimization solution saved us $1.2M in the first year. Incredible technical depth and business acumen.",
      testimonialAuthor: "Head of Supply Chain",
      metric: "31%",
      metricLabel: "cost reduction", 
      technologies: ["Python", "Quantum Computing", "Prophet", "Optimization", "TensorFlow"],
      timeline: "6 months"
    },
    {
      id: "healthcare-automation",
      client: "Healthcare AI Platform",
      industry: "Healthcare",
      challenge: "Manual document processing taking 4-6 hours per patient file, 15% error rate, staff burnout from repetitive tasks.",
      approach: "Built intelligent document processing with NLP, created automated workflow with human oversight, implemented continuous learning system.",
      results: "92% processing time reduction, 98.5% accuracy, 3x staff productivity increase, processed 50K+ documents monthly.",
      testimonial: "Krishna's automation freed our staff to focus on patient care. The ROI was immediate and transformational.",
      testimonialAuthor: "Medical Director",
      metric: "92%",
      metricLabel: "time reduction",
      technologies: ["Python", "NLP", "OCR", "Streamlit", "PostgreSQL"],
      timeline: "3 months"
    },
    {
      id: "retail-personalization",
      client: "E-commerce Leader",
      industry: "Retail",
      challenge: "Generic product recommendations leading to 2.1% conversion rate, high cart abandonment, poor customer lifetime value.",
      approach: "Implemented deep learning recommendation engine, real-time personalization, A/B testing framework for continuous optimization.",
      results: "340% increase in conversion rate (2.1% to 9.2%), 45% reduction in cart abandonment, $4.7M additional revenue annually.",
      testimonial: "The recommendation system became our secret weapon. Customer engagement and sales skyrocketed immediately.",
      testimonialAuthor: "VP of E-commerce",
      metric: "340%",
      metricLabel: "conversion increase",
      technologies: ["Python", "TensorFlow", "Redis", "A/B Testing", "Spark"],
      timeline: "5 months"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags & Structured Data */}
      <Helmet>
        <title>Case Studies | AI & ML Consulting | Krishna Bajpai</title>
        <meta name="description" content="Real-world AI, ML, Quantum, Automation, and Predictive Modeling case studies by Krishna Bajpai. Verified results, client testimonials, and business impact." />
        <meta name="keywords" content="Case studies, AI consulting, ML consulting, Quantum optimization, Predictive analytics, Healthcare AI, Fintech AI, Supply chain AI, MLOps, Automation, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/case-studies" />
        <meta property="og:title" content="Case Studies | AI & ML Consulting | Krishna Bajpai" />
        <meta property="og:description" content="Real-world AI, ML, Quantum, Automation, and Predictive Modeling case studies by Krishna Bajpai. Verified results, client testimonials, and business impact." />
        <meta property="og:url" content="https://krishnabajpai.me/case-studies" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | AI & ML Consulting | Krishna Bajpai" />
        <meta name="twitter:description" content="Real-world AI, ML, Quantum, Automation, and Predictive Modeling case studies by Krishna Bajpai. Verified results, client testimonials, and business impact." />
        <link rel="alternate" href="https://krishnabajpai.me/case-studies" hrefLang="en" />
        {/* Structured Data: CollectionPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Case Studies | Krishna Bajpai",
            "url": "https://krishnabajpai.me/case-studies",
            "description": "Real-world AI, ML, Quantum, Automation, and Predictive Modeling case studies by Krishna Bajpai.",
            "hasPart": [
              {
                "@type": "CreativeWork",
                "name": "Manufacturing Predictive Maintenance",
                "about": "Predictive maintenance for manufacturing, 87% downtime reduction, $2.4M savings."
              },
              {
                "@type": "CreativeWork",
                "name": "FinTech Fraud Detection",
                "about": "99.7% fraud detection accuracy, $1.2M saved."
              },
              {
                "@type": "CreativeWork",
                "name": "Supply Chain Optimization",
                "about": "Quantum optimization, 31% cost reduction, $5M inventory optimized."
              },
              {
                "@type": "CreativeWork",
                "name": "Healthcare Automation",
                "about": "NLP automation, 92% time reduction, 98.5% accuracy."
              },
              {
                "@type": "CreativeWork",
                "name": "Retail Personalization",
                "about": "Deep learning recommendations, 340% conversion increase, $4.7M revenue."
              }
            ]
          }
        `}</script>
      </Helmet>
      <Layout>
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <header>
              <h1 className="text-5xl font-light text-foreground mb-6">
                Case Studies
                <span className="font-sketch font-bold relative">
                  That Actually Happened
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real projects, real problems, real impact on the bottom line. Every case study includes verified results and client testimonials.
              </p>
            </header>
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {cases.map((case_, index) => (
              <article key={case_.id} className="bg-card border border-border p-8 lg:p-12 relative" aria-labelledby={`case-title-${index}`}> 
                {/* Sketchy corner accent */}
                <div className="absolute top-4 right-4 font-sketch text-xs text-sketch rotate-12">
                  Case #{index + 1}
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Metric Highlight */}
                  <div className="lg:col-span-1">
                    <div className="bg-secondary p-8 text-center border border-border h-full flex flex-col justify-center relative overflow-hidden">
                      {/* Doodle illustrations based on case type */}
                      {case_.id === "manufacturing-predictive" && (
                        <div className="absolute inset-0 opacity-20">
                          {/* Manufacturing doodles */}
                          <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                            {/* Neural network */}
                            <circle cx="40" cy="30" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="70" cy="20" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="100" cy="30" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="130" cy="20" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="160" cy="30" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="250" cy="25" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="210" cy="40" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="30" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="70" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="110" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="150" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="200" cy="75" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="240" cy="65" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="280" cy="75" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="30" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="70" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="110" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="150" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="190" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="230" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="270" cy="110" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="50" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="90" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="130" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="170" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="210" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="250" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="40" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="80" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="120" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="160" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="200" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="240" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="280" cy="190" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="60" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="100" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="140" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="180" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="220" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            <circle cx="260" cy="230" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Random connections between neural nodes */}
                            <path d="M40 35C36 48 32 55 32 68" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M40 35C50 48 61 55 68 68" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M70 25C65 48 60 65 70 70" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M100 35C90 50 100 60 110 70" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M130 25C140 45 145 55 150 70" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M160 35C155 50 155 60 150 70" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M210 45C205 55 200 65 200 75" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M250 30C245 40 245 50 240 65" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            
                            <path d="M30 75C30 85 30 95 30 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M70 75C70 85 70 95 70 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M110 75C110 85 110 95 110 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M150 75C150 85 150 95 150 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M200 80C195 90 195 100 190 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M240 70C235 85 235 95 230 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M280 80C275 90 275 100 270 110" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            
                            <path d="M30 115C35 125 45 135 50 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M70 115C75 125 85 135 90 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M110 115C115 125 125 135 130 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M150 115C155 125 165 135 170 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M190 115C195 125 205 135 210 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M230 115C235 125 245 135 250 150" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            
                            <path d="M50 155C45 165 40 175 40 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M90 155C85 165 80 175 80 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M130 155C125 165 120 175 120 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M170 155C165 165 160 175 160 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M210 155C205 165 200 175 200 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M250 155C245 165 240 175 240 190" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            
                            <path d="M40 195C45 205 55 215 60 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M80 195C85 205 95 215 100 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M120 195C125 205 135 215 140 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M160 195C165 205 175 215 180 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M200 195C205 205 215 215 220 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            <path d="M240 195C245 205 255 215 260 230" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
                            
                            {/* Machine elements */}
                            <rect x="10" y="250" width="30" height="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <rect x="10" y="270" width="30" height="20" stroke="currentColor" strokeWidth="1" />
                            <circle cx="25" cy="280" r="5" stroke="currentColor" strokeWidth="1" />
                            <path d="M25 275L25 285" stroke="currentColor" strokeWidth="1" />
                            <path d="M20 280L30 280" stroke="currentColor" strokeWidth="1" />
                            
                            <rect x="55" y="260" width="20" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                            <circle cx="65" cy="290" r="8" stroke="currentColor" strokeWidth="1" />
                            <path d="M65 282L65 298" stroke="currentColor" strokeWidth="1" />
                            <path d="M57 290L73 290" stroke="currentColor" strokeWidth="1" />
                            <path d="M59 284L71 296" stroke="currentColor" strokeWidth="1" />
                            <path d="M59 296L71 284" stroke="currentColor" strokeWidth="1" />
                            
                            <rect x="170" y="260" width="20" height="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                            <circle cx="180" cy="290" r="8" stroke="currentColor" strokeWidth="1" />
                            <path d="M180 282L180 298" stroke="currentColor" strokeWidth="1" />
                            <path d="M172 290L188 290" stroke="currentColor" strokeWidth="1" />
                            <path d="M174 284L186 296" stroke="currentColor" strokeWidth="1" />
                            <path d="M174 296L186 284" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="220" cy="270" r="10" stroke="currentColor" strokeWidth="1" />
                            <path d="M215 265L225 275" stroke="currentColor" strokeWidth="1" />
                            <path d="M215 275L225 265" stroke="currentColor" strokeWidth="1" />
                            <circle cx="220" cy="270" r="3" stroke="currentColor" strokeWidth="1" />
                            
                            <circle cx="260" cy="260" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                            <path d="M260 248L260 272" stroke="currentColor" strokeWidth="1" />
                            <path d="M248 260L272 260" stroke="currentColor" strokeWidth="1" />
                            <circle cx="260" cy="260" r="4" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Data flow lines */}
                            <path d="M5 50C10 60 40 80 60 80C80 80 100 60 120 80C140 100 160 110 195 120" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
                            <path d="M5 140C30 130 50 145 70 130C90 115 120 140 140 120C160 100 180 120 195 100" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
                            <path d="M105 210C130 200 150 215 170 200C190 185 220 210 240 190C260 170 280 190 295 170" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
                            
                            {/* Handwritten annotations */}
                            <path d="M130 180C140 178 145 175 150 170" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M110 188C115 182 120 180 128 180" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M100 170C110 165 115 165 120 170" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M15 120C10 110 15 105 20 110" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M285 130C290 120 295 125 290 135" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M120 275C125 270 130 273 125 280" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M140 260C145 255 150 260 145 265" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M90 270C95 265 100 270 95 275" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M200 240C210 235 215 240 210 250" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M240 240C235 235 235 230 240 225" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Additional manufacturing elements */}
                            <path d="M5 10C15 5 25 15 15 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M285 10C275 5 265 15 275 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Factory/manufacturing visualization elements */}
                            <rect x="5" y="180" width="15" height="25" stroke="currentColor" strokeWidth="1" />
                            <path d="M5 180L20 170L35 180" stroke="currentColor" strokeWidth="1" />
                            <rect x="20" y="180" width="15" height="25" stroke="currentColor" strokeWidth="1" />
                            <circle cx="12" cy="195" r="3" stroke="currentColor" strokeWidth="1" />
                            <circle cx="27" cy="195" r="3" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Sensor nodes */}
                            <circle cx="10" cy="70" r="3" fill="currentColor" />
                            <circle cx="15" cy="140" r="3" fill="currentColor" />
                            <circle cx="20" cy="90" r="3" fill="currentColor" />
                            <circle cx="280" cy="40" r="3" fill="currentColor" />
                            <circle cx="290" cy="90" r="3" fill="currentColor" />
                            <circle cx="285" cy="170" r="3" fill="currentColor" />
                            
                            {/* IoT connectivity */}
                            <path d="M295 25C285 20 285 30 295 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2" />
                            <path d="M295 45C285 40 285 50 295 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2" />
                            <path d="M295 65C285 60 285 70 295 75" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2" />
                            
                            {/* Circuit board tracks */}
                            <path d="M270 240L270 280L240 280L240 250" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
                            <path d="M200 250L200 290L140 290L140 250" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
                            <path d="M100 240L100 260" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
                            <path d="M160 240L160 280L120 280L120 260" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 1" />
                          </svg>
                        </div>
                      )}
                      
                      {case_.id === "fintech-fraud" && (
                        <div className="absolute inset-0 opacity-20">
                          {/* FinTech fraud detection doodles */}
                          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent" style={{transform: 'rotate(3deg)'}}>
                            {/* Shield */}
                            <path d="M100 20C60 40 40 40 20 30V90C20 130 60 160 100 180C140 160 180 130 180 90V30C160 40 140 40 100 20Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
                            <path d="M100 40C70 55 55 55 40 45V90C40 120 70 145 100 160C130 145 160 120 160 90V45C145 55 130 55 100 40Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Check mark */}
                            <path d="M70 95L90 115L130 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            
                            {/* Lock */}
                            <rect x="80" y="165" width="40" height="25" rx="2" stroke="currentColor" strokeWidth="1" />
                            <path d="M85 165V155C85 145 95 140 100 140C105 140 115 145 115 155V165" stroke="currentColor" strokeWidth="1" />
                            <circle cx="100" cy="177" r="3" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Binary data - more scattered across the design */}
                            <text x="20" y="30" className="font-sketch text-xs" fill="currentColor">10101</text>
                            <text x="150" y="35" className="font-sketch text-xs" fill="currentColor">01010</text>
                            <text x="30" y="180" className="font-sketch text-xs" fill="currentColor">10010</text>
                            <text x="155" y="170" className="font-sketch text-xs" fill="currentColor">01101</text>
                            <text x="15" y="120" className="font-sketch text-xs" fill="currentColor">01100</text>
                            <text x="165" y="120" className="font-sketch text-xs" fill="currentColor">10011</text>
                            <text x="70" y="15" className="font-sketch text-xs" fill="currentColor">11001</text>
                            <text x="120" y="190" className="font-sketch text-xs" fill="currentColor">10110</text>
                            
                            {/* Connected dots - expanded network */}
                            <circle cx="30" cy="60" r="2" stroke="currentColor" />
                            <circle cx="50" cy="70" r="2" stroke="currentColor" />
                            <circle cx="45" cy="90" r="2" stroke="currentColor" />
                            <path d="M30 60L50 70L45 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            
                            <circle cx="150" cy="50" r="2" stroke="currentColor" />
                            <circle cx="170" cy="70" r="2" stroke="currentColor" />
                            <circle cx="155" cy="90" r="2" stroke="currentColor" />
                            <path d="M150 50L170 70L155 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            
                            {/* Additional connected networks */}
                            <circle cx="25" cy="130" r="2" stroke="currentColor" />
                            <circle cx="40" cy="150" r="2" stroke="currentColor" />
                            <circle cx="60" cy="140" r="2" stroke="currentColor" />
                            <path d="M25 130L40 150L60 140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            
                            <circle cx="140" cy="130" r="2" stroke="currentColor" />
                            <circle cx="160" cy="150" r="2" stroke="currentColor" />
                            <circle cx="175" cy="135" r="2" stroke="currentColor" />
                            <path d="M140 130L160 150L175 135" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            
                            {/* Credit card outlines */}
                            <rect x="15" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M15 95H45" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M20 105H30" stroke="currentColor" strokeWidth="0.5" />
                            
                            <rect x="155" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M155 95H185" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M160 105H170" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Fraud detection symbols */}
                            <circle cx="45" cy="40" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
                            <path d="M45 32V48" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M41 36L49 44" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M41 44L49 36" stroke="currentColor" strokeWidth="0.5" />
                            
                            <circle cx="155" cy="40" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
                            <path d="M155 32V48" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M151 36L159 44" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M151 44L159 36" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Handwritten annotation lines */}
                            <path d="M35 15C40 10 50 12 45 20" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M165 15C170 10 175 15 170 20" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M30 190C35 185 40 190 35 195" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M170 190C175 185 180 190 175 195" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      
                      {case_.id === "supply-chain" && (
                        <div className="absolute inset-0 opacity-20">
                          {/* Supply chain optimization doodles */}
                          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent" style={{transform: 'rotate(-2deg)'}}>
                            {/* Connected nodes */}
                            <rect x="20" y="40" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="85" y="40" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="150" y="40" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            
                            <rect x="20" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="85" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="150" y="90" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            
                            <rect x="20" y="140" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="85" y="140" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            <rect x="150" y="140" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Connections */}
                            <path d="M50 50H85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M115 50H150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            <path d="M50 100H85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M115 100H150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            <path d="M50 150H85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M115 150H150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            <path d="M35 60C35 70 35 80 35 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M100 60C100 70 100 80 100 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M165 60C165 70 165 80 165 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            <path d="M35 110C35 120 35 130 35 140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M100 110C100 120 100 130 100 140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <path d="M165 110C165 120 165 130 165 140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            {/* Optimization curves */}
                            <path d="M10 180C40 160 60 170 80 150C100 130 120 170 140 150C160 130 180 150 190 130" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Doodle arrows */}
                            <path d="M50 25C60 15 80 15 90 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M90 25L85 20M90 25L85 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <path d="M150 175C140 185 120 185 110 175" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M110 175L115 170M110 175L115 180" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Additional chain elements */}
                            <path d="M5 20C15 15 25 15 30 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M30 25L25 20M30 25L25 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <path d="M170 25C180 15 190 15 195 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M195 25L190 20M195 25L190 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Supply chain icons */}
                            {/* Factory */}
                            <rect x="5" y="60" width="10" height="15" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M5 60L10 55L15 60" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="7" y="70" width="3" height="5" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M5 65H15" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Warehouse */}
                            <rect x="185" y="60" width="10" height="10" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M185 60L190 55L195 60" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M188 70V65H192V70" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Truck */}
                            <rect x="5" y="120" width="10" height="5" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="3" y="125" width="14" height="7" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="6" cy="132" r="2" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="14" cy="132" r="2" stroke="currentColor" strokeWidth="0.5" />
                            
                            <rect x="185" y="120" width="10" height="5" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="183" y="125" width="14" height="7" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="186" cy="132" r="2" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="194" cy="132" r="2" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Box/package */}
                            <rect x="5" y="165" width="8" height="8" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M5 165L9 161L13 165" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M13 165V173" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M9 161V169" stroke="currentColor" strokeWidth="0.5" />
                            
                            <rect x="185" y="165" width="8" height="8" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M185 165L189 161L193 165" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M193 165V173" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M189 161V169" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* Cost reduction indicators */}
                            <path d="M10 195C20 190 30 193 20 198" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M190 195C180 190 170 193 180 198" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      
                      {case_.id === "healthcare-automation" && (
                        <div className="absolute inset-0 opacity-20">
                          {/* Healthcare automation doodles */}
                          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent" style={{transform: 'rotate(1deg)'}}>
                            {/* Medical cross */}
                            <path d="M100 20V60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M80 40H120" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <circle cx="100" cy="40" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            {/* Document flow */}
                            <rect x="30" y="80" width="30" height="40" rx="2" stroke="currentColor" strokeWidth="1" />
                            <path d="M40 90H50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M40 100H50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M40 110H45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <rect x="85" y="80" width="30" height="40" rx="2" stroke="currentColor" strokeWidth="1" />
                            <path d="M95 90H105" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M95 100H105" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M95 110H100" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <rect x="140" y="80" width="30" height="40" rx="2" stroke="currentColor" strokeWidth="1" />
                            <path d="M150 90H160" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M150 100H160" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M150 110H155" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Processing arrows */}
                            <path d="M60 100H85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M85 100L80 95M85 100L80 105" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <path d="M115 100H140" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M140 100L135 95M140 100L135 105" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Healthcare metrics */}
                            <path d="M40 140C50 130 60 150 70 140C80 130 90 150 100 140C110 130 120 150 130 140" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M40 160C50 150 60 170 70 160C80 150 90 170 100 160C110 150 120 170 130 160" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
                            
                            {/* Automation cogs */}
                            <circle cx="170" cy="150" r="15" stroke="currentColor" strokeWidth="1" />
                            <path d="M170 135V165" stroke="currentColor" strokeWidth="1" />
                            <path d="M155 150H185" stroke="currentColor" strokeWidth="1" />
                            <path d="M160 140L180 160" stroke="currentColor" strokeWidth="1" />
                            <path d="M160 160L180 140" stroke="currentColor" strokeWidth="1" />
                            <circle cx="170" cy="150" r="5" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Additional healthcare elements */}
                            {/* Stethoscope */}
                            <circle cx="40" cy="25" r="8" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M40 33C45 38 50 40 55 35" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M55 35C60 30 60 25 58 22" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M58 22C56 19 55 18 60 15" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* Medical Chart */}
                            <rect x="150" y="30" width="20" height="25" rx="1" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M155 40H165" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M155 45H165" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M155 50H160" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M155 35H165" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* Pills/Medicine */}
                            <circle cx="25" cy="55" r="4" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="28" y="51" width="8" height="8" rx="4" stroke="currentColor" strokeWidth="0.5" />
                            
                            <circle cx="175" cy="55" r="4" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="178" y="51" width="8" height="8" rx="4" stroke="currentColor" strokeWidth="0.5" />
                            
                            {/* NLP/text processing */}
                            <path d="M15 125C20 120 25 125 20 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M25 125C30 120 35 125 30 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M35 125C40 120 45 125 40 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            <path d="M155 125C160 120 165 125 160 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M165 125C170 120 175 125 170 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M175 125C180 120 185 125 180 130" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* Handwritten notes */}
                            <path d="M15 25C20 15 30 20 20 30" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M175 20C185 15 190 25 180 25" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M15 180C25 170 35 180 20 190" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M175 180C185 170 195 180 180 190" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      
                      {case_.id === "retail-personalization" && (
                        <div className="absolute inset-0 opacity-20">
                          {/* Retail personalization doodles */}
                          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent" style={{transform: 'rotate(-1deg)'}}>
                            {/* Target audience */}
                            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" />
                            
                            {/* User profiles */}
                            <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="1" />
                            <path d="M40 50C30 60 30 70 40 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M35 80H45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M40 50C50 60 50 70 40 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <circle cx="160" cy="40" r="10" stroke="currentColor" strokeWidth="1" />
                            <path d="M160 50C150 60 150 70 160 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M155 80H165" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M160 50C170 60 170 70 160 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <circle cx="40" cy="150" r="10" stroke="currentColor" strokeWidth="1" />
                            <path d="M40 160C30 170 30 180 40 190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M35 190H45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M40 160C50 170 50 180 40 190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            <circle cx="160" cy="150" r="10" stroke="currentColor" strokeWidth="1" />
                            <path d="M160 160C150 170 150 180 160 190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M155 190H165" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M160 160C170 170 170 180 160 190" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Connections */}
                            <path d="M50 40L90 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            <path d="M150 40L110 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            <path d="M50 150L90 110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            <path d="M150 150L110 110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                            
                            {/* Shopping cart */}
                            <path d="M20 110H30L35 120H45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <circle cx="35" cy="125" r="3" stroke="currentColor" strokeWidth="1" />
                            <circle cx="45" cy="125" r="3" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Additional shopping cart on other side */}
                            <path d="M155 110H165L170 120H180" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <circle cx="165" cy="125" r="3" stroke="currentColor" strokeWidth="1" />
                            <circle cx="175" cy="125" r="3" stroke="currentColor" strokeWidth="1" />
                            
                            {/* Growth graph */}
                            <path d="M140 120L150 110L160 115L170 100L180 90" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M180 90L175 90M180 90L180 95" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            
                            {/* Additional e-commerce/personalization elements */}
                            {/* Product items */}
                            <rect x="15" y="20" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="15" y="35" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M17 25H23" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M17 27H21" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            <rect x="175" y="20" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="0.5" />
                            <rect x="175" y="35" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M177 25H183" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M177 27H181" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* Customer journey path */}
                            <path d="M15 65C25 60 35 70 45 65C55 60 65 70 75 65" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="2 1" />
                            <path d="M125 65C135 60 145 70 155 65C165 60 175 70 185 65" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeDasharray="2 1" />
                            
                            {/* AI recommendation connections */}
                            <path d="M60 95C65 90 70 95 65 100" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M140 95C135 90 130 95 135 100" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M60 105C65 100 70 105 65 110" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M140 105C135 100 130 105 135 110" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* A/B Testing elements */}
                            <path d="M15 140L25 150L15 160" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M25 140L15 150L25 160" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            <path d="M185 140L175 150L185 160" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M175 140L185 150L175 160" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            {/* Conversion rate indicators */}
                            <path d="M85 25L95 15L105 25" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M95 15L95 35" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            
                            <path d="M95 165L85 175L95 185" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                            <path d="M95 185L105 175L95 165" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Content stays on top with increased contrast */}
                      <div className="relative z-10">
                        <div className="text-5xl font-light text-foreground mb-2">{case_.metric}</div>
                        <div className="text-sm text-muted-foreground font-sketch mb-4">{case_.metricLabel}</div>
                        <div className="text-xs text-muted-foreground border-t border-border pt-4">
                          <div className="font-medium text-foreground">{case_.industry}</div>
                          <div>{case_.timeline} timeline</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-light text-foreground mb-2">{case_.client}</h2>
                      <div className="text-sm text-muted-foreground">{case_.industry} • {case_.timeline}</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{case_.challenge}</p>
                      </div>
                      
                      <div>
                        <h2 id={`case-title-${index}`} className="text-xl font-medium text-accent mb-2 uppercase tracking-wide">{case_.client} - {case_.industry}</h2>
                        <h3 className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">My Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">{case_.approach}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">The Results</h3>
                        <p className="text-foreground font-medium leading-relaxed">{case_.results}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {case_.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-wireframe-light text-foreground px-2 py-1 border border-wireframe-medium" aria-label={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-secondary p-6 border-l-4 border-accent">
                      <blockquote className="text-muted-foreground italic mb-3" aria-label="Client testimonial">
                        "{case_.testimonial}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-medium text-foreground">— {case_.testimonialAuthor}</div>
                        <div className="text-muted-foreground">{case_.client}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-border">
                      <Link 
                        to={`/case-studies/${case_.id}`} 
                        className="text-accent hover:text-foreground transition-colors font-medium"
                        aria-label={`View detailed case study for ${case_.client}`}
                      >
                        View detailed case study →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-secondary p-12 border border-border">
            <section aria-labelledby="cta-heading" className="text-center mt-16 bg-secondary p-12 border border-border">
              <h2 id="cta-heading" className="text-2xl font-light text-foreground mb-4">
                Ready for Your Success Story? <span className="font-sketch text-sketch">(let's make it happen)</span>
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every case study started with a conversation. I only take 5 clients at a time to ensure results like these are possible for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-3 hover:bg-accent transition-colors" aria-label="Book Strategy Call">
                  Book Strategy Call
                </Link>
                <Link to="/case-studies" className="border border-border bg-background text-foreground px-8 py-3 hover:bg-secondary transition-colors" aria-label="View Detailed Case Studies">
                  View Detailed Case Studies
                </Link>
              </div>
            </section>
          </div>

          {/* Results annotation */}
          <div className="text-center mt-8">
            <div className="text-center mt-8">
              <p className="font-sketch text-sm text-sketch" aria-label="Results annotation">
                ↑ All results verified by independent third-party audits
              </p>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default CaseStudies;