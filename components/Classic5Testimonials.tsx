import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';

const ENDORSEMENTS = [
  {
    id: "END-104",
    capital: "$450B Conglomerate",
    author: "Sir Reginald Vance, III",
    role: "Board Director / Aether International Holdings",
    quote: "Cavemo did not simply offer consulting suggestions. They performed rapid, highly precise structural surgery on our capital routes, completely buffering $45B of asset distributions against legislative tariff adjustments. Outstanding.",
    certification: "SEC Audit Passed Sec-99B"
  },
  {
    id: "END-112",
    capital: "Global Aerospace Logistics",
    author: "Elena Petrova",
    role: "Executive VP of Strategy / Vesper Global",
    quote: "We were highly skeptical of 12-week timeline targets. Yet within exactly 60 days, we observed a 42% elimination of structural logistics lag, boosting quarterly operating efficiency by millions. The math is absolute.",
    certification: "Operational Cleared Vol-12"
  },
  {
    id: "END-121",
    capital: "$110B Algorithmic Mesh",
    author: "Marcus Chen",
    role: "Presiding Chairman / Zenith Systems Group",
    quote: "Sovereign structural insulation is the primary reason our core databases survived the systemic cross-border pipeline crisis. Cavemo's engineering blueprints are mandatory for any enterprise requiring integrity.",
    certification: "System Audited ISO-4402"
  }
];

const Classic5Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const prevEndorsement = () => {
    setActiveIdx(prev => (prev === 0 ? ENDORSEMENTS.length - 1 : prev - 1));
  };

  const nextEndorsement = () => {
    setActiveIdx(prev => (prev === ENDORSEMENTS.length - 1 ? 0 : prev + 1));
  };

  const activeEnd = ENDORSEMENTS[activeIdx];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5 relative">
      <div className="absolute top-0 right-0 left-0 h-px bg-[#0B1215]/5"></div>
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         {/* Title Grid */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 pb-8 border-b border-[#0B1215]/5">
            <div className="lg:col-span-8">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Certified Verification</p>
               </div>
               
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  GOVERNOR REGISTRY <br />
                  <span className="font-light italic text-[#187A70] font-sans">Endorsements.</span>
               </h2>
            </div>
            
            <div className="lg:col-span-4 flex lg:justify-end gap-3">
               <button 
                  onClick={prevEndorsement}
                  className="w-14 h-14 rounded-full border border-[#0B1215]/15 flex items-center justify-center hover:bg-[#0B1215] hover:text-[#FAF9F5] transition-all duration-300 shadow-sm"
               >
                  <ChevronLeft className="w-5 h-5" />
               </button>
               <button 
                  onClick={nextEndorsement}
                  className="w-14 h-14 rounded-full border border-[#0B1215]/15 flex items-center justify-center hover:bg-[#0B1215] hover:text-[#FAF9F5] transition-all duration-300 shadow-sm"
               >
                  <ChevronRight className="w-5 h-5" />
               </button>
            </div>
         </div>

         {/* Large Editorial Quotation Area */}
         <div className="bg-white border border-[#0B1215]/5 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-lg relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#187A70]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
               
               {/* Left quote text area */}
               <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[280px]">
                  
                  <div>
                     <Quote className="w-12 h-12 text-[#187A70] opacity-30 mb-8" strokeWidth={1} />
                     <blockquote className="text-2xl sm:text-3xl md:text-[2.2rem] font-light leading-[1.3] text-[#0B1215] tracking-tight mb-8">
                        "{activeEnd.quote}"
                     </blockquote>
                  </div>

                  {/* Certified Foot */}
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-[#187A70]" />
                     <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        {activeEnd.certification}
                     </span>
                  </div>

               </div>

               {/* Right metadata profile details panel */}
               <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-12 h-full min-h-[280px]">
                  
                  <div>
                     <span className="text-[9px] font-mono text-[#187A70] tracking-[0.25em] font-bold uppercase block mb-1">ENDORSER VALUE SIZE</span>
                     <span className="text-3xl font-[Syne] font-extrabold text-[#0B1215] tracking-tight leading-none block mb-8">
                        {activeEnd.capital}
                     </span>

                     <div className="space-y-1">
                        <h4 className="text-xl font-[Syne] font-bold text-[#0B1215] tracking-tight">
                           {activeEnd.author}
                        </h4>
                        <p className="text-xs text-slate-500 font-light leading-snug">
                           {activeEnd.role}
                        </p>
                     </div>
                  </div>

                  {/* Dot Index Navigator */}
                  <div className="flex gap-2 mt-8 lg:mt-0">
                     {ENDORSEMENTS.map((_, i) => (
                        <button 
                           key={i}
                           onClick={() => setActiveIdx(i)}
                           className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-[#187A70]' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                        ></button>
                     ))}
                  </div>

               </div>

            </div>
         </div>

      </div>
    </section>
  );
};

export default Classic5Testimonials;
