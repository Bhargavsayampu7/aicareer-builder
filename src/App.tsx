
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technical from "./pages/Technical";
import Templates from "./pages/Templates";
import FresherResume from "./pages/FresherResume";
import ExperiencedResume from "./pages/ExperiencedResume";
import FresherTemplates from "./pages/FresherTemplates";
import ExperiencedTemplates from "./pages/ExperiencedTemplates";
import IndustryTemplates from "./pages/IndustryTemplates";
import BuildIndustryResume from "./pages/BuildIndustryResume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/fresher" element={<FresherResume />} />
          <Route path="/experienced" element={<ExperiencedResume />} />
          <Route path="/fresher-templates" element={<FresherTemplates />} />
          <Route path="/experienced-templates" element={<ExperiencedTemplates />} />
          <Route path="/industry/:industryId" element={<IndustryTemplates />} />
          <Route path="/build/:industryId/:templateId" element={<BuildIndustryResume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
