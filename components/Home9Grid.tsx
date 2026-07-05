
import React, { useRef } from 'react';
import { ArrowUpRight, Cpu, Layers, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Home9Grid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const textX2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="bg-[#0A0A0B] py-32 px-6 relative overflow-hidden">
      {/* Massive Background Text Parallax */}
      <div className="absolute top-[10%] left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-5">
          <motion.h2 style={{ x: textX }} className="text-[20rem] font-bold font-[Syne] text-white leading-none">
              ARCHITECTURE INFRASTRUCTURE
          </motion.h2>
      </div>
      <div className="absolute top-[40%] left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-5">
          <motion.h2 style={{ x: textX2 }} className="text-[20rem] font-bold font-[Syne] text-white leading-none">
              DEPLOYMENT PROCESS OS
          </motion.h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
              <div className="max-w-3xl">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-teal-400 mb-6 flex items-center gap-2">
                      <Terminal className="w-4 h-4" /> Deep Core Operations
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-white leading-[1.1]">
                      Algorithmic <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Excellence.</span>
                  </h2>
              </div>
              <div className="max-w-md">
                  <p className="text-slate-400 text-lg border-l border-white/10 pl-6">
                      Beyond surface-level applications. We build the subterranean structures that power global networks, handling trillions of operations seamlessly.
                  </p>
              </div>
          </div>

          <div className="relative">
              {/* Center Abstract Connector line */}
              <div className="hidden md:block absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"></div>

              <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
                  
                  {/* Card 1 - Left */}
                  <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="group"
                  >
                      <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl hover:bg-white/10 transition-colors shadow-2xl">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-teal-500/20 transition-all duration-700"></div>
                          
                          <div className="flex items-center gap-6 mb-10 relative z-10">
                              <div className="w-16 h-16 rounded-[1.5rem] bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                                  <Cpu className="w-8 h-8" />
                              </div>
                              <h3 className="text-3xl font-bold text-white font-[Syne]">Computational <br /> Architecture</h3>
                          </div>
                          
                          <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative group-hover:shadow-[0_0_50px_rgba(45,212,191,0.15)] transition-all duration-700 mb-8 z-10">
                              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Tech circuit" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                          </div>

                          <p className="text-slate-400 text-base leading-relaxed relative z-10">
                              Harnessing multi-threaded bare-metal nodes to orchestrate billions of concurrent connections with zero data degradation.
                          </p>
                          
                          <button className="mt-8 flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-xs group/btn relative z-10">
                              Inspect Nodes <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                      </div>
                  </motion.div>

                  {/* Card 2 - Right (Offset downwards) */}
                  <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="group md:mt-32"
                  >
                      <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl hover:bg-white/10 transition-colors shadow-2xl">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-700"></div>
                          
                          <div className="flex items-center gap-6 mb-10 relative z-10">
                              <div className="w-16 h-16 rounded-[1.5rem] bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                                  <Layers className="w-8 h-8" />
                              </div>
                              <h3 className="text-3xl font-bold text-white font-[Syne]">Data Sovereignty <br /> & Ledgers</h3>
                          </div>
                          
                          <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative group-hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] transition-all duration-700 mb-8 z-10">
                              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Data streams" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                          </div>

                          <p className="text-slate-400 text-base leading-relaxed relative z-10">
                              Immutable cryptographic ledgers guaranteeing absolute data integrity and verifiable scaling metrics across global edges.
                          </p>

                          <button className="mt-8 flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs group/btn relative z-10">
                              Verify Ledgers <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                      </div>
                  </motion.div>

              </div>
          </div>
      </div>
    </section>
  );
};

export default Home9Grid;
