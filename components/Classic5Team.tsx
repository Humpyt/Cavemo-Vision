import React, { useState } from 'react';
import { ArrowUpRight, ShieldAlert, Award, FileText, Check, Briefcase } from 'lucide-react';

const PARTNERS_INDEX = [
  {
    id: "PART-V03",
    name: "Marcus Sterling",
    position: "Managing Partner",
    spec: "M&A & Debt Cascades",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=650&auto=format&fit=crop",
    bio: "Pioneering structured debt cascades and asset integration rules inside highly controversial fiscal zones. Previously managed over $18B in private equity consolidation.",
    mandate: "Directing Sovereign Capital Allocation Network",
    metric: "$18.4B Real-signed",
    initials: "M.S"
  },
  {
    id: "PART-D12",
    name: "Diana Del Rey",
    position: "Senior Director",
    spec: "Global Capital Routing",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=650&auto=format&fit=crop",
    bio: "Ex-central bank risk auditor. Mastermind of jurisdictional transfer pathways and tax-neutral corporate cage designs. Oversees European expansion pipelines.",
    mandate: "Aether Group Core Asset Realignment",
    metric: "$45.0B Under Audit",
    initials: "D.D"
  },
  {
    id: "PART-C81",
    name: "Conrad Vance",
    position: "Partner & Advisory Lead",
    spec: "Autonomous Infrastructure",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=650&auto=format&fit=crop",
    bio: "Specialist in cyber-physical supply logistics, automated customs gates configurations, and technical risk reduction nets for intermodal operations.",
    mandate: "Vesper Aerospace Cargo Optimization",
    metric: "42% Friction Reduction",
    initials: "C.V"
  }
];

const Classic5Team: React.FC = () => {
  const [activePartnerId, setActivePartnerId] = useState<string>("PART-V03");

  const activePat = PARTNERS_INDEX.find(p => p.id === activePartnerId) || PARTNERS_INDEX[0];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         {/* Title Grid */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 pb-8 border-b border-[#0B1215]/5">
            <div className="lg:col-span-8">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Advisory Guild Syndicate</p>
               </div>
               
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  EXECUTIVE BOARD <br />
                  <span className="font-light italic text-[#187A70] font-sans">Syndicate.</span>
               </h2>
            </div>
            
            <div className="lg:col-span-4">
               <p className="text-slate-500 font-light text-base leading-relaxed">
                  Highly accredited specialists holding direct historical mastery over complex financial engineering systems and global cross-border transactions.
               </p>
            </div>
         </div>

         {/* Two column interactive grid */}
         <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Master Selectable Portrait Grid (7 Columns) */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
               {PARTNERS_INDEX.map((p) => {
                  const isActive = activePartnerId === p.id;
                  return (
                     <div 
                        key={p.id}
                        onClick={() => setActivePartnerId(p.id)}
                        className={`group border rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 flex flex-col justify-between ${isActive ? 'ring-2 ring-[#187A70] scale-102 shadow-lg bg-white border-transparent' : 'border-[#0B1215]/5 hover:border-[#0B1215]/15 hover:bg-white/60'}`}
                     >
                        {/* Portrait Frame */}
                        <div className="aspect-[1.12/1] sm:aspect-[4/5] overflow-hidden relative border-b border-[#0B1215]/5">
                           <img 
                              src={p.img} 
                              alt={p.name} 
                              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-102"
                           />
                           <div className="absolute top-4 right-4 bg-[#FAF9F5] rounded-full border border-[#0B1215]/5 p-2 font-mono text-[9px] text-[#0B1215] font-bold">
                              {p.initials}
                           </div>
                        </div>

                        {/* Summary details */}
                        <div className="p-6">
                           <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest block mb-1 uppercase">{p.spec}</span>
                           <h3 className="text-lg font-[Syne] font-bold text-[#0B1215] leading-none mb-1">
                              {p.name}
                           </h3>
                           <p className="text-slate-400 text-[11px] font-light">{p.position}</p>
                        </div>
                     </div>
                  );
               })}
            </div>

            {/* Right Col: High-Fidelity Active Partner Profile Card (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
               <div className="bg-white border border-[#0B1215]/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[460px]">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#187A70]/5 rounded-full blur-[80px] pointer-events-none"></div>

                  <div className="relative z-10">
                     <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
                        <span className="text-[9px] font-mono tracking-widest text-[#187A70] uppercase font-black">SYNDICATE DOSSIER</span>
                        <span className="text-[9px] font-mono text-slate-400 font-bold">{activePat.id}</span>
                     </div>

                     <h3 className="text-2xl font-[Syne] font-bold text-[#0B1215] leading-tight mb-2">
                        {activePat.name}
                     </h3>
                     <p className="text-xs text-slate-400 font-medium mb-6 uppercase tracking-wider">{activePat.position} / {activePat.spec}</p>

                     <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 border-l-2 border-[#187A70]/30 pl-4 py-1 bg-[#FAF9F5]/80 rounded-r-md">
                        {activePat.bio}
                     </p>

                     {/* Profile stats lists */}
                     <div className="space-y-4">
                        <div>
                           <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Current Active Mandate</span>
                           <div className="flex items-center gap-2 text-xs text-[#0B1215] font-light">
                              <Briefcase className="w-4 h-4 text-[#187A70]" />
                              <span>{activePat.mandate}</span>
                           </div>
                        </div>

                        <div>
                           <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Signed Asset Capacity</span>
                           <div className="flex items-center gap-2 text-xs text-[#187A70]">
                              <Award className="w-4 h-4" />
                              <span className="font-mono font-bold text-[13px]">{activePat.metric}</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Certified Signature Line */}
                  <div className="border-t border-slate-100 pt-6 mt-8 relative z-10 flex justify-between items-center text-xs text-slate-300 font-mono">
                     <span>Security Clearance Level V</span>
                     <span className="font-handwriting text-[#187A70] text-3xl opacity-75">{activePat.initials}. Presign</span>
                  </div>

               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5Team;
