import { Helmet } from "react-helmet";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const ConsortiumProcess = () => {
  const steps = [
    {
      title: "Section I: Application Submission",
      description: "All applicants must submit a comprehensive information package containing required documentation and credentials.",
      details: [
        "Full legal entity documentation (Certificate of Incorporation, Tax ID)",
        "Verified portfolio valuation statements",
        "Proven investment track record (minimum 5 years)",
        "Overview of technical and analytical infrastructure",
        "Minimum of three industry references from verifiable entities"
      ]
    },
    {
      title: "Section II: Technical Evaluation",
      description: "A quantum-enhanced ML assessment to evaluate portfolio performance and technical readiness.",
      details: [
        "Quantitative performance metrics and efficiency analysis",
        "Market position and stability validation",
        "Technical compatibility and infrastructure alignment",
        "Risk exposure and volatility assessment",
        "Historical and projected growth trajectory verification"
      ]
    },
    {
      title: "Section III: Consortium Review",
      description: "Peer-based evaluation conducted by existing consortium members and the review council.",
      details: [
        "Alignment with consortium mission and strategy",
        "Contribution potential to the network and ecosystem",
        "Verification of market and professional reputation",
        "Competitive position and specialization analysis",
        "Strategic compatibility with ongoing initiatives"
      ]
    },
    {
      title: "Section IV: Final Determination",
      description: "The Governing Council issues a conclusive membership ruling based on comprehensive evaluations.",
      details: [
        "Official membership tier classification (Strategic, Associate, or Observer)",
        "Privilege and access level assignment",
        "Resource commitment outline",
        "Integration and compliance verification",
        "Non-negotiable final decision by Governing Council"
      ]
    }
  ];

  const benefits = [
    {
      title: "Analytical Access",
      description: "Access to proprietary quantum-enhanced ML analytical systems for market forecasting, investment simulation, and portfolio optimization.",
      features: [
        "Advanced market forecasting algorithms",
        "Real-time investment simulations",
        "Quantum-enhanced portfolio optimization",
        "Predictive analytics dashboard"
      ]
    },
    {
      title: "Network Privileges",
      description: "Exclusive participation in high-level strategic sessions and collaborative opportunities within the consortium.",
      features: [
        "Closed strategy sessions and briefings",
        "Co-development rights in select initiatives",
        "Early access to investment opportunities",
        "Direct network intelligence access"
      ]
    },
    {
      title: "Recognition & Representation",
      description: "Official recognition as a consortium member with authorized representation rights and branding privileges.",
      features: [
        "Official consortium registry listing",
        "Authorized branding usage rights",
        "High-level industry representation",
        "Exclusive event participation"
      ]
    }
  ];

  const regulations = [
    {
      title: "Confidentiality & Data Protection",
      rules: [
        "Strict confidentiality of consortium data and communications",
        "Prohibition of unauthorized disclosure or distribution",
        "Mandatory data protection protocols",
        "Legal consequences for breaches"
      ]
    },
    {
      title: "Ethical Conduct & Compliance",
      rules: [
        "Maintenance of integrity and transparency",
        "Prohibition of fraud or misrepresentation",
        "Compliance with consortium standards",
        "Regular conduct assessments"
      ]
    },
    {
      title: "Membership Terms",
      rules: [
        "Non-transferable membership status",
        "Adherence to governance protocols",
        "Regular compliance reviews",
        "Binding arbitration agreement"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Official Membership Process & Governance Guidelines | Real Estate Consortium</title>
        <meta name="description" content="Comprehensive guidelines for the Real Estate Consortium membership process, including evaluation criteria, benefits, and governance protocols. Exclusive invitation-only membership with strict compliance requirements." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://krishnabajpai.me/consortium-process" />
      </Helmet>

      <Layout>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Official Membership Process Guidelines
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The following sections outline the mandatory evaluation procedures and requirements for consortium membership consideration.
              </p>
              <Link to="/consortium-application">
                <Button size="lg" className="mb-4">
                  Initiate Application Process
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Required evaluation period: 14-21 business days
              </p>
            </div>

            {/* Process Steps */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[39px] top-[80px] bottom-[-40px] w-px bg-border"></div>
                    )}
                    <div className="flex gap-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="pt-4">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Membership Benefits & Privileges
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Rules & Regulations */}
            <div className="max-w-4xl mx-auto mb-20 bg-muted/50 border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Rules & Regulations
              </h2>
              <div className="space-y-8">
                {regulations.map((section, index) => (
                  <div key={index} className="relative">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{section.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {section.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Application Submission Notice
              </h2>
              <p className="text-muted-foreground mb-8">
                Qualified organizations meeting the preliminary requirements may proceed with the formal application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consortium-application">
                  <Button size="lg" className="w-full sm:w-auto">
                    Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/real-estate-consortium">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Review Requirements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConsortiumProcess;