import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Target, Dna, Compass, Zap, Shield, Microscope, Fingerprint, Activity, Globe, ArrowRight, Star, Hexagon, Cpu, Workflow, Boxes, Maximize, CircleDot } from 'lucide-react';

interface AboutPage2Props {
    onHomeClick: () => void;
}

const AboutPage2: React.FC<AboutPage2Props> = ({ onHomeClick }) => {
    const [hoveredLeader, setHoveredLeader] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const LEADERS = [
        { name: "Julian Thorne", role: "Chief Architect", quote: "We build for the void left by legacy systems.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200" },
        { name: "Sia Vance", role: "Logic Director", quote: "Efficiency is the only true currency of innovation.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" },
        { name: "Marcus Roe", role: "Strategy Lead", quote: "Disruption without data is just noise.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200" },
        { name: "Elena Rostova", role: "Cybernetics", quote: "Man and machine, perfectly synchronized.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200" }
    ];

    const METRICS = [
        { label: "NEURAL SYNC", val: "99.4%", color: "text-teal-400" },
        { label: "UPTIME LOGIC", val: "100%", color: "text-purple-400" },
        { label: "MARKET CAP", val: "2.4B", color: "text-blue-400" },
        { label: "TALENT DENSITY", val: "LOD 5", color: "text-amber-400" }
    ];

    return (
        <div className="bg-[#050505] text-white selection:bg-teal-500 selection:text-black font-sans overflow-hidden">
            
            {/* Custom Header just for this layout */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#050505] border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={onHomeClick}>
                        <div className="w-8 h-8 bg-white flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                            <span className="text-black font-bold font-[Syne]">B</span>
                        </div>
                        <span className="font-bold tracking-widest text-sm">BEXON</span>
                    </div>
                    <button onClick={onHomeClick} className="text-xs font-mono text-slate-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                        Return <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>
            </header>

            {/* SECTION 1: THE GLITCH HERO */}
            <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/10 blur-[120px] animate-pulse-slow pointer-events-none"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-7xl w-full mx-auto">
                    <div className="flex items-center gap-4 mb-16 animate-reveal">
                        <div className="px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 flex items-center gap-2">
                            <Microscope className="w-3.5 h-3.5 text-teal-400" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-200">System Log // About v2.0.4</span>
                        </div>
                        <div className="h-px w-24 bg-gradient-to-r from-teal-500/50 to-transparent hidden sm:block"></div>
                    </div>

                    <h1 className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-16 relative">
                        <span className="block opacity-20 text-stroke-thin">WE ARE THE</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">INVISIBLE</span>
                        <span className="block relative">
                            ARCHITECTS.
                            <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-2 sm:w-4 h-[110%] bg-teal-500 animate-pulse"></div>
                        </span>
                    </h1>

                    <div className="grid md:grid-cols-12 gap-12 items-end border-t border-white/10 pt-12">
                        <div className="md:col-span-7">
                            <p className="text-slate-400 text-lg sm:text-xl md:text-2xl leading-relaxed font-light font-[Syne]">
                                Bexon is a strategic ledger of innovation. We do not just build brands; we engineer the algorithmic logic that sustains them across digital epochs and paradigm shifts.
                            </p>
                        </div>
                        <div className="md:col-span-5 flex flex-wrap gap-8 justify-start md:justify-end">
                             <div className="flex flex-col border-l border-white/20 pl-4">
                                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                     <Activity className="w-3 h-3 text-teal-500" /> Latitude
                                 </span>
                                 <span className="font-mono text-sm sm:text-base text-white tracking-wider">40.7128° N</span>
                             </div>
                             <div className="flex flex-col border-l border-white/20 pl-4">
                                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                     <Globe className="w-3 h-3 text-purple-500" /> Longitude
                                 </span>
                                 <span className="font-mono text-sm sm:text-base text-white tracking-wider">74.0060° W</span>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE QUANTUM BENTO */}
            <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 relative z-10 bg-[#0A0A0B]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Header Block inside Grid */}
                    <div className="md:col-span-4 mb-8 flex justify-between items-end border-b border-white/10 pb-8">
                        <div>
                            <span className="text-teal-500 font-mono text-[10px] uppercase tracking-widest mb-3 block">01 / Telemetry</span>
                            <h2 className="text-3xl md:text-5xl font-[Syne] font-bold tracking-tight">SYSTEM STATUS.</h2>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Live Feed Active</span>
                        </div>
                    </div>

                    {METRICS.map((m, i) => (
                        <div key={i} className="group bg-[#111111] border border-white/5 p-8 md:p-10 lg:p-12 transition-all duration-700 hover:-translate-y-2 hover:border-white/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <span className="font-mono text-[10px] text-slate-600">SYS.0{i+1}</span>
                                <Activity className={`w-5 h-5 ${m.color} group-hover:scale-110 transition-transform`} />
                            </div>
                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Syne] mb-3 tracking-tighter text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-500">{m.val}</h4>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors relative z-10">{m.label}</p>
                        </div>
                    ))}
                    
                    <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-teal-500 to-teal-700 p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                        
                        {/* Decorative Grid SVG */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>

                        <h3 className="text-4xl lg:text-5xl font-bold font-[Syne] text-black leading-none mb-12 relative z-10 tracking-tight">GLOBAL <br /> DOMINANCE.</h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
                             <p className="text-black/80 font-mono text-xs max-w-[220px] leading-relaxed">Operating resilient infrastructure clusters across 42+ distinct global routing zones.</p>
                             <button className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-white hover:text-black hover:-rotate-45 transition-all duration-300">
                                 <ArrowRight className="w-5 h-5" />
                             </button>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-[#111] p-1 shadow-2xl overflow-hidden relative group border border-white/5 min-h-[300px]">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Tech infrastructure" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <div className="flex items-center gap-3 mb-4">
                                <Hexagon className="w-4 h-4 text-teal-400" />
                                <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase">Infrastructure</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-[Syne] mb-6 text-white tracking-tight">NEURAL <br /> ARCHITECTURE</h3>
                            <div className="w-12 h-1 bg-teal-500 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CORE CAPABILITIES (New Section) */}
            <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] relative border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <span className="text-teal-500 font-mono text-[10px] uppercase tracking-widest mb-6 block flex items-center gap-2">
                                <Cpu className="w-4 h-4" /> 02 / Capabilities
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Syne] tracking-tighter leading-tight mb-8">
                                COGNITIVE <br className="hidden lg:block" /> DEPLOYMENT.
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-md font-light">
                                We architect digital solutions using an interconnected grid of proprietary technologies. Our capabilities map directly to the survival needs of modern enterprise.
                            </p>
                            
                            <div className="flex flex-col gap-4">
                                {['Advanced Machine Learning Models', 'Decentralized Data Vaults', 'Real-time Telemetry Dashboards', 'Zero-Trust Security Protocols'].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 border-b border-white/10 pb-4">
                                        <div className="w-6 h-6 border border-teal-500/30 flex items-center justify-center text-teal-500 text-[10px] font-mono">{idx + 1}</div>
                                        <span className="font-[Syne] text-white/80 font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Workflow, title: "Algorithmic Routing", desc: "Dynamic traffic shaping across decentralized node infrastructures to guarantee zero latency." },
                                { icon: Boxes, title: "Modular Synthetics", desc: "Microservice-driven architectures that scale infinitely without structural fracturing." },
                                { icon: Maximize, title: "Kinetic Analysis", desc: "Predictive pattern recognition for market shifts driven by quantum-grade datasets." },
                                { icon: CircleDot, title: "Core Stabilization", desc: "Immutable backup matrices preventing critical failure scenarios in monolithic stacks." }
                            ].map((feat, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-8 hover:bg-white/10 transition-colors group">
                                    <feat.icon className="w-8 h-8 text-teal-500 mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-xl font-bold font-[Syne] text-white mb-3 tracking-tight">{feat.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors font-light">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE COUNCIL (ACCORDION) */}
            <section className="py-24 md:py-40 bg-white text-slate-900 overflow-hidden relative z-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <span className="text-teal-600 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">03 / Human Logic</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[Syne] tracking-tighter leading-none">THE COUNCIL.</h2>
                    </div>
                    <p className="text-slate-500 font-mono text-xs max-w-sm">The biological processors directing our artificial grid. Hand-selected for computational intuition.</p>
                </div>

                <div className="flex flex-col md:flex-row h-[1000px] md:h-[600px] lg:h-[700px] w-full max-w-[1600px] mx-auto">
                    {LEADERS.map((l, i) => (
                        <div 
                            key={i}
                            onMouseEnter={() => setHoveredLeader(i)}
                            onMouseLeave={() => setHoveredLeader(null)}
                            className={`relative overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border-b md:border-b-0 md:border-r border-slate-200 last:border-0 ${hoveredLeader === i ? 'flex-[2.5] md:flex-[3]' : 'flex-[1] opacity-70 grayscale hover:opacity-100 hover:grayscale-0'}`}
                        >
                            <img src={l.img} className="absolute inset-0 w-full h-full object-cover object-center" alt={l.name} />
                            
                            {/* Gradients for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
                            
                            {/* Expanded Content */}
                            <div className={`absolute bottom-0 left-0 p-8 lg:p-12 w-full transition-all duration-700 flex flex-col justify-end h-full ${hoveredLeader === i ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <div className="max-w-md">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-px bg-teal-400"></div>
                                        <p className="text-teal-400 font-mono font-bold text-[10px] uppercase tracking-widest">{l.role}</p>
                                    </div>
                                    <h4 className="text-white text-3xl md:text-5xl font-bold font-[Syne] mb-6 tracking-tight leading-tight">{l.name}</h4>
                                    <p className="text-slate-300 text-base md:text-lg italic font-light leading-relaxed border-l-2 border-white/20 pl-4">"{l.quote}"</p>
                                    
                                    <div className="mt-8 flex gap-3">
                                        <button className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                        <button className="px-4 h-10 border border-white/20 flex items-center justify-center text-white text-[10px] font-mono tracking-widest hover:bg-white hover:text-black transition-colors uppercase">
                                            View Logs
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Collapsed State Title */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${hoveredLeader === i ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 px-6 py-4 md:rotate-[-90deg] md:min-w-[200px] text-center">
                                    <h3 className="text-white text-xl md:text-2xl font-bold font-[Syne] uppercase tracking-widest whitespace-nowrap">
                                        {l.name.split(' ')[0]}
                                    </h3>
                                    <span className="text-teal-400 font-mono text-[9px] uppercase tracking-widest mt-1 block">{l.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: THE BLUEPRINT TIMELINE (Enhanced) */}
            <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] relative">
                {/* Background lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 line-dashed"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-white/5 line-dashed"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-white/5 line-dashed"></div>
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="mb-20 text-center">
                        <span className="text-teal-500 font-mono text-[10px] uppercase tracking-widest mb-4 block">04 / Chronology</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tight text-white mb-6">EVOLUTION PATTERN.</h2>
                        <p className="text-slate-400 max-w-xl mx-auto font-light">The strategic roadmap tracing our expansion from a localized logic node to a global cognitive grid.</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        {/* Central Line */}
                        <div className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-teal-500 via-purple-500 to-transparent"></div>
                        
                        {[
                            { year: "2010", title: "Genesis Cluster", desc: "Initialization of primary research units in Brooklyn. Deployment of the first localized predictive matrices.", icon: Star },
                            { year: "2016", title: "Global Uplink", desc: "Expansion into EU and APAC markets. Setting up 24/7 logic support and resilient data hubs.", icon: Globe },
                            { year: "2022", title: "Neural Leap", desc: "Integration of proprietary deep-learning AI models into full client lifecycle management systems.", icon: Dna },
                            { year: "2025", title: "The Sovereign", desc: "Achieving total decentralized autonomous operations, reducing human friction to near zero.", icon: Shield },
                            { year: "2028", title: "Horizon Point", desc: "Classified quantum routing protocol integration. Awaiting systemic unlock.", icon: Compass }
                        ].map((step, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                {/* Content Box */}
                                <div className={`w-full md:w-[42%] group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="text-teal-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{step.year}</span>
                                    <h4 className="text-2xl md:text-3xl font-bold font-[Syne] text-white mb-4 group-hover:text-teal-400 transition-colors tracking-tight">{step.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
                                </div>
                                
                                {/* Connector Node */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 md:top-auto w-12 h-12 bg-[#050505] border border-teal-500/50 rounded-full flex items-center justify-center z-10 group-hover:bg-teal-500 transition-colors duration-500">
                                    <step.icon className="w-5 h-5 text-teal-400 group-hover:text-black transition-colors" />
                                </div>

                                <div className="hidden md:block w-[42%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: MANIFESTO GRID */}
            <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-slate-900 overflow-hidden relative">
                {/* Background graphical element */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 pointer-events-none transform skew-x-12 translate-x-32 hidden lg:block"></div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <span className="text-teal-600 font-mono font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block flex items-center gap-2">
                                <Fingerprint className="w-4 h-4" /> 05 / Manifesto
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[Syne] tracking-tighter leading-[0.9] mb-10">
                                LOGIC IS THE <br /> <span className="text-slate-300 italic">ONLY TRUTH.</span>
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-light">
                                We reject arbitrary design and emotional guesswork. We believe the digital world is a strict ledger of operational choices. Every system we build is a mathematically sound record of excellence and strategic intent.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="bg-slate-900 text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-teal-500 hover:text-black transition-colors flex items-center justify-center gap-3">
                                    Download Spec <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <button className="border border-slate-200 text-slate-900 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-teal-500 hover:text-teal-600 transition-colors">
                                    Read Philosophy
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {[
                                { icon: Zap, label: "Infinite Load", desc: "Built to never fracture." },
                                { icon: Globe, label: "Open Sync", desc: "Borderlessly integrated." },
                                { icon: Target, label: "Pure Target", desc: "Zero wasted compute." },
                                { icon: Shield, label: "Secure Ops", desc: "Impenetrable layers." }
                            ].map((v, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:bg-slate-900 hover:border-slate-900 transition-all duration-500 group min-h-[220px]">
                                    <div className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center group-hover:bg-slate-800 group-hover:border-slate-700 transition-colors mb-8">
                                        <v.icon className="w-5 h-5 text-teal-600 group-hover:text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold font-[Syne] tracking-widest uppercase text-slate-900 group-hover:text-white mb-2">{v.label}</h4>
                                        <p className="text-xs font-mono text-slate-500 group-hover:text-slate-400">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: THE PULSE MAP (SVG Enhancement) */}
            <section className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
                    <span className="text-teal-500 font-mono text-[10px] uppercase tracking-widest mb-4 block">06 / Topography</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tighter mb-16 text-white">GLOBAL <span className="opacity-40 italic">NODE GRID</span></h2>
                    
                    <div className="relative w-full max-w-5xl mx-auto opacity-70 mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        
                        {/* Abstract Connectivity Map SVG */}
                        <svg viewBox="0 0 1000 500" className="w-full h-auto stroke-white/20" preserveAspectRatio="xMidYMid meet">
                            {/* Base World approximation lines */}
                            <path d="M 200,150 Q 250,100 350,120 T 450,180 T 600,100 T 800,200" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                            <path d="M 150,250 Q 300,300 450,250 T 700,350 T 850,250" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                            <path d="M 250,350 Q 350,450 550,400 T 750,450" fill="none" strokeWidth="1" strokeDasharray="5,5" />
                            
                            {/* Connections between nodes */}
                            <path d="M 220,180 L 480,160 L 780,220 L 820,380 L 480,160 M 220,180 L 320,320 L 480,160" fill="none" stroke="#14b8a6" strokeWidth="0.5" className="opacity-50" />
                        </svg>

                        {/* Active Nodes */}
                        {[
                            { top: '36%', left: '22%', label: 'NA-EAST' },
                            { top: '64%', left: '32%', label: 'SA-CORE' },
                            { top: '32%', left: '48%', label: 'EU-WEST' },
                            { top: '44%', left: '78%', label: 'AP-NORTH' },
                            { top: '76%', left: '82%', label: 'AP-SOUTH' }
                        ].map((node, i) => (
                            <div key={i} className="absolute group" style={{ top: node.top, left: node.left }}>
                                <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-4 h-4 bg-teal-500/20 border border-teal-500/50 rounded-full flex items-center justify-center animate-pulse">
                                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                </div>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap bg-[#111] border border-white/10 text-white px-3 py-2 text-[10px] font-mono uppercase tracking-widest shadow-2xl z-20">
                                    <span className="text-teal-400 mr-2">●</span> {node.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-16">
                        {[
                            { value: "42", label: "Active Nodes" },
                            { value: "12ms", label: "Avg Latency" },
                            { value: "5", label: "Continents" },
                            { value: "99.99%", label: "Uptime" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold font-[Syne] text-white tracking-tighter mb-1">{stat.value}</p>
                                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: FINAL CALL */}
            <section className="py-32 md:py-48 px-6 relative overflow-hidden bg-[#0a0a0c]">
                {/* Visual architectural grid in background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4vw_4vw] opacity-30 pointer-events-none"></div>
                
                <div className="max-w-[1200px] mx-auto bg-[#111] border border-white/10 rounded-none sm:rounded-[3rem] p-10 md:p-24 lg:p-32 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="relative z-10">
                        <span className="text-teal-400 font-mono uppercase tracking-[0.4em] text-[10px] mb-8 block flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-teal-400 animate-pulse"></span> INITIALIZE PROTOCOL
                        </span>
                        <h2 className="text-5xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.8] mb-16 uppercase">
                            ENTER THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 italic font-medium pr-4">LEDGER.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button 
                                onClick={onHomeClick}
                                className="bg-white text-black px-12 py-5 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-teal-500 hover:text-white transition-all shadow-xl group border border-transparent"
                            >
                                Initiate Target <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </button>
                            <button className="bg-transparent border border-white/20 text-white px-12 py-5 font-bold text-sm uppercase tracking-widest hover:border-white transition-colors">
                                View Logs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-16 md:py-20 px-6 md:px-12 border-t border-white/5 bg-[#050505]">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white flex items-center justify-center">
                            <span className="text-black font-bold font-[Syne] text-xs">B</span>
                        </div>
                        <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold ml-4">© 2026 BEXON — DESIGNED FOR THE VOID</p>
                    </div>
                    
                    <div className="flex justify-center gap-8">
                        {['Instagram', 'Twitter', 'LinkedIn', 'Terminal'].map(s => (
                            <a key={s} href="#" className="text-slate-500 hover:text-teal-400 font-bold uppercase tracking-widest text-[10px] transition-colors">{s}</a>
                        ))}
                    </div>
                </div>
            </footer>

            <style>{`
                .text-stroke-thin { -webkit-text-stroke: 1px rgba(255,255,255,0.05); color: transparent; }
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            `}</style>

        </div>
    );
};

export default AboutPage2;
