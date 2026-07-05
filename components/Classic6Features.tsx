import React from 'react';
import { Blocks, Search, Network, Shield } from 'lucide-react';

const DATA_MODULES = [
  { icon: Search, id: "M01", title: "Diagnostic Mapping", desc: "Topographic analysis of corporate inefficiency." },
  { icon: Blocks, id: "M02", title: "Structural Rebuild", desc: "Monolithic restructuring of departments." },
  { icon: Network, id: "M03", title: "Kinetic Routing", desc: "Designing supply networks with zero latency." },
  { icon: Shield, id: "M04", title: "Sovereign Vaulting", desc: "Deploying compliance and tax barrier shields." }
];

const Classic6Features: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#FAFAFA] py-32 px-4 md:px-12 lg:px-20 font-sans border-y border-white/10">
      <div className="max-w-[1600px] w-full mx-auto">
         
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl sm:text-6xl font-[Syne] font-bold max-w-2xl leading-[0.9]">
               ARCHITECTURAL <span className="text-[#0047FF]">REQUIREMENTS.</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base max-w-md font-light">
               Four immutable modules applied to every engagement to ensure mathematical dominance in any contested market sector.
            </p>
         </div>

         {/* Bento Grid layout */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DATA_MODULES.map((mod, i) => (
               <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 hover:border-[#0047FF]/50 p-8 min-h-[320px] flex flex-col justify-between group transition-colors duration-500 relative overflow-hidden"
               >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#0047FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex justify-between items-start">
                     <div className="w-12 h-12 bg-[#0047FF]/10 flex items-center justify-center text-[#0047FF]">
                        <mod.icon className="w-6 h-6 stroke-[1.5]" />
                     </div>
                     <span className="text-[10px] font-mono text-white/30">{mod.id}</span>
                  </div>

                  <div>
                     <h3 className="text-2xl font-[Syne] font-bold mb-3">{mod.title}</h3>
                     <p className="text-white/50 font-light text-sm">{mod.desc}</p>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6Features;
