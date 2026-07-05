
import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import { Asterisk } from 'lucide-react';

const CreativeMarquee: React.FC = () => {
  return (
    <section className="bg-[#050505] overflow-hidden relative z-10 py-12 md:py-24">
      
      {/* Row 1: Kinetic Text (The Brutalist Neon Tape) */}
      <div className="flex whitespace-nowrap -rotate-2 scale-[1.05] mb-24 bg-[#CCFF00] py-4 shadow-[0_0_50px_rgba(204,255,0,0.2)]">
        <div className="flex animate-scroll-left">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-6xl md:text-8xl font-[Syne] font-extrabold text-black uppercase tracking-tighter">
                REDEFINE
              </span>
              <Asterisk className="w-10 h-10 text-black" />
              <span className="text-6xl md:text-8xl font-[Syne] font-extrabold text-transparent text-stroke-brutal uppercase">
                BOUNDARIES
              </span>
              <Asterisk className="w-10 h-10 text-black" />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll-left" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-6xl md:text-8xl font-[Syne] font-extrabold text-black uppercase tracking-tighter">
                REDEFINE
              </span>
              <Asterisk className="w-10 h-10 text-black" />
              <span className="text-6xl md:text-8xl font-[Syne] font-extrabold text-transparent text-stroke-brutal uppercase">
                BOUNDARIES
              </span>
              <Asterisk className="w-10 h-10 text-black" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Logos (Clean, Monospace vibe) */}
      <div className="flex whitespace-nowrap border-y border-white/10 py-10 bg-black">
        <div className="flex animate-scroll-right">
           {[...Array(4)].flatMap(() => CLIENT_LOGOS).map((logo, idx) => (
               <div key={idx} className="mx-16 grayscale brightness-0 invert opacity-40 hover:opacity-100 transition-opacity">
                   <img src={logo.url} alt={logo.name} className="h-8 w-auto mix-blend-screen" />
               </div>
           ))}
        </div>
        <div className="flex animate-scroll-right" aria-hidden="true">
           {[...Array(4)].flatMap(() => CLIENT_LOGOS).map((logo, idx) => (
               <div key={idx} className="mx-16 grayscale brightness-0 invert opacity-40 hover:opacity-100 transition-opacity">
                   <img src={logo.url} alt={logo.name} className="h-8 w-auto mix-blend-screen" />
               </div>
           ))}
        </div>
      </div>

      <style>{`
        .text-stroke-brutal { -webkit-text-stroke: 2px #000000; }
        .animate-scroll-left { animation: scrollLeft 30s linear infinite; }
        .animate-scroll-right { animation: scrollRight 30s linear infinite; }
        @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes scrollRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
};

export default CreativeMarquee;
