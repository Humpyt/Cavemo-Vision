
import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const Home8Hero: React.FC = () => {
  return (
    <section className="relative bg-[#fcfcfc] pt-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      <span className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-teal-700">Business Excellence</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold font-[Syne] text-slate-900 leading-[0.9] tracking-tighter mb-12">
                      Empowering <br /> 
                      <span className="text-teal-500 italic">Business</span> <br /> 
                      with Expertise.
                  </h1>

                  <div className="flex flex-col md:flex-row items-start gap-12 max-w-2xl">
                      <p className="text-slate-500 text-lg leading-relaxed font-medium">
                          Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.
                      </p>
                      
                      <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-teal-500 transition-all shrink-0 shadow-xl shadow-slate-900/10">
                          Let's Talk <ArrowUpRight className="w-5 h-5" />
                      </button>
                  </div>
              </div>

              <div className="lg:col-span-6 relative">
                  <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                        alt="Expertise" 
                      />
                      <div className="absolute inset-0 bg-teal-900/10"></div>
                      
                      {/* Explore Button Overlay */}
                      <div className="absolute top-10 right-10 w-40 h-40 flex items-center justify-center">
                          <div className="absolute inset-0 animate-rotate-slow">
                              <svg viewBox="0 0 100 100" className="w-full h-full fill-white/80">
                                  <path id="heroPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                  <text className="text-[12px] font-bold uppercase tracking-[0.4em]">
                                      <textPath xlinkHref="#heroPath">Explore Us More • Explore Us More • </textPath>
                                  </text>
                              </svg>
                          </div>
                          <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-teal-500 transition-colors z-10 shadow-xl">
                              <ArrowDown className="w-5 h-5" />
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};

export default Home8Hero;
