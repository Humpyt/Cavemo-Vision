
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CreativeServices: React.FC = () => {
    return (
        <section className="bg-black py-32 md:py-48 px-4 border-t border-white/20">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase mb-12">Core Capabilities</h2>
                
                <div className="border-t-[4px] border-white">
                    {[
                        { 
                            id: '01', 
                            title: 'Brand Archetypes', 
                            desc: 'We construct fundamental brand narratives that bypass logic and speak directly to cultural instincts.',
                            tags: ['Strategy', 'Identity', 'Positioning']
                        },
                        { 
                            id: '02', 
                            title: 'Digital Brutalism', 
                            desc: 'Raw, unpolished, and highly performant web architectures that command attention.',
                            tags: ['Web Design', 'UI/UX', 'Interaction']
                        },
                        { 
                            id: '03', 
                            title: 'Creative Coding', 
                            desc: 'WebGL, Three.js, and generative algorithms to break the boundaries of the traditional DOM.',
                            tags: ['React', 'WebGL', 'Shaders']
                        },
                    ].map((service) => (
                        <div key={service.id} className="group border-b-[4px] border-white/20 hover:border-[#CCFF00] transition-colors py-12 md:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between cursor-pointer">
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-12 lg:w-1/2">
                                <span className="text-6xl md:text-8xl font-black font-mono text-white/20 group-hover:text-[#CCFF00] transition-colors">
                                    {service.id}
                                </span>
                                <h3 className="text-4xl md:text-6xl font-black text-white font-[Syne] uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col md:flex-row md:items-center justify-between pl-0 lg:pl-20 border-white/20 group-hover:border-[#CCFF00] transition-colors">
                                <div className="max-w-sm mb-8 md:mb-0">
                                    <p className="text-white/60 font-medium leading-relaxed mb-4">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-[#CCFF00] text-xs font-mono border border-[#CCFF00]/30 px-2 py-1 bg-[#CCFF00]/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-16 h-16 rounded-full border-[2px] border-white/20 flex flex-shrink-0 items-center justify-center text-white group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all transform group-hover:rotate-[-45deg]">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeServices;
