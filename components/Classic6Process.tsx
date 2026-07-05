import React from 'react';

const STEPS = [
  { step: '01', title: 'Topographic Audit', desc: 'Complete mapping of all physical and legal capital flows to isolate latency.' },
  { step: '02', title: 'Blueprint Design', desc: 'Mathematical modeling of alternative corporate configurations.' },
  { step: '03', title: 'Axiomatic Build', desc: 'Hard structural re-assembly of holding companies and logistics channels.' },
  { step: '04', title: 'Velocity Release', desc: 'Initiation of new operational vectors under total synthetic telemetry.' }
];

const Classic6Process: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#FAFAFA] py-32 px-4 md:px-12 lg:px-20 font-sans border-y border-white/10">
      <div className="max-w-[1600px] w-full mx-auto">
         
         <div className="mb-24">
            <h2 className="text-4xl sm:text-6xl font-[Syne] font-bold max-w-3xl leading-[0.9] uppercase">
               Implementation <br/> <span className="text-[#0047FF]">Protocol.</span>
            </h2>
         </div>

         {/* Monolithic Step Sequence */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {STEPS.map((s, i) => (
               <div key={i} className="p-8 border-b sm:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047FF]/10 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <span className="text-6xl font-[Syne] font-black text-white/5 block mb-8 transition-colors group-hover:text-white/20">
                     {s.step}
                  </span>
                  
                  <h3 className="text-xl font-[Syne] font-bold text-white mb-4 relative z-10">{s.title}</h3>
                  <p className="text-white/40 font-light text-sm relative z-10 leading-relaxed">
                     {s.desc}
                  </p>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6Process;
