import React from 'react';

const METRICS = [
  { value: '300+', label: 'Global Clients', suffix: '' },
  { value: '98', label: 'Retention Rate', suffix: '%' },
  { value: '4.2', label: 'Value Generated', suffix: 'B' },
  { value: '50', label: 'Market Experts', suffix: '+' },
];

const Classic2Metrics: React.FC = () => {
  return (
    <section className="bg-[#0b1215] py-32 px-4 md:px-8 lg:px-12 text-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-white/10 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#20A69A]"></div>
              <p className="text-[#20A69A] font-bold tracking-[0.2em] uppercase text-xs">Our Impact</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-[Syne] font-bold tracking-tighter leading-[0.95]">
              Measurable <br className="hidden md:block" />excellence.
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-sm font-light">
            We don't deal in hypotheticals. Our methodologies have consistently delivered quantifiable value across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center group px-4">
              <div className="flex items-baseline mb-4">
                <span className="text-5xl md:text-7xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500">
                  {metric.value}
                </span>
                <span className="text-2xl md:text-4xl text-[#20A69A] font-bold ml-1">{metric.suffix}</span>
              </div>
              <p className="text-white/40 font-semibold uppercase tracking-widest text-xs">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2Metrics;
