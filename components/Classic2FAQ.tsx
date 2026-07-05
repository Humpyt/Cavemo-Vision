import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How does your operational restructuring process work?',
    a: 'We begin with a comprehensive 4-week macro-analysis of your current operational cadences. From there, we design a custom blueprint targeting inefficiencies, which we then implement alongside your executive team.'
  },
  {
    q: 'What is the typical timeframe for a global expansion project?',
    a: 'Market entry roadmaps generally take 3 to 6 months to architect, followed by a 12-to-18 month execution phase depending on regulatory complexities and capital deployment schedules.'
  },
  {
    q: 'Do you implement the strategies or only advise?',
    a: 'We are an execution-first firm. While we build the strategic roadmaps, our primary metric for success is the physical implementation and measurable impact of those roadmaps on your balance sheet.'
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Our expertise spans high-barrier industries including enterprise software, global logistics, heavy manufacturing, and centralized finance.'
  }
];

const Classic2FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0b1215] py-32 px-4 md:px-8 lg:px-12 text-white font-sans">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-[Syne] font-bold tracking-tighter mb-6 leading-tight">
            Common Inquiries
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full py-8 text-left flex items-center justify-between group"
              >
                <h3 className="text-2xl font-[Syne] font-bold group-hover:text-[#20A69A] transition-colors pr-8">
                  {faq.q}
                </h3>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#20A69A] group-hover:bg-[#20A69A] transition-all">
                  {open === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${open === idx ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
              >
                <p className="text-white/50 text-lg font-light leading-relaxed max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2FAQ;
