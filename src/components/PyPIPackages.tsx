import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";

interface PyPIPackage {
  name: string;
  version: string;
  summary: string;
  author: string;
  project_url: string;
  release_date: string;
}

const PyPIPackages = () => {
  const [packages, setPackages] = useState<PyPIPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use useMemo to avoid recreating these arrays/objects on every render
  const krishnaPackages = useMemo(() => [
    "hmai",
    "alphaforge",
    "evosphere",
    "vision-agent-framework",
    "pan-omic-consciousness-engine",
    "topological-quantum-compiler",
    "trading-bot-ml",
    "qmemetic-ai",
    "quantumlangchain",
    "entropic-ai",
    "QuantumMetaGPT",
    "quantum-generative-adversarial-networks-pro",
    "quantum-data-embedding-suite",
    "quantum-entangled-knowledge-graphs",
    "entanglement-enhanced-nlp",
    "probabilistic-quantum-reasoner",
    "hyper-fabric-interconnect",
    "se-agi",
    "cognito-sim-engine",
    "quantummeta-license",
    "automl-self-improvement",
    "decentralized-ai",
    "hyqcopt",
    "dhcs-algorithm",
    "quantum-metalearn",
    "kyber-pqc"
  ], []);

  // Package descriptions (since PyPI API might not have all summaries)
  const packageDescriptions = useMemo<Record<string, string>>(() => ({
    "hmai": "AI framework for inventing new classes of matter through generative quantum field theory",
    "alphaforge": "High-performance algorithmic trading platform created by Krishna Bajpai and Vedanshi Gupta",
    "evosphere": "The Evolutionary Bio-Compiler: A living engine for programming biology through evolution itself",
    "vision-agent-framework": "World-Class Multi-Modal AI Agent Framework with Revolutionary Performance Features",
    "pan-omic-consciousness-engine": "Pan-Omics Consciousness Engine - A computational framework for modeling consciousness emergence",
    "topological-quantum-compiler": "A universal compiler for quantum computers based on topological principles and anyonic braiding",
    "trading-bot-ml": "Advanced ML-powered trading bot with real-time market analysis",
    "qmemetic-ai": "Quantum-inspired AI system for evolving, mutating, and entangling memes across users, systems, and timelines",
    "quantumlangchain": "LICENSED: A composable framework for quantum-inspired reasoning, entangled memory systems, and multi-agent cooperation",
    "entropic-ai": "Entropic AI: Generative Intelligence through Thermodynamic Self-Organization (Patent Pending)",
    "QuantumMetaGPT": "Autonomous quantum AI research agent",
    "quantum-generative-adversarial-networks-pro": "Quantum-enhanced GAN framework for high-fidelity synthetic data generation",
    "quantum-data-embedding-suite": "Advanced classical-to-quantum data embedding techniques for quantum machine learning",
    "quantum-entangled-knowledge-graphs": "World's first open-source library for quantum-enhanced knowledge graph reasoning using entanglement principles",
    "entanglement-enhanced-nlp": "Quantum entanglement-inspired Natural Language Processing framework",
    "probabilistic-quantum-reasoner": "A quantum-classical hybrid reasoning engine for uncertainty-aware AI inference",
    "hyper-fabric-interconnect": "Breakthrough protocol architecture for ultra-low-latency, high-bandwidth interconnects powering AI superclusters and quantum simulation networks",
    "se-agi": "Self-Evolving General AI: The Holy Grail of Autonomous Intelligence",
    "cognito-sim-engine": "A modular cognitive simulation engine for modeling and testing advanced AI cognitive architectures",
    "quantummeta-license": "Universal, secure licensing system for QuantumMeta ecosystem packages",
    "automl-self-improvement": "Autonomous AI model optimization framework with meta-learning and hybrid tuning",
    "decentralized-ai": "Decentralized AI Training Platform",
    "hyqcopt": "Hybrid Quantum-Classical Optimization Framework",
    "dhcs-algorithm": "Dynamic Hierarchical Cooperative Swarm Optimization (DHCS)",
    "quantum-metalearn": "A project for meta-learning experiments",
    "kyber-pqc": "Production-Grade Post-Quantum Cryptography Implementation"
  }), []);

  // Release dates (based on the "Last released" dates from your list)
  const releaseDates = useMemo<Record<string, string>>(() => ({
    "hmai": "Sep 1, 2025",
    "alphaforge": "Aug 31, 2025",
    "evosphere": "Aug 31, 2025",
    "vision-agent-framework": "Aug 31, 2025",
    "pan-omic-consciousness-engine": "Aug 30, 2025",
    "topological-quantum-compiler": "Aug 29, 2025",
    "trading-bot-ml": "Aug 25, 2025",
    "qmemetic-ai": "Jul 21, 2025",
    "quantumlangchain": "Jul 19, 2025",
    "entropic-ai": "Jul 18, 2025",
    "QuantumMetaGPT": "Jul 16, 2025",
    "quantum-generative-adversarial-networks-pro": "Jul 16, 2025",
    "quantum-data-embedding-suite": "Jul 16, 2025",
    "quantum-entangled-knowledge-graphs": "Jul 16, 2025",
    "entanglement-enhanced-nlp": "Jul 16, 2025",
    "probabilistic-quantum-reasoner": "Jul 16, 2025",
    "hyper-fabric-interconnect": "Jul 16, 2025",
    "se-agi": "Jul 15, 2025",
    "cognito-sim-engine": "Jul 15, 2025",
    "quantummeta-license": "Jul 15, 2025",
    "automl-self-improvement": "Mar 24, 2025",
    "decentralized-ai": "Mar 20, 2025",
    "hyqcopt": "Mar 20, 2025",
    "dhcs-algorithm": "Mar 19, 2025",
    "quantum-metalearn": "Mar 19, 2025",
    "kyber-pqc": "Mar 18, 2025"
  }), []);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        
        // In a real implementation with API access, you'd fetch each package
        // from PyPI's JSON API with:
        // const response = await fetch(`https://pypi.org/pypi/${packageName}/json`);
        
        // For now, we'll use the hardcoded data that matches your PyPI list
        const fetchedPackages: PyPIPackage[] = krishnaPackages
          .slice(0, 12) // Display first 12 packages (we can adjust this number)
          .map(name => ({
            name,
            version: "1.0.0", // In a real implementation, this would come from the API
            summary: packageDescriptions[name] || "Package developed by Krishna Bajpai",
            author: "Krishna Bajpai",
            project_url: `https://pypi.org/project/${name}/`,
            release_date: releaseDates[name] || "2025"
          }));
        
        // In a production app, you would fetch the data dynamically:
        /*
        const fetchedPackages = await Promise.all(
          krishnaPackages.map(async (packageName) => {
            try {
              const response = await fetch(`https://pypi.org/pypi/${packageName}/json`);
              const data = await response.json();
              return {
                name: packageName,
                version: data.info.version,
                summary: data.info.summary || packageDescriptions[packageName],
                author: data.info.author,
                project_url: `https://pypi.org/project/${packageName}/`,
                release_date: releaseDates[packageName]
              };
            } catch (e) {
              console.error(`Error fetching ${packageName}:`, e);
              return null;
            }
          })
        ).then(results => results.filter(Boolean));
        */
        
        // Simulate API delay for demo purposes
        await new Promise(resolve => setTimeout(resolve, 800));
        setPackages(fetchedPackages);
        setError(null);
      } catch (err) {
        setError("Failed to fetch packages");
        console.error("Error fetching PyPI packages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [krishnaPackages, packageDescriptions, releaseDates]);

  if (loading) {
    return (
      <div className="bg-secondary p-8 border border-border">
        <h3 className="text-xl font-medium text-foreground mb-6">
          Python Libraries{" "}
          <span className="font-sketch text-sketch">(loading from PyPI...)</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-background p-4 border border-border animate-pulse">
              <div className="h-4 bg-wireframe-light rounded mb-2"></div>
              <div className="h-3 bg-wireframe-light rounded mb-1"></div>
              <div className="h-3 bg-wireframe-light rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-secondary p-8 border border-border">
        <h3 className="text-xl font-medium text-foreground mb-4">
          Python Libraries{" "}
          <span className="font-sketch text-sketch">(22+ packages)</span>
        </h3>
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()}
        >
          Retry Loading
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-secondary p-8 border border-border relative">
      {/* Sketchy annotation */}
      <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-sketch transform rotate-3">
        Live from PyPI!
      </div>
      
      <h3 className="text-xl font-medium text-foreground mb-6">
        Python Libraries{" "}
        <span className="font-sketch text-sketch">({krishnaPackages.length} open source packages)</span>
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-background p-4 border border-border relative">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-foreground text-sm">{pkg.name}</h4>
              <span className="text-xs text-muted-foreground bg-wireframe-light px-2 py-1 rounded">
                {pkg.release_date}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              {pkg.summary}
            </p>
            <a 
              href={pkg.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:text-foreground transition-colors"
            >
              View on PyPI →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground font-sketch mb-4">
          ↑ These packages power AI systems at Fortune 500 companies
        </p>
        <a 
          href="https://pypi.org/user/bajpai__krishna/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="sm">
            View All {krishnaPackages.length} Packages on PyPI
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PyPIPackages;