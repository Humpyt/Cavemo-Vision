import React from 'react';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  { client: 'Vanguard Industrial', scope: 'M&A and Restructuring', date: '2026', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop' },
  { client: 'Stellar Aerospace', scope: 'Global Market Entry', date: '2025', img: 'https://images.unsplash.com/photo-1444464666168-49b626d49cbb?q=80&w=1200&auto=format&fit=crop' },
  { client: 'Nexus Financial', scope: 'Digital Ecosystem', date: '2025', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' }
];

const Classic4Projects: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
         <div className="flex items-center justify-between mb-20">
           <h2 className="text-5xl md:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215]">
             Selected <br />Works.
           </h2>
           <button className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#0b1215] hover:text-white transition-colors">
              <ArrowRight className="w-6 h-6" />
           </button>
         </div>

         <div className="flex flex-col gap-10">
            {PROJECTS.map((proj, idx) => (
               <div key={idx} className="group flex flex-col lg:flex-row items-center gap-10 lg:gap-20 border-t border-slate-100 pt-10 cursor-pointer">
                  <div className="w-full lg:w-1/2 h-[400px] rounded-[2rem] overflow-hidden relative">
                     <img src={proj.img} alt={proj.client} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]" />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                     <p className="text-[#20A69A] font-bold uppercase tracking-widest text-sm mb-4">{proj.scope}</p>
                     <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-[Syne] font-bold text-[#0b1215] mb-6 group-hover:text-[#20A69A] transition-colors">{proj.client}</h3>
                     <p className="text-slate-400 font-bold text-lg mb-8">{proj.date}</p>
                     
                     <div className="flex items-center gap-4 text-[#0b1215] font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                        Read Case Study <ArrowRight className="w-4 h-4"/>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Classic4Projects;
