import React from 'react';

const Classic3About: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px] lg:h-[800px]">
              <div className="col-span-1 rounded-[2rem] overflow-hidden mt-16 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" alt="Office" />
              </div>
              <div className="col-span-1 rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" alt="Executive" />
              </div>
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-slate-100 text-center w-64">
              <span className="block text-[#0b1215] text-[4rem] font-[Syne] font-bold leading-none mb-2">99%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#20A69A]">Success Rate</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="w-12 h-px bg-[#20A69A]"></div>
               <span className="text-[#20A69A] font-bold uppercase tracking-widest text-xs">Firm Identity</span>
            </div>
            
            <h2 className="text-5xl lg:text-[5.5rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9] mb-12">
              Beyond the <br />status quo.
            </h2>

            <p className="text-slate-500 font-light text-xl leading-relaxed mb-10">
              We do not accept industry averages. Through meticulous data analysis and bold operational restructuring, we engineer outcomes that continuously redefine market expectations.
            </p>
            <p className="text-slate-500 font-light text-xl leading-relaxed mb-16">
              Our partners are industry veterans who bring a hyper-focused mandate to every engagement: maximize enterprise value through strategic clarity.
            </p>

            <button className="flex items-center gap-4 text-[#0b1215] font-bold uppercase tracking-widest text-sm group pb-2 border-b-2 border-[#0b1215] hover:border-[#20A69A] transition-colors">
              Read Our History 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic3About;
