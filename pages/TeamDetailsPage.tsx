
import React from 'react';
import { ArrowLeft, Linkedin, Twitter, Mail, Target, Award, Zap, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

interface TeamDetailsPageProps {
    onBack: () => void;
}

const TeamDetailsPage: React.FC<TeamDetailsPageProps> = ({ onBack }) => {
    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black">
            
            {/* 1. HERO PROFILE */}
            <section className="relative min-h-screen flex flex-col lg:flex-row">
                {/* Left: Immersive Image */}
                <div className="lg:w-1/2 h-[60vh] lg:h-screen relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400" 
                        className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                        alt="Julian Thorne" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-40"></div>
                    
                    <button 
                        onClick={onBack}
                        className="absolute top-12 left-12 flex items-center gap-2 text-white font-mono text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-teal-500 transition-all group z-20"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Collective
                    </button>
                </div>

                {/* Right: Technical Readout */}
                <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">OPERATOR_ID: JT-99X</span>
                        </div>

                        <h1 className="text-6xl md:text-[8rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12">
                            JULIAN <br /> <span className="text-teal-500">THORNE.</span>
                        </h1>

                        <div className="space-y-8 max-w-xl">
                            <p className="text-slate-400 text-2xl font-light italic leading-relaxed">
                                "The complexity of a system is proportional to the number of truths it attempts to hide. My goal is total clarity."
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Current Rank</span>
                                    <span className="text-2xl font-bold font-[Syne]">Chief Architect</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Uptime</span>
                                    <span className="text-2xl font-bold font-[Syne]">18 Years</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer group">
                                <Linkedin className="w-6 h-6 group-hover:text-black" />
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer group">
                                <Twitter className="w-6 h-6 group-hover:text-black" />
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer group">
                                <Mail className="w-6 h-6 group-hover:text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE SKILL MATRIX */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-teal-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">02 / EXPERTISE UNIT</span>
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-none mb-12">
                            SYSTEM <br /> <span className="text-slate-200">MASTERY.</span>
                        </h2>
                        <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-md">
                            Julian's core competence lies in the integration of legacy enterprise logic with modern neural architectures.
                        </p>
                        
                        <div className="space-y-10">
                            {[
                                { label: 'STRATEGIC ARCHITECTURE', level: '98%' },
                                { label: 'NEURAL INTEGRATION', level: '92%' },
                                { label: 'QUANTUM LOGIC', level: '85%' },
                            ].map((skill, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest">{skill.label}</span>
                                        <span className="font-mono text-sm">{skill.level}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-teal-500 transition-all duration-1000 ease-out group-hover:bg-slate-900" style={{ width: skill.level }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Target, title: "Precision", val: "LOD 500" },
                            { icon: Activity, title: "Output", val: "+240%" },
                            { icon: Award, title: "Awards", val: "12 Total" },
                            { icon: ShieldCheck, title: "Security", val: "T-LEVEL 1" }
                        ].map((box, i) => (
                            <div key={i} className="aspect-square bg-slate-50 rounded-3xl p-10 flex flex-col justify-between hover:bg-slate-900 hover:text-white transition-all duration-500 group">
                                <box.icon className="w-10 h-10 text-teal-600 group-hover:text-teal-400" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500 mb-1">{box.title}</h4>
                                    <p className="text-3xl font-bold font-[Syne] tracking-tighter">{box.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROJECT LEDGER */}
            <section className="py-40 bg-white text-slate-900 border-t border-slate-100">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tighter mb-20 text-center">NOTABLE DEPLOYMENTS</h2>
                    
                    <div className="space-y-4">
                        {[
                            { year: '2024', client: 'Aether Systems', role: 'Lead Architect', desc: 'Complete rebuild of global neural supply chain infrastructure.' },
                            { year: '2023', client: 'Future Corp', role: 'Strategic Director', desc: 'Dismantling of monolithic brand architecture for fluid identity.' },
                            { year: '2022', client: 'Nebula Labs', role: 'Technical Advisor', desc: 'Optimization of high-frequency data trade algorithms.' },
                        ].map((proj, i) => (
                            <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:border-teal-500 transition-all flex flex-col md:flex-row items-center gap-12 cursor-pointer">
                                <span className="font-mono text-teal-600 font-bold">{proj.year}</span>
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold font-[Syne] mb-2">{proj.client}</h4>
                                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">{proj.role}</p>
                                    <p className="text-slate-500">{proj.desc}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CONTACT DIRECT */}
            <section className="py-40 bg-[#050505] px-6">
                <div className="max-w-[1400px] mx-auto bg-teal-600 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
                    <div className="relative z-10">
                        <span className="text-white/80 font-bold uppercase tracking-[0.5em] text-[10px] mb-12 block">DIRECT LINE</span>
                        <h2 className="text-6xl md:text-[10rem] font-bold font-[Syne] text-white tracking-tighter leading-[0.75] mb-20">
                            START THE <br /> <span className="italic">DIALOG.</span>
                        </h2>
                        <button className="bg-white text-teal-800 px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-slate-900 hover:text-white transition-all shadow-2xl hover:scale-105">
                            Connect with Julian <ArrowLeft className="w-8 h-8 rotate-180" />
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 bg-[#050505] text-center border-t border-white/5">
                <p className="text-slate-800 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — DESIGNED FOR THE VOID</p>
            </footer>

        </div>
    );
};

export default TeamDetailsPage;
