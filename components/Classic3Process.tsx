import React from 'react';

const PROCESS = [
  { phase: 'Discovery & Analysis', desc: 'Comprehensive audits of current operational and financial positioning.' },
  { phase: 'Blueprint Architecture', desc: 'Developing actionable, bespoke strategic roadmaps aligned with goals.' },
  { phase: 'Tactical Execution', desc: 'Hands-on implementation utilizing rigorous project management cadences.' },
  { phase: 'Optimization & Scale', desc: 'Continuous data monitoring and adjustment to ensure sustainable long-term value.' },
];

const Classic3Process: React.FC = () => {
  return (
    <section className="bg-[#f2f4f5] py-32 px-4 md:px-8 lg:px-12 font-sans relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24 relative z-10">
           <span className="text-[#20A69A] font-bold uppercase tracking-widest text-xs mb-6 block">Our Approach</span>
           <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9]">
             A systematic <br />lifecycle.
           </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-px bg-[#0b1215]/10 hidden lg:block -translate-y-12"></div>

           {PROCESS.map((item, idx) => (
              <div key={idx} className="relative group bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-[#20A69A]/10 transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                 <div className="text-[#20A69A] font-[Syne] font-bold text-6xl mb-8 group-hover:scale-110 transition-transform transform origin-left">
                    0{idx + 1}
                 </div>
                 <h3 className="text-2xl font-bold text-[#0b1215] mb-4">{item.phase}</h3>
                 <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                 
                 {/* Decorative dot connecting to line */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-[6px] border-[#f2f4f5] hidden lg:block shadow-sm group-hover:border-[#20A69A] transition-colors"></div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Classic3Process;
