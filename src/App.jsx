
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { authMiddleware } from "./middleware/authMiddleware";
import { LanguageProvider } from "./contexts/LanguageContext";

// Initialize Query Client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Auth wrapper component
const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check authentication status when app loads
    authMiddleware.checkAuthStatus();
  }, [navigate]);
  
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthWrapper>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
