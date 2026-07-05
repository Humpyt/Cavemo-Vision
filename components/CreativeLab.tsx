
import React from 'react';

const CreativeLab: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 md:py-48 px-4 border-t border-white/20">
      <div className="max-w-[1600px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left text block */}
              <div>
                  <div className="inline-block bg-[#CCFF00] text-black font-mono text-sm tracking-widest uppercase mb-12 px-4 py-2 font-bold">
                      The Lab / V3.0
                  </div>
                  <h2 className="text-4xl md:text-7xl font-bold font-[Syne] uppercase tracking-tighter leading-[0.85] mb-12">
                      Where logic<br/>meets <span className="text-transparent" style={{ WebkitTextStroke: "2px #CCFF00" }}>madness.</span>
                  </h2>
                  <p className="text-white/60 text-xl font-medium max-w-md leading-relaxed">
                      We don't just use standard libraries. We build custom rendering engines, write proprietary shaders, and engineer generative systems that push the modern web to its breaking point.
                  </p>
              </div>

              {/* Right brutal stats block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="border-t-[4px] border-[#CCFF00] pt-6 relative group overflow-hidden">
                      <p className="font-mono text-sm uppercase text-white/40 mb-4">Awwwards Won</p>
                      <h4 className="text-7xl md:text-9xl font-black font-[Syne] tracking-tighter text-[#CCFF00]">
                          32<span className="text-4xl text-white">X</span>
                      </h4>
                      <div className="absolute top-0 left-0 w-full h-full bg-[#CCFF00]/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                  <div className="border-t-[4px] border-white pt-6 relative group overflow-hidden">
                      <p className="font-mono text-sm uppercase text-white/40 mb-4">Lines of Shaders</p>
                      <h4 className="text-7xl md:text-9xl font-black font-[Syne] tracking-tighter text-white">
                          8<span className="text-4xl text-[#CCFF00]">M+</span>
                      </h4>
                      <div className="absolute top-0 left-0 w-full h-full bg-white/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                  <div className="border-t-[4px] border-white pt-6 relative group overflow-hidden">
                      <p className="font-mono text-sm uppercase text-white/40 mb-4">Coffee Obsession</p>
                      <h4 className="text-7xl md:text-9xl font-black font-[Syne] tracking-tighter text-white">
                          9<span className="text-4xl text-[#CCFF00]">KG</span>
                      </h4>
                  </div>
                  <div className="border-t-[4px] border-[#CCFF00] pt-6 relative group overflow-hidden bg-[#CCFF00] text-black px-6">
                      <p className="font-mono text-sm uppercase text-black/60 mb-4 font-bold">System Uptime</p>
                      <h4 className="text-7xl md:text-9xl font-black font-[Syne] tracking-tighter text-black">
                          99<span className="text-4xl">%</span>
                      </h4>
                  </div>
              </div>
          </div>
          
      </div>
    </section>
  );
};

export default CreativeLab;
