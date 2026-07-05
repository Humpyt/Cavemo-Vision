import React, { useState } from 'react';
import { Plus, Github, Terminal, Fingerprint } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const SoftwareTeam: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="bg-[#020202] py-32 px-4 border-t border-white/5 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <div>
                <div className="inline-block border border-white/10 px-3 py-1 mb-8">
                    <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Access / Operatives</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-[Syne]">
                    Core <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Contributors.</span>
                </h2>
            </div>
            <p className="max-w-md text-white/40 text-sm mt-6 md:mt-0 font-mono">
                The architects building the infrastructure. High clearance computational engineers.
            </p>
        </div>

        {/* Dynamic Terminal Grid */}
        <div className="flex flex-col lg:flex-row gap-2 h-[800px] lg:h-[500px] w-full">
            {TEAM_MEMBERS.map((member) => (
                <div 
                    key={member.id}
                    onClick={() => setActiveId(member.id)}
                    onMouseEnter={() => setActiveId(member.id)}
                    className={`relative bg-[#050505] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10 ${
                        activeId === member.id 
                        ? 'lg:flex-[3] flex-[3]' 
                        : 'lg:flex-[0.5] flex-[0.5] hover:flex-[0.7] opacity-50 hover:opacity-100 hover:border-cyan-500/30'
                    }`}
                >
               
                    {/* Background Noise / Scanline */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:100%_4px] z-10 pointer-events-none"></div>

                    {/* Image */}
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                            activeId === member.id ? 'scale-100 mix-blend-luminosity opacity-40' : 'scale-105 mix-blend-luminosity opacity-20 grayscale'
                        }`}
                    />
                    
                    {/* Cyber Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 ${
                        activeId === member.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                    {/* Content - Active State */}
                    <div className={`absolute bottom-0 left-0 w-full p-6 md:p-10 transition-all duration-500 transform z-20 ${
                        activeId === member.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 hidden lg:block'
                    }`}>
                        <div className="border-l-2 border-cyan-400 pl-6 max-w-md">
                            <div className="flex items-center gap-2 mb-2">
                                <Fingerprint className="w-4 h-4 text-cyan-400" />
                                <span className="text-cyan-400 text-[10px] font-mono uppercase tracking-widest">ID_VERIFIED</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1 font-mono tracking-tight">{member.name}</h3>
                            <p className="text-white/50 text-xs font-mono uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                                {member.role}
                            </p>
                            <div className="bg-white/5 p-4 border border-white/10 mb-6 font-mono text-sm text-white/60 leading-relaxed relative">
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400"></div>
                                &gt; {member.bio}
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all font-mono text-xs uppercase tracking-widest">
                                    <Github className="w-4 h-4" />
                                    <span>Git_Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content - Inactive State */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-20 ${
                        activeId === member.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}>
                         <h3 className="text-2xl font-bold text-white/30 whitespace-nowrap lg:-rotate-90 tracking-widest font-mono hidden lg:block">
                            {member.name.split(' ')[0]}
                         </h3>
                         <div className="lg:hidden absolute bottom-8 left-8 text-white p-4 bg-black/80 border border-white/10 rounded-none w-[calc(100%-4rem)]">
                             <h3 className="text-xl font-bold font-mono">{member.name}</h3>
                             <p className="text-cyan-400 text-xs font-mono uppercase mt-1">{member.role}</p>
                         </div>
                         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white/50 hidden lg:flex">
                             <Terminal className="w-5 h-5" />
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTeam;
