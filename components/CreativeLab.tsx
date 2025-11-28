
import React from 'react';
import { Terminal, Cpu, Code2, Microscope, Share2 } from 'lucide-react';

const EXPERIMENTS = [
  {
    id: 'EXP-001',
    name: 'Neural Style Transfer',
    status: 'Operational',
    tags: ['AI', 'Python', 'Processing'],
    description: 'Real-time video style transfer using lightweight GANs in the browser.'
  },
  {
    id: 'EXP-002',
    name: 'WebGL Fluid Sim',
    status: 'Beta',
    tags: ['GLSL', 'Physics', 'Three.js'],
    description: 'High-viscosity liquid simulation running at 60fps on mobile devices.'
  },
  {
    id: 'EXP-003',
    name: 'Spatial Audio VR',
    status: 'Prototype',
    tags: ['WebXR', 'Audio', 'Immersive'],
    description: 'Ray-traced audio engine for hyper-realistic soundscapes in virtual environments.'
  }
];

const CreativeLab: React.FC = () => {
  return (
    <section className="bg-[#050505] py-32 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,150,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 text-teal-500 font-mono text-xs tracking-widest uppercase mb-4">
              <Microscope className="w-4 h-4" />
              <span>R&D Division</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-[Syne]">
              THE <span className="text-stroke-dark text-transparent">LABORATORY</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-slate-500 font-mono text-sm">
              Status: <span className="text-green-500 animate-pulse">● Live</span>
            </p>
            <p className="text-slate-600 font-mono text-xs">v2.0.45-alpha</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Terminal Display */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-xl p-1 overflow-hidden font-mono text-sm shadow-2xl relative group">
             {/* Header */}
             <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <span className="ml-2 text-xs text-slate-500">terminal — -zsh — 80x24</span>
             </div>
             
             {/* Content */}
             <div className="p-6 h-[400px] overflow-y-auto text-slate-300 relative">
                <div className="absolute inset-0 bg-teal-500/5 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <p className="mb-2"><span className="text-green-500">user@cavemo-lab</span>:<span className="text-blue-500">~</span>$ init protocol_omega</p>
                <p className="mb-2 text-slate-500">Loading modules...</p>
                <div className="flex flex-col gap-1 mb-4 text-xs">
                    <span className="text-teal-500">[SUCCESS] Neural Engine mounted</span>
                    <span className="text-teal-500">[SUCCESS] WebGL Context 2.0 initialized</span>
                    <span className="text-yellow-500">[WARNING] Memory usage at 84%</span>
                </div>
                
                <div className="border border-dashed border-slate-700 p-4 rounded mb-4 bg-black/50">
                   <p className="text-purple-400 mb-2">// LATEST COMMIT</p>
                   <p className="text-white typewriter">Implemented procedural generation for terrain assets based on noise maps...</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-8 opacity-50">
                    {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-1 bg-slate-800 rounded overflow-hidden">
                            <div className="h-full bg-teal-500 animate-loading-bar" style={{width: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 2 + 1}s`}}></div>
                        </div>
                    ))}
                </div>
                
                <p className="mt-4 animate-pulse">_</p>
             </div>
          </div>

          {/* Side Panel Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
              {EXPERIMENTS.map((exp, idx) => (
                  <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:border-teal-500/50 transition-colors group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-mono text-teal-600 bg-teal-900/10 px-2 py-1 rounded">{exp.id}</span>
                          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{exp.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                          {exp.tags.map(tag => (
                              <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-800 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                                  {tag}
                              </span>
                          ))}
                      </div>
                  </div>
              ))}
              
              <button className="mt-auto w-full py-4 border border-dashed border-slate-700 text-slate-400 font-mono text-sm hover:bg-white/5 hover:text-white transition-colors rounded-xl flex items-center justify-center gap-2">
                  <Terminal className="w-4 h-4" /> View Full Repository
              </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3s steps(40, end);
        }
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default CreativeLab;
