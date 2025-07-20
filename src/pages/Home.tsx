import { ArrowRight, Brain, Zap, Code2, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 hero-gradient quantum-particles">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Krishna Bajpai</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-muted-foreground">
              Quantum AI Researcher, Optimization Architect
            </p>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Exploring the edge of Intelligence, Quantum, and Control
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="quantum-glow">
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="neural-gradient border-primary/20">
              <CardContent className="p-6 text-center">
                <Brain className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">AI Research</h3>
                <p className="text-sm text-muted-foreground">
                  Quantum machine learning & autonomous agents
                </p>
              </CardContent>
            </Card>
            
            <Card className="neural-gradient border-primary/20">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms & control systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="neural-gradient border-primary/20">
              <CardContent className="p-6 text-center">
                <Code2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Python packages & research tools
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-lg transition-smooth border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quantum Neural Networks</h3>
                <p className="text-muted-foreground mb-4">
                  Research on quantum-enhanced machine learning algorithms for optimization problems.
                </p>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/projects/quantum-neural-networks">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-smooth border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Weekly insights on quantum computing, AI research, and optimization techniques.
                </p>
                <Button asChild variant="ghost" size="sm">
                  <a 
                    href="https://linkedin.com/newsletters/your-newsletter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Subscribe <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Explore the Future Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in quantum AI, optimization research, or collaboration? 
            Let's connect and discuss the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">Read Latest Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}