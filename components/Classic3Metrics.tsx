import React from 'react';

const Classic3Metrics: React.FC = () => {
  return (
    <section className="bg-[#0b1215] py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,166,154,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-[#20A69A]"></div>
              <span className="text-[#20A69A] font-bold uppercase tracking-widest text-xs">By The Numbers</span>
            </div>
            <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-white leading-[0.9] mb-12">
              Performance <br />quantified.
            </h2>
            <p className="text-white/60 font-light text-xl leading-relaxed mb-12 max-w-lg">
              We leverage data-driven methodologies to ensure that every strategic action translates directly into measurable ROI.
            </p>
            <div className="flex items-center gap-4 text-white hover:text-[#20A69A] transition-colors cursor-pointer w-fit pb-2 border-b border-white hover:border-[#20A69A]">
               <span className="font-bold uppercase tracking-widest text-sm">Download Annual Report</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden p-px">
             {[
               { val: '$15B', label: 'Capital Managed' },
               { val: '240+', label: 'Global Mergers' },
               { val: '30%', label: 'Avg ROI Increase' },
               { val: '45', label: 'Countries Active' }
             ].map((stat, idx) => (
                <div key={idx} className="bg-[#0b1215] p-12 hover:bg-[#111c20] transition-colors duration-500">
                   <h3 className="text-5xl md:text-6xl font-[Syne] font-bold text-white mb-4 tracking-tighter">{stat.val}</h3>
                   <p className="text-[#20A69A] font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic3Metrics;
