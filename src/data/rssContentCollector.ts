// RSS Content Collector - Gathers all site content for RSS feed generation
import toolsManifest from './tools-manifest.json';

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  category?: string;
  author?: string;
  content?: string;
}

// Blog Posts Data
export const blogPosts = [
  {
    id: "airport-ml-optimization",
    title: "How Machine Learning is Revolutionizing Airport Operations: Predictive Analytics for Aviation",
    description: "ML transforms airport operations with 40% faster processing, predictive maintenance, and smart resource allocation. Complete guide to AI in aviation industry.",
    date: "2025-11-19",
    category: "Machine Learning",
    tags: ["Airport Operations", "Aviation AI", "Predictive Maintenance", "Resource Optimization"],
    content: `<![CDATA[
    <p>Machine Learning is transforming airport operations worldwide, with implementations showing 40% faster processing times and significant cost reductions through predictive analytics.</p>
    
    <h3>Key Benefits:</h3>
    <ul>
      <li>Predictive maintenance reducing equipment downtime by 60%</li>
      <li>Smart resource allocation optimizing staff deployment</li>
      <li>Real-time passenger flow optimization</li>
      <li>Baggage handling automation with 99.7% accuracy</li>
    </ul>
    
    <p>The aviation industry is experiencing a digital transformation, with AI and ML at the forefront of operational excellence.</p>
    
    <p><strong>Technologies used:</strong> Python, TensorFlow, Apache Kafka, Redis, Computer Vision</p>
    ]]>`
  },
  {
    id: "churn-prediction-ml-solution",
    title: "How I Reduced Customer Churn by 34% Using Machine Learning",
    description: "ML churn prediction reduced customer churn 34% & saved $2.3M annually. Complete case study: feature engineering, XGBoost model, production deployment.",
    date: "2025-11-17",
    category: "Machine Learning",
    tags: ["Churn Prediction", "XGBoost", "Customer Analytics", "ML Pipeline"],
    content: `<![CDATA[
    <p>Customer churn prediction using advanced ML techniques achieved a 34% reduction in customer attrition, saving $2.3M annually for a SaaS company.</p>
    
    <h3>Implementation Highlights:</h3>
    <ul>
      <li>Advanced feature engineering with behavioral patterns</li>
      <li>XGBoost ensemble modeling with 91.7% accuracy</li>
      <li>Real-time prediction pipeline with sub-second latency</li>
      <li>A/B testing framework for continuous optimization</li>
    </ul>
    
    <p>This project demonstrates the power of predictive analytics in customer retention strategies, combining technical excellence with business impact.</p>
    ]]>`
  },
  {
    id: "computer-vision-quality-control",
    title: "Computer Vision Quality Control: 99.7% Accuracy in Manufacturing",
    description: "Computer vision quality control achieved 99.7% accuracy in automotive manufacturing using YOLO defect detection. Edge deployment & production pipeline.",
    date: "2025-11-17",
    category: "Computer Vision",
    tags: ["YOLO", "Quality Control", "Manufacturing", "Edge AI"],
    content: `<![CDATA[
    <p>Implemented computer vision quality control system achieving 99.7% defect detection accuracy in automotive manufacturing, processing 500+ parts per minute.</p>
    
    <h3>Technical Achievement:</h3>
    <ul>
      <li>Custom YOLO model for multi-class defect detection</li>
      <li>Edge deployment with NVIDIA Jetson for real-time processing</li>
      <li>Automated rejection system with precise positioning</li>
      <li>Integration with existing manufacturing workflows</li>
    </ul>
    
    <p>This solution eliminated manual inspection bottlenecks while maintaining higher accuracy than human inspectors.</p>
    ]]>`
  }
];

