
import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

const Home8Awards: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          
          <div className="flex-1 bg-teal-700 p-12 rounded-[3.5rem] text-white flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
              <h4 className="text-3xl font-bold font-[Syne] mb-10 relative z-10">Get Started <br /> Free Call?</h4>
              <div className="bg-white/10 backdrop-blur-md px-10 py-6 rounded-[2rem] border border-white/20 flex flex-col items-center gap-2 relative z-10 group-hover:bg-white group-hover:text-teal-900 transition-all cursor-pointer">
                  <Phone className="w-6 h-6 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Consultation</span>
                  <span className="text-2xl font-bold">1-888-452-1505</span>
              </div>
          </div>

          <div className="flex-[2] bg-slate-50 p-12 md:p-20 rounded-[3.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-20">
              <div className="text-center md:text-left">
                  <h4 className="text-[8rem] font-bold text-slate-900 font-[Syne] tracking-tighter leading-none mb-2">100<sup className="text-teal-500 font-light">+</sup></h4>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">Awards Archived</p>
              </div>
              <div className="flex-1">
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 italic">
                      "Through a combination of data-driven insights and innovative approaches, we consistently deliver world-class benchmarks."
                  </p>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
                          <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">View Accolades</span>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
};

export default Home8Awards;
