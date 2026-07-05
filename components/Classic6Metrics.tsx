import React, { useState } from 'react';
import { Target, BarChart, Crosshair } from 'lucide-react';

const Classic6Metrics: React.FC = () => {
   const [active, setActive] = useState(0);

   const circles = [
      { id: 'yield', label: 'Capital Yield', percentage: 84 },
      { id: 'fric', label: 'Friction Loss', percentage: 12 },
      { id: 'sync', label: 'System Sync', percentage: 96 }
   ];

   return (
      <section className="bg-[#050505] text-[#FAFAFA] py-32 px-4 md:px-12 lg:px-20 font-sans border-y border-white/10 overflow-hidden">
         <div className="max-w-[1600px] w-full mx-auto grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
               <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-4 block">Telemetry Feed</span>
               <h2 className="text-4xl sm:text-6xl font-[Syne] font-bold mb-8 leading-tight">
                  MATHEMATICAL <br/> ASSURANCE
               </h2>
               <p className="text-white/50 font-light mb-12 max-w-md">
                  Our interventions are governed by strict telemetry. We map enterprise variables into functional dashboards, proving our hypotheses through undeniable numerical output.
               </p>

               <div className="space-y-4">
                  {circles.map((c, i) => (
                     <div 
                        key={c.id} 
                        className={`p-6 border transition-all cursor-pointer flex justify-between items-center ${active === i ? 'bg-white/10 border-[#0047FF]' : 'bg-transparent border-white/10 hover:border-[#0047FF]/50'}`}
                        onClick={() => setActive(i)}
                     >
                        <span className="font-mono text-xs tracking-widest uppercase">{c.label}</span>
                        <span className="font-[Syne] font-bold text-2xl">{c.percentage}%</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-center items-center relative aspect-square max-w-[500px] mx-auto w-full">
               {/* Abstract Radar overlay */}
               <div className="absolute inset-0 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="absolute w-full h-px bg-white/5"></div>
                  <div className="absolute h-full w-px bg-white/5"></div>
                  <div className="w-[75%] h-[75%] border border-white/10 rounded-full flex items-center justify-center">
                     <div className="w-[50%] h-[50%] border border-[#0047FF]/30 rounded-full"></div>
                  </div>
               </div>

               {/* Dynamic SVG Circular Progress */}
               <svg viewBox="0 0 100 100" className="absolute w-[90%] h-[90%] -rotate-90 drop-shadow-[0_0_15px_rgba(0,71,255,0.3)]">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <circle 
                     cx="50" 
                     cy="50" 
                     r="48" 
                     fill="none" 
                     stroke="#0047FF" 
                     strokeWidth="2" 
                     strokeDasharray="301.59" 
                     strokeDashoffset={301.59 - (301.59 * circles[active].percentage) / 100} 
                     className="transition-all duration-1000 ease-out"
                  />
               </svg>

               <div className="text-center absolute">
                  <Crosshair className="w-8 h-8 text-[#0047FF] mx-auto mb-2 opacity-50" />
                  <div className="text-5xl font-[Syne] font-bold tracking-tighter">{circles[active].percentage}%</div>
                  <div className="text-[10px] font-mono text-[#0047FF] tracking-widest uppercase mt-2">SYS. VERIFIED</div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default Classic6Metrics;
