import React, { useState } from 'react';
import { LayoutGrid, ListFilter, Award, ArrowUpRight, CheckCircle, Percent } from 'lucide-react';

const MAN_PROJECTS = [
  {
    id: 'ae-01',
    category: 'capital',
    name: 'Aether Capital Re-Alignment',
    desc: 'Systemic debt-to-equity restructuring across 14 sovereign registries. Successfully optimized interest spreads while reinforcing asset integrity rules under G20 standards.',
    stat: '+34.5% Yield',
    deliverables: ['Regional Debt Consolidation', 'Sovereign Tax Neutrality Cage', 'Block Equity Re-Sourcing'],
    partner: 'K. Vance',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=500&fit=crop'
  },
  {
    id: 'vp-02',
    category: 'speed',
    name: 'Vesper Aerospace Supply Channel',
    desc: 'Automating logistics routing for military-grade composite pipelines. We stripped out 42% operational friction, deploying redundant localized cargo buffering nets.',
    stat: '42% Lag Cut',
    deliverables: ['Predictive Buffer Orchestration', 'Customs Clearing Pipeline', 'Algorithmic Transit Nodes'],
    partner: 'J. Sterling',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&fit=crop'
  },
  {
    id: 'ze-03',
    category: 'vaults',
    name: 'Zenith Tech Jurisdictional Mesh',
    desc: 'Securing multi-tenant algorithmic platform paths through independent data cages. Designed and implemented decentralized server trust structures under strict regional audit gates.',
    stat: '100% Insulated',
    deliverables: ['Autonomous Server Mesh', 'Automated Threat Neutralization', 'Sovereign Privacy Vaults'],
    partner: 'R. Moreau',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&fit=crop'
  },
  {
    id: 've-04',
    category: 'capital',
    name: 'Verdant Global Yield Hedge',
    desc: 'Integrating diverse maritime and railway fleets inside a singular capital holding shell. Engineered custom tax cascades, lowering global holding taxes by $120M annually.',
    stat: '$120M Saved',
    deliverables: ['Asset Shell Convergence', 'Cascading Tax Allocation', 'Intermodal Risk Shielding'],
    partner: 'K. Vance',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=500&fit=crop'
  }
];

