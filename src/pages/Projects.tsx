import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Package, Star, Download, Calendar, Code2, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PyPIProject {
  name: string;
  version: string;
  summary: string;
  author: string;
  description: string;
  project_urls?: {
    [key: string]: string;
  };
  keywords?: string[];
  classifiers?: string[];
}

export default function Projects() {
  const [pypiProjects, setPypiProjects] = useState<PyPIProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured research projects (manually curated)
  const researchProjects = [
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Implementation of quantum-enhanced neural network architectures for optimization problems.',
      tags: ['Quantum Computing', 'Neural Networks', 'Python', 'Qiskit'],
      status: 'Active',
      category: 'research',
      icon: Brain,
      github: 'https://github.com/krish567366/quantum-neural-networks',
      demo: null,
      featured: true
    },
    {
      id: 'autonomous-swarm',
      title: 'Autonomous Swarm Intelligence',
      description: 'Multi-agent system for distributed optimization using swarm intelligence algorithms.',
      tags: ['Swarm Intelligence', 'Multi-Agent', 'Optimization', 'Python'],
      status: 'In Progress',
      category: 'research',
      icon: Zap,
      github: 'https://github.com/krish567366/autonomous-swarm',
      demo: null,
      featured: true
    },
    {
      id: 'control-optimization',
      title: 'Advanced Control Systems',
      description: 'Quantum-inspired algorithms for non-linear control system optimization.',
      tags: ['Control Theory', 'Optimization', 'MATLAB', 'Python'],
      status: 'Published',
      category: 'research',
      icon: Code2,
      github: 'https://github.com/krish567366/control-optimization',
      demo: null,
      featured: false
    }
  ];

  // Simulate PyPI API call (replace with actual API when ready)
  useEffect(() => {
    const fetchPyPIProjects = async () => {
      try {
        // This would be the actual PyPI API call
        // For now, using mock data
        const mockProjects: PyPIProject[] = [
          {
            name: 'quantum-optimizer',
            version: '1.2.3',
            summary: 'Quantum-enhanced optimization algorithms for machine learning',
            author: 'Krishna Bajpai',
            description: 'A comprehensive library for quantum optimization techniques.',
            project_urls: {
              'Homepage': 'https://github.com/krish567366/quantum-optimizer',
              'Documentation': 'https://quantum-optimizer.readthedocs.io'
            },
            keywords: ['quantum', 'optimization', 'machine-learning'],
            classifiers: ['Development Status :: 4 - Beta', 'Programming Language :: Python :: 3']
          },
          {
            name: 'neural-swarm',
            version: '0.8.1',
            summary: 'Swarm intelligence algorithms with neural network integration',
            author: 'Krishna Bajpai',
            description: 'Combining swarm intelligence with neural networks for optimization.',
            project_urls: {
              'Homepage': 'https://github.com/krish567366/neural-swarm'
            },
            keywords: ['swarm', 'neural-networks', 'optimization'],
            classifiers: ['Development Status :: 3 - Alpha', 'Programming Language :: Python :: 3']
          }
        ];
        
        setPypiProjects(mockProjects);
      } catch (error) {
        console.error('Error fetching PyPI projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPyPIProjects();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-500/10 text-green-700 dark:text-green-300';
      case 'published': return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
      case 'in progress': return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
      default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring quantum computing, AI optimization, and autonomous systems through 
            research projects and open-source contributions.
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>

          {/* Featured Projects */}
          <TabsContent value="featured" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects
                .filter(project => project.featured)
                .map((project) => (
                  <Card key={project.id} className="group hover:shadow-lg transition-smooth border-primary/10">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <project.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/projects/${project.id}`}>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* All Research Projects */}
          <TabsContent value="research" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/projects/${project.id}`}>
                          Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PyPI Packages */}
          <TabsContent value="packages" className="space-y-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading PyPI packages...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pypiProjects.map((pkg) => (
                  <Card key={pkg.name} className="group hover:shadow-lg transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-accent/10 p-2 rounded-lg">
                            <Package className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{pkg.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">v{pkg.version}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <a 
                              href={`https://pypi.org/project/${pkg.name}/`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Download className="h-4 w-4" />
                            </a>
                          </Button>
                          {pkg.project_urls?.Homepage && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={pkg.project_urls.Homepage} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{pkg.summary}</p>
                      {pkg.keywords && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pkg.keywords.slice(0, 4).map((keyword) => (
                            <Badge key={keyword} variant="secondary">{keyword}</Badge>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a 
                            href={`https://pypi.org/project/${pkg.name}/`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Install Package
                          </a>
                        </Button>
                        {pkg.project_urls?.Documentation && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={pkg.project_urls.Documentation} target="_blank" rel="noopener noreferrer">
                              Docs
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {!loading && pypiProjects.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No packages found</h3>
                <p className="text-muted-foreground">
                  PyPI packages will appear here once published.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, open-source contributions, 
            or potential collaborations in quantum AI and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/krish567366" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}