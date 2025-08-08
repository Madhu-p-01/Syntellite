import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import favIcon from "../assets/fav.png";
import indianFlag from "../assets/indian-flag.png";

interface IndependenceDayLoadingScreenProps {
  onLoadingComplete: () => void;
}

const IndependenceDayLoadingScreen: React.FC<
  IndependenceDayLoadingScreenProps
> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Ready to start your project?",
    "Building innovative solutions",
    "Transforming ideas to reality",
  ];

  useEffect(() => {
    // Text animation sequence
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        if (prev < texts.length - 1) {
          return prev + 1;
        } else {
          clearInterval(textInterval);
          // Start exit animation after last text
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(onLoadingComplete, 1000);
          }, 1200);
          return prev;
        }
      });
    }, 1200); // Each text shows for 0.8 seconds - balanced "tak tak tak"

    return () => clearInterval(textInterval);
  }, [onLoadingComplete, texts.length]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-8 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Background animated elements - Enhanced */}
          <motion.div
            className="absolute top-5 left-5 w-48 h-48 rounded-full opacity-[0.14] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #1E40AF 0%, #3B82F6 40%, transparent 80%)",
            }}
            animate={{
              x: [0, 200, -150, 100, 0],
              y: [0, -120, 150, -80, 0],
              scale: [1, 2, 0.5, 1.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/4 right-10 w-56 h-56 rounded-full opacity-[0.12] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #2563EB 0%, #1D4ED8 50%, transparent 80%)",
            }}
            animate={{
              x: [0, -250, 180, -100, 0],
              y: [0, 200, -120, 160, 0],
              scale: [1, 0.4, 2.2, 0.8, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute bottom-10 left-1/4 w-[300px] h-76 rounded-full opacity-[0.13] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #1E3A8A 0%, #3B82F6 30%, transparent 80%)",
            }}
            animate={{
              x: [0, 300, -200, 150, 0],
              y: [0, -180, 120, -100, 0],
              scale: [1, 1.8, 0.6, 2.5, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 w-52 h-52 rounded-full opacity-[0.15] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #1E40AF 0%, #2563EB 40%, transparent 80%)",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: [0, -180, 220, -120, 0],
              y: [0, 160, -140, 180, 0],
              scale: [1, 2.2, 0.4, 1.6, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-15 w-60 h-60 rounded-full opacity-[0.14] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #1D4ED8 0%, #3B82F6 50%, transparent 80%)",
            }}
            animate={{
              x: [0, -220, 160, -180, 0],
              y: [0, -200, 140, -160, 0],
              scale: [1, 0.5, 2.8, 0.7, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          <motion.div
            className="absolute top-16 right-1/3 w-44 h-44 rounded-full opacity-[0.10] blur-2xl"
            style={{
              background:
                "radial-gradient(circle, #FF6B9D 0%, #C147E9 60%, transparent 80%)",
            }}
            animate={{
              x: [0, 140, -180, 120, 0],
              y: [0, -100, 140, -80, 0],
              scale: [1, 1.9, 0.6, 2.1, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          <motion.div
            className="absolute bottom-16 left-16 w-50 h-50 rounded-full opacity-[0.09] blur-2xl"
            style={{
              background:
                "radial-gradient(circle, #4F46E5 0%, #7C3AED 40%, transparent 80%)",
            }}
            animate={{
              x: [0, 160, -140, 100, 0],
              y: [0, -120, 100, -90, 0],
              scale: [1, 2.3, 0.5, 1.7, 1],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />

          <motion.div
            className="absolute top-1/3 left-20 w-40 h-40 rounded-full opacity-[0.11] blur-2xl"
            style={{
              background:
                "radial-gradient(circle, #EC4899 0%, #8B5CF6 50%, transparent 80%)",
            }}
            animate={{
              x: [0, 120, -160, 80, 0],
              y: [0, 110, -90, 130, 0],
              scale: [1, 0.7, 2.4, 0.9, 1],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
          />

          {/* Indian Flag - Full Viewport Size */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 rotate-[-30deg]">
            <div className="relative">
              {/* Indian Flag Image - Entire Viewport Size */}
              <img
                src={indianFlag}
                alt="Indian Flag"
                className="w-screen h-screen object-cover"
                style={{ minWidth: '100vw', minHeight: '100vh' }}
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 rounded-sm"></div>
            </div>
          </div>

          {/* Main container with logo and text */}
          <div className="flex items-center justify-center w-full max-w-md mx-auto relative z-20">
            {/* Left side - Syntellite Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={favIcon}
                alt="Syntellite"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Right side - Animated Text */}
            <div className="ml-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  className="text-white text-base md:text-lg font-light tracking-wide"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {texts[currentTextIndex]}
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator - matches text width */}
              <motion.div
                className="mt-3 h-0.5 bg-gray-800 rounded-full overflow-hidden"
                style={{ width: "fit-content", minWidth: "240px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF81D1 0%, #A42EFF 50%, #2E39FF 100%)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 3.8,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Tagline below main components */}
          <motion.div
            className="text-white text-xs italic text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="font-black">BOLD</span>{" "}
            <span className="font-medium">IDEAS</span>{" "}
            <span className="font-light">ENGINEERED!</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IndependenceDayLoadingScreen;
