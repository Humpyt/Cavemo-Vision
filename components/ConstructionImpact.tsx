
import React from 'react';
import { motion } from 'motion/react';
import { IMPACT_STATS } from '../constants';
import { Globe, Terminal, Activity } from 'lucide-react';

const ConstructionImpact: React.FC = () => {
  return (
    <section className="bg-[#050505] py-32 px-4 relative overflow-hidden border-t border-white/5">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* World Map Representation (Dot Matrix) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
         <div className="relative w-[1200px] h-[600px]">
            {/* Radar Scan Effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent w-full h-full origin-center blur-3xl"
            ></motion.div>
            
            {/* Random "Cities" pulsing */}
            {[...Array(15)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-yellow-500 animate-ping"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                ></div>
            ))}
            
            {/* Static Dots Map (Simplified Concept) */}
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/10">
                <circle cx="200" cy="150" r="2" /> <circle cx="220" cy="160" r="2" /> <circle cx="180" cy="180" r="2" />
                <circle cx="500" cy="200" r="2" /> <circle cx="520" cy="180" r="2" /> <circle cx="480" cy="220" r="2" />
                <circle cx="800" cy="150" r="2" /> <circle cx="820" cy="170" r="2" /> <circle cx="780" cy="140" r="2" />
                {/* Decorative lines */}
                <path d="M200 150 Q 350 50 500 200 T 800 150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" className="text-yellow-500/20" />
            </svg>
         </div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Content */}
            <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 text-yellow-500 mb-8">
                      <Globe className="w-5 h-5" />
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Global_Operations_v4.0</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                      SCALE THAT <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">DELIVERS.</span>
                  </h2>
                  <p className="text-white/40 text-xl leading-relaxed max-w-lg mb-12 font-light">
                      Our infrastructure projects span continents. We bring industrial strength to local markets, creating foundations for global growth.
                  </p>
                  <button className="group relative px-10 py-5 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:border-yellow-500">
                      <span className="relative z-10">Explore Case Studies</span>
                      <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      <span className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></span>
                  </button>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {IMPACT_STATS.map((stat, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] group hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                          <stat.icon className="w-24 h-24" />
                        </div>
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                            <stat.icon className="w-7 h-7 text-yellow-500" />
                        </div>
                        <h3 className="text-5xl font-black text-white mb-3 tabular-nums tracking-tighter">{stat.value}</h3>
                        <p className="text-white/30 font-bold text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
                        
                        {/* Technical Detail */}
                        <div className="mt-8 flex items-center gap-2">
                          <Activity className="w-3 h-3 text-emerald-500" />
                          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Verified_Data</span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionImpact;
