import React, { useState, useEffect } from 'react';
import ServicesSidebar from './ServicesSidebar';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  // Initialize sidebar state based on screen size and user preference
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Check if we're on the client side and if it's mobile
    if (typeof window !== 'undefined') {
      // Check if user has previously closed the sidebar
      const userClosed = sessionStorage.getItem('sidebarUserClosed');
      if (userClosed === 'true') {
        return false; // Keep closed if user previously closed it
      }
      return window.innerWidth < 1024; // Open by default on mobile only if not previously closed
    }
    return false;
  });

  // Handle window resize to close sidebar when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false); // Close on desktop since it's always visible
        // Clear the user closed preference when switching to desktop
        sessionStorage.removeItem('sidebarUserClosed');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom close handler that remembers user preference
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    // Remember that user manually closed the sidebar
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      sessionStorage.setItem('sidebarUserClosed', 'true');
    }
  };

  // Custom open handler that clears the user preference
  const handleSidebarToggle = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    
    // If opening, clear the user closed preference
    if (newState) {
      sessionStorage.removeItem('sidebarUserClosed');
    } else if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      // If closing, remember the preference
      sessionStorage.setItem('sidebarUserClosed', 'true');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Small Clickable Angle Element - Mobile Only */}
      <div 
        className={`lg:hidden fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isSidebarOpen ? 'left-80' : 'left-2'
        }`}
      >
        <button
          onClick={handleSidebarToggle}
          className="bg-gray-800/80 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center w-6 h-6 rounded-full shadow-lg backdrop-blur-sm"
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-3 h-3 text-gray-300" />
          ) : (
            <ChevronRight className="w-3 h-3 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 mt-20"
          onClick={handleSidebarClose}
        />
      )}

      <ServicesSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      
      <div className="flex-1 overflow-hidden transition-all duration-300 lg:ml-80">
        <div className="h-full overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-12 pt-32 pb-8">
            <div className="max-w-4xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
