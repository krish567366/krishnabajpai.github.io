import React from "react";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/animations.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useGitHubPagesRouting } from "@/hooks/useGitHubPagesRouting";
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

// Import individual case study pages
import ManufacturingCaseStudy from "./pages/case-studies/ManufacturingCaseStudy";
import FintechFraudCaseStudy from "./pages/case-studies/FintechFraudCaseStudy";
import SupplyChainCaseStudy from "./pages/case-studies/SupplyChainCaseStudy";
import HealthcareAutomationCaseStudy from "./pages/case-studies/HealthcareAutomationCaseStudy";
import RealEstateConsortium from "./pages/RealEstateConsortium";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

// Handle GitHub Pages routing
const handleGitHubPagesRouting = () => {
  const redirect = sessionStorage.redirect;
  if (redirect) {
    delete sessionStorage.redirect;
    const cleanRedirect = redirect.replace(window.location.origin, '');
    if (cleanRedirect !== window.location.pathname) {
      window.history.replaceState(null, '', cleanRedirect);
    }
  }
};

const GitHubPagesRouter = ({ children }: { children: React.ReactNode }) => {
  useGitHubPagesRouting();
  return <>{children}</>;
};

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GitHubPagesRouter>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Individual case study routes */}
            <Route path="/case-studies/manufacturing-predictive" element={<ManufacturingCaseStudy />} />
            <Route path="/case-studies/fintech-fraud" element={<FintechFraudCaseStudy />} />
            <Route path="/case-studies/supply-chain" element={<SupplyChainCaseStudy />} />
            <Route path="/case-studies/healthcare-automation" element={<HealthcareAutomationCaseStudy />} />
            <Route path="/real-estate-consortium" element={<RealEstateConsortium />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          </GitHubPagesRouter>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
