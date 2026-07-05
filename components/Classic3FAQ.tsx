import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  { q: 'What size organizations do you typically partner with?', a: 'We primarily engage with mid-to-large cap enterprises and high-growth scale-ups requiring complex strategic realignments and global expansion architectures.' },
  { q: 'How is your pricing structured for consulting engagements?', a: 'Engagements are structured on a retained project basis, often coupled with performance-based equity or bonus models to ensure total alignment of interests.' },
  { q: 'Do you offer implementation services?', a: 'Yes. We are an execution-focused firm. Our mandates typically include both the strategic architecture and the operational rollout.' }
];

const Classic3FAQ: React.FC = () => {
   const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f2f4f5] py-32 px-4 md:px-8 lg:px-12 font-sans border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-[Syne] font-bold tracking-tighter text-[#0b1215] mb-16 text-center">
          Inquiries
        </h2>

        <div className="flex flex-col gap-6">
           {FAQS.map((faq, idx) => (
             <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100">
                <button 
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                   <h3 className="text-xl md:text-2xl font-bold text-[#0b1215] group-hover:text-[#20A69A] transition-colors pr-8">
                     {faq.q}
                   </h3>
                   <div className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-500 ${open === idx ? 'rotate-45 bg-[#20A69A] border-[#20A69A] text-white' : 'text-[#0b1215] group-hover:bg-slate-50'}`}>
                      <Plus className="w-5 h-5"/>
                   </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === idx ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                   <p className="text-slate-500 font-light text-lg leading-relaxed max-w-3xl">
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

export default Classic3FAQ;
