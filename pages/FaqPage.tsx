
import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, Search, Terminal, Code, Shield, Target, ArrowUpRight, Zap, Info } from 'lucide-react';

const CATEGORIES = [
    { id: 'CAT_01', name: 'Initialization', icon: Terminal, faqs: [
        { q: 'How do we initialize a new project protocol?', a: 'Synchronization begins with a deep-logic audit. You can trigger this via the "Let\'s Talk" uplink or direct manual submission via our secure portal.' },
        { q: 'What is the average synchronization timeline?', a: 'Standard enterprise protocols span 3-6 cycles (months), while Sprint deployments are locked to 14 days of high-intensity execution.' }
    ]},
    { id: 'CAT_02', name: 'Operational Tech', icon: Code, faqs: [
        { q: 'Does Bexon use proprietary AI frameworks?', a: 'Yes. Our StratOS neural models are developed in-house and are exclusive to Bexon partners, ensuring proprietary market advantages.' },
        { q: 'Can we integrate existing legacy data sets?', a: 'Bexon logic is tech-agnostic. We can bridge almost any legacy void into modern neural architecture without signal loss.' }
    ]},
    { id: 'CAT_03', name: 'Security & Integrity', icon: Shield, faqs: [
        { q: 'What is T-Level verification?', a: 'T-Level indicates the security tier of your data. We offer T-Level 1 (Maximum Integrity) as standard for all enterprise partners.' },
        { q: 'How is intellectual property handled?', a: 'All neural weightings and architectural blueprints are sovereign to the client upon protocol completion. We retain zero legacy access.' }
    ]}
];

const FaqPage: React.FC = () => {
    const [openIdx, setOpenIdx] = useState<string | null>('CAT_01-0');
    const [activeCat, setActiveCat] = useState('CAT_01');

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black font-sans pt-32">
            
            {/* 1. PROTOCOL HERO */}
            <section className="px-6 mb-40 relative">
                <div className="max-w-[1400px] mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-10">
                        <Zap className="w-3 h-3 text-teal-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400">Protocol Manual v9.0</span>
                    </div>
                    <h1 className="text-7xl md:text-[11rem] font-bold font-[Syne] tracking-tighter leading-[0.8] mb-16 uppercase">
                        FREQUENT <br /> <span className="text-stroke-dark hover:text-white transition-all duration-700">QUERIES.</span>
                    </h1>
                    <div className="relative max-w-3xl mx-auto group">
                         <input type="text" placeholder="QUERY_KNOWLEDGE_BASE..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-10 py-8 text-xl focus:outline-none focus:border-teal-500 transition-all font-[Syne] tracking-tighter" />
                         <Search className="absolute right-10 top-1/2 -translate-y-1/2 w-8 h-8 text-slate-500 group-focus-within:text-teal-500 transition-colors" />
                    </div>
                </div>
            </section>

            {/* 2. STATS STRIP */}
            <section className="px-6 mb-32">
                 <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                     {[
                         { label: 'Total Records', val: '4,029' },
                         { label: 'Uptime Logic', val: '100%' },
                         { label: 'Sync Velocity', val: '0.04s' },
                         { label: 'Secure Nodes', val: '45' }
                     ].map((s, i) => (
                         <div key={i} className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{s.label}</p>
                             <h4 className="text-4xl font-bold font-[Syne] tracking-tighter">{s.val}</h4>
                         </div>
                     ))}
                 </div>
            </section>

            {/* 3. INTERACTIVE MANUAL GRID */}
            <section className="px-6 pb-40">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
                    
                    {/* LEFT: CATEGORY SIDEBAR */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-4">
                        {CATEGORIES.map((cat) => (
                            <button 
                                key={cat.id} 
                                onClick={() => setActiveCat(cat.id)}
                                className={`w-full p-10 rounded-[3rem] flex items-center gap-8 transition-all duration-500 group text-left border ${activeCat === cat.id ? 'bg-white text-black border-white shadow-2xl scale-105' : 'bg-white/5 text-slate-400 border-white/5 hover:border-teal-500/50'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeCat === cat.id ? 'bg-slate-900 text-teal-400' : 'bg-black text-slate-600'}`}>
                                    <cat.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <span className="block font-mono text-[9px] uppercase mb-1 tracking-widest opacity-50">{cat.id}</span>
                                    <h3 className="text-2xl font-bold font-[Syne] uppercase leading-none">{cat.name}</h3>
                                </div>
                            </button>
                        ))}
                        
                        <div className="bg-teal-500 p-10 rounded-[3.5rem] text-black group cursor-pointer hover:bg-white transition-all duration-700">
                             <Zap className="w-10 h-10 mb-8" />
                             <h4 className="text-3xl font-bold font-[Syne] mb-4 uppercase leading-none">Instant <br /> Uplink.</h4>
                             <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">Connect to Human <ArrowUpRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    {/* RIGHT: ACCORDIONS */}
                    <div className="lg:col-span-8 space-y-12">
                        {CATEGORIES.filter(c => c.id === activeCat).map((cat) => (
                            <div key={cat.id} className="animate-fade-in space-y-6">
                                <div className="flex items-center gap-6 mb-12">
                                     <h4 className="text-5xl font-bold font-[Syne] uppercase tracking-tighter">{cat.name} Manual</h4>
                                     <div className="h-px flex-1 bg-white/10"></div>
                                </div>
                                {cat.faqs.map((f, i) => {
                                    const id = `${cat.id}-${i}`;
                                    const isOpen = openIdx === id;
                                    return (
                                        <div key={i} className={`rounded-[3.5rem] border transition-all duration-700 ${isOpen ? 'bg-white text-slate-900 border-white shadow-2xl' : 'bg-[#0A0A0B] border-white/5 text-white hover:border-white/10'}`}>
                                            <button onClick={() => setOpenIdx(isOpen ? null : id)} className="w-full px-12 py-12 flex justify-between items-center text-left">
                                                <span className="text-3xl font-bold font-[Syne] tracking-tight uppercase leading-snug">{f.q}</span>
                                                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-white/5 text-slate-600'}`}>
                                                    {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                                </div>
                                            </button>
                                            <div className={`px-12 overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className={`h-px w-full mb-10 ${isOpen ? 'bg-slate-100' : 'bg-white/5'}`}></div>
                                                <p className="text-xl leading-relaxed font-light opacity-80 max-w-2xl">{f.a}</p>
                                                <div className="mt-12 flex gap-4">
                                                     <button className="px-6 py-2 rounded-full border border-current text-[10px] font-bold uppercase tracking-widest">Was this helpful?</button>
                                                     <button className="px-6 py-2 rounded-full bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest">Found a bug?</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2025 BEXON — KNOWLEDGE OPS</footer>
            <style>{`.text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.15); color: transparent; }`}</style>
        </div>
    );
};

export default FaqPage;
