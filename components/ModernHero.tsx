
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const ModernHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 bg-[#FDFDFD] overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      
      {/* Soft Background Bloom */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-50/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-10 animate-reveal">
                  <span className="w-12 h-px bg-slate-900"></span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-400">Excellence by Design</span>
              </div>
              
              <h1 className="text-7xl md:text-[9rem] font-bold font-[Syne] text-slate-900 leading-[0.85] tracking-tighter mb-12 animate-reveal delay-200">
                  Refining the <br />
                  <span className="italic font-normal">Modern</span> Future.
              </h1>
              
              <div className="max-w-xl animate-reveal delay-400">
                  <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light">
                      A boutique consultancy bridging the gap between profound strategy and avant-garde execution. We don't just solve problems; we curate success.
                  </p>
                  
                  <div className="flex items-center gap-12">
                      <button className="group flex items-center gap-4 py-2 border-b-2 border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-widest hover:text-slate-400 hover:border-slate-400 transition-all">
                          Start a project <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </button>
                      <div className="hidden md:flex flex-col">
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Portfolio 2025</span>
                          <span className="text-xs font-bold text-slate-900 underline underline-offset-4 cursor-pointer">View Curated Works</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block animate-reveal delay-400">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                    alt="Refined Office" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default ModernHero;
