
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CreativeFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#CCFF00] text-black border-t-[12px] border-black pt-20 px-4 md:px-8 pb-8">
        <div className="max-w-[1600px] mx-auto border-[4px] border-black bg-white">
            
            <div className="p-8 md:p-20 flex flex-col items-center justify-center text-center border-b-[4px] border-black relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                <p className="font-mono text-sm tracking-widest uppercase mb-12 font-bold relative z-10 group-hover:text-white transition-colors delay-100">Stop browsing.</p>
                <a href="mailto:hello@cavemo.studio" className="relative z-10 flex flex-col items-center">
                    <span className="text-[12vw] md:text-[10vw] font-black leading-[0.8] font-[Syne] uppercase tracking-tighter group-hover:text-[#CCFF00] transition-colors duration-300">
                        START
                    </span>
                    <span className="text-[12vw] md:text-[10vw] font-black leading-[0.8] font-[Syne] uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "4px black" }}>
                        BUILDING
                    </span>
                </a>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-8 md:p-12 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black flex flex-col justify-between">
                    <div>
                        <h4 className="font-black text-2xl uppercase mb-4">The HQ</h4>
                        <p className="font-mono text-black/60 font-bold mb-1">Based in Digital Space.</p>
                        <p className="font-mono text-black/60 font-bold">Operating globally.</p>
                    </div>
                </div>
                
                <div className="flex-1 p-8 md:p-12 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black">
                    <h4 className="font-black text-2xl uppercase mb-8">Social Intelligence</h4>
                    <div className="flex flex-col gap-4">
                        {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(social => (
                            <a key={social} href="#" className="flex items-center justify-between font-mono font-bold uppercase hover:text-[#CCFF00] hover:bg-black p-2 transition-colors border-b-[2px] border-black/10 hover:border-black">
                                {social}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1 p-8 md:p-12 flex flex-col justify-end bg-black text-white">
                    <div className="text-[#CCFF00] font-black text-6xl md:text-8xl font-[Syne] tracking-tighter mb-4">
                        2025
                    </div>
                    <div className="font-mono text-sm uppercase text-white/50 border-t border-white/20 pt-4">
                        &copy; CAVEMO STUDIO. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>

        </div>
    </footer>
  );
};

export default CreativeFooter;
