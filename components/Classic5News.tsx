import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, Check, Send } from 'lucide-react';

const ACADEMIC_INSIGHTS = [
  {
    id: "REP-90",
    category: "Sovereign Markets",
    title: "Macroeconomic Safehavens in Q4 2026",
    desc: "A meticulous inquiry forecasting sovereign policy redirections across oceanic banking centers, identifying secure asset hold corridors ahead of volatile regional tariff shifts.",
    readTime: "6 min read",
    author: "K. Vance",
    date: "May 2026"
  },
  {
    id: "REP-41",
    category: "Capital Systems",
    title: "Debt Escalations inside High-Interest Regimes",
    desc: "Leveraging structured debt cascades to dramatically trim global capital costs, bypassing localized credit blockages and maximizing liquid flows safely.",
    readTime: "9 min read",
    author: "M. Sterling",
    date: "April 2026"
  },
  {
    id: "REP-13",
    category: "Ecosystem Infrastructure",
    title: "Supply Telemetry Optimization Protocols",
    desc: "Why leading aerospace and industrial giants must immediately mandate decentralized real-time cargo trackers to eliminate micro-leaking overhead costs.",
    readTime: "14 min read",
    author: "C. Vance",
    date: "March 2026"
  }
];

const Classic5News: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [bookmarkedId, setBookmarkedId] = useState<string | null>(null);
  
  // Newsletter Subscribe Form State
  const [emailSubbed, setEmailSubbed] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.includes('@')) {
      setEmailSubbed(true);
      setEmailInput('');
    }
  };

  const activeBrief = ACADEMIC_INSIGHTS[0];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5 relative">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         {/* Title area */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 pb-8 border-b border-[#0B1215]/5">
            <div className="lg:col-span-8">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Institutional Briefings // Intellectual Output</p>
               </div>
               
               <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  EDITORIAL INTEL <br />
                  <span className="font-light italic text-[#187A70] font-sans">Intelligence.</span>
               </h2>
            </div>
            
            <div className="lg:col-span-4">
               <p className="text-slate-500 font-light text-base leading-relaxed">
                  Deeply audited mathematical studies and regulatory policy reviews compiled directly by the presiding partners of our guild.
               </p>
            </div>
         </div>

         {/* Editorial Page spreading: Left Featured (7 Columns), Right stacked list (5 Columns) */}
         <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Featured Column Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between">
               <div className="bg-white border border-[#0B1215]/5 rounded-[2.5rem] p-8 sm:p-12 shadow-lg h-full flex flex-col justify-between min-h-[480px]">
                  
                  <div>
                     <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                        <span className="bg-[#187A70]/10 text-[#187A70] px-4 py-1.5 rounded-sm text-[10px] font-mono uppercase font-black tracking-widest">
                           {activeBrief.category}
                        </span>
                        
                        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono text-[10px]">
                           <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeBrief.readTime}</span>
                        </div>
                     </div>

                     <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-2">FEATURED TREATISE // {activeBrief.id}</span>
                     <h3 className="text-3xl sm:text-4xl font-[Syne] font-bold text-[#0B1215] tracking-tight leading-tight mb-6">
                        {activeBrief.title}
                     </h3>
                     
                     <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed mb-8">
                        {activeBrief.desc}
                     </p>
                  </div>

                  {/* Built-in Subscription form directly inside editorial block */}
                  <div className="border-t border-slate-100 pt-8 mt-4">
                     <p className="text-[10px] font-mono text-[#187A70] tracking-[0.2em] font-bold uppercase mb-3">RECEIVE EXCLUSIVE INTEL DESPATCHES</p>
                     
                     {emailSubbed ? (
                        <div className="bg-[#187A70]/10 border border-[#187A70]/30 rounded-2xl p-4 flex items-center gap-3 text-xs text-[#187A70] font-mono">
                           <Check className="w-5 h-5 font-black animate-scale-up" />
                           <span>SECURE EMAIL REGISTERED SUCCESS. WELCOME.</span>
                        </div>
                     ) : (
                        <form onSubmit={handleSub} className="flex gap-2 max-w-lg bg-[#FAF9F5] border border-slate-200 p-1.5 rounded-2xl">
                           <input 
                              type="email" 
                              placeholder="Enter corporate email..."
                              value={emailInput}
                              onChange={(e) => setEmailInput(e.target.value)}
                              className="bg-transparent border-0 focus:outline-none px-4 text-xs flex-1 text-[#0B1215] font-mono"
                              required 
                           />
                           <button 
                              type="submit"
                              className="bg-[#0B1215] text-[#FAF9F5] hover:bg-[#187A70] p-3 rounded-xl transition-all shadow-sm flex items-center justify-center shrink-0"
                           >
                              <Send className="w-4 h-4" />
                           </button>
                        </form>
                     )}
                  </div>

               </div>
            </div>

            {/* Right stacked list of briefings (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
               <div className="space-y-4 h-full flex flex-col justify-between">
                  {ACADEMIC_INSIGHTS.slice(1).map((brief, idx) => {
                     const isHovered = hoveredIdx === idx;
                     const isBookmarked = bookmarkedId === brief.id;
                     return (
                        <div
                           key={brief.id}
                           onMouseEnter={() => setHoveredIdx(idx)}
                           onMouseLeave={() => setHoveredIdx(null)}
                           className="bg-white/40 border border-[#0B1215]/5 rounded-3xl p-8 backdrop-blur-md shadow-sm cursor-pointer transition-all duration-500 hover:border-[#187A70] hover:bg-white flex-1 flex flex-col justify-between min-h-[220px]"
                        >
                           <div className="flex justify-between items-start border-b border-[#0B1215]/5 pb-4 mb-4">
                              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">TREATISE {brief.id}</span>
                              <div className="flex items-center gap-3 text-[9px] font-mono text-slate-400">
                                 <span>{brief.readTime}</span>
                              </div>
                           </div>

                           <div>
                              <span className="text-[10px] font-mono font-bold text-[#187A70] uppercase tracking-wider block mb-1">{brief.category}</span>
                              <h4 className="text-xl font-[Syne] font-bold text-[#0B1215] tracking-tight leading-snug hover:text-[#187A70] transition-colors mb-2">
                                 {brief.title}
                              </h4>
                              <p className="text-slate-500 font-light text-xs leading-relaxed line-clamp-2">
                                 {brief.desc}
                              </p>
                           </div>

                           <div className="border-t border-[#0B1215]/5 pt-4 mt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase">
                              <span>Author: {brief.author}</span>
                              
                              <button 
                                 onClick={(e) => {
                                   e.stopPropagation();
                                   setBookmarkedId(isBookmarked ? null : brief.id);
                                 }}
                                 className={`px-3 py-1 border rounded-full transition-all text-[9px] ${isBookmarked ? 'bg-[#187A70] border-[#187A70] text-white' : 'border-slate-200 hover:border-[#187A70] hover:text-[#187A70]'}`}
                              >
                                 {isBookmarked ? 'SECURED IN ARCHIVE' : 'BOOKMARK SPEC'}
                              </button>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5News;
