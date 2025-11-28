
import React from 'react';
import { ArrowUpRight, Play, Globe, Zap, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-4 px-2 md:px-4 pb-12">
      {/* Ultra Wide Container */}
      <div className="w-[98%] mx-auto bg-[#050505] rounded-[3rem] overflow-hidden min-h-[85vh] relative shadow-2xl shadow-slate-900/40">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Glows */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 h-full relative z-10">
            
            {/* Left Content (8 Cols) - Massive Typography */}
            <div className="lg:col-span-7 pt-32 md:pt-40 px-6 md:px-16 flex flex-col justify-between pb-20">
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span className="text-slate-300 text-xs font-bold tracking-widest uppercase">Redefining Consultancy</span>
                    </div>

                    {/* Massive Typography */}
                    <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold text-white leading-[0.85] tracking-tighter mb-12">
                        Scale <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-teal-200">
                           Vision
                           <svg className="absolute w-full h-4 -bottom-2 left-0 text-teal-500 transform -rotate-1 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                           </svg>
                        </span> <br />
                        <span className="text-stroke opacity-30">Beyond.</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
                        We merge creative intelligence with data-driven strategy to build brands that don't just survive—they dominate.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-wrap items-center gap-6">
                         <button className="group relative bg-white text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-teal-300 hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Journey
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                         </button>
                         <button className="px-8 py-5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-3 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </div>
                            <span>Our Showreel</span>
                         </button>
                    </div>
                </div>

                {/* Bottom Stats Strip */}
                <div className="hidden lg:flex items-center gap-12 mt-20 pt-10 border-t border-white/10">
                    <div>
                        <span className="block text-3xl font-bold text-white mb-1">98%</span>
                        <span className="text-slate-500 text-sm font-medium">Client Retention</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div>
                        <span className="block text-3xl font-bold text-white mb-1">2.5x</span>
                        <span className="text-slate-500 text-sm font-medium">Average ROI</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div>
                        <span className="block text-3xl font-bold text-white mb-1">150+</span>
                        <span className="text-slate-500 text-sm font-medium">Global Awards</span>
                    </div>
                </div>
            </div>

            {/* Right Visual (4 Cols) - Creative Composition */}
            <div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-full">
                 
                 {/* Main Image Container - Bleeding Edge */}
                 <div className="absolute inset-0 lg:left-0 lg:right-0 h-full overflow-hidden">
                     {/* Gradient Mask */}
                     <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent lg:w-2/3"></div>
                     <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-1/3 bottom-0"></div>

                     <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                        alt="Modern Office" 
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105"
                     />
                 </div>

                 {/* Floating UI Elements / Cards */}
                 <div className="absolute top-[20%] right-[10%] z-20 hidden lg:block">
                     {/* Card 1: Revenue */}
                     <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl w-72 mb-6 animate-float shadow-2xl">
                         <div className="flex justify-between items-center mb-6">
                             <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
                                 <Zap className="w-5 h-5 fill-current" />
                             </div>
                             <span className="text-teal-300 font-mono text-xs">+12.5%</span>
                         </div>
                         <h4 className="text-2xl font-bold text-white mb-1">$4.2M</h4>
                         <p className="text-slate-400 text-sm">Monthly Revenue</p>
                     </div>

                     {/* Card 2: User Activity */}
                     <div className="bg-[#0f172a] border border-white/10 p-6 rounded-3xl w-80 -ml-12 animate-float-delayed shadow-2xl relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none"></div>
                         <div className="flex items-center gap-4 mb-4">
                             <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                                 <Globe className="w-5 h-5 text-purple-400" />
                             </div>
                             <div>
                                 <h4 className="text-white font-bold">Global Reach</h4>
                                 <p className="text-slate-400 text-xs">Active in 42 countries</p>
                             </div>
                         </div>
                         {/* Mini Graph */}
                         <div className="flex items-end gap-1 h-16 mt-4">
                             {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                 <div key={i} style={{height: `${h}%`}} className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm opacity-80"></div>
                             ))}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
