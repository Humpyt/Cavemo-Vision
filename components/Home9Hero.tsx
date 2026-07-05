
import React, { useRef } from 'react';
import { ArrowUpRight, Shield, Zap, TrendingUp, Play, Activity } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Home9Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[120svh] flex items-center justify-center overflow-hidden bg-[#0A0A0B] pt-20 pb-32">
      {/* Dynamic Grid & Glowing Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_10%,transparent_100%)]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
          
          {/* Main Centered Typography */}
          <motion.div 
            style={{ y: y1, opacity: opacityText, scale: scaleText }}
            className="flex flex-col items-center text-center mt-20"
          >
              <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-slate-300">Bexon Empower OS</span>
              </motion.div>

              <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold font-[Syne] text-white leading-[0.85] tracking-tighter mb-8"
              >
                  Empower <br />
                  <span className="relative inline-block">
                     <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-200 to-white">
                         Scale.
                     </span>
                     <span className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-teal-400 to-cyan-200 bg-clip-text text-transparent mix-blend-screen -z-10 text-center">Scale.</span>
                  </span>
              </motion.h1>

              <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed mb-12"
              >
                  Architecting exponential growth through deep data infrastructure. We engineer platforms that refuse to compromise.
              </motion.p>
              
              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-6"
              >
                  <button className="bg-teal-400 text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white transition-all hover:scale-105 duration-300 shadow-[0_0_40px_rgba(45,212,191,0.3)]">
                      Initialize Sequence <ArrowUpRight className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-3 text-white font-medium hover:text-teal-300 transition-colors">
                      <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                          <Play className="w-5 h-5 fill-current" />
                      </div>
                      <span className="text-lg">Watch Architecture</span>
                  </button>
              </motion.div>
          </motion.div>

          {/* Floating Parallax Elements */}
          <motion.div style={{ y: y2 }} className="hidden lg:block absolute top-[20%] left-0 z-20">
              <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl w-64 shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4">
                      <Shield className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold font-[Syne] mb-2">Zero-Trust Core</h3>
                  <div className="w-full h-1 bg-white/10 rounded-full mb-3">
                      <div className="w-[100%] h-full bg-teal-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-400 text-xs">Security protocols active</p>
              </div>
          </motion.div>

          <motion.div style={{ y: y3 }} className="hidden lg:block absolute top-[40%] right-0 z-20">
              <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl w-72 shadow-2xl">
                  <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Activity className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <span className="px-2 py-1 bg-white/10 rounded-lg text-[10px] text-white font-mono">99.999%</span>
                  </div>
                  <h3 className="text-white font-bold font-[Syne] text-lg mb-1">Hyper-Velocity</h3>
                  <p className="text-slate-400 text-xs">Edge routing nominal</p>
              </div>
          </motion.div>

          {/* Picture Panel Bottom */}
          <motion.div 
             style={{ y: y2 }}
             className="relative mt-24 max-w-4xl mx-auto rounded-[3rem] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20"
          >
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" className="w-full h-[400px] object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Tech" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                   <div>
                       <div className="text-teal-400 font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                           <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                           Global Network Status
                       </div>
                       <div className="text-white font-[Syne] font-bold text-3xl md:text-5xl">Systems Nominal</div>
                   </div>
                   <div className="w-16 h-16 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-teal-400 group-hover:text-black group-hover:border-teal-400 transition-all shrink-0">
                       <TrendingUp className="w-6 h-6" />
                   </div>
              </div>
          </motion.div>

      </div>
    </section>
  );
};

export default Home9Hero;

