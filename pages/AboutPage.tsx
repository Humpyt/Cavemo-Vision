
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap, Globe, Users, Trophy, Target, Sparkles, Fingerprint, Eye, Command, Plus } from 'lucide-react';

interface AboutPageProps {
    onHomeClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onHomeClick }) => {
    const [activePhilosophy, setActivePhilosophy] = useState(0);

    const PHILOSOPHIES = [
        { title: "RADICAL CANDOR", desc: "We believe growth happens at the intersection of uncomfortable truths and creative bravery.", icon: Zap },
        { title: "NEURAL LOGIC", desc: "Our strategies are built on a framework of data-driven intuition and high-speed execution.", icon: Fingerprint },
        { title: "GLOBAL SYNC", desc: "Operating without borders, we source talent and inspiration from every digital pocket.", icon: Globe },
        { title: "BEYOND KPI", desc: "Numbers are the map, but human resonance is the destination. We build for emotion.", icon: Sparkles }
    ];

    const MILESTONES = [
        { year: '2010', title: 'The Genesis', tag: 'Startup', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600' },
        { year: '2015', title: 'Silicon Shift', tag: 'Expansion', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600' },
        { year: '2020', title: 'AI Integration', tag: 'Pivot', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600' },
        { year: '2025', title: 'The Future', tag: 'Horizon', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600' },
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-teal-400 selection:text-black">
            
            {/* 1. CINEMATIC HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-teal-500/10 rounded-full blur-[160px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-700"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                </div>

                <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 animate-reveal">
                         <Command className="w-4 h-4 text-teal-400" />
                         <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-slate-400">Identity v4.2.0</span>
                    </div>

                    <h1 className="font-[Syne] text-[15vw] md:text-[12rem] font-bold leading-[0.75] tracking-tighter mb-12 flex flex-col items-center">
                        <span className="block text-stroke-dark hover:text-white transition-all duration-700">ABOUT</span>
                        <span className="block relative">
                            BEXON
                            <div className="absolute -right-12 top-0 w-24 h-24 bg-teal-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed animate-reveal delay-200">
                        We are a collective of digital architects and strategic rebels building the next generation of <span className="text-white italic underline underline-offset-8 decoration-teal-500">market leaders.</span>
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-px h-24 bg-gradient-to-b from-teal-500 to-transparent"></div>
                </div>
            </section>

            {/* 2. THE CORE LOGIC (DNA) */}
            <section className="py-40 px-6 relative bg-white rounded-t-[5rem] -mt-10 z-20 text-slate-900">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5">
                            <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">01 / OUR DNA</span>
                            <h2 className="text-5xl md:text-8xl font-bold font-[Syne] leading-[0.85] tracking-tighter mb-10">
                                ENGINE OF <br /> <span className="text-slate-200">RESULTS.</span>
                            </h2>
                            <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-md">
                                Strategy is nothing without execution. We provide the technical gravity to pull your ambitious vision into reality.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: 'Neural Accuracy', val: '99.8%' },
                                    { label: 'Strategic Depth', val: 'LOD 500' },
                                    { label: 'Execution Speed', val: '0.04s' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-teal-500 transition-colors cursor-default">
                                        <span className="font-bold text-slate-400 group-hover:text-white transition-colors uppercase text-xs tracking-widest">{item.label}</span>
                                        <span className="font-[Syne] text-2xl font-bold group-hover:text-white transition-colors">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative group">
                                <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Innovation" />
                                    <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
                                </div>
                                {/* Floating Metric Card */}
                                <div className="absolute -bottom-10 -left-10 bg-[#050505] p-10 rounded-[3rem] text-white shadow-2xl w-64 hidden md:block animate-float">
                                     <Trophy className="w-8 h-8 text-teal-400 mb-6" />
                                     <h4 className="text-4xl font-bold font-[Syne] mb-2">150+</h4>
                                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">International Awards <br /> for Excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HORIZONTAL NARRATIVE */}
            <section className="py-40 bg-white text-slate-900 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 mb-20">
                     <h2 className="text-5xl md:text-7xl font-bold font-[Syne] tracking-tighter">THE ASCENSION</h2>
                </div>
                
                <div className="flex gap-12 overflow-x-auto pb-20 px-6 no-scrollbar snap-x">
                    {MILESTONES.map((m, i) => (
                        <div key={i} className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center group">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative">
                                <img src={m.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="" />
                                <div className="absolute inset-0 bg-slate-900/20"></div>
                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                                    <span className="text-slate-900 font-bold text-sm tracking-widest uppercase">{m.tag}</span>
                                </div>
                            </div>
                            <h4 className="text-7xl font-bold font-[Syne] text-slate-100 mb-4 group-hover:text-teal-500 transition-colors duration-500">{m.year}</h4>
                            <h3 className="text-3xl font-bold mb-4">{m.title}</h3>
                            <div className="w-12 h-1 bg-slate-100 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                    <div className="flex-shrink-0 w-[20vw] flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border border-dashed border-slate-200 flex items-center justify-center text-slate-400 animate-rotate-slow">
                            <ArrowUpRight className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. MANIFESTO / PHILOSOPHY */}
            <section className="py-40 px-6 bg-[#0A0A0B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-teal-500/5 rounded-full blur-[140px]"></div>
                
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-teal-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">02 / MANIFESTO</span>
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-[0.85] mb-16">
                            GUIDED BY <br /> <span className="text-slate-700 italic">CONVICTION.</span>
                        </h2>

                        <div className="space-y-4">
                            {PHILOSOPHIES.map((p, i) => (
                                <div 
                                    key={i} 
                                    onMouseEnter={() => setActivePhilosophy(i)}
                                    className={`p-10 rounded-[3rem] cursor-pointer transition-all duration-500 border ${activePhilosophy === i ? 'bg-white text-slate-900 border-white scale-[1.02]' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'}`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-6">
                                            <p className="font-mono text-xs opacity-50">0{i+1}</p>
                                            <h3 className="text-3xl font-bold font-[Syne]">{p.title}</h3>
                                        </div>
                                        <p.icon className={`w-6 h-6 transition-all ${activePhilosophy === i ? 'text-teal-600 scale-125' : 'opacity-20'}`} />
                                    </div>
                                    <div className={`grid transition-all duration-500 ${activePhilosophy === i ? 'grid-rows-[1fr] mt-8 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <p className="overflow-hidden text-lg leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                         <div className="aspect-square rounded-full border border-white/10 p-20 relative animate-rotate-slow">
                             <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl"></div>
                             <div className="w-full h-full rounded-full border border-dashed border-teal-500/30 flex items-center justify-center">
                                 <Fingerprint className="w-32 h-32 text-teal-400 opacity-50 animate-pulse" />
                             </div>
                         </div>
                         {/* Floating Tooltips */}
                         <div className="absolute top-0 right-10 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 animate-float">
                             <span className="text-[10px] font-bold uppercase text-teal-400">Strategy Engine</span>
                         </div>
                         <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 animate-float-delayed">
                             <span className="text-[10px] font-bold uppercase text-purple-400">Design Logic</span>
                         </div>
                    </div>
                </div>
            </section>

            {/* 5. STUDIO PULSE (COLLAGE) */}
            <section className="py-40 bg-white text-slate-900">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-32">
                        <span className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">03 / ENVIRONMENT</span>
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none mb-8">
                            THE STUDIO <br /> <span className="text-slate-200">PULSE.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-12 gap-6 md:gap-10">
                        <div className="col-span-12 md:col-span-7 aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="" />
                            <div className="absolute inset-0 bg-teal-900/10 group-hover:opacity-0 transition-opacity"></div>
                        </div>
                        <div className="col-span-6 md:col-span-5 aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                        </div>
                        <div className="col-span-6 md:col-span-4 aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-8 aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" className="w-full h-full object-cover transition-all" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-40 px-6">
                <div className="max-w-[1400px] mx-auto bg-teal-600 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(20,184,166,0.3)]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:scale-110 transition-transform duration-[10s]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-transparent to-white/10"></div>
                    
                    <div className="relative z-10">
                        <span className="text-white/80 font-bold uppercase tracking-[0.5em] text-[10px] mb-12 block">ARE YOU READY?</span>
                        <h2 className="text-6xl md:text-[10rem] font-bold font-[Syne] text-white tracking-tighter leading-[0.75] mb-20">
                            BUILD THE <br /> <span className="italic">FUTURE.</span>
                        </h2>
                        <button 
                            onClick={onHomeClick}
                            className="bg-white text-teal-800 px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-slate-900 hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
                        >
                            Let's Talk <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Floating Tech Orbs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-6 border-t border-white/5 bg-[#050505]">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div>
                         <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-black font-bold">B</div>
                            <span className="font-extrabold text-2xl tracking-tighter">Bexon<span className="text-teal-500">.</span></span>
                         </div>
                         <p className="text-slate-600 text-sm font-bold uppercase tracking-widest">Digital Excellence Since 2010</p>
                    </div>
                    
                    <div className="flex gap-8">
                        {['Twitter', 'Instagram', 'LinkedIn', 'Behance'].map(s => (
                            <a key={s} href="#" className="text-slate-500 hover:text-teal-400 font-bold uppercase tracking-widest text-xs transition-colors">{s}</a>
                        ))}
                    </div>
                    
                    <p className="text-slate-700 text-xs uppercase tracking-[0.2em]">© 2025 Bexon Studio — All Rights Reserved</p>
                </div>
            </footer>

            <style>{`
                .text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.15); color: transparent; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-700 { animation-delay: 0.7s; }
            `}</style>

        </div>
    );
};

export default AboutPage;