const Classic5Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCaseId, setSelectedCaseId] = useState<string>('ae-01');

  const filteredProjects = activeFilter === 'all' 
    ? MAN_PROJECTS 
    : MAN_PROJECTS.filter(p => p.category === activeFilter);

  const selectedCase = MAN_PROJECTS.find(p => p.id === selectedCaseId) || MAN_PROJECTS[0];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden border-b border-[#0B1215]/5">
      <div className="max-w-[1600px] mx-auto w-full">
         
         {/* Head Grid */}
         <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
               <div className="flex items-center gap-3 mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                 <p className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Mandates Completed // Active Record</p>
               </div>
               <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight text-[#0B1215] leading-[0.93]">
                  MANDATE LEDGER <br />
                  <span className="font-light italic text-[#187A70] font-sans">Portfolio.</span>
               </h2>
            </div>

            {/* Interactive Filters row */}
            <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
               {['all', 'capital', 'speed', 'vaults'].map((filt) => (
                  <button
                     key={filt}
                     onClick={() => {
                       setActiveFilter(filt);
                       // Reset selected case if the filtered list does not contain it
                       const list = filt === 'all' ? MAN_PROJECTS : MAN_PROJECTS.filter(p => p.category === filt);
                       if (list.length > 0) {
                         setSelectedCaseId(list[0].id);
                       }
                     }}
                     className={`py-2 px-4 rounded-full border text-[10px] font-mono uppercase font-bold tracking-widest transition-all duration-300 ${activeFilter === filt ? 'bg-[#0B1215] border-[#0B1215] text-[#FAF9F5]' : 'bg-white/50 border-[#0B1215]/5 text-slate-500 hover:border-[#0B1215]/20 hover:bg-white'}`}
                  >
                     {filt === 'all' ? 'All Ledger' : filt === 'capital' ? 'Capital Overhauls' : filt === 'speed' ? 'Speed & Friction' : 'Vault Infrastructure'}
                  </button>
               ))}
            </div>
         </div>

         {/* Two Column Layout: List Left (7 Columns), Detail Viewer Right (5 Columns) */}
         <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Case list */}
            <div className="lg:col-span-7 space-y-4">
               {filteredProjects.map((p) => {
                  const isViewerMatch = selectedCaseId === p.id;
                  return (
                     <div
                        key={p.id}
                        onClick={() => setSelectedCaseId(p.id)}
                        className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isViewerMatch ? 'bg-white border-[#187A70] shadow-md' : 'bg-white/40 border-[#0B1215]/5 hover:border-[#0B1215]/25 hover:bg-white/60'}`}
                     >
                        <div className="space-y-2">
                           <div className="flex items-center gap-3">
                              <span className="text-[10px] font-mono tracking-widest text-[#187A70] font-bold uppercase">{p.category} block</span>
                              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                              <span className="text-[10px] font-mono text-slate-400 font-light">{p.id.toUpperCase()}</span>
                           </div>
                           
                           <h3 className="text-xl sm:text-2xl font-[Syne] font-bold text-[#0B1215] tracking-tight leading-tight transition-colors group-hover:text-[#187A70]">
                              {p.name}
                           </h3>
                        </div>

                        <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
                           <span className="text-sm font-[Syne] font-extrabold text-[#187A70] bg-[#187A70]/10 px-4 py-1.5 rounded-full">
                              {p.stat}
                           </span>
                           <div className={`w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isViewerMatch ? 'bg-[#187A70] border-[#187A70] text-white rotate-45' : 'text-slate-400'}`}>
                              <ArrowUpRight className="w-4 h-4" />
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>

            {/* Right Detailed Case Viewer Sheet */}
            <div className="lg:col-span-5 flex flex-col justify-start">
               <div className="bg-white border border-[#0B1215]/5 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[480px]">
                  
                  <div>
                     {/* Picture panel preview of the case study */}
                     <div className="rounded-2xl overflow-hidden aspect-[1.8/1] mb-8 border border-slate-100 relative group/pic">
                        <img 
                           src={selectedCase.img} 
                           alt={selectedCase.name} 
                           className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover/pic:grayscale-0 group-hover/pic:scale-103"
                        />
                        <div className="absolute inset-x-4 top-4 font-mono text-[9px] bg-black/60 text-white backdrop-blur-sm px-2 py-1 rounded-sm tracking-widest uppercase inline-block max-w-max">
                           Secured Case File
                        </div>
                     </div>

                     <span className="text-[9px] font-mono font-bold text-[#187A70] uppercase tracking-widest block mb-1">MANDATE AUDIT ARCHIVE</span>
                     <h3 className="text-2xl font-[Syne] font-bold text-[#0B1215] tracking-tight leading-tight mb-4">
                        {selectedCase.name}
                     </h3>
                     
                     <p className="text-slate-600 font-light text-xs sm:text-sm leading-relaxed mb-6">
                        {selectedCase.desc}
                     </p>

                     {/* Key Deliverables Bullet points styled beautiful and professional */}
                     <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-3">CONSOLIDATION ACTION SHEET</p>
                     <div className="space-y-2">
                        {selectedCase.deliverables.map((del, i) => (
                           <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                              <CheckCircle className="w-4 h-4 text-[#187A70] shrink-0 fill-[#187A70]/10" />
                              <span className="font-light">{del}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Mandate Footer parameters */}
                  <div className="border-t border-slate-100 pt-6 mt-8 flex justify-between items-center text-xs text-slate-400 font-mono uppercase">
                     <div>
                        <span className="block text-[9px] font-light">Lead Partner</span>
                        <span className="font-bold text-[#0B1215] text-[11px]">{selectedCase.partner}</span>
                     </div>
                     <div className="text-right">
                        <span className="block text-[9px] font-light">Yield Captured</span>
                        <span className="font-black text-[#187A70] text-[13px]">{selectedCase.stat}</span>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5Projects;
