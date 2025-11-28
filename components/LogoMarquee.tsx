
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const LogoMarquee: React.FC = () => {
  return (
    <section className="bg-white pb-24 pt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-t border-gray-100 pt-16">
          
          {/* Left Logos */}
          <div className="flex-1 flex flex-wrap justify-center lg:justify-end gap-12 lg:gap-16 items-center">
            {CLIENT_LOGOS.slice(0, 2).map((logo, idx) => (
                <div key={idx} className="group relative">
                    <img src={logo.url} alt={logo.name} className="h-7 w-auto object-contain opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
            ))}
          </div>

          {/* Center Pill */}
          <div className="relative z-10 shrink-0 mx-8">
             <div className="bg-white ring-1 ring-slate-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-8 py-3 flex items-center gap-4 whitespace-nowrap transform transition-transform hover:scale-105 duration-300">
                <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">B</div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">A</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold ring-2 ring-white">+1k</div>
                </div>
                <div className="text-sm text-slate-600 font-medium">
                    Trusted by <span className="text-slate-900 font-bold">1000+</span> Companies
                </div>
             </div>
          </div>

          {/* Right Logos */}
          <div className="flex-1 flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-16 items-center">
             {CLIENT_LOGOS.slice(2).map((logo, idx) => (
                <div key={idx} className="group relative">
                    <img src={logo.url} alt={logo.name} className="h-7 w-auto object-contain opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
