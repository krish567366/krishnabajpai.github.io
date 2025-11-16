import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Clock, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet';

const QuantumComputingAIVideo = () => {
  return (
    <Layout>
      <Helmet>
        <title>Quantum Computing in AI: Future Trends - Krishna Bajpai</title>
        <meta name="description" content="Deep dive into quantum computing applications in modern AI systems. Learn about quantum-classical hybrid architectures and future trends from Krishna Bajpai." />
        <meta name="keywords" content="quantum computing, artificial intelligence, quantum AI, hybrid systems, quantum machine learning, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/videos/quantum-computing-ai" />
        
        {/* Video Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Quantum Computing in AI: Future Trends",
          "description": "Deep dive into quantum computing applications in modern AI systems",
          "thumbnailUrl": "https://krishnabajpai.me/assets/videos/quantum-thumb.jpg",
          "uploadDate": "2025-08-15T00:00:00Z",
          "duration": "PT45M",
          "contentUrl": "https://krishnabajpai.me/videos/quantum-computing-ai",
          "embedUrl": "https://krishnabajpai.me/videos/embed/quantum-computing-ai",
          "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/WatchAction",
            "userInteractionCount": 12000
          },
          "author": {
            "@type": "Person",
            "@id": "https://krishnabajpai.me/#person",
            "name": "Krishna Bajpai"
          }
        })}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-muted-foreground">Videos</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground font-medium">Quantum Computing in AI</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Video Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quantum Computing in AI: Future Trends
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Deep dive into quantum computing applications in modern AI systems
          </p>
          
          {/* Video Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>12,000 views</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Published: August 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="mb-12">
          <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Video Coming Soon</h3>
              <p className="text-muted-foreground">
                This video is currently being prepared for publication.
              </p>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Video</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In this comprehensive presentation, we explore the convergence of quantum computing and artificial intelligence, 
                  examining how quantum-classical hybrid systems are revolutionizing the AI landscape.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">What You'll Learn:</h3>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• Fundamentals of quantum computing in AI contexts</li>
                  <li>• Quantum machine learning algorithms and their advantages</li>
                  <li>• Hybrid quantum-classical architectures</li>
                  <li>• Real-world applications in optimization and simulation</li>
                  <li>• Future trends and commercial implementations</li>
                  <li>• Challenges and opportunities in quantum AI</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Target Audience:</h3>
                <p className="text-muted-foreground mb-4">
                  This presentation is designed for AI practitioners, researchers, and technology leaders 
                  interested in understanding the potential of quantum computing in AI applications.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Speaker Info */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Speaker</h3>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="/me.jpg" 
                  alt="Krishna Bajpai" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">Krishna Bajpai</p>
                  <p className="text-sm text-muted-foreground">AI & Quantum Computing Expert</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading consultant in AI and quantum computing with expertise in enterprise 
                implementations and research.
              </p>
            </div>

            {/* Related Content */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Related Content</h3>
              <div className="space-y-3">
                <Link 
                  to="/case-studies" 
                  className="block text-sm text-primary hover:underline"
                >
                  • Case Studies: Quantum Optimization Projects
                </Link>
                <Link 
                  to="/services" 
                  className="block text-sm text-primary hover:underline"
                >
                  • Quantum Computing Consulting Services
                </Link>
                <Link 
                  to="/tools/hmai" 
                  className="block text-sm text-primary hover:underline"
                >
                  • HMAI: Quantum Field Theory Framework
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="mr-4">
              Book Quantum AI Consultation
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default QuantumComputingAIVideo;