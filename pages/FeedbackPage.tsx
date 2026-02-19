
import React from 'react';
import { ArrowLeft, Star, MessageSquare, Activity, Terminal, ChevronRight, Quote, Globe, ShieldCheck, PlayCircle } from 'lucide-react';

interface FeedbackPageProps {
    onBack: () => void;
}

const FEEDBACK = [
    { id: 'FB_001', author: 'Devon Lane', role: 'CEO, Nexus Corp', text: 'Bexon dismantled our brand and built a weapon for the 2030 market.', level: 'T-LEVEL 1', date: '2024.10.12', score: '5.0' },
    { id: 'FB_002', author: 'Sarah Jenning', role: 'COO, Aether Tech', text: 'Neural synchronization in their strategic models is unheard of.', level: 'T-LEVEL 2', date: '2024.11.05', score: '4.9' },
    { id: 'FB_003', author: 'Ralph Edwards', role: 'Head of Ops, Orbit', text: 'Operational flux dropped by 45% within two cycles of sync.', level: 'T-LEVEL 1', date: '2024.11.20', score: '5.0' },
];

const FeedbackPage: React.FC<FeedbackPageProps> = ({ onBack }) => {
    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black pt-32">
            
            {/* 1. CINEMATIC HERO */}
            <section className="px-6 mb-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-teal-500/5 rounded-full blur-[200px]"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-600 hover:text-white transition-colors uppercase font-mono text-[10px] mb-12">
                        <ArrowLeft className="w-4 h-4" /> REVERT_TO_BASE
                    </button>
                    <div className="grid lg:grid-cols-2 gap-24 items-end">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-10">
                                <Activity className="w-3 h-3 text-teal-400" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400">Signal Pulse: 99.8%</span>
                            </div>
                            <h1 className="text-7xl md:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.8] mb-12 uppercase">
                                THE <br /> <span className="text-teal-500 italic">SIGNALS.</span>
                            </h1>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-12 rounded-[3.5rem] backdrop-blur-xl relative group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                            <h4 className="text-6xl font-bold font-[Syne] mb-2 tracking-tighter">4.92</h4>
                            <div className="flex gap-1 mb-4">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-teal-400 fill-teal-400" />)}
                            </div>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Aggregate Verification Score</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. GLOBAL SIGNAL MAP */}
            <section className="px-6 mb-40">
                 <div className="max-w-[1400px] mx-auto rounded-[5rem] overflow-hidden border border-white/5 relative bg-[#0A0A0B] h-[500px] flex items-center justify-center group">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#14b8a6_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
                      
                      <div className="relative z-10 text-center">
                           <Globe className="w-20 h-20 text-teal-500/20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-1000" />
                           <h2 className="text-3xl font-bold font-[Syne] uppercase tracking-[0.5em] text-slate-700">Worldwide Sync Distribution</h2>
                           <div className="flex justify-center gap-12 mt-12">
                               {['NY', 'LON', 'TOK', 'PAR', 'BER'].map(city => (
                                   <div key={city} className="flex flex-col items-center gap-2">
                                       <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></div>
                                       <span className="text-[10px] font-bold text-slate-500">{city}</span>
                                   </div>
                               ))}
                           </div>
                      </div>
                 </div>
            </section>

            {/* 3. SIGNAL GRID */}
            <section className="px-6 mb-40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {FEEDBACK.map((fb, i) => (
                            <div key={i} className="group bg-[#0A0A0B] border border-white/5 p-12 rounded-[4rem] hover:bg-white hover:text-black transition-all duration-700 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Terminal className="w-32 h-32" />
                                </div>
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-black/10">
                                        <img src={`https://i.pravatar.cc/150?img=${i+25}`} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" alt="" />
                                    </div>
                                    <div className="text-right">
                                        <div className="flex gap-1 justify-end mb-2">
                                            {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-teal-500 fill-teal-500" />)}
                                        </div>
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-teal-500 bg-teal-500/10 px-3 py-1 rounded-full group-hover:bg-teal-500 group-hover:text-black">{fb.level}</span>
                                    </div>
                                </div>
                                <Quote className="w-10 h-10 text-teal-500/20 mb-8 group-hover:text-black/10" />
                                <h3 className="text-3xl font-bold font-[Syne] leading-tight mb-10 transition-colors uppercase">"{fb.text}"</h3>
                                
                                <div className="pt-10 border-t border-white/5 group-hover:border-black/5 flex flex-col gap-1">
                                    <p className="text-xl font-bold font-[Syne] uppercase">{fb.author}</p>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">{fb.role}</p>
                                </div>
                                <div className="mt-8 flex justify-between items-center text-[9px] font-mono text-slate-600">
                                    <span>{fb.id} // INGESTED</span>
                                    <span>{fb.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VIDEO LOGS */}
            <section className="py-40 bg-white text-slate-900 rounded-t-[5rem]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl font-bold font-[Syne] tracking-tighter uppercase mb-6">VIDEO LOGS.</h2>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px]">Unedited Partner Feedback</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                         {[1,2].map(i => (
                             <div key={i} className="aspect-video bg-slate-900 rounded-[3rem] relative overflow-hidden group cursor-pointer shadow-2xl">
                                 <img src={`https://images.unsplash.com/photo-${1557804506000 + i}?q=80&w=1200`} className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000" />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <div className="w-24 h-24 rounded-full bg-teal-500 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                         <PlayCircle className="w-10 h-10" />
                                     </div>
                                 </div>
                                 <div className="absolute bottom-8 left-8 text-white">
                                     <p className="font-mono text-[10px] mb-1">LOG_00{i}_REC</p>
                                     <h4 className="text-2xl font-bold font-[Syne] uppercase tracking-tighter">PARTNER_SESSION_{i}</h4>
                                 </div>
                             </div>
                         ))}
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2025 BEXON — SIGNAL OPS</footer>
        </div>
    );
};

export default FeedbackPage;
