import React, { useState } from 'react';
import { Target, Layers, Shield, Sparkle } from 'lucide-react';

const LOGO_PARTNERS = [
  { name: 'Aether Capital', sector: 'Strategic Equities', aum: '$45.0B AUM', status: 'Hedged Block', ref: "REG #E-09" },
  { name: 'Vesper Heavy', sector: 'Industrial Aerospace', aum: '$18.4B Cap', status: 'Active Bond', ref: "REG #I-12" },
  { name: 'Zenith Tech Systems', sector: 'Algorithmic Systems', aum: '$22.1B Valuation', status: 'Core Asset', ref: "REG #T-04" },
  { name: 'Verdant Global', sector: 'Intermodal Logistics', aum: '$14.9B Route', status: 'Vetted Yield', ref: "REG #L-99" },
  { name: 'Halcyon Advisory', sector: 'Systemic Insurance', aum: '$11.5B Scaffolding', status: 'Insulated Bond', ref: "REG #R-81" }
];

const Classic5Logos: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#FAF9F5] py-20 px-4 md:px-8 lg:px-12 font-sans border-y border-[#0B1215]/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        
        {/* Layout Header Row */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 pb-10 mb-12 border-b border-[#0B1215]/5">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase leading-none">
              Institutional Integration Directory
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-light max-w-xl">
            Co-managing core operational pipelines, sovereign debt alignments, and regulatory compliance nets with tier-1 global conglomerates.
          </p>
        </div>

        {/* Creative Partner Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-[#0B1215]/5 divide-y md:divide-y-0 md:divide-x divide-[#0B1215]/5 rounded-xl bg-white/40 overflow-hidden backdrop-blur-sm shadow-sm">
          {LOGO_PARTNERS.map((logo, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-8 relative group transition-all duration-300 hover:bg-[#FAF9F5]/80 cursor-pointer flex flex-col justify-between min-h-[190px]"
            >
              {/* Golden line accent appearing on hover */}
              <div className={`absolute top-0 inset-x-0 h-0.5 bg-[#187A70] scale-x-0 transition-transform duration-300 origin-left ${hoveredIdx === idx ? 'scale-x-100' : ''}`}></div>

              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-mono text-slate-400 tracking-wider bg-[#0B1215]/5 px-2 py-0.5 rounded-sm">{logo.ref}</span>
                <span className="text-[9px] font-mono font-medium tracking-widest text-[#187A70] uppercase">{logo.status}</span>
              </div>

              <div>
                <h4 className="text-xl font-[Syne] font-bold text-[#0B1215] tracking-tight group-hover:text-[#187A70] transition-colors leading-tight mb-1">
                  {logo.name}
                </h4>
                <p className="text-xs text-slate-500 font-light">{logo.sector}</p>
              </div>

              <div className="border-t border-[#0B1215]/5 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono">
                <span className="text-[#0B1215]/40 uppercase tracking-widest">Sovereign Capacity</span>
                <span className="font-bold text-[#0B1215]/80">{logo.aum}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Classic5Logos;
