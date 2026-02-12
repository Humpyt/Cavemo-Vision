
import React, { useState } from 'react';
import { Plus, Linkedin, Twitter } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const ConstructionTeam: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="bg-white py-32 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 font-[Manrope] tracking-tight leading-[0.9]">
                Master <br />
                <span className="text-yellow-600">Builders.</span>
            </h2>
            <p className="max-w-md text-slate-500 text-lg mt-6 md:mt-0 text-right">
                The engineers, architects, and project managers delivering excellence on every site.
            </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-[800px] lg:h-[600px] w-full">
            {TEAM_MEMBERS.map((member) => (
                <div 
                    key={member.id}
                    onClick={() => setActiveId(member.id)}
                    onMouseEnter={() => setActiveId(member.id)}
                    className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        activeId === member.id 
                        ? 'lg:flex-[3] flex-[3]' 
                        : 'lg:flex-[0.5] flex-[0.5] hover:flex-[0.7]'
                    }`}
                >
                    {/* Background Image */}
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 grayscale ${
                            activeId === member.id ? 'scale-100' : 'scale-150'
                        }`}
                    />
                    
                    {/* Dark Overlay */}
                    <div className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-500 ${
                        activeId === member.id ? 'opacity-20' : 'opacity-60'
                    }`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

                    {/* Content - Active State */}
                    <div className={`absolute bottom-0 left-0 w-full p-8 md:p-12 transition-all duration-500 transform ${
                        activeId === member.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 hidden lg:block'
                    }`}>
                        <div className="bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-md">
                            <span className="inline-block px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider mb-4">
                                {member.role}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2 font-[Manrope]">{member.name}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                {member.bio}
                            </p>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content - Inactive State (Vertical Text) */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        activeId === member.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}>
                         <h3 className="text-4xl font-bold text-white opacity-50 whitespace-nowrap lg:-rotate-90 tracking-widest uppercase hidden lg:block font-[Manrope]">
                            {member.name.split(' ')[0]}
                         </h3>
                         <div className="lg:hidden absolute bottom-8 left-8 text-white">
                             <h3 className="text-2xl font-bold">{member.name}</h3>
                             <p className="text-yellow-400 text-sm font-bold uppercase">{member.role}</p>
                         </div>
                         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hidden lg:flex">
                             <Plus className="w-5 h-5" />
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionTeam;
