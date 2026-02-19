
import React from 'react';
import { Star } from 'lucide-react';

const Home9Marquee: React.FC = () => {
  return (
    <div className="bg-teal-600 py-8 overflow-hidden select-none border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 mx-6">
                    <span className="text-white font-bold text-3xl uppercase tracking-wider font-[Syne]">Success</span>
                    <Star className="w-6 h-6 text-white/50 fill-white/50" />
                    <span className="text-white font-bold text-3xl uppercase tracking-wider font-[Syne]">Leadership</span>
                    <Star className="w-6 h-6 text-white" />
                    <span className="text-white font-bold text-3xl uppercase tracking-wider font-[Syne]">Enterprise</span>
                    <Star className="w-6 h-6 text-white/50 fill-white/50" />
                    <span className="text-white font-bold text-3xl uppercase tracking-wider font-[Syne]">Business Growth</span>
                    <Star className="w-6 h-6 text-white" />
                    <span className="text-white font-bold text-3xl uppercase tracking-wider font-[Syne]">Corporate</span>
                    <Star className="w-6 h-6 text-white/50 fill-white/50" />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Home9Marquee;
