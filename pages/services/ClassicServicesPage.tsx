
import React from 'react';
/* Added missing ArrowUpRight icon to imports from lucide-react */
import { ArrowLeft, Target, ShieldCheck, TrendingUp, BarChart, Globe, Zap, CheckCircle2, ArrowRight, ArrowUpRight, Layers, Target as TargetIcon } from 'lucide-react';

interface ClassicServicesPageProps {
    onBack: () => void;
}

const ClassicServicesPage: React.FC<ClassicServicesPageProps> = ({ onBack }) => {
    return (
        <div className="bg-white text-slate-900 min-h-screen selection:bg-teal-100 selection:text-teal-900 font-sans pt-32 pb-20">
            {/* 1. CINEMATIC HERO */}
            <section className="relative px-6 mb-40 overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-slate-50 rounded-full blur-[140px] -z-10"></div>
                <div className="max-w-[1400px] mx-auto border-b border-slate-100 pb-24">
                    <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold text-[10px] tracking-widest mb-16">
                        <ArrowLeft className="w-4 h-4" /> Revert_to_Root
                    </button>
                    <div className="grid lg:grid-cols-2 gap-20 items-end">
                        <div className="animate-reveal">
                            <span className="text-teal-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Capability Unit // 01</span>
                            <h1 className="text-7xl md:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12 uppercase">
                                STRATEGIC <br /> <span className="text-slate-200">LOGIC.</span>
                            </h1>
                            <p className="text-slate-500 text-xl md:text-2xl leading-relaxed max-w-xl font-light">
                                High-fidelity business consulting for enterprises requiring absolute precision. We dismantle bottlenecks and engineer sustainable growth pathways.
                            </p>
                        </div>
                        <div className="flex gap-16 justify-end pb-4">
                             <div className="text-right">
                                 <h4 className="text-6xl font-bold font-[Syne] tracking-tighter">98%</h4>
                                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mt-2">Client Sync Rate</p>
                             </div>
                             <div className="text-right">
                                 <h4 className="text-6xl font-bold font-[Syne] tracking-tighter">2.5X</h4>
                                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mt-2">Avg Growth ROI</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE CAPABILITY GRID */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10">
                    {[
                        { icon: TargetIcon, title: 'Strategic Audits', desc: 'Comprehensive analysis of market positioning and internal operational efficiency.' },
                        { icon: ShieldCheck, title: 'Risk Governance', desc: 'Protecting your digital and physical assets with board-level integrity protocols.' },
                        { icon: TrendingUp, title: 'Market Ascension', desc: 'Data-driven roadmaps to dominate competitive sectors and scale globally.' }
                    ].map((s, i) => (
                        <div key={i} className="group bg-slate-50 p-12 rounded-[4rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-700">
                            <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center mb-12 shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all">
                                <s.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-[Syne] mb-6 uppercase tracking-tighter">{s.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-12 font-medium">{s.desc}</p>
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all cursor-pointer">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. METHODOLOGY (THE PULSE) */}
            <section className="py-40 px-6 bg-slate-950 text-white rounded-[5rem]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-teal-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">Our Process</span>
                            <h2 className="text-6xl md:text-8xl font-bold font-[Syne] tracking-tighter uppercase mb-12">THE <br /> SYNC.</h2>
                            <div className="space-y-12">
                                {[
                                    { id: '01', title: 'Deep Discovery', desc: 'Dismantling the current state to find hidden friction.' },
                                    { id: '02', title: 'Logic Mapping', desc: 'Architecting the blueprint for market dominance.' },
                                    { id: '03', title: 'Vertical Rise', desc: 'Executing at high velocity with total precision.' }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 group cursor-default">
                                        <span className="font-mono text-xs text-teal-500 font-bold">{step.id} //</span>
                                        <div>
                                            <h4 className="text-2xl font-bold font-[Syne] uppercase mb-2 group-hover:text-teal-400 transition-colors">{step.title}</h4>
                                            <p className="text-slate-500 text-sm max-w-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                             <div className="aspect-square rounded-[4rem] overflow-hidden group">
                                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="" />
                                 <div className="absolute inset-0 bg-teal-900/20"></div>
                             </div>
                             <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3rem] text-slate-900 shadow-2xl hidden md:block animate-float">
                                 <Layers className="w-10 h-10 text-teal-600 mb-6" />
                                 <h4 className="text-2xl font-bold font-[Syne] uppercase">Integrated <br /> Systems.</h4>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FINAL CALL */}
            <section className="py-40 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl md:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.75] mb-20 uppercase">
                        READY TO <br /> <span className="text-slate-100">SCALE?</span>
                    </h2>
                    <button className="bg-slate-900 text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-teal-600 transition-all shadow-2xl group">
                         Establish Sync <ArrowUpRight className="w-8 h-8 inline-block ml-4 group-hover:rotate-45 transition-transform" />
                    </button>
                </div>
            </section>

            <footer className="py-20 text-center border-t border-slate-100 text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px]">© 2025 BEXON — STRATEGIC UNIT</footer>
        </div>
    );
};

export default ClassicServicesPage;
