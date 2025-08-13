import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Workflow,
  Monitor,
  Server,
  Brain,
  Package,
  Cog,
  PenTool,
  CloudCog,
  FlaskConical,
  CircuitBoard,
  GitBranch,
  TrendingUp as Growth,
  Megaphone,
  FileText,
  Rocket,
  MessageSquare,
  PieChart
} from 'lucide-react';

interface ServicesSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ isOpen = false, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
        { title: "Web Development", icon: Monitor, path: "/services/web-development" },
        { title: "App Development", icon: Smartphone, path: "/services/app-development" },
        { title: "ECommerce Solutions", icon: ShoppingCart, path: "/services/ecommerce-solutions" },
        { title: "Payment Gateway", icon: CreditCard, path: "/services/payment-gateway", isNew: true },
        { title: "Payment Orchestration", icon: Workflow, path: "/services/payment-orchestration", isNew: true },
        { title: "Progressive Web Apps", icon: Globe, path: "/services/progressive-web-apps" }
      ]
    },
    {
      category: "Engineering and AI",
      items: [
        { title: "Software Development", icon: Code, path: "/services/software-development" },
        { title: "API & Microservices", icon: Server, path: "/services/api-microservices" },
        { title: "AI and Automation", icon: Brain, path: "/services/ai-automation" },
        { title: "White Label Solutions", icon: Package, path: "/services/white-label-solutions" },
        { title: "SaaS Development", icon: Cloud, path: "/services/saas-development" },
        { title: "System Integration", icon: Cog, path: "/services/system-integration" }
      ]
    },
    {
      category: "Build, Design and DevOps",
      items: [
        { title: "UI/UX Design", icon: PenTool, path: "/services/ui-ux-design", isNew: true },
        { title: "Cloud Operations", icon: CloudCog, path: "/services/cloud-operations", isNew: true },
        { title: "Software + Hardware Development", icon: Cpu, path: "/services/software-hardware-development" },
        { title: "R&D and Prototyping", icon: FlaskConical, path: "/services/rd-prototyping" },
        { title: "PCB and Hardware Design", icon: CircuitBoard, path: "/services/pcb-hardware-design" },
        { title: "DevOps & CI/CD", icon: GitBranch, path: "/services/devops-cicd" }
      ]
    },
    {
      category: "Growth Strategy and Consulting",
      items: [
        { title: "SEO Optimization", icon: Search, path: "/services/seo-optimization" },
        { title: "Digital Marketing", icon: Megaphone, path: "/services/digital-marketing" },
        { title: "Content Creation", icon: FileText, path: "/services/content-creation", isNew: true },
        { title: "MVP Development", icon: Rocket, path: "/services/mvp-development", isNew: true },
        { title: "Consulting & Strategy", icon: MessageSquare, path: "/services/consulting-strategy", isNew: true },
        { title: "Data Analytics", icon: PieChart, path: "/services/data-analytics" }
      ]
    }
  ];

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Save scroll position to sessionStorage
  const saveScrollPosition = () => {
    if (sidebarRef.current) {
      sessionStorage.setItem('sidebarScrollPosition', sidebarRef.current.scrollTop.toString());
    }
  };

  // Restore scroll position from sessionStorage
  const restoreScrollPosition = () => {
    const savedPosition = sessionStorage.getItem('sidebarScrollPosition');
    if (savedPosition && sidebarRef.current) {
      sidebarRef.current.scrollTop = parseInt(savedPosition, 10);
    }
  };

  // Restore scroll position after navigation and component updates
  useEffect(() => {
    // Use multiple timeouts to ensure scroll position is restored
    const timeouts = [0, 10, 50, 100, 200].map(delay => 
      setTimeout(restoreScrollPosition, delay)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [location.pathname]);

  // Also restore on component mount
  useEffect(() => {
    restoreScrollPosition();
  }, []);

  const handleNavigation = (path: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    // Save current scroll position before navigation
    saveScrollPosition();
    
    // Navigate to the new path
    navigate(path);

    // Don't close sidebar on desktop, only on mobile
    if (onClose && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Always visible dark bar */}
      <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-5 bg-gray-900 border-r border-gray-700 z-30"></div>
      
      {/* Full sidebar */}
      <div 
        ref={sidebarRef}
        onScroll={saveScrollPosition}
        className={`fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-black border-r border-gray-800 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ scrollBehavior: 'auto' }}
      >
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
                <a
                  href={section.path}
                  onClick={(e) => handleNavigation(section.path, e)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors cursor-pointer ${
                    isActive(section.path)
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="font-medium">{section.title}</span>
                  <Play className="w-3 h-3 ml-auto" />
                </a>
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
                        <a
                          key={itemIndex}
                          href={item.path}
                          onClick={(e) => handleNavigation(item.path, e)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm cursor-pointer ${
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
                        </a>
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
          <a
            href="/contact"
            onClick={(e) => handleNavigation('/contact', e)}
            className="inline-flex items-center gap-2 text-xs bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
          >
            <Users className="w-3 h-3" />
            Free Consultation
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSidebar;
