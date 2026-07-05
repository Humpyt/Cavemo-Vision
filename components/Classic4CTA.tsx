import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Classic4CTA: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto bg-[#0b1215] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white shadow-2xl">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#20A69A]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-[Syne] font-bold tracking-tighter mb-10 leading-[0.9]">
             Architect <br /> Your Future.
           </h2>
           <p className="text-white/60 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
             Join forces with our executive team to recalibrate your corporate trajectory and dominate your industry.
           </p>

           <button className="bg-white text-[#0b1215] hover:bg-[#20A69A] hover:text-white px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[#20A69A]/50 group w-full sm:w-auto mx-auto">
             Begin the Dialogue
             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0b1215] group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
             </div>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Classic4CTA;
