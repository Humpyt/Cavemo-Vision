
import React from 'react';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="relative z-20 px-4 pt-16 sm:pt-24 mt-8 mb-32 bg-[#f8f9fa] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="relative group bg-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(32,166,154,0.1)] transition-all duration-700 hover:-translate-y-2 border border-slate-100/80"
            >
              {/* Highlight Graphic */}
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#20A69A]/10 rounded-full blur-2xl group-hover:bg-[#20A69A]/20 transition-colors duration-700 pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-[#112325] text-white flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-md">
                    <feature.icon strokeWidth={1.5} className="w-7 h-7" />
                  </div>
                  <span className="text-6xl font-bold font-[Syne] text-slate-100 tracking-tighter select-none group-hover:text-[#20A69A]/10 transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[1.75rem] font-bold text-slate-900 mb-5 tracking-tight leading-tight group-hover:text-[#20A69A] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg mb-8 max-w-sm">
                    {feature.description}
                  </p>
                </div>
                
                {/* Footer/Action */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-slate-400 group-hover:text-[#112325] transition-colors duration-300 cursor-pointer w-fit">
                    <span>Explore More</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#20A69A] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <ArrowRight strokeWidth={2} className="w-4 h-4" />
                    </div>
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

export default Features;
