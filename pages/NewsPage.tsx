
import React from 'react';
import { ArrowUpRight, Search, Clock, ChevronRight, Share2, Filter, TrendingUp, BookOpen, User, Activity } from 'lucide-react';

const ARTICLES = [
    { id: 'SIG_901', date: 'OCT 24, 2024', title: 'The Neural Shift: AI Dismantling Brand Logic.', category: 'INTELLIGENCE', readTime: '5 MIN', author: 'Alex V.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200' },
    { id: 'SIG_882', date: 'NOV 02, 2024', title: 'Decentralized Corporate Architecture Rise.', category: 'OPERATIONS', readTime: '8 MIN', author: 'Sia V.', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200' },
    { id: 'SIG_765', date: 'NOV 15, 2024', title: 'Data Alchemy: Analytics to Pure Strategy.', category: 'STRATEGY', readTime: '4 MIN', author: 'Marcus R.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200' },
];

const NewsPage: React.FC = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black font-sans pt-32 pb-20">
            {/* 1. KINETIC HEADER */}
            <section className="px-6 mb-32">
                <div className="max-w-[1400px] mx-auto border-b border-white/10 pb-20">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-8">
                                <TrendingUp className="w-3 h-3 text-teal-400" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-teal-400">Signal Stream // LIVE</span>
                            </div>
                            <h1 className="text-7xl md:text-[12rem] font-bold font-[Syne] leading-[0.8] tracking-tighter uppercase mb-12">
                                INTEL <br /> <span className="text-stroke-dark hover:text-white transition-all duration-700">LEDGER.</span>
                            </h1>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-500 text-sm font-mono mb-4">INGESTION_RATE: 4.2 SIG/HR</p>
                            <div className="relative group w-80">
                                <input type="text" placeholder="QUERY_INTEL..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs focus:outline-none focus:border-teal-500 transition-all font-mono" />
                                <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED SIGNAL */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center group cursor-pointer">
                    <div className="lg:col-span-8 overflow-hidden rounded-[3.5rem] relative aspect-[16/9]">
                        <img src={ARTICLES[0].img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12">
                             <span className="bg-teal-500 text-black px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest">Editor's Pick</span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 space-y-10">
                        <div className="flex gap-4 font-mono text-[10px] text-slate-500 uppercase">
                            <span>{ARTICLES[0].date}</span>
                            <span>//</span>
                            <span>{ARTICLES[0].id}</span>
                        </div>
                        <h2 className="text-5xl font-bold font-[Syne] tracking-tighter leading-none group-hover:text-teal-400 transition-colors">
                            {ARTICLES[0].title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            Dismantling the core logic of market interaction through algorithmic branding and neural-network identity systems.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-teal-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest">{ARTICLES[0].author}</p>
                                <p className="text-[10px] text-slate-500 uppercase font-mono">Senior Architect</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION A: TRENDING FREQUENCIES */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto bg-teal-500/5 border border-teal-500/20 rounded-[3rem] p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <span className="text-teal-400 font-mono text-[10px] uppercase tracking-widest block mb-4">Signal Density</span>
                        <h3 className="text-3xl md:text-5xl font-bold font-[Syne] tracking-tighter uppercase mb-6">Trending<br/>Frequencies.</h3>
                        <p className="text-slate-400 text-sm font-light">The most active sectors of our intelligence grid over the last 72 hours.</p>
                    </div>
                    <div className="md:w-2/3 flex flex-wrap gap-4">
                        {['Neural Integration', 'Web3 Architectures', 'Algorithmic Pricing', 'Zero-Trust Operations', 'Cognitive Branding', 'Automated Workflows'].map((tag, i) => (
                            <div key={i} className="px-6 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 hover:bg-teal-500 hover:text-black transition-colors cursor-pointer group">
                                <Activity className="w-4 h-4 text-teal-500 group-hover:text-black" />
                                <span className="text-xs font-bold font-mono uppercase tracking-widest">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SIGNAL MARQUEE */}
            <div className="bg-white py-10 overflow-hidden mb-40 select-none">
                 <div className="flex whitespace-nowrap animate-marquee">
                     {[...Array(6)].map((_, i) => (
                         <div key={i} className="flex items-center gap-12 mx-12">
                             <span className="text-4xl font-bold font-[Syne] text-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity">BREAKING_SIGNAL_DETECTED</span>
                             <div className="w-4 h-4 rounded-full bg-teal-500"></div>
                             <span className="text-4xl font-bold font-[Syne] text-black uppercase tracking-tighter">NEW_MARKET_VOID_FOUND</span>
                             <div className="w-4 h-4 rounded-full bg-red-500"></div>
                         </div>
                     ))}
                 </div>
            </div>

            {/* 4. THE GRID FEED */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-center mb-20">
                         <h3 className="text-3xl font-bold font-[Syne] uppercase tracking-widest">Recent Ingestions</h3>
                         <div className="flex gap-4">
                             {['All', 'Strategy', 'Design', 'Tech'].map(cat => (
                                 <button key={cat} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">{cat}</button>
                             ))}
                         </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {ARTICLES.map((art, i) => (
                            <div key={i} className="group bg-[#0A0A0B] border border-white/5 rounded-[2.5rem] p-10 hover:border-teal-500/50 transition-all duration-700">
                                <div className="aspect-square rounded-3xl overflow-hidden mb-10 relative">
                                    <img src={art.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt="" />
                                    <div className="absolute top-6 left-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded text-[8px] font-mono border border-white/10 uppercase">{art.category}</div>
                                </div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-xs text-slate-600">{art.date}</span>
                                    <Share2 className="w-4 h-4 text-slate-600 hover:text-white cursor-pointer" />
                                </div>
                                <h4 className="text-2xl font-bold font-[Syne] leading-tight mb-8 group-hover:text-teal-400 transition-colors uppercase">{art.title}</h4>
                                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                                    ESTABLISH_SYNC <ChevronRight className="w-3 h-3 text-teal-400" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION B: UPCOMING TRANSMISSIONS (Events) */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                         <h3 className="text-3xl font-bold font-[Syne] uppercase tracking-widest mb-4">Scheduled Transmissions</h3>
                         <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Live Briefings & Webinars</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            { date: "NOV 28", time: "14:00 UTC", title: "The Post-Human Brand Logic", speaker: "Julian Thorne" },
                            { date: "DEC 05", time: "09:00 UTC", title: "Algorithmic Market Disruption", speaker: "Elena Rostova" }
                        ].map((event, i) => (
                            <div key={i} className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between hover:bg-white/10 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold font-[Syne] text-teal-400 mb-2">{event.date}</span>
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2"><Clock className="w-3 h-3"/> {event.time}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold font-[Syne] uppercase mb-3">{event.title}</h4>
                                    <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">Lead: {event.speaker}</p>
                                </div>
                                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-black group-hover:border-teal-500 transition-colors flex-shrink-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION C: AUDIO SIGNALS */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-5">
                         <h3 className="text-4xl md:text-5xl font-bold font-[Syne] tracking-tighter uppercase mb-6">Audio<br/>Telemetry.</h3>
                         <p className="text-slate-400 text-lg font-light mb-8">Deep-dive auditory analysis of the latest market shifts. Listen to our core architects deconstruct modern problems.</p>
                         <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-teal-500 hover:text-white transition-colors">View All Episodes</button>
                     </div>
                     <div className="lg:col-span-7 space-y-4">
                         {[
                             { ep: "EP. 42", title: "Death of the Funnel", dur: "45 MIN" },
                             { ep: "EP. 41", title: "Syntax of Strategy", dur: "38 MIN" },
                             { ep: "EP. 40", title: "The Efficiency Trap", dur: "52 MIN" }
                         ].map((ep, i) => (
                             <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-500/50 transition-colors cursor-pointer group">
                                 <div className="flex items-center gap-6">
                                     <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                                         <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-teal-500 group-hover:border-l-black border-b-4 border-b-transparent ml-1"></div>
                                     </div>
                                     <div>
                                         <span className="text-[10px] font-mono text-teal-400 mb-1 block">{ep.ep}</span>
                                         <h4 className="text-sm md:text-base font-bold font-[Syne] uppercase">{ep.title}</h4>
                                     </div>
                                 </div>
                                 <span className="text-[10px] font-mono text-slate-500">{ep.dur}</span>
                             </div>
                         ))}
                     </div>
                </div>
            </section>

            {/* 5. THE ARCHIVE (TECHNICAL TABLE) */}
            <section className="px-6 py-40 bg-white text-slate-900 rounded-[5rem]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20">
                         <h2 className="text-6xl font-bold font-[Syne] tracking-tighter uppercase mb-4">Signal Archive.</h2>
                         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Records: 4,029</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-slate-900 text-left">
                                    <th className="py-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">ID_REF</th>
                                    <th className="py-6 text-[10px] font-bold uppercase tracking-widest">TITLE</th>
                                    <th className="py-6 text-[10px] font-bold uppercase tracking-widest text-center">CATEGORY</th>
                                    <th className="py-6 text-[10px] font-bold uppercase tracking-widest text-right">SYNC_DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 'LOG_201', title: 'Global Supply Chain Neural Optimization', cat: 'TECH', date: '2024.08.12' },
                                    { id: 'LOG_195', title: 'The Fall of Static Visual Identities', cat: 'DESIGN', date: '2024.07.01' },
                                    { id: 'LOG_188', title: 'Strategic Sovereign Wealth Redesign', cat: 'STRATEGY', date: '2024.06.24' },
                                    { id: 'LOG_172', title: 'Dismantling Web2 Governance Models', cat: 'OPS', date: '2024.05.15' }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer">
                                        <td className="py-8 font-mono text-xs text-slate-400 group-hover:text-teal-600 transition-colors">{row.id}</td>
                                        <td className="py-8 font-bold text-lg font-[Syne] uppercase">{row.title}</td>
                                        <td className="py-8 text-center"><span className="px-4 py-1 rounded-full bg-slate-100 text-[8px] font-bold font-mono">{row.cat}</span></td>
                                        <td className="py-8 text-right font-mono text-xs">{row.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* NEW SECTION D: SUBSCRIBE CTA */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto bg-teal-500 text-black rounded-[4rem] p-12 md:p-24 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 block">Direct Access</span>
                    <h2 className="text-5xl md:text-7xl font-bold font-[Syne] tracking-tighter uppercase mb-8">Ingest the<br/>Ledger.</h2>
                    <p className="text-black/70 max-w-lg mx-auto mb-12 font-medium">Receive our unfiltered logic streams and strategy protocols directly in your inbox every zero-day.</p>
                    <div className="max-w-md mx-auto relative">
                        <input type="email" placeholder="ENTER_EMAIL_ADDRESS..." className="w-full bg-black/10 border border-black/20 text-black placeholder:text-black/50 rounded-full px-8 py-5 text-xs font-mono focus:outline-none focus:border-black transition-colors" />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Subscribe</button>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2025 BEXON — INTEL DIVISION</footer>
            <style>{`.text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.15); color: transparent; }`}</style>
        </div>
    );
};

export default NewsPage;
