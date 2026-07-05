import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Activity, Globe2, Target, BarChart3 } from 'lucide-react';

const Classic6Hero: React.FC = () => {
  const [pulseLine, setPulseLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseLine(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#050505] text-[#FAFAFA] min-h-screen font-sans relative overflow-hidden flex flex-col justify-center px-4 md:px-12 lg:px-20 pt-24 pb-16">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4vw_4vw]" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#0047FF] to-transparent opacity-50"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0047FF] to-transparent opacity-30"></div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto relative z-10 flex flex-col justify-between flex-1">
        
        {/* Top Header line */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-white/40 uppercase mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0047FF] rounded-full animate-pulse"></span>
                Global Frame
             </span>
             <span>// Arch 6</span>
          </div>
          <div className="hidden sm:flex gap-8">
            <span>Terminal: Online</span>
            <span>Index: Aggressive</span>
          </div>
        </div>

        {/* Main Content Area: High Contrast Architectural Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center flex-1">
          
          <div className="lg:col-span-7">
             <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-[#0047FF]/30 bg-[#0047FF]/10 text-[#0047FF] text-[10px] font-mono tracking-widest uppercase mb-8">
               [ Directive Alpha ]
             </div>
             
             <h1 className="text-5xl sm:text-7xl lg:text-[7rem] leading-[0.85] font-[Syne] font-bold tracking-tight mb-8">
               ABSOLUTE <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-blue-400">STRUCTURE.</span>
             </h1>
             
             <p className="text-white/60 font-light text-lg sm:text-xl max-w-xl leading-relaxed mb-10 border-l border-[#0047FF]/50 pl-6">
               We architect absolute monopolies. Precision-engineered corporate configurations designed to dominate complex regulatory and economic environments through sheer structural superiority.
             </p>

             <div className="flex items-center gap-6">
               <button className="bg-[#0047FF] hover:bg-blue-600 text-white px-8 py-4 text-xs font-mono tracking-widest uppercase flex items-center gap-3 transition-colors">
                 Initialize Engagement
                 <ArrowRight className="w-4 h-4" />
               </button>
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 uppercase">Current Capacity</span>
                  <span className="text-sm font-bold text-white tracking-widest">94.2% ALLOCATED</span>
               </div>
             </div>
          </div>

          <div className="lg:col-span-5 h-full min-h-[400px] flex items-center justify-center relative">
             {/* Abstract Geometric Monolith */}
             <div className="w-full max-w-[400px] aspect-square relative group">
                {/* Back Plate */}
                <div className="absolute inset-0 bg-[#0047FF]/5 border border-[#0047FF]/20 backdrop-blur-sm -rotate-6 transform transition-transform duration-700 group-hover:-rotate-12"></div>
                {/* Front Plate */}
                <div className="absolute inset-0 bg-white/5 border border-white/20 backdrop-blur-md flex flex-col justify-between p-8 transform transition-transform duration-700 group-hover:rotate-6">
                   <div className="flex justify-between items-start border-b border-white/10 pb-4">
                      <Target className="w-6 h-6 text-[#0047FF]" />
                      <span className="text-[10px] font-mono text-white/50 tracking-widest">DIAGNOSTIC MATRIX</span>
                   </div>
                   
                   <div className="my-auto space-y-4">
                      <div className="flex justify-between items-end">
                         <span className="text-[10px] font-mono text-white/50">YIELD TENSION</span>
                         <span className="text-2xl font-[Syne] font-bold text-white">4.8X</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 overflow-hidden">
                         <div className="h-full bg-[#0047FF] transition-all duration-300" style={{ width: `${60 + (Math.sin(pulseLine/10) * 20)}%` }}></div>
                      </div>
                      
                      <div className="flex justify-between items-end pt-4">
                         <span className="text-[10px] font-mono text-white/50">STRUCTURAL INTEGRITY</span>
                         <span className="text-2xl font-[Syne] font-bold text-white">99.9%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 overflow-hidden">
                         <div className="h-full bg-[#0047FF] transition-all duration-300" style={{ width: `${80 + (Math.cos(pulseLine/5) * 10)}%` }}></div>
                      </div>
                   </div>

                   <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-[#0047FF]">
                      <span>SYSTEM LIVE</span>
                      <Activity className="w-4 h-4 animate-pulse" />
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Classic6Hero;
