
import React, { useState } from 'react';
import { ArrowUpRight, Target, Dna, Compass, Zap, Shield, Microscope, Fingerprint, Activity, Globe, ArrowRight, Star } from 'lucide-react';

interface AboutPage2Props {
    onHomeClick: () => void;
}

const AboutPage2: React.FC<AboutPage2Props> = ({ onHomeClick }) => {
    const [hoveredLeader, setHoveredLeader] = useState<number | null>(null);

    const LEADERS = [
        { name: "Julian Thorne", role: "Chief Architect", quote: "We build for the void left by legacy systems.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200" },
        { name: "Sia Vance", role: "Logic Director", quote: "Efficiency is the only true currency of innovation.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" },
        { name: "Marcus Roe", role: "Strategy Lead", quote: "Disruption without data is just noise.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200" }
    ];

    const METRICS = [
        { label: "NEURAL SYNC", val: "99.4%", color: "text-teal-400" },
        { label: "UPTIME LOGIC", val: "100%", color: "text-purple-400" },
        { label: "MARKET CAP", val: "2.4B", color: "text-blue-400" },
        { label: "TALENT DENSITY", val: "LOD 5", color: "text-yellow-400" }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black font-sans">
            
            {/* SECTION 1: THE GLITCH HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-24 overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[180px]"></div>
                
                <div className="relative z-10 max-w-7xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-12 animate-reveal">
                        <Microscope className="w-4 h-4 text-teal-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">System Log // About v2.0.4</span>
                    </div>

                    <h1 className="text-[12vw] md:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-16">
                        <span className="block opacity-20">WE ARE THE</span>
                        <span className="block text-stroke-dark hover:text-white transition-all duration-700">INVISIBLE</span>
                        <span className="block relative">
                            ARCHITECTS.
                            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-[120%] bg-teal-500 hidden md:block animate-pulse"></div>
                        </span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                        <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-light max-w-xl">
                            Bexon is a strategic ledger of innovation. We do not just build brands; we engineer the logic that sustains them across digital epochs.
                        </p>
                        <div className="flex gap-8">
                             <div className="flex flex-col">
                                 <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">Latitude</span>
                                 <span className="font-mono text-sm text-teal-400">40.7128° N</span>
                             </div>
                             <div className="flex flex-col">
                                 <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2">Longitude</span>
                                 <span className="font-mono text-sm text-teal-400">74.0060° W</span>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE QUANTUM BENTO */}
            <section className="py-40 px-6 md:px-24 relative z-10">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {METRICS.map((m, i) => (
                        <div key={i} className="group bg-[#0A0A0B] border border-white/5 p-12 rounded-[2.5rem] hover:bg-white hover:text-black transition-all duration-700 hover:-translate-y-4">
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-xs opacity-50">0{i+1}</span>
                                <Activity className={`w-5 h-5 ${m.color} group-hover:text-black`} />
                            </div>
                            <h4 className="text-6xl font-bold font-[Syne] mb-4 tracking-tighter">{m.val}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100">{m.label}</p>
                        </div>
                    ))}
                    
                    <div className="md:col-span-2 md:row-span-1 bg-teal-500 rounded-[3rem] p-12 flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-4xl font-bold font-[Syne] text-black leading-none mb-8">GLOBAL <br /> DOMINANCE.</h3>
                        <div className="flex justify-between items-end relative z-10">
                             <p className="text-black/60 text-sm max-w-[200px]">Active operation clusters in 42+ strategic zones across 5 continents.</p>
                             <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                                 <ArrowRight className="w-5 h-5" />
                             </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-[#111] rounded-[3rem] p-1 shadow-2xl overflow-hidden relative group border border-white/5">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold font-[Syne] mb-4">NEURAL <br /> INFRASTRUCTURE</h3>
                            <div className="w-12 h-1 bg-teal-500 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE COUNCIL (ACCORDION) */}
            <section className="py-40 bg-white text-slate-900 rounded-[5rem] overflow-hidden relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 mb-24">
                    <span className="text-teal-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">02 / LEADERSHIP</span>
                    <h2 className="text-6xl md:text-9xl font-bold font-[Syne] tracking-tighter leading-none">THE COUNCIL.</h2>
                </div>

                <div className="flex flex-col md:flex-row h-[800px] md:h-[700px]">
                    {LEADERS.map((l, i) => (
                        <div 
                            key={i}
                            onMouseEnter={() => setHoveredLeader(i)}
                            onMouseLeave={() => setHoveredLeader(null)}
                            className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${hoveredLeader === i ? 'flex-[2.5]' : 'flex-[1] opacity-60 grayscale hover:opacity-100 hover:grayscale-0'}`}
                        >
                            <img src={l.img} className="absolute inset-0 w-full h-full object-cover" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                            
                            <div className={`absolute bottom-0 left-0 p-12 w-full transition-all duration-700 ${hoveredLeader === i ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h4 className="text-white text-4xl font-bold font-[Syne] mb-2">{l.name}</h4>
                                <p className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-6">{l.role}</p>
                                <p className="text-slate-200 text-lg italic font-light max-w-sm">"{l.quote}"</p>
                            </div>

                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hoveredLeader === i ? 'opacity-0' : 'opacity-100'}`}>
                                <h3 className="text-white text-4xl font-bold font-[Syne] uppercase tracking-[0.5em] md:-rotate-90 whitespace-nowrap opacity-30">
                                    {l.name.split(' ')[0]}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: THE BLUEPRINT TIMELINE */}
            <section className="py-40 px-6 md:px-24 bg-[#050505]">
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-white/10 border-l border-dashed border-white/20"></div>
                    
                    {[
                        { year: "2010", title: "Genesis Cluster", desc: "Initialization of primary research units in Brooklyn." },
                        { year: "2016", title: "Global Uplink", desc: "Expansion into EU and APAC markets with 24/7 logic support." },
                        { year: "2022", title: "Neural Leap", desc: "Integration of proprietary AI models into client lifecycle management." },
                        { year: "2025", title: "The Sovereign", desc: "Achieving total decentralized agency operations." }
                    ].map((step, i) => (
                        <div key={i} className={`relative flex items-center justify-between mb-32 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className="w-[42%] group">
                                <div className="p-10 bg-white/5 border border-white/5 rounded-3xl hover:bg-teal-500 hover:text-black transition-all duration-500">
                                    <h4 className="text-2xl font-bold font-[Syne] mb-4">{step.title}</h4>
                                    <p className="text-slate-400 group-hover:text-black text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                            
                            {/* Connector Node */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center z-10 group">
                                <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
                                <span className="absolute -top-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{step.year}</span>
                            </div>

                            <div className="w-[42%]"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: MANIFESTO GRID */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">03 / MANIFESTO</span>
                            <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-[0.85] mb-12">
                                LOGIC IS THE <br /> <span className="text-slate-200">ONLY TRUTH.</span>
                            </h2>
                            <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-md">
                                We believe the digital world is a ledger of choices. Every brand we build is a permanent record of excellence and strategic intent.
                            </p>
                            <button className="flex items-center gap-4 py-3 border-b-2 border-slate-900 text-slate-900 font-bold text-sm uppercase tracking-widest hover:text-teal-600 hover:border-teal-600 transition-all group">
                                Download Manifesto <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Fingerprint, label: "Unique DNA" },
                                { icon: Globe, label: "Open Sync" },
                                { icon: Target, label: "Pure Target" },
                                { icon: Shield, label: "Secure Ops" }
                            ].map((v, i) => (
                                <div key={i} className="aspect-square bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col justify-between hover:bg-slate-900 hover:text-white transition-all duration-700 group">
                                    <v.icon className="w-10 h-10 text-teal-600 group-hover:text-teal-400" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{v.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: THE PULSE MAP */}
            <section className="py-40 bg-[#050505] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-bold font-[Syne] tracking-tighter mb-20 opacity-20">GLOBAL OPERATIONS PULSE</h2>
                    
                    <div className="relative aspect-video w-full max-w-5xl mx-auto opacity-40">
                        {/* Dot Map Mock */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                        
                        {/* Pulse Nodes */}
                        {[
                            { t: '15%', l: '20%', label: 'New York' },
                            { t: '35%', l: '45%', label: 'London' },
                            { t: '20%', l: '75%', label: 'Tokyo' },
                            { t: '60%', l: '15%', label: 'San Francisco' },
                            { t: '50%', l: '80%', label: 'Sydney' }
                        ].map((node, i) => (
                            <div key={i} className="absolute group" style={{ top: node.t, left: node.l }}>
                                <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping absolute"></div>
                                <div className="w-3 h-3 bg-teal-500 rounded-full relative"></div>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white text-black px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                                    {node.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: FINAL CALL */}
            <section className="py-40 px-6">
                <div className="max-w-[1400px] mx-auto bg-white rounded-[4rem] p-12 md:p-32 text-center text-slate-900 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
                    <div className="relative z-10">
                        <span className="text-slate-400 font-bold uppercase tracking-[0.6em] text-[10px] mb-12 block">INITIALIZE PROTOCOL</span>
                        <h2 className="text-6xl md:text-[12rem] font-bold font-[Syne] tracking-tighter leading-[0.7] mb-20">
                            ENTER THE <br /> <span className="text-teal-500 italic">LEDGER.</span>
                        </h2>
                        <button 
                            onClick={onHomeClick}
                            className="bg-slate-900 text-white px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-teal-500 hover:text-black transition-all shadow-2xl hover:scale-105"
                        >
                            Let's Connect <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 bg-[#050505] text-center">
                <div className="flex justify-center gap-12 mb-12">
                    {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(s => (
                        <a key={s} href="#" className="text-slate-600 hover:text-teal-400 font-bold uppercase tracking-widest text-[10px] transition-colors">{s}</a>
                    ))}
                </div>
                <p className="text-slate-800 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — DESIGNED FOR THE VOID</p>
            </footer>

            <style>{`
                .text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.1); color: transparent; }
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>

        </div>
    );
};

export default AboutPage2;
