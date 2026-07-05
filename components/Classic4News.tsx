import React from 'react';

const NEWS = [
  { category: 'Analysis', title: 'Decentralized Finance in 2027', desc: 'Predicting the regulatory shifts in the EU banking sector.', readTime: '5 min' },
  { category: 'Strategy', title: 'The Fall of Legacy Infrastructure', desc: 'Why modern conglomerates must adopt micro-services.', readTime: '8 min' },
  { category: 'M&A', title: 'Post-Merger Integrations', desc: 'Avoiding the common friction points during talent consolidation.', readTime: '12 min' }
];

const Classic4News: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-4 md:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9]">
             Market <br />Insights.
           </h2>
           <p className="text-[#20A69A] font-bold uppercase tracking-widest text-sm cursor-pointer hover:text-[#0b1215] transition-colors">
              Explore Publication →
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-[#0b1215]">
           {NEWS.map((item, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#20A69A]/10 transition-shadow duration-500 flex flex-col h-full cursor-pointer group">
                <div className="flex justify-between items-center mb-10">
                   <span className="bg-slate-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:bg-[#0b1215] group-hover:text-white transition-colors">{item.category}</span>
                   <span className="text-slate-400 font-medium text-xs">{item.readTime} read</span>
                </div>
                <h3 className="text-3xl font-[Syne] font-bold mb-6 group-hover:text-[#20A69A] transition-colors leading-tight">{item.title}</h3>
                <p className="text-slate-500 font-light text-lg mb-8">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Classic4News;
