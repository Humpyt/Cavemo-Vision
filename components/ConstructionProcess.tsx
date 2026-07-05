
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scan, Box, Truck, HardHat, Flag, Crosshair, ChevronRight, Activity, Terminal, Cpu } from 'lucide-react';

const PHASES = [
  {
    id: '01',
    title: 'TERRAIN ANALYSIS',
    subtitle: 'Survey & Geotech',
    desc: 'Lidar scanning and subterranean density mapping to ensure foundational integrity. We map every millimeter of the site.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop',
    icon: Scan,
    stats: ['DEPTH: 50m', 'SOIL: CLASS A', 'RISK: 0%']
  },
  {
    id: '02',
    title: 'VIRTUAL PROTOTYPE',
    subtitle: 'BIM & Engineering',
    desc: '4D simulation of the entire build process to pre-emptively resolve structural conflicts before breaking ground.',
    image: 'https://images.unsplash.com/photo-1581094794329-cd1361ddee25?q=80&w=2127&auto=format&fit=crop',
    icon: Box,
    stats: ['LOD: 400', 'CLASH: NONE', 'SYNC: CLOUD']
  },
  {
    id: '03',
    title: 'HEAVY MOBILIZATION',
    subtitle: 'Excavation & Piling',
    desc: 'Deployment of heavy tonnage machinery for earthworks and deep foundation piles. The physical transformation begins.',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2070&auto=format&fit=crop',
    icon: Truck,
    stats: ['UNITS: 15', 'LOAD: 500T', 'DAYS: 45']
  },
  {
    id: '04',
    title: 'VERTICAL RISE',
    subtitle: 'Structure Assembly',
    desc: 'Steel erection and concrete core slip-forming. We scale vertically with precision logistics to meet strict timelines.',
    image: 'https://images.unsplash.com/photo-1517646287309-48b522ef2365?q=80&w=2070&auto=format&fit=crop',
    icon: HardHat,
    stats: ['STEEL: 2KT', 'HEIGHT: +120m', 'SAFETY: MAX']
  },
  {
    id: '05',
    title: 'SYSTEMS HANDOVER',
    subtitle: 'Fit-out & Commission',
    desc: 'MEP integration, envelope sealing, and final compliance certification. Delivering a turnkey asset.',
    image: 'https://images.unsplash.com/photo-1590644365607-1c5a298493c3?q=80&w=2032&auto=format&fit=crop',
    icon: Flag,
    stats: ['QA: PASS', 'CERT: ISO', 'KEYS: READY']
  }
];

const ConstructionProcess: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="bg-[#050505] py-32 px-4 relative overflow-hidden border-t border-white/5">
        
        {/* Background Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
            
            {/* Header / Console Top */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-12">
                <div>
                    <div className="flex items-center gap-3 text-yellow-500 mb-6">
                        <Terminal className="w-5 h-5 animate-pulse" />
                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Execution Protocol_v9.2</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        CONSTRUCTION <span className="text-white/20 italic">LOGIC.</span>
                    </h2>
                </div>
                <div className="hidden md:flex gap-12 text-right">
                    <div className="flex flex-col items-end">
                        <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest mb-1">Active Thread</span>
                        <div className="flex items-center gap-2">
                          <Cpu className="w-3 h-3 text-yellow-500" />
                          <span className="text-white font-mono text-sm">PROCESS_MAIN</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest mb-1">System Uptime</span>
                        <span className="text-yellow-500 font-mono text-sm">99.99%</span>
                    </div>
                </div>
            </div>

            {/* Main Interface Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Command List */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                    {PHASES.map((phase, idx) => (
                        <motion.div 
                            key={idx}
                            onMouseEnter={() => setActivePhase(idx)}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group cursor-pointer relative p-8 rounded-2xl border transition-all duration-500 ${
                                activePhase === idx 
                                ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
                                : 'bg-white/5 border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`font-mono text-xs font-bold tracking-widest ${
                                    activePhase === idx ? 'text-black' : 'text-yellow-600'
                                }`}>
                                    PHASE_0{idx + 1}
                                </span>
                                {activePhase === idx && <Activity className="w-4 h-4 text-black animate-pulse" />}
                            </div>
                            
                            <h3 className={`text-2xl font-bold tracking-tight mb-2 transition-colors ${
                                activePhase === idx ? 'text-black' : 'text-white'
                            }`}>
                                {phase.title}
                            </h3>
                            <p className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                                activePhase === idx ? 'text-black/60' : 'text-white/30'
                            }`}>
                                {phase.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column: Visual Viewport */}
                <div className="lg:col-span-8 relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden group">
                    
                    {/* Viewport Toolbar */}
                    <div className="bg-white/5 border-b border-white/5 px-8 py-4 flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                              CAM_0{activePhase + 1}
                            </span>
                            <span>Scale: 1:250</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-rose-500 animate-pulse">[ LIVE FEED ]</span>
                            <div className="w-px h-3 bg-white/10"></div>
                            <span>FPS: 60.0</span>
                        </div>
                    </div>

                    {/* Main Image Container */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                          >
                            <img 
                                src={PHASES[activePhase].image} 
                                alt={PHASES[activePhase].title} 
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                                referrerPolicy="no-referrer"
                            />
                          </motion.div>
                        </AnimatePresence>
                        
                        {/* Digital Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10"></div>
                        
                        {/* Animated Scan Line */}
                        <motion.div 
                          animate={{ top: ['0%', '100%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 w-full h-px bg-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.3)] pointer-events-none z-20"
                        />

                        {/* Floating Info Box */}
                        <div className="absolute bottom-10 left-10 z-30 max-w-lg">
                            <motion.div 
                              key={activePhase}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-black/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl border-l-4 border-l-yellow-500 shadow-2xl"
                            >
                                <h4 className="text-white font-bold text-3xl mb-4 tracking-tight">{PHASES[activePhase].title}</h4>
                                <p className="text-white/50 text-base leading-relaxed mb-8">{PHASES[activePhase].desc}</p>
                                
                                <div className="grid grid-cols-3 gap-3">
                                    {PHASES[activePhase].stats.map((stat, i) => (
                                        <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                                            <span className="text-[10px] font-mono text-yellow-500 block uppercase tracking-tighter font-bold">{stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Crosshairs */}
                        <div className="absolute top-10 left-10 text-white/10"><Crosshair className="w-8 h-8" /></div>
                        <div className="absolute top-10 right-10 text-white/10"><Crosshair className="w-8 h-8" /></div>
                        <div className="absolute bottom-10 right-10 text-white/10"><Crosshair className="w-8 h-8" /></div>
                    </div>

                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-500">SYSTEM_READY</span>
                  <span className="text-white/10">|</span>
                  <span>BUFFER: 100%</span>
                </div>
                <div className="flex gap-8">
                    <span>X: 402.19</span>
                    <span>Y: 881.02</span>
                    <span>Z: 10.00</span>
                </div>
            </div>

        </div>
    </section>
  );
};

export default ConstructionProcess;
