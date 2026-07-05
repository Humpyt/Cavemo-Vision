import React from 'react';

const Classic4Metrics: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-4 md:px-8 lg:px-12 font-sans border-y border-slate-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-[2rem] p-10 flex flex-col justify-center items-center text-center shadow-sm border border-slate-100 aspect-square">
                 <h3 className="text-6xl lg:text-[5rem] font-[Syne] font-bold text-[#0b1215]">10<span className="text-[#20A69A] text-4xl">x</span></h3>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-4">Capital Return</p>
              </div>
              <div className="bg-[#0b1215] rounded-[2rem] p-10 flex flex-col justify-center items-center text-center shadow-2xl aspect-square translate-y-8">
                 <h3 className="text-6xl lg:text-[5rem] font-[Syne] font-bold text-white">99<span className="text-[#20A69A] text-4xl">%</span></h3>
                 <p className="text-white/50 font-bold uppercase tracking-widest text-xs mt-4">Task Completion</p>
              </div>
              <div className="bg-[#20A69A] rounded-[2rem] p-10 flex flex-col justify-center items-center text-center shadow-xl aspect-square -translate-y-8">
                 <h3 className="text-6xl lg:text-[5rem] font-[Syne] font-bold text-white">50<span className="text-white/50 text-4xl">+</span></h3>
                 <p className="text-white/80 font-bold uppercase tracking-widest text-xs mt-4">Global Hubs</p>
              </div>
              <div className="bg-white rounded-[2rem] p-10 flex flex-col justify-center items-center text-center shadow-sm border border-slate-100 aspect-square">
                 <h3 className="text-6xl lg:text-[5rem] font-[Syne] font-bold text-[#0b1215]">2<span className="text-[#20A69A] text-4xl">k</span></h3>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-4">Employees</p>
              </div>
           </div>

           <div className="lg:pl-16">
              <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9] mb-10">
                Driven by <br />Data.
              </h2>
              <p className="text-slate-500 font-light text-xl leading-relaxed mb-10">
                Numbers dictate our approach. We shun instinct in favor of complex analytics and algorithmic forecasting to secure your operational success.
              </p>
              <ul className="space-y-6 border-t border-slate-200 pt-10">
                 {['Predictive Algorithmic Modeling', 'Global Resource Orchestration', 'Real-time Financial Telemetry'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[#0b1215] font-bold text-lg">
                       <div className="w-2 h-2 rounded-full bg-[#20A69A]"></div>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Classic4Metrics;
