
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const WORKS = [
    { id: '01', title: 'Neon Syntax', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { id: '02', title: 'Void Walker', category: 'Web Experience', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
    { id: '03', title: 'Cyber Pulse', category: 'Product Design', image: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1974&auto=format&fit=crop' },
    { id: '04', title: 'Aether Core', category: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1534239697880-96c2136e76d9?q=80&w=1968&auto=format&fit=crop' },
];

const CreativeWork: React.FC = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="bg-black py-32 px-4 relative z-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex items-end justify-between mb-20 px-4">
                    <h2 className="text-5xl md:text-8xl font-bold text-white font-[Syne] tracking-tighter">
                        SELECTED <br/> WORKS
                    </h2>
                    <span className="hidden md:block text-slate-500 font-mono">( 2023 — 2025 )</span>
                </div>

                <div className="relative">
                    {WORKS.map((work, idx) => (
                        <div 
                            key={idx}
                            className="group relative border-t border-white/10 py-12 md:py-16 px-4 flex flex-col md:flex-row items-baseline md:items-center justify-between cursor-pointer transition-colors hover:bg-white/5"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <div className="flex items-baseline gap-8 md:gap-16 relative z-10 mix-blend-difference">
                                <span className="text-teal-500 font-mono text-sm md:text-base">/{work.id}</span>
                                <h3 className="text-4xl md:text-7xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 font-[Syne] uppercase">
                                    {work.title}
                                </h3>
                            </div>
                            
                            <div className="flex items-center gap-8 mt-4 md:mt-0 relative z-10 mix-blend-difference">
                                <span className="text-slate-400 uppercase tracking-widest text-xs md:text-sm">{work.category}</span>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Hover Image Reveal (Fixed Position for effect) */}
                            <div 
                                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[30vw] md:w-[30vw] md:h-[20vw] pointer-events-none transition-all duration-500 z-0 overflow-hidden rounded-lg ${hoveredIdx === idx ? 'opacity-40 scale-100 rotate-2' : 'opacity-0 scale-90 rotate-0'}`}
                            >
                                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </section>
    );
};

export default CreativeWork;
