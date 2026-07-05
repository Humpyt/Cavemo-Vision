import React from 'react';
import { Crosshair, MoveRight } from 'lucide-react';

const Classic6Manifesto: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] text-[#050505] py-32 md:py-48 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden">
      
      {/* Background Architectural Markings */}
      <div className="absolute top-20 right-20 w-px h-64 bg-[#050505]/10 hidden md:block"></div>
      <div className="absolute top-20 right-20 w-64 h-px bg-[#050505]/10 hidden md:block"></div>
      
      <div className="max-w-[1600px] w-full mx-auto relative z-10 flex flex-col md:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Vertical Title */}
        <div className="md:w-1/4 relative">
           <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-8">
                 <Crosshair className="w-5 h-5 text-[#0047FF]" />
                 <span className="text-[10px] font-mono tracking-widest text-[#050505]/50 uppercase">Strategic Posture</span>
              </div>
              <h2 className="text-3xl font-[Syne] font-bold uppercase tracking-tight text-[#050505] md:[writing-mode:vertical-rl] md:rotate-180 md:h-[400px]">
                 Fundamental Manifesto
              </h2>
           </div>
        </div>

        {/* Right Column: Massive Copy & Tenets */}
        <div className="md:w-3/4">
           <p className="text-3xl sm:text-5xl lg:text-6xl font-[Syne] font-medium leading-[1.1] tracking-tight mb-16 text-[#050505]">
              Commodity thinking produces commodity results. To break the cycle of marginal gains, one must reconstruct the <span className="text-[#0047FF] italic font-serif">architecture of operations</span> from the ground up.
           </p>

           <div className="grid sm:grid-cols-2 gap-12 mt-20 pt-16 border-t border-[#050505]/10">
              <div className="group">
                 <span className="text-[10px] font-mono text-[#0047FF] block mb-4 tracking-widest border border-[#0047FF]/20 px-2 py-1 w-max">AXIOM 01</span>
                 <h4 className="text-2xl font-[Syne] font-bold mb-4">Eradicate Friction</h4>
                 <p className="text-[#050505]/60 font-light leading-relaxed">
                    Efficiency is not enough. We trace supply chains, cross-border taxonomies, and internal communication flows to physically cut out drag coefficients. Unimpeded velocity is the goal.
                 </p>
                 <MoveRight className="w-6 h-6 mt-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0047FF]" />
              </div>

              <div className="group">
                 <span className="text-[10px] font-mono text-[#0047FF] block mb-4 tracking-widest border border-[#0047FF]/20 px-2 py-1 w-max">AXIOM 02</span>
                 <h4 className="text-2xl font-[Syne] font-bold mb-4">Insulate Capital</h4>
                 <p className="text-[#050505]/60 font-light leading-relaxed">
                    Revenue is meaningless if exposed. We rapidly encase capital generation centers within sovereign legal and digital vaults, shielding balance sheets from external market shocks.
                 </p>
                 <MoveRight className="w-6 h-6 mt-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0047FF]" />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Classic6Manifesto;
