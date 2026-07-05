
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';

const ConstructionAbout: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] pointer-events-none select-none -mr-20 -mt-20">
          LEGACY
        </div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
            
            {/* Left: Sticky Heading */}
            <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-8 block">Our Manifesto</span>
                      <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10">
                        WE BUILD <br/> THE WORLD <br/> <span className="text-white/20 italic">YOU LIVE IN.</span>
                      </h2>
                      <button className="group flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] mt-16 text-white hover:text-yellow-500 transition-all">
                          Explore Our Story 
                          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                              <ArrowRight className="w-5 h-5" />
                          </div>
                      </button>
                    </motion.div>
                </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="lg:col-span-7 space-y-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                    <Quote className="absolute -top-12 -left-12 w-24 h-24 text-white/[0.03] rotate-12" />
                    <p className="text-3xl md:text-4xl text-white/80 leading-snug font-light">
                      "Construction is not just about concrete and steel. It’s about <span className="font-bold text-white border-b-4 border-yellow-500">vision</span>. It’s about taking a sketch on a napkin and turning it into a skyline-defining monument."
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative rounded-[2.5rem] overflow-hidden aspect-square group"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19480f5?q=80&w=2070&auto=format&fit=crop" 
                            alt="Site Work" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white/5 p-12 rounded-[2.5rem] border border-white/5 flex flex-col justify-center group hover:border-white/10 transition-all"
                    >
                        <h4 className="font-bold text-2xl text-white mb-6 tracking-tight">Precision Engineering</h4>
                        <p className="text-white/40 text-base leading-relaxed">
                            We utilize the latest BIM technology to model every bolt before it's placed. Errors are eliminated in the cloud, not on the ground.
                        </p>
                    </motion.div>
                </div>

                <div className="h-px w-full bg-white/5"></div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row justify-between items-center gap-10 bg-white/5 p-10 rounded-[2.5rem] border border-white/5"
                >
                    <div className="flex items-center gap-8">
                        <div className="relative">
                          <img src="https://i.pravatar.cc/150?img=11" alt="CEO" className="w-24 h-24 rounded-full border-2 border-yellow-500 p-1" />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">James Anderson</h3>
                            <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-bold">Founder & CEO</p>
                        </div>
                    </div>
                    <div className="h-px w-12 bg-white/10 hidden sm:block"></div>
                    <div className="text-right italic text-white/20 font-serif text-xl">
                      "Building legacies since 1985"
                    </div>
                </motion.div>
            </div>

        </div>
    </section>
  );
};

export default ConstructionAbout;
