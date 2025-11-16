import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';

interface Tool {
  slug: string;
  name: string;
  version: string;
  description: string;
  pypi: string;
  github: string;
  category: string;
  tags: string[];
  lastReleased: string;
}

interface ToolsManifest {
  tools: Tool[];
  categories: string[];
}

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTool = async () => {
      try {
        const response = await fetch('/data/tools-manifest.json');
        if (!response.ok) {
          throw new Error('Failed to load tools data');
        }
        const manifest: ToolsManifest = await response.json();
        const foundTool = manifest.tools.find(t => t.slug === slug);
        
        if (!foundTool) {
          setError('Tool not found');
        } else {
          setTool(foundTool);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadTool();
    }
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading tool details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !tool) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tool Not Found</h1>
            <p className="text-muted-foreground mb-8">
              {error || 'The requested tool could not be found.'}
            </p>
            <Link to="/tools">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{tool.name} - Krishna Bajpai Tools</title>
        <meta name="description" content={tool.description} />
        <meta name="keywords" content={`${tool.name}, ${tool.tags.join(', ')}, Krishna Bajpai, ${tool.category}`} />
        <link rel="canonical" href={`https://krishnabajpai.me/tools/${tool.slug}`} />
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
                  <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground">
                    Tools
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground font-medium">{tool.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Tool Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {tool.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                Version {tool.version}
              </p>
            </div>
            <div className="flex gap-4">
              <a href={tool.pypi} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  PyPI
                </Button>
              </a>
              <a href={tool.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Category and Tags */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
              {tool.category}
            </span>
            <span className="text-sm text-muted-foreground">
              Last updated: {tool.lastReleased}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tool Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">About {tool.name}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </div>
        </motion.div>

        {/* Installation & Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Installation</h2>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <code>pip install {tool.name}</code>
            </div>
            <p className="text-muted-foreground mt-4">
              For detailed documentation and usage examples, visit the{' '}
              <a 
                href={tool.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub repository
              </a>.
            </p>
          </div>
        </motion.div>

        {/* Back to Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/tools">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Tools
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ToolDetail;