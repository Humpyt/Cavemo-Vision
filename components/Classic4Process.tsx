import React from 'react';

const PROCESS = [
  { num: 'I', title: 'Macro Diagnosis', desc: 'Assessing your operational metrics against global economic benchmarks.' },
  { num: 'II', title: 'Strategic Architecture', desc: 'Plotting a sustainable trajectory for growth and market capture.' },
  { num: 'III', title: 'Aggressive Execution', desc: 'Deploying the strategy with military precision and active management.' },
];

const Classic4Process: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] mb-24 text-center leading-none">
          The Execution <br /> Matrix.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
           {PROCESS.map((step, idx) => (
             <div key={idx} className="relative border-t-2 border-[#0b1215] pt-8 group">
                <div className="absolute top-0 right-0 w-16 h-2 bg-[#20A69A] -translate-y-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500"></div>
                <h3 className="text-[#20A69A] text-2xl font-[Syne] font-bold mb-6">{step.num}.</h3>
                <h4 className="text-3xl font-bold text-[#0b1215] mb-4">{step.title}</h4>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  {step.desc}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Classic4Process;
