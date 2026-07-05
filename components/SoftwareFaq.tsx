import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, TerminalSquare } from 'lucide-react';

const SoftwareFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#020202] py-32 px-4 border-t border-white/5 relative overflow-hidden">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="text-center mb-20 px-4">
                <div className="inline-block border border-white/10 px-3 py-1 mb-8 bg-white/5 backdrop-blur-sm">
                    <span className="text-purple-400 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                        Query / Knowledge Base
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 font-[Syne]">
                    System <br className="hidden md:block" /> Intelligence
                </h2>
                <p className="text-white/40 font-mono text-sm max-w-lg mx-auto">
                    A repository of operational guidelines, architecture decisions, and interaction protocols.
                </p>
            </div>

            <div className="space-y-4">
                {FAQS.map((item, index) => (
                    <div 
                        key={index} 
                        className={`border transition-all duration-300 relative overflow-hidden ${
                            openIndex === index ? 'border-purple-500/50 bg-white/5' : 'border-white/10 bg-[#050505] hover:border-white/20'
                        }`}
                    >
                        {openIndex === index && (
                             <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-500"></div>
                        )}
                        <button
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="text-lg font-bold text-white pr-8 font-mono tracking-tight">{item.question}</span>
                            <div className={`w-8 h-8 border flex shrink-0 items-center justify-center transition-transform duration-300 ${
                                openIndex === index ? 'border-purple-500 text-purple-400 rotate-180 bg-purple-500/10' : 'border-white/20 text-white/40 bg-black/50'
                            }`}>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </button>
                        
                        <div 
                            className={`transition-all duration-500 ease-in-out ${
                                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-6 md:p-8 pt-0 text-white/50 leading-relaxed font-mono text-sm">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 border border-white/10 bg-[#050505] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-white mb-2 font-mono">Unresolved Exceptions?</h3>
                   <p className="text-white/40 font-mono text-sm">Open a direct com-link with our lead architects.</p>
                </div>
                <button className="relative z-10 flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all shrink-0">
                    <TerminalSquare className="w-4 h-4" />
                    Initialize Link
                </button>
            </div>

        </div>
    </section>
  );
};

export default SoftwareFaq;
