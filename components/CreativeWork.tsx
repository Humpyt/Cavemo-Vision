
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CREATIVE_WORKS } from '../constants';

interface CreativeWorkProps {
    onProjectSelect: (id: string) => void;
}

const CreativeWork: React.FC<CreativeWorkProps> = ({ onProjectSelect }) => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLElement>(null);

    // Track mouse for the hovering image
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="bg-[#050505] py-32 relative z-20 cursor-crosshair">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                
                {/* Header aligned with brutalist vibe */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/20 pb-8">
                    <h2 className="text-6xl md:text-[8vw] leading-none font-bold text-white font-[Syne] tracking-tighter uppercase mb-8 md:mb-0">
                        SELECTED <br/> WORKS
                    </h2>
                    <div className="flex flex-col text-right">
                        <span className="text-[#CCFF00] font-mono text-sm uppercase">2024 / 2026 Archive</span>
                        <span className="text-white/40 text-xs mt-2 max-w-[200px]">Strictly curated projects that defined our creative era.</span>
                    </div>
                </div>

                <div className="relative">
                    {CREATIVE_WORKS.map((work, idx) => (
                        <div 
                            key={work.id}
                            className="group relative border-b border-white/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-[#CCFF00] hover:text-black hover:px-8 rounded-sm"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onClick={() => onProjectSelect(work.id)}
                            style={{ transitionDuration: '400ms' }}
                        >
                            <div className="flex items-start md:items-center gap-6 md:gap-16">
                                <span className="font-mono text-sm md:text-xl text-white/30 group-hover:text-black/50 transition-colors">
                                    0{idx + 1}
                                </span>
                                
                                <h3 className="text-5xl md:text-[6vw] leading-none font-extrabold text-white group-hover:text-black font-[Syne] uppercase tracking-tighter">
                                    {work.title}
                                </h3>
                            </div>
                            
                            <div className="mt-8 md:mt-0 flex items-center justify-between md:justify-end gap-12 w-full md:w-auto">
                                <span className="text-white/50 group-hover:text-black/70 uppercase tracking-widest text-xs md:text-sm font-bold">
                                    {work.category}
                                </span>
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-black group-hover:bg-black group-hover:text-[#CCFF00] transition-colors shrink-0">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Mouse Follower Image overlay */}
            <div 
                className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 overflow-hidden hidden md:block"
                style={{
                    transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 150}px)`,
                    opacity: hoveredIdx !== null ? 1 : 0,
                    visibility: hoveredIdx !== null ? 'visible' : 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease'
                }}
            >
                {CREATIVE_WORKS.map((work, idx) => (
                    <img 
                        key={work.id}
                        src={work.image} 
                        alt={work.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        style={{
                            opacity: hoveredIdx === idx ? 1 : 0,
                            transform: hoveredIdx === idx ? 'scale(1)' : 'scale(1.1)',
                            transition: 'opacity 0.4s ease, transform 0.4s ease'
                        }}
                    />
                ))}
            </div>
            
        </section>
    );
};

export default CreativeWork;