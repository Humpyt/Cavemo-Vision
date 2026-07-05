
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Play, Activity, Shield, Cpu, Box } from 'lucide-react';

const ConstructionHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="construction-hero" className="relative w-full h-[95vh] px-2 md:px-4 pt-4 pb-4 overflow-hidden">
      {/* Main Container - Industrial Command Center */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full h-full bg-[#0a0a0a] rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5"
      >
        
        {/* Background Visuals */}
        <div className="absolute inset-0">
            <motion.img 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Site" 
                className="w-full h-full object-cover mix-blend-luminosity"
                referrerPolicy="no-referrer"
            />
            {/* Industrial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent w-1/2"></div>
        </div>

        {/* Technical Overlays */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)]"></div>
        </div>

        {/* Content Layout */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-20">
            
            {/* Top Bar: System Status */}
            <div className="flex justify-between items-start">
                <motion.div variants={itemVariants} className="flex items-center gap-6">
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-500">Live Site Protocol v9.0</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-white/30 text-[10px] font-mono tracking-widest uppercase">
                        <span>Lat: 40.7128° N</span>
                        <span>Lon: 74.0060° W</span>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <Shield className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <Cpu className="w-5 h-5" />
                    </div>
                </motion.div>
            </div>

            {/* Middle: Massive Industrial Typography */}
            <div className="max-w-6xl">
                <motion.div variants={itemVariants} className="mb-6">
                    <span className="text-yellow-500 font-black text-sm tracking-[0.4em] uppercase">Engineering The Future</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-12">
                    HEAVY <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">PRECISION.</span>
                </motion.h1>
                
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-10">
                    <button className="group relative px-12 py-6 bg-yellow-500 text-black font-black text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center gap-3">
                            Launch Project <Box className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                    
                    <button className="flex items-center gap-4 text-white hover:text-yellow-500 transition-colors group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/10 transition-all">
                            <Play className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase">Site Showreel</span>
                    </button>
                </motion.div>
            </div>

            {/* Bottom: Technical Data Strip */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 pt-12">
                <motion.div variants={itemVariants} className="flex gap-16">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Active Projects</p>
                        <p className="text-4xl font-bold text-white tabular-nums">42</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Safety Rating</p>
                        <p className="text-4xl font-bold text-yellow-500 tabular-nums">100%</p>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Steel Deployed</p>
                        <p className="text-4xl font-bold text-white tabular-nums">12.4KT</p>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center text-black">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Real-time Telemetry</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">System Status: Optimal</p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-yellow-500/20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-yellow-500/20 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default ConstructionHero;
