
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { 
      id: '03.', 
      title: 'Sustainability and ESG Consulting', 
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' 
  },
  { 
      id: '01.', 
      title: 'Business Strategy Development', 
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop' 
  },
  { 
      id: '02.', 
      title: 'Customer Experience Solutions', 
      img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop' 
  },
];

const Home6Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                  <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="aspect-[4/3] overflow-hidden">
                          <img src={s.img} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" alt="" />
                      </div>
                      <div className="p-8">
                          <p className="text-slate-400 font-bold text-sm mb-4">{s.id}</p>
                          <div className="flex items-center justify-between gap-4">
                              <h3 className="text-2xl font-bold text-slate-900 font-[Syne] leading-tight">{s.title}</h3>
                              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-all">
                                  <ArrowUpRight className="w-5 h-5" />
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          
          <div className="mt-16 flex justify-center gap-3">
              {[1, 2, 3, 4].map(dot => (
                  <div key={dot} className={`h-1.5 rounded-full transition-all ${dot === 2 ? 'w-12 bg-teal-500' : 'w-4 bg-slate-200'}`}></div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home6Services;