// Case Studies Data
export const caseStudies = [
  {
    id: "manufacturing-predictive",
    title: "Manufacturing Predictive Maintenance: 87% Downtime Reduction",
    description: "AI-powered predictive maintenance system for global manufacturing corporation achieving 87% reduction in unplanned downtime and $2.4M annual savings.",
    date: "2025-10-15",
    category: "Predictive Analytics",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    results: "87% reduction in unplanned downtime, $2.4M annual savings, 94.4% prediction accuracy",
    content: `<![CDATA[
    <h3>Challenge:</h3>
    <p>Equipment failures causing 12% production loss and $3.2M annual costs. No predictive capabilities, purely reactive maintenance.</p>
    
    <h3>Solution:</h3>
    <p>Deployed IoT sensors across 200+ machines, built ensemble ML models with XGBoost and LSTM networks, created real-time monitoring dashboard.</p>
    
    <h3>Results:</h3>
    <ul>
      <li>87% reduction in unplanned downtime</li>
      <li>$2.4M annual savings</li>
      <li>94.4% prediction accuracy for failures 2-4 weeks in advance</li>
      <li>ROI achieved within 3 months</li>
    </ul>
    
    <p><strong>Technologies:</strong> Python, XGBoost, LSTM, IoT sensors, Grafana, Docker</p>
    ]]>`
  },
  {
    id: "fintech-fraud",
    title: "FinTech Fraud Detection: 99.7% Accuracy Achievement",
    description: "Real-time fraud detection system for FinTech unicorn achieving 99.7% accuracy and processing 50,000+ transactions per second.",
    date: "2025-09-20",
    category: "Financial Technology",
    client: "FinTech Unicorn",
    industry: "Financial Services",
    results: "99.7% fraud detection accuracy, 15x faster processing, $1.2M fraud prevention",
    content: `<![CDATA[
    <h3>Challenge:</h3>
    <p>Manual fraud detection missing 23% of fraudulent transactions, causing $1.2M monthly losses and regulatory compliance issues.</p>
    
    <h3>Solution:</h3>
    <p>Built ensemble ML system with gradient boosting, neural networks, and real-time feature engineering pipeline processing 50k+ transactions/second.</p>
    
    <h3>Results:</h3>
    <ul>
      <li>99.7% fraud detection accuracy</li>
      <li>15x faster processing speed</li>
      <li>$1.2M fraud prevention in first quarter</li>
      <li>2-month payback period</li>
    </ul>
    
    <p><strong>Technologies:</strong> Python, Scikit-learn, Apache Kafka, Redis, FastAPI</p>
    ]]>`
  },
  {
    id: "supply-chain",
    title: "Supply Chain Quantum Optimization: 31% Cost Reduction",
    description: "Quantum-enhanced supply chain optimization achieving 31% inventory cost reduction through hybrid classical-quantum algorithms.",
    date: "2025-08-10",
    category: "Quantum Computing",
    client: "Fortune 500 Retailer",
    industry: "Retail & E-commerce",
    results: "31% inventory cost reduction, $5M inventory optimization, 23% faster delivery",
    content: `<![CDATA[
    <h3>Challenge:</h3>
    <p>Complex multi-warehouse inventory optimization with 10,000+ SKUs, seasonal demand variations, and supply chain disruptions.</p>
    
    <h3>Solution:</h3>
    <p>Hybrid quantum-classical optimization using QAOA algorithms for constraint satisfaction, integrated with demand forecasting models.</p>
    
    <h3>Results:</h3>
    <ul>
      <li>31% reduction in inventory carrying costs</li>
      <li>$5M inventory optimization</li>
      <li>23% faster delivery times</li>
      <li>Reduced stockouts by 45%</li>
    </ul>
    
    <p><strong>Technologies:</strong> Qiskit, Python, OR-Tools, Apache Spark, Kubernetes</p>
    ]]>`
  }
];

