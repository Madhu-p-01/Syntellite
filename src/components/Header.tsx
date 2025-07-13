import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/syntellite_logo.png";
import { Menu, X, ChevronDown, Code, Smartphone, Cloud, Shield, Zap, BarChart3, Layers, AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navLinks = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    href: "/services",
    columns: [
        {
            title: "Core Services",
            links: [
              {
                title: "Custom Software Development",
                description: "Tailored software solutions",
                icon: <Code />,
                href: "/services#custom-software-development"
              },
              {
                title: "Mobile App Development",
                description: "iOS and Android applications",
                icon: <Smartphone />,
                href: "/services#mobile-app-development"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure",
                icon: <Cloud />,
                href: "/services#cloud-solutions"
              },
            ],
          },
          {
            title: "Advanced Services",
            links: [
              {
                title: "Cybersecurity",
                description: "Protect your digital assets",
                icon: <Shield />,
                href: "/services#cybersecurity"
              },
              {
                title: "AI & Machine Learning",
                description: "Integrate intelligent features",
                icon: <Zap />,
                href: "/services#ai-ml"
              },
              {
                title: "Data Analytics",
                description: "Actionable insights from data",
                icon: <BarChart3 />,
                href: "/services#data-analytics"
              },
            ],
          },
          {
            title: "Design",
            links: [
              {
                title: "UI/UX Design",
                description: "Engaging user experiences",
                icon: <Layers />,
                href: "/services#ui-ux-design"
              },
            ],
          },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    columns: [
        {
            title: "Our Work",
            links: [
                { title: "Web Applications", href: "/portfolio#web-applications", description: "Modern and responsive web apps.", icon: <AppWindow /> },
                { title: "Mobile Applications", href: "/portfolio#mobile-applications", description: "Native and cross-platform mobile apps.", icon: <Smartphone /> },
                { title: "Case Studies", href: "/portfolio#case-studies", description: "In-depth looks at our successful projects.", icon: <Layers /> },
            ]
        }
    ]
  },
  { title: "About Us", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <>
      <header className="bg-[--main-dark-bg] text-white border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between p-4 px-4 sm:px-6 lg:px-20">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <img src={logo} alt="Syntellite Logo" className="h-8" />
            </Link>
            <nav className="hidden lg:flex items-center space-x-4 text-sm">
              {navLinks.map((link) => (
                <div key={link.title} className="relative group">
                  {link.columns ? (
                    <>
                      <Link to={link.href || '#'} className="flex items-center hover:text-gray-300 py-2">
                        <span>{link.title}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Link>
                      <div className="absolute top-full left-0 mt-1 bg-[--card-dark-bg] border border-gray-800 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible w-auto">
                        <div className="flex flex-row py-6 px-6 gap-2">
                          {link.columns.map((column, colIndex) => (
                            <ul key={colIndex} className="flex flex-col gap-4 w-[280px] xl:w-[250px]">
                                {column.title && <div className="group flex items-center gap-1 text-foreground-lighter text-xs uppercase tracking-widest font-mono">{column.title}</div>}
                              {column.links.map((sublink, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={sublink.href}
                                  className="group/menu-item flex text-foreground-light text-sm hover:text-foreground select-none gap-3 rounded-md leading-none no-underline outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground items-center h-fit p-2"
                                >
                                  <div className="shrink-0 border bg-surface-200 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg text-cyan-400">
                                    {sublink.icon}
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white">{sublink.title}</p>
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-gray-400 group-hover/menu-item:text-gray-300 text-xs">{sublink.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={link.href || '#'} className="hover:text-gray-300 py-2">
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-md text-sm hover:bg-gray-600"
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-blue-500 px-3 py-1 rounded-md text-sm hover:bg-blue-600"
            >
              Start your project
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full bg-[--main-dark-bg] shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <img src={logo} alt="Syntellite Logo" className="h-8" />
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <nav className="p-4">
                {navLinks.map((link) => (
                  <div key={link.title} className="border-b border-gray-800">
                    {link.columns ? (
                      <div>
                        <button
                          onClick={() => toggleAccordion(link.title)}
                          className="w-full flex justify-between items-center py-3 text-left text-white"
                        >
                          <span className="font-semibold">{link.title}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openAccordion === link.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openAccordion === link.title && (
                          <div className="pl-4 pb-2">
                            {link.columns.flatMap(col => col.links).map((item) => (
                              <Link
                                key={item.title}
                                to={item.href}
                                className="block py-2 text-sm text-gray-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 font-semibold text-white"
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
