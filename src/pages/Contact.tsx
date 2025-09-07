import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "../components/layout/Layout";

const Contact = () => {
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
    <Layout>
    <div className="min-h-screen bg-background font-body pt-16">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-foreground mb-6">
              Let's Work{" "}
              <span className="font-sketch font-bold relative">
                Together
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I only take 5 clients at a time to ensure exceptional results. Currently booking 
              for Q1 2025. Let's discuss how AI can transform your business.
            </p>
            
            {/* Scarcity note */}
            <div className="inline-block bg-secondary px-8 py-4 border border-border">
              <p className="text-sm text-foreground font-sketch">
                → Currently available: 2 spots for Q1 2025
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-foreground mb-6">Start Your Project</h2>
                <p className="text-muted-foreground mb-8">
                  Every project begins with a free 30-minute strategy call. I'll review your 
                  challenges and determine if we're a good fit before any commitment.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input placeholder="John Smith" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <Input placeholder="Acme Corp" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@acmecorp.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What business challenge are you trying to solve? *
                  </label>
                  <Textarea 
                    placeholder="We're looking to predict customer churn and increase retention. Currently losing 15% of customers monthly and manual analysis isn't working..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What type of data do you have?
                  </label>
                  <Textarea 
                    placeholder="Customer transaction history, website behavior, support tickets, demographics..."
                    rows={2}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Expected budget range
                    </label>
                    <select className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md">
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
                    <select className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md">
                      <option>ASAP (rush project)</option>
                      <option>2-3 months</option>
                      <option>3-6 months</option>
                      <option>6+ months</option>
                    </select>
                  </div>
                </div>
                
                <Button size="lg" className="w-full text-lg py-6">
                  Send Project Details & Book Strategy Call
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * I'll respond within 24 hours with next steps
                </p>
              </form>
              <div className="bg-secondary p-8 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Location & Availability{" "}
                <span className="font-sketch text-sketch">(where I work)</span>
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
                  <span className="text-foreground">2 spots for Q1 2025</span>
                </div>
              </div>
            </div> 
              <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Project Requirements{" "}
                <span className="font-sketch text-sketch">(to work together)</span>
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
            </div>

            {/* Contact Info & Social Proof */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div>
                <h3 className="text-2xl font-light text-foreground mb-6">Quick Connect</h3>
                
                <div className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    📧 krishna@krishnabajpai.me
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    💼 LinkedIn: /in/krishnabajpai
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    📅 Book 30min Strategy Call
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://wa.me/+919118425114?text=I'm%20interested%20in%20discussing%20the%20machine-learning%20task" target="_blank" rel="noopener noreferrer">
                      📱 WhatsApp: +91 9118425114
                    </a>
                  </Button>
                </div>
              </div>

              {/* Featured Testimonial */}
              <div className="bg-secondary p-8 border-l-4 border-accent">
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "Krishna's quantum optimization solution saved us $1.2M in the first year. 
                  What would have taken our team 18 months was delivered in 3 months. 
                  Incredible technical depth and business acumen."
                </blockquote>
                <div className="text-sm">
                  <div className="font-medium text-foreground">— Head of Supply Chain</div>
                  <div className="text-muted-foreground">Fortune 500 Manufacturing Company</div>
                </div>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h4 className="text-xl font-medium text-foreground">What happens next?</h4>
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
                <h4 className="text-xl font-medium text-foreground mb-6">Common Questions</h4>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4">
                      <h5 className="font-medium text-foreground mb-2 text-sm">{faq.question}</h5>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;