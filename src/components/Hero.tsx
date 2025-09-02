import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.gettyimages.com/id/544182028/photo/saint-remy-june-1889-oil-on-canvas-29-x-36-1-4-inches-located-in-the-museum-of-modern-art-new.jpg?s=612x612&w=0&k=20&c=1CGrw3gOmjWGbpxWNsSm4rHtiaUOxhPuzdSfQK56qpk=')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light mb-6 tracking-wide"
        >
          Hello, I'm Tharika
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center space-x-2 text-sm tracking-widest uppercase"
        >
          <span>See what I'm working on Below ↓</span>
          <ChevronDown className="animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;