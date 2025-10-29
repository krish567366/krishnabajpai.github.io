import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/hero-flow.png')] bg-no-repeat bg-cover opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
      
      {/* Card content */}
      <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-light bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight group-hover:from-primary group-hover:to-accent transition-colors duration-300">
                {tool.name}
              </h3>
              <Badge variant="outline" className="font-mono text-xs">
                v{tool.version}
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center">
              <span className="text-xl text-accent">{tool.name.charAt(0)}</span>
            </div>
          </div>
          <div className="relative">
            <p className="text-muted-foreground text-base leading-relaxed">
              {tool.description}
            </p>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary-foreground/90 font-medium backdrop-blur-sm group-hover:bg-secondary/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex items-center text-sm text-muted-foreground/80">
          <span className="font-sketch bg-muted/30 px-2 py-0.5 rounded">Last Updated:</span>
          <time className="ml-2 font-mono">{tool.lastReleased}</time>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button 
            asChild
            className="flex-1 text-sm rounded-full h-9 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-colors duration-300"
          >
            <a
              href={tool.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              PyPI
            </a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="flex-1 text-sm rounded-full h-9 border-accent/20 hover:border-accent/40 hover:bg-accent/5 transition-colors duration-300"
          >
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Tools = () => {
  const [manifest, setManifest] = useState<ToolsManifest | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Add SEO metadata
  const SEO = () => (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>AI/ML Python Tools & Libraries | Open Source Software by Krishna Bajpai</title>
      <meta name="title" content="AI/ML Python Tools & Libraries | Open Source Software by Krishna Bajpai" />
      <meta name="description" content="Discover production-ready Python packages for AI, ML, and quantum computing. Free, open-source tools built by Krishna Bajpai for machine learning, deep learning, quantum optimization, and data science. Download from PyPI or contribute on GitHub." />
      <meta name="keywords" content="Python Tools, AI Libraries, Machine Learning Packages, Quantum Computing Tools, Deep Learning Libraries, Krishna Bajpai, Open Source AI, PyPI Packages, Data Science Tools, AI Development, ML Libraries, Python AI, Quantum Optimization, Neural Networks, Machine Learning Framework" />
      <meta name="author" content="Krishna Bajpai" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://krishnabajpai.me/tools" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://krishnabajpai.me/tools" />
      <meta property="og:title" content="AI/ML Python Tools & Libraries | Open Source Software by Krishna Bajpai" />
      <meta property="og:description" content="Production-ready Python packages for AI, ML, and quantum computing. Free, open-source tools for machine learning, deep learning, and quantum optimization. Download from PyPI or explore on GitHub." />
      <meta property="og:image" content="https://krishnabajpai.me/assets/tools-preview.png" />
      <meta property="og:site_name" content="Krishna Bajpai" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://krishnabajpai.me/tools" />
      <meta name="twitter:title" content="AI/ML Python Tools & Libraries | Krishna Bajpai" />
      <meta name="twitter:description" content="Production-ready Python packages for AI, ML, and quantum computing. Free, open-source tools for machine learning and quantum optimization." />
      <meta name="twitter:image" content="https://krishnabajpai.me/assets/tools-preview.png" />
      
      {/* Additional SEO */}
      <meta name="application-name" content="Krishna Bajpai" />
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Krishna Bajpai | Tools" />
      
      {/* Structured Data - Software Application */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "AI/ML Python Tools & Libraries",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Person",
            "name": "Krishna Bajpai",
            "url": "https://krishnabajpai.me"
          },
          "downloadUrl": "https://pypi.org/user/bajpai__krishna/",
          "softwareHelp": "https://github.com/krish567366",
          "programmingLanguage": "Python",
          "keywords": "AI, Machine Learning, Python, Quantum Computing",
          "license": "MIT"
        })}
      </script>
    </Helmet>
  );

  useEffect(() => {
    fetch('/data/tools-manifest.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load tools manifest');
        }
        return res.json();
      })
      .then((data) => setManifest(data))
      .catch((error) => {
        console.error('Error loading tools manifest:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center text-destructive">
            <p className="text-xl mb-4">Error: {error}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Retry Loading
            </motion.button>
          </div>
        </div>
      </Layout>
    );
  }

  if (!manifest) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-16 w-16 border-4 border-primary border-t-transparent"
            />
            <p className="text-lg text-muted-foreground font-sketch">Loading tools...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const filteredTools = manifest.tools
    .filter((tool) => {
      return searchTerm === '' || 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return (
    <Layout>
      <SEO />
      <section className="min-h-screen bg-background">
        <div className="container mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-primary mb-4">
              Python Tools & Libraries
            </h1>
            <h2 className="text-2xl lg:text-3xl font-sketch font-bold relative mt-2 text-primary/90">
              Open-source AI/ML Solutions
              <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Production-ready Python packages for AI, machine learning, and quantum computing. 
              Built with industry best practices and comprehensive documentation.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-light text-primary mb-2">{manifest.tools.length}</h3>
              <p className="text-muted-foreground">Total Tools</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-light text-primary mb-2">{manifest.categories.length}</h3>
              <p className="text-muted-foreground">Categories</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
            >
              <h3 className="text-4xl font-light text-primary mb-2">100k+</h3>
              <p className="text-muted-foreground">Total Downloads</p>
            </motion.div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search tools by name, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-muted-foreground">
              {searchTerm ? (
                <>Showing {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} matching "{searchTerm}"</>
              ) : (
                <>All {filteredTools.length} tools</>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                onClick={() => setViewMode('grid')}
              >
                Grid
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                onClick={() => setViewMode('list')}
              >
                List
              </Button>
            </div>
          </div>

          <motion.div
            layout
            className={
              viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-4"
            }
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === 'list' ? 'w-full' : undefined}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;