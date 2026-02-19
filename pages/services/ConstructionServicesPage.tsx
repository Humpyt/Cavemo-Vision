
import React from 'react';
import { ArrowLeft, HardHat, Building, Truck, Ruler, Shield, Zap, Target, Construction, ArrowRight } from 'lucide-react';

interface ConstructionServicesPageProps {
    onBack: () => void;
}

const ConstructionServicesPage: React.FC<ConstructionServicesPageProps> = ({ onBack }) => {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen selection:bg-yellow-500 selection:text-black font-sans">
            {/* HERO */}
            <section className="relative pt-48 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-500 hover:text-yellow-500 transition-colors uppercase font-mono text-[10px] tracking-widest mb-12">
                        <ArrowLeft className="w-4 h-4" /> DISCONNECT_SITE
                    </button>
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-12 bg-yellow-500"></div>
                                <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm">Industrial Scale</span>
                            </div>
                            <h1 className="text-7xl md:text-[9rem] font-bold font-[Manrope] leading-[0.8] tracking-tighter mb-12">
                                STRUCTURAL <br /> <span className="text-transparent text-stroke-white">INTEGRITY.</span>
                            </h1>
                        </div>
                        <div className="bg-[#1A1A1A] p-10 border-l-4 border-yellow-500">
                             <p className="text-slate-400 text-lg leading-relaxed font-light">
                                Engineering the backbone of modern civilization. From deep-pile foundations to skyline-defining steel, we deliver assets that endure digital epochs.
                             </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECS */}
            <section className="py-32 px-6">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Building, title: 'General Contracting', stat: 'LOD 400', desc: 'Turnkey site management with 100% safety compliance.' },
                        { icon: Construction, title: 'Infrastructure', stat: '99.9% Up', desc: 'Civil engineering for roads, bridges and planetary nodes.' },
                        { icon: Ruler, title: 'BIM & Planning', stat: '4D Sync', desc: 'Virtual prototyping to eliminate clashes before breaking ground.' },
                        { icon: Shield, title: 'Safety Audit', stat: 'Tier 1', desc: 'Exceeding ISO 9001 standards for zero-incidence operation.' }
                    ].map((s, i) => (
                        <div key={i} className="bg-[#1A1A1A] border border-white/5 p-12 rounded-3xl hover:border-yellow-500/50 transition-all group">
                             <s.icon className="w-10 h-10 text-yellow-500 mb-12 group-hover:scale-110 transition-transform" />
                             <span className="block font-mono text-[10px] text-slate-600 mb-2 uppercase tracking-widest">{s.stat}</span>
                             <h3 className="text-2xl font-bold font-[Manrope] mb-4">{s.title}</h3>
                             <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MASSIVE CTA */}
            <section className="py-40 px-6 bg-white text-black">
                 <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
                      <h2 className="text-6xl md:text-9xl font-bold font-[Manrope] tracking-tighter leading-none uppercase">BREAK <br /> GROUND.</h2>
                      <div className="space-y-12">
                           <p className="text-2xl text-slate-600 leading-relaxed font-light">"Construction is not about concrete. It is about taking a sketch and turning it into a permanent landmark."</p>
                           <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4">Start Construction <ArrowRight className="w-6 h-6" /></button>
                      </div>
                 </div>
            </section>

            <footer className="py-20 text-center bg-[#050505] text-slate-800 font-bold uppercase tracking-[0.5em] text-[10px]">© 2025 BEXON — BUILD DIVISION</footer>
            <style>{`.text-stroke-white { -webkit-text-stroke: 1px white; color: transparent; }`}</style>
        </div>
    );
};

export default ConstructionServicesPage;
