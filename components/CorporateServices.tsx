
import React from 'react';
import { Target, Zap, Settings, ArrowRight, Check } from 'lucide-react';

const SERVICES = [
    {
        id: '01',
        title: 'Customer Experience Solutions',
        desc: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        features: ['Operational Efficiency', 'Competitive Edge'],
        icon: Target
    },
    {
        id: '02',
        title: 'Sustainability and ESG Consulting',
        desc: 'Helping your business transition into a sustainable future with measurable ESG benchmarks and ethical operations.',
        features: ['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge'],
        icon: Zap
    },
    {
        id: '03',
        title: 'Training Development',
        desc: 'Upskill your workforce for the digital age with our tailored training programs and strategic coaching sessions.',
        features: ['Expansion Strategies', 'Operational Efficiency'],
        icon: Settings
    }
];

const CorporateServices: React.FC = () => {
  return (
    <section className="py-32 bg-[#0A0A0B] px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center md:text-left">
              <span className="text-teal-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Process</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-[Syne]">
                  Tailored <span className="text-slate-500">Solutions</span> for Your Business.
              </h2>
          </div>

          <div className="space-y-4">
              {SERVICES.map((s) => (
                  <div key={s.id} className="group bg-[#141416] p-10 rounded-[2.5rem] border border-white/5 hover:border-teal-500/50 transition-all grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-5 flex items-center gap-8">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-black transition-all">
                              <s.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-2xl font-bold text-white font-[Syne] max-w-xs">{s.title}</h3>
                      </div>
                      
                      <div className="md:col-span-4">
                          <ul className="space-y-3">
                              {s.features.map((f, i) => (
                                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                                      <div className="w-4 h-px bg-teal-500"></div>
                                      {f}
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <div className="md:col-span-3 text-right">
                          <p className="text-slate-500 text-xs leading-relaxed mb-6 hidden md:block">
                              {s.desc}
                          </p>
                          <button className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-teal-400 transition-colors">
                              Explore <ArrowRight className="w-4 h-4" />
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default CorporateServices;
