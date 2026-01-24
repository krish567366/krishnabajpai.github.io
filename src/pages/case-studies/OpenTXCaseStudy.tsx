import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const OpenTXCaseStudy = () => {
  return (
    <Layout>
      <Helmet>
        <title>OpenTX Payment Gateway - Canonical Transaction Protocol | Krishna Bajpai</title>
        <meta name="description" content="Production-grade open-source payment gateway bridging legacy ISO 8583 networks (Visa, Mastercard, NPCI/RuPay) and modern cloud-native systems with Protobuf canonical protocol, full observability, and message security." />
        <meta name="keywords" content="payment gateway, ISO 8583, OpenTX, canonical transaction protocol, Visa integration, Mastercard integration, RuPay integration, NPCI, Protocol Buffers, gRPC, Kafka, OpenTelemetry, FinTech infrastructure, payment network modernization, Krishna Bajpai, event-driven architecture, message security, idempotency, Go programming, payment systems, cloud-native payments" />
        <link rel="canonical" href="https://krishnabajpai.me/case-studies/opentx-payment-gateway" />
        <meta property="og:title" content="OpenTX Payment Gateway - Canonical Transaction Protocol | Krishna Bajpai" />
        <meta property="og:description" content="Production-grade open-source payment gateway bridging legacy ISO 8583 networks and modern cloud-native systems with multi-network support." />
        <meta property="og:url" content="https://krishnabajpai.me/case-studies/opentx-payment-gateway" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://krishnabajpai.me/me.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OpenTX Payment Gateway - Canonical Transaction Protocol | Krishna Bajpai" />
        <meta name="twitter:description" content="Production-grade open-source payment gateway bridging legacy ISO 8583 networks and modern cloud-native systems." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "name": "OpenTX - Canonical Transaction Protocol & Payment Gateway",
            "description": "Production-grade open-source payment gateway bridging legacy ISO 8583 networks and modern cloud-native payment systems",
            "author": {
              "@type": "Person",
              "name": "Krishna Bajpai",
              "url": "https://krishnabajpai.me"
            },
            "programmingLanguage": "Go",
            "codeRepository": "https://github.com/krish567366/OpenTX",
            "license": "https://opensource.org/licenses/MIT",
            "datePublished": "2026-01-24",
            "keywords": "payment gateway, ISO 8583, Protocol Buffers, gRPC, Kafka, OpenTelemetry, FinTech, multi-network support"
          }
        `}</script>
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
                  <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-muted-foreground">/</span>
                  <span className="text-sm text-foreground">OpenTX Payment Gateway</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Case Study Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl font-light text-foreground mb-6">
              OpenTX - Canonical Transaction Protocol &{" "}
              <span className="font-sketch font-bold relative">
                Payment Gateway
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Production-grade open-source payment gateway bridging legacy ISO 8583 networks and modern cloud-native systems
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Go</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Protocol Buffers</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Kafka</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">OpenTelemetry</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Docker</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Kubernetes</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">gRPC</span>
              <span className="text-xs bg-wireframe-light px-2 py-1 rounded">ISO 8583</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/krish567366/OpenTX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                MIT License
              </span>
            </div>
          </div>
          
          <div className="bg-secondary p-6 border border-border relative">
            <div className="font-sketch text-sm text-sketch absolute -top-2 -right-2 bg-background px-3 py-1 border border-border rotate-3">
              Project Summary
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Project</h3>
                <p className="text-foreground">OpenTX - Open Source</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Industry</h3>
                <p className="text-foreground">FinTech / Payment Systems</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Status</h3>
                <p className="text-foreground">Active Open Source Project</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-medium">Key Achievement</h3>
                <p className="text-foreground">Multi-network payment protocol with full observability</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Legacy ISO 8583 payment networks lack modern cloud-native integration capabilities, making it extremely difficult for fintech companies to connect to card networks like Visa, Mastercard, and NPCI/RuPay. There was no standardized canonical transaction model that could work across all these networks.
              </p>
              <div className="bg-wireframe-light p-8 border border-dashed border-border">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Key Problems:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Each payment network has its own ISO 8583 variant</li>
                    <li>No unified data model for transactions across networks</li>
                    <li>Lack of modern observability and monitoring</li>
                    <li>Complex EMV TLV data parsing challenges</li>
                    <li>No message-level security independent of transport</li>
                    <li>Difficult to ensure exactly-once processing semantics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Approach Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Architecture & Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Built a production-grade payment gateway with a Protobuf-first canonical transaction protocol, pluggable network adapters, comprehensive security, and modern observability.
              </p>
              <div className="space-y-4">
                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">1. Canonical Transaction Protocol</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Designed a Protobuf-first schema with semantic field names that models all ISO 8583 semantics. This provides strong typing, versioning, and validation while maintaining compatibility with legacy systems.
                  </p>
                  <div className="bg-secondary p-3 rounded font-mono text-xs overflow-x-auto">
                    <pre>{`message CanonicalTransaction {
  string schema_version = 1;
  string message_id = 2;
  string correlation_id = 3;
  MessageMetadata metadata = 4;
  
  oneof transaction_type {
    AuthorizationRequest auth_request = 10;
    AuthorizationResponse auth_response = 11;
    ReversalRequest reversal_request = 12;
  }
  
  SecurityEnvelope security = 20;
  string idempotency_key = 21;
  TransactionState state = 22;
}`}</pre>
                  </div>
                </div>

                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">2. Multi-Network Support</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Implemented pluggable packagers for Visa, Mastercard, and NPCI/RuPay networks with bidirectional mapping between ISO 8583 and canonical format.
                  </p>
                  <div className="bg-secondary p-3 rounded font-mono text-xs overflow-x-auto">
                    <pre>{`// Visa packager
visaPackager := packager.NewVisaPackager()
isoMsg, err := visaPackager.Unpack(rawBytes)

// Mastercard packager
mcPackager := packager.NewMastercardPackager()
isoMsg, err := mcPackager.Unpack(rawBytes)

// Bidirectional mapping
mapper := mapper.NewGenericMapper("VISA")
canonical, err := mapper.ToCanonical(isoMsg)
isoMsg, err := mapper.FromCanonical(canonical)`}</pre>
                  </div>
                </div>

                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">3. Security & Idempotency</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented message-level encryption (AES-256-GCM), digital signatures (RSA-PSS), anti-replay protection, and exactly-once semantics with state machine for transaction processing.
                  </p>
                </div>

                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">4. Full Observability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrated OpenTelemetry for distributed tracing, Prometheus for metrics, and structured logging. Pre-configured Grafana dashboards for transaction volume, latency percentiles, and error rates.
                  </p>
                </div>

                <div className="bg-background border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-2">5. Event-Driven Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kafka-based event streaming for downstream integration with fraud detection systems, reconciliation, and analytics platforms.
                  </p>
                </div>
              </div>
            </section>

            {/* Architecture Diagram */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">System Architecture</h2>
              <div className="bg-secondary p-6 border border-border">
                <pre className="text-xs overflow-x-auto">
{`┌─────────────────────────────────────────────────────────┐
│              External Networks                           │
├──────────┬──────────┬─────────┬────────────────────────┤
│ Visa     │ MC       │ RuPay   │ Bank Networks          │
└────┬─────┴────┬─────┴────┬────┴────┬──────────────────┘
     │ ISO 8583 │ ISO 8583 │ ISO 8583│ ISO 8583
     ▼          ▼          ▼         ▼
┌─────────────────────────────────────────────────────────┐
│       ISO 8583 Parsing & Packing Layer                  │
│  • Variant-specific packagers  • EMV TLV parsing        │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│     Canonical Transaction Protocol (Protobuf)           │
│  • Versioned Schema  • Strong Typing  • Validation      │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│         Security & Idempotency Layer                    │
│  • Message Encryption/Signing  • Exactly-Once           │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│      Event Stream & API Layer                           │
│  gRPC │ REST │ Kafka │ WebSocket                        │
└─────────────────────────────────────────────────────────┘`}
                </pre>
              </div>
            </section>

            {/* Results Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Key Features & Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary p-4 border border-border">
                  <div className="text-2xl font-light text-foreground mb-2">Multi-Network</div>
                  <div className="text-sm text-muted-foreground">Visa, Mastercard, NPCI/RuPay support</div>
                </div>
                <div className="bg-secondary p-4 border border-border">
                  <div className="text-2xl font-light text-foreground mb-2">Protobuf-First</div>
                  <div className="text-sm text-muted-foreground">Canonical transaction schema</div>
                </div>
                <div className="bg-secondary p-4 border border-border">
                  <div className="text-2xl font-light text-foreground mb-2">Production-Ready</div>
                  <div className="text-sm text-muted-foreground">Circuit breakers, rate limiting, health checks</div>
                </div>
                <div className="bg-secondary p-4 border border-border">
                  <div className="text-2xl font-light text-foreground mb-2">Full Observability</div>
                  <div className="text-sm text-muted-foreground">OpenTelemetry, Prometheus, Grafana</div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Use Cases</h2>
              <div className="space-y-3">
                <div className="bg-background border border-border p-4">
                  <h3 className="font-medium text-foreground mb-2">Payment Network Modernization</h3>
                  <p className="text-muted-foreground text-sm">Replace legacy ISO 8583 infrastructure with cloud-native systems</p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="font-medium text-foreground mb-2">Fintech Integration</h3>
                  <p className="text-muted-foreground text-sm">Enable cloud-native apps to connect to card networks seamlessly</p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="font-medium text-foreground mb-2">Multi-Network Aggregation</h3>
                  <p className="text-muted-foreground text-sm">Single API for multiple payment networks with unified data model</p>
                </div>
                <div className="bg-background border border-border p-4">
                  <h3 className="font-medium text-foreground mb-2">Real-Time Analytics</h3>
                  <p className="text-muted-foreground text-sm">Event streaming for fraud detection, reconciliation, and business intelligence</p>
                </div>
              </div>
            </section>

            {/* Technical Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-foreground">Technical Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3">Core Technologies</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Go 1.21+ for high performance
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Protocol Buffers for schema
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Docker & Kubernetes deployment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      gRPC & REST APIs
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3">Observability Stack</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      OpenTelemetry for tracing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Prometheus for metrics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Grafana dashboards
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Jaeger for distributed tracing
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Stats */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-light text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Network Adapters</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">Open Source</div>
                  <div className="text-sm text-muted-foreground">MIT License</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">Production</div>
                  <div className="text-sm text-muted-foreground">Grade Quality</div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Go</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Protocol Buffers</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Kafka</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">OpenTelemetry</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Prometheus</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Grafana</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Docker</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">Kubernetes</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">gRPC</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">REST</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">ISO 8583</span>
                <span className="text-xs bg-wireframe-light px-2 py-1 rounded">EMV</span>
              </div>
            </div>

            {/* Links */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Resources</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/krish567366/OpenTX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repository
                </a>
                <a 
                  href="https://github.com/krish567366/OpenTX#documentation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-accent hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Next Case Study */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <div className="text-sm text-muted-foreground">Next Case Study</div>
              <Link to="/case-studies/manufacturing-case-study" className="text-xl font-medium text-foreground hover:text-accent transition-colors">
                Manufacturing Predictive Maintenance →
              </Link>
            </div>
            <Link to="/case-studies">
              <Button variant="outline" className="mt-4 md:mt-0">View All Case Studies</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OpenTXCaseStudy;
