import React from 'react';
import { Network, LineChart, Cpu } from 'lucide-react';

const FEATURES = [
  { icon: Network, title: 'Network Expansion', desc: 'Accelerating market penetration through strategic global alignments and robust partnerships.' },
  { icon: LineChart, title: 'Capital Efficiency', desc: 'Deploying resources with surgical precision to maximize return on invested capital.' },
  { icon: Cpu, title: 'System Agility', desc: 'Modernizing internal architectures to quickly adapt to rapidly shifting market conditions.' }
];

const Classic3Features: React.FC = () => {
  return (
    <section className="bg-[#f2f4f5] py-32 px-4 md:px-8 lg:px-12 font-sans border-y border-slate-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#20A69A]/10 transition-shadow duration-500 group">
              <div className="w-20 h-20 rounded-[1.5rem] bg-[#0b1215] flex items-center justify-center mb-10 group-hover:-translate-y-2 group-hover:bg-[#20A69A] transition-all duration-500 shadow-xl">
                <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-[Syne] font-bold text-[#0b1215] mb-6 group-hover:text-[#20A69A] transition-colors">{feature.title}</h3>
              <p className="text-slate-500 font-light text-lg leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic3Features;
