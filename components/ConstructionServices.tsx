
import React from 'react';
import { motion } from 'motion/react';
import { CONSTRUCTION_SERVICES } from '../constants';
import { ArrowUpRight, DraftingCompass, HardHat, Building, Truck, Terminal } from 'lucide-react';

const ConstructionServices: React.FC = () => {
  return (
    <section className="bg-[#080808] py-32 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-12">
            <div>
                <div className="flex items-center gap-3 text-yellow-500 mb-6">
                    <Terminal className="w-5 h-5" />
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Core_Capabilities_v2.0</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                    INDUSTRIAL <span className="text-white/20 italic">SOLUTIONS.</span>
                </h2>
            </div>
            <p className="text-white/30 max-w-sm text-right hidden md:block text-sm leading-relaxed">
                Comprehensive industrial solutions tailored for scale, precision, and long-term sustainability.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-white/5 rounded-[3rem] p-12 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                    <Building className="w-96 h-96 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                        <Building className="w-8 h-8 text-black" />
                    </div>
                    <div>
                        <h3 className="text-5xl font-black text-white mb-6 tracking-tight">General Contracting</h3>
                        <p className="text-white/40 text-xl max-w-xl mb-12 leading-relaxed">
                            We oversee the entire construction process, from initial site prep to final handover. Our project managers ensure distinct milestones are met with military precision.
                        </p>
                        <button className="flex items-center gap-4 text-yellow-500 font-bold uppercase tracking-[0.2em] text-xs group/btn">
                            Explore Service
                            <div className="w-10 h-10 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover/btn:bg-yellow-500 group-hover/btn:text-black transition-all">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-[3rem] p-10 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500"
            >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    <DraftingCompass className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Design-Build</h3>
                <p className="text-white/30 text-base leading-relaxed mb-10">Unified workflow from architect's sketch to structural reality.</p>
                <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                </div>
            </motion.div>

            {/* Wide Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 bg-white/5 rounded-[3rem] p-10 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500"
            >
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Logistics</h3>
                <p className="text-white/30 text-base leading-relaxed">Global supply chain management and heavy tonnage mobilization.</p>
            </motion.div>

             {/* Wide Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-yellow-500 rounded-[3rem] p-10 relative group overflow-hidden flex items-center justify-between shadow-[0_20px_60px_rgba(234,179,8,0.1)]"
            >
                <div className="flex items-center gap-10">
                    <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center text-black">
                        <HardHat className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-black tracking-tight">Safety Consultancy</h3>
                        <p className="text-black/60 text-base font-medium">ISO 9001 certified audits and risk mitigation protocols.</p>
                    </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                    <ArrowUpRight className="w-6 h-6" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionServices;
