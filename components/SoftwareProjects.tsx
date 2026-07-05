import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Workflow, Server } from 'lucide-react';

const PROJECTS = [
  {
    id: "TRX-9",
    title: 'Distributed Ledger Engine',
    category: 'Core Infrastructure',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tech: ['Rust', 'WebAssembly', 'Kafka', 'Sizzle'],
  },
  {
    id: "NEX-4",
    title: 'Neural Event Processor',
    category: 'AI Pipeline',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    tech: ['PyTorch', 'Go', 'Redis', 'CUDA'],
  },
  {
    id: "SYS-1",
    title: 'Global Edge Router',
    category: 'Network Systems',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop',
    tech: ['C++', 'eBPF', 'Terraform', 'Vault'],
  }
];

const SoftwareProjects: React.FC = () => {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="inline-block border border-white/10 px-3 py-1 mb-8">
                <span className="text-pink-400 font-mono text-[10px] uppercase tracking-widest">Git.Log / Deployments</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 font-[Syne]">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Environments</span>
            </h2>
            <p className="text-white/40 text-sm font-mono max-w-xl">
              Production systems currently handling enterprise-scale workloads globally.
            </p>
          </div>
          <button className="px-6 py-3 font-mono text-sm tracking-wide bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors">
            fetch --all
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              {/* Matrix Card */}
              <div className="bg-[#050505] border border-white/10 overflow-hidden mb-6 transition-all duration-500 hover:border-cyan-500/50 relative">
                
                {/* Tech UI Header */}
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center relative z-10">
                   <div className="flex items-center gap-2">
                       <Workflow className="w-3 h-3 text-cyan-400" />
                       <span className="font-mono text-[10px] text-white/50">{project.id}</span>
                   </div>
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                   </div>
                </div>

                {/* Glitch Image Context */}
                <div className="relative aspect-video overflow-hidden bg-black group-hover:bg-cyan-900/20 transition-colors">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:100%_4px] z-10 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm">
                    <button className="w-10 h-10 border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Terminal Text block */}
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-3 h-3 text-purple-400" />
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-mono">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareProjects;
