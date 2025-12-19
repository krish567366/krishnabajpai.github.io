import React from 'react';
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const N8nWorkflowEditor = () => {
  return (
    <>
      <Helmet>
        <title>How I Built a Full n8n-Style Workflow Editor Using React Flow + FastAPI | Krishna Bajpai</title>
        <meta name="description" content="Complete guide to building a workflow automation platform from scratch using React Flow and FastAPI. Architecture decisions, challenges, and solutions for a production-ready workflow editor." />
        <meta name="keywords" content="n8n workflow editor, React Flow, FastAPI, workflow automation, drag and drop, visual programming, Krishna Bajpai" />
        <link rel="canonical" href="https://krishnabajpai.me/blog/n8n-workflow-editor-react-flow" />
        <meta property="og:title" content="How I Built a Full n8n-Style Workflow Editor Using React Flow + FastAPI" />
        <meta property="og:description" content="Complete guide to building a workflow automation platform with React Flow and FastAPI" />
        <meta property="og:url" content="https://krishnabajpai.me/blog/n8n-workflow-editor-react-flow" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How I Built a Full n8n-Style Workflow Editor Using React Flow + FastAPI",
            "description": "Complete guide to building a workflow automation platform from scratch using React Flow and FastAPI. Architecture decisions, challenges, and solutions for a production-ready workflow editor.",
            "image": "https://krishnabajpai.me/assets/hero-flow.png",
            "author": {
              "@type": "Person",
              "name": "Krishna Bajpai",
              "url": "https://krishnabajpai.me",
              "sameAs": [
                "https://www.linkedin.com/in/krishnabajpai/",
                "https://github.com/krishnabajpai",
                "https://scholar.google.com/citations?user=zhQAzQoAAAAJ",
                "https://www.wikidata.org/wiki/Q137462720",
                "https://orcid.org/0009-0006-5618-1834"
              ]
            },
            "publisher": {
              "@type": "Person",
              "name": "Krishna Bajpai",
              "url": "https://krishnabajpai.me"
            },
            "datePublished": "2025-11-15T08:00:00Z",
            "dateModified": "2025-11-17T12:00:00Z",
            "url": "https://krishnabajpai.me/blog/n8n-workflow-editor-react-flow",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://krishnabajpai.me/blog/n8n-workflow-editor-react-flow"
            },
            "articleSection": "Web Development",
            "wordCount": 2800,
            "timeRequired": "PT12M",
            "keywords": ["n8n", "workflow editor", "React Flow", "FastAPI", "automation", "drag and drop", "workflow automation"],
            "about": [
              {
                "@type": "Thing",
                "name": "Workflow Automation"
              },
              {
                "@type": "Thing", 
                "name": "React Flow"
              },
              {
                "@type": "Thing",
                "name": "FastAPI"
              }
            ],
            "inLanguage": "en-US"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://krishnabajpai.me"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://krishnabajpai.me/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "How I Built a Full n8n-Style Workflow Editor",
                "item": "https://krishnabajpai.me/blog/n8n-workflow-editor-react-flow"
              }
            ]
          }
        `}</script>
      </Helmet>
      
      <Layout>
        <div className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link to="/blog" className="text-accent hover:text-foreground">
                  ← Back to Blog
                </Link>
              </nav>

              {/* Article Header */}
              <header className="mb-12">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Web Development
                  </span>
                </div>
                <h1 className="text-4xl font-light text-foreground mb-6 leading-tight">
                  How I Built a Full n8n-Style Workflow Editor Using React Flow + FastAPI
                </h1>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <span>November 15, 2025</span>
                  <span>•</span>
                  <span>12 min read</span>
                  <span>•</span>
                  <span>Krishna Bajpai</span>
                </div>
              </header>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none text-foreground">
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  Building a visual workflow editor like n8n from scratch seemed daunting, but with React Flow and FastAPI, 
                  it became an exciting challenge. Here's how I architected and built a production-ready workflow automation 
                  platform that handles complex data transformations and integrations.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">The Challenge</h2>
                <p className="mb-6">
                  When tasked with building a custom workflow automation platform for a client, I needed to create something 
                  that could compete with established tools like n8n, Zapier, and Microsoft Power Automate. The requirements were clear:
                </p>
                
                <ul className="list-disc list-inside mb-8 space-y-2 text-muted-foreground">
                  <li>Visual drag-and-drop workflow designer</li>
                  <li>Real-time execution monitoring</li>
                  <li>Custom node creation capabilities</li>
                  <li>Integration with 50+ third-party services</li>
                  <li>Scalable execution engine</li>
                  <li>Advanced debugging and logging</li>
                </ul>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Architecture Overview</h2>
                <p className="mb-6">
                  I chose a modern stack that would provide flexibility and scalability:
                </p>

                <div className="bg-secondary p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium text-foreground mb-4">Tech Stack</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Frontend:</strong> React 18 + TypeScript + React Flow</li>
                    <li><strong>Backend:</strong> FastAPI + Python 3.11</li>
                    <li><strong>Database:</strong> PostgreSQL + Redis</li>
                    <li><strong>Message Queue:</strong> Celery + Redis</li>
                    <li><strong>Deployment:</strong> Docker + Kubernetes</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Frontend: React Flow Magic</h2>
                <p className="mb-6">
                  React Flow proved to be the perfect choice for building the visual editor. Here's how I structured the key components:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-medium text-foreground mb-4">Custom Node System</h3>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`// Custom node component with dynamic input/output handles