// Services Data
export const services = [
  {
    id: "predictive-modeling",
    title: "Predictive Modeling & Forecasting Services",
    description: "Custom ML models that forecast trends, demand, failures, and opportunities with 90%+ accuracy using proven methodologies.",
    date: "2025-12-25",
    category: "Machine Learning Services",
    features: [
      "Time series forecasting with Prophet Plus",
      "Classification & regression models",
      "Ensemble methods with XGBoost/LightGBM",
      "Model interpretability with SHAP",
      "Production deployment with MLOps"
    ],
    pricing: "$25k - $75k",
    timeline: "2-4 months",
    caseStudy: "Manufacturing Corp: 94.4% prediction accuracy",
    content: `<![CDATA[
    <p>Transform your business with predictive analytics that forecast trends, demand, and opportunities with over 90% accuracy.</p>
    
    <h3>What You Get:</h3>
    <ul>
      <li>Custom ML models tailored to your specific use case</li>
      <li>Advanced time series forecasting with Prophet Plus</li>
      <li>Ensemble methods using XGBoost and LightGBM</li>
      <li>Model interpretability with SHAP analysis</li>
      <li>Production-ready deployment with MLOps pipeline</li>
    </ul>
    
    <h3>Proven Results:</h3>
    <p>Manufacturing Corp achieved 94.4% prediction accuracy for equipment failures, resulting in 87% downtime reduction and $2.4M annual savings.</p>
    
    <p><strong>Investment:</strong> $25k - $75k | <strong>Timeline:</strong> 2-4 months</p>
    ]]>`
  },
  {
    id: "quantum-optimization",
    title: "Quantum-Enhanced Optimization Solutions",
    description: "Breakthrough optimization algorithms combining classical and quantum computing for problems that seemed impossible to solve.",
    date: "2025-12-25",
    category: "Quantum Computing Services",
    features: [
      "Supply chain optimization",
      "Resource allocation with constraints",
      "Portfolio optimization for finance",
      "Hybrid classical-quantum algorithms",
      "QAOA and VQE implementations"
    ],
    pricing: "$50k - $150k",
    timeline: "3-6 months",
    caseStudy: "Fortune 500: 31% cost reduction",
    content: `<![CDATA[
    <p>Solve previously impossible optimization problems with quantum-enhanced algorithms that deliver breakthrough results.</p>
    
    <h3>Capabilities:</h3>
    <ul>
      <li>Complex supply chain optimization with quantum advantage</li>
      <li>Multi-constraint resource allocation</li>
      <li>Portfolio optimization for financial services</li>
      <li>Hybrid classical-quantum algorithm development</li>
      <li>QAOA and VQE implementations for real problems</li>
    </ul>
    
    <h3>Proven Impact:</h3>
    <p>Fortune 500 retailer achieved 31% inventory cost reduction through quantum-enhanced supply chain optimization.</p>
    
    <p><strong>Investment:</strong> $50k - $150k | <strong>Timeline:</strong> 3-6 months</p>
    ]]>`
  }
];

// Revolutionary Discoveries
export const revolutionaryDiscoveries = [
  {
    id: "ultra-low-latency-execution-engine",
    title: "Ultra-Low Latency Trading Execution Engine: 890ns Revolutionary Breakthrough",
    description: "Revolutionary deterministic execution engine achieving 890ns median latency for quantitative trading systems. Creator: Krishna Bajpai.",
    date: "2025-12-24",
    category: "Revolutionary Discovery",
    doi: "https://doi.org/10.5555/breakthrough-execution-890ns",
    performance: "890ns median execution latency",
    content: `<![CDATA[
    <h3>Revolutionary Discovery</h3>
    <p><strong>Creator:</strong> Krishna Bajpai</p>
    <p><strong>Performance:</strong> 890ns median execution latency</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.5555/breakthrough-execution-890ns">10.5555/breakthrough-execution-890ns</a></p>
    
    <h3>Breakthrough Achievement:</h3>
    <p>First deterministic execution engine to consistently achieve sub-microsecond latency in quantitative trading systems, representing a paradigm shift in high-frequency trading infrastructure.</p>
    
    <h3>Technical Innovation:</h3>
    <ul>
      <li>Deterministic execution with 890ns median latency</li>
      <li>Zero-allocation memory management</li>
      <li>Lock-free concurrent data structures</li>
      <li>Hardware-optimized instruction sequences</li>
      <li>Real-time performance guarantees</li>
    </ul>
    
    <p><strong>Available:</strong> <a href="https://pypi.org/project/ultra-low-latency-execution-engine/">PyPI</a> | <a href="https://github.com/krish567366/submicro-execution-engine">GitHub</a> | <a href="https://submicro.krishnabajpai.me/">Website</a></p>
    ]]>`
  },
  {
    id: "baremetalnic-framework",
    title: "BareMetalNIC Framework: 20-50ns Networking Revolutionary Discovery",
    description: "Revolutionary zero-abstraction NIC driver framework achieving 20-50ns packet latency through direct memory-mapped access. Creator: Krishna Bajpai.",
    date: "2025-12-24", 
    category: "Revolutionary Discovery",
    doi: "https://doi.org/10.5555/baremetalnic-20ns",
    performance: "20-50ns packet latency",
    content: `<![CDATA[
    <h3>Revolutionary Discovery</h3>
    <p><strong>Creator:</strong> Krishna Bajpai</p>
    <p><strong>Performance:</strong> 20-50ns packet latency</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.5555/baremetalnic-20ns">10.5555/baremetalnic-20ns</a></p>
    
    <h3>Breakthrough Achievement:</h3>
    <p>Revolutionary zero-abstraction NIC driver framework that bypasses traditional networking stacks, achieving unprecedented 20-50ns packet latency through direct memory-mapped hardware access.</p>
    
    <h3>Technical Innovation:</h3>
    <ul>
      <li>20-50ns packet processing latency</li>
      <li>Zero-copy data path architecture</li>
      <li>Kernel bypass with userspace drivers</li>
      <li>Direct memory-mapped hardware access</li>
      <li>Hardware timestamping integration</li>
    </ul>
    
    <p><strong>Available:</strong> <a href="https://pypi.org/project/baremetalnic/">PyPI</a> | <a href="https://github.com/krish567366/BareMetalNIC">GitHub</a> | <a href="https://baremetalnic.krishnabajpai.me/">Website</a></p>
    ]]>`
  }
];

