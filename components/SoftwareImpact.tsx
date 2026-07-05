import React from 'react';
import { IMPACT_STATS } from '../constants';

const SoftwareImpact: React.FC = () => {
  return (
    <section className="bg-[#000000] py-32 px-4 relative overflow-hidden border-y border-white/5">
      {/* Deep Tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* Node connecting lines effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
         <div className="relative w-[1200px] h-[600px] border border-white/5 bg-[#020202]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent w-full h-full"></div>
            
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/20">
                <path d="M100 200 L 300 100 L 500 250 L 700 150 L 900 300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="text-cyan-500/30" />
                <path d="M200 400 L 400 300 L 600 450 L 800 250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="text-purple-500/30" />
            </svg>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            
            {/* Content Segment */}
            <div className="lg:col-span-2">
                <div className="inline-block border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 mb-8">
                    <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Telemetry / Metrics</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-[Syne]">
                    System <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Throughput.</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-12 font-mono">
                    Our software doesn't just run; it dominates. We build robust systems that handle massive data loads, ensure pinpoint accuracy, and operate flawlessly on a global scale.
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500/10 transition-colors">
                        Dump Log File
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/5 border border-white/5 p-[1px]">
                {IMPACT_STATS.map((stat, idx) => (
                    <div 
                        key={idx} 
                        className="bg-[#050505] p-8 group transition-colors duration-300 relative overflow-hidden hover:bg-white/5"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl transition-colors -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                        <div className={`w-10 h-10 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 transition-all bg-black/50`}>
                            <stat.icon strokeWidth={1} className="w-5 h-5 text-white/50 group-hover:text-cyan-400" />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2 tabular-nums font-mono">{stat.value}</h3>
                        <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareImpact;
