import React from "react";
import { Toaster } from "@/components/ui/toaster";
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

// Import individual case study pages
import ManufacturingCaseStudy from "./pages/case-studies/ManufacturingCaseStudy";
import FintechFraudCaseStudy from "./pages/case-studies/FintechFraudCaseStudy";
import SupplyChainCaseStudy from "./pages/case-studies/SupplyChainCaseStudy";
import HealthcareAutomationCaseStudy from "./pages/case-studies/HealthcareAutomationCaseStudy";

const queryClient = new QueryClient();

// Handle GitHub Pages routing
const handleGitHubPagesRouting = () => {
  // Get the path from the query parameter that 404.html creates
  const path = window.location.search.slice(1);
  if (path) {
    // Replace the current URL with the clean path
    window.history.replaceState(null, '', path.replace(/~and~/g, '&'));
  }
};

const App = () => {
  // Handle routing for GitHub Pages
  React.useEffect(() => {
    handleGitHubPagesRouting();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
