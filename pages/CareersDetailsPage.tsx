
import React from 'react';
import { ArrowLeft, Target, Cpu, Zap, Activity, ShieldCheck, Mail, Send, Command, CheckCircle2 } from 'lucide-react';

interface CareersDetailsPageProps {
    onBack: () => void;
}

const CareersDetailsPage: React.FC<CareersDetailsPageProps> = ({ onBack }) => {
    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black">
            
            {/* 1. PROTOCOL HERO */}
            <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-32">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[140px]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                </div>

                <div className="relative z-10">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-teal-500 hover:text-black transition-all group mb-12"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Ledger
                    </button>

                    <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
                         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400">ACTIVE_SPEC: ROL_402</span>
                    </div>

                    <h1 className="text-6xl md:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12">
                        NEURAL <br /> <span className="text-stroke-dark hover:text-white transition-all duration-700">STRATEGIST.</span>
                    </h1>

                    <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-12">
                        <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Location</span>
                            <span className="text-xl font-bold">New York / Remote</span>
                        </div>
                        <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                        <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Level</span>
                            <span className="text-xl font-bold">Senior (L4)</span>
                        </div>
                        <div className="w-px h-10 bg-white/10 hidden md:block"></div>
                        <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Unit</span>
                            <span className="text-xl font-bold">Logic & Strategy</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SPEC SHEET */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-20">
                        
                        {/* Left: Manifest */}
                        <div className="lg:col-span-7 space-y-20">
                            <div>
                                <h3 className="text-3xl font-bold font-[Syne] mb-8 uppercase tracking-tighter">THE OBJECTIVE</h3>
                                <p className="text-slate-500 text-xl leading-relaxed font-light">
                                    As a Neural Strategist at Bexon, you will be responsible for translating complex market data into actionable brand architecture. You will work at the interface of human psychology and algorithmic efficiency.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold font-[Syne] mb-8 uppercase tracking-tighter">CORE PROTOCOLS</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Develop data-driven brand narratives for Tier-1 enterprise clients.",
                                        "Integrate LLMs into strategic auditing processes.",
                                        "Lead high-stakes 'War Room' sessions with C-suite partners.",
                                        "Define technical KPIs for internal and external execution units.",
                                        "Dismantle legacy systems and rebuild for digital flux."
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-teal-500 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                                            <span className="text-sm font-medium text-slate-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Sidebar Stats */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-32 space-y-6">
                                <div className="bg-[#050505] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
                                     <h4 className="text-xl font-bold font-[Syne] mb-8 uppercase tracking-widest text-teal-400">Environment Stats</h4>
                                     <div className="space-y-6">
                                        {[
                                            { label: 'Autonomy Level', val: 'MAX' },
                                            { label: 'Neural Load', val: 'High' },
                                            { label: 'Global Sync', val: '24/7' },
                                            { label: 'Tech Stack', val: 'Proprietary' }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                                <span className="font-mono text-sm">{stat.val}</span>
                                            </div>
                                        ))}
                                     </div>
                                </div>

                                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center">
                                    <Activity className="w-10 h-10 text-slate-900 mb-6" />
                                    <h4 className="text-xl font-bold font-[Syne] mb-2">APPLY TO UNIT</h4>
                                    <p className="text-slate-400 text-sm mb-8">We respond within 48 hours of initialization.</p>
                                    <button className="w-full bg-slate-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-500 transition-all shadow-xl">
                                        Initialize Protocol
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. APPLICATION FORM */}
            <section className="py-40 bg-white text-slate-900 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none mb-8">SUBMIT DNA.</h2>
                        <p className="text-slate-500 text-xl font-light">Prepare your records for ingestion into our recruitment ledger.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-teal-500 transition-colors" />
                            <input type="email" placeholder="Signal / Email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-teal-500 transition-colors" />
                        </div>
                        <input type="text" placeholder="Link to Portfolio / Ledger" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-teal-500 transition-colors" />
                        <textarea placeholder="The Anomaly Statement (Why you?)" rows={6} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-teal-500 transition-colors resize-none"></textarea>
                        
                        <div className="flex justify-center pt-8">
                             <button type="submit" className="bg-slate-900 text-white px-16 py-6 rounded-full font-bold text-xl flex items-center gap-4 hover:bg-teal-600 transition-all shadow-2xl hover:scale-105 active:scale-95 group">
                                Upload Records <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <footer className="py-20 px-6 bg-[#050505] text-center border-t border-white/5">
                <p className="text-slate-800 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — RECRUITMENT UNIT</p>
            </footer>

        </div>
    );
};

export default CareersDetailsPage;
