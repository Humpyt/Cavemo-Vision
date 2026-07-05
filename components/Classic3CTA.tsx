import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Classic3CTA: React.FC = () => {
  return (
    <section className="bg-[#0b1215] text-white py-32 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 bg-[#20A69A]/5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px)' }}></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h2 className="text-6xl sm:text-7xl md:text-[8rem] font-[Syne] font-bold tracking-tighter leading-[0.85] mb-12">
          Ready to scale <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#20A69A]">beyond limits?</span>
        </h2>
        <p className="text-white/60 font-light text-xl md:text-2xl max-w-2xl mx-auto mb-16">
          Schedule a deep-dive analysis session with our executive board to architect your next phase of growth.
        </p>

        <button className="bg-[#20A69A] hover:bg-white text-[#0b1215] px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl hover:shadow-[#20A69A]/50 group mx-auto w-full sm:w-auto">
          Contact Our Partners
          <div className="w-10 h-10 rounded-full bg-[#0b1215]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
             <ArrowUpRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Classic3CTA;
