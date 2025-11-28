
import React from 'react';
import { FEATURES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="relative z-20 px-4 -mt-16 sm:-mt-24 mb-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300 shadow-lg shadow-slate-900/20">
                    <feature.icon strokeWidth={1.5} className="w-8 h-8" />
                  </div>
                  <span className="text-5xl font-extrabold text-slate-100 group-hover:text-slate-200 transition-colors duration-300 select-none">
                    0{index + 1}
                  </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                {feature.description}
              </p>
              
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
                 <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
