
import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import { Star } from 'lucide-react';

const CreativeMarquee: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 overflow-hidden border-b border-white/5 relative z-10">
      
      {/* Row 1: Kinetic Text */}
      <div className="flex whitespace-nowrap -rotate-2 scale-110 mb-12">
        <div className="flex animate-scroll-left">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-8xl font-[Syne] font-extrabold text-transparent text-stroke-dark uppercase opacity-30 hover:opacity-100 hover:text-teal-400 hover:text-stroke-none transition-all duration-300">
                Disruptive
              </span>
              <Star className="w-8 h-8 text-white/20" />
              <span className="text-8xl font-[Syne] font-extrabold text-white uppercase">
                Vision
              </span>
              <Star className="w-8 h-8 text-teal-500" />
            </div>
          ))}
        </div>
        <div className="flex animate-scroll-left" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-8xl font-[Syne] font-extrabold text-transparent text-stroke-dark uppercase opacity-30 hover:opacity-100 hover:text-teal-400 hover:text-stroke-none transition-all duration-300">
                Disruptive
              </span>
              <Star className="w-8 h-8 text-white/20" />
              <span className="text-8xl font-[Syne] font-extrabold text-white uppercase">
                Vision
              </span>
              <Star className="w-8 h-8 text-teal-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Logos */}
      <div className="flex whitespace-nowrap rotate-1 scale-110 border-t border-b border-white/5 py-8 bg-white/5 backdrop-blur-sm">
        <div className="flex animate-scroll-right">
           {[...Array(4)].flatMap(() => CLIENT_LOGOS).map((logo, idx) => (
               <div key={idx} className="mx-12 grayscale brightness-0 invert opacity-50 hover:opacity-100 transition-opacity">
                   <img src={logo.url} alt={logo.name} className="h-8 w-auto" />
               </div>
           ))}
        </div>
        <div className="flex animate-scroll-right" aria-hidden="true">
           {[...Array(4)].flatMap(() => CLIENT_LOGOS).map((logo, idx) => (
               <div key={idx} className="mx-12 grayscale brightness-0 invert opacity-50 hover:opacity-100 transition-opacity">
                   <img src={logo.url} alt={logo.name} className="h-8 w-auto" />
               </div>
           ))}
        </div>
      </div>

      <style>{`
        .text-stroke-dark { -webkit-text-stroke: 2px rgba(255,255,255,0.1); }
        .text-stroke-none { -webkit-text-stroke: 0; }
        .animate-scroll-left { animation: scrollLeft 30s linear infinite; }
        .animate-scroll-right { animation: scrollRight 30s linear infinite; }
        @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes scrollRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
};

export default CreativeMarquee;
