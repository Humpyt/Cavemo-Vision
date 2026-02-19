
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home8Portfolio: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative mb-8">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="" />
                      <div className="absolute inset-0 bg-slate-900/10 transition-opacity group-hover:opacity-0"></div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                      <div>
                          <p className="text-teal-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Connect</p>
                          <h3 className="text-3xl font-bold font-[Syne] text-slate-900 uppercase tracking-tighter">Event Management Platform</h3>
                      </div>
                      <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-6 h-6" />
                      </div>
                  </div>
              </div>

              <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative mb-8">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="" />
                      <div className="absolute inset-0 bg-slate-900/10 transition-opacity group-hover:opacity-0"></div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                      <div>
                          <p className="text-teal-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Empower</p>
                          <h3 className="text-3xl font-bold font-[Syne] text-slate-900 uppercase tracking-tighter">Digital Marketing Campaign</h3>
                      </div>
                      <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-6 h-6" />
                      </div>
                  </div>
              </div>

          </div>
          
          <div className="mt-16 flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map(dot => (
                  <div key={dot} className={`h-1.5 rounded-full transition-all ${dot === 4 ? 'w-12 bg-teal-500' : 'w-4 bg-slate-200'}`}></div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home8Portfolio;
