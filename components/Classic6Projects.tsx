import React from 'react';
import { ArrowRight } from 'lucide-react';

const PORTFOLIO = [
  { id: "PF-01", target: "Aether Heavy", val: "$14B Rebuild", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" },
  { id: "PF-02", target: "Quantum Rail", val: "Global Logistics", img: "https://images.unsplash.com/photo-1510425463958-dcced28da480?q=80&w=600&auto=format&fit=crop" },
  { id: "PF-03", target: "Zenith Synth", val: "M&A Integration", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
  { id: "PF-04", target: "Omni Cloud", val: "Sovereign Arch", img: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=600&auto=format&fit=crop" }
];

const Classic6Projects: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] text-[#050505] py-32 px-4 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1600px] w-full mx-auto">
         
         <div className="flex flex-col md:flex-row justify-between mb-24 gap-8">
            <div>
               <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-4 block">Case Archives</span>
               <h2 className="text-4xl sm:text-6xl font-[Syne] font-bold">STRUCTURAL <br/> INTERVENTIONS</h2>
            </div>
            <div className="flex items-end">
               <button className="flex items-center gap-2 text-xs font-mono font-bold uppercase border-b border-[#050505] pb-1 hover:text-[#0047FF] hover:border-[#0047FF] transition-colors">
                  View Master Ledger <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>

         {/* Masonry-like Grid */}
         <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO.map((p, i) => (
               <div key={i} className={`group relative overflow-hidden bg-black ${i % 3 === 0 ? 'md:row-span-2' : ''} aspect-square sm:aspect-video md:aspect-auto min-h-[300px]`}>
                  <img src={p.img} alt={p.target} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 bg-white text-[#050505] px-3 py-1 font-mono text-[10px] font-bold">{p.id}</div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                     <div>
                        <h3 className="text-white font-[Syne] font-bold text-2xl mb-1">{p.target}</h3>
                        <p className="text-white/60 font-mono text-xs tracking-widest uppercase">{p.val}</p>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md text-white group-hover:bg-[#0047FF] group-hover:border-[#0047FF] transition-all">
                        <ArrowRight className="w-4 h-4 -rotate-45" />
                     </div>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6Projects;
