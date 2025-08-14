import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, Mail, Phone, X } from 'lucide-react';
import SEO from '../components/SEO';

const BookMeetingPage: React.FC = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Add Calendly CSS
    const existingCSS = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingCSS) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Add custom CSS to fix mobile header overlap and popup issues
    const customCSS = document.createElement('style');
    customCSS.textContent = `
      @media (max-width: 1023px) {
        .calendly-inline-widget iframe {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        .calendly-inline-widget {
          margin-top: 0 !important;
          padding-top: 0 !important;
          position: relative !important;
          top: 0 !important;
        }
      }
      
      /* Fix Calendly popup styling issues */
      .calendly-popup-wrapper {
        z-index: 9999 !important;
      }
      
      .calendly-popup-wrapper .calendly-popup {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      /* Fix close button size and positioning */
      .calendly-popup-wrapper .calendly-popup-close {
        width: 24px !important;
        height: 24px !important;
        font-size: 16px !important;
        line-height: 1 !important;
        top: 10px !important;
        right: 10px !important;
        background: rgba(0, 0, 0, 0.5) !important;
        border-radius: 50% !important;
        color: white !important;
        border: none !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        z-index: 10000 !important;
      }
      
      /* Ensure popup content is properly sized */
      .calendly-popup-wrapper iframe {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
      }
      
      /* Reset any conflicting styles */
      .calendly-popup-wrapper * {
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(customCSS);

    // Set a timeout to show fallback if Calendly doesn't load
    const fallbackTimer = setTimeout(() => {
      if (!isCalendlyLoaded) {
        setShowFallback(true);
      }
    }, 3000); // Reduced timeout to 3 seconds

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      setIsCalendlyLoaded(true);
      clearTimeout(fallbackTimer);
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
      setShowFallback(true);
      clearTimeout(fallbackTimer);
    };
    
    document.body.appendChild(script);

    return () => {
      clearTimeout(fallbackTimer);
      // Safe cleanup
      if (script && script.parentNode === document.body) {
        try {
          document.body.removeChild(script);
        } catch (error) {
          console.log('Script cleanup: script already removed');
        }
      }
    };
  }, []);

  // Function to open Calendly popup
  const openCalendlyPopup = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/prateek-syntellite'
      });
    }
  };

  return (
    <>
      <SEO 
        title="Book a Meeting | Syntellite"
        description="Schedule a consultation with our team to discuss your project requirements and explore possibilities."
        canonical="https://syntellite.com/book-meeting"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Header with Back Button */}
        <div className="pt-20 pb-8 mt-4">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="text-left">
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
                <span className="font-bold italic">BOOK</span>{" "}
                <span className="font-medium italic">MEETING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
                Schedule Your Consultation
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Ready to turn your ideas into reality? Book a free consultation with our team to discuss your project requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Calendar Section */}
        <div className="pb-12">
          {!showFallback ? (
            <>
              {/* Loading State */}
              {!isCalendlyLoaded && (
                <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
                    <div className="flex justify-center space-x-1 mb-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <p className="text-gray-300 text-sm">Loading your calendar...</p>
                  </div>
                </div>
              )}
              
              {/* Calendly Widget - Responsive */}
              <div className={`max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 ${!isCalendlyLoaded ? 'hidden' : ''}`}>
                {/* Mobile: Full width with dark theme */}
                <div className="lg:hidden">
                  <div 
                    className="calendly-inline-widget w-full" 
                    data-url="https://calendly.com/prateek-syntellite?background_color=000000&text_color=ffffff"
                    style={{ minWidth: '320px', height: '700px', width: '100%' }}
                  ></div>
                </div>
                
                {/* Desktop: Contained with dark theme */}
                <div className="hidden lg:block">
                  <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/prateek-syntellite?background_color=000000&text_color=ffffff"
                      style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Fallback Contact Form */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-gray-400 mb-8">
                  Our calendar is temporarily unavailable. Please reach out to us directly to schedule your consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400">Email Us</h3>
                      <a href="mailto:hello@syntellite.com" className="text-gray-300 hover:text-white transition-colors">
                        hello@syntellite.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400">Call Us</h3>
                      <a href="tel:+919972200910" className="text-gray-300 hover:text-white transition-colors">
                        +91 99722 00910
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-pink-400">Schedule Direct</h3>
                      <p className="text-gray-300">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Form */}
              <div className="bg-gradient-to-br from-gray-900 to-purple-900/50 border border-purple-600/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Preferred Time</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                      placeholder="e.g., Tomorrow 2 PM"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Send Message
                  </Link>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookMeetingPage;
