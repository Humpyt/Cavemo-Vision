import React from 'react';

const LOGOS = [
  "Acme Corp", "GlobalNet", "Nexus Fin", "Stellar", "Quantum", "Apex Tech", "Vanguard"
];

const Classic3Logos: React.FC = () => {
  return (
    <section className="bg-[#0b1215] py-12 md:py-16 border-b border-white/5 overflow-hidden">
      <div className="flex border-y border-white/5 py-8 opacity-50 hover:opacity-100 transition-opacity duration-700">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div key={idx} className="flex items-center mx-12 md:mx-20">
              <span className="text-3xl md:text-5xl font-[Syne] font-bold text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>{logo}</span>
              <div className="w-3 h-3 rounded-full bg-[#20A69A] ml-12 md:ml-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic3Logos;
