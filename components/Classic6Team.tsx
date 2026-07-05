import React from 'react';
import { Network } from 'lucide-react';

const TEAM = [
  { name: "K. Vance", role: "Structural Architect", sub: "Macro-Logistics", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=500&auto=format&fit=crop" },
  { name: "M. Cross", role: "Capital Re-Alignment", sub: "Debt Cascades", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
  { name: "S. Reed", role: "System Vaults", sub: "Compliance & Cyber", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" }
];

const Classic6Team: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#FAFAFA] py-32 px-4 md:px-12 lg:px-20 font-sans border-y border-white/10">
      <div className="max-w-[1600px] w-full mx-auto">
         
         <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
            <h2 className="text-4xl sm:text-6xl font-[Syne] font-bold">THE SYNDICATE</h2>
            <div className="hidden md:flex items-center gap-3 text-xs font-mono text-white/50 uppercase tracking-widest">
               <Network className="w-4 h-4 text-[#0047FF]" />
               Central Command
            </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 mb-6">
                     <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent"></div>
                     <div className="absolute bottom-4 right-4 bg-[#0047FF] w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rotate-45"></div>
                  </div>
                  <div>
                     <span className="text-[10px] font-mono text-[#0047FF] uppercase tracking-widest block mb-1">{member.sub}</span>
                     <h3 className="text-2xl font-[Syne] font-bold text-white uppercase tracking-tight">{member.name}</h3>
                     <p className="text-white/40 font-light text-sm">{member.role}</p>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6Team;
