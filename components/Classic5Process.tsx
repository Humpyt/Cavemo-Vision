import React, { useState } from 'react';
import { Calendar, PlayCircle, Loader2, ClipboardCheck, ArrowUpRight, Gauge } from 'lucide-react';

const OPERATIONS_TIMELINE = [
  {
    phase: "I",
    title: "Macro Diagnostic Audit",
    sub: "Weeks 1 - 4",
    lead: "Analyzing peripheral exposures, modeling currency spreads, and tracing micro-frictional parameters inside operational pathways.",
    deliverables: [
      "Secured asset flow diagnostic report",
      "Dynamic legal structures tax roadmap",
      "Systemic overhead friction ledger"
    ],
    status: 100,
    readiness: "Complete Audit Verified"
  },
  {
    phase: "II",
    title: "Sovereign Structural Design",
    sub: "Weeks 5 - 8",
    lead: "Engineering bespoke debt cascades, drafting custom compliance barriers, and creating airtight legal corporate holdings shells.",
    deliverables: [
      "Holdings registration in prime zones",
      "Debt servicing cascade code blueprint",
      "Logistical buffer channel map"
    ],
    status: 45,
    readiness: "Execution Stage Pending"
  },
  {
    phase: "III",
    title: "Systemic Integration Phase",
    sub: "Weeks 9 - 12",
    lead: "Deploying dedicated expert teams, executing platform transfers with zero downtime, and turning on real-time compliance shields.",
    deliverables: [
      "Physical and database audit gates live",
      "Advisory team handover protocol",
      "Automated threat buffer alignment"
    ],
    status: 10,
    readiness: "Awaiting Phase Completion"
  }
];

const Classic5Process: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  
  const stage = OPERATIONS_TIMELINE[activeStage];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         {/* Title area */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 pb-8 border-b border-[#0B1215]/5">
            <div className="lg:col-span-8">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Chronological Scaffold</p>
               </div>
               
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  CHRONO LOGISTICAL <br />
                  <span className="font-light italic text-[#187A70] font-sans">Implementation.</span>
               </h2>
            </div>
            
            <div className="lg:col-span-4">
               <p className="text-slate-500 font-light text-base leading-relaxed">
                  A predictable, fully-packaged 12-week transformation map executed in staggered, low-friction stages with absolute compliance insulation.
               </p>
            </div>
         </div>

         {/* Three Main Phase Selectors styled like massive technical tabs */}
         <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {OPERATIONS_TIMELINE.map((op, idx) => {
              const isActive = activeStage === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[160px] ${isActive ? 'bg-white border-[#187A70] shadow-md' : 'bg-white/40 border-[#0B1215]/5 hover:border-[#0B1215]/20 hover:bg-white/60'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-mono tracking-widest font-black uppercase text-[#187A70] ${isActive ? 'opacity-100' : 'opacity-40'}`}>PHASE 0{idx+1}</span>
                    <span className="text-xs font-mono font-bold text-slate-400">{op.sub}</span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-[Syne] font-bold text-[#0B1215] tracking-tight leading-tight">
                      {op.title}
                    </h3>
                  </div>

                  {/* Tiny underline indicator */}
                  <div className={`absolute bottom-0 inset-x-8 h-1 transition-all ${isActive ? 'bg-[#187A70]' : 'bg-transparent'}`}></div>
                </div>
              );
            })}
         </div>

         {/* Dynamic Detailed Workspace Frame for Active Stage */}
         <div className="bg-white border border-[#0B1215]/5 rounded-[2.5rem] p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#187A70]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-stretch relative z-10">
               
               {/* Left detail scope (7 columns) */}
               <div className="lg:col-span-7 flex flex-col justify-between gap-8">
                  <div>
                     <span className="text-[10px] font-mono text-[#187A70] tracking-[0.25em] font-bold uppercase block mb-2">ACTIVE PHASE OBJECTIVE</span>
                     <h3 className="text-3xl sm:text-4xl font-[Syne] font-bold text-[#0B1215] mb-6 tracking-tight leading-tight">
                        {stage.title}
                     </h3>
                     <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                        {stage.lead}
                     </p>
                  </div>

                  {/* Deliverables list with bullet details */}
                  <div>
                     <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4">Core Phase Deliverables</p>
                     <div className="grid sm:grid-cols-3 gap-6">
                        {stage.deliverables.map((del, dIdx) => (
                           <div key={dIdx} className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-sm min-h-[140px]">
                              <div>
                                 <span className="text-[9px] font-mono text-[#187A70] font-bold uppercase tracking-widest">DELIV 0{dIdx+1}</span>
                                 <p className="text-xs font-medium text-[#0B1215] mt-2 leading-snug">{del}</p>
                              </div>
                              <span className="text-[9px] font-mono text-slate-400 mt-4">Vetted & Cleared</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right diagnostic frame (5 columns) */}
               <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="bg-[#0B1215] text-[#FAF9F5] p-8 rounded-3xl border border-white/5 relative flex flex-col justify-between min-h-[340px] shadow-lg max-w-sm mx-auto w-full">
                     
                     <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                           <Loader2 className={`w-3.5 h-3.5 text-[#187A70] ${stage.status < 100 ? 'animate-spin' : ''}`} />
                           <span className="text-[9px] font-mono tracking-widest text-[#187A70] uppercase font-black">PHASE METER</span>
                        </div>
                        <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider">{stage.readiness}</span>
                     </div>

                     <div className="text-center my-auto">
                        <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">MANDATED STAGE PROGRESS</span>
                        <h4 className="text-5xl sm:text-6xl font-[Syne] font-black text-white">{stage.status}%</h4>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden max-w-xs mx-auto mt-4">
                           <div 
                              style={{ width: `${stage.status}%` }} 
                              className="bg-[#187A70] h-full transition-all duration-[1.2s]"
                           ></div>
                        </div>
                     </div>

                     <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono uppercase text-white/40">
                        <span>Phase Secure Audit</span>
                        <ClipboardCheck className="w-4.5 h-4.5 text-[#187A70]" />
                     </div>

                  </div>
               </div>

            </div>
         </div>

      </div>
    </section>
  );
};

export default Classic5Process;
