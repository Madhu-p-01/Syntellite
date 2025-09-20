import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "../contexts/NavigationContext";
import { FaCode } from "react-icons/fa6";
import { GrMultiple } from "react-icons/gr";
import { FaAppStoreIos } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

import {
  ChevronDown,
  Menu,
  X,
  Palette,
  Edit3,
  Zap,
  Layout,
  Database,
  Cloud,
  Globe,
  Shield,
  BarChart3,
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
  Monitor,
  Smartphone,
  ShoppingCart,
  CreditCard,
  Workflow,
  Code,
  Server,
  Brain,
  Package,
  Cog,
  PenTool,
  CloudCog,
  FlaskConical,
  CircuitBoard,
  GitBranch,
  Megaphone,
  FileText,
  Rocket,
  MessageSquare,
  PieChart,
} from "lucide-react";
import { MdLocalPhone } from "react-icons/md";
import logo from "../assets/syntellite_logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { handleSamePageNavigation, handleNavigation } = useNavigation();
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      {/* Main Navigation */}
      <header className="bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-[9999]">
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 max-w-none">
            {/* Logo - Left Side */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Syntellite" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                to="/"
                onClick={() => handleSamePageNavigation("/")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleDropdownToggle("Services")}
                  className="flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "Services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "Services" && (
                  <div
                    className="fixed left-0 top-20 w-full bg-black/95 backdrop-blur-sm border-y border-gray-800 shadow-2xl z-60"
                    style={{
                      animation: "dropdownSlide 0.2s ease-out forwards",
                      transformOrigin: "top center",
                    }}
                  >
                    <div className="p-8 max-w-7xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* BUILD Column */}
                        <div>
                          <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6 font-semibold">
                            Web and Apps Solutions
                          </h3>
                          <div className="space-y-4">
                            <Link
                              to="/services/web-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Monitor className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                              <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                Web development
                              </div>
                              <div className="text-gray-400 text-xs">
                                Build for high-performing businesses
                              </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/app-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Smartphone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  App development
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Apps for android, iOS & web
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/ecommerce-solutions"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <ShoppingCart className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  ECommerce Solutions
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Shopify, Woocommerce & Custom
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/payment-gateway"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <CreditCard className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2 text-sm">
                                  Payment Gateway
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Razorpay, Easebuzz, PayPal & More
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/payment-orchestration"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Workflow className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Payment Orchestration
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Router, Optimizer & More
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/progressive-web-apps"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  Progressive Web Apps
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Native app experience on web
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* MANAGE Column */}
                        <div>
                          <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6 font-semibold">
                            ENGINEERING AND AI
                          </h3>
                          <div className="space-y-4">
                            <Link
                              to="/services/software-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Code className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  Software Development
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Custom software for your business
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/api-microservices"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/api-microservices"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Server className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  API & Microservices
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Host and scale without the hassle
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/ai-automation"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/ai-automation"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Brain className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  AI and Automation
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Automate tasks with AI and ML
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/white-label-solutions"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/white-label-solutions"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Package className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  White Label Solutions
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Custom solutions for your brand
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/services/saas-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/saas-development"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Cloud className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  SAAS
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Build and scale your SaaS product
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/system-integration"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/system-integration"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Cog className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  System Integration
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Connect and integrate systems
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* OPTIMIZE Column */}
                        <div>
                          <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6 font-semibold">
                            BUILD, DESIGN AND DEVOPS
                          </h3>
                          <div className="space-y-4">
                            <Link
                              to="/services/ui-ux-design"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/ui-ux-design"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <PenTool className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2 text-sm">
                                  UI/UX Design
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Design that drives engagement
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/cloud-operations"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/cloud-operations"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <CloudCog className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  CLOUD OPERATIONS
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
                                  AWS, Azure, GCP & More
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/software-hardware-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/software-hardware-development"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Cpu className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  Software + Hardware Development
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Code Controls Hardware
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/services/rd-prototyping"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/rd-prototyping"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <FlaskConical className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  R&D and Prototyping
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Rapid prototyping for your ideas
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/services/pcb-hardware-design"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/pcb-hardware-design"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <CircuitBoard className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  PCB Hardware Design
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Custom PCB design and development
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/devops-cicd"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/devops-cicd"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <GitBranch className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  DevOps CI/CD
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Streamline deployment and operations
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* EXTEND Column */}
                        <div>
                          <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6 font-semibold">
                            Growth Strategy and consulting
                          </h3>
                          <div className="space-y-4">
                            <Link
                              to="/services/seo-optimization"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/seo-optimization"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Search className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  SEO
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Optimize your site for search engines
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/digital-marketing"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/digital-marketing"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Megaphone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  Digital Marketing
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Grow with digital marketing
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/content-creation"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/content-creation"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <FileText className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2 text-sm">
                                  Content Creation
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Engage audience with quality content
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/services/mvp-development"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/mvp-development"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Rocket className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Prototyping and MVP
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Validate your idea with a prototype
                                </div>
                              </div>
                            </Link>
                            <Link
                              to="/services/consulting-strategy"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/consulting-strategy"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <MessageSquare className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Consulting & Strategy
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Tailored strategies for your business
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/services/data-analytics"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMenuOpen(false);
                                handleSamePageNavigation(
                                  "/services/data-analytics"
                                );
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <PieChart className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 text-sm">
                                  Data Analytics
                                </div>
                                <div className="text-gray-400 text-xs">
                                  Make data-driven decisions
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA Cards */}
                      <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700">
                        <Link
                          to="/services"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                            handleSamePageNavigation("/services");
                          }}
                          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-4 rounded-lg transition-all duration-500 group"
                          style={{
                            backgroundSize: "200% 200%",
                            animation: "gradientShift 3s ease infinite",
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium group-hover:text-gray-300">
                                Services overview
                              </div>
                              <div className="text-gray-200 text-sm">
                                Explore the power of the Syntellite Services
                              </div>
                            </div>
                            <div className="text-gray-200">↗</div>
                          </div>
                        </Link>

                        <Link
                          to="/contact"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                            handleSamePageNavigation("/contact");
                          }}
                          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-4 rounded-lg transition-all duration-500 group"
                          style={{
                            backgroundSize: "200% 200%",
                            animation: "gradientShift 3s ease infinite",
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-medium group-hover:text-gray-300">
                                Didn't find what you need?
                              </div>
                              <div className="text-gray-200 text-sm">
                                Request a callback
                              </div>
                            </div>
                            <div className="text-gray-200">↗</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us Link */}
              <Link
                to="/about"
                onClick={() => handleSamePageNavigation("/about")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>

              {/* Contact Us Link */}
              <Link
                to="/contact"
                onClick={() => handleSamePageNavigation("/contact")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>

              {/* Labs Link */}
              <Link
                to="/labs-careers-coming-soon"
                onClick={() => handleSamePageNavigation("/labs-careers-coming-soon")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Labs
              </Link>

              {/* Careers Link */}
              <Link
                to="/labs-careers-coming-soon"
                onClick={() => handleSamePageNavigation("/labs-careers-coming-soon")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Careers
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                onClick={() => handleSamePageNavigation("/contact")}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-6 py-2 rounded-[30px] transition-all duration-500 font-medium animate-gradient flex items-center gap-2"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease infinite",
                }}
              >
                <MdLocalPhone className="w-4 h-4" />
                Request Call Back
              </Link>
              <Link
                to="/book-meeting"
                onClick={() => handleSamePageNavigation("/book-meeting")}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-6 py-2 rounded-[30px] transition-all duration-500 font-medium animate-gradient flex items-center gap-2"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease infinite",
                }}
              >
                <Users className="w-4 h-4" />
                Book a Meeting
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Home
                </Link>

                {/* Services Mobile - Fixed to use relative path */}
                <Link
                  to="/services"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/services");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Services
                </Link>

                <Link
                  to="/about"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/about");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/contact");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/labs-careers-coming-soon"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/labs-careers-coming-soon");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Labs
                </Link>
                <Link
                  to="/labs-careers-coming-soon"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                    handleSamePageNavigation("/labs-careers-coming-soon");
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Careers
                </Link>

                {/* Mobile Actions */}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/contact"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                      handleSamePageNavigation("/contact");
                    }}
                    className="flex items-center justify-center gap-2 mx-3 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    <MdLocalPhone className="w-4 h-4" />
                    Request Call Back
                  </Link>
                  <Link
                    to="/book-meeting"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDropdown(null);
                      handleSamePageNavigation("/book-meeting");
                    }}
                    className="flex items-center justify-center gap-2 mx-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    <Users className="w-4 h-4" />
                    Book a Meeting
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
