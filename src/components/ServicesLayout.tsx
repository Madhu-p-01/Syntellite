import React from 'react';
import ServicesSidebar from './ServicesSidebar';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <ServicesSidebar />
      <div className="ml-80 flex-1 overflow-hidden mt-20">
        <div className="h-full overflow-y-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
