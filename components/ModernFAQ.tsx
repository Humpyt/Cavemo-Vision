
import React, { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';

const FAQS = [
  { q: 'How do I get started with Corporate Business?', a: 'Contact our consultation team via the portal or call our dedicated line for a free strategy session.' },
  { q: 'How do you ensure the success of a project?', a: 'We utilize a data-driven methodology paired with milestone-based auditing to ensure every KPI is met.' },
  { q: 'How long will it take to complete my project?', a: 'Timelines vary by scope, but our standard enterprise transformation typically spans 3-6 months.' },
  { q: 'Can I track the progress of my project?', a: 'Yes, all clients receive access to a real-time digital dashboard for total transparency.' },
];

const ModernFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#fcfcfc] px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Card & Image */}
          <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-teal-900/10"></div>
              </div>
              
              <div className="absolute bottom-10 right-0 -translate-x-1/2 md:translate-x-0 md:-right-10 bg-teal-600 p-10 rounded-[2.5rem] text-white shadow-2xl w-full max-w-xs animate-float border border-white/10">
                  <h4 className="text-2xl font-bold mb-6 font-[Syne]">Get Started <br /> Free Call?</h4>
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                      <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                          <p className="text-teal-200 text-[10px] font-bold uppercase tracking-widest">Call Now</p>
                          <p className="text-xl font-bold">1-888-452-1505</p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 space-y-4 pt-12">
              {FAQS.map((f, i) => (
                  <div key={i} className={`rounded-[2rem] border transition-all duration-300 ${openIndex === i ? 'bg-white border-teal-100 shadow-xl' : 'bg-white border-slate-100'}`}>
                      <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full px-10 py-8 flex justify-between items-center text-left"
                      >
                          <span className={`text-lg font-bold font-[Syne] ${openIndex === i ? 'text-teal-600' : 'text-slate-900'}`}>{f.q}</span>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-teal-500 text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                              {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                      </button>
                      <div className={`px-10 overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 pb-8' : 'max-h-0'}`}>
                          <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-6">
                              {f.a}
                          </p>
                      </div>
                  </div>
              ))}
          </div>

      </div>
    </section>
  );
};

export default ModernFAQ;
