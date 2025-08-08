import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, Bell } from "lucide-react";
import syntelliteLogo from "../assets/syntellite_logo.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoonPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-08-15T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5">
      <div className="max-w-4xl mx-auto text-center mt-8">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <img
            src={syntelliteLogo}
            alt="Syntellite"
            className="h-40 md:h-48 mx-auto mb-4"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Innovations like Never Before with Syntellite!
        </motion.p>

        {/* Launch Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-300 mb-2">Launching on</p>
          <p className="text-2xl font-bold text-white">
            August 15th, 2025 at 12:00 AM
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-4 gap-2 max-w-sm md:max-w-lg mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-4 text-center"
                animate={{
                  scale: item.label === "Seconds" ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: item.label === "Seconds" ? Infinity : 0,
                  repeatType: "loop",
                }}
              >
                <motion.div
                  key={item.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-3xl font-bold text-white mb-1"
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              Modern Solutions
            </h3>
            <p className="hidden md:block text-gray-400">
              Cutting-edge technology solutions for your business needs
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2">
              Expert Team
            </h3>
            <p className="hidden md:block text-gray-400">
              Experienced professionals ready to transform your ideas
            </p>
          </div>
        </motion.div>

        {/* Email Subscription */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-md mx-auto mb-8"
        >
          <p className="text-gray-300 mb-4">Get notified when we launch</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
              Notify Me
            </button>
          </div>
        </motion.div> */}

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-gray-400"
        >
          <p>
            &copy; 2025 Syntellite Innovations Private Limited.
            <br /> All Rights Reserved
          </p>
        </motion.div>

        {/* Desktop Oval Blue Glowing Cursor Follower */}
        <motion.div
          className="hidden md:block fixed w-32 h-20 pointer-events-none z-60"
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 40,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-cyan-400/40 to-blue-600/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-2 bg-gradient-to-r from-blue-400/20 via-cyan-300/30 to-blue-500/20 rounded-full blur-lg" />
          <div className="absolute inset-4 bg-gradient-to-r from-blue-300/15 via-cyan-200/25 to-blue-400/15 rounded-full blur-md" />
        </motion.div>

        {/* Enhanced Cursor Following Elements */}
        <motion.div
          className="fixed w-4 h-4 bg-blue-400/50 rounded-full pointer-events-none z-50 shadow-lg shadow-blue-400/30"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: [1, 1.2, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            scale: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        />
        <motion.div
          className="fixed w-8 h-8 border border-cyan-400/30 rounded-full pointer-events-none z-40"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        />
        <motion.div
          className="fixed w-12 h-12 border border-purple-400/20 rounded-full pointer-events-none z-30"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        />
        <motion.div
          className="fixed w-2 h-2 bg-pink-400/50 rounded-full pointer-events-none z-45"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 35,
          }}
        />
        <motion.div
          className="fixed w-16 h-16 border border-green-400/15 rounded-full pointer-events-none z-25"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
          }}
        />

        {/* Cursor Trail Effect */}
        <motion.div
          className="fixed w-6 h-6 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full pointer-events-none z-35"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: [1, 1.2, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 18,
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/6 w-2 h-2 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 90, 180],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/6 right-1/3 w-1 h-1 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2.5,
          }}
        />

        {/* Additional Cursor-Responsive Elements */}
        <motion.div
          className="fixed w-20 h-20 border border-orange-400/10 rounded-full pointer-events-none z-20"
          animate={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            rotate: [0, 360],
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 30,
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        <motion.div
          className="fixed w-24 h-24 border border-indigo-400/8 rounded-full pointer-events-none z-15"
          animate={{
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            rotate: [360, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 35,
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/5 left-1/2 w-4 h-4 border border-blue-400/30 rotate-45"
          animate={{
            rotate: [45, 225, 405],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/2 w-3 h-3 border border-cyan-400/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          }}
        />

        {/* Additional Background Elements */}
        <motion.div
          className="absolute top-1/8 left-1/8 w-1.5 h-1.5 bg-orange-400 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 12, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-3/8 right-1/8 w-2.5 h-2.5 bg-indigo-400 rounded-full"
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 120, 240, 360],
            x: [0, -18, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.8,
          }}
        />
        <motion.div
          className="absolute bottom-1/8 left-1/2 w-1 h-1 bg-teal-400 rounded-full"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.4, 0.9, 0.4],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2.2,
          }}
        />
        <motion.div
          className="absolute top-5/8 left-1/5 w-2 h-2 bg-rose-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, -90, -180, -270, -360],
            x: [0, 8, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 7.8,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.8,
          }}
        />
        <motion.div
          className="absolute top-7/8 right-1/5 w-1.5 h-1.5 bg-amber-400 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.7, 0.2],
            x: [0, -10, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            repeatType: "loop",
            delay: 4.2,
          }}
        />

        {/* More Geometric Shapes */}
        <motion.div
          className="absolute top-2/5 left-3/4 w-3 h-3 border border-emerald-400/35 rotate-12"
          animate={{
            rotate: [12, 192, 372],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2.5,
          }}
        />
        <motion.div
          className="absolute bottom-2/5 left-1/8 w-2 h-2 border border-violet-400/40 rounded-full"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 20, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8.2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 3.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/8 w-4 h-4 border border-lime-400/25 rotate-30"
          animate={{
            rotate: [30, 210, 390],
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.65, 0.25],
            y: [0, -22, 0],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.2,
          }}
        />

        {/* Balanced Background Animations */}
        <motion.div
          className="absolute top-1/6 left-5/6 w-3 h-3 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-400/40"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8.3,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.8,
          }}
        />

        {/* Gentle Pulsating Ring */}
        <motion.div
          className="absolute top-2/3 left-1/6 w-6 h-6 border border-pink-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.1, 0.4],
            rotate: [0, 180],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2.3,
          }}
        />

        {/* Subtle Particle Elements */}
        <motion.div
          className="absolute top-1/3 left-2/3 w-0.5 h-0.5 bg-sky-400 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            repeatType: "loop",
            delay: 4.8,
          }}
        />
      </div>
    </div>
  );
};

export default ComingSoonPage;
