import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Users, Code2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProjectDetailData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: string;
  startDate: string;
  endDate?: string;
  github?: string;
  demo?: string;
  documentation?: string;
  collaborators?: string[];
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  futureWork: string[];
  images?: string[];
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  // Project data (in a real app, this would come from an API or CMS)
  const projectsData: { [key: string]: ProjectDetailData } = {
    'quantum-neural-networks': {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      subtitle: 'Quantum-Enhanced Machine Learning Architectures',
      description: 'Implementation of quantum-enhanced neural network architectures for optimization problems.',
      longDescription: `This research project explores the intersection of quantum computing and neural networks, 
        investigating how quantum principles can enhance traditional machine learning algorithms. The project 
        focuses on developing quantum neural network architectures that can solve complex optimization problems 
        more efficiently than classical approaches.

        The research involves implementing quantum circuits that can be integrated with classical neural networks, 
        creating hybrid systems that leverage the best of both quantum and classical computing paradigms. 
        Special attention is given to variational quantum algorithms and their application in machine learning contexts.`,
      tags: ['Quantum Computing', 'Neural Networks', 'Machine Learning', 'Optimization'],
      status: 'Active',
      startDate: '2023-08-01',
      github: 'https://github.com/krish567366/quantum-neural-networks',
      documentation: 'https://quantum-neural-networks.readthedocs.io',
      technologies: ['Python', 'Qiskit', 'PyTorch', 'NumPy', 'Cirq'],
      challenges: [
        'Quantum noise and decoherence in NISQ devices',
        'Scaling quantum circuits for larger problem sizes',
        'Integrating quantum and classical computation efficiently',
        'Optimizing quantum circuit depth and gate count'
      ],
      outcomes: [
        'Developed hybrid quantum-classical neural network architecture',
        'Achieved 15% improvement in optimization convergence speed',
        'Published preliminary results in arXiv preprint',
        'Created open-source library for quantum machine learning'
      ],
      futureWork: [
        'Implement fault-tolerant quantum error correction',
        'Explore quantum advantage in specific problem domains',
        'Develop quantum neural network training algorithms',
        'Investigate quantum convolutional neural networks'
      ]
    },
    'autonomous-swarm': {
      id: 'autonomous-swarm',
      title: 'Autonomous Swarm Intelligence',
      subtitle: 'Multi-Agent Systems for Distributed Optimization',
      description: 'Multi-agent system for distributed optimization using swarm intelligence algorithms.',
      longDescription: `This project develops autonomous multi-agent systems that use swarm intelligence 
        principles to solve complex distributed optimization problems. The research focuses on creating 
        algorithms that allow multiple autonomous agents to collaborate and coordinate their actions 
        without centralized control.

        The system implements various swarm intelligence algorithms including particle swarm optimization, 
        ant colony optimization, and artificial bee colony algorithms. These are adapted for multi-agent 
        scenarios where agents must make decisions based on local information while contributing to 
        global optimization objectives.`,
      tags: ['Swarm Intelligence', 'Multi-Agent Systems', 'Distributed Computing', 'Optimization'],
      status: 'In Progress',
      startDate: '2023-10-15',
      github: 'https://github.com/krish567366/autonomous-swarm',
      technologies: ['Python', 'Mesa', 'NetworkX', 'SciPy', 'Matplotlib'],
      challenges: [
        'Coordinating agents without central communication',
        'Balancing exploration and exploitation in swarm behavior',
        'Handling dynamic environments and changing objectives',
        'Ensuring swarm stability and convergence'
      ],
      outcomes: [
        'Implemented scalable multi-agent framework',
        'Demonstrated emergent optimization behavior',
        'Created visualization tools for swarm dynamics',
        'Achieved distributed optimization in complex landscapes'
      ],
      futureWork: [
        'Implement learning capabilities in individual agents',
        'Explore quantum-inspired swarm algorithms',
        'Add real-time adaptation to environmental changes',
        'Develop swarm intelligence for robotics applications'
      ]
    },
    'control-optimization': {
      id: 'control-optimization',
      title: 'Advanced Control Systems',
      subtitle: 'Quantum-Inspired Control Optimization',
      description: 'Quantum-inspired algorithms for non-linear control system optimization.',
      longDescription: `This research project investigates the application of quantum-inspired algorithms 
        to non-linear control system optimization. The work focuses on developing novel control strategies 
        that can handle complex, non-linear dynamic systems with multiple objectives and constraints.

        The project explores how quantum computing principles, particularly quantum annealing and 
        variational quantum algorithms, can be adapted for control theory problems. This includes 
        optimal control, model predictive control, and robust control design for uncertain systems.`,
      tags: ['Control Theory', 'Optimization', 'Quantum Algorithms', 'System Design'],
      status: 'Published',
      startDate: '2023-03-01',
      endDate: '2023-11-30',
      github: 'https://github.com/krish567366/control-optimization',
      documentation: 'https://control-optimization.readthedocs.io',
      technologies: ['MATLAB', 'Python', 'Control Toolbox', 'Simulink', 'CVX'],
      challenges: [
        'Handling non-convex optimization landscapes',
        'Real-time control system constraints',
        'Robustness to system uncertainties',
        'Multi-objective optimization trade-offs'
      ],
      outcomes: [
        'Developed quantum-inspired control optimization framework',
        'Improved control performance by 25% in simulation',
        'Published paper in IEEE Control Systems Conference',
        'Created MATLAB toolbox for practitioners'
      ],
      futureWork: [
        'Implement on real-time control hardware',
        'Explore quantum control for quantum systems',
        'Develop adaptive control using quantum machine learning',
        'Investigate distributed control architectures'
      ]
    }
  };

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.subtitle}</p>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(project.startDate).toLocaleDateString()} 
                {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString()}`}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Technical Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Key Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Future Work */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Future Directions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.futureWork.map((work, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{work}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
                {project.documentation && (
                  <a 
                    href={project.documentation} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Interested in This Project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Want to collaborate, discuss the research, or learn more about the technical details?
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}