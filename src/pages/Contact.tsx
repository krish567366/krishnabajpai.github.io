import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in quantum AI research, collaboration opportunities, or just want to chat about technology? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Whether you're interested in quantum computing research, AI optimization, 
                  or potential collaboration opportunities, I'm always excited to connect 
                  with fellow researchers and enthusiasts.
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">your.email@example.com</div>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/krish567366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground">@krish567366</div>
                    </div>
                  </a>
                  <a 
                    href="https://linkedin.com/in/krishnabajpai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Krishna Bajpai</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full">
                  <a href="mailto:your.email@example.com">
                    <Send className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://linkedin.com/newsletters/your-newsletter" target="_blank" rel="noopener noreferrer">
                    Subscribe to Newsletter
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://github.com/krish567366" target="_blank" rel="noopener noreferrer">
                    Follow on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Areas of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quantum machine learning research</li>
                  <li>• Optimization algorithm development</li>
                  <li>• Autonomous systems collaboration</li>
                  <li>• Open source contributions</li>
                  <li>• Speaking opportunities</li>
                  <li>• Academic partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}