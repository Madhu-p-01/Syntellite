import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import {
  Database,
  Lock,
  Zap,
  FolderOpen,
  Radio,
  Box,
  Share2,
  Check,
  Palette,
  Cloud,
  Code,
  Bot,
  Gauge,
  Smartphone,
  ShoppingCart,
  Layers,
  Cpu,
  Server,
  Network,
  BrainCircuit,
  BarChart,
  AppWindow,
  Store,
  ChevronDown,
} from "lucide-react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  features?: { text: string; icon: React.ReactNode }[];
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  features,
  className,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "relative h-[400px] rounded-xl overflow-hidden group border border-white/20 hover:border-sky-400 transition-colors",
        "p-[1px]",
        className
      )}
    >
      <div className="h-full w-full bg-[--card-dark-bg] rounded-[11px] p-6 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          {children}
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-white w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg">
              {icon}
            </div>
            <h3 className="text-white font-medium text-base leading-6">
              {title}
            </h3>
          </div>
          <div className="mb-6 flex-1">
            <div className="text-sm leading-6 font-medium text-gray-400">
              {description}
            </div>
          </div>
          {features && (
            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="text-sky-400 w-4 h-4 flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-300 text-sm leading-5 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MobileFeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-[--card-dark-bg] border border-white/20 rounded-lg p-4 flex items-start gap-4">
    <div className="text-white w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const serviceCards = [
    {
        icon: <Code className="w-5 h-5" />,
        title: "Custom Software Development",
        description: "Build robust, scalable applications tailored to your business needs.",
        features: [
          { icon: <Layers className="w-4 h-4" />, text: "Modular architecture" },
          { icon: <Check className="w-4 h-4" />, text: "Full ownership" },
          { icon: <Zap className="w-4 h-4" />, text: "Transparent process" },
        ],
        background: <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl" />
      },
      {
        icon: <Palette className="w-5 h-5" />,
        title: "UI/UX Design Systems",
        description: "Intuitive, accessible, and delightful user experiences built from scratch or based on your vision.",
        features: [
          { icon: <Palette className="w-4 h-4" />, text: "Figma-first design" },
          { icon: <Box className="w-4 h-4" />, text: "Component libraries" },
          { icon: <BrainCircuit className="w-4 h-4" />, text: "User-first approach" },
        ],
        background: <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
      },
      {
        icon: <Cloud className="w-5 h-5" />,
        title: "Cloud & DevOps",
        description: "Automate your infrastructure and scale seamlessly with cloud-native tools.",
        features: [
          { icon: <Cloud className="w-4 h-4" />, text: "AWS, GCP, Azure" },
          { icon: <Zap className="w-4 h-4" />, text: "CI/CD pipelines" },
          { icon: <Code className="w-4 h-4" />, text: "Infrastructure as Code" },
        ],
        background: <div className="absolute -top-16 -left-16 w-48 h-48 border-4 border-purple-500/20 rounded-full" />
      },
      {
        icon: <Share2 className="w-5 h-5" />,
        title: "API & Microservices",
        description: "Architect and deploy scalable APIs and microservices.",
        features: [
          { icon: <Network className="w-4 h-4" />, text: "REST, GraphQL" },
          { icon: <Server className="w-4 h-4" />, text: "Containerized services" },
          { icon: <Cpu className="w-4 h-4" />, text: "Domain-driven design" },
        ],
        background: <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-green-500/10 to-transparent" />
      },
      {
        icon: <Bot className="w-5 h-5" />,
        title: "AI & Automation",
        description: "Add intelligence with ML models, automation pipelines, and chatbot integrations.",
        features: [
          { icon: <Bot className="w-4 h-4" />, text: "OpenAI, HuggingFace" },
          { icon: <BarChart className="w-4 h-4" />, text: "Predictive analytics" },
          { icon: <BrainCircuit className="w-4 h-4" />, text: "RAG systems / AI agents" },
        ],
        background: <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
      },
      {
        icon: <Gauge className="w-5 h-5" />,
        title: "Performance Optimization",
        description: "Diagnose and improve app speed, reliability, and resource efficiency.",
        features: [
          { icon: <BarChart className="w-4 h-4" />, text: "Lighthouse scoring" },
          { icon: <Box className="w-4 h-4" />, text: "Bundle analysis" },
          { icon: <Zap className="w-4 h-4" />, text: "CDN & edge tuning" },
        ],
        background: <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-full" />
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        title: "Cross-platform Apps",
        description: "Build mobile & desktop apps using a shared codebase.",
        features: [
          { icon: <Smartphone className="w-4 h-4" />, text: "Flutter, React Native" },
          { icon: <AppWindow className="w-4 h-4" />, text: "Electron apps" },
          { icon: <Radio className="w-4 h-4" />, text: "Auto-sync & offline support" },
        ],
        background: <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      },
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "eCommerce & Integrations",
        description: "Shopify, WooCommerce, Stripe, Razorpay, WhatsApp, CRM & ERP integrations.",
        features: [
          { icon: <Store className="w-4 h-4" />, text: "End-to-end store builds" },
          { icon: <Lock className="w-4 h-4" />, text: "Payment gateways" },
          { icon: <Share2 className="w-4 h-4" />, text: "API-based automation" },
        ],
        background: <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/10 rounded-full" />
      },
];

export const FeaturesGrid: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileVisibleCards = showAll ? serviceCards : serviceCards.slice(0, 3);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[--main-dark-bg] py-16"
    >
      <div className="text-left mb-12">
        <motion.div variants={itemVariants} className="text-sky-400 text-xs font-normal uppercase tracking-[1.2px] font-mono">
          Our Services
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-[35px] leading-[43px] font-medium max-w-[448px] mt-4">
          <span className="text-white">Everything you need to</span>
          <span className="text-gray-400"> build your product.
          </span>
        </motion.h2>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {serviceCards.map((card, index) => (
          <motion.div variants={itemVariants} key={index}>
            <FeatureCard {...card}>{card.background}</FeatureCard>
          </motion.div>
        ))}
      </div>

      {/* Mobile List */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence>
          {mobileVisibleCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileFeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="lg:hidden text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sky-400 font-semibold flex items-center justify-center w-full"
        >
          <span>{showAll ? "Show less" : "Show all services"}</span>
          <ChevronDown
            className={`w-5 h-5 ml-1 transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* <motion.div variants={itemVariants} className="text-center mt-12">
        <p className="text-lg sm:text-xl lg:text-[23px] leading-8 font-medium tracking-[-0.16px]">
          <span className="text-white">Use one or all.</span>
          <span className="text-gray-400">
            {" "}
            Best of breed products. Integrated as a platform.
          </span>
        </p>
      </motion.div> */}
    </motion.div>
  );
};

export default FeaturesGrid;
