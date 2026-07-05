import React from 'react';
import { IMPACT_STATS } from '../constants';

const GlobalImpact: React.FC = () => {
  return (
    <section className="bg-[#020617] py-32 px-4 relative overflow-hidden border-t border-white/5">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>
      
      {/* World Map Representation (Dot Matrix) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
         <div className="relative w-[1200px] h-[600px]">
            {/* Radar Scan Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent w-full h-full animate-[spin_10s_linear_infinite] origin-center opacity-30 blur-xl"></div>
            
            {/* Random "Cities" pulsing */}
            {[...Array(12)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-teal-400 animate-ping"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        animationDuration: `${Math.random() * 2 + 1}s`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                ></div>
            ))}
            
            {/* Static Dots Map (Simplified Concept) */}
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/20">
                <circle cx="200" cy="150" r="2" /> <circle cx="220" cy="160" r="2" /> <circle cx="180" cy="180" r="2" />
                <circle cx="500" cy="200" r="2" /> <circle cx="520" cy="180" r="2" /> <circle cx="480" cy="220" r="2" />
                <circle cx="800" cy="150" r="2" /> <circle cx="820" cy="170" r="2" /> <circle cx="780" cy="140" r="2" />
                {/* Decorative lines */}
                <path d="M200 150 Q 350 50 500 200 T 800 150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" className="text-teal-500/30" />
            </svg>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div>
                <span className="text-teal-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Global Footprint</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-[Syne] leading-tight">
                    Impact That <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 animate-gradient">Resonates.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-12">
                    Our influence spans continents and industries. We don't just consult; we create ripples of change that transform local markets into global powerhouses.
                </p>
                <button className="px-8 py-4 rounded-full border border-teal-500/30 text-teal-400 font-bold hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]">
                    Explore Case Studies
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {IMPACT_STATS.map((stat, idx) => {
                    const GRADIENTS = [
                      'from-blue-400 to-indigo-500',
                      'from-teal-400 to-emerald-500',
                      'from-orange-400 to-red-500',
                      'from-purple-400 to-pink-500'
                    ];
                    return (
                    <div 
                        key={idx} 
                        className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] group"
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} p-0.5 mb-6 shadow-lg`}>
                            <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="text-4xl font-bold text-white/10 absolute top-4 right-6 select-none font-[Syne]">
                            0{idx + 1}
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                        <h4 className="text-teal-400 text-sm font-bold uppercase tracking-wider">{stat.label}</h4>
                    </div>
                )})}
            </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;