
import React from 'react';

const Home8Marquee: React.FC = () => {
  return (
    <div className="bg-teal-600 py-6 overflow-hidden border-y border-white/10 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 mx-6">
                    <span className="text-white font-extrabold text-2xl uppercase tracking-widest font-[Syne]">Enterprise</span>
                    <span className="text-white/40 text-2xl">//</span>
                    <span className="text-white font-extrabold text-2xl uppercase tracking-widest font-[Syne]">Business Growth</span>
                    <span className="text-white/40 text-2xl">//</span>
                    <span className="text-white font-extrabold text-2xl uppercase tracking-widest font-[Syne]">Corporate</span>
                    <span className="text-white/40 text-2xl">//</span>
                    <span className="text-white font-extrabold text-2xl uppercase tracking-widest font-[Syne]">Results</span>
                    <span className="text-white/40 text-2xl">//</span>
                    <span className="text-white font-extrabold text-2xl uppercase tracking-widest font-[Syne]">Innovation</span>
                    <span className="text-white/40 text-2xl">//</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Home8Marquee;
