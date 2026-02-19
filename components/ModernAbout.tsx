
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ModernAbout: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc] px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Image with Overlapping Elements */}
          <div className="relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover" 
                    alt="Success" 
                  />
                  <div className="absolute inset-0 bg-teal-900/10"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-3xl p-8 shadow-2xl animate-float hidden md:block border border-slate-50">
                  <h4 className="text-slate-900 font-bold text-xl mb-4 font-[Syne]">Corporate Success.</h4>
                  <div className="flex -space-x-3 mb-6">
                      {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/150?img=${i+30}`} className="w-10 h-10 rounded-full border-4 border-white" />)}
                      <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white flex items-center justify-center text-white text-[10px] font-bold">+</div>
                  </div>
                  <p className="text-slate-500 text-xs">Empowering brands globally with tailored solutions.</p>
              </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-12">
              <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-6">
                  <span className="w-4 h-px bg-teal-500"></span>
                  Get to Know Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-[Syne] text-slate-900 leading-tight mb-8">
                  Driving Innovation and Excellence for Sustainable Corporate Success Worldwide.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                  At Modern, we believe that success is a journey, not a destination. Our holistic approach ensures that every project we undertake is rooted in strategy and fueled by creative vision.
              </p>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-teal-600 transition-all shadow-xl shadow-slate-900/10">
                  Our Methodology <ArrowUpRight className="w-4 h-4" />
              </button>
          </div>

      </div>
    </section>
  );
};

export default ModernAbout;
