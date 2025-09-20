import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import ECommercePage from "./pages/services/ECommercePage";
import PaymentGatewayPage from "./pages/services/PaymentGatewayPage";
import SoftwareDevelopmentPage from "./pages/services/SoftwareDevelopmentPage";
import UIUXDesignPage from "./pages/services/UIUXDesignPage";
import APIMicroservicesPage from "./pages/services/APIMicroservicesPage";
import CloudOperationsPage from "./pages/services/CloudOperationsPage";
import SaaSDevelopmentPage from "./pages/services/SaaSDevelopmentPage";
import MVPDevelopmentPage from "./pages/services/MVPDevelopmentPage";
import ProgressiveWebAppsPage from "./pages/services/ProgressiveWebAppsPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import SEOOptimizationPage from "./pages/services/SEOOptimizationPage";
import DataAnalyticsPage from "./pages/services/DataAnalyticsPage";
import PaymentOrchestrationPage from "./pages/services/PaymentOrchestrationPage";
import WhiteLabelPage from "./pages/services/WhiteLabelPage";
import SystemIntegrationPage from "./pages/services/SystemIntegrationPage";
import DevOpsCICDPage from "./pages/services/DevOpsCICDPage";
import ContentCreationPage from "./pages/services/ContentCreationPage";
import ConsultingStrategyPage from "./pages/services/ConsultingStrategyPage";
import SoftwareHardwarePage from "./pages/services/SoftwareHardwarePage";
import RDPrototypingPage from "./pages/services/RDPrototypingPage";
import PCBHardwareDesignPage from "./pages/services/PCBHardwareDesignPage";
import BookMeetingPage from "./pages/BookMeetingPage";
import LabsCareersComingSoon from "./pages/LabsCareersComingSoon";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import {
  NavigationProvider,
  useNavigation,
} from "./contexts/NavigationContext";
import { motion } from "framer-motion";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import CookieConsent from "./components/CookieConsent";
import { initializeGA, trackPageView, hasAnalyticsConsent, debugAnalytics } from "./lib/analytics";

const AppContent: React.FC = () => {
  const { isNavigating } = useNavigation();
  const location = useLocation();

  // Track page views when location changes
  useEffect(() => {
    // Initialize GA if user has already given consent
    if (hasAnalyticsConsent()) {
      initializeGA();
    }

    // Debug analytics in development
    debugAnalytics();
  }, []);

  // Track page changes
  useEffect(() => {
    if (hasAnalyticsConsent()) {
      const path = location.pathname + location.search;
      const title = document.title;
      trackPageView(path, title);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-[--main-dark-bg] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
      {/* Header rendered outside of relative z-10 container to ensure it's always on top */}
      <Header />
      <div className="relative z-10">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/web-development"
              element={<WebDevelopmentPage />}
            />
            <Route
              path="/services/app-development"
              element={<AppDevelopmentPage />}
            />
            <Route
              path="/services/ecommerce-solutions"
              element={<ECommercePage />}
            />
            <Route
              path="/services/payment-gateway"
              element={<PaymentGatewayPage />}
            />
            <Route
              path="/services/payment-orchestration"
              element={<PaymentOrchestrationPage />}
            />
            <Route
              path="/services/progressive-web-apps"
              element={<ProgressiveWebAppsPage />}
            />
            <Route
              path="/services/software-development"
              element={<SoftwareDevelopmentPage />}
            />
            <Route
              path="/services/api-microservices"
              element={<APIMicroservicesPage />}
            />
            <Route
              path="/services/ai-automation"
              element={<AIAutomationPage />}
            />
            <Route
              path="/services/white-label-solutions"
              element={<WhiteLabelPage />}
            />
            <Route
              path="/services/saas-development"
              element={<SaaSDevelopmentPage />}
            />
            <Route
              path="/services/system-integration"
              element={<SystemIntegrationPage />}
            />
            <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
            <Route
              path="/services/cloud-operations"
              element={<CloudOperationsPage />}
            />
            <Route
              path="/services/software-hardware-development"
              element={<SoftwareHardwarePage />}
            />
            <Route
              path="/services/rd-prototyping"
              element={<RDPrototypingPage />}
            />
            <Route
              path="/services/pcb-hardware-design"
              element={<PCBHardwareDesignPage />}
            />
            <Route path="/services/devops-cicd" element={<DevOpsCICDPage />} />
            <Route
              path="/services/seo-optimization"
              element={<SEOOptimizationPage />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketingPage />}
            />
            <Route
              path="/services/content-creation"
              element={<ContentCreationPage />}
            />
            <Route
              path="/services/mvp-development"
              element={<MVPDevelopmentPage />}
            />
            <Route
              path="/services/consulting-strategy"
              element={<ConsultingStrategyPage />}
            />
            <Route
              path="/services/data-analytics"
              element={<DataAnalyticsPage />}
            />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-meeting" element={<BookMeetingPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route
              path="/labs-careers-coming-soon"
              element={<LabsCareersComingSoon />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            {/* Catch all other routes and redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {isNavigating && <NavigationLoader />}
      <CookieConsent />
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
        <SmoothScrollProvider>
          <AppContent />
        </SmoothScrollProvider>
      </NavigationProvider>
    </Router>
  );
}

export default App;
