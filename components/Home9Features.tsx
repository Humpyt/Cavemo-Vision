
import React from 'react';
import { ArrowUpRight, Activity, Network, Box } from 'lucide-react';
import { motion } from 'motion/react';

const Home9Features: React.FC = () => {
  return (
    <section className="bg-[#0A0A0B] py-32 px-6 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.05),transparent_60%)]"></div>
      <div className="max-w-[1400px] mx-auto relative z-10">
      
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-teal-400 mb-6 block flex items-center gap-2">
                    <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                    Architectural Primitives
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[Syne] text-white leading-[1.1]">
                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Extreme</span> <br/>
                    Throughput.
                </h2>
            </div>
            <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed border-l border-teal-500/30 pl-6">
                We engineer digital infrastructure that refuses to compromise. Fault-tolerant, self-healing, and effortlessly scalable.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Stat Card - Spans 8 cols */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="md:col-span-12 lg:col-span-8 bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group hover:bg-white/10 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-teal-500/20 transition-all duration-700"></div>
                
                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDBMMzAgMTBWMjBMMjAgMzBMMTAgMjBWMTBMMjAgMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-24">
                        <div className="bg-teal-500/20 border border-teal-500/20 p-5 rounded-2xl text-teal-400 backdrop-blur-md">
                            <Activity className="w-8 h-8 relative z-10" />
                        </div>
                        <div className="text-right">
                            <div className="text-teal-400 font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center justify-end gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                Packet Loss
                            </div>
                            <div className="text-white font-[Syne] font-bold text-5xl">0.0001%</div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold font-[Syne] text-white mb-6">Neural Routing</h3>
                        <p className="text-slate-400 text-lg max-w-lg leading-relaxed">Our proprietary routing algorithm dynamically adjusts to global traffic spikes before they register on conventional monitors.</p>
                    </div>
                </div>
            </motion.div>

            {/* Side Card 1 - Spans 4 cols */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="md:col-span-6 lg:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-10 group hover:bg-white/10 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-blue-500/20 border border-blue-500/20 p-5 rounded-2xl w-fit mb-12 text-blue-400 backdrop-blur-md relative z-10">
                    <Network className="w-6 h-6" />
                </div>
                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold font-[Syne] text-white mb-4">Distributed State</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-10">
                        Multi-region active-active deployments guarantee state consistency even during catastrophic regional outages.
                    </p>
                    <button className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-[10px] group/btn">
                        View Topology <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </motion.div>

            {/* Side Card 2 - Spans 4 cols */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="md:col-span-6 lg:col-span-4 rounded-[3rem] overflow-hidden relative group hover:shadow-[0_0_40px_rgba(45,212,191,0.1)] transition-all duration-500 min-h-[400px] border border-white/10"
            >
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 group-hover:opacity-80" alt="Server hardware" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-fit mb-6">
                        <Box className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-[Syne] text-white mb-3">Bare-Metal Power</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Direct hardware access when every CPU cycle counts towards the global mission.</p>
                </div>
            </motion.div>

            {/* Wide Bottom Card - Spans 8 cols */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-[3rem] p-[1px] group"
            >
                <div className="bg-[#0A0A0B] w-full h-full rounded-[3rem] overflow-hidden relative group-hover:bg-[#0d1212] transition-colors duration-500 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-teal-500/40 transition-colors duration-700"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDBMNjAgMTVWMzBMMzAgNDVMMCAzMFYxNUwzMCAweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIwLDE4NCwxNjYsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
                    <div className="relative z-10 max-w-lg">
                        <h3 className="text-4xl md:text-5xl font-bold font-[Syne] text-white mb-6">Ready to sequence?</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">Deploy an enterprise-grade stack in seconds, not months. Our automated pipelines handle the complexity for you.</p>
                    </div>
                    <button className="w-full md:w-auto relative z-10 bg-teal-400 text-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:scale-105">
                        Execute Branch <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home9Features;
