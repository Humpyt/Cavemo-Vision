import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { 
    id: "01", 
    title: "Capital Restructuring", 
    desc: "Complex debt cascades and equity swaps designed to obliterate liability mass and re-leverage for hyper-growth.",
    metrics: ["14% Avg Rate Cut", "Sovereign Shielding"]
  },
  { 
    id: "02", 
    title: "Supply Velocity", 
    desc: "Mathematical elimination of physical latency. We design logistics networks treating physical goods as data packets.",
    metrics: ["-42% Friction", "Zero Latency Path"]
  },
  { 
    id: "03", 
    title: "Algorithmic Expansion", 
    desc: "Programming automated acquisition targets and operational integrations for digital-first holding companies.",
    metrics: ["M&A Automation", "Data Compliance Core"]
  }
];

const Classic6Services: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#FAFAFA] text-[#050505] py-32 px-4 md:px-12 lg:px-20 font-sans relative">
      <div className="max-w-[1600px] w-full mx-auto">
         
         <div className="mb-20">
            <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-4 block">Core Directives</span>
            <h2 className="text-5xl sm:text-7xl font-[Syne] font-bold tracking-tight">
               OPERATIONAL <br/> VECTORS
            </h2>
         </div>

         {/* Large Horizontal Accordion / List */}
         <div className="border-t border-[#050505]/20">
            {SERVICES.map((srv, idx) => (
               <div 
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-10 lg:py-16 border-b border-[#050505]/20 cursor-pointer items-start"
               >
                  <div className="md:col-span-1">
                     <span className={`text-[10px] font-mono transition-colors ${hoveredIdx === idx ? 'text-[#0047FF]' : 'text-[#050505]/40'}`}>
                        VEC // {srv.id}
                     </span>
                  </div>
                  
                  <div className="md:col-span-5">
                     <h3 className={`text-3xl lg:text-5xl font-[Syne] font-bold tracking-tight transition-colors ${hoveredIdx === idx ? 'text-[#0047FF]' : 'text-[#050505]'}`}>
                        {srv.title}
                     </h3>
                  </div>

                  <div className="md:col-span-4 flex items-center h-full">
                     <p className={`text-sm lg:text-base font-light transition-all duration-500 overflow-hidden ${hoveredIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-50'}`}>
                        {srv.desc}
                     </p>
                  </div>

                  <div className="md:col-span-2 flex flex-col items-end gap-2 justify-center h-full text-right">
                     {srv.metrics.map((m, i) => (
                        <span key={i} className="text-[10px] font-mono uppercase bg-[#050505]/5 px-3 py-1 text-[#050505]/60 whitespace-nowrap">
                           {m}
                        </span>
                     ))}
                     <ArrowUpRight className={`w-8 h-8 mt-4 transition-transform duration-300 ${hoveredIdx === idx ? 'translate-x-2 -translate-y-2 text-[#0047FF]' : 'text-[#050505]/20'}`} />
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6Services;
