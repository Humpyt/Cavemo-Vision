import React from 'react';
import { ArrowDownRight, Play } from 'lucide-react';

const Classic3Hero: React.FC = () => {
  return (
    <section className="bg-[#0b1215] text-white pt-32 pb-20 px-4 md:px-8 lg:px-12 min-h-[100svh] font-sans flex flex-col justify-center relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#20A69A]/20 to-transparent rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12 border-b border-white/10 pb-12">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.85] uppercase">
              Future <br />
              <span className="text-[#20A69A]">Forward.</span>
            </h1>
          </div>
          <div className="max-w-sm pb-4">
            <p className="text-white/60 font-light text-xl leading-relaxed mb-8">
              We engineer global market dominance through rigorous strategic recalibration and aggressive expansion models.
            </p>
            <div className="flex items-center gap-6">
              <button className="w-16 h-16 rounded-full bg-white text-[#0b1215] flex items-center justify-center hover:bg-[#20A69A] hover:text-white transition-colors duration-500 shrink-0">
                <ArrowDownRight className="w-6 h-6" />
              </button>
              <span className="font-bold uppercase tracking-widest text-xs">Drive Value</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[400px] sm:h-[500px]">
          <div className="lg:col-span-2 h-full rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Office" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#20A69A] flex items-center justify-center">
                <Play className="w-4 h-4 fill-white ml-1" />
              </div>
              <span className="font-bold uppercase tracking-widest text-xs">Showreel &apos;26</span>
            </div>
          </div>
          <div className="h-full rounded-[2rem] bg-[#1a2428] p-8 md:p-12 flex flex-col justify-between border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#20A69A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex justify-end">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold shrink-0">
                  EST 08
               </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-[Syne] font-bold tracking-tighter mb-4">$8.4B+</h3>
              <p className="text-white/50 font-light text-sm">Capital strategically deployed across 45 active global portfolios this year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classic3Hero;
