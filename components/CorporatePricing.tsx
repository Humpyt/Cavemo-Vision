
import React from 'react';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

const PLANS = [
    {
        name: 'Basic Plan',
        price: '99',
        desc: 'Essential Business Services',
        features: ['Access to core services', 'Email support'],
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200&h=100&fit=crop'
    },
    {
        name: 'Standard Plan',
        price: '249',
        desc: 'Complete Business Solutions',
        highlight: true,
        features: ['All features in Basic Plan', 'Priority support', 'Weekly reporting'],
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&h=100&fit=crop'
    },
    {
        name: 'Premium Plan',
        price: '499',
        desc: 'Advanced Business Services',
        features: ['All features in Standard Plan', 'Dedicated manager', 'Strategy consulting'],
        img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=200&h=100&fit=crop'
    }
];

const CorporatePricing: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Pricing Plan</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-[Syne]">
                  Our Pricing <span className="text-slate-300">Plan.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PLANS.map((p, idx) => (
                  <div key={idx} className={`rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-4 ${p.highlight ? 'bg-[#0A0A0B] text-white shadow-2xl' : 'bg-white text-slate-900 border border-slate-100 shadow-xl'}`}>
                      <div>
                          <h4 className="text-xl font-bold mb-1">{p.name}</h4>
                          <p className="text-slate-500 text-xs mb-8">{p.desc}</p>
                          
                          <div className="flex items-baseline gap-1 mb-10">
                              <span className="text-xs font-bold">$</span>
                              <span className="text-6xl font-bold tracking-tighter">{p.price}</span>
                              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">/per month</span>
                          </div>

                          <button className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 mb-8 transition-all ${p.highlight ? 'bg-white text-black hover:bg-teal-500' : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-900 hover:text-white'}`}>
                              Choose Plan <ArrowUpRight className="w-4 h-4" />
                          </button>

                          <ul className="space-y-4 mb-10">
                              {p.features.map((f, i) => (
                                  <li key={i} className="flex items-center gap-3 text-sm">
                                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-teal-500/10 text-teal-500 flex items-center justify-center">
                                          <Check className="w-2 h-2" />
                                      </div>
                                      <span className={p.highlight ? 'text-slate-400' : 'text-slate-600'}>{f}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <div className="border-t border-white/5 pt-8 flex items-center justify-between">
                          <img src={p.img} className="w-24 h-16 rounded-lg object-cover grayscale opacity-50" alt="feature" />
                          <button className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-teal-500 transition-colors ${p.highlight ? 'text-white' : 'text-slate-900'}`}>
                              Read More <ArrowRight className="w-3 h-3" />
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default CorporatePricing;
