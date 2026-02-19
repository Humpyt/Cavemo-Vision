
import React from 'react';
import { ArrowUpRight, Play, ArrowDown, Users } from 'lucide-react';

const CorporateHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden bg-[#0A0A0B]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-teal-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Innovating the Future</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold font-[Syne] text-white leading-[0.9] tracking-tighter mb-8">
                  Leading Future <br />
                  for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">Business.</span>
              </h1>
              
              <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10">
                  Committed to delivering innovative solutions that drive success. With a focus on quality, we empower brands to reach new heights.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                  <button className="bg-teal-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all group">
                      Get Started <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                  <button className="flex items-center gap-3 text-white font-medium group">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-black transition-all">
                          <Play className="w-4 h-4 fill-current" />
                      </div>
                      Watch Video
                  </button>
              </div>

              {/* Success Badge */}
              <div className="mt-20 flex items-center gap-8 border-t border-white/10 pt-10">
                  <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center overflow-hidden">
                              <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                          </div>
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-teal-500 flex items-center justify-center text-[10px] font-bold text-black">
                          +
                      </div>
                  </div>
                  <div>
                      <p className="text-white font-bold text-sm">We have 100+ happy customer.</p>
                      <p className="text-slate-500 text-xs">Join our growing ecosystem</p>
                  </div>
              </div>
          </div>

          {/* Right Visuals */}
          <div className="lg:col-span-6 relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
                    alt="Success" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Explore Rotating Badge */}
                  <div className="absolute bottom-10 right-10 w-32 h-32 flex items-center justify-center z-20">
                      <div className="absolute inset-0 animate-rotate-slow">
                          <svg viewBox="0 0 100 100" className="w-full h-full fill-white/40">
                              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                              <text className="text-[10px] uppercase font-bold tracking-[0.3em]">
                                  <textPath xlinkHref="#circlePath">Explore More • Explore More • </textPath>
                              </text>
                          </svg>
                      </div>
                      <ArrowDown className="w-6 h-6 text-white" />
                  </div>

                  {/* 93% Card */}
                  <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-48 animate-float">
                      <p className="text-slate-300 text-xs font-bold uppercase mb-2">Projects Completed</p>
                      <h4 className="text-5xl font-bold text-white mb-2">93%</h4>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[93%] h-full bg-teal-500"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default CorporateHero;
