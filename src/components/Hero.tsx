import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenStories }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A111F] pt-20">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="w-full lg:w-3/5 h-full relative">
          {/* Gradients to blend the image smoothly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A111F] via-[#0A111F]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F] via-[#0A111F]/20 to-transparent z-10" />
          {/* Classic Blue tint overlay */}
          <div className="absolute inset-0 bg-[#00A3E0]/20 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2000&auto=format&fit=crop" 
            alt="Professional Football Stadium" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Top Badge */}
            <div className="flex items-center space-x-4">
              <div className="w-8 md:w-12 h-0.5 bg-[#00A3E0]" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#00A3E0] uppercase">
                中国足球先驱者
              </span>
            </div>
            
            {/* Main Title */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tight leading-[1.1]">
                北京算力
              </h1>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-[#00A3E0] tracking-tighter leading-[0.9] transform -skew-x-12 italic">
                SUANLI FC
              </h1>
            </div>

            {/* Paragraphs */}
            <div className="space-y-2 pt-6 md:pt-8">
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide">
                始于1990s的足球热血，奔赴AI时代的不朽传奇。
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-light tracking-wide">
                我们不仅在踢球，我们更在<span className="font-bold">拥抱世界</span>。
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 md:pt-12">
              <button 
                onClick={() => document.getElementById('matches')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 bg-[#00A3E0] text-white font-bold tracking-widest text-sm hover:bg-blue-500 transition-all shadow-lg shadow-[#00A3E0]/20"
              >
                探索赛程
              </button>
              <button 
                onClick={onOpenStories}
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 font-bold tracking-widest text-sm hover:border-[#00A3E0] hover:text-[#00A3E0] transition-all"
              >
                俱乐部故事
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
