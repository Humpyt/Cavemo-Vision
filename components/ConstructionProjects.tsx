
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONSTRUCTION_PROJECTS } from '../constants';
import { ArrowUpRight, MapPin, Calendar, Layers } from 'lucide-react';

const ConstructionProjects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-[#080808] py-32 px-4 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-yellow-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Left: Project List with Technical Details */}
            <div className="lg:w-1/2 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Global Portfolio</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
                    LANDMARK <br/>
                    <span className="text-white/20 italic">STRUCTURES.</span>
                  </h2>
                </motion.div>
                
                <div className="space-y-2">
                    {CONSTRUCTION_PROJECTS.map((project, idx) => (
                        <motion.div 
                            key={idx}
                            onMouseEnter={() => setActiveIdx(idx)}
                            className={`group cursor-pointer p-8 rounded-3xl transition-all duration-500 border ${
                                activeIdx === idx 
                                ? 'bg-white/5 border-white/10 shadow-2xl' 
                                : 'border-transparent opacity-40 hover:opacity-70'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-8">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className={`font-mono text-xs ${activeIdx === idx ? 'text-yellow-500' : 'text-white/20'}`}>
                                            0{idx + 1}
                                        </span>
                                        <div className={`h-px w-8 transition-all ${activeIdx === idx ? 'bg-yellow-500 w-16' : 'bg-white/10'}`}></div>
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-colors ${
                                        activeIdx === idx ? 'text-white' : 'text-white/60'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    
                                    <AnimatePresence mode="wait">
                                      {activeIdx === idx && (
                                        <motion.div 
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="flex flex-wrap gap-6 overflow-hidden"
                                        >
                                          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                                            <MapPin className="w-3 h-3 text-yellow-500" />
                                            {project.location}
                                          </div>
                                          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                                            <Layers className="w-3 h-3 text-yellow-500" />
                                            {project.category}
                                          </div>
                                          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                                            <Calendar className="w-3 h-3 text-yellow-500" />
                                            2024 Completion
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                </div>
                                <div className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${
                                    activeIdx === idx ? 'bg-yellow-500 border-yellow-500 text-black rotate-45' : 'text-white/20 group-hover:text-white'
                                }`}>
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right: Immersive Image Preview */}
            <div className="lg:w-1/2 lg:h-[85vh] lg:sticky lg:top-10 relative rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5">
                <AnimatePresence mode="wait">
                  <motion.div 
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                  >
                      <img 
                          src={CONSTRUCTION_PROJECTS[activeIdx].image} 
                          alt={CONSTRUCTION_PROJECTS[activeIdx].title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
                      
                      {/* Technical Overlay */}
                      <div className="absolute top-12 right-12 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                          <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-2">System_Status</p>
                          <p className="text-white font-bold text-sm">Rendering: {CONSTRUCTION_PROJECTS[activeIdx].title}</p>
                          <div className="mt-4 flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                  <div key={i} className="h-1 w-4 bg-yellow-500/20 rounded-full overflow-hidden">
                                      <motion.div 
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        className="h-full w-full bg-yellow-500"
                                      />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionProjects;
