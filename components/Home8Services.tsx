
import React from 'react';
import { Target, Users, Zap, Check } from 'lucide-react';

const SERVICES = [
    {
        title: 'Business Strategy Development',
        desc: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        features: ['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge'],
        icon: Target
    },
    {
        title: 'Customer Experience Solutions',
        desc: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        features: ['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge'],
        icon: Users
    },
    {
        title: 'Sustainability and ESG Consulting',
        desc: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        features: ['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge'],
        icon: Zap
    }
];

const Home8Services: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Solutions</span>
              <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-slate-900 tracking-tighter leading-none">
                  Tailor Business Solutions <br /> for Corporates.
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                  <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
                      <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-10 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
                          <s.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 font-[Syne] leading-tight">{s.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-10">{s.desc}</p>
                      
                      <div className="space-y-4 pt-10 border-t border-slate-50">
                          {s.features.map((f, j) => (
                              <div key={j} className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                                      <Check className="w-3 h-3 stroke-[4]" />
                                  </div>
                                  <span className="text-slate-600 text-xs font-bold">{f}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home8Services;
