import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onPlaceholderClick, onOpenStories }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#010409]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-[#00A3E0] w-10 h-10 flex items-center justify-center rounded-sm">
              <span className="text-black font-orbitron font-black text-xl">SL</span>
            </div>
            <div className="hidden md:flex flex-col -space-y-1">
              <span className="text-white font-black text-xl tracking-tighter uppercase italic">
                SUANLI FC
              </span>
              <span className="text-[9px] text-[#00A3E0] font-black tracking-[0.4em] uppercase opacity-90">
                北京算力足球俱乐部
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#matches" onClick={(e) => handleNavClick(e, 'matches')} className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
              Matches
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
              About
            </a>
            <a href="#squad" onClick={(e) => handleNavClick(e, 'squad')} className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
              Squad
            </a>
            <a href="#training" onClick={(e) => handleNavClick(e, 'training')} className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
              Training
            </a>
            <a href="#global" onClick={(e) => handleNavClick(e, 'global')} className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-widest transition-colors">
              Global
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={e => onPlaceholderClick(e, 'Academy')}
              className="hidden md:block px-6 py-2 border border-[#00A3E0]/30 text-[#00A3E0] hover:bg-[#00A3E0] hover:text-black text-[10px] font-black uppercase tracking-widest transition-all"
            >
              Academy
            </button>
            <button
              onClick={onOpenStories}
              className="hidden md:block px-6 py-2 bg-white text-black hover:bg-[#00A3E0] text-[10px] font-black uppercase tracking-widest transition-all"
            >
              Archives
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#010409] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="bg-[#00A3E0] w-10 h-10 flex items-center justify-center rounded-sm">
                  <span className="text-black font-orbitron font-black text-xl">SL</span>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
              {['matches', 'about', 'squad', 'training', 'global'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={(e) => handleNavClick(e, item)} 
                  className="text-3xl font-black text-white uppercase tracking-widest hover:text-[#00A3E0] transition-colors"
                >
                  {item}
                </a>
              ))}
              
              <div className="w-12 h-px bg-white/20 my-4" />
              
              <button
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  onPlaceholderClick(e, 'Academy');
                }}
                className="text-xl font-bold text-[#00A3E0] uppercase tracking-widest"
              >
                Academy
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenStories();
                }}
                className="text-xl font-bold text-white uppercase tracking-widest"
              >
                Archives
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
