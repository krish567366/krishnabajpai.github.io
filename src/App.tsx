import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "@/styles/animations.css";

// Components
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";

// Main Pages
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import ResearchDetail from "./pages/ResearchDetail";
import DiscoveryDetail from "./pages/DiscoveryDetail";
import Press from "./pages/Press";
import AboutKrishnaBajpai from "./pages/AboutKrishnaBajpai";

// Specialized Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import RealEstateConsortium from "./pages/RealEstateConsortium";
import ConsortiumApplication from "./pages/ConsortiumApplication";
import ConsortiumProcess from "./pages/ConsortiumProcess";

// Video Pages
import QuantumComputingAIVideo from "./pages/videos/QuantumComputingAIVideo";

// Service Pages
import AIArchitectureService from "./pages/services/AIArchitectureService";

// Case Study Pages
import ManufacturingCaseStudy from "./pages/case-studies/ManufacturingCaseStudy";
import FintechFraudCaseStudy from "./pages/case-studies/FintechFraudCaseStudy";
import SupplyChainCaseStudy from "./pages/case-studies/SupplyChainCaseStudy";
import HealthcareAutomationCaseStudy from "./pages/case-studies/HealthcareAutomationCaseStudy";
import OpenTXCaseStudy from "./pages/case-studies/OpenTXCaseStudy";

// Blog Pages
import Blog from "./pages/Blog";
import AirportMLOptimization from "./pages/blog/AirportMLOptimization";
import N8nWorkflowEditor from "./pages/blog/N8nWorkflowEditor";
import NvidiaParakeetDeployment from "./pages/blog/NvidiaParakeetDeployment";
import HybridQuantumOptimization from "./pages/blog/HybridQuantumOptimization";
import AIHRMSSystemDesign from "./pages/blog/AIHRMSSystemDesign";
import ChurnPredictionMLSolution from "./pages/blog/ChurnPredictionMLSolution";
import ComputerVisionQualityControl from "./pages/blog/ComputerVisionQualityControl";
import NLPSentimentAnalysisEcommerce from "./pages/blog/NLPSentimentAnalysisEcommerce";
import TimeSeriesSupplyChainForecasting from "./pages/blog/TimeSeriesSupplyChainForecasting";
import FraudDetectionRealTimeML from "./pages/blog/FraudDetectionRealTimeML";
import RecommendationSystemScaling from "./pages/blog/RecommendationSystemScaling";

// 2026 Trend Series
import AIAgentsMultiAgentSystems from "./pages/blog/AIAgentsMultiAgentSystems";
import DomainSpecificAI from "./pages/blog/DomainSpecificAI";
import DigitalCoworkers from "./pages/blog/DigitalCoworkers";
import QuantumAIOptimization from "./pages/blog/QuantumAIOptimization";
import ClimateTechSustainabilityAI from "./pages/blog/ClimateTechSustainabilityAI";
import AICybersecurity from "./pages/blog/AICybersecurity";
import AIHealthcareBiotech from "./pages/blog/AIHealthcareBiotech";
import NoCodeAICoding from "./pages/blog/NoCodeAICoding";
import GenerativeAIVideo3D from "./pages/blog/GenerativeAIVideo3D";
import HyperPersonalization from "./pages/blog/HyperPersonalization";
import PhysicalAIRobotsDrones from "./pages/blog/PhysicalAIRobotsDrones";
import PrivacyConfidentialComputing from "./pages/blog/PrivacyConfidentialComputing";
import AIWillReplaceJob2026 from "./pages/blog/AIWillReplaceJob2026";
import BuiltStartupUsingOnlyAI from "./pages/blog/BuiltStartupUsingOnlyAI";
import Top5AIToolsNoOneTalkingAbout from "./pages/blog/Top5AIToolsNoOneTalkingAbout";
import QuantumAIExplained60Seconds from "./pages/blog/QuantumAIExplained60Seconds";
import FutureOfJobsWithAIAgents from "./pages/blog/FutureOfJobsWithAIAgents";

