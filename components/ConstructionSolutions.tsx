
import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CONSTRUCTION_SERVICES } from '../constants';

const ConstructionSolutions: React.FC = () => {
  const [activeId, setActiveId] = useState(CONSTRUCTION_SERVICES[0].id);

  return (
    <section className="bg-slate-950 py-0 relative">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SIDE: Sticky Visual Display */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden lg:sticky lg:top-0 order-1 lg:order-1">
          {CONSTRUCTION_SERVICES.map((service) => (
            <div 
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeId === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
                {/* Image */}
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                    <div className="overflow-hidden">
                        <div className={`transform transition-transform duration-700 delay-100 ${activeId === service.id ? 'translate-y-0' : 'translate-y-full'}`}>
                            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 text-black">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-[Manrope]">
                                {service.title}
                            </h2>
                            <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Scrollable List */}
        <div className="lg:w-1/2 bg-slate-950 px-6 py-24 md:px-16 lg:py-32 order-2 lg:order-2 flex flex-col justify-center">
            <div className="mb-16">
                <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[Manrope]">
                    Building <span className="text-slate-600">Skylines</span><br />
                    Through Precision.
                </h2>
            </div>

            <div className="space-y-6">
                {CONSTRUCTION_SERVICES.map((service) => (
                    <div 
                        key={service.id}
                        className={`group cursor-pointer border-b border-white/10 pb-8 transition-all duration-300 ${activeId === service.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        onMouseEnter={() => setActiveId(service.id)}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-6xl font-extrabold text-transparent text-stroke-dark font-[Manrope] opacity-50 group-hover:text-stroke-active">
                                {service.id}
                            </span>
                            <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${activeId === service.id ? 'bg-yellow-500 border-yellow-500 text-black rotate-45' : 'text-white group-hover:bg-white/10'}`}>
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                        
                        <h3 className={`text-2xl font-bold text-white mb-3 transition-colors font-[Manrope] ${activeId === service.id ? 'text-yellow-400' : ''}`}>
                            {service.title}
                        </h3>
                        
                        <div className={`grid transition-all duration-500 ease-in-out ${activeId === service.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                            <div className="overflow-hidden">
                                <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                                    {service.description}
                                </p>
                                <button className="mt-6 text-white font-bold flex items-center gap-2 group/btn hover:text-yellow-400 transition-colors">
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

export default ConstructionSolutions;
