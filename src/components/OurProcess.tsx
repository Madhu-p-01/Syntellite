import React from 'react';
import { Search, FileText, BarChart3, Cog } from 'lucide-react';

const OurProcess = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
            <span className="font-bold italic">OUR</span>{" "}
            <span className="font-medium italic">PROCESS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            A Streamlined Approach to Delivering Excellence
          </h2>
        </div>

        {/* Process Flow - Responsive Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:flex items-center justify-between">
            
            {/* Step 1 - Discovery & Feasibility (Small Circle) */}
            <div className="flex flex-col items-center text-center flex-1">
              {/* Title and Description Above */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Discovery & Feasibility</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We start with a discovery session to understand your goals, evaluate feasibility, and align on expectations.
                </p>
              </div>
              
              {/* Dashed Line Down */}
              <div className="w-0.5 h-12 border-l-2 border-dashed border-gray-500 mb-4"></div>
              
              {/* Small White Circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-10 h-10 text-blue-500" />
              </div>
            </div>

            {/* Step 2 - Proposal & Kickoff (Large Circle with Blue Arc) */}
            <div className="flex flex-col items-center text-center flex-1">
              {/* Title and Description Above */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Proposal & Kickoff</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We share a tailored quotation, wireframes, and project proposal. Once approved and payment is completed, we officially begin.
                </p>
              </div>
              
              {/* Dashed Line Down */}
              <div className="w-0.5 h-12 border-l-2 border-dashed border-gray-500 mb-4"></div>
              
              {/* Large Circle with Blue Arc */}
              <div className="relative">
                {/* Blue Arc Background - Left Side */}
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0">
                    <svg width="128" height="128" viewBox="0 0 128 128" className="transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="16"
                        strokeDasharray="176 352"
                        strokeDashoffset="0"
                      />
                    </svg>
                  </div>
                  {/* White Circle with Icon */}
                  <div className="absolute inset-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="w-12 h-12 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Research & Planning (Small Circle) */}
            <div className="flex flex-col items-center text-center flex-1">
              {/* Small White Circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                <BarChart3 className="w-10 h-10 text-blue-500" />
              </div>
              
              {/* Dashed Line Down */}
              <div className="w-0.5 h-12 border-l-2 border-dashed border-gray-500 mb-4"></div>
              
              {/* Title and Description Below */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4">Research & Planning</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Our team conducts detailed analysis and prepares a structured project plan covering design, development, and delivery phases.
                </p>
              </div>
            </div>

            {/* Step 4 - Execution & Updates (Large Circle with Blue Arc) */}
            <div className="flex flex-col items-center text-center flex-1">
              {/* Large Circle with Blue Arc */}
              <div className="relative mb-4">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0">
                    <svg width="128" height="128" viewBox="0 0 128 128" className="transform rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="16"
                        strokeDasharray="176 352"
                        strokeDashoffset="0"
                      />
                    </svg>
                  </div>
                  {/* White Circle with Icon */}
                  <div className="absolute inset-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Cog className="w-12 h-12 text-blue-500" />
                  </div>
                </div>
              </div>
              
              {/* Dashed Line Down */}
              <div className="w-0.5 h-12 border-l-2 border-dashed border-gray-500 mb-4"></div>
              
              {/* Title and Description Below */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4">Execution & Updates</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Development begins with regular progress reports, milestone reviews, and continuous collaboration to keep you in the loop.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden space-y-12">
            
            {/* Step 1 - Discovery & Feasibility */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                <Search className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Discovery & Feasibility</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                We start with a discovery session to understand your goals, evaluate feasibility, and align on expectations.
              </p>
            </div>

            {/* Step 2 - Proposal & Kickoff */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-28 h-28 relative">
                  <div className="absolute inset-0">
                    <svg width="112" height="112" viewBox="0 0 112 112" className="transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="12"
                        strokeDasharray="150 300"
                        strokeDashoffset="0"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-3 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="w-10 h-10 text-blue-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Proposal & Kickoff</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                We share a tailored quotation, wireframes, and project proposal. Once approved and payment is completed, we officially begin.
              </p>
            </div>

            {/* Step 3 - Research & Planning */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                <BarChart3 className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Research & Planning</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                Our team conducts detailed analysis and prepares a structured project plan covering design, development, and delivery phases.
              </p>
            </div>

            {/* Step 4 - Execution & Updates */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-28 h-28 relative">
                  <div className="absolute inset-0">
                    <svg width="112" height="112" viewBox="0 0 112 112" className="transform rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="12"
                        strokeDasharray="150 300"
                        strokeDashoffset="0"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-3 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Cog className="w-10 h-10 text-blue-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Execution & Updates</h3>
              <p className="text-gray-400 text-sm max-w-sm">
                Development begins with regular progress reports, milestone reviews, and continuous collaboration to keep you in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
