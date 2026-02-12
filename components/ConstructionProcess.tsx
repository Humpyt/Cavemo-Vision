
import React, { useState } from 'react';
import { Scan, Box, Truck, HardHat, Flag, Crosshair, ChevronRight, Activity, Terminal } from 'lucide-react';

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
    <section className="bg-[#111] py-24 md:py-32 px-4 relative overflow-hidden border-t border-white/5">
        
        {/* Background Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
            
            {/* Header / Console Top */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                <div>
                    <div className="flex items-center gap-2 text-yellow-500 mb-4 animate-pulse">
                        <Terminal className="w-4 h-4" />
                        <span className="font-mono text-xs tracking-widest uppercase">System Protocol_v4.5</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-[Manrope] tracking-tight">
                        EXECUTION <span className="text-stroke-white text-transparent">LOGIC</span>
                    </h2>
                </div>
                <div className="hidden md:flex gap-8 text-right">
                    <div>
                        <span className="block text-slate-500 text-[10px] font-mono uppercase tracking-widest">Active Thread</span>
                        <span className="block text-white font-mono">PROCESS_MAIN</span>
                    </div>
                    <div>
                        <span className="block text-slate-500 text-[10px] font-mono uppercase tracking-widest">Uptime</span>
                        <span className="block text-yellow-500 font-mono">99.9%</span>
                    </div>
                </div>
            </div>

            {/* Main Interface Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[700px]">
                
                {/* Left Column: Command List */}
                <div className="lg:col-span-4 flex flex-col gap-2 h-full overflow-y-auto pr-2 custom-scrollbar">
                    {PHASES.map((phase, idx) => (
                        <div 
                            key={idx}
                            onMouseEnter={() => setActivePhase(idx)}
                            className={`group cursor-pointer relative p-6 border transition-all duration-300 ${
                                activePhase === idx 
                                ? 'bg-yellow-500 border-yellow-500' 
                                : 'bg-[#1a1a1a] border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className={`font-mono text-sm font-bold tracking-widest ${
                                    activePhase === idx ? 'text-black' : 'text-yellow-600'
                                }`}>
                                    {phase.id} //
                                </span>
                                {activePhase === idx && <Activity className="w-4 h-4 text-black animate-pulse" />}
                            </div>
                            
                            <h3 className={`text-xl font-bold font-[Manrope] mb-1 ${
                                activePhase === idx ? 'text-black' : 'text-white'
                            }`}>
                                {phase.title}
                            </h3>
                            <p className={`text-xs uppercase tracking-wide ${
                                activePhase === idx ? 'text-black/70' : 'text-slate-500'
                            }`}>
                                {phase.subtitle}
                            </p>

                            {/* Corner Decors */}
                            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors ${activePhase === idx ? 'border-black' : 'border-white/20'}`}></div>
                            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors ${activePhase === idx ? 'border-black' : 'border-white/20'}`}></div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Visual Viewport */}
                <div className="lg:col-span-8 relative bg-[#050505] border border-white/10 p-1 flex flex-col">
                    
                    {/* Viewport Toolbar */}
                    <div className="bg-[#111] border-b border-white/10 px-4 py-2 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        <div className="flex gap-4">
                            <span>CAM_0{activePhase + 1}</span>
                            <span>Scale: 1:100</span>
                        </div>
                        <div className="flex gap-2">
                            <span>[ REC ]</span>
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Main Image Container */}
                    <div className="relative flex-grow overflow-hidden group">
                        {/* Image */}
                        <img 
                            src={PHASES[activePhase].image} 
                            alt={PHASES[activePhase].title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        
                        {/* Digital Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10"></div>
                        
                        {/* Animated Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.5)] animate-scan pointer-events-none z-20"></div>

                        {/* Floating Info Box */}
                        <div className="absolute bottom-8 left-8 z-30 max-w-md">
                            <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 border-l-4 border-l-yellow-500">
                                <h4 className="text-white font-bold text-2xl mb-2 font-[Manrope]">{PHASES[activePhase].title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">{PHASES[activePhase].desc}</p>
                                
                                <div className="grid grid-cols-3 gap-2">
                                    {PHASES[activePhase].stats.map((stat, i) => (
                                        <div key={i} className="bg-white/5 p-2 text-center border border-white/5">
                                            <span className="text-[10px] font-mono text-yellow-500 block uppercase tracking-tighter">{stat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Crosshairs */}
                        <div className="absolute top-8 left-8 text-white/30"><Crosshair className="w-6 h-6" /></div>
                        <div className="absolute top-8 right-8 text-white/30"><Crosshair className="w-6 h-6" /></div>
                        <div className="absolute bottom-8 right-8 text-white/30"><Crosshair className="w-6 h-6" /></div>
                    </div>

                </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                <div>System_Ready</div>
                <div className="flex gap-4">
                    <span>X: 402.19</span>
                    <span>Y: 881.02</span>
                    <span>Z: 10.00</span>
                </div>
            </div>

        </div>

        <style>{`
            .text-stroke-white { -webkit-text-stroke: 1px white; color: transparent; }
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
            .animate-scan { animation: scan 4s linear infinite; }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { bg: #1a1a1a; }
            .custom-scrollbar::-webkit-scrollbar-thumb { bg: #333; }
        `}</style>
    </section>
  );
};

export default ConstructionProcess;
