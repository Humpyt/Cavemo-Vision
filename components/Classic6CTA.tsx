import React from 'react';
import { Command } from 'lucide-react';

const Classic6CTA: React.FC = () => {
  return (
    <section className="bg-[#050505] text-white py-32 md:py-48 px-4 md:px-12 lg:px-20 font-sans relative border-t border-white/10 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Absolute grid lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
      
      <div className="max-w-4xl w-full relative z-10">
         <Command className="w-12 h-12 text-[#0047FF] mx-auto mb-8" />
         
         <h2 className="text-5xl sm:text-7xl lg:text-[7rem] leading-[0.85] font-[Syne] font-black tracking-tighter uppercase mb-8">
            Initiate <br/> Execution.
         </h2>
         
         <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-12 font-light">
            Secure a private architectural briefing. We only engage with capital formations exceeding $1B in liquid capacity.
         </p>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
               type="text" 
               placeholder="ENTER CORPORATE ID" 
               className="bg-white/5 border border-white/20 text-center text-xs font-mono p-4 w-full sm:w-64 focus:outline-none focus:border-[#0047FF] transition-colors text-white"
            />
            <button className="bg-[#0047FF] hover:bg-white hover:text-black transition-colors text-white text-xs font-mono font-bold tracking-widest uppercase p-4 w-full sm:w-auto">
               Transmit Secure
            </button>
         </div>
      </div>
    </section>
  );
};

export default Classic6CTA;
