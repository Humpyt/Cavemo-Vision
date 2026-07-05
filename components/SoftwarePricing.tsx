import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Terminal, Shield, Workflow } from 'lucide-react';

const SoftwarePricing: React.FC = () => {
  return (
    <section className="bg-[#000000] py-32 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Hex Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDBMNjAgMTVWMzBMMzAgNDVMMCAzMFYxNUwzMCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,black_40%,transparent)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 px-4">
            <div className="inline-block border border-white/10 px-3 py-1 mb-8 bg-white/5 backdrop-blur-sm">
                <span className="text-teal-400 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <Terminal className="w-3 h-3" /> Execute / Billing
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6 font-[Syne]">
                Resource Allocation <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Tiers.</span>
            </h2>
            <p className="text-white/40 font-mono text-sm max-w-md mx-auto">
                Select your computational SLA. From local clusters to distributed global edge nodes.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 p-[1px]">
            {PRICING_PLANS.map((plan, idx) => (
                <div 
                    key={idx} 
                    className={`relative p-8 md:p-10 transition-colors duration-300 flex flex-col ${
                        plan.highlight 
                        ? 'bg-[#0a0a0a] border-t-2 border-t-teal-400' 
                        : 'bg-[#050505] hover:bg-[#080808]'
                    }`}
                >
                    {plan.highlight && (
                        <div className="absolute top-4 right-4">
                            <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] font-mono uppercase tracking-widest px-3 py-1 flex items-center gap-2">
                                <Workflow className="w-3 h-3" /> Priority Run
                            </span>
                        </div>
                    )}
                    
                    <div className="mb-8">
                        <h3 className={`text-2xl font-bold mb-2 font-mono tracking-tight ${plan.highlight ? 'text-teal-400' : 'text-white'}`}>{plan.name}</h3>
                        <p className={`text-xs font-mono mb-6 ${plan.highlight ? 'text-white/40' : 'text-white/30'}`}>{plan.description}</p>
                        <div className="flex items-baseline gap-1 font-mono">
                            <span className={`text-4xl font-bold tracking-tight text-white`}>{plan.price}</span>
                            {plan.price !== 'Custom' && <span className={`text-[10px] uppercase tracking-widest text-white/30`}>/cycle</span>}
                        </div>
                    </div>

                    <div className="space-y-4 mb-10 flex-grow font-mono text-sm">
                        {plan.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-3">
                                <Shield className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-teal-400' : 'text-white/20'}`} />
                                <span className={`text-white/60`}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button className={`w-full py-4 font-mono text-xs uppercase tracking-widest transition-all mt-auto ${
                        plan.highlight 
                        ? 'bg-teal-500 text-black hover:bg-teal-400' 
                        : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                    }`}>
                        {plan.price === 'Custom' ? 'Init Handshake' : 'Deploy Cluster'}
                    </button>
                    
                    {/* Corner accent */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwarePricing;
