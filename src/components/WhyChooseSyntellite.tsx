import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Zap, Users, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const differentiators = [
  {
    icon: CheckCircle,
    title: "100% Success Rate",
    description:
      "Every project we undertake is completed successfully with guaranteed delivery.",
    stat: "100%",
    statLabel: "Project Success",
    color: "#3B82F6",
    features: ["On-time delivery", "Quality assurance", "Client satisfaction"],
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Agile methodology ensures quick turnarounds without compromising quality.",
    stat: "50%",
    statLabel: "Faster Delivery",
    color: "#EC4899",
    features: ["Agile sprints", "Continuous deployment", "Quick iterations"],
  },
  {
    icon: Users,
    title: "End-to-End Solutions",
    description:
      "From concept to deployment, we handle every aspect of your project.",
    stat: "360°",
    statLabel: "Full Coverage",
    color: "#8B5CF6",
    features: [
      "Design to development",
      "Testing & QA",
      "Deployment & maintenance",
    ],
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description:
      "Round-the-clock support and maintenance to keep your systems running.",
    stat: "24/7",
    statLabel: "Availability",
    color: "#3B82F6",
    features: ["Instant response", "Proactive monitoring", "Emergency fixes"],
  },
];

const WhyChooseSyntellite = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      differentiators.forEach((_, index) => {
        const timer = setTimeout(() => {
          let count = 0;
          const target =
            index === 0 ? 100 : index === 1 ? 50 : index === 2 ? 360 : 24;
          const increment = target / 50;

          const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
              setCounters((prev) => ({ ...prev, [index]: target }));
              clearInterval(counter);
            } else {
              setCounters((prev) => ({ ...prev, [index]: Math.floor(count) }));
            }
          }, 30);
        }, index * 200);

        return () => clearTimeout(timer);
      });
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
          className="absolute top-32 right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ background: "#EC4899" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
          style={{ background: "#8B5CF6" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"
          style={{ background: "#3B82F6" }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-400 uppercase tracking-wider mb-4"
          >
            <span className="font-bold italic">WHY CHOOSE</span>{" "}
            <span className="font-medium italic">SYNTELLITE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            What Sets Us Apart
            <br />
            <span className="text-blue-400">From The Competition</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We don't just build software - we craft solutions that drive real
            business results. Here's why leading companies choose Syntellite as
            their technology partner.
          </motion.p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                ${
                  hoveredCard === index
                    ? "bg-gray-900 border-gray-600 shadow-2xl scale-105"
                    : "bg-gray-950 border-gray-800 hover:border-gray-700"
                }
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stat Counter */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-400">
                  {index === 2
                    ? `${counters[index] || 0}°`
                    : index === 3
                    ? `${counters[index] || 0}/7`
                    : `${counters[index] || 0}%`}
                </div>
                <div className="text-sm text-gray-400">{item.statLabel}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Features - Show on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hoveredCard === index
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-400 flex items-center"
                      >
                        <div className="w-1 h-1 bg-gray-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Ready to experience the Syntellite difference?
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
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSyntellite;
