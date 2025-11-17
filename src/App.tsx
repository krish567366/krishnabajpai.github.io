import React from "react";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/animations.css";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import ToolDetail from "./pages/ToolDetail";
import QuantumComputingAIVideo from "./pages/videos/QuantumComputingAIVideo";
import AIArchitectureService from "./pages/services/AIArchitectureService";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";

// Import individual case study pages
import ManufacturingCaseStudy from "./pages/case-studies/ManufacturingCaseStudy";
import FintechFraudCaseStudy from "./pages/case-studies/FintechFraudCaseStudy";
import SupplyChainCaseStudy from "./pages/case-studies/SupplyChainCaseStudy";
import HealthcareAutomationCaseStudy from "./pages/case-studies/HealthcareAutomationCaseStudy";
import RealEstateConsortium from "./pages/RealEstateConsortium";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import ConsortiumApplication from "./pages/ConsortiumApplication";
import ConsortiumProcess from "./pages/ConsortiumProcess";

// Import blog pages
import Blog from "./pages/Blog";
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

const queryClient = new QueryClient();

// Simple wrapper component for the app
const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppWrapper>
            <TrailingSlashRedirect />
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:slug" element={<ToolDetail />} />
            <Route path="/videos/quantum-computing-ai" element={<QuantumComputingAIVideo />} />
            <Route path="/services/ai-architecture" element={<AIArchitectureService />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Individual case study routes */}
            <Route path="/case-studies/manufacturing-case-study" element={<ManufacturingCaseStudy />} />
            <Route path="/case-studies/fintech-fraud-case-study" element={<FintechFraudCaseStudy />} />
            <Route path="/case-studies/supply-chain-case-study" element={<SupplyChainCaseStudy />} />
            <Route path="/case-studies/healthcare-automation-case-study" element={<HealthcareAutomationCaseStudy />} />
            <Route path="/real-estate-consortium" element={<RealEstateConsortium />} />
            <Route path="/consortium-application" element={<ConsortiumApplication />} />
            <Route path="/consortium-process" element={<ConsortiumProcess />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Blog routes */}
            <Route path="/blog" element={<Blog />} />
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
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AppWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
