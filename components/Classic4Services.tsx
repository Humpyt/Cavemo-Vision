import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { title: 'Capital Allocation', category: 'Finance', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop' },
  { title: 'Market Positioning', category: 'Strategy', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  { title: 'Digital Overhaul', category: 'Technology', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
];

const Classic4Services: React.FC = () => {
  return (
    <section className="bg-[#0b1215] py-32 px-4 md:px-8 lg:px-12 text-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
               <p className="text-[#20A69A] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-4">
                 <span className="w-12 h-px bg-[#20A69A]"></span>
                 Core Practices
               </p>
               <h2 className="text-5xl lg:text-[7rem] font-[Syne] font-bold tracking-tighter leading-[0.9]">
                 Capabilities.
               </h2>
            </div>
            <p className="text-white/50 text-xl font-light max-w-sm leading-relaxed mb-4">
              We cover the complete spectrum of corporate transformation, from financial scaffolding to brand execution.
            </p>
         </div>

         <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden h-[500px] cursor-pointer">
                 <img src={srv.img} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] opacity-60 group-hover:opacity-40" alt={srv.title} />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 
                 <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <p className="text-[#20A69A] font-bold uppercase tracking-widest text-xs mb-3">{srv.category}</p>
                       <h3 className="text-3xl lg:text-4xl font-[Syne] font-bold text-white mb-6 leading-tight">{srv.title}</h3>
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 backdrop-blur-md hover:bg-[#20A69A] hover:border-[#20A69A]">
                          <ArrowUpRight className="w-5 h-5" />
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Classic4Services;
