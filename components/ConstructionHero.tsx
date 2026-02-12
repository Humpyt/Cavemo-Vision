
import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const ConstructionHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen px-2 md:px-4 pt-4 pb-4">
      {/* Main Container - Full Height with Rounded Corners */}
      <div className="relative w-full h-full bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Architecture" 
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        {/* Content - Bottom Aligned */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                
                {/* Left: Heading */}
                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-yellow-500"></div>
                        <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm">Since 1985</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.9] font-[Manrope] tracking-tighter">
                        STRUCTURAL <br/>
                        <span className="text-transparent text-stroke-white">INTEGRITY.</span>
                    </h1>
                </div>

                {/* Right: Controls & Info */}
                <div className="flex flex-col gap-8 items-start md:items-end">
                    <p className="text-slate-300 text-lg max-w-sm text-left md:text-right leading-relaxed">
                        We don't just build structures; we engineer legacies. Precision construction for the modern world.
                    </p>
                    
                    <div className="flex gap-4">
                        <button className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 group">
                            <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
                        </button>
                        <button className="h-16 px-8 rounded-full bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-3">
                            <Play className="w-4 h-4 fill-current" /> View Reel
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none mix-blend-overlay"></div>
      </div>

      <style>{`
        .text-stroke-white { -webkit-text-stroke: 2px white; color: transparent; }
      `}</style>
    </section>
  );
};

export default ConstructionHero;
