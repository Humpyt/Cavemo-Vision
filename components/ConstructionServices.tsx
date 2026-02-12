
import React from 'react';
import { CONSTRUCTION_SERVICES } from '../constants';
import { ArrowUpRight, DraftingCompass, HardHat, Building, Truck } from 'lucide-react';

const ConstructionServices: React.FC = () => {
  return (
    <section className="bg-[#0f0f0f] py-32 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-[Manrope]">
                CORE <span className="text-yellow-500">CAPABILITIES</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-right hidden md:block">
                Comprehensive industrial solutions tailored for scale and sustainability.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Card */}
            <div className="md:col-span-2 md:row-span-2 bg-[#1A1A1A] rounded-[2.5rem] p-10 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Building className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                        <Building className="w-8 h-8 text-black" />
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-4">General Contracting</h3>
                        <p className="text-slate-400 text-lg max-w-lg mb-8">
                            We oversee the entire construction process, from initial site prep to final handover. Our project managers ensure distinct milestones are met with military precision.
                        </p>
                        <button className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs border-b border-yellow-500/30 pb-1 hover:text-white transition-colors">
                            Explore Service
                        </button>
                    </div>
                </div>
            </div>

            {/* Tall Card */}
            <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all">
                <div className="w-12 h-12 bg-[#222] rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <DraftingCompass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Design-Build</h3>
                <p className="text-slate-400 text-sm mb-6">Unified workflow from architect's sketch to structural reality.</p>
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>

            {/* Wide Card */}
            <div className="md:col-span-1 bg-[#1A1A1A] rounded-[2.5rem] p-8 relative group overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all">
                 <div className="w-12 h-12 bg-[#222] rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Logistics</h3>
                <p className="text-slate-400 text-sm">Global supply chain management.</p>
            </div>

             {/* Wide Card 2 */}
            <div className="md:col-span-2 bg-yellow-500 rounded-[2.5rem] p-8 relative group overflow-hidden flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center text-black">
                        <HardHat className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-black">Safety Consultancy</h3>
                        <p className="text-black/70 text-sm">ISO 9001 certified audits.</p>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionServices;
