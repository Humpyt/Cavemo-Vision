import React from 'react';
import { Terminal, Shield, Database, Activity } from 'lucide-react';

const SoftwareAbout: React.FC = () => {
  return (
    <section className="bg-[#000000] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Structural Lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 hidden lg:block"></div>
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Side */}
            <div className="relative order-2 lg:order-1">
                {/* Glowing Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="space-y-4 pt-12">
                        <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm rounded-none hover:bg-white/10 transition-colors group">
                           <Terminal className="w-6 h-6 text-cyan-400 mb-4" />
                           <h4 className="text-white font-mono text-sm mb-2 group-hover:text-cyan-400">Zero-Trust Security</h4>
                           <p className="text-white/40 text-xs font-mono leading-relaxed">Cryptographic validation on every payload.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm rounded-none hover:bg-white/10 transition-colors group">
                           <Activity className="w-6 h-6 text-purple-400 mb-4" />
                           <h4 className="text-white font-mono text-sm mb-2 group-hover:text-purple-400">High-Frequency Pipelines</h4>
                           <p className="text-white/40 text-xs font-mono leading-relaxed">Sub-millisecond data routing.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm rounded-none hover:bg-white/10 transition-colors group">
                           <Database className="w-6 h-6 text-blue-400 mb-4" />
                           <h4 className="text-white font-mono text-sm mb-2 group-hover:text-blue-400">Distributed Ledgers</h4>
                           <p className="text-white/40 text-xs font-mono leading-relaxed">Decentralized state management.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm rounded-none hover:bg-white/10 transition-colors group">
                           <Shield className="w-6 h-6 text-teal-400 mb-4" />
                           <h4 className="text-white font-mono text-sm mb-2 group-hover:text-teal-400">Automated Healing</h4>
                           <p className="text-white/40 text-xs font-mono leading-relaxed">K8s clusters that repair autonomously.</p>
                        </div>
                    </div>
                </div>

                {/* Overlaid Data Feed */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -rotate-12 pointer-events-none flex items-center overflow-hidden mix-blend-screen">
                     <p className="text-cyan-400/30 font-mono text-sm whitespace-nowrap animate-[scroll_10s_linear_infinite]">
                         01100011 01101111 01100100 01100101 00100000 01101001 01110011 00100000 01101100 01100001 01110111
                     </p>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-8 order-1 lg:order-2">
                <div className="inline-block border border-white/10 px-3 py-1 mb-8">
                    <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Sys.Config / About</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight font-[Syne]">
                    We compile <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Chaos</span> into <br />
                    Order.
                </h2>
                
                <p className="text-white/50 text-lg mb-10 leading-relaxed font-mono">
                    We are a collective of hardcore engineers, system architects, and data scientists. We don't build generic applications; we engineer highly available, fault-tolerant infrastructure designed to dominate in hostile environments.
                </p>
                
                <ul className="space-y-4 mb-12 font-mono text-sm">
                    {['Rust & Go for critical paths', 'PostgreSQL & Redis at the edge', 'gRPC & WebSockets for real-time state'].map((item, id) => (
                        <li key={id} className="flex items-center gap-3 text-white/70">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                
                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                    <button className="bg-white/10 text-white border border-white/20 px-8 py-3 font-mono text-sm tracking-wide hover:bg-cyan-500 hover:border-cyan-400 transition-all">
                        Execute Profile
                    </button>
                    <div className="flex flex-col font-mono">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Lead Arch</span>
                        <span className="text-white">SYS_ADMIN_01</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareAbout;
