import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const BookMeetingPage: React.FC = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    // Add a small delay to ensure content is fully rendered
    setTimeout(() => {
      setIsIframeLoaded(true);
    }, 1000);
  };

  return (
    <>
      <SEO 
        title="Book a Meeting | Syntellite"
        description="Schedule a consultation with our team to discuss your project requirements and explore possibilities."
        canonical="https://syntellite.com/book-meeting"
      />
      
      <div className="min-h-screen bg-white relative">
        {/* Custom Loading Overlay */}
        {!isIframeLoaded && (
          <div className="absolute inset-0 bg-white z-10 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="text-gray-600 text-sm">Loading your calendar...</p>
            </div>
          </div>
        )}
        
        {/* Calendly Widget Container - Full height minus header */}
        <div className="h-screen pt-20">
          <iframe
            src="https://calendly.com/prateek-syntellite"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with Syntellite"
            className="border-0"
            onLoad={handleIframeLoad}
            style={{ 
              minWidth: '320px',
              height: '100%'
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default BookMeetingPage;
