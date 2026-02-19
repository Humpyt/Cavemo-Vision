
import React from 'react';
import { Send, Phone, Mail, MapPin, Globe, ArrowUpRight, Zap, Target, Shield, ChevronRight, Activity, Clock, Layers } from 'lucide-react';

const OFFICES = [
    { city: 'New York', region: 'Global HQ', lat: '40.7128° N', lng: '74.0060° W', status: 'ACTIVE', time: 'EST' },
    { city: 'London', region: 'EMEA Node', lat: '51.5074° N', lng: '0.1278° W', status: 'ACTIVE', time: 'GMT' },
    { city: 'Tokyo', region: 'APAC Node', lat: '35.6762° N', lng: '139.6503° E', status: 'STANDBY', time: 'JST' },
];

const ContactPage: React.FC = () => {
    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black font-sans pt-32">
            
            {/* 1. UPLINK HERO */}
            <section className="px-6 mb-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[200px]"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-10">
                        <Zap className="w-3 h-3 text-teal-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400">Initialize Uplink Protocol</span>
                    </div>
                    <h1 className="text-7xl md:text-[11rem] font-bold font-[Syne] tracking-tighter leading-[0.8] mb-16 uppercase">
                        START THE <br /> <span className="text-teal-500 italic">DIALOG.</span>
                    </h1>
                    
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                         <div className="space-y-12">
                             <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-xl">
                                Submit your records for strategic ingestion. Our council responds to high-priority signals within 24 operational cycles.
                             </p>
                             
                             <div className="grid sm:grid-cols-2 gap-8">
                                 <div className="p-10 rounded-[3rem] border border-white/5 bg-[#0A0A0B] group hover:border-teal-500/50 transition-all">
                                     <Mail className="w-10 h-10 text-teal-400 mb-8" />
                                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Signal Ingest</p>
                                     <p className="text-xl font-bold font-[Syne]">hello@bexon.studio</p>
                                 </div>
                                 <div className="p-10 rounded-[3rem] border border-white/5 bg-[#0A0A0B] group hover:border-teal-500/50 transition-all">
                                     <Phone className="w-10 h-10 text-teal-400 mb-8" />
                                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Voice Node</p>
                                     <p className="text-xl font-bold font-[Syne]">+1 888 452 1505</p>
                                 </div>
                             </div>
                         </div>

                         {/* SUBMIT FORM */}
                         <div className="bg-white p-12 md:p-16 rounded-[4rem] text-slate-900 shadow-2xl relative">
                             <h2 className="text-5xl font-bold font-[Syne] mb-12 tracking-tighter uppercase">Submit Signal</h2>
                             <form className="space-y-6">
                                 <div className="grid md:grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                         <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-4">01 / Operator Name</p>
                                         <input type="text" placeholder="FULL_NAME" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-xs focus:outline-none focus:border-teal-500 transition-colors" />
                                     </div>
                                     <div className="space-y-2">
                                         <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-4">02 / Signal Address</p>
                                         <input type="email" placeholder="EMAIL@SYNC.IO" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-xs focus:outline-none focus:border-teal-500 transition-colors" />
                                     </div>
                                 </div>
                                 <div className="space-y-2">
                                     <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-4">03 / Target Unit</p>
                                     <div className="relative">
                                         <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-xs focus:outline-none focus:border-teal-500 transition-colors appearance-none uppercase font-bold tracking-widest">
                                             <option>Strategic Audit Unit</option>
                                             <option>Brand Transformation Lab</option>
                                             <option>Neural Infrastructure Ops</option>
                                             <option>Venture Capital Scaling</option>
                                         </select>
                                         <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-slate-300" />
                                     </div>
                                 </div>
                                 <div className="space-y-2">
                                     <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 ml-4">04 / Objective Manifest</p>
                                     <textarea placeholder="DESCRIBE THE VOID..." rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-3xl px-8 py-6 text-xs focus:outline-none focus:border-teal-500 transition-colors resize-none uppercase"></textarea>
                                 </div>
                                 <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-teal-500 hover:text-black transition-all flex items-center justify-center gap-3 shadow-xl group">
                                     Transmit Signal <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                 </button>
                             </form>
                         </div>
                    </div>
                </div>
            </section>

            {/* 2. GLOBAL NODE DIRECTORY */}
            <section className="px-6 py-40 bg-white text-slate-900 rounded-t-[5rem]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                         <h2 className="text-6xl font-bold font-[Syne] tracking-tighter uppercase leading-none">Global <br /> <span className="text-slate-200">Nodes.</span></h2>
                         <div className="flex gap-12 text-right">
                             <div><p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Total Nodes</p><p className="text-4xl font-bold font-[Syne]">45</p></div>
                             <div><p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Sync Uptime</p><p className="text-4xl font-bold font-[Syne]">99.9%</p></div>
                         </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {OFFICES.map((off, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-12 rounded-[4rem] group hover:bg-slate-900 hover:text-white transition-all duration-700 cursor-pointer">
                                <div className="flex justify-between items-start mb-16">
                                    <div className={`px-4 py-1 rounded-full text-[8px] font-bold font-mono tracking-widest border ${off.status === 'ACTIVE' ? 'bg-teal-500/10 text-teal-600 border-teal-500/20 group-hover:bg-teal-500 group-hover:text-black' : 'bg-slate-200 text-slate-500 border-slate-300 group-hover:bg-white/10 group-hover:text-white'}`}>
                                        NODE_{off.status}
                                    </div>
                                    <div className="text-right font-mono text-[9px] opacity-40 uppercase">
                                        <p>{off.lat}</p>
                                        <p>{off.lng}</p>
                                    </div>
                                </div>
                                <h3 className="text-5xl font-bold font-[Syne] mb-8 uppercase tracking-tighter">{off.city}</h3>
                                <div className="flex items-center gap-3 mb-10">
                                     <Clock className="w-4 h-4 text-teal-500" />
                                     <span className="text-xs font-bold font-mono uppercase tracking-widest">Timezone: {off.time}</span>
                                </div>
                                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-teal-500 group-hover:border-teal-500 transition-all">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SYNC STATUS STRIP */}
            <section className="py-32 bg-teal-600 text-black overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="flex whitespace-nowrap animate-marquee relative z-10">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 mx-12">
                             <Activity className="w-12 h-12" />
                             <span className="text-7xl font-bold font-[Syne] uppercase tracking-tighter">ALL_SYSTEMS_OPERATIONAL</span>
                             <span className="text-7xl font-bold font-[Syne] uppercase tracking-tighter opacity-30">LATENCY_0.04MS</span>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">© 2025 BEXON — UPLINK OPS</footer>
        </div>
    );
};

export default ContactPage;
