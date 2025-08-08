import React from 'react';
import { motion } from 'framer-motion';

const NavigationLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-black/80 rounded-2xl p-8 flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-sm font-medium">Loading...</p>
      </div>
    </motion.div>
  );
};

export default NavigationLoader;
