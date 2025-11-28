import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="bg-[#050505] py-32 px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-24">
            <span className="inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 font-bold text-xs tracking-widest uppercase mb-6">
                Our Blueprint
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-[Syne]">
                How We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Growth.</span>
            </h2>
        </div>

        {/* The Circuit */}
        <div className="relative mt-20">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block"></div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 -translate-y-1/2 hidden lg:block opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
                {PROCESS_STEPS.map((step, index) => (
                    <div key={step.id} className={`group relative ${index % 2 === 0 ? 'lg:-mt-16' : 'lg:mt-16'}`}>
                        
                        {/* Connector Dot */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050505] border-2 border-white/20 rounded-full z-20 group-hover:border-teal-400 group-hover:scale-150 transition-all duration-300"
                             style={{ top: index % 2 === 0 ? 'calc(100% + 3rem)' : '-4rem' }}>
                            <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                        </div>

                        {/* Connector Line Vertical */}
                        <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-teal-500 transition-colors duration-500`}
                             style={{ 
                                 height: '4rem',
                                 top: index % 2 === 0 ? '100%' : 'auto',
                                 bottom: index % 2 === 0 ? 'auto' : '100%'
                             }}>
                        </div>

                        {/* Card */}
                        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 shadow-lg`}>
                                <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            
                            <div className="text-4xl font-bold text-white/10 absolute top-4 right-6 select-none font-[Syne]">
                                0{step.id}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                            <h4 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4">{step.subtitle}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;