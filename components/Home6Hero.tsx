
import React from 'react';
import { ArrowUpRight, Play, ArrowDown } from 'lucide-react';

const Home6Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-48 pb-32 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                      <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">Our Company</span>
                  </div>

                  <h1 className="text-6xl md:text-[5.5rem] font-bold font-[Syne] text-white leading-[0.95] tracking-tighter mb-10">
                      Innovating Today for Build <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">Smarter, Stronger, and <br /> More Successful.</span>
                  </h1>
                  
                  <div className="max-w-xl">
                      <p className="text-slate-400 text-lg leading-relaxed mb-12">
                          Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current touchpoints, our identifying areas for improvement, and using insights to identify.
                      </p>

                      <div className="flex flex-wrap items-center gap-12 border-t border-white/10 pt-10">
                          <div>
                              <h4 className="text-6xl font-bold text-white mb-2 font-[Syne]">20M</h4>
                              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Users</p>
                          </div>
                          <div>
                              <h4 className="text-6xl font-bold text-white mb-2 font-[Syne]">8.5X</h4>
                              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Revenue Growth</p>
                          </div>
                          <div className="flex -space-x-3 items-center">
                              {[1, 2, 3].map(i => (
                                  <img key={i} src={`https://i.pravatar.cc/150?img=${i + 20}`} className="w-12 h-12 rounded-full border-4 border-[#050505]" alt="" />
                              ))}
                              <div className="w-12 h-12 rounded-full bg-teal-500 border-4 border-[#050505] flex items-center justify-center text-black font-bold text-sm">+</div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl relative">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 scale-105 group-hover:scale-100" 
                        alt="Success" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Central Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group/play transition-transform hover:scale-110">
                              <Play className="w-8 h-8 text-white fill-current ml-1" />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home6Hero;
