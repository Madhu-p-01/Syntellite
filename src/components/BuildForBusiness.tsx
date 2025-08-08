import React from "react";
import { TrendingUp } from "lucide-react";

export default function BuildForBusiness() {
  return (
    <div className="bg-black text-white pb-16">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Background Chart - Hidden on mobile */}
          <div className="hidden md:block absolute right-8 top-8 opacity-60">
            <div className="text-xs text-gray-400 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              DAILY ACTIVE USERS
              <TrendingUp className="w-3 h-3" />
              Last 24h
            </div>
            <div className="text-2xl font-bold text-white mb-4">
              5.24k
              <span className="text-sm text-green-400 ml-2">+24%</span>
            </div>

            {/* Chart Line */}
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
                />
                <path
                  d="M0,100 Q50,80 100,70 T200,40 T300,30 L300,120 L0,120 Z"
                  fill="url(#gradient)"
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-2xl">
            <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
              <span className="font-bold italic">BOLD</span>{" "}
              <span className="font-medium italic">IDEAS</span>{" "}
              <span className="font-regular italic">ENGINEERED.</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built for business.
              <br />
              Feels like play.
            </h1>
            <p className="text-gray-400 text-lg max-w-lg">
              We’re here to help you transform your idea into profitable
              business that speak louder and smarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
