import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  const [activeId, setActiveId] = useState(SOLUTIONS[0].id);

  return (
    <section className="bg-slate-950 py-0 relative">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SIDE: Sticky Visual Display */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden lg:sticky lg:top-0 order-1 lg:order-1">
          {SOLUTIONS.map((solution) => (
            <div 
                key={solution.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeId === solution.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
                {/* Image */}
                <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                    <div className="overflow-hidden">
                        <div className={`transform transition-transform duration-700 delay-100 ${activeId === solution.id ? 'translate-y-0' : 'translate-y-full'}`}>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {solution.tags.map((tag, idx) => (
                                    <span key={idx} className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm backdrop-blur-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                {solution.title}
                            </h2>
                            <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Scrollable List */}
        <div className="lg:w-1/2 bg-slate-950 px-6 py-24 md:px-16 lg:py-32 order-2 lg:order-2 flex flex-col justify-center">
            <div className="mb-16">
                <span className="text-teal-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Redefining <span className="text-slate-600">Business</span><br />
                    Through Innovation.
                </h2>
            </div>

            <div className="space-y-6">
                {SOLUTIONS.map((solution) => (
                    <div 
                        key={solution.id}
                        className={`group cursor-pointer border-b border-white/10 pb-8 transition-all duration-300 ${activeId === solution.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        onMouseEnter={() => setActiveId(solution.id)}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-6xl font-extrabold text-transparent text-stroke-dark font-[Syne] opacity-50 group-hover:text-stroke-active">
                                {solution.id}
                            </span>
                            <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${activeId === solution.id ? 'bg-teal-500 border-teal-500 text-white rotate-45' : 'text-white group-hover:bg-white/10'}`}>
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        
                        <h3 className={`text-2xl font-bold text-white mb-3 transition-colors ${activeId === solution.id ? 'text-teal-400' : ''}`}>
                            {solution.title}
                        </h3>
                        
                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === solution.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                            <div className="overflow-hidden">
                                <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                                    {solution.description}
                                </p>
                                <button className="mt-6 text-white font-bold flex items-center gap-2 group/btn hover:text-teal-400 transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;