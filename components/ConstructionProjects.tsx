
import React, { useState } from 'react';
import { CONSTRUCTION_PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ConstructionProjects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#111] py-32 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left: Sticky Image Preview */}
            <div className="lg:w-1/2 lg:h-[80vh] lg:sticky lg:top-10 relative rounded-[2rem] overflow-hidden order-2 lg:order-1 min-h-[400px]">
                {CONSTRUCTION_PROJECTS.map((project, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                            <span className="text-white text-sm font-bold tracking-widest uppercase">{project.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right: Project List */}
            <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
                <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-xs mb-12 block">Featured Projects</span>
                
                <div className="space-y-4">
                    {CONSTRUCTION_PROJECTS.map((project, idx) => (
                        <div 
                            key={idx}
                            onMouseEnter={() => setActiveIdx(idx)}
                            className={`group cursor-pointer border-b border-white/10 py-10 flex items-center justify-between transition-all ${
                                activeIdx === idx ? 'opacity-100 pl-4 border-yellow-500' : 'opacity-40 hover:opacity-70'
                            }`}
                        >
                            <div>
                                <h3 className={`text-4xl font-bold font-[Manrope] mb-2 ${activeIdx === idx ? 'text-white' : 'text-slate-400'}`}>
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-sm uppercase tracking-wider">{project.location}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                                activeIdx === idx ? 'bg-yellow-500 border-yellow-500 text-black rotate-45' : 'text-white'
                            }`}>
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12">
                    <button className="text-white border-b border-white pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-colors uppercase tracking-widest text-sm font-bold">
                        View Full Portfolio
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionProjects;
