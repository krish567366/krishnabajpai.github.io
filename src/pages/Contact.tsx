import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Use AJAX submission to prevent page redirect
      const response = await fetch("https://formspree.io/f/mzzaygeb", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
          // Removing Content-Type header as it causes issues with FormData
        },
      });
      
      if (response.ok) {
        console.log("Form submitted successfully");
        setFormStatus("success");
        form.reset();
      } else {
        console.error("Form submission failed:", await response.text());
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };
  
  const faqs = [
    {
      question: "How do you determine project pricing?",
      answer: "Pricing depends on project complexity, timeline, and expected business impact. Most projects range from $15k-$150k. I provide detailed quotes after our discovery call."
    },
    {
      question: "Do you work with startups or just enterprises?",
      answer: "I work with both! About 60% enterprise, 40% well-funded startups. The key is having a real business problem that AI can solve profitably."
    },
    {
      question: "What's included in your consulting?",
      answer: "Complete end-to-end delivery: strategy, development, deployment, documentation, team training, and 3 months of optimization support."
    },
    {
      question: "How long do projects typically take?",
      answer: "Most projects: 2-6 months. Simple automation: 1-2 months. Complex quantum optimization: 6-8 months. I always provide realistic timelines upfront."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags & Structured Data */}
      <Helmet>
        <title>Contact | AI & ML Consulting | Krishna Bajpai</title>
        <meta name="description" content="Contact Krishna Bajpai for AI, ML, Quantum, Automation, Predictive Modeling, and more. Book a strategy call to discuss your business challenges and project needs." />
        <meta name="keywords" content="Contact, AI consulting, ML consulting, Quantum optimization, Predictive analytics, Healthcare AI, Fintech AI, Supply chain AI, MLOps, Automation, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/contact" />
        <meta property="og:title" content="Contact | AI & ML Consulting | Krishna Bajpai" />
        <meta property="og:description" content="Contact Krishna Bajpai for AI, ML, Quantum, Automation, Predictive Modeling, and more. Book a strategy call to discuss your business challenges and project needs." />
        <meta property="og:url" content="https://krishnabajpai.me/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | AI & ML Consulting | Krishna Bajpai" />
        <meta name="twitter:description" content="Contact Krishna Bajpai for AI, ML, Quantum, Automation, Predictive Modeling, and more. Book a strategy call to discuss your business challenges and project needs." />
        <link rel="alternate" href="https://krishnabajpai.me/contact" hrefLang="en" />
        {/* Structured Data: ContactPage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Krishna Bajpai",
            "url": "https://krishnabajpai.me/contact",
            "description": "Contact Krishna Bajpai for AI, ML, Quantum, Automation, Predictive Modeling, and more.",
            "contactOption": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9118425114",
                "contactType": "customer service",
                "email": "krishna@krishnabajpai.me"
              }
            ]
          }
        `}</script>
      </Helmet>
      <Layout>
        <main className="min-h-screen bg-background font-body pt-16" aria-label="Contact Krishna Bajpai">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <header>
              <h1 className="text-5xl font-light text-foreground mb-6">
                Contact Krishna Bajpai
                <span className="font-sketch font-bold relative">
                  &nbsp;Let's Work Together
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                I only take 5 clients at a time to ensure exceptional results. Currently booking for 2025.<br />
                <strong>Let's discuss how AI can transform your business.</strong>
              </p>
            </header>
            
            {/* Scarcity note */}
            <div className="inline-block bg-secondary px-8 py-4 border border-border">
              <p className="text-sm text-foreground font-sketch" aria-live="polite">
                → Currently available: <strong>2 spots for 2025</strong>
              </p>
        </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
               <section className="space-y-8" aria-labelledby="contact-form-heading">
              <div>
                <h2 id="contact-form-heading" className="text-3xl font-light text-foreground mb-6">Start Your Project</h2>
                <p className="text-muted-foreground mb-8">
                  Every project begins with a <strong>free 30-minute strategy call</strong>. I'll review your challenges and determine if we're a good fit before any commitment.
                </p>
              </div>
              
              {formStatus === "success" && (
                <Alert className="bg-green-50 border-green-200 mb-6">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Message sent successfully!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Thank you for reaching out. I'll review your project details and respond within 24 hours.
                  </AlertDescription>
                </Alert>
              )}
              
              {formStatus === "error" && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Something went wrong</AlertTitle>
                  <AlertDescription>
                    There was a problem sending your message. Please try again or contact me directly at krishna@krishnabajpai.me
                  </AlertDescription>
                </Alert>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span aria-label="required">*</span>
                    </label>
                    <Input 
                      name="name" 
                      placeholder="John Smith" 
                      required 
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company <span aria-label="required">*</span>
                    </label>
                    <Input 
                      name="company" 
                      placeholder="Acme Corp" 
                      required 
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      aria-required="true"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email <span aria-label="required">*</span>
                    </label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@acmecorp.com" 
                      required 
                      disabled={formStatus === "submitting" || formStatus === "success"}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input 
                      name="phone" 
                      placeholder="+1 (555) 123-4567" 
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What business challenge are you trying to solve? <span aria-label="required">*</span>
                  </label>
                  <Textarea 
                    name="business_challenge"
                    placeholder="We're looking to predict customer churn and increase retention. Currently losing 15% of customers monthly and manual analysis isn't working..."
                    rows={4}
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    aria-required="true"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What type of data do you have?
                  </label>
                  <Textarea 
                    name="data_type"
                    placeholder="Customer transaction history, website behavior, support tickets, demographics..."
                    rows={2}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Expected budget range
                    </label>
                    <select 
                      name="budget_range" 
                      className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    >
                      <option>$15k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k - $150k</option>
                      <option>$150k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred timeline
                    </label>
                    <select 
                      name="timeline" 
                      className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    >
                      <option>ASAP (rush project)</option>
                      <option>2-3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  aria-label="Send Project Details & Book Strategy Call"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Project Details & Book Strategy Call"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * I'll respond within 24 hours with next steps
                </p>
              </form>
              <div className="bg-secondary p-8 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4" id="location-availability">
                Location & Availability <span className="font-sketch text-sketch">(where I work)</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Based in:</span>
                  <span className="text-foreground">NCR, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Work with:</span>
                  <span className="text-foreground">Global clients (remote/on-site)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time zone:</span>
                  <span className="text-foreground">IST (flexible for meetings)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current availability:</span>
                  <span className="text-foreground">2 spots for 2025</span>
                </div>
              </div>
            </div> 
              <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-medium text-foreground mb-4" id="project-requirements">
                Project Requirements <span className="font-sketch text-sketch">(to work together)</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Clear business problem with measurable success criteria</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Access to relevant data (or willingness to collect it)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Dedicated team member as primary project contact</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Realistic timeline and budget expectations</span>
                </div>
              </div>
            </div>
            </section>

            {/* Contact Info & Social Proof */}
            <div className="space-y-8">
              <section aria-labelledby="quick-connect-heading">
                <h3 id="quick-connect-heading" className="text-2xl font-light text-foreground mb-6">Quick Connect</h3>
                <div className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start" aria-label="Email Krishna Bajpai">
                    📧 <span className="sr-only">Email:</span> krishna@krishnabajpai.me
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" aria-label="LinkedIn Krishna Bajpai">
                    💼 <span className="sr-only">LinkedIn:</span> /in/bajpai-krishna
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild aria-label="Book 30min Strategy Call">
                    <a href="https://calendly.com/krishna-krishnabajpai" target="_blank" rel="noopener noreferrer">
                      📅 Book 30min Strategy Call
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild aria-label="WhatsApp Krishna Bajpai">
                    <a href="https://wa.me/+919118425114?text=I'm%20interested%20in%20discussing%20the%20machine-learning%20task" target="_blank" rel="noopener noreferrer">
                      📱 WhatsApp: +91 Expert
                    </a>
                  </Button>
                </div>
              </section>

              {/* Featured Testimonial */}
              <div className="bg-secondary p-8 border-l-4 border-accent">
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed" aria-label="Featured testimonial">
                  "Krishna's quantum optimization solution saved us $1.2M in the first year. What would have taken our team 18 months was delivered in 3 months. Incredible technical depth and business acumen."
                </blockquote>
                <div className="text-sm">
                  <div className="font-medium text-foreground">— Head of Supply Chain</div>
                  <div className="text-muted-foreground">Fortune 500 Manufacturing Company</div>
                </div>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h4 className="text-xl font-medium text-foreground" id="process-heading">What happens next?</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">1</div>
                    <div>
                      <div className="font-medium text-foreground">Project Review (24 hours)</div>
                      <div className="text-sm text-muted-foreground">I'll review your submission and send initial questions or feedback</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">2</div>
                    <div>
                      <div className="font-medium text-foreground">Strategy Call (30 minutes)</div>
                      <div className="text-sm text-muted-foreground">Free call to discuss your needs, challenges, and potential solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">3</div>
                    <div>
                      <div className="font-medium text-foreground">Custom Proposal (3-5 days)</div>
                      <div className="text-sm text-muted-foreground">Detailed proposal with timeline, deliverables, and investment</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">4</div>
                    <div>
                      <div className="font-medium text-foreground">Project Kickoff</div>
                      <div className="text-sm text-muted-foreground">If we're a good fit, we start with discovery and data audit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h4 className="text-xl font-medium text-foreground mb-6" id="faq-heading">Common Questions</h4>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4" aria-labelledby={`faq-q${index}`}> 
                      <h5 id={`faq-q${index}`} className="font-medium text-foreground mb-2 text-sm">{faq.question}</h5>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </main>
      </Layout>
    </>
  );
};

export default Contact;