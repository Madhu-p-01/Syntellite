import React, { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

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
      className="bg-black text-white py-16 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
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
          {/* Background Chart - Hidden on mobile */}
          <div 
            className={`hidden md:block absolute right-8 top-8 opacity-60 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-60 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              DAILY ACTIVE USERS
              <TrendingUp className="w-3 h-3" />
              Last 24h
            </div>
            <div className="text-2xl font-bold text-white mb-4">
              5.24k
              <span className="text-sm text-green-400 ml-2">+24%</span>
            </div>

            {/* Animated Chart Line */}
            <div className="relative w-64 h-32">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 Q50,80 100,70 T200,40 T300,30"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  className={`transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    strokeDasharray: isVisible ? 'none' : '1000',
                    strokeDashoffset: isVisible ? '0' : '1000',
                  }}
                />
                <path
                  d="M0,100 Q50,80 100,70 T200,40 T300,30 L300,120 L0,120 Z"
                  fill="url(#gradient)"
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
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

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse transition-all duration-1000 delay-${(i + 1) * 200} ${
                  isVisible ? 'opacity-30' : 'opacity-0'
                }`}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i * 10)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i * 0.5)}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
