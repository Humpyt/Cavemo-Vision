import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
  { text: "Cavemo engineered a sovereign debt structure that entirely mitigated our multi-regional exposure. Their work is cold, absolute, and undeniably effective.", author: "R. Vance, Director" },
  { text: "Logistics friction dropped by 40% inside a single quarter after the blueprint execution. The return on intervention was staggering.", author: "E. Sterling, Ops Lead" }
];

const Classic6Testimonials: React.FC = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  const prev = () => setIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  return (
    <section className="bg-[#FAFAFA] text-[#050505] py-32 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto grid lg:grid-cols-12 gap-16 items-center">
         
         <div className="lg:col-span-4">
            <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-4 block">Executive Endorsement</span>
            <h2 className="text-4xl sm:text-5xl font-[Syne] font-bold">VERIFIED <br/> IMPACT.</h2>
         </div>

         <div className="lg:col-span-8 bg-[#050505] text-white p-10 md:p-16 rounded-none relative">
            {/* Architectural accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#0047FF]"></div>
            
            <div className="min-h-[160px] flex items-center">
               <p className="text-2xl md:text-3xl font-[Syne] font-medium leading-tight">
                  "{TESTIMONIALS[idx].text}"
               </p>
            </div>

            <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
               <div>
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest block mb-1">SIGNED BY</p>
                  <p className="font-bold text-sm tracking-widest uppercase">{TESTIMONIALS[idx].author}</p>
               </div>
               
               <div className="flex gap-2">
                  <button onClick={prev} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ArrowLeft className="w-4 h-4" /></button>
                  <button onClick={next} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><ArrowRight className="w-4 h-4" /></button>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
};

export default Classic6Testimonials;
