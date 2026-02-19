
import React from 'react';
import { ArrowUpRight, Cpu, Zap, Globe, Shield, Search, ArrowRight, Star, Command, Layout } from 'lucide-react';

interface CareersPageProps {
    onApplyClick: () => void;
}

const ROLES = [
    { title: 'Neural Strategist', dept: 'Logic Unit', level: 'Senior', id: 'ROL_402' },
    { title: 'Identity Architect', dept: 'Creative Unit', level: 'Mid-Senior', id: 'ROL_991' },
    { title: 'Systems Engineer', dept: 'Technology Unit', level: 'Lead', id: 'ROL_105' },
    { title: 'Growth Hacker', dept: 'Strategy Unit', level: 'Associate', id: 'ROL_224' }
];

const CareersPage: React.FC<CareersPageProps> = ({ onApplyClick }) => {
    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black">
            
            {/* 1. ANOMALY HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-teal-500/10 rounded-full blur-[180px]"></div>
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[160px]"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                </div>

                <div className="relative z-10 text-center max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-12 animate-reveal">
                         <Command className="w-4 h-4 text-teal-400" />
                         <span className="text-[10px] font-extrabold uppercase tracking-[0.6em] text-slate-500">Recruitment Protocol v2.5</span>
                    </div>

                    <h1 className="text-[12vw] md:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-16">
                        <span className="block opacity-20">JOIN THE</span>
                        <span className="block text-stroke-dark hover:text-white transition-all duration-700">ANOMALY.</span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed animate-reveal delay-200 mb-16">
                        We are not looking for employees. We are looking for <span className="text-white italic underline underline-offset-8 decoration-teal-500">obsessed operators</span> who want to dismantle and rebuild reality.
                    </p>

                    <button className="bg-teal-500 text-black px-12 py-6 rounded-full font-bold text-xl flex items-center gap-4 mx-auto hover:bg-white transition-all shadow-2xl hover:scale-105 active:scale-95">
                        Scroll to Units <ArrowRight className="w-6 h-6 rotate-90" />
                    </button>
                </div>
            </section>

            {/* 2. THE CODE (VALUES) */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">01 / THE CODE</span>
                            <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none">
                                OUR <br /> <span className="text-slate-200">LOGIC.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 text-xl leading-relaxed font-light">
                            Excellence is not an outcome; it is a prerequisite. We operate with radical transparency, technical mastery, and zero hierarchy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Cpu, title: "Autonomous Ops", desc: "We hire the best and get out of their way. Pure agency." },
                            { icon: Zap, title: "High Velocity", desc: "We move at the speed of data. Decisions are instant." },
                            { icon: Globe, title: "Global Sync", desc: "Work from anywhere in the digital universe." },
                            { icon: Shield, title: "Legacy Built", desc: "Every project is a permanent record of excellence." }
                        ].map((val, i) => (
                            <div key={i} className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-700 group">
                                <val.icon className="w-12 h-12 text-teal-600 group-hover:text-teal-400 mb-10 transition-colors" />
                                <h4 className="text-2xl font-bold font-[Syne] mb-4 tracking-tight">{val.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE UNIT LIST (JOBS) */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 border-t border-slate-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
                         <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tighter">OPEN UNITS</h2>
                         <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                            <Search className="w-3 h-3" /> Active Searches: 04
                        </div>
                    </div>

                    <div className="border-t border-slate-900">
                        {ROLES.map((role, i) => (
                            <div 
                                key={role.id}
                                onClick={onApplyClick}
                                className="group relative border-b border-slate-100 py-12 flex flex-col md:flex-row items-center justify-between cursor-pointer transition-all hover:px-10"
                            >
                                <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-20">
                                    <span className="font-mono text-xs text-slate-300 group-hover:text-teal-500 transition-colors">/{role.id}</span>
                                    <h3 className="text-3xl md:text-5xl font-bold font-[Syne] group-hover:italic transition-all">
                                        {role.title}
                                    </h3>
                                </div>
                                
                                <div className="flex items-center gap-12 mt-8 md:mt-0">
                                    <div className="text-right hidden lg:block">
                                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">Department</p>
                                        <p className="text-sm font-bold">{role.dept}</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                                
                                {/* Background Hover Text */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity">
                                    <span className="text-9xl font-bold font-[Syne] uppercase tracking-tighter">{role.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. ENVIRONMENT GALLERY */}
            <section className="py-40 bg-[#0A0A0B] text-white">
                <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" className="rounded-3xl" alt="" />
                        </div>
                        <div className="space-y-4 pt-12">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800" className="rounded-3xl" alt="" />
                            <div className="aspect-square bg-teal-500 rounded-3xl p-10 flex flex-col justify-end text-black group hover:bg-white transition-all duration-500">
                                <Layout className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                                <h4 className="text-2xl font-bold font-[Syne] leading-none">THE <br /> STUDIO.</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-teal-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">02 / ENVIRONMENT</span>
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none mb-12">
                            BUILT FOR <br /> <span className="text-white opacity-20">BRILLIANCE.</span>
                        </h2>
                        <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-md font-light">
                            Our physical and digital labs are designed to maximize neural flow. High-end hardware, zero distractions, pure focus.
                        </p>
                        <div className="flex gap-12">
                             <div>
                                 <h4 className="text-5xl font-bold font-[Syne] text-teal-400 mb-2">12</h4>
                                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Global Hubs</p>
                             </div>
                             <div>
                                 <h4 className="text-5xl font-bold font-[Syne] text-teal-400 mb-2">∞</h4>
                                 <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Growth Potential</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 bg-[#050505] text-center border-t border-white/5">
                <p className="text-slate-800 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — THE ANOMALY PROTOCOL</p>
            </footer>

        </div>
    );
};

export default CareersPage;
