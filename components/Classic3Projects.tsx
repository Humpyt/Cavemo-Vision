import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { title: 'Global Tech Merger', category: 'M&A Strategy', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1500&auto=format&fit=crop' },
  { title: 'Supply Chain Resurgence', category: 'Operational Efficiency', img: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1500&auto=format&fit=crop' },
  { title: 'Neo-banking Expansion', category: 'Market Positioning', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop' },
  { title: 'Industrial Automation', category: 'Digital Transformation', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1500&auto=format&fit=crop' }
];

const Classic3Projects: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9]">
             Featured <br/>Portfolios.
           </h2>
           <button className="flex items-center gap-4 text-white bg-[#0b1215] hover:bg-[#20A69A] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-xl">
             Explore Gallery
           </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((proj, idx) => (
             <div key={idx} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <div className="rounded-[2.5rem] overflow-hidden h-[450px] lg:h-[600px] relative mb-8 shadow-2xl">
                   <img src={proj.img} alt={proj.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"/>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                   
                   <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-[#20A69A] group-hover:text-white transition-all duration-500 shadow-xl">
                      <ArrowUpRight className="w-6 h-6"/>
                   </div>
                </div>
                <div className="pl-4 border-l-2 border-[#20A69A]">
                   <p className="text-[#20A69A] font-bold uppercase tracking-widest text-xs mb-3">{proj.category}</p>
                   <h3 className="text-3xl lg:text-4xl font-[Syne] font-bold text-[#0b1215]">{proj.title}</h3>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic3Projects;
