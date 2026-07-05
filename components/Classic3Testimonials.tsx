import React from 'react';
import { Quote } from 'lucide-react';

const Classic3Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 border-l-[4px] border-[#0b1215] pl-8 py-4">
             <Quote className="w-16 h-16 text-[#20A69A] mb-8" />
             <h2 className="text-4xl md:text-5xl font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-tight mb-8">
               "Their architectural approach to our operational deficit was nothing short of brilliant. They didn't just consult; they transformed our underlying DNA."
             </h2>
             <div>
                <h4 className="font-bold text-[#0b1215] text-lg uppercase tracking-wider">Jonathan Reyes</h4>
                <p className="text-[#20A69A] text-sm font-bold uppercase tracking-widest mt-1">CEO, Apex Technologies</p>
             </div>
          </div>

          <div className="lg:col-span-7">
             <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { q: "We experienced a 3x yield on capital deployed within the first year of their strategic implementation.", a: "Sarah Jenkins, Vanguard" },
                  { q: "The level of macroeconomic awareness they bring to the boardroom is unmatched in the industry.", a: "David Chen, GlobalNet" }
                ].map((test, idx) => (
                   <div key={idx} className="bg-[#f8f9fa] p-10 rounded-[2rem] border border-slate-100 hover:border-[#20A69A]/30 transition-colors">
                      <p className="text-slate-600 font-light text-lg leading-relaxed mb-8">"{test.q}"</p>
                      <p className="text-[#0b1215] font-bold uppercase tracking-widest text-xs">{test.a}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic3Testimonials;
