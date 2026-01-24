import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            
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
            
            {/* Case Study Pages */}
            <Route path="/case-studies/manufacturing-case-study" element={<ManufacturingCaseStudy />} />
            <Route path="/case-studies/fintech-fraud-case-study" element={<FintechFraudCaseStudy />} />
            <Route path="/case-studies/supply-chain-case-study" element={<SupplyChainCaseStudy />} />
            <Route path="/case-studies/healthcare-automation-case-study" element={<HealthcareAutomationCaseStudy />} />
            <Route path="/case-studies/opentx-payment-gateway" element={<OpenTXCaseStudy />} />
            
            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
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
