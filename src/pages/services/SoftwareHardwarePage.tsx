import React from 'react';
import SEO from '../../components/SEO';
import ServicesLayout from '../../components/ServicesLayout';
import { 
  Cpu, 
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
  Settings,
  Wifi
} from 'lucide-react';

const SoftwareHardwarePage = () => {
  return (
    <>
      <SEO
        title="Software + Hardware Development | Syntellite Innovation Lab"
        description="Integrated software and hardware development solutions for IoT devices, embedded systems, and smart products. Complete end-to-end development from concept to production."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services/software-hardware-development"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">Software + Hardware Development</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">INTEGRATED</span>{" "}
              <span className="font-medium italic text-purple-400">HARDWARE</span>{" "}
              <span className="font-normal italic">& SOFTWARE</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Bridge the physical and digital worlds with integrated hardware and software solutions. 
              From IoT devices to embedded systems, we create smart products that connect and perform.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
              <Cpu className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Embedded Systems</h3>
              <p className="text-gray-400 text-sm">Custom embedded solutions for specialized hardware requirements.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
              <Wifi className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">IoT Solutions</h3>
              <p className="text-gray-400 text-sm">Connected devices with cloud integration and real-time monitoring.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
              <Settings className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">End-to-End Development</h3>
              <p className="text-gray-400 text-sm">Complete product development from concept to manufacturing.</p>
            </div>
          </div>

          {/* Development Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Development Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Hardware Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Circuit Design & PCB Layout</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Microcontroller Programming</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Sensor Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Power Management</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Software Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Embedded Firmware</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Mobile Applications</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Cloud Integration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Data Analytics Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Product Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Wifi className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">IoT Devices</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Smart connected devices for home automation, industrial monitoring, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart home devices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Industrial sensors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Environmental monitors
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <Cpu className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Embedded Systems</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Custom embedded solutions for specialized applications and industries.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Medical devices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Automotive systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Industrial controllers
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <Target className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Wearable Technology</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Smart wearables for health monitoring, fitness tracking, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Fitness trackers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Health monitors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart accessories
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <Globe className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Smart Infrastructure</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Connected infrastructure solutions for smart cities and buildings.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Smart lighting systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Security systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Energy management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Development Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Concept & Requirements</h3>
                  <p className="text-gray-400">
                    Define product requirements, technical specifications, and design constraints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design & Prototyping</h3>
                  <p className="text-gray-400">
                    Create hardware schematics, PCB layouts, and develop initial prototypes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Software Development</h3>
                  <p className="text-gray-400">
                    Develop embedded firmware, mobile apps, and cloud integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Testing & Production</h3>
                  <p className="text-gray-400">
                    Comprehensive testing, certification support, and production planning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Development Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Prototype Development</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹5L - ₹15L</p>
                <p className="text-gray-400 text-sm mb-4">Proof of concept & prototype</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Hardware prototype
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic firmware
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Mobile app demo
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
                <h3 className="text-lg font-semibold text-white mb-2">Complete Product</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹15L - ₹50L</p>
                <p className="text-gray-400 text-sm mb-4">Production-ready solution</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Production hardware
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Full software stack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Cloud integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    6 months support
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise Solution</h3>
                <p className="text-3xl font-bold text-purple-400 mb-4">₹50L+</p>
                <p className="text-gray-400 text-sm mb-4">Large-scale deployment</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Scalable platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Manufacturing support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Ongoing partnership
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Smart Products?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your ideas into intelligent hardware and software solutions that connect and perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start Product Development
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Discuss Your Idea
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default SoftwareHardwarePage;
