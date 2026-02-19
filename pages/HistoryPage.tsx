
import React, { useState } from 'react';
import { ArrowUpRight, History, Calendar, Award, Globe, Rocket, Landmark, FileText, ChevronRight } from 'lucide-react';

interface HistoryPageProps {
    onHomeClick: () => void;
}

const ERAS = [
    {
        id: "ERA_01",
        year: "2010 — 2014",
        title: "THE FOUNDATION",
        subtitle: "Genesis in the Garage",
        desc: "Started with a desk and a vision to dismantle traditional consulting models. We focused on pure data-logic before AI was a buzzword.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
        milestones: ["First Enterprise Client", "Neural-Logic Paper Published", "Global Sync Protocol Beta"]
    },
    {
        id: "ERA_02",
        year: "2015 — 2019",
        title: "GLOBAL ASCENSION",
        subtitle: "Scaling the Architecture",
        desc: "Expanding into 12 global markets. Bexon became the invisible architect for Fortune 500 digital transformations.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
        milestones: ["APAC Headquarters Opened", "300+ Staff Reached", "Innovation Lab v1.0 Launch"]
    },
    {
        id: "ERA_03",
        year: "2020 — 2025",
        title: "THE INTELLIGENCE AGE",
        subtitle: "Merging Reality with Logic",
        desc: "Integrating proprietary LLMs and generative systems into the core of brand strategy. We aren't just consultants; we are engineers.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
        milestones: ["AI-First Strategy Rollout", "Carbon-Neutral Operations", "The Sovereignty Protocol"]
    }
];

