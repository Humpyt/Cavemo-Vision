
import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const Home9Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1: People */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-between group">
              <div className="flex -space-x-3 mb-10">
                  {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="" />
                  ))}
              </div>
              <div>
                  <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <p className="text-slate-900 font-bold">100+ happy customer.</p>
              </div>
          </div>

          {/* Feature 2: Expertise */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center justify-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 fill-current" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-[Syne] mb-2">Award-Winning Expertise</h4>
              <p className="text-slate-500 text-sm">Recognized by industry leaders globally.</p>
          </div>

          {/* Feature 3: Image CTA */}
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative group h-[200px] cursor-pointer">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" className="w-full h-full object-cover opacity-50 transition-all group-hover:scale-105" alt="" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <p className="text-white font-medium text-sm">Our team is always available for address expert concerns.</p>
                  <button className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-xs">
                      Contact us <ArrowUpRight className="w-4 h-4" />
                  </button>
              </div>
          </div>

      </div>
    </section>
  );
};

export default Home9Features;
