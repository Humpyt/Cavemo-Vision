import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Classic4About: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
               <p className="text-[#20A69A] font-bold uppercase tracking-widest text-sm mb-6 border-l-2 border-[#20A69A] pl-4">The Firm</p>
               <h2 className="text-5xl lg:text-[5.5rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9] mb-10">
                 Precision <br />in motion.
               </h2>
               <p className="text-slate-500 font-light text-xl leading-relaxed mb-12">
                 We exist to eliminate the friction between corporate strategy and market reality. By leveraging deep macroeconomic datasets, our partners architect frictionless operational models.
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
               <div>
                  <h4 className="text-[#0b1215] text-5xl font-[Syne] font-bold mb-2">350<span className="text-[#20A69A]">+</span></h4>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Projects Delivered</p>
               </div>
               <div>
                  <h4 className="text-[#0b1215] text-5xl font-[Syne] font-bold mb-2">42<span className="text-[#20A69A]">k</span></h4>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Hours Consulted</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="grid sm:grid-cols-2 gap-6 h-full">
                <div className="h-[400px] sm:h-[600px] rounded-[2rem] overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" alt="Meeting" />
                </div>
                <div className="flex flex-col gap-6">
                   <div className="h-[250px] sm:h-[350px] rounded-[2rem] overflow-hidden group">
                      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" alt="Tech" />
                   </div>
                   <div className="flex-1 bg-[#0b1215] rounded-[2rem] p-8 flex flex-col items-start justify-end text-white group cursor-pointer hover:bg-[#20A69A] transition-colors duration-500">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-auto group-hover:rotate-45 transition-transform">
                         <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-[Syne] font-bold leading-tight">Our Philosophy <br/>& History</h3>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic4About;
