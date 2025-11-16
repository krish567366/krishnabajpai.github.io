import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Zap, Shield, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AIArchitectureService = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Architecture Design Services - Krishna Bajpai</title>
        <meta name="description" content="Scalable AI systems and MLOps pipelines that grow with your business. Expert AI architecture design by Krishna Bajpai." />
        <meta name="keywords" content="AI architecture, MLOps, scalable AI systems, AI infrastructure, enterprise AI, machine learning architecture, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/services/ai-architecture" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://krishnabajpai.me/services/ai-architecture",
          "name": "AI Architecture Design",
          "description": "Scalable AI systems and MLOps pipelines that grow with your business.",
          "category": "Professional Services",
          "provider": {
            "@type": "Person",
            "@id": "https://krishnabajpai.me/#person",
            "name": "Krishna Bajpai"
          },
          "offers": {
            "@type": "Offer",
            "price": "35000",
            "priceCurrency": "USD",
            "availability": "InStock"
          },
          "serviceType": "AI Architecture Consulting",
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
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
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground font-medium">AI Architecture Design</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Service Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                AI Architecture Design
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                Scalable AI systems and MLOps pipelines that grow with your business
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>4-12 week delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Production-ready systems</span>
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What You Get</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transform your AI initiatives from proof-of-concept to production-ready systems. 
                I design and implement scalable AI architectures that handle enterprise workloads, 
                integrate seamlessly with your existing infrastructure, and evolve with your business needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Architecture Components</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scalable ML model serving infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated CI/CD pipelines for ML models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Data ingestion and preprocessing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Model monitoring and drift detection</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Technical Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Container orchestration with Kubernetes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-cloud deployment strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Security and compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance optimization and scaling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Implementation Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Architecture Assessment</h3>
                    <p className="text-muted-foreground">
                      Evaluate current infrastructure, identify bottlenecks, and define scalability requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">System Design</h3>
                    <p className="text-muted-foreground">
                      Create detailed architecture blueprints, technology stack selection, and integration plans.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Implementation</h3>
                    <p className="text-muted-foreground">
                      Build and deploy the AI infrastructure with proper testing and validation procedures.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Optimization & Handover</h3>
                    <p className="text-muted-foreground">
                      Performance tuning, team training, and knowledge transfer for ongoing maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Pricing */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Investment</h3>
              <div className="text-3xl font-bold text-primary mb-2">$35,000</div>
              <p className="text-sm text-muted-foreground mb-4">
                Starting price for complete AI architecture design and implementation
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Technologies */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Kubernetes', 'Docker', 'MLflow', 'Kubeflow', 'Apache Airflow',
                  'TensorFlow Serving', 'PyTorch', 'AWS', 'Azure', 'GCP',
                  'Prometheus', 'Grafana', 'Redis', 'PostgreSQL'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Success Story */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Success Story</h3>
              <blockquote className="text-sm text-muted-foreground italic mb-3">
                "Krishna's AI architecture transformed our ML deployment from weeks to hours. 
                The system handles 10x our original traffic with zero downtime."
              </blockquote>
              <p className="text-xs text-muted-foreground">
                — CTO, FinTech Startup (50M+ users)
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="mr-4">
              Start Your AI Architecture Project
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Services
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AIArchitectureService;