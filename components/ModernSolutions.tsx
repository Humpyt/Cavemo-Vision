
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const SOLUTIONS = [
  { 
      id: '01', 
      title: 'Venture Capital Scaling', 
      desc: 'We assist high-growth startups in refining their narrative for Tier-1 investment rounds.',
      category: 'Strategic'
  },
  { 
      id: '02', 
      title: 'Architectural Brand Systems', 
      desc: 'Developing cohesive, multi-channel design languages that endure market cycles.',
      category: 'Design'
  },
  { 
      id: '03', 
      title: 'AI Intelligence Integration', 
      desc: 'Ethical and effective implementation of machine learning into existing operations.',
      category: 'Technology'
  },
];

const ModernSolutions: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-40 bg-[#FDFDFD] px-6 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-slate-900 tracking-tighter leading-none">
                  Core <span className="italic font-normal">Intelligence</span> Units.
              </h2>
          </div>

          <div className="border-t border-slate-900">
              {SOLUTIONS.map((s, i) => (
                  <div 
                    key={s.id} 
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="group border-b border-slate-100 py-16 flex flex-col md:flex-row items-baseline justify-between gap-12 cursor-pointer transition-all hover:px-8"
                  >
                      <div className="md:w-1/4">
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{s.id} // {s.category}</span>
                      </div>
                      <div className="md:w-1/2">
                          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-[Syne] group-hover:italic transition-all">
                              {s.title}
                          </h3>
                      </div>
                      <div className="md:w-1/4 flex justify-end">
                          <div className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all ${hovered === i ? 'bg-slate-900 text-white rotate-45' : 'text-slate-400'}`}>
                              <Plus className="w-5 h-5" />
                          </div>
                      </div>
                      
                      {/* Hidden Content revealed subtly */}
                      <div className={`fixed bottom-20 left-20 z-50 pointer-events-none transition-all duration-700 overflow-hidden ${hovered === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                          <p className="text-slate-900 font-bold text-lg max-w-xs bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl ring-1 ring-slate-100">
                              {s.desc}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default ModernSolutions;
