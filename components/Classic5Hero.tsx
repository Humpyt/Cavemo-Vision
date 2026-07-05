import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Award, Globe, FileText, ArrowUpRight } from 'lucide-react';

const Classic5Hero: React.FC = () => {
  const [activeRef, setActiveRef] = useState<number>(0);

  const refHighlights = [
    { ref: "MD-2026-X", field: "Capital Ingress", stat: "+24.8% YoY" },
    { ref: "MD-2026-Y", field: "Operational Speed", stat: "-42% Friction" },
    { ref: "MD-2026-Z", field: "Ecosystem Power", stat: "140+ Markets" }
  ];

  return (
    <section className="bg-[#FAF9F5] text-[#0B1215] pt-32 pb-16 px-4 md:px-8 lg:px-12 min-h-screen flex flex-col justify-between font-sans relative overflow-hidden">
      
      {/* Editorial Luxury Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[8%] w-px bg-[#0B1215]/5"></div>
        <div className="absolute top-0 bottom-0 left-[35%] w-px bg-[#0B1215]/5 hidden md:block"></div>
        <div className="absolute top-0 bottom-0 left-[68%] w-px bg-[#0B1215]/5 hidden lg:block"></div>
        <div className="absolute top-0 bottom-0 right-[8%] w-px bg-[#0B1215]/5"></div>
        <div className="absolute top-[40%] left-0 right-0 h-px bg-[#0B1215]/5"></div>
        <div className="absolute top-[75%] left-0 right-0 h-px bg-[#0B1215]/5"></div>
      </div>

      {/* Decorative Running Head */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto flex justify-between items-center text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/40 uppercase pb-6 border-b border-[#0B1215]/5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#187A70] animate-ping"></span>
          <span>Instituted 2012 / Vol. V</span>
        </div>
        <div className="hidden sm:flex gap-6">
          <span>SEC BRIEFING FILE // #FAF-9042</span>
          <span>GLOBAL COGNITIVE ADVANTAGE</span>
        </div>
      </div>

      {/* Main Core Layout */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto flex-1 flex flex-col justify-center my-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Editorial Title & Action Block (Left 8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-12 lg:pr-12">
            
            <div>
              {/* Ultra-narrow elite tag */}
              <div className="inline-flex items-center gap-3 bg-white/60 border border-[#0B1215]/5 rounded-sm px-4 py-1.5 mb-8 backdrop-blur-md shadow-sm">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#187A70] font-bold">SOVEREIGN TRUST & ADVISORY</span>
              </div>

              {/* Magnificent Editorial Typographic Spacing */}
              <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.8rem] font-bold font-[Syne] tracking-[-0.04em] text-[#0B1215] leading-[0.88] mb-8">
                COMMAND THE <br />
                <span className="font-light italic text-[#187A70] font-sans">Ecosystem.</span> <br />
                ACQUIRE SOVEREIGNTY.
              </h1>
            </div>

            {/* Micro-grid breakdown */}
            <div className="grid sm:grid-cols-12 gap-8 border-t border-[#0B1215]/10 pt-10">
              <div className="sm:col-span-7">
                <p className="text-[#0B1215]/80 font-light text-lg md:text-xl leading-relaxed">
                  We formulate aggressive capital alignments and operational scaffolds to elevate enterprise giants out of commodity competition into permanent sovereign market monopolies.
                </p>
              </div>
              
              <div className="sm:col-span-5 flex sm:justify-end items-end gap-4">
                <a 
                  href="#dialogue" 
                  className="px-8 py-5 rounded-full bg-[#0B1215] text-[#FAF9F5] font-semibold text-sm uppercase tracking-wider hover:bg-[#187A70] transition-all duration-300 shadow-xl shadow-[#0B1215]/10 flex items-center gap-3 group shrink-0"
                >
                  <span>Initiate Inquiry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Col 2: Elite Interactive Portrait & Index Ledger (Right 4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#0B1215]/10 pt-8 lg:pt-0 lg:pl-8">
            
            {/* Elegant Portrait Frame with hover metrics */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[1.35/1] lg:aspect-[4/5] shadow-2xl bg-[#0B1215] border border-[#0B1215]/10">
              {/* Subtle visual gradient tint layered over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1215]/90 via-[#0B1215]/10 to-transparent z-10 mix-blend-multiply"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-[2s]" 
                alt="Partner Executive Advisory" 
              />

              {/* Framing text layout inside picture area */}
              <div className="absolute inset-x-8 bottom-8 z-20 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#187A70] font-black mb-1">MEMBER SINCE 2012</span>
                <p className="text-xl font-[Syne] font-bold">K. Vance, Master Partner</p>
                <p className="text-white/50 text-xs mt-1">"Growth is and will always be a mechanical science."</p>
              </div>
            </div>

            {/* Quick Interactive Ledger Reference List */}
            <div className="mt-8 bg-white/60 p-6 rounded-xl border border-[#0B1215]/5 backdrop-blur-md shadow-sm">
              <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-4">ACTIVE DIRECTORY AUDIT</p>
              <div className="space-y-4">
                {refHighlights.map((hl, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveRef(i)} 
                    className={`flex justify-between items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${activeRef === i ? 'bg-[#187A70]/10 text-[#187A70]' : 'hover:bg-[#0B1215]/5'}`}
                  >
                    <span className="text-xs font-mono font-bold">{hl.ref}</span>
                    <span className="text-xs text-slate-500 font-light">{hl.field}</span>
                    <span className="text-xs font-[Syne] font-bold">{hl.stat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Footer Navigation bar */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto pt-6 border-t border-[#0B1215]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-4 h-4 text-[#187A70]" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Tier-1 Elite Registry</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Globe className="w-4 h-4 text-[#187A70]" />
            <span className="font-mono uppercase tracking-wider text-[10px]">Multi-Hedged Routing</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 font-mono tracking-widest uppercase text-[10px]">
          <span>Explore Matrix Below</span>
          <ChevronDown className="w-4 h-4 text-[#187A70] animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default Classic5Hero;
