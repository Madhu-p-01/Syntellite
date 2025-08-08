import React from 'react';
import { TrendingUp, BarChart3, ExternalLink } from 'lucide-react';

const MetricCard = ({ label, value, change }: { label: string; value: string; change?: string }) => (
  <div className="flex flex-col">
    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-white text-lg font-medium">{value}</div>
    {change && (
      <div className="text-xs text-blue-400 flex items-center gap-1 mt-1">
        <TrendingUp className="w-3 h-3" />
        {change}
      </div>
    )}
  </div>
);

const AppIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center overflow-hidden">
    <img src={src} alt={alt} className="w-8 h-8 object-contain" />
  </div>
);

export default function VisualiseInfo() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        
        {/* Hero Section */}
        <div className="mb-8 lg:mb-12">
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Chart */}
            <div className="absolute right-8 top-8 opacity-60">
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
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
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
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">VISUALISE INFO</div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Built for business.<br />
                Feels like play.
              </h1>
              <p className="text-gray-400 text-lg max-w-lg">
                Widgets are carefully crafted to help you distill powerful messages from your information and data.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Customise Card */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="mb-8">
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">APP USERS</div>
                  <div className="text-xs text-gray-400">Last 30 days</div>
                </div>
                
                <div className="flex items-end justify-between mb-4">
                  <div className="text-2xl font-bold">5.24k</div>
                  <div className="flex items-center gap-4 text-xs">
                    <MetricCard label="ACTIVE USERS" value="5.24k" />
                    <MetricCard label="NEW USERS" value="194" />
                    <MetricCard label="GROWTH RATE" value="+24%" />
                  </div>
                </div>
                
                {/* Bar Chart */}
                <div className="flex items-end gap-2 h-20">
                  {[60, 80, 45, 90, 30, 70, 85, 40, 95, 55].map((height, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 rounded-t flex-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                {/* Chart Line Overlay */}
                <div className="relative -mt-16 mb-4">
                  <svg viewBox="0 0 200 60" className="w-full h-16">
                    <path
                      d="M10,50 Q40,30 80,35 T160,25"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">CUSTOMISE</div>
              <h2 className="text-3xl font-bold mb-4">
                Easy to customise.<br />
                Hard to get wrong.
              </h2>
              <p className="text-gray-400">
                Widgets are designed to customized easily. They always look stunning, no matter how you edit.
              </p>
            </div>
          </div>

          {/* Embed Card */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="mb-8">
              {/* App Icons Grid */}
              <div className="bg-gray-800 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <AppIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg" alt="Spotify" />
                  <AppIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <AppIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" />
                  <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">EMBED</div>
              <h2 className="text-3xl font-bold mb-4">
                A window<br />
                into your work.
              </h2>
              <p className="text-gray-400">
                Simply paste a link to any of the hundreds of tools you use and Chronicle will seamlessly package your outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
