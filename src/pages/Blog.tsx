import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const posts = [
    {
      title: 'Quantum Computing Meets Machine Learning',
      excerpt: 'Exploring the intersection of quantum algorithms and neural networks for optimization.',
      date: '2024-01-15',
      tags: ['Quantum Computing', 'ML', 'Research'],
      external: true,
      url: 'https://linkedin.com/pulse/quantum-computing-meets-ml-krishna-bajpai'
    },
    {
      title: 'The Future of Autonomous Agent Systems',
      excerpt: 'How swarm intelligence is revolutionizing distributed AI systems.',
      date: '2024-01-08',
      tags: ['AI', 'Autonomous Systems', 'Swarm Intelligence'],
      external: true,
      url: 'https://linkedin.com/pulse/future-autonomous-agents-krishna-bajpai'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Blog & Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on quantum computing, AI research, and optimization techniques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Newsletter Highlight */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Weekly AI Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get weekly insights on quantum AI, optimization algorithms, and cutting-edge research.
              </p>
              <Button asChild>
                <a href="https://linkedin.com/newsletters/your-newsletter" target="_blank" rel="noopener noreferrer">
                  Subscribe on LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Blog Posts */}
          <div className="grid gap-6">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        {post.external && <Badge variant="outline">LinkedIn</Badge>}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="ghost" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}