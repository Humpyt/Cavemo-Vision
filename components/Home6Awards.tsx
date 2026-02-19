
import React from 'react';

const AWARDS = [
    { id: '01.', title: 'Inspire Growth Award', win: 'Winner', year: '2010', icon: '🏆' },
    { id: '02.', title: 'Pinnacle Excellence Award', win: 'Nominee', year: '2016', icon: '✨' },
    { id: '03.', title: 'Mastermind Innovation', win: 'Winner', year: '2022', icon: '💡' },
];

const Home6Awards: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Our Achievements</span>
              <h2 className="text-4xl md:text-5xl font-bold font-[Syne] text-slate-900">
                  Our pursuit of perfection <br /> has recognized
              </h2>
          </div>

          <div className="space-y-4">
              {AWARDS.map((a, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                      <div className="flex items-center gap-12 mb-6 md:mb-0">
                          <span className="text-slate-400 font-bold text-sm">{a.id}</span>
                          <div className="text-4xl">{a.icon}</div>
                          <h3 className="text-2xl font-bold text-slate-900 font-[Syne]">{a.title}</h3>
                      </div>
                      <div className="flex items-center gap-24">
                          <span className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${a.win === 'Winner' ? 'bg-teal-500 text-white' : 'border border-slate-200 text-slate-400'}`}>
                              {a.win}
                          </span>
                          <span className="text-slate-900 font-bold font-mono">{a.year}</span>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home6Awards;
