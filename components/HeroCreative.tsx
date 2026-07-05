
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';

const HeroCreative: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-[#F3F3F3] overflow-hidden flex flex-col justify-end pb-12 pt-32">
      
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4vw_4vw] pointer-events-none"></div>

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-start w-full">
        
        {/* Top Header / Meta Information */}
        <div className="w-full flex justify-between items-end mb-[10vh] md:mb-[15vh] border-b border-white/10 pb-6 uppercase font-medium tracking-widest text-[10px] md:text-xs">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-1 text-white/50"
          >
            <span className="text-[#CCFF00]">Independent</span>
            <span>Creative Agency</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-1 text-right text-white/50"
          >
            <span>Based In</span>
            <span className="text-white">London / NY</span>
          </motion.div>
        </div>

        {/* Massive Editorial Titles */}
        <div className="w-full relative flex flex-col items-center md:items-start title-wrapper cursor-default group">
            <motion.div
              initial={{ y: "100%", opacity: 0, skewX: -10 }}
              animate={{ y: 0, opacity: 1, skewX: -10 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden w-full flex"
            >
              <h1 className="font-[Syne] font-extrabold text-[18vw] md:text-[14vw] leading-[0.8] tracking-[-0.04em] uppercase text-[#F3F3F3] hover:text-[#CCFF00] transition-colors duration-500">
                RADICAL
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ y: "100%", opacity: 0, skewX: -10 }}
              animate={{ y: 0, opacity: 1, skewX: -10 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden w-full flex md:justify-end mt-4 md:mt-0"
            >
              <h1 className="font-[Syne] font-extrabold text-[18vw] md:text-[14vw] leading-[0.8] tracking-[-0.04em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)"}}>
                VISION
              </h1>
            </motion.div>
        </div>

        {/* Action Bottom Row */}
        <div className="w-full mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block text-xs uppercase tracking-widest text-white/40 leading-relaxed max-w-[200px]"
            >
              We engineer brand identities and digital experiences that refuse to be ignored.
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex justify-center"
            >
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 flex flex-col items-center justify-center gap-2 group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all duration-500 cursor-pointer">
                  <span className="text-[10px] font-bold tracking-widest uppercase">Explore</span>
                  <ArrowDownRight className="w-6 h-6" />
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex md:justify-end"
            >
               <button className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#CCFF00] transition-colors border border-transparent">
                  Start Project <ArrowRight className="w-4 h-4" />
               </button>
            </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroCreative;
