import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NEWS = [
  { date: 'OCT 12, 2026', tag: 'Market Analysis', title: 'The Shift in Decentralized Equity Geopolitics', img: 'https://images.unsplash.com/photo-1590283603385-18ff467dc57b?q=80&w=800&auto=format&fit=crop' },
  { date: 'SEP 28, 2026', tag: 'M&A Strategy', title: 'Why Mega-Mergers are Failing at Integration', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { date: 'SEP 15, 2026', tag: 'Leadership', title: 'Re-inventing the C-Suite for Agile Markets', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop' }
];

const Classic2News: React.FC = () => {
  return (
    <section className="bg-[#f5f5f7] py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-200 pb-16">
          <div>
            <h2 className="text-5xl lg:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.95]">
              Latest <br />Intelligence.
            </h2>
          </div>
          <button className="bg-[#0b1215] hover:bg-[#20A69A] text-white px-8 py-4 rounded-full font-bold transition-colors">
            Read all insights
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {NEWS.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden overflow-hidden h-[300px] relative mb-6">
                <img src={item.img} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" alt={item.title} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#20A69A] font-bold uppercase tracking-wider text-xs">{item.tag}</span>
                  <span className="text-slate-400 font-medium text-xs">{item.date}</span>
                </div>
                <h3 className="text-2xl font-[Syne] font-bold text-[#0b1215] mb-4 group-hover:text-[#20A69A] transition-colors">{item.title}</h3>
                <div className="flex items-center gap-2 text-[#0b1215] font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                  Read article <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2News;
