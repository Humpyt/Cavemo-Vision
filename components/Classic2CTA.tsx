import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Classic2CTA: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,18,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,18,21,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 text-center">
        <h2 className="text-6xl md:text-[8rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9] mb-12">
          Initiate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20A69A] to-[#0b1215]">Transformation.</span>
        </h2>
        
        <p className="text-slate-500 font-light text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Partner with our executive team to redesign your corporate architecture for sustained global dominance.
        </p>

        <button className="bg-[#0b1215] hover:bg-[#20A69A] text-white px-10 py-6 rounded-full font-bold text-lg flex items-center gap-4 transition-all duration-500 shadow-2xl hover:shadow-[#20A69A]/30 group mx-auto">
          Schedule Consultation
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Classic2CTA;
