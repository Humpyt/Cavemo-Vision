import React from 'react';
import { Target, Layers, Globe, Shield } from 'lucide-react';

const FEATURES = [
  { icon: Target, title: 'Hyper-Targeting', desc: 'Isolating high-impact market segments through rigorous data verification.' },
  { icon: Layers, title: 'Stacked Integration', desc: 'Layering operational protocols to ensure total organizational alignment.' },
  { icon: Globe, title: 'Global Nuance', desc: 'Adapting to localized regulatory climates without sacrificing speed.' },
  { icon: Shield, title: 'Risk Mitigation', desc: 'Pre-emptive structural safeguards against economic volatility.' },
];

const Classic4Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-4 md:px-8 lg:px-12 font-sans border-y border-slate-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {FEATURES.map((feat, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] group hover:-translate-y-2 transition-transform duration-500">
               <div className="mb-8 relative">
                 <div className="w-14 h-14 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center group-hover:bg-[#0b1215] group-hover:border-[#0b1215] transition-colors duration-500 relative z-10">
                   <feat.icon className="w-6 h-6 text-[#0b1215] group-hover:text-white transition-colors" strokeWidth={1.5} />
                 </div>
                 <span className="absolute top-2 left-6 text-6xl font-[Syne] font-black text-slate-50 z-0 select-none group-hover:text-[#20A69A]/10 transition-colors">0{idx+1}</span>
               </div>
               <h3 className="text-xl font-bold text-[#0b1215] mb-4">{feat.title}</h3>
               <p className="text-slate-500 font-light leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Classic4Features;
