
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const TEAM = [
    {
        name: "ALEXANDER V.",
        role: "THE ARCHITECT",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "SARAH CHEN",
        role: "THE ORACLE",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "MARCUS O.",
        role: "THE ALCHEMIST",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "ELENA R.",
        role: "THE VISIONARY",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    }
];

const CreativeTeam: React.FC = () => {
    const [hoveredMember, setHoveredMember] = useState<number | null>(null);

    return (
        <section className="bg-black relative py-32 overflow-hidden border-t border-white/5">
            {/* Background Image Layer */}
            {TEAM.map((member, idx) => (
                <div 
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${hoveredMember === idx ? 'opacity-40' : 'opacity-0'}`}
                >
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale mix-blend-luminosity scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>
            ))}
            
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-20">
                
                {/* Left Content */}
                <div className="md:w-1/3 pt-10">
                    <h2 className="text-6xl font-bold text-white font-[Syne] leading-none mb-6">
                        THE <br/> OPERATORS
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-sm">
                        A collective of specialists united by a single obsession: pushing the boundaries of what is digital possible.
                    </p>
                    <button className="text-teal-400 font-mono text-sm uppercase tracking-widest border-b border-teal-500/30 pb-1 hover:text-white hover:border-white transition-all">
                        Join the Collective
                    </button>
                </div>

                {/* Right List */}
                <div className="md:w-2/3">
                    <div className="flex flex-col">
                        {TEAM.map((member, idx) => (
                            <div 
                                key={idx}
                                className="group relative border-t border-white/10 py-10 cursor-pointer transition-all hover:pl-8"
                                onMouseEnter={() => setHoveredMember(idx)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="flex justify-between items-center relative z-10">
                                    <div>
                                        <span className={`block text-xs font-bold tracking-[0.2em] mb-2 transition-colors ${hoveredMember === idx ? 'text-teal-400' : 'text-slate-600'}`}>
                                            {member.role}
                                        </span>
                                        <h3 className={`text-4xl md:text-5xl font-bold font-[Syne] uppercase transition-colors ${hoveredMember === idx ? 'text-white' : 'text-slate-500'}`}>
                                            {member.name}
                                        </h3>
                                    </div>
                                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${hoveredMember === idx ? 'bg-white text-black rotate-45' : 'text-white opacity-20'}`}>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="border-t border-white/10"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CreativeTeam;
