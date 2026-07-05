import React from 'react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Their profound understanding of macroeconomic factors and agile operational restructuring saved us from a disastrous acquisition.",
    author: "Elena Rostova",
    role: "CEO, Nexus Financial",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The strategic roadmap they provided wasn't just theoretical. It was an actionable blueprint that directly led to our massive valuation increase.",
    author: "Marcus Chen",
    role: "Founder, Stellar Dynamics",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&auto=format&fit=crop"
  }
];

const Classic2Testimonials: React.FC = () => {
  return (
    <section className="bg-[#f5f5f7] py-32 px-4 md:px-8 lg:px-12 font-sans border-t border-slate-200/50">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-px bg-[#0b1215]/20"></div>
          <p className="text-[#0b1215] font-bold tracking-[0.2em] uppercase text-xs">Client Perspectives</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {TESTIMONIALS.map((test, idx) => (
            <div key={idx} className="bg-white p-10 md:p-16 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 group">
              <Quote className="w-12 h-12 text-[#20A69A]/20 mb-8" />
              <h3 className="text-2xl md:text-3xl font-[Syne] font-bold text-[#0b1215] leading-snug mb-12">
                "{test.quote}"
              </h3>
              <div className="flex items-center gap-5 border-t border-slate-100 pt-8">
                <img src={test.image} alt={test.author} className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div>
                  <h4 className="font-bold text-[#0b1215] text-lg">{test.author}</h4>
                  <p className="text-slate-500 text-sm">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2Testimonials;
