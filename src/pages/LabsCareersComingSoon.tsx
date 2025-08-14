import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const LabsCareersComingSoon = () => {
  const [dots, setDots] = useState('');

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Coming Soon | Syntellite"
        description="We're working hard to bring you something amazing. Stay tuned for exciting updates from Syntellite."
        name="Syntellite"
        type="website"
      />
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-20 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ background: '#FF81D1' }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"
            style={{ background: '#A42EFF' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"
            style={{ background: '#2E39FF' }}
          ></div>
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Coming Soon Text */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-[#FF81D1] via-[#A42EFF] to-[#2E39FF] bg-clip-text text-transparent">
                Coming Soon
              </span>
              <span className="text-white">{dots}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              We are working hard to bring you something{' '}
              <span className="text-white font-semibold">amazing</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Our team is crafting innovative solutions that will revolutionize your experience. 
              Stay tuned for exciting updates!
            </motion.p>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto"
            >
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-[#FF81D1] via-[#A42EFF] to-[#2E39FF]"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
              <p className="text-sm text-gray-400">Progress: 75% Complete</p>
            </motion.div>

            {/* Floating Elements */}
            <div className="relative mt-16">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 left-1/4 w-4 h-4 bg-gradient-to-r from-[#FF81D1] to-[#EC4899] rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-4 right-1/4 w-3 h-3 bg-gradient-to-r from-[#A42EFF] to-[#8B5CF6] rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-12 left-1/2 w-2 h-2 bg-gradient-to-r from-[#2E39FF] to-[#3B82F6] rounded-full opacity-60"
              />
            </div>

            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-8"
            >
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#FF81D1] via-[#A42EFF] to-[#2E39FF] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                ← Back to Home
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Pulsing Ring Animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-96 h-96 border border-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-80 h-80 border border-white/5 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.05, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LabsCareersComingSoon;
