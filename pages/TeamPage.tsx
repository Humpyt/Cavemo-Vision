
import React, { useState } from 'react';
import { ArrowUpRight, Linkedin, Twitter, Mail, Plus, Filter, Users, Sparkles, Target, Zap, Cpu } from 'lucide-react';

interface TeamPageProps {
    onHomeClick: () => void;
}

const DEPARTMENTS = ["All Leaders", "Executive", "Strategy", "Creative", "Technology"];

const TEAM_MEMBERS = [
    { id: 1, name: 'Julian Thorne', role: 'Chief Executive Officer', dept: 'Executive', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800', stats: { exp: '18Y', projects: '200+', focus: 'Market Logic' } },
    { id: 2, name: 'Sia Vance', role: 'Chief Operating Officer', dept: 'Executive', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800', stats: { exp: '15Y', projects: '150+', focus: 'Operations' } },
    { id: 3, name: 'Michael Chen', role: 'Head of Strategy', dept: 'Strategy', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800', stats: { exp: '12Y', projects: '180+', focus: 'Growth' } },
    { id: 4, name: 'Elena Rodriguez', role: 'Creative Director', dept: 'Creative', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800', stats: { exp: '10Y', projects: '120+', focus: 'Visuals' } },
    { id: 5, name: 'David Okafor', role: 'Technical Lead', dept: 'Technology', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800', stats: { exp: '14Y', projects: '95+', focus: 'Neural Ops' } },
    { id: 6, name: 'Sarah Jenning', role: 'Managing Director', dept: 'Executive', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800', stats: { exp: '16Y', projects: '140+', focus: 'Governance' } },
    { id: 7, name: 'Marcus Roe', role: 'Strategy Director', dept: 'Strategy', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800', stats: { exp: '11Y', projects: '110+', focus: 'Analytics' } },
    { id: 8, name: 'Anya Volkov', role: 'Design Lead', dept: 'Creative', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800', stats: { exp: '9Y', projects: '85+', focus: 'UX Flow' } },
];

const TeamPage: React.FC<TeamPageProps> = ({ onHomeClick }) => {
    const [activeDept, setActiveDept] = useState("All Leaders");
    const [hoveredMember, setHoveredMember] = useState<number | null>(null);

    const filteredTeam = activeDept === "All Leaders" 
        ? TEAM_MEMBERS 
        : TEAM_MEMBERS.filter(m => m.dept === activeDept);

    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black font-sans">
            
            {/* 1. HERO: THE MASTERMINDS */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[160px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-teal-500/5 rounded-full blur-[140px]"></div>
                </div>

                <div className="relative z-10 text-center max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 animate-reveal">
                        <Users className="w-4 h-4 text-teal-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.6em] text-slate-500">The Intelligence Network</span>
                    </div>

                    <h1 className="text-6xl md:text-[12rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-16 flex flex-col items-center">
                        <span className="block opacity-20">MEET THE</span>
                        <span className="block relative group cursor-default">
                             MASTERMINDS.
                             <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-[120%] bg-teal-500 hidden md:block group-hover:h-[40%] transition-all duration-700"></div>
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed animate-reveal delay-200">
                        We don't just hire specialists. We recruit <span className="text-white italic">visionaries</span> who are obsessed with dismantling the ordinary.
                    </p>
                </div>
            </section>

            {/* 2. THE COLLECTIVE GRID */}
            <section className="py-40 px-6 md:px-24 bg-white text-slate-900 rounded-t-[5rem] relative z-20">
                <div className="max-w-[1400px] mx-auto">
                    
                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
                        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
                            {DEPARTMENTS.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDept(dept)}
                                    className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                                        activeDept === dept 
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                                        : 'bg-white text-slate-400 border-slate-100 hover:border-teal-500 hover:text-teal-600'
                                    }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-lg">
                            <Filter className="w-3 h-3" /> Showing {filteredTeam.length} Operators
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                        {filteredTeam.map((member) => (
                            <div 
                                key={member.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-8 relative">
                                    <img src={member.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={member.name} />
                                    
                                    {/* Statistics Hover Layer */}
                                    <div className={`absolute inset-0 bg-slate-900/90 backdrop-blur-sm p-10 flex flex-col justify-center transition-all duration-500 ${hoveredMember === member.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Experience</span>
                                                <span className="text-white font-mono">{member.stats.exp}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Ops</span>
                                                <span className="text-white font-mono">{member.stats.projects}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Focus Unit</span>
                                                <span className="text-teal-400 font-mono text-xs">{member.stats.focus}</span>
                                            </div>
                                        </div>
                                        <div className="mt-10 flex gap-4">
                                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                            </button>
                                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-teal-500 transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Department Tag */}
                                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 group-hover:bg-teal-500 transition-colors">
                                        <span className="text-white font-bold text-[8px] uppercase tracking-[0.2em]">{member.dept}</span>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <h3 className="text-2xl font-bold font-[Syne] text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{member.name}</h3>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CULTURE: THE STUDIO PULSE */}
            <section className="py-40 bg-slate-50 text-slate-900 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                             <Sparkles className="w-4 h-4" />
                             THE OPERATIONAL CORE
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold font-[Syne] tracking-tighter leading-[0.85] mb-12">
                            LIFE INSIDE <br /> <span className="text-slate-200">THE LAB.</span>
                        </h2>
                        <div className="space-y-8 max-w-md">
                            <p className="text-slate-500 text-xl leading-relaxed">
                                Our culture is built on the principle of extreme autonomy. We hire the best and get out of their way.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    { icon: Target, label: "Zero Hierarchy, Pure Impact" },
                                    { icon: Zap, label: "Fail Fast, Iterate Faster" },
                                    { icon: Cpu, label: "Tech-Agnostic Mastery" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-700">{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700" alt="" />
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" className="rounded-3xl shadow-xl" alt="" />
                        </div>
                        <div className="space-y-4 pt-12">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800" className="rounded-3xl shadow-xl" alt="" />
                            <div className="aspect-square bg-teal-500 rounded-3xl p-10 flex flex-col justify-end text-black group hover:bg-slate-900 hover:text-white transition-all duration-500">
                                <Plus className="w-12 h-12 mb-4 group-hover:rotate-45 transition-transform" />
                                <h4 className="text-2xl font-bold font-[Syne] leading-none">JOIN THE <br /> TEAM.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RECRUITMENT CTA */}
            <section className="py-40 bg-white px-6">
                <div className="max-w-[1400px] mx-auto bg-[#050505] rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
                    
                    <div className="relative z-10">
                        <span className="text-teal-400 font-bold uppercase tracking-[0.6em] text-[10px] mb-12 block">CAREER OPPORTUNITIES</span>
                        <h2 className="text-6xl md:text-[10rem] font-bold font-[Syne] text-white tracking-tighter leading-[0.75] mb-20">
                            BECOME AN <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">OPERATOR.</span>
                        </h2>
                        <button 
                            onClick={onHomeClick}
                            className="bg-white text-slate-900 px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-teal-500 hover:text-black transition-all shadow-2xl hover:scale-105"
                        >
                            View Open Roles <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-20 px-6 border-t border-slate-100 bg-white text-slate-900 text-center">
                <div className="flex justify-center gap-12 mb-12">
                    {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map(s => (
                        <a key={s} href="#" className="text-slate-400 hover:text-teal-600 font-bold uppercase tracking-widest text-[10px] transition-colors">{s}</a>
                    ))}
                </div>
                <p className="text-slate-300 text-[10px] uppercase tracking-[0.5em] font-bold">© 2025 BEXON — UNITED BY OBSESSION</p>
            </footer>

            <style>{`
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

        </div>
    );
};

export default TeamPage;
