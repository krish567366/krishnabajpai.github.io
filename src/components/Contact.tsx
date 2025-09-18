import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-6">
              Ready to{" "}
              <span className="font-sketch font-bold relative">
                Get Started?
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I only take 5 clients at a time to ensure exceptional results. 
              Let's discuss how AI can transform your business.
            </p>
            
            {/* Scarcity note */}
            <div className="inline-block bg-secondary px-6 py-3 border border-border">
              <p className="text-sm text-foreground font-sketch">
                → Currently booking for 2025
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-foreground mb-6">Start Your Project</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Acme Corp" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@acmecorp.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What challenge are you trying to solve?
                  </label>
                  <Textarea 
                    placeholder="We're looking to predict customer churn and increase retention..."
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected budget range
                  </label>
                  <select className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md">
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>
                
                <Button size="lg" className="w-full">
                  Send Project Details
                </Button>
              </form>
            </div>

            {/* Quick Contact & Social Proof */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-6">Quick Connect</h3>
                
                <div className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    📧 krishna@krishnabajpai.me
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    💼 LinkedIn Profile
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    📅 Book 30min Strategy Call
                  </Button>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-secondary p-6 border-l-4 border-accent">
                <blockquote className="text-muted-foreground italic mb-4">
                  "The quantum optimization solution saved us $1.2M in the first year. 
                  What would have taken our team 18 months was delivered in 3 months."
                </blockquote>
                <div className="text-sm">
                  <div className="font-medium text-foreground">— VP of Operations</div>
                  <div className="text-muted-foreground">Fortune 500 Manufacturing</div>
                </div>
              </div>

              {/* Process note */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">What happens next?</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">1</div>
                    <div>I'll review your project within 24 hours</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">2</div>
                    <div>We'll schedule a 30min discovery call</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">3</div>
                    <div>I'll prepare a custom proposal & timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;