const WorkflowNode = ({ data, selected }) => {
  const { nodeType, inputs, outputs, status } = data;
  
  return (
    <div className={\`workflow-node \${nodeType} \${status}\`}>
      {inputs.map((input, idx) => (
        <Handle
          key={idx}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: input.position }}
        />
      ))}
      
      <NodeContent data={data} />
      
      {outputs.map((output, idx) => (
        <Handle
          key={idx}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: output.position }}
        />
      ))}
    </div>
  );
};`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Backend: FastAPI Excellence</h2>
                <p className="mb-6">
                  The FastAPI backend handles workflow execution, node management, and API integrations. 
                  Here's the core workflow execution engine:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`@app.post("/workflows/{workflow_id}/execute")
async def execute_workflow(
    workflow_id: str,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    workflow = await get_workflow(db, workflow_id)
    
    # Create execution context
    execution = WorkflowExecution(
        workflow_id=workflow_id,
        status=ExecutionStatus.RUNNING,
        started_at=datetime.utcnow()
    )
    
    # Queue workflow for async execution
    task = execute_workflow_async.delay(workflow.to_dict())
    execution.task_id = task.id
    
    db.add(execution)
    await db.commit()
    
    return {"execution_id": execution.id, "status": "queued"}`}</code>
                  </pre>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Key Challenges & Solutions</h2>
                
                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">1. Real-time Execution Monitoring</h3>
                <p className="mb-6">
                  Users needed to see their workflows executing in real-time. I implemented WebSocket connections 
                  with Redis pub/sub for live updates:
                </p>

                <div className="bg-background border border-border p-6 rounded-lg mb-8">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`// WebSocket handler for real-time updates
@app.websocket("/ws/execution/{execution_id}")
async def websocket_endpoint(websocket: WebSocket, execution_id: str):
    await websocket.accept()
    
    async def redis_listener():
        pubsub = redis_client.pubsub()
        await pubsub.subscribe(f"execution:{execution_id}")
        
        async for message in pubsub.listen():
            if message['type'] == 'message':
                await websocket.send_json(json.loads(message['data']))
    
    await redis_listener()`}</code>
                  </pre>
                </div>

                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">2. Dynamic Node Creation</h3>
                <p className="mb-6">
                  The system needed to support custom nodes without code changes. I created a plugin architecture 
                  with JSON-defined node schemas and Python execution modules.
                </p>

                <h3 className="text-xl font-medium text-foreground mt-8 mb-4">3. Error Handling & Retry Logic</h3>
                <p className="mb-6">
                  Workflows needed robust error handling with configurable retry policies, exponential backoff, 
                  and dead letter queues for failed executions.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Performance Optimizations</h2>
                
                <ul className="list-disc list-inside mb-8 space-y-2 text-muted-foreground">
                  <li><strong>Frontend:</strong> Virtual scrolling for large workflows, memoized components, lazy loading</li>
                  <li><strong>Backend:</strong> Connection pooling, caching with Redis, database query optimization</li>
                  <li><strong>Execution:</strong> Parallel node execution, worker scaling, resource monitoring</li>
                </ul>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Results & Metrics</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">10k+</div>
                    <div className="text-sm text-muted-foreground">Workflows/day</div>
                  </div>
                  <div className="bg-secondary p-6 text-center">
                    <div className="text-2xl font-bold text-accent mb-2">50ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                </div>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Lessons Learned</h2>
                
                <ol className="list-decimal list-inside mb-8 space-y-4 text-muted-foreground">
                  <li><strong>Start with a solid data model:</strong> Workflow representation is crucial for everything else</li>
                  <li><strong>Design for debugging:</strong> Comprehensive logging and monitoring save countless hours</li>
                  <li><strong>Plan for scale early:</strong> Async execution and proper queuing are essential</li>
                  <li><strong>User experience matters:</strong> Intuitive UI/UX can make or break adoption</li>
                </ol>

                <h2 className="text-2xl font-medium text-foreground mt-12 mb-6">Next Steps</h2>
                <p className="mb-6">
                  The platform is now in production serving thousands of workflows daily. Future enhancements include:
                </p>
                
                <ul className="list-disc list-inside mb-8 space-y-2 text-muted-foreground">
                  <li>AI-powered workflow suggestions</li>
                  <li>Advanced analytics and insights</li>
                  <li>Collaborative editing features</li>
                  <li>Mobile workflow management</li>
                </ul>

                <div className="border-t border-border pt-8 mt-12">
                  <p className="text-muted-foreground">
                    Want to discuss workflow automation or need help building similar systems? 
                    <Link to="/contact" className="text-accent hover:text-foreground ml-1">
                      Get in touch →
                    </Link>
                  </p>
                </div>
              </article>

              {/* Related Articles */}
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-xl font-medium text-foreground mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link to="/blog/nvidia-parakeet-production-deployment" className="block p-6 border border-border hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-2">Deploying NVIDIA Parakeet RNNT 1.1B in Production</h4>
                    <p className="text-sm text-muted-foreground">Real-world experience deploying NVIDIA's ASR model at scale</p>
                  </Link>
                  <Link to="/blog/ai-hrms-system-architecture" className="block p-6 border border-border hover:border-accent transition-colors">
                    <h4 className="font-medium text-foreground mb-2">Designing an AI HRMS System Equal to Keka</h4>
                    <p className="text-sm text-muted-foreground">Complete architectural breakdown of enterprise HRMS</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default N8nWorkflowEditor;