import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import LoadingScreen from "./components/LoadingScreen";
import NavigationLoader from "./components/NavigationLoader";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import AppDevelopmentPage from "./pages/services/AppDevelopmentPage";
import AIAutomationPage from "./pages/services/AIAutomationPage";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";
import { motion } from "framer-motion";

const AppContent: React.FC = () => {
  const { isNavigating } = useNavigation();

  return (
    <div className="relative min-h-screen bg-[--main-dark-bg] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/ecommerce-solutions" element={<ComingSoonPage />} />
            <Route path="/services/payment-gateway" element={<ComingSoonPage />} />
            <Route path="/services/payment-orchestration" element={<ComingSoonPage />} />
            <Route path="/services/progressive-web-apps" element={<ComingSoonPage />} />
            <Route path="/services/software-development" element={<ComingSoonPage />} />
            <Route path="/services/api-microservices" element={<ComingSoonPage />} />
            <Route path="/services/ai-automation" element={<AIAutomationPage />} />
            <Route path="/services/white-label-solutions" element={<ComingSoonPage />} />
            <Route path="/services/saas-development" element={<ComingSoonPage />} />
            <Route path="/services/system-integration" element={<ComingSoonPage />} />
            <Route path="/services/ui-ux-design" element={<ComingSoonPage />} />
            <Route path="/services/cloud-operations" element={<ComingSoonPage />} />
            <Route path="/services/software-hardware-development" element={<ComingSoonPage />} />
            <Route path="/services/rd-prototyping" element={<ComingSoonPage />} />
            <Route path="/services/pcb-hardware-design" element={<ComingSoonPage />} />
            <Route path="/services/devops-cicd" element={<ComingSoonPage />} />
            <Route path="/services/seo-optimization" element={<ComingSoonPage />} />
            <Route path="/services/digital-marketing" element={<ComingSoonPage />} />
            <Route path="/services/content-creation" element={<ComingSoonPage />} />
            <Route path="/services/mvp-development" element={<ComingSoonPage />} />
            <Route path="/services/consulting-strategy" element={<ComingSoonPage />} />
            <Route path="/services/data-analytics" element={<ComingSoonPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            {/* Catch all other routes and redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {isNavigating && <NavigationLoader />}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </Router>
  );
}

export default App;