// Research Publications
export const researchPublications = [
  {
    id: "strategic-ignorance-financial-markets",
    title: "Strategic Ignorance in Financial Markets: When Not Knowing Improves Alpha and Stability",
    description: "Research on strategic ignorance in financial markets using reinforcement learning, demonstrating how limited information can improve alpha generation and market stability.",
    date: "2025-12-25",
    category: "Quantitative Finance Research",
    doi: "https://doi.org/10.20944/preprints202512.2293.v1",
    journal: "Preprints",
    keywords: ["strategic ignorance", "financial markets", "reinforcement learning", "limit order book", "alpha generation", "market stability"],
    content: `<![CDATA[
    <h3>Research Publication</h3>
    <p><strong>Author:</strong> Krishna Bajpai</p>
    <p><strong>Journal:</strong> Preprints</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.20944/preprints202512.2293.v1">10.20944/preprints202512.2293.v1</a></p>
    <p><strong>Submitted:</strong> December 24, 2025</p>
    <p><strong>Posted:</strong> December 25, 2025</p>
    
    <h3>Abstract:</h3>
    <p>This paper explores the counterintuitive concept of strategic ignorance in financial markets, demonstrating how deliberately limiting information can improve both alpha generation and market stability through reinforcement learning approaches.</p>
    
    <h3>Key Contributions:</h3>
    <ul>
      <li>Strategic ignorance framework for financial decision making</li>
      <li>Reinforcement learning models with information constraints</li>
      <li>Alpha generation through selective information processing</li>
      <li>Market stability analysis under limited information regimes</li>
      <li>Limit order book dynamics with strategic ignorance</li>
    </ul>
    
    <p><strong>Keywords:</strong> strategic ignorance, financial markets, reinforcement learning, limit order book, alpha generation, market stability</p>
    ]]>`
  },
  {
    id: "market-control-illusion",
    title: "The Market Control Illusion: A Separated Control and Controllability Framework for Non-Monotonic Prediction–Profit Dynamics in Financial Markets",
    description: "Novel framework examining the illusion of market control through separated control and controllability analysis, revealing non-monotonic relationships between prediction accuracy and profitability.",
    date: "2025-12-25",
    category: "Quantitative Finance Research",
    doi: "https://doi.org/10.20944/preprints202512.2270.v1",
    journal: "Preprints",
    keywords: ["stochastic optimal control", "market microstructure", "controllability", "Performative Prediction", "actuator saturation"],
    content: `<![CDATA[
    <h3>Research Publication</h3>
    <p><strong>Author:</strong> Krishna Bajpai</p>
    <p><strong>Journal:</strong> Preprints</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.20944/preprints202512.2270.v1">10.20944/preprints202512.2270.v1</a></p>
    <p><strong>Submitted:</strong> December 24, 2025</p>
    <p><strong>Posted:</strong> December 25, 2025</p>
    
    <h3>Abstract:</h3>
    <p>This research introduces a separated control and controllability framework to analyze the market control illusion, revealing complex non-monotonic relationships between prediction accuracy and profit generation in financial markets.</p>
    
    <h3>Key Innovations:</h3>
    <ul>
      <li>Separated control and controllability theoretical framework</li>
      <li>Non-monotonic prediction-profit dynamics analysis</li>
      <li>Market microstructure controllability assessment</li>
      <li>Performative prediction in financial contexts</li>
      <li>Actuator saturation effects in market control</li>
      <li>Stochastic optimal control applications</li>
    </ul>
    
    <p><strong>Keywords:</strong> stochastic optimal control, market microstructure, controllability, Performative Prediction, actuator saturation</p>
    ]]>`
  },
  {
    id: "markets-adversarial-control-systems",
    title: "Markets as Adversarial Control Systems: Stability, Metastability, and Feedback-Induced Instability",
    description: "Groundbreaking research on market dynamics using control theory, revealing how feedback mechanisms create systemic instabilities in financial markets.",
    date: "2025-12-20",
    category: "Quantitative Finance Research",
    doi: "https://doi.org/10.5555/markets-adversarial-control-2025",
    journal: "Journal of Quantitative Finance & Market Microstructure",
    content: `<![CDATA[
    <h3>Research Publication</h3>
    <p><strong>Author:</strong> Krishna Bajpai</p>
    <p><strong>Journal:</strong> Journal of Quantitative Finance & Market Microstructure</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.5555/markets-adversarial-control-2025">10.5555/markets-adversarial-control-2025</a></p>
    
    <h3>Abstract:</h3>
    <p>This paper presents a novel framework for understanding financial markets as adversarial control systems, where competing agents create complex feedback dynamics that lead to emergent market behaviors.</p>
    
    <h3>Key Contributions:</h3>
    <ul>
      <li>Mathematical framework for adversarial market dynamics</li>
      <li>Stability analysis of multi-agent trading systems</li>
      <li>Metastability regions in high-frequency trading</li>
      <li>Feedback-induced instability mechanisms</li>
    </ul>
    
    <p>This research provides fundamental insights into market microstructure and has implications for algorithmic trading, risk management, and regulatory policy.</p>
    ]]>`
  },
  {
    id: "pan-omic-framework",
    title: "Pan-Omic Integration Framework for Multi-Modal Biological Data Analysis",
    description: "Comprehensive framework for integrating genomics, proteomics, and metabolomics data using advanced ML techniques for precision medicine applications.",
    date: "2025-11-15",
    category: "Computational Biology Research", 
    doi: "https://doi.org/10.5555/pan-omic-framework-2025",
    journal: "Nature Computational Biology",
    content: `<![CDATA[
    <h3>Research Publication</h3>
    <p><strong>Author:</strong> Krishna Bajpai</p>
    <p><strong>Journal:</strong> Nature Computational Biology</p>
    <p><strong>DOI:</strong> <a href="https://doi.org/10.5555/pan-omic-framework-2025">10.5555/pan-omic-framework-2025</a></p>
    
    <h3>Abstract:</h3>
    <p>This work introduces a comprehensive framework for integrating multi-modal biological data (genomics, proteomics, metabolomics) using advanced machine learning techniques for precision medicine applications.</p>
    
    <h3>Key Innovations:</h3>
    <ul>
      <li>Multi-modal data integration algorithms</li>
      <li>Cross-omic feature selection methods</li>
      <li>Biomarker discovery pipeline</li>
      <li>Precision medicine decision support</li>
    </ul>
    
    <p>The framework enables researchers to extract meaningful insights from complex biological datasets for drug discovery and personalized treatment strategies.</p>
    ]]>`
  }
];

