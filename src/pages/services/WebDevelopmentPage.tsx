import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import ServicesLayout from '../../components/ServicesLayout';
import { trackServicePageView } from '../../lib/analytics';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

const WebDevelopmentPage = () => {
  useEffect(() => {
    trackServicePageView('Web Development');
  }, []);

  return (
    <>
      <SEO
        title="Web Development Services | Syntellite Innovation Lab"
        description="Build high-performing web applications with modern frameworks like React, Next.js, Vue, and Angular. Custom web development solutions that scale with your business."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services/web-development"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">Web Development</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">MODERN</span>{" "}
              <span className="font-medium italic text-purple-400">WEB</span>{" "}
              <span className="font-normal italic">APPLICATIONS</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Build high-performing, scalable web applications with cutting-edge technologies. 
              From responsive websites to complex web platforms, we deliver solutions that drive business growth.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Optimized for speed with modern build tools and performance best practices.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
              <Shield className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-400 text-sm">Built with security-first principles and enterprise-grade reliability.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
              <Globe className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-gray-400 text-sm">Perfect user experience across all devices and screen sizes.</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Frontend Frameworks</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">React.js & Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Vue.js & Nuxt.js</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Angular</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Svelte & SvelteKit</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Backend & Database</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Node.js & Express</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Python & Django/FastAPI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">PostgreSQL & MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">GraphQL & REST APIs</span>
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
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Discovery & Planning</h3>
                  <p className="text-gray-400">
                    We analyze your requirements, define project scope, and create a detailed technical roadmap.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design & Architecture</h3>
                  <p className="text-gray-400">
                    Create wireframes, design systems, and technical architecture for optimal performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Development & Testing</h3>
                  <p className="text-gray-400">
                    Agile development with continuous testing, code reviews, and quality assurance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deployment & Support</h3>
                  <p className="text-gray-400">
                    Seamless deployment with ongoing maintenance, updates, and technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">What We Build</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Business Websites</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Professional websites that showcase your brand and convert visitors into customers.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Corporate websites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Landing pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Portfolio sites
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <Database className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Web Applications</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Complex web applications with advanced functionality and user management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    SaaS platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Admin dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    CRM systems
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <Cloud className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">E-commerce Platforms</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Full-featured online stores with payment integration and inventory management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom e-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Marketplace platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    B2B portals
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <Users className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Progressive Web Apps</h3>
                <p className="text-gray-400 text-sm mb-4">
                  App-like experiences that work offline and can be installed on any device.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Offline functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Push notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Native app feel
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Investment Levels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Starter</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹50K - ₹2L</p>
                <p className="text-gray-400 text-sm mb-4">Perfect for small businesses and startups</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    5-10 pages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Responsive design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic SEO
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Contact forms
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-600/40 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Professional</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹2L - ₹8L</p>
                <p className="text-gray-400 text-sm mb-4">For growing businesses with advanced needs</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom web application
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    User authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Database integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Admin dashboard
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹8L+</p>
                <p className="text-gray-400 text-sm mb-4">Large-scale applications and platforms</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complex web platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Microservices architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced integrations
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
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Your Web Application?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default WebDevelopmentPage;
