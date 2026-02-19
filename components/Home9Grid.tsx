
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home9Grid: React.FC = () => {
  return (
    <section className="bg-[#050505] py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
              <span className="text-teal-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">About our company</span>
              <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-white leading-[1.1]">
                  Our Stories on Begins Passion.
              </h2>
          </div>

          <div className="space-y-12">
              
              {/* Card 1 */}
              <div className="group bg-[#0A1F1F] rounded-[3rem] p-12 border border-white/5 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 relative z-10">
                      <div className="max-w-xl">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-teal-400">
                                  <div className="w-6 h-6 rounded-sm bg-teal-500/20 border border-teal-500"></div>
                              </div>
                              <h3 className="text-3xl font-bold text-white font-[Syne]">Business Strategy <br /> Development</h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand business.
                          </p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                          <ArrowUpRight className="w-8 h-8" />
                      </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-[16/6]">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all" alt="" />
                  </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#0A1F1F] rounded-[3rem] p-12 border border-white/5 relative overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 relative z-10">
                      <div className="max-w-xl">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-teal-400">
                                  <div className="w-6 h-6 rounded-full border border-teal-500"></div>
                              </div>
                              <h3 className="text-3xl font-bold text-white font-[Syne]">Sustainability and ESG <br /> Consulting</h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand business.
                          </p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                          <ArrowUpRight className="w-8 h-8" />
                      </div>
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-[16/6]">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all" alt="" />
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};

export default Home9Grid;
