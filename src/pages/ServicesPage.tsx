import React from 'react';
import SEO from '../components/SEO';
import ServicesLayout from '../components/ServicesLayout';
import { 
  Lightbulb,
  Users,
  TrendingUp,
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  Layers,
  Globe,
  Database,
  Palette,
  Target,
  Search,
  Puzzle,
  Figma,
  CloudLightning,
  Briefcase,
  Settings,
  Cpu,
  Wrench,
  Play,
  ArrowRight,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Getting Started | Syntellite Innovation Lab"
        description="Start your journey with Syntellite. Learn about our comprehensive tech solutions, development process, and how we can help turn your ideas into reality."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Play className="w-6 h-6 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">Getting Started</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">START WITH</span>{" "}
              <span className="font-medium italic text-purple-400">SYNTELLITE</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Transform your bold ideas into engineered realities. From initial concept to final deployment, 
              we provide comprehensive tech solutions that empower your business to innovate and scale.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a href="/contact" className="group">
              <div className="h-full p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Get Started</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Ready to turn your ideas into reality? Let's discuss your project requirements and explore possibilities.
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a href="/about" className="group">
              <div className="h-full p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Our Approach</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Learn about our innovation lab methodology and collaborative development process that ensures success.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a href="/contact" className="group">
              <div className="h-full p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl hover:border-pink-400/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-600/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Free Consultation</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Get expert advice on technology stack, architecture, and strategic project planning at no cost.
                </p>
                <div className="flex items-center text-pink-400 text-sm font-medium group-hover:gap-2 transition-all">
                  Book Consultation <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          {/* Features Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Why Choose Syntellite?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">End-to-End Solutions</h3>
                    <p className="text-gray-400">
                      From initial concept and design to development, deployment, and ongoing support - we handle every aspect of your project.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Rapid Prototyping</h3>
                    <p className="text-gray-400">
                      Validate your ideas quickly with our rapid prototyping approach. Get working prototypes in weeks, not months.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation Lab Approach</h3>
                    <p className="text-gray-400">
                      Our innovation lab methodology combines cutting-edge technology with proven development practices for optimal results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-400">
                      Built with security-first principles, ensuring your applications meet the highest standards of data protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Cloud className="w-6 h-6 text-indigo-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Scalable Architecture</h3>
                    <p className="text-gray-400">
                      Future-proof solutions designed to scale with your business growth, from startup to enterprise level.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-pink-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Collaborative Process</h3>
                    <p className="text-gray-400">
                      Work directly with our expert team through transparent communication and regular progress updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories Overview */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our Service Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Web & Apps</h3>
                <p className="text-gray-400 text-sm">Modern web applications, mobile apps, and progressive web solutions.</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <Cpu className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Engineering & AI</h3>
                <p className="text-gray-400 text-sm">Custom software, AI automation, and intelligent system integration.</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <Palette className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Design & DevOps</h3>
                <p className="text-gray-400 text-sm">UI/UX design, cloud operations, and development infrastructure.</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Growth & Strategy</h3>
                <p className="text-gray-400 text-sm">Digital marketing, SEO optimization, and business consulting.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                From initial concept to final deployment, we're here to guide you through every step of your innovation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default ServicesPage;
