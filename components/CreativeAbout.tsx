
import React from 'react';

const CreativeAbout: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 flex justify-center items-center min-h-[80vh] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
            <p className="text-teal-500 font-mono text-sm tracking-widest uppercase mb-8">The Manifesto</p>
            
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight font-[Syne] mix-blend-difference">
                WE DON'T FOLLOW <br /> TRENDS. WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">ENGINEER</span> <br /> THE ANOMALY.
            </h2>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
                <div>
                    <h3 className="text-white font-bold text-xl mb-4 font-[Syne]">01. Defy Normal</h3>
                    <p className="text-slate-400 leading-relaxed">Normal is invisible. We build digital experiences that demand attention and refuse to be ignored.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-xl mb-4 font-[Syne]">02. Data x Chaos</h3>
                    <p className="text-slate-400 leading-relaxed">We merge cold hard analytics with raw creative chaos to find the sweet spot of innovation.</p>
                </div>
                <div>
                    <h3 className="text-white font-bold text-xl mb-4 font-[Syne]">03. Future First</h3>
                    <p className="text-slate-400 leading-relaxed">We design for the internet of tomorrow. If it works on IE11, we probably didn't build it.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CreativeAbout;
