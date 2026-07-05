import React from 'react';

const PROCESS = [
  { step: '01', title: 'Macro Analysis', desc: 'Deep dive into global economic conditions, regulatory landscapes, and market saturation data.' },
  { step: '02', title: 'Strategic Architecture', desc: 'Crafting bespoke architectural roadmaps that define optimal corporate positioning and M&A targets.' },
  { step: '03', title: 'Capital Deployment', desc: 'Synchronizing financial allocation to ensure liquidity and agility during the transitional phased.' },
  { step: '04', title: 'Operational Rigor', desc: 'Implementation of high-standard operational cadences to cement new structural advantages.' }
];

const Classic2Process: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[#0b1215]/20"></div>
                <p className="text-[#0b1215] font-bold tracking-[0.2em] uppercase text-xs">Methodology</p>
              </div>
              <h2 className="text-5xl lg:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215] mb-8 leading-[0.95]">
                How we <br />engineer success.
              </h2>
              <p className="text-slate-500 font-light text-xl mb-12 max-w-md leading-relaxed">
                A rigid yet adaptive four-phase framework designed to eliminate guesswork and maximize corporate ROI.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {PROCESS.map((item, idx) => (
                <div key={idx} className="group border-b border-slate-100 py-12 first:pt-0 last:border-0 relative">
                  <div className="absolute top-12 right-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none hidden md:block">
                    <span className="text-[#20A69A]/10 text-8xl font-bold font-[Syne] tracking-tighter">{item.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#20A69A] mb-2">{item.step}.</h3>
                  <h4 className="text-3xl md:text-5xl font-[Syne] font-bold text-[#0b1215] mb-6 tracking-tight group-hover:text-[#20A69A] transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-lg font-light max-w-lg leading-relaxed group-hover:text-[#0b1215] transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classic2Process;