// RSS Pages
import RSSFeedPage from "./pages/RSSFeedPage";
import RSSEndpoint from "./pages/RSSEndpoint";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TrailingSlashRedirect />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/krishna-bajpai" element={<AboutKrishnaBajpai />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/press" element={<Press />} />
            
            {/* Specialized Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/real-estate-consortium" element={<RealEstateConsortium />} />
            <Route path="/consortium-application" element={<ConsortiumApplication />} />
            <Route path="/consortium-process" element={<ConsortiumProcess />} />
            
            {/* Video Pages */}
            <Route path="/videos/quantum-computing-ai" element={<QuantumComputingAIVideo />} />
            
            {/* Service Pages */}
            <Route path="/services/ai-architecture" element={<AIArchitectureService />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            
            {/* Case Study Pages */}
            <Route path="/case-studies/manufacturing-case-study" element={<ManufacturingCaseStudy />} />
            <Route
              path="/case-studies/manufacturing-predictive"
              element={<Navigate to="/case-studies/manufacturing-case-study" replace />}
            />
            <Route path="/case-studies/fintech-fraud-case-study" element={<FintechFraudCaseStudy />} />
            <Route path="/case-studies/supply-chain-case-study" element={<SupplyChainCaseStudy />} />
            <Route path="/case-studies/healthcare-automation-case-study" element={<HealthcareAutomationCaseStudy />} />
            <Route path="/case-studies/opentx-payment-gateway" element={<OpenTXCaseStudy />} />

            {/* Research & Discoveries */}
            <Route path="/research/:slug" element={<ResearchDetail />} />
            <Route path="/discoveries/:slug" element={<DiscoveryDetail />} />
            
            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-agents-multi-agent-systems" element={<AIAgentsMultiAgentSystems />} />
            <Route path="/blog/domain-specific-ai-dslms" element={<DomainSpecificAI />} />
            <Route path="/blog/ai-digital-coworkers" element={<DigitalCoworkers />} />
            <Route path="/blog/quantum-ai-optimization-frontier" element={<QuantumAIOptimization />} />
            <Route path="/blog/climate-tech-sustainability-ai" element={<ClimateTechSustainabilityAI />} />
            <Route path="/blog/ai-cybersecurity-defense" element={<AICybersecurity />} />
            <Route path="/blog/ai-healthcare-biotech" element={<AIHealthcareBiotech />} />
            <Route path="/blog/no-code-ai-coding" element={<NoCodeAICoding />} />
            <Route path="/blog/generative-ai-video-3d" element={<GenerativeAIVideo3D />} />
            <Route path="/blog/hyper-personalization-ai" element={<HyperPersonalization />} />
            <Route path="/blog/physical-ai-robots-drones" element={<PhysicalAIRobotsDrones />} />
            <Route path="/blog/privacy-confidential-computing-ai" element={<PrivacyConfidentialComputing />} />
            <Route path="/blog/ai-will-replace-x-job-2026" element={<AIWillReplaceJob2026 />} />
            <Route path="/blog/built-startup-using-only-ai" element={<BuiltStartupUsingOnlyAI />} />
            <Route path="/blog/top-5-ai-tools-no-one-talking-about" element={<Top5AIToolsNoOneTalkingAbout />} />
            <Route path="/blog/quantum-ai-explained-60-seconds" element={<QuantumAIExplained60Seconds />} />
            <Route path="/blog/future-of-jobs-with-ai-agents" element={<FutureOfJobsWithAIAgents />} />
            <Route path="/blog/airport-ml-optimization" element={<AirportMLOptimization />} />
            <Route path="/blog/n8n-workflow-editor-react-flow" element={<N8nWorkflowEditor />} />
            <Route path="/blog/nvidia-parakeet-production-deployment" element={<NvidiaParakeetDeployment />} />
            <Route path="/blog/hybrid-quantum-optimization-library" element={<HybridQuantumOptimization />} />
            <Route path="/blog/ai-hrms-system-design" element={<AIHRMSSystemDesign />} />
            <Route path="/blog/churn-prediction-ml-solution" element={<ChurnPredictionMLSolution />} />
            <Route path="/blog/computer-vision-quality-control" element={<ComputerVisionQualityControl />} />
            <Route path="/blog/nlp-sentiment-analysis-ecommerce" element={<NLPSentimentAnalysisEcommerce />} />
            <Route path="/blog/time-series-supply-chain-forecasting" element={<TimeSeriesSupplyChainForecasting />} />
            <Route path="/blog/fraud-detection-real-time-ml" element={<FraudDetectionRealTimeML />} />
            <Route path="/blog/recommendation-system-scaling" element={<RecommendationSystemScaling />} />
            
            {/* RSS Feed Pages */}
            <Route path="/rss-feed" element={<RSSFeedPage />} />
            <Route path="/rss" element={<RSSEndpoint />} />
            <Route path="/feed" element={<RSSFeedPage />} />
            
            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
