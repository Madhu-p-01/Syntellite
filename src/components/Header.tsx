import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { MdLocalPhone } from "react-icons/md";
import logo from "../assets/syntellite_logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { handleSamePageNavigation } = useNavigation();

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      {/* Main Navigation */}
      <header className="bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
                    className="absolute top-full left-[-475px] mt-6 w-[1400px] bg-black border border-gray-800 rounded-lg shadow-2xl z-50"
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
                              to="/services"
                              onClick={() => {
                                setActiveDropdown(null);
                                handleSamePageNavigation('/services');
                              }}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <FaCode className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <FaAppStoreIos className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Zap className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <RiSecurePaymentLine className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <GrMultiple className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300 flex items-center gap-2">
                                  Payment Orchestration
                                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Juspay Router, Razorpay Optimizer & More
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Cpu className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Cloud className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Shield className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Shield className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  SAAS
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Build and scale your SaaS product
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Palette className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Target className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Wrench className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Lightbulb className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Search className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-white font-medium group-hover/item:text-gray-300">
                                  PCB and Hardware Design
                                </div>
                                <div className="text-gray-400 text-sm">
                                  Design and prototype your hardware
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Puzzle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Figma className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <CloudLightning className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <CloudLightning className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                              to="/services"
                              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-purple-900/20 transition-colors group/item"
                            >
                              <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
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
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA Cards */}
                      <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700">
                        <Link
                          to="/Services"
                          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-4 rounded-lg transition-all duration-500 group"
                          style={{
                            backgroundSize: '200% 200%',
                            animation: 'gradientShift 3s ease infinite'
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
                          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-4 rounded-lg transition-all duration-500 group"
                          style={{
                            backgroundSize: '200% 200%',
                            animation: 'gradientShift 3s ease infinite'
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
                onClick={() => handleSamePageNavigation('/about')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>

              {/* Contact Us Link */}
              <Link
                to="/contact"
                onClick={() => handleSamePageNavigation('/contact')}
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
                onClick={() => handleSamePageNavigation('/contact')}
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-6 py-2 rounded-md transition-all duration-500 font-medium animate-gradient flex items-center gap-2"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              >
                <MdLocalPhone className="w-4 h-4" />
                Request Call Back
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
                  <button
                    onClick={() => handleDropdownToggle("Services")}
                    className="w-full flex items-center justify-between px-3 py-2 text-white hover:text-gray-300"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === "Services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "Services" && (
                    <div className="pl-6 space-y-2">
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-gray-300 hover:text-white"
                      >
                        Design
                      </Link>
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-gray-300 hover:text-white"
                      >
                        Development
                      </Link>
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-gray-300 hover:text-white"
                      >
                        CMS
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Contact Us
                </Link>
                <a
                  href="https://labs.syntellite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-white hover:text-gray-300"
                >
                  Careers
                </a>

                {/* Mobile Actions */}
                <div className="pt-4 space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-white hover:text-gray-300"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 text-white hover:text-gray-300"
                  >
                    Contact sales
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 mx-3 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    <MdLocalPhone className="w-4 h-4" />
                    Request Call Back
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
