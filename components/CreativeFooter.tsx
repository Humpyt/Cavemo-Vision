
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CreativeFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-32 pb-12 px-4 border-t border-white/10 relative overflow-hidden">
        {/* Massive Text Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
            <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none select-none">
                LET'S TALK
            </h1>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 min-h-[400px]">
            <div>
                <p className="text-teal-500 font-mono mb-4">Start a project</p>
                <a href="mailto:hello@cavemo.studio" className="text-5xl md:text-8xl font-bold text-white hover:text-teal-400 transition-colors font-[Syne] tracking-tighter block mb-2">
                    hello@cavemo.studio
                </a>
                <p className="text-slate-500 text-xl">Based in Digital Space. Operating Globally.</p>
            </div>

            <div className="flex flex-col gap-6 items-start md:items-end">
                <div className="flex gap-4">
                    {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(social => (
                        <a key={social} href="#" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-bold uppercase">
                            {social}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <span>&copy; 2025 CAVEMO STUDIO</span>
                    <span>—</span>
                    <span>ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-10 right-10 animate-bounce hidden md:block">
            <ArrowUpRight className="w-12 h-12 text-teal-500" />
        </div>
    </footer>
  );
};

export default CreativeFooter;
