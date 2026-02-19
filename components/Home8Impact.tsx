
import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

const Home8Impact: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Get to Know Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-[Syne] text-slate-900 leading-tight tracking-tight">
                  Committed Delivering Our Measurable Result and in Building from the Lasting Relationships a through out trusts and innovation and shared.
              </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center border-t border-slate-100 pt-20">
              <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-72 h-72 group cursor-pointer">
                      <div className="absolute inset-0 rounded-full border border-dashed border-teal-500 group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" className="w-full h-full object-cover" alt="" />
                          <div className="absolute inset-0 bg-teal-900/20 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                  <Play className="w-6 h-6 text-teal-600 fill-current ml-1" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="lg:col-span-4 text-center">
                  <h4 className="text-9xl font-bold text-slate-900 font-[Syne] tracking-tighter mb-4">30<sup className="text-teal-500 font-light">+</sup></h4>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">Years of Corporate <br /> Experience.</p>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                  <p className="text-slate-500 text-sm leading-relaxed mb-10">
                      Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current touchpoints, identifying areas for improvement, and using insights to evolve your brand.
                  </p>
                  <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-900 transition-all text-xs uppercase tracking-widest">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home8Impact;
