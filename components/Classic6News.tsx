import React from 'react';
import { FileText } from 'lucide-react';

const NEWS = [
  { cat: "ARCHIVE 01", title: "Synthesizing M&A Vault Structures in Europe", date: "Vol 4 / Day 190" },
  { cat: "ARCHIVE 02", title: "The End of Legacy Supply Friction", date: "Vol 4 / Day 142" },
  { cat: "ARCHIVE 03", title: "Automated Tariff Avoidance Algorithms", date: "Vol 4 / Day 099" }
];

const Classic6News: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] text-[#050505] py-32 px-4 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1600px] w-full mx-auto grid lg:grid-cols-2 gap-20">
         
         <div>
            <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-4 block">Whitepapers & Data</span>
            <h2 className="text-5xl sm:text-7xl font-[Syne] font-bold mb-8">INTEL <br/> INDEX.</h2>
            <button className="bg-[#050505] text-white px-6 py-3 text-xs font-mono tracking-widest uppercase hover:bg-[#0047FF] transition-colors">
               Access Vault
            </button>
         </div>

         <div className="flex flex-col justify-center">
            {NEWS.map((item, i) => (
               <div key={i} className="group py-8 border-b border-[#050505]/10 flex justify-between items-center cursor-pointer">
                  <div>
                     <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase mb-2 block">{item.cat}</span>
                     <h3 className="text-xl sm:text-2xl font-[Syne] font-bold group-hover:text-[#0047FF] transition-colors max-w-md">{item.title}</h3>
                  </div>
                  <div className="text-right">
                     <span className="text-xs font-mono text-[#050505]/40 mb-2 block">{item.date}</span>
                     <FileText className="w-5 h-5 text-[#050505]/20 group-hover:text-[#0047FF] inline-block -rotate-45 transition-colors" />
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Classic6News;