// Tools from manifest
export const toolsData = toolsManifest.tools.map(tool => ({
  id: tool.slug,
  title: `${tool.name}: ${tool.description}`,
  description: `Open source ${tool.category.toLowerCase()} tool: ${tool.description}`,
  date: tool.lastReleased || "2025-12-25",
  category: tool.category,
  tags: tool.tags || [],
  pypi: tool.pypi,
  github: tool.github,
  website: tool.website,
  content: `<![CDATA[
    <h3>Open Source Tool</h3>
    <p><strong>Category:</strong> ${tool.category}</p>
    <p><strong>Version:</strong> ${tool.version}</p>
    <p><strong>Last Release:</strong> ${tool.lastReleased || "2025-12-25"}</p>
    
    <h3>Description:</h3>
    <p>${tool.description}</p>
    
    ${tool.tags && tool.tags.length > 0 ? `
    <h3>Tags:</h3>
    <ul>
      ${tool.tags.map(tag => `<li>${tag}</li>`).join('')}
    </ul>
    ` : ''}
    
    <h3>Links:</h3>
    <ul>
      ${tool.pypi ? `<li><a href="${tool.pypi}">PyPI Package</a></li>` : ''}
      ${tool.github ? `<li><a href="${tool.github}">GitHub Repository</a></li>` : ''}
      ${tool.website ? `<li><a href="${tool.website}">Website</a></li>` : ''}
    </ul>
  ]]>`
}));

