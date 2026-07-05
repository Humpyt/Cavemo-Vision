
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react'; // Changed icon

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
        <section className="bg-black relative py-32 md:py-48 overflow-hidden border-t-[12px] border-[#CCFF00]">
            {/* Background Image Layer */}
            {TEAM.map((member, idx) => (
                <div 
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${hoveredMember === idx ? 'opacity-30' : 'opacity-0'}`}
                >
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale mix-blend-screen scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            <div className="max-w-[1600px] mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-20">
                
                {/* Left Content */}
                <div className="md:w-1/3 pt-10">
                    <h2 className="text-6xl md:text-8xl font-black text-white font-[Syne] leading-none mb-12 tracking-tighter">
                        THE <br/> GANG
                    </h2>
                    <p className="text-white/60 text-lg mb-12 max-w-sm font-medium">
                        A collective of brutalist operators united by a single obsession: pushing the boundaries of what is digitally possible.
                    </p>
                    <button className="bg-[#CCFF00] text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">
                        Join the Cult
                    </button>
                </div>

                {/* Right List */}
                <div className="md:w-2/3">
                    <div className="flex flex-col border-t-[4px] border-white">
                        {TEAM.map((member, idx) => (
                            <div 
                                key={idx}
                                className="group relative border-b-[4px] border-white/20 hover:border-[#CCFF00] py-12 cursor-pointer transition-all"
                                onMouseEnter={() => setHoveredMember(idx)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="flex justify-between items-center relative z-10 pl-0 group-hover:pl-8 transition-all duration-300">
                                    <div>
                                        <span className={`block text-xs font-bold tracking-[0.2em] mb-4 transition-colors font-mono ${hoveredMember === idx ? 'text-[#CCFF00]' : 'text-white/40'}`}>
                                            {member.role}
                                        </span>
                                        <h3 className={`text-4xl md:text-6xl font-black font-[Syne] uppercase tracking-tighter transition-colors ${hoveredMember === idx ? 'text-white' : 'text-white/30'}`}>
                                            {member.name}
                                        </h3>
                                    </div>
                                    <div className={`w-16 h-16 rounded-full border-[2px] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 ${hoveredMember === idx ? 'bg-[#CCFF00] border-[#CCFF00] text-black' : 'border-white/20 text-white'}`}>
                                        <ArrowUpRight className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CreativeTeam;
