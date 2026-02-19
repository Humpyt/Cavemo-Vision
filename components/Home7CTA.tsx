
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home7CTA: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto rounded-[3rem] overflow-hidden bg-teal-600 h-[400px] relative group shadow-2xl">
          {/* Geometric Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-900/10 skew-x-[-20deg] origin-top translate-x-20"></div>
          
          <div className="absolute inset-0 flex items-center justify-between p-12 md:p-24 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold text-white font-[Syne] max-w-2xl leading-[0.9] tracking-tighter">
                  Reach Out To Our <br /> Support Team?
              </h2>
              
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-slate-900/20 group">
                  Contact Us <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </button>
          </div>
          
          {/* Subtle Accent */}
          <div className="absolute bottom-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
      </div>
    </section>
  );
};

export default Home7CTA;
