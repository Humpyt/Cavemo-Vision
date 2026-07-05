import React from 'react';

const Classic2About: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="relative mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-[Syne] font-bold tracking-tight text-[#0b1215] leading-[1.1] relative z-10">
                "Growth is not an accident. It is the result of engineered forces coming together flawlessly."
              </h2>
              <span className="absolute -top-16 -left-12 text-[12rem] text-slate-100 font-black font-serif opacity-50 z-0 select-none hidden sm:block">"</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 lg:gap-12 pl-4 border-l-[3px] border-[#20A69A]">
              <div className="flex items-center gap-5">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" 
                  alt="Arthur Pendelton" 
                  className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200 shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-[#0b1215] text-lg">Arthur Pendelton</h4>
                  <p className="text-[#20A69A] text-xs font-bold uppercase tracking-widest mt-1">Founding Partner</p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>

              <div>
                 {/* Simulate a signature via specialized font or SVG shape */}
                 <div className="opacity-40 invert mix-blend-difference pb-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Signature_of_John_Hancock.svg" className="w-32 h-auto object-contain" alt="Signature"/>
                 </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden h-[500px] lg:h-[700px] relative group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1500&auto=format&fit=crop" 
                alt="Corporate meeting" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
              />
              {/* Minimalist overlay detail */}
              <div className="absolute inset-0 border-[24px] border-white/5 mix-blend-overlay pointer-events-none rounded-[2rem]"></div>
              <div className="absolute inset-0 bg-[#0b1215]/5 group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-[1.5rem] shadow-2xl max-w-[220px] animate-fade-in-up border border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Since 2008</p>
                  <h4 className="font-[Syne] font-bold text-4xl text-[#0b1215] leading-none mb-2">15<span className="text-[#20A69A]">+</span></h4>
                  <p className="text-slate-600 text-sm font-medium">Years of corporate excellence and leadership.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic2About;
