
import React from 'react';
import { Check, Zap, Sparkles, Trophy, ArrowLeft, ShieldCheck, Cpu, Globe, ArrowRight, HelpCircle } from 'lucide-react';

interface PricingPageProps {
    onBack: () => void;
}

const PLANS = [
    { id: 'SPR_01', name: 'Sprint Logic', price: '15K', desc: 'Rapid bottleneck audit.', features: ['14-Day Intensity', 'Core Logic Audit', 'Tactical Blueprint'], icon: Zap, color: 'text-yellow-400' },
    { id: 'TRN_02', name: 'Transformation', price: '45K', desc: 'Holistic system overhaul.', features: ['90-Day Deployment', 'Neural Mapping', 'Operational Flux', 'Priority Support'], icon: Sparkles, color: 'text-teal-400', highlight: true },
    { id: 'ENT_03', name: 'Enterprise', price: 'CUSTOM', desc: 'Permanent strategic sync.', features: ['Unlimited Node Sync', 'Custom Neural Model', '24/7 War Room'], icon: Trophy, color: 'text-purple-400' },
];

const PricingPage: React.FC<PricingPageProps> = ({ onBack }) => {
    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black pt-32">
            
            <section className="px-6 mb-32 text-center">
                <div className="max-w-[1400px] mx-auto">
                    <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-600 hover:text-white transition-colors uppercase font-mono text-[10px] mb-12">
                        <ArrowLeft className="w-4 h-4" /> DISCONNECT_UPLINK
                    </button>
                    <h1 className="text-7xl md:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.8] mb-12 uppercase">
                        INVESTMENT <br /> <span className="text-teal-500 italic">LOGIC.</span>
                    </h1>
                    <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                        Precision-engineered investment models for high-velocity enterprises. We don't bill hours; we bill outcomes.
                    </p>
                </div>
            </section>

            {/* 1. TIER CARDS */}
            <section className="px-6 mb-40 relative z-10">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
                    {PLANS.map((plan, i) => (
                        <div key={i} className={`relative p-12 rounded-[4rem] border transition-all duration-700 flex flex-col group ${plan.highlight ? 'bg-white text-slate-900 border-white scale-105 shadow-[0_50px_100px_-20px_rgba(20,184,166,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                            <div className="mb-12">
                                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:rotate-12 ${plan.highlight ? 'bg-slate-900 text-white' : 'bg-white/5 text-teal-400'}`}>
                                    <plan.icon className="w-6 h-6" />
                                </div>
                                <span className="block font-mono text-[10px] uppercase opacity-40 mb-2">{plan.id}</span>
                                <h3 className="text-4xl font-bold font-[Syne] mb-4 uppercase">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-6xl font-bold font-[Syne] tracking-tighter">${plan.price}</span>
                                    {plan.price !== 'CUSTOM' && <span className="text-xs font-bold opacity-30">/START</span>}
                                </div>
                                <p className={`text-sm mb-10 leading-relaxed ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{plan.desc}</p>
                            </div>
                            
                            <ul className="space-y-4 mb-12 flex-grow">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-teal-500 text-white' : 'bg-white/10 text-teal-500'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all ${plan.highlight ? 'bg-slate-900 text-white hover:bg-teal-500' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}>Initialize Protocol</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. SPECIFICATION MATRIX */}
            <section className="py-40 bg-white text-slate-900 rounded-[5rem] overflow-hidden relative z-20 shadow-2xl">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-32">
                        <h2 className="text-6xl md:text-8xl font-bold font-[Syne] tracking-tighter uppercase mb-4">SPEC_MATRIX.</h2>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                             <HelpCircle className="w-3 h-3 text-teal-600" />
                             <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500">Cross-Unit Comparison</span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-slate-900">
                                    <th className="py-8 text-left text-xs font-bold uppercase tracking-widest text-slate-400">PARAMETER_UNIT</th>
                                    <th className="py-8 text-center text-xs font-bold uppercase tracking-widest">SPRINT</th>
                                    <th className="py-8 text-center text-xs font-bold uppercase tracking-widest text-teal-600">TRANSFORM</th>
                                    <th className="py-8 text-center text-xs font-bold uppercase tracking-widest">ENTERPRISE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: 'NEURAL ACCURACY', vals: ['92%', '99.8%', '100%'] },
                                    { label: 'STRATEGIC DEPTH', vals: ['TACTICAL', 'STRUCTURAL', 'PROPRIETARY'] },
                                    { label: 'UPTIME LOGIC', vals: ['9/5 EMAIL', '24/7 PRIORITY', 'EMBEDDED TEAM'] },
                                    { label: 'GLOBAL SCALING', vals: ['REGIONAL', 'PLANETARY', 'INTERSTELLAR'] }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="py-10 text-sm font-bold uppercase tracking-widest">{row.label}</td>
                                        {row.vals.map((v, j) => (
                                            <td key={j} className={`py-10 text-center font-mono text-sm ${j === 1 ? 'text-teal-600 font-bold' : 'text-slate-400'}`}>{v}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. CUSTOM DEPLOYMENT SECTION */}
            <section className="py-40 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-[#0A0A0B] border border-white/5 rounded-[4rem] p-12 md:p-24 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div>
                        <Cpu className="w-12 h-12 text-teal-400 mb-10 group-hover:rotate-180 transition-transform duration-1000" />
                        <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tighter leading-[0.9] mb-10 uppercase">
                            NEED <br /> <span className="text-slate-600">CUSTOM</span> <br /> LOGIC?
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 font-light">For entities requiring unique neural weighting or planetary infrastructure, we build bespoke strategic protocols.</p>
                        <button className="px-12 py-5 rounded-full border border-teal-500 text-teal-400 font-bold uppercase tracking-widest text-[10px] hover:bg-teal-500 hover:text-black transition-all">Draft Specification</button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         {[
                             { icon: Globe, label: "Global Sync" },
                             { icon: ShieldCheck, label: "T-Level Security" },
                             { icon: Zap, label: "Instant Sync" },
                             { icon: Sparkles, label: "Premium Output" }
                         ].map((item, i) => (
                             <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/10 transition-all">
                                 <item.icon className="w-6 h-6 text-teal-400" />
                                 <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2025 BEXON — FINANCIAL UNIT</footer>
        </div>
    );
};

export default PricingPage;
