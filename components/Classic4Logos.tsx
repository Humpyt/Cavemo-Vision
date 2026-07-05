import React from 'react';

const LOGOS = [
  "Nexus Fin", "Stellar Dynamics", "Apex Tech", "Vanguard", "Quantum", "Acme Group"
];

const Classic4Logos: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs shrink-0 whitespace-nowrap">
             Trusted Partners
           </p>
           <div className="w-full h-px bg-slate-100 hidden md:block"></div>
           <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-12 gap-y-8 w-full">
              {LOGOS.map((logo, idx) => (
                <span key={idx} className="text-2xl font-[Syne] font-bold text-slate-300 hover:text-[#0b1215] transition-colors cursor-pointer select-none">
                  {logo}
                </span>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Classic4Logos;
