
import React from 'react';
import { Check, ArrowRight, Sparkles, HardHat } from 'lucide-react';
import { CONSTRUCTION_PRICING } from '../constants';

const ConstructionPricing: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-4 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
            <span className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Estimation
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 font-[Manrope] mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Costs</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                No hidden fees. Just solid structures and solid numbers. Choose the plan that fits your project scope.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {CONSTRUCTION_PRICING.map((plan, index) => (
                <div 
                    key={index}
                    className={`group relative flex flex-col justify-between transition-all duration-500 ${
                        plan.highlight 
                        ? 'md:-mt-8 md:-mb-8 z-10' 
                        : ''
                    }`}
                >
                    {/* The Card Container */}
                    <div className={`h-full relative rounded-[2.5rem] p-1 overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${
                        plan.highlight
                        ? 'bg-gradient-to-b from-yellow-500 via-slate-900 to-slate-900 shadow-2xl shadow-yellow-900/20'
                        : 'bg-white border border-slate-200 hover:border-yellow-300 shadow-xl'
                    }`}>
                        
                        {/* Inner Card Content */}
                        <div className={`h-full rounded-[2.3rem] p-8 md:p-10 flex flex-col relative overflow-hidden ${
                            plan.highlight ? 'bg-[#0B1121]' : 'bg-white'
                        }`}>
                             {/* Abstract Shapes for Highlight Card */}
                            {plan.highlight && (
                                <>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
                                </>
                            )}

                            {/* Header */}
                            <div className="flex justify-between items-start mb-8 relative">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                                    plan.highlight 
                                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-700 text-black shadow-lg shadow-yellow-500/30' 
                                    : 'bg-slate-50 text-slate-900 border border-slate-100'
                                }`}>
                                    <HardHat className="w-7 h-7" />
                                </div>
                                {plan.highlight && (
                                    <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" /> Popular
                                    </span>
                                )}
                            </div>

                            {/* Title & Price */}
                            <div className="mb-8 relative">
                                <h3 className={`text-2xl font-bold font-[Manrope] mb-3 ${
                                    plan.highlight ? 'text-white' : 'text-slate-900'
                                }`}>{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-6xl font-extrabold tracking-tighter ${
                                        plan.highlight ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-base font-bold uppercase tracking-wider ${
                                        plan.highlight ? 'text-slate-500' : 'text-slate-400'
                                    }`}>
                                        /START
                                    </span>
                                </div>
                            </div>

                            {/* Divider Visual */}
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-10 mb-10 text-slate-500"></div>

                            {/* Features */}
                            <ul className="space-y-5 mb-12 flex-grow relative">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group/item">
                                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                            plan.highlight 
                                            ? 'bg-yellow-500/20 text-yellow-400 group-hover/item:bg-yellow-500 group-hover/item:text-black' 
                                            : 'bg-slate-100 text-slate-400 group-hover/item:bg-slate-900 group-hover/item:text-white'
                                        }`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className={`text-sm font-medium transition-colors ${
                                            plan.highlight 
                                            ? 'text-slate-300 group-hover/item:text-white' 
                                            : 'text-slate-600 group-hover/item:text-slate-900'
                                        }`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <button className={`w-full py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 group/btn transition-all relative overflow-hidden ${
                                plan.highlight 
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40' 
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10'
                            }`}>
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Project <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionPricing;
