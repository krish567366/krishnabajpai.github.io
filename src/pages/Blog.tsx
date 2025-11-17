import React from 'react';
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "n8n-workflow-editor-react-flow",
      title: "How I Built a Full n8n-Style Workflow Editor Using React Flow + FastAPI",
      excerpt: "Building a complete workflow automation platform from scratch using React Flow for the frontend and FastAPI for the backend. Learn the architecture decisions, challenges, and solutions that went into creating a production-ready workflow editor.",
      date: "2025-11-15",
      readTime: "12 min read",
      category: "Web Development",
      tags: ["React", "FastAPI", "Workflow Automation", "Full Stack"],
      featured: true
    },
    {
      id: "nvidia-parakeet-production-deployment",
      title: "Deploying NVIDIA Parakeet RNNT 1.1B in Production: Lessons Learned",
      excerpt: "Real-world experience deploying NVIDIA's Parakeet RNNT 1.1B model in a production environment. Performance optimization, scaling challenges, and infrastructure decisions for enterprise ASR deployment.",
      date: "2025-11-12",
      readTime: "8 min read",
      category: "MLOps",
      tags: ["NVIDIA", "ASR", "Production", "ML Deployment"],
      featured: true
    },
    {
      id: "hybrid-quantum-optimization-library",
      title: "100+ Hybrid Quantum Optimization Algorithms in One Python Library",
      excerpt: "Comprehensive Python library combining classical and quantum optimization techniques. Implementation details, performance benchmarks, and real-world applications of hybrid quantum-classical algorithms.",
      date: "2025-11-08",
      readTime: "15 min read",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Optimization", "Python", "Open Source"],
      featured: true
    },
    {
      id: "ai-hrms-system-architecture",
      title: "Designing an AI HRMS System Equal to Keka: Architecture Breakdown",
      excerpt: "Complete architectural breakdown of building an enterprise-grade AI-powered HRMS system. Database design, microservices architecture, AI integration, and scalability considerations for modern HR platforms.",
      date: "2025-11-05",
      readTime: "10 min read",
      category: "System Design",
      tags: ["System Architecture", "HRMS", "AI", "Enterprise"],
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Krishna Bajpai Blog - AI, ML & Tech Insights | Expert Analysis & Tutorials</title>
        <meta name="description" content="Krishna Bajpai's technical blog featuring in-depth articles on AI, machine learning, quantum computing, system architecture, and production deployment experiences. Expert insights and practical tutorials." />
        <meta name="keywords" content="Krishna Bajpai blog, AI blog, machine learning tutorials, quantum computing articles, system architecture, MLOps, technical writing, AI expert insights" />
        <link rel="canonical" href="https://krishnabajpai.me/blog" />
        <meta property="og:title" content="Krishna Bajpai Blog - AI, ML & Tech Insights" />
        <meta property="og:description" content="Expert insights and practical tutorials on AI, machine learning, quantum computing, and system architecture by Krishna Bajpai." />
        <meta property="og:url" content="https://krishnabajpai.me/blog" />
        <meta property="og:type" content="blog" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Krishna Bajpai's AI & Tech Blog",
            "description": "Expert insights and practical tutorials on AI, machine learning, quantum computing, and system architecture",
            "url": "https://krishnabajpai.me/blog",
            "author": {
              "@type": "Person",
              "name": "Krishna Bajpai",
              "url": "https://krishnabajpai.me"
            },
            "blogPost": ${JSON.stringify(blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": "Krishna Bajpai"
              },
              "datePublished": post.date,
              "url": `https://krishnabajpai.me/blog/${post.id}`,
              "keywords": post.tags.join(", ")
            })))}
          }
        `}</script>
      </Helmet>
      
      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl font-light text-foreground mb-6">
                  Technical{" "}
                  <span className="font-sketch font-bold relative">
                    Insights
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform rotate-1"></div>
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Deep dives into AI, machine learning, quantum computing, and system architecture. 
                  Real-world experiences, practical tutorials, and expert analysis.
                </p>
              </div>

              {/* Featured Posts */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-foreground mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={post.id} className="bg-background border border-border p-8 hover:border-accent transition-colors">
                      <div className="space-y-4">
                        {/* Category & Date */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-medium text-foreground leading-tight">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="hover:text-accent transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="text-accent hover:text-foreground font-medium transition-colors"
                          >
                            Read Article →
                          </Link>
                          <span className="text-sm text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-secondary p-8 text-center">
                <h3 className="text-2xl font-light text-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get notified when I publish new articles on AI, quantum computing, and system architecture. 
                  No spam, just quality technical content.
                </p>
                <div className="flex max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 bg-background border border-border focus:border-accent outline-none"
                  />
                  <button className="px-6 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;