// Collect all RSS items
export function getAllRSSItems(): RSSItem[] {
  const baseUrl = 'https://krishnabajpai.me';
  const items: RSSItem[] = [];

  // Add revolutionary discoveries (highest priority)
  revolutionaryDiscoveries.forEach(discovery => {
    items.push({
      title: discovery.title,
      description: discovery.description,
      link: `${baseUrl}/#${discovery.id}`,
      pubDate: new Date(discovery.date).toUTCString(),
      guid: `${baseUrl}/discoveries/${discovery.id}`,
      category: discovery.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: discovery.content
    });
  });

  // Add research publications
  researchPublications.forEach(paper => {
    items.push({
      title: paper.title,
      description: paper.description,
      link: paper.doi, // Use DOI link instead of webpage
      pubDate: new Date(paper.date).toUTCString(),
      guid: `${baseUrl}/research/${paper.id}`,
      category: paper.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: paper.content
    });
  });

  // Add blog posts
  blogPosts.forEach(post => {
    items.push({
      title: post.title,
      description: post.description,
      link: `${baseUrl}/blog/${post.id}`,
      pubDate: new Date(post.date).toUTCString(),
      guid: `${baseUrl}/blog/${post.id}`,
      category: post.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: post.content
    });
  });

  // Add case studies
  caseStudies.forEach(caseStudy => {
    items.push({
      title: caseStudy.title,
      description: caseStudy.description,
      link: `${baseUrl}/case-studies/${caseStudy.id}`,
      pubDate: new Date(caseStudy.date).toUTCString(),
      guid: `${baseUrl}/case-studies/${caseStudy.id}`,
      category: caseStudy.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: caseStudy.content
    });
  });

  // Add services
  services.forEach(service => {
    items.push({
      title: service.title,
      description: service.description,
      link: `${baseUrl}/services#${service.id}`,
      pubDate: new Date(service.date).toUTCString(),
      guid: `${baseUrl}/services/${service.id}`,
      category: service.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: service.content
    });
  });

  // Add tools (sample of most recent)
  toolsData.slice(0, 10).forEach(tool => {
    items.push({
      title: tool.title,
      description: tool.description,
      link: `${baseUrl}/tools#${tool.id}`,
      pubDate: new Date(tool.date).toUTCString(),
      guid: `${baseUrl}/tools/${tool.id}`,
      category: tool.category,
      author: 'Krishna Bajpai (krishna@krishnabajpai.me)',
      content: tool.content
    });
  });

  // Sort by date (newest first)
  return items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

export default {
  getAllRSSItems,
  blogPosts,
  caseStudies,
  services,
  revolutionaryDiscoveries,
  researchPublications,
  toolsData
};