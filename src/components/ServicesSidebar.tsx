import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
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
  Lightbulb,
  Users,
  TrendingUp,
  Briefcase,
  Settings,
  Cpu,
  Wrench,
  Play,
  ChevronRight
} from 'lucide-react';

const ServicesSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      title: "Getting Started",
      icon: Play,
      path: "/services",
      description: "Start with Syntellite"
    },
    {
      category: "Web and Apps Solutions",
      items: [
        { title: "Web Development", icon: Code, path: "/services/web-development" },
        { title: "App Development", icon: Smartphone, path: "/services/app-development" },
        { title: "ECommerce Solutions", icon: Zap, path: "/services/ecommerce-solutions" },
        { title: "Payment Gateway", icon: Shield, path: "/services/payment-gateway", isNew: true },
        { title: "Payment Orchestration", icon: Layers, path: "/services/payment-orchestration", isNew: true },
        { title: "Progressive Web Apps", icon: Globe, path: "/services/progressive-web-apps" }
      ]
    },
    {
      category: "Engineering and AI",
      items: [
        { title: "Software Development", icon: Cpu, path: "/services/software-development" },
        { title: "API & Microservices", icon: Cloud, path: "/services/api-microservices" },
        { title: "AI and Automation", icon: BarChart3, path: "/services/ai-automation" },
        { title: "White Label Solutions", icon: Shield, path: "/services/white-label-solutions" },
        { title: "SaaS Development", icon: Database, path: "/services/saas-development" },
        { title: "System Integration", icon: Settings, path: "/services/system-integration" }
      ]
    },
    {
      category: "Build, Design and DevOps",
      items: [
        { title: "UI/UX Design", icon: Palette, path: "/services/ui-ux-design", isNew: true },
        { title: "Cloud Operations", icon: Target, path: "/services/cloud-operations", isNew: true },
        { title: "Software + Hardware Development", icon: Wrench, path: "/services/software-hardware-development" },
        { title: "R&D and Prototyping", icon: Lightbulb, path: "/services/rd-prototyping" },
        { title: "PCB and Hardware Design", icon: Search, path: "/services/pcb-hardware-design" },
        { title: "DevOps & CI/CD", icon: CloudLightning, path: "/services/devops-cicd" }
      ]
    },
    {
      category: "Growth Strategy and Consulting",
      items: [
        { title: "SEO Optimization", icon: Puzzle, path: "/services/seo-optimization" },
        { title: "Digital Marketing", icon: Figma, path: "/services/digital-marketing" },
        { title: "Content Creation", icon: CloudLightning, path: "/services/content-creation", isNew: true },
        { title: "MVP Development", icon: TrendingUp, path: "/services/mvp-development", isNew: true },
        { title: "Consulting & Strategy", icon: Briefcase, path: "/services/consulting-strategy", isNew: true },
        { title: "Data Analytics", icon: BarChart3, path: "/services/data-analytics" }
      ]
    }
  ];

  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-black border-r border-gray-800 overflow-y-auto z-40">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-2">Services</h2>
          <p className="text-sm text-gray-400">Comprehensive tech solutions for your business</p>
        </div>

        <nav className="space-y-1">
          {services.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title ? (
                // Getting Started section
                <Link
                  to={section.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive(section.path)
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="font-medium">{section.title}</span>
                  <Play className="w-3 h-3 ml-auto" />
                </Link>
              ) : (
                // Category sections
                <div className="mt-6">
                  <div className="px-3 py-2">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                      {section.category}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {section.items?.map((item, itemIndex) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                            isActive(item.path)
                              ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="flex-1">{item.title}</span>
                          {item.isNew && (
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          )}
                          <ChevronRight className="w-3 h-3 opacity-50" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-600/30">
          <h3 className="text-sm font-medium text-white mb-2">Ready to Start?</h3>
          <p className="text-xs text-gray-400 mb-3">
            Get expert consultation on your project requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Users className="w-3 h-3" />
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
