import React from 'react';
import SEO from '../../components/SEO';
import ServicesLayout from '../../components/ServicesLayout';
import { 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Database,
  Cloud,
  Target,
  TrendingUp,
  Layers,
  Code,
  Palette
} from 'lucide-react';

const AppDevelopmentPage = () => {
  return (
    <>
      <SEO
        title="Mobile App Development Services | Syntellite Innovation Lab"
        description="Native and cross-platform mobile apps for Android, iOS, and web using Flutter, React Native. Custom mobile app development solutions that engage users."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services/app-development"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium uppercase tracking-wider">App Development</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">NATIVE &</span>{" "}
              <span className="font-medium italic text-blue-400">CROSS-PLATFORM</span>{" "}
              <span className="font-normal italic">APPS</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Create engaging mobile experiences that users love. From native iOS and Android apps to cross-platform solutions, 
              we build apps that perform flawlessly across all devices and platforms.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">Optimized for speed and smooth user experience with native performance.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-400 text-sm">Built with security best practices and robust architecture for reliability.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cross-Platform</h3>
              <p className="text-gray-400 text-sm">Single codebase for multiple platforms, reducing development time and cost.</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cross-Platform</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Flutter & Dart</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">React Native</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Xamarin</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Ionic</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Native Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Swift & SwiftUI (iOS)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Kotlin & Java (Android)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Firebase & AWS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">REST APIs & GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our Development Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Strategy & Planning</h3>
                  <p className="text-gray-400">
                    Define app objectives, target audience, platform selection, and create detailed wireframes and user flows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-400">
                    Create intuitive user interfaces with modern design principles and platform-specific guidelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development & Integration</h3>
                  <p className="text-gray-400">
                    Build the app with clean code, integrate APIs, implement features, and ensure cross-platform compatibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Testing & Launch</h3>
                  <p className="text-gray-400">
                    Comprehensive testing, app store optimization, deployment, and post-launch support and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Types of Apps We Build</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <Users className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Business Apps</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Enterprise solutions that streamline operations and improve productivity.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    CRM & ERP apps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Project management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Team collaboration
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Database className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">E-commerce Apps</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Feature-rich shopping apps with seamless payment integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Shopping cart & checkout
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Payment gateways
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Order tracking
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <Cloud className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Social & Media Apps</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Engaging social platforms with real-time features and media sharing.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Media sharing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Social features
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <Target className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">On-Demand Apps</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Service marketplace apps connecting users with service providers.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Service booking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    GPS tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Rating & reviews
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Key Features We Implement</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Core Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">User Authentication</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Push Notifications</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Offline Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Data Synchronization</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Advanced Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">GPS & Location</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Camera Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Payment Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Social Media Login</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Enterprise Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Analytics & Reporting</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Admin Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Multi-language Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Security & Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Investment Levels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Basic App</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">₹3L - ₹8L</p>
                <p className="text-gray-400 text-sm mb-4">Simple apps with core functionality</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    5-10 screens
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic UI/UX design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    API integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    App store deployment
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-600/40 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced App</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">₹8L - ₹20L</p>
                <p className="text-gray-400 text-sm mb-4">Feature-rich apps with advanced functionality</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    15-25 screens
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom UI/UX design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Payment integration
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise App</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">₹20L+</p>
                <p className="text-gray-400 text-sm mb-4">Complex enterprise-grade applications</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    25+ screens
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Enterprise integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Dedicated support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's create an engaging mobile experience that your users will love and that drives your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start Your App Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default AppDevelopmentPage;
