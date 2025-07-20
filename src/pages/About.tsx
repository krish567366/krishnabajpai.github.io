import { GraduationCap, Award, BookOpen, Code, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Quantum AI Research',
      description: 'Advanced research in quantum machine learning and autonomous agent architectures.',
      type: 'research'
    },
    {
      year: '2023',
      title: 'AI Newsletter Launch',
      description: 'Started weekly newsletter covering quantum computing and AI optimization techniques.',
      type: 'project'
    },
    {
      year: '2022',
      title: 'Optimization Studies',
      description: 'Specialized focus on control systems and algorithmic optimization.',
      type: 'education'
    },
    {
      year: '2021',
      title: 'Computer Science Studies',
      description: 'Bachelor\'s in Computer Science with focus on artificial intelligence.',
      type: 'education'
    }
  ];

  const skills = [
    { category: 'AI & ML', items: ['Quantum Machine Learning', 'Neural Networks', 'Deep Reinforcement Learning', 'Computer Vision'] },
    { category: 'Optimization', items: ['Control Systems', 'Genetic Algorithms', 'Swarm Intelligence', 'Mathematical Optimization'] },
    { category: 'Programming', items: ['Python', 'PyTorch', 'TensorFlow', 'Qiskit', 'NumPy', 'SciPy'] },
    { category: 'Research', items: ['Academic Writing', 'Data Analysis', 'Experimental Design', 'Technical Documentation'] }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="h-5 w-5" />;
      case 'research': return <Brain className="h-5 w-5" />;
      case 'project': return <Code className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
      case 'research': return 'bg-purple-500/10 text-purple-700 dark:text-purple-300';
      case 'project': return 'bg-green-500/10 text-green-700 dark:text-green-300';
      default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Krishna</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate researcher exploring the intersection of quantum computing, 
            artificial intelligence, and optimization. As a student and newsletter creator, 
            I'm dedicated to advancing our understanding of intelligent systems and sharing 
            knowledge with the community.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* About Text */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My fascination with artificial intelligence began during my undergraduate studies, 
                  where I discovered the potential of quantum computing to revolutionize machine learning. 
                  This intersection of quantum mechanics and AI has become the cornerstone of my research.
                </p>
                <p>
                  As a student researcher, I focus on developing quantum-enhanced algorithms for 
                  optimization problems, particularly in autonomous systems and control theory. 
                  My work explores how quantum principles can be leveraged to create more efficient 
                  and powerful AI systems.
                </p>
                <p>
                  Beyond research, I'm passionate about knowledge sharing. Through my LinkedIn newsletter 
                  and blog posts, I break down complex concepts in quantum AI and optimization, 
                  making them accessible to a broader audience of researchers and practitioners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Research Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Quantum Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Exploring quantum algorithms for enhanced pattern recognition and learning.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Autonomous Agents</h4>
                    <p className="text-sm text-muted-foreground">
                      Building intelligent systems capable of independent decision-making.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Optimization Theory</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced algorithms for complex optimization and control problems.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Neural Networks</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep learning architectures and quantum-inspired neural models.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Current Focus</h4>
                  <p className="text-sm text-muted-foreground">Quantum Neural Networks</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">Computer Science Student</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Location</h4>
                  <p className="text-sm text-muted-foreground">India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Newsletter</h4>
                  <p className="text-sm text-muted-foreground">Weekly AI & Quantum insights</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Available for collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Actively researching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Publishing weekly content</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-smooth">
                      {getIcon(item.type)}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-px h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className={getTypeColor(item.type)}>
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}