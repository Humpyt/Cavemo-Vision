import React, { useState } from 'react';
import { Target, Layers, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

const SYSTEM_PILLARS = [
  { 
    icon: Target, 
    code: "FW-M.01", 
    title: 'Macro Systemic Calibration', 
    short: 'Optimizing asset routes against macro index shifts.', 
    detail: 'We audit currency spreads, localized tariffs, and supply friction coordinates to preserve core corporate security against sudden market drawdowns.'
  },
  { 
    icon: Layers, 
    code: "FW-C.02", 
    title: 'Institutional Debt Scaffolding', 
    short: 'Restructuring ratios and setting up multi-jurisdiction safety assets.', 
    detail: 'We reorganize core leverage and engineer custom debt cascades to lower cost of capital, securing capital flow lines under volatile credit environments.'
  },
  { 
    icon: Globe, 
    code: "FW-E.03", 
    title: 'Stealth Jurisdictional Entry', 
    short: 'Pioneering emerging spaces prior to general market awareness.', 
    detail: 'We build swift compliant channels inside complex regulatory zones, leveraging localized loopholes to anchor absolute first-mover advantages.'
  },
  { 
    icon: ShieldCheck, 
    code: "FW-S.04", 
    title: 'Sovereign Integrity Safeguards', 
    short: 'Constructing total physical and digital compliance shields.', 
    detail: 'Our engineering teams mount high-fidelity threat buffers and real-time physical/database audit gates, completely blocking external leakages.'
  }
];

const Classic5Features: React.FC = () => {
  const [activeCardIdx, setActiveCardIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans border-y border-[#0B1215]/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         {/* Top Grid Headline Section */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 pb-8 border-b border-[#0B1215]/5">
            <div className="lg:col-span-7">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Operational Modules</p>
               </div>
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  SYSTEMIC INTERLOCK <br />
                  <span className="font-light italic text-[#187A70] font-sans">Scaffolding.</span>
               </h2>
            </div>
            
            <div className="lg:col-span-5">
               <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed max-w-lg">
                  Four deeply consolidated, highly defensive pillars designed in coordination to guarantee your enterprise operates on a completely insulated competitive plane.
               </p>
            </div>
         </div>

         {/* Asymmetric Elegant Bento Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SYSTEM_PILLARS.map((p, idx) => {
              const IconComp = p.icon;
              const isHovered = activeCardIdx === idx;
              
              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActiveCardIdx(idx)}
                  onMouseLeave={() => setActiveCardIdx(null)}
                  className="bg-white/40 border border-[#0B1215]/5 rounded-3xl p-8 backdrop-blur-md shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#187A70]/5 cursor-pointer flex flex-col justify-between min-h-[420px] relative overflow-hidden group"
                >
                  {/* Hover Accent Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#187A70]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Top line indicator with golden color */}
                  <div className="absolute top-0 inset-x-8 h-0.5 bg-slate-100 group-hover:bg-[#187A70] transition-colors duration-550"></div>

                  {/* Header info in card */}
                  <div>
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1215]/5 flex items-center justify-center text-[#0B1215] group-hover:bg-[#187A70] group-hover:text-white transition-all duration-500 shadow-sm border border-[#0B1215]/5">
                        <IconComp className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-[#187A70] transition-colors">
                        {p.code}
                      </span>
                    </div>

                    <h3 className="text-2xl font-[Syne] font-bold text-[#0B1215] leading-tight mb-4 group-hover:text-[#187A70] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  {/* Body Text Area with smooth height detail reveal */}
                  <div className="mt-6 border-t border-[#0B1215]/5 pt-6 flex-1 flex flex-col justify-end">
                    <p className={`text-slate-600 text-sm font-light leading-relaxed transition-opacity duration-300 ${isHovered ? 'hidden opacity-0' : 'block opacity-100'}`}>
                      {p.short}
                    </p>
                    
                    <p className={`text-slate-500 text-xs font-light leading-relaxed transition-opacity duration-300 ${isHovered ? 'block opacity-100' : 'hidden opacity-0 animate-fade-in'}`}>
                      {p.detail}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-4 text-[10px] font-mono uppercase tracking-widest text-[#187A70]/60 group-hover:text-[#187A70] transition-colors">
                      <span>{isHovered ? 'SYSTEM ACTIVE' : 'READ SPEC'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                </div>
              );
            })}
         </div>

      </div>
    </section>
  );
};

export default Classic5Features;
