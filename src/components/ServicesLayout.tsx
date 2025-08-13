import React, { useState } from 'react';
import ServicesSidebar from './ServicesSidebar';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Sidebar Toggle Tab - Juspay Style - Visible on all screen sizes */}
      <div 
        className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isSidebarOpen ? 'left-80' : 'left-0'
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center w-5 h-10 rounded-r border-r border-gray-600"
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-3 h-3 text-gray-400" />
          ) : (
            <ChevronRight className="w-3 h-3 text-gray-400" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 mt-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <ServicesSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className={`flex-1 overflow-hidden mt-20 transition-all duration-300 ${
        isSidebarOpen ? 'lg:ml-80' : 'lg:ml-5'
      }`}>
        <div className="h-full overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pl-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