const HistoryPage: React.FC<HistoryPageProps> = ({ onHomeClick }) => {
    const [activeEra, setActiveEra] = useState(0);

    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black font-sans">
            
            {/* 1. CHRONOS HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-500/10 via-transparent to-transparent opacity-40"></div>
                         {/* Large Floating Year Decors */}
                         <div className="absolute top-[20%] left-[10%] text-[20vw] font-bold text-white/5 font-[Syne] select-none pointer-events-none animate-pulse">2010</div>
                         <div className="absolute bottom-[20%] right-[10%] text-[20vw] font-bold text-white/5 font-[Syne] select-none pointer-events-none animate-pulse delay-1000">2025</div>
                    </div>
                </div>

                <div className="relative z-10 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 animate-reveal">
                        <History className="w-4 h-4 text-teal-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.6em] text-slate-500">The Continuity Archive</span>
                    </div>

                    <h1 className="text-6xl md:text-[11rem] font-bold font-[Syne] leading-[0.85] tracking-tighter mb-12 flex flex-col">
                        <span className="block opacity-20">RECORDS OF</span>
                        <span className="block relative group cursor-default">
                             EXCELLENCE.
                             <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-[80%] bg-teal-500 hidden md:block"></div>
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed animate-reveal delay-200">
                        A retrospective of the <span className="text-white italic underline underline-offset-8 decoration-teal-500">strategic decisions</span> and technological leaps that defined the last 15 years of innovation.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Scroll to Begin</span>
                    <div className="w-px h-24 bg-gradient-to-b from-teal-500 to-transparent"></div>
                </div>
            </section>

            {/* 2. THE CONTINUITY LINE (ERA REVEALS) */}
            <section className="relative pb-40">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/10 border-l border-dashed border-white/20 hidden lg:block"></div>
                
                {ERAS.map((era, idx) => (
                    <div key={idx} className="relative mb-32 md:mb-60 px-6 max-w-[1400px] mx-auto group">
                        <div className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                            
                            {/* Visual Side */}
                            <div className={`lg:col-span-6 relative ${idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                                <div className="aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                                    <img src={era.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="" />
                                    <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
                                    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                                        <span className="text-white font-mono text-sm tracking-widest">{era.year}</span>
                                    </div>
                                </div>
                                {/* Floating Decade Badge */}
                                <div className={`absolute -bottom-8 ${idx % 2 === 0 ? '-right-8' : '-left-8'} bg-teal-500 p-8 rounded-[2.5rem] text-black shadow-2xl hidden md:block group-hover:scale-110 transition-transform duration-500`}>
                                     <Rocket className="w-8 h-8 mb-4" />
                                     <h4 className="text-2xl font-bold font-[Syne] uppercase tracking-tighter">{era.id}</h4>
                                </div>
                            </div>

                            {/* Center Point (The Year Node) */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border-2 border-white/20 rounded-full hidden lg:flex items-center justify-center z-10 transition-colors group-hover:border-teal-500">
                                <div className="w-3 h-3 bg-teal-500 rounded-full group-hover:scale-[2.5] transition-transform duration-500"></div>
                            </div>

                            {/* Content Side */}
                            <div className={`lg:col-span-5 ${idx % 2 === 0 ? 'order-2 ml-auto' : 'order-2 lg:order-1 mr-auto'} text-left`}>
                                <span className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">{era.subtitle}</span>
                                <h2 className="text-5xl md:text-7xl font-bold font-[Syne] leading-none mb-10 tracking-tighter">
                                    {era.title}
                                </h2>
                                <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light">
                                    {era.desc}
                                </p>
                                
                                <div className="space-y-4">
                                    {era.milestones.map((ms, i) => (
                                        <div key={i} className="flex items-center gap-4 group/item cursor-default">
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover/item:bg-teal-500 transition-colors"></div>
                                            <span className="text-slate-400 font-bold text-sm group-hover/item:text-white transition-colors">{ms}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </section>

            {/* 3. FOUNDERS' ARCHIVE (THE LEDGER) */}
            <section className="py-40 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-5">
                             <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                                <Landmark className="w-4 h-4" />
                                THE ARCHIVE // CLASSIFIED
                            </div>
                            <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none mb-12">
                                THE <br /> <span className="text-slate-200">FOUNDERS'</span> <br /> DESK.
                            </h2>
                            <p className="text-slate-500 text-xl leading-relaxed mb-12 italic">
                                "We set out to build an agency that didn't behave like an agency. We wanted to build a refinery—somewhere raw talent is distilled into pure strategic outcome."
                            </p>
                            <button className="flex items-center gap-4 py-4 px-8 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-teal-600 transition-all shadow-xl">
                                View Official Records <FileText className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-2 gap-8">
                            <div className="space-y-8 pt-20">
                                <div className="aspect-square bg-slate-50 rounded-3xl p-1 shadow-2xl relative overflow-hidden group rotate-2">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" alt="" />
                                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[8px] text-white font-mono uppercase">CEO_ARCHIVE_2010</div>
                                </div>
                                <div className="p-10 bg-teal-500 rounded-[3rem] text-black">
                                    <Award className="w-10 h-10 mb-6" />
                                    <h4 className="text-2xl font-bold font-[Syne] mb-2 uppercase">15+ Years</h4>
                                    <p className="text-black/60 text-sm font-bold uppercase tracking-widest">Of Unbroken Excellence.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl -rotate-2">
                                    <Globe className="w-10 h-10 mb-6 text-teal-400" />
                                    <h4 className="text-2xl font-bold font-[Syne] mb-2 uppercase">Global Reach</h4>
                                    <p className="text-slate-400 text-sm">Established in 45 hubs across 5 continents.</p>
                                </div>
                                <div className="aspect-[3/4] bg-slate-50 rounded-3xl p-1 shadow-2xl relative overflow-hidden group">
                                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt="" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[8px] text-black font-mono uppercase">BOARD_SYNC_2016</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE FUTURE LEDGER (CTA) */}
            <section className="py-40 bg-white px-6">
                <div className="max-w-[1400px] mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-teal-500/5 -skew-x-12 translate-x-1/2"></div>
                    
                    <div className="relative z-10">
                        <span className="text-teal-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-12 block">THE NEXT CHAPTER</span>
                        <h2 className="text-6xl md:text-[10rem] font-bold font-[Syne] text-white tracking-tighter leading-[0.75] mb-20">
                            WRITE THE <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">FUTURE.</span>
                        </h2>
                        <button 
                            onClick={onHomeClick}
                            className="bg-white text-slate-900 px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-teal-500 hover:text-black transition-all shadow-2xl hover:scale-105"
                        >
                            Become a Partner <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 border-t border-slate-100 bg-white text-slate-900 text-center">
                <div className="flex justify-center gap-12 mb-12">
                    {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(s => (
                        <a key={s} href="#" className="text-slate-400 hover:text-teal-600 font-bold uppercase tracking-widest text-[10px] transition-colors">{s}</a>
                    ))}
                </div>
                <p className="text-slate-300 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — HISTORY IN THE MAKING</p>
            </footer>

            <style>{`
                .text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.1); color: transparent; }
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>

        </div>
    );
};

export default HistoryPage;
