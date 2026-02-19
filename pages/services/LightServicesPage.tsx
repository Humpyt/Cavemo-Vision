
import React from 'react';
import { ArrowLeft, Zap, Layers, Rocket, Monitor, Globe, Activity, ArrowUpRight } from 'lucide-react';

interface LightServicesPageProps {
    onBack: () => void;
}

const LightServicesPage: React.FC<LightServicesPageProps> = ({ onBack }) => {
    return (
        <div className="bg-white text-slate-900 min-h-screen selection:bg-teal-100 selection:text-teal-900 font-sans">
            {/* HERO */}
            <section className="relative pt-48 pb-24 px-6">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-teal-50/50 rounded-full blur-[140px] -z-10"></div>
                <div className="max-w-[1400px] mx-auto">
                    <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold text-[10px] tracking-widest mb-12">
                        <ArrowLeft className="w-4 h-4" /> Revert_Home
                    </button>
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full mb-8">
                             <Zap className="w-3 h-3 text-teal-600" />
                             <span className="text-[10px] font-bold uppercase text-teal-700">Rapid Intervention</span>
                        </div>
                        <h1 className="text-7xl md:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12 uppercase">
                            MINIMALIST <br /> <span className="text-slate-200">SCALING.</span>
                        </h1>
                        <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-light">
                            High-velocity strategic sprints for brands requiring immediate market impact and technical optimization.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICES CARDS */}
            <section className="py-32 px-6 bg-[#fcfcfc]">
                <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: 'Growth Sprints', desc: '14-day intensive audit and execution cycle for rapid bottleneck removal.' },
                        { icon: Monitor, title: 'Digital Flux', desc: 'Optimizing web ecosystems for 200% faster loading and higher conversion.' },
                        { icon: Rocket, title: 'Market Entry', desc: 'Bespoke identity systems designed for high-speed deployment in new zones.' }
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-teal-500 transition-all group">
                             <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-10 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                 <s.icon className="w-6 h-6" />
                             </div>
                             <h3 className="text-2xl font-bold font-[Syne] mb-6">{s.title}</h3>
                             <p className="text-slate-400 text-sm leading-relaxed mb-10">{s.desc}</p>
                             <div className="flex justify-end">
                                 <ArrowUpRight className="w-6 h-6 text-slate-200 group-hover:text-teal-500 transition-colors" />
                             </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <section className="py-40 px-6">
                 <div className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-32 flex flex-col md:flex-row items-center justify-between gap-12 text-white overflow-hidden relative group">
                      <div className="absolute inset-0 bg-noise opacity-10"></div>
                      <h2 className="text-5xl md:text-7xl font-bold font-[Syne] tracking-tighter leading-none relative z-10">READY FOR <br /> IMPACT?</h2>
                      <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-teal-500 hover:text-white transition-all relative z-10 shadow-2xl">Start Sprint</button>
                 </div>
            </section>

            <footer className="py-20 text-center border-t border-slate-100 text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px]">© 2025 BEXON — LIGHT UNIT</footer>
        </div>
    );
};

export default LightServicesPage;
