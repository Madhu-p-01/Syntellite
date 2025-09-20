import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { setAnalyticsConsent, getAnalyticsConsentStatus } from '../lib/analytics';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = getAnalyticsConsentStatus();
    if (consentStatus === 'unknown') {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent(true);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    setAnalyticsConsent(false);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />
          
          {/* Cookie Consent Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl z-[9999] p-6"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Cookie Preferences
              </h3>
            </div>

            {/* Content */}
            <div className="mb-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                We use cookies and analytics to improve your experience and understand how you interact with our website.
              </p>
              
              <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-900 mb-1">
                    Analytics Cookies
                  </p>
                  <p className="text-xs text-gray-600">
                    Help us understand website usage and improve our services. No personal data is collected.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
              >
                Accept Analytics
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
              >
                Essential Only
              </button>
            </div>

            {/* Privacy Link */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Learn more in our{' '}
                <a 
                  href="/privacy-policy" 
                  className="text-blue-600 hover:text-blue-700 underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
