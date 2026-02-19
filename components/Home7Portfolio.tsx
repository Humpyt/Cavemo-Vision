
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home7Portfolio: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-slate-900 tracking-tighter leading-none">
                  Our Selected <br /> <span className="text-slate-200">Projects.</span>
              </h2>
              <button className="bg-teal-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-900 hover:text-white transition-all group">
                  Explore More <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                  <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 relative">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" alt="" />
                      <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                      <div>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Connect</p>
                          <h3 className="text-3xl font-bold font-[Syne] text-slate-900">Event Management Platform</h3>
                      </div>
                      <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-6 h-6" />
                      </div>
                  </div>
              </div>

              <div className="group cursor-pointer">
                  <div className="aspect-video rounded-[3rem] overflow-hidden mb-8 relative">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105" alt="" />
                      <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                  <div className="flex justify-between items-center px-4">
                      <div>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Support</p>
                          <h3 className="text-3xl font-bold font-[Syne] text-slate-900">Interactive Learning Platform</h3>
                      </div>
                      <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          <ArrowUpRight className="w-6 h-6" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home7Portfolio;
