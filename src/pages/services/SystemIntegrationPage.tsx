import React from 'react';
import SEO from '../../components/SEO';
import ServicesLayout from '../../components/ServicesLayout';
import { 
  Network, 
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Target,
  TrendingUp,
  Database,
  Settings,
  Link
} from 'lucide-react';

const SystemIntegrationPage = () => {
  return (
    <>
      <SEO
        title="System Integration Services | Syntellite Innovation Lab"
        description="Enterprise system integration solutions to connect disparate systems, streamline workflows, and enable seamless data flow across your organization."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services/system-integration"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">System Integration</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">SEAMLESS</span>{" "}
              <span className="font-medium italic text-purple-400">SYSTEM</span>{" "}
              <span className="font-normal italic">CONNECTIVITY</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Connect disparate systems and streamline business processes with enterprise-grade integration solutions. 
              Enable seamless data flow and improve operational efficiency across your organization.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
              <Link className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Seamless Connectivity</h3>
              <p className="text-gray-400 text-sm">Connect legacy and modern systems with robust integration patterns.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
              <Database className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Data Synchronization</h3>
              <p className="text-gray-400 text-sm">Real-time data sync across multiple systems and platforms.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
              <Zap className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Process Automation</h3>
              <p className="text-gray-400 text-sm">Automate workflows and eliminate manual data entry tasks.</p>
            </div>
          </div>

          {/* Integration Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Integration Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Enterprise Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">ERP Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">CRM Connectivity</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Database Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Legacy System Modernization</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cloud Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Cloud-to-Cloud Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Hybrid Cloud Solutions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">API Gateway Management</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Microservices Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Patterns */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Integration Patterns</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Settings className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">API Integration</h3>
                <p className="text-gray-400 text-sm mb-4">
                  RESTful and GraphQL API integrations for modern applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    REST API development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    GraphQL implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Webhook integration
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <Database className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Data Integration</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ETL processes and real-time data synchronization solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    ETL pipeline development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Real-time data streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Data transformation
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <Globe className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Service Bus</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Centralized integration platform for complex enterprise environments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Message routing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Protocol transformation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Service orchestration
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <Shield className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Security & Monitoring</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Secure integration with comprehensive monitoring and logging.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Authentication & authorization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Integration monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Error handling & logging
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Integration Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">System Analysis</h3>
                  <p className="text-gray-400">
                    Comprehensive analysis of existing systems, data flows, and integration requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Integration Design</h3>
                  <p className="text-gray-400">
                    Design integration architecture, data mapping, and workflow automation.
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
                    Build integration solutions with comprehensive testing and validation.
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
                    Deploy integrations with monitoring, maintenance, and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Integration Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Basic Integration</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹2L - ₹6L</p>
                <p className="text-gray-400 text-sm mb-4">Simple system connections</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    2-3 system integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    API development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    3 months support
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-600/40 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Integration</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹6L - ₹15L</p>
                <p className="text-gray-400 text-sm mb-4">Complex system integration</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multiple system integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Advanced monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    6 months support
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Custom Integration</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹15L+</p>
                <p className="text-gray-400 text-sm mb-4">Large-scale integration platform</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Enterprise service bus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24/7 monitoring
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
                Ready to Connect Your Systems?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Streamline your operations with seamless system integration that eliminates silos and improves efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start Integration Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Get System Analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default SystemIntegrationPage;
