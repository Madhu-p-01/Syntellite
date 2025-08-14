import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  FileText,
  BarChart3,
  Cog,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery & Feasibility",
    description:
      "We start with a discovery session to understand your goals, evaluate feasibility, and align on expectations. Get started",
    duration: "1-2 weeks",
    deliverables: [
      "Project scope",
      "Technical feasibility",
      "Timeline estimate",
    ],
    color: "#3B82F6",
  },
  {
    id: 2,
    icon: FileText,
    title: "Proposal & Kickoff",
    description:
      "We share a tailored quotation, wireframes, and project proposal. Once approved and payment is completed, we officially begin.",
    duration: "3-5 days",
    deliverables: ["Detailed proposal", "Wireframes", "Project contract"],
    color: "#EC4899",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Research & Planning",
    description:
      "Our team conducts detailed analysis and prepares a structured project plan covering design, development, and delivery phases.",
    duration: "1-2 weeks",
    deliverables: [
      "Project roadmap",
      "Technical architecture",
      "Design system",
    ],
    color: "#8B5CF6",
  },
  {
    id: 4,
    icon: Cog,
    title: "Execution & Updates",
    description:
      "Development begins with regular progress reports, milestone reviews, and continuous collaboration to keep you in the loop.",
    duration: "4-12 weeks",
    deliverables: ["Weekly updates", "Milestone demos", "Final delivery"],
    color: "#3B82F6",
  },
];

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ background: "#3B82F6" }}
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
          style={{ background: "#EC4899" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"
          style={{ background: "#8B5CF6" }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-400 uppercase tracking-wider mb-4"
          >
            <span className="font-bold italic">OUR</span>{" "}
            <span className="font-medium italic">PROCESS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Innovation Through
            <br />
            <span className="text-blue-400">Systematic Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Our proven methodology transforms ideas into reality through
            structured phases, ensuring quality, transparency, and exceptional
            results.
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-800 rounded-full">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={
                isInView
                  ? {
                      width: `${
                        ((activeStep + 1) / processSteps.length) * 100
                      }%`,
                    }
                  : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 mx-4 lg:mx-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={`
                  relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                  ${
                    activeStep === index
                      ? "bg-gray-900 border-gray-600 shadow-2xl scale-105"
                      : "bg-gray-950 border-gray-800 hover:border-gray-700"
                  }
                  ${hoveredStep === index ? "transform -translate-y-2" : ""}
                `}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {activeStep >= index ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <motion.div
                      animate={activeStep === index ? { rotate: 360 } : {}}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="text-center mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* Deliverables - Always visible */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold mb-2 text-gray-300">
                        Deliverables:
                      </h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-400 flex items-center"
                          >
                            <div className="w-1 h-1 bg-gray-500 rounded-full mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to start your project journey with us?
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
