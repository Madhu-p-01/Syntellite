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
  const { handleSamePageNavigation } = useNavigation();
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
      <header className="bg-black/95 backdrop-blur-md border border-gray-800 fixed top-4 left-4 right-4 z-[9999] rounded-[30px] shadow-2xl">
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
                    className="fixed left-[15%] top-28 transform -translate-x-1/2 w-[1200px] bg-black/95 backdrop-blur-sm border border-gray-800 rounded-3xl shadow-2xl z-60"
                    style={{
                      animation: "dropdownSlide 0.2s ease-out forwards",
                      transformOrigin: "top center",
                    }}
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-8">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Web development
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  App development
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  ECommerce Solutions
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Payment Gateway
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Progressive Web Apps
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Software Development
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  API & Microservices
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  AI and Automation
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  White Label Solutions
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  SAAS
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  System Integration
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  UI/UX Design
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Software + Hardware Development
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  R&D and Prototyping
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  PCB and Hardware Design
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Design and prototype your hardware
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  DevOps CI/CD
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Automated deployment pipelines
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  SEO
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Digital Marketing
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Content Creation
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
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
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  Data Analytics
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Business intelligence and insights
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

              {/* Careers Link */}
              <a
                href="https://labs.syntellite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Careers
              </a>
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
                {/* Services Mobile */}
                <div>
                  <div className="flex items-center">
                    <Link
                      to="/services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                        handleSamePageNavigation("/services");
                      }}
                      className="flex-1 px-3 py-2 text-white hover:text-gray-300"
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => handleDropdownToggle("Services")}
                      className="px-3 py-2 text-white hover:text-gray-300"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === "Services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {activeDropdown === "Services" && (
                    <div
                      className="pl-6 space-y-2 mobile-dropdown"
                      onTouchMove={(e) => e.stopPropagation()}
                      onWheel={(e) => e.stopPropagation()}
                      onScroll={(e) => e.stopPropagation()}
                    >
                      {/* Getting Started */}
                      <Link
                        to="/services"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsMenuOpen(false);
                          handleSamePageNavigation("/services");
                        }}
                        className="flex items-center gap-3 px-3 py-2 text-purple-400 hover:text-white rounded-lg hover:bg-gray-800/50"
                      >
                        <Play className="w-4 h-4" />
                        Getting Started
                      </Link>

                      {/* Web and Apps Solutions */}
                      <div className="pt-2">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium px-3 py-1">
                          Web and Apps Solutions
                        </div>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/web-development");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/web-development");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Monitor className="w-4 h-4" />
                          Web Development
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/app-development");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/app-development");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Smartphone className="w-4 h-4" />
                          App Development
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ecommerce-solutions");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ecommerce-solutions");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          ECommerce Solutions
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/payment-gateway");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/payment-gateway");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <CreditCard className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            Payment Gateway
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/payment-orchestration");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/payment-orchestration");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Workflow className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            Payment Orchestration
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/progressive-web-apps");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/progressive-web-apps");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Globe className="w-4 h-4" />
                          Progressive Web Apps
                        </button>
                      </div>

                      {/* Engineering and AI */}
                      <div className="pt-2">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium px-3 py-1">
                          Engineering and AI
                        </div>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/software-development");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/software-development");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Code className="w-4 h-4" />
                          Software Development
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/api-microservices");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/api-microservices");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Server className="w-4 h-4" />
                          API & Microservices
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ai-automation");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ai-automation");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Brain className="w-4 h-4" />
                          AI and Automation
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/white-label-solutions");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/white-label-solutions");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Shield className="w-4 h-4" />
                          White Label Solutions
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/saas-development");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/saas-development");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Database className="w-4 h-4" />
                          SaaS Development
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/system-integration");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/system-integration");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Settings className="w-4 h-4" />
                          System Integration
                        </button>
                      </div>

                      {/* Build, Design and DevOps */}
                      <div className="pt-2">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium px-3 py-1">
                          Build, Design and DevOps
                        </div>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ui-ux-design");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/ui-ux-design");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Palette className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            UI/UX Design
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/cloud-operations");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/cloud-operations");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Target className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            Cloud Operations
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate(
                                  "/services/software-hardware-development"
                                );
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate(
                                  "/services/software-hardware-development"
                                );
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Wrench className="w-4 h-4" />
                          Software + Hardware
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/rd-prototyping");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/rd-prototyping");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Lightbulb className="w-4 h-4" />
                          R&D and Prototyping
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/pcb-hardware-design");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/pcb-hardware-design");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Search className="w-4 h-4" />
                          PCB Hardware Design
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/devops-cicd");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/devops-cicd");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <CloudLightning className="w-4 h-4" />
                          DevOps CI/CD
                        </button>
                      </div>

                      {/* Growth Strategy and Consulting */}
                      <div className="pt-2">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-medium px-3 py-1">
                          Growth Strategy and Consulting
                        </div>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/seo-optimization");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/seo-optimization");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Puzzle className="w-4 h-4" />
                          SEO Optimization
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/digital-marketing");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/digital-marketing");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Figma className="w-4 h-4" />
                          Digital Marketing
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/content-creation");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/content-creation");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <CloudLightning className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            Content Creation
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/mvp-development");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/mvp-development");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <TrendingUp className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            MVP Development
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/consulting-strategy");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/consulting-strategy");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <Briefcase className="w-4 h-4" />
                          <span className="flex items-center gap-2">
                            Consulting & Strategy
                            <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                              NEW
                            </span>
                          </span>
                        </button>
                        <button
                          onClick={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/data-analytics");
                              }, 100);
                            }
                          }}
                          onTouchStart={(e) => {
                            setTouchStartY(e.touches[0].clientY);
                            setIsScrolling(false);
                          }}
                          onTouchMove={(e) => {
                            const touchY = e.touches[0].clientY;
                            const diff = Math.abs(touchY - touchStartY);
                            if (diff > 10) {
                              setIsScrolling(true);
                            }
                          }}
                          onTouchEnd={(e) => {
                            if (!isScrolling) {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                              setTimeout(() => {
                                navigate("/services/data-analytics");
                              }, 100);
                            }
                            setTimeout(() => setIsScrolling(false), 100);
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 w-full text-left cursor-pointer"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          <BarChart3 className="w-4 h-4" />
                          Data Analytics
                        </button>
                      </div>
                    </div>
                  )}
                </div>

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
                <a
                  href="https://labs.syntellite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Careers
                </a>

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
