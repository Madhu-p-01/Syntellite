import React, { useEffect, useRef, useState } from "react";
import { Check, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BoldIdeasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-black text-white py-16 relative"
    >
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div 
          className={`bg-gray-900 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-20 scale-95'
          }`}
        >
          {/* Success Rate Animation - Hidden on mobile */}
          <div 
            className={`hidden md:block absolute right-8 top-8 opacity-60 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              PROJECT SUCCESS RATE
            </div>
            <div className="text-2xl font-bold text-white mb-4">
              100%
              <span className="text-sm text-green-400 ml-2">Guaranteed</span>
            </div>

            {/* Circular Progress Bar */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
                {/* Progress circle */}
                <motion.circle
                  className="text-green-500"
                  strokeWidth="10"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: isVisible ? 0 : 283 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  style={{ strokeDasharray: 283 }}
                />
                {/* Checkmark */}
                <motion.path
                  d="M30 50 L45 65 L70 40"
                  stroke="white"
                  strokeWidth="8"
                  fill="transparent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl">
            <div 
              className={`text-xs text-blue-400 uppercase tracking-wider mb-4 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="font-bold italic">BOLD</span>{" "}
              <span className="font-medium italic">IDEAS</span>{" "}
              <span className="font-regular italic">ENGINEERED.</span>
            </div>
            
            <h1 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Built for business.
              <br />
              Feels like play.
            </h1>
            
            <p 
              className={`text-gray-400 text-lg max-w-lg transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              We're here to help you transform your idea into profitable
              business that speak louder and smarter.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
