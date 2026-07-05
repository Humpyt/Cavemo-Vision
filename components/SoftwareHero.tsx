import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Network, ArrowRight } from 'lucide-react';

interface SlideData {
  id: number;
  badge: string;
  title: React.ReactNode;
  description: string;
  image: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: "SYS.INIT: 200 OK",
    title: (
      <>
        Architecting <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-mono tracking-tighter">Digital</span> <br />
        Futures.
      </>
    ),
    description: "We deploy highly resilient, low-latency infrastructure combining brutalist scale with glass-like fragility. Designed for the machine age.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    accentColor: "cyan",
    stats: [
      { label: 'Uptime', value: '99.999%' },
      { label: 'Latency', value: '4ms' },
      { label: 'Nodes', value: '256k' }
    ],
  },
  {
    id: 2,
    badge: "NET.LINK: SECURE",
    title: (
      <>
        Cloud-Native <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-mono tracking-tighter">Velocity</span> <br />
        Engine.
      </>
    ),
    description: "Infinite horizontal scaling managed by self-healing Kubernetes clusters. We build edge-first architectures that never sleep.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    accentColor: "purple",
    stats: [
      { label: 'Throughput', value: '100TB/s' },
      { label: 'Regions', value: '24' },
      { label: 'Redundancy', value: 'N+3' }
    ],
  }
];

const SoftwareHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  const accentShadows: Record<string, string> = {
    cyan: 'shadow-[0_0_40px_rgba(34,211,238,0.3)]',
    purple: 'shadow-[0_0_40px_rgba(192,132,252,0.3)]',
  };

  const accentText: Record<string, string> = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 px-4 md:px-8 pb-12 overflow-hidden bg-[#000000]">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
           key={slide.id}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1 }}
           className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 z-0 bg-${slide.accentColor}-500/50 pointer-events-none`}
        ></motion.div>
      </AnimatePresence>

      <div className="w-full max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Text */}
        <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-8 backdrop-blur-md`}>
                    <Terminal className={`w-3 h-3 ${accentText[slide.accentColor]}`} />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">{slide.badge}</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-[1] tracking-tight mb-8 font-[Syne]">
                  {slide.title}
                </h1>

                <p className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed mb-12 font-mono">
                  {slide.description}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                    <button className={`group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-mono text-sm tracking-wide transition-all backdrop-blur-md hover:bg-white/10 hover:border-white/20 ${accentShadows[slide.accentColor]}`}>
                        <div className="absolute inset-0 w-0 bg-white/5 group-hover:w-full transition-all duration-300 ease-out"></div>
                        <span className="relative flex items-center gap-2">
                           <Network className="w-4 h-4" /> Initialize Core
                        </span>
                    </button>
                    <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
                       Read Docs <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                    {slide.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">{stat.label}</p>
                        <p className={`text-2xl font-bold font-mono ${accentText[slide.accentColor]}`}>{stat.value}</p>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
        </div>

        {/* Right HUD Widget */}
        <div className="hidden lg:flex items-center justify-end relative">
             <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="w-full max-w-md bg-black/40 backdrop-blur-2xl border border-white/10 p-6 rounded-none relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-2 opacity-30">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className={accentText[slide.accentColor]}>
                           <circle cx="50" cy="50" r="40" strokeDasharray="4 8" className="animate-[spin_10s_linear_infinite]" />
                           <circle cx="50" cy="50" r="20" strokeDasharray="4 8" className="animate-[spin_5s_linear_infinite_reverse]" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                        <Cpu className={`w-5 h-5 ${accentText[slide.accentColor]}`} />
                        <span className="font-mono text-xs text-white/70 tracking-widest uppercase">Telemetry Feed</span>
                    </div>

                    <div className="space-y-4 font-mono text-xs">
                        <div className="flex justify-between items-center text-white/50">
                            <span>CPU_USAGE</span>
                            <span className="text-white">{"[======    ] 64%"}</span>
                        </div>
                        <div className="flex justify-between items-center text-white/50">
                            <span>MEM_ALLOC</span>
                            <span className="text-white">{"[========= ] 92%"}</span>
                        </div>
                        <div className="flex justify-between items-center text-white/50">
                            <span>NET_I/O</span>
                            <span className={accentText[slide.accentColor]}>1.2 TB/s</span>
                        </div>
                        <div className="flex justify-between items-center text-white/50">
                            <span>SYS_STATE</span>
                            <span className="text-green-400">OPTIMAL</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex gap-2">
                        <div className={`h-1 flex-1 bg-white/20`}><div className={`h-full ${accentText[slide.accentColor]} bg-current w-full animate-pulse`}></div></div>
                        <div className={`h-1 flex-1 bg-white/20`}><div className={`h-full ${accentText[slide.accentColor]} bg-current w-3/4 animate-pulse delay-75`}></div></div>
                        <div className={`h-1 flex-1 bg-white/20`}><div className={`h-full ${accentText[slide.accentColor]} bg-current w-1/2 animate-pulse delay-150`}></div></div>
                    </div>
                </motion.div>
             </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
