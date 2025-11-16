import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      className="relative overflow-hidden rounded-lg bg-card p-6 group hover:shadow-lg transition-all duration-300 border border-border"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-primary mb-2">{tool.name}</h3>
        <p className="text-muted-foreground mb-4">{tool.description}</p>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Updated: {tool.lastReleased}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={tool.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors hover:underline"
          >
            PyPI
          </a>
          <a
            href={tool.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Tools = () => {
  const [manifest, setManifest] = useState<ToolsManifest | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

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
      <div className="container mx-auto py-12">
        <div className="text-center text-destructive">
          <p>Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!manifest) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Loading tools...</p>
        </div>
      </div>
    );
  }

  const filteredTools = manifest.tools.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...manifest.categories];

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Python Tools & Libraries</h1>
        <p className="text-xl text-muted-foreground">
          A collection of open-source Python packages for AI, ML, and quantum computing
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/10 text-secondary hover:bg-secondary/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="text-sm text-muted-foreground mb-6">
        Showing {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}{' '}
        {selectedCategory !== 'all' && `in ${selectedCategory}`}
        {searchTerm && ` matching "${searchTerm}"`}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredTools.map((tool) => (
          <motion.div
            key={tool.slug}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;