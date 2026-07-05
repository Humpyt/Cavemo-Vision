
import React from 'react';

const CreativeAbout: React.FC = () => {
  return (
    <section className="bg-white text-black pt-32 pb-0 px-4 md:px-8 border-t-[12px] border-black">
        <div className="max-w-[1600px] mx-auto relative z-10">
            <p className="font-bold text-[10px] tracking-widest uppercase mb-4 text-[#CCFF00] bg-black inline-block px-4 py-2">Our Manifesto</p>
            
            <h2 className="text-5xl md:text-[8vw] font-black leading-[0.85] font-[Syne] tracking-tighter uppercase mb-16 md:mb-32">
                We don't follow trends. We engineer <span className="text-white bg-black px-4 xl:px-8 -rotate-2 inline-block shadow-[8px_8px_0_#CCFF00]">the anomaly.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t-[4px] border-black text-left">
                <div className="border-r-[4px] border-black p-8 md:p-12 transition-colors hover:bg-black hover:text-white group relative overflow-hidden">
                    <h3 className="font-mono text-8xl md:text-9xl font-black text-black/10 absolute -top-4 -right-4 group-hover:text-white/10 transition-colors">01</h3>
                    <h3 className="font-bold text-2xl md:text-3xl mb-6 font-[Syne] uppercase relative z-10 mt-12 group-hover:text-[#CCFF00]">Defy Normal</h3>
                    <p className="text-black/70 group-hover:text-white/70 leading-relaxed font-medium relative z-10">Normal is invisible. We build digital experiences that demand absolute attention and refuse to be ignored in a crowded market.</p>
                </div>
                <div className="border-r-[4px] border-black p-8 md:p-12 transition-colors hover:bg-[#CCFF00] group relative overflow-hidden border-t-[4px] md:border-t-0">
                    <h3 className="font-mono text-8xl md:text-9xl font-black text-black/10 absolute -top-4 -right-4 group-hover:text-black/20 transition-colors">02</h3>
                    <h3 className="font-bold text-2xl md:text-3xl mb-6 font-[Syne] uppercase relative z-10 mt-12">Data x Chaos</h3>
                    <p className="text-black/70 group-hover:text-black/80 leading-relaxed font-medium relative z-10">We merge cold hard analytics with raw creative chaos. That intersection is where true brand innovation happens.</p>
                </div>
                <div className="p-8 md:p-12 transition-colors hover:bg-black hover:text-white group relative overflow-hidden border-t-[4px] md:border-t-0 border-black">
                    <h3 className="font-mono text-8xl md:text-9xl font-black text-black/10 absolute -top-4 -right-4 group-hover:text-white/10 transition-colors">03</h3>
                    <h3 className="font-bold text-2xl md:text-3xl mb-6 font-[Syne] uppercase relative z-10 mt-12 group-hover:text-[#CCFF00]">Future First</h3>
                    <p className="text-black/70 group-hover:text-white/70 leading-relaxed font-medium relative z-10">We design for the internet of tomorrow. We build with cutting edge tech to ensure your brand sets the standard.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CreativeAbout;
