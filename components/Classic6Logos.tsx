import React from 'react';

const LOGOS = [
  { text: "AEGIS HOLDINGS", id: "01" },
  { text: "QUANTUM LOGISTICS", id: "02" },
  { text: "NEXUS SYSTEMS", id: "03" },
  { text: "OMNICORP ASSETS", id: "04" },
  { text: "VALIANT CAPITAL", id: "05" }
];

const Classic6Logos: React.FC = () => {
  return (
    <section className="bg-[#050505] py-border-y border-white/10 font-sans relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="w-full flex">
         {/* Continuous Marquee Ticker */}
         <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] items-center py-6">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
               <div key={i} className="flex items-center gap-12 px-12 group cursor-default">
                  <span className="text-[10px] font-mono text-[#0047FF] opacity-50 group-hover:opacity-100 transition-opacity">SYS.{l.id}</span>
                  <span className="text-2xl md:text-3xl font-[Syne] font-bold text-white/30 group-hover:text-white transition-colors tracking-tight">
                     {l.text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/10 ml-12"></div>
               </div>
            ))}
         </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default Classic6Logos;
