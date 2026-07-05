
import React from 'react';
import { Sparkles } from 'lucide-react';

const Home9Marquee: React.FC = () => {
  return (
    <div className="bg-[#0A0A0B] py-12 overflow-hidden select-none border-y border-white/5 relative">
        {/* Subtle gradient overlay on sides */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 mx-8">
                    <span className="text-white font-bold text-6xl md:text-8xl uppercase tracking-tighter font-[Syne]">
                        Scale
                    </span>
                    <Sparkles className="w-12 h-12 text-teal-500 animate-pulse" />
                    <span className="text-transparent font-bold text-6xl md:text-8xl uppercase tracking-tighter font-[Syne]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
                        Dominate
                    </span>
                    <Sparkles className="w-12 h-12 text-cyan-500 animate-pulse" />
                    <span className="text-white font-bold text-6xl md:text-8xl uppercase tracking-tighter font-[Syne]">
                        Velocity
                    </span>
                    <Sparkles className="w-12 h-12 text-teal-500 animate-pulse" />
                    <span className="text-transparent font-bold text-6xl md:text-8xl uppercase tracking-tighter font-[Syne]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
                        Execute
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Home9Marquee;
