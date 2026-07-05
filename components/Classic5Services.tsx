import React, { useState } from 'react';
import { ArrowUpRight, Gauge, ShieldAlert, CheckCircle, Smartphone, Database, Globe } from 'lucide-react';

const SERVICE_LINES = [
  { 
    id: 'cap', 
    title: 'Macro Capital Structures', 
    tag: 'Financial Scaffolding', 
    desc: 'Shoring up global equity pathways, leveraging structural debt cascades, and aligning multi-regional tax vaults to lock in continuous institutional liquidity.',
    target: 'Capital Expansion Layer'
  },
  { 
    id: 'mkt', 
    title: 'Tactical Market Consolidation', 
    tag: 'Expansion & Merger Vectors', 
    desc: 'Isolating high-growth market niches, designing airtight operational and compliance integration maps, and navigating volatile state barriers.',
    target: 'Market Sovereign Core'
  },
  { 
    id: 'ops', 
    title: 'Cognitive Ecosystem Engineering', 
    tag: 'Autonomous Infrastructure', 
    desc: 'Automating multi-tiered supply logistics, deploying secure enterprise data networks, and removing administrative friction to gain maximum velocity.',
    target: 'Operational Velocity Hub'
  }
];

const Classic5Services: React.FC = () => {
  const [selectedSpec, setSelectedSpec] = useState<string>('cap');
  
  // Simulation States for Interactive Experience
  const [companyScale, setCompanyScale] = useState<number>(5); // In Billions
  const [volatility, setVolatility] = useState<string>('high');

  // Interactive Equations to calculate score dynamically
  const calculateMetrics = () => {
    let baseScore = 92;
    if (volatility === 'extreme') baseScore -= 18;
    if (volatility === 'high') baseScore -= 8;
    
    // Scale impact
    if (companyScale > 10) {
      baseScore += 5;
    } else if (companyScale < 2) {
      baseScore -= 12;
    }
    
    const riskFactor = Math.round((100 - baseScore) * 0.75);
    const costSavings = (companyScale * 0.083).toFixed(2); // simulated savings in billions

    return {
      stability: Math.min(Math.max(baseScore, 10), 99),
      risk: Math.max(riskFactor, 5),
      savings: costSavings
    };
  };

  const currentMetrics = calculateMetrics();

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5">
      <div className="max-w-[1600px] mx-auto w-full">
         
         {/* Head Area */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
            <div className="lg:col-span-7">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Advisory Vectors</p>
               </div>
               <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  CAPABILITIES & <br />
                  <span className="font-light italic text-[#187A70] font-sans">Simulated</span> INTEL.
               </h2>
            </div>
            
            <div className="lg:col-span-5">
               <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed max-w-lg">
                  Explore our core practices through our active simulation engine. Adjust operational parameters below to model defensive systemic intervention.
               </p>
            </div>
         </div>

         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left: Core Capabilities List (8 columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
               <div className="space-y-4">
                  {SERVICE_LINES.map((srv, idx) => {
                     const isSelected = selectedSpec === srv.id;
                     return (
                        <div 
                           key={idx}
                           onClick={() => setSelectedSpec(srv.id)}
                           className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col justify-between ${isSelected ? 'bg-white border-[#187A70] shadow-md' : 'bg-white/40 border-[#0B1215]/5 hover:border-[#0B1215]/20 hover:bg-white/60'}`}
                        >
                           <div className="flex justify-between items-start gap-4">
                              <div>
                                 <span className="text-[10px] font-mono font-bold text-[#187A70] uppercase tracking-widest">{srv.tag}</span>
                                 <h3 className="text-2xl font-[Syne] font-bold text-[#0B1215] mt-1 tracking-tight leading-tight">
                                    {srv.title}
                                 </h3>
                              </div>
                              <div className={`w-10 h-10 rounded-full border border-[#0B1215]/10 flex items-center justify-center transition-all ${isSelected ? 'bg-[#187A70] border-[#187A70] text-white rotate-45' : 'text-[#0B1215]'}`}>
                                 <ArrowUpRight className="w-4.5 h-4.5" />
                              </div>
                           </div>

                           <p className="text-slate-500 font-light text-sm mt-4 leading-relaxed max-w-2xl">
                              {srv.desc}
                           </p>

                           <div className="border-t border-[#0B1215]/5 pt-4 mt-6 flex justify-between items-center text-xs text-slate-400 font-mono uppercase">
                              <span>Practice Scope</span>
                              <span className="font-bold text-[#0B1215]">{srv.target}</span>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* Right: Embedded Interactive Scenario Simulator Card (5 columns) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
               <div className="bg-[#0B1215] text-[#FAF9F5] p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px] w-full max-w-lg mx-auto border border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(24,122,112,0.1),transparent)] rounded-[2.5rem] pointer-events-none"></div>

                  {/* Simulator Running Head */}
                  <div>
                     <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                           <h4 className="text-[9px] font-mono tracking-[0.2em] text-[#187A70] uppercase font-black">SIMULATOR ENGINE 5.0</h4>
                        </div>
                        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">LIVE CALCULATION</span>
                     </div>

                     <h3 className="text-xl font-[Syne] font-bold text-white mb-6 leading-tight">
                        Ecosystem Fragility Auditing
                     </h3>

                     {/* Variable Slider - Group Capital Size */}
                     <div className="mb-6">
                        <div className="flex justify-between items-center text-xs font-mono uppercase text-white/60 mb-2">
                           <span>Enterprise Capital Scale</span>
                           <span className="text-white font-bold">{companyScale}B USD</span>
                        </div>
                        <input 
                           type="range" 
                           min="1" 
                           max="25" 
                           step="1"
                           value={companyScale}
                           onChange={(e) => setCompanyScale(Number(e.target.value))}
                           className="w-full accent-[#187A70] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] font-mono text-white/40 mt-1">
                           <span>$1B (Enterprise)</span>
                           <span>$25B (Conglomerate)</span>
                        </div>
                     </div>

                     {/* Variable Option - Regulatory Turbulence */}
                     <div className="mb-8">
                        <p className="text-xs font-mono uppercase text-white/60 mb-2">Systemic Volatility Index</p>
                        <div className="grid grid-cols-3 gap-2">
                           {['low', 'high', 'extreme'].map((opt) => (
                              <button
                                 key={opt}
                                 onClick={() => setVolatility(opt)}
                                 className={`py-2 px-3 rounded-xl border text-[10px] font-mono uppercase font-bold tracking-widest transition-all ${volatility === opt ? 'bg-[#187A70] border-[#187A70] text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}
                              >
                                 {opt}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Calculated Outputs */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                     <p className="text-[9px] font-mono tracking-widest text-[#187A70] uppercase font-black mb-4">ESTIMATED SYSTEM PERFORMANCE</p>
                     
                     <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/5">
                        <div>
                           <span className="text-[9px] font-mono text-white/40 block mb-1">STABILITY</span>
                           <span className="text-lg sm:text-2xl font-[Syne] font-bold text-white">{currentMetrics.stability}%</span>
                        </div>
                        <div>
                           <span className="text-[9px] font-mono text-white/40 block mb-1">RISK EXPOSURE</span>
                           <span className="text-lg sm:text-2xl font-[Syne] font-bold text-red-400">{currentMetrics.risk}%</span>
                        </div>
                        <div>
                           <span className="text-[9px] font-mono text-white/40 block mb-1">EST. MARGINS</span>
                           <span className="text-lg sm:text-2xl font-[Syne] font-bold text-[#187A70]">${currentMetrics.savings}B</span>
                        </div>
                     </div>

                     {/* Simulated Dynamic Advice */}
                     <div className="border-t border-white/5 pt-4 mt-4 flex items-start gap-2.5 text-left">
                        <Gauge className="w-4 h-4 text-[#187A70] shrink-0 mt-0.5" />
                        <p className="text-[10px] text-white/60 font-mono leading-relaxed">
                           {volatility === 'extreme' 
                              ? 'Critical vulnerability detected. System mandates instant debt restructuring and core capital insulation overlay.' 
                              : 'System reports operational viability. Continuous active ecosystem auditing and asset route monitoring recommended.'
                           }
                        </p>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5Services;
