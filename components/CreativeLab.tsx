
import React from 'react';
import { Microscope, Activity, Cpu, Code2 } from 'lucide-react';

const CreativeLab: React.FC = () => {
  return (
    <section className="bg-[#F9F9F9] py-40 px-6 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
              
              <div>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                      <Microscope className="w-4 h-4" />
                      R&D DIVISION // V3.0
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-slate-900 font-[Syne] leading-[0.9] tracking-tighter mb-10">
                      Where <span className="italic">Science</span> meets <br /> Pure Creativity.
                  </h2>
                  <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light max-w-xl">
                      Our laboratory is a sanctuary for technological exploration. We experiment with generative systems, neural networks, and interactive physics to solve the unsolvable.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                      <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                          <Activity className="w-8 h-8 text-slate-900 mb-6" />
                          <h4 className="font-bold mb-2">Neural Design</h4>
                          <p className="text-slate-500 text-xs">Self-optimizing brand systems.</p>
                      </div>
                      <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                          <Cpu className="w-8 h-8 text-slate-900 mb-6" />
                          <h4 className="font-bold mb-2">Logic Architecture</h4>
                          <p className="text-slate-500 text-xs">Precision-built infrastructure.</p>
                      </div>
                  </div>
              </div>

              <div className="relative group">
                  {/* Elegant Clean Console */}
                  <div className="bg-white rounded-[2.5rem] p-1 shadow-2xl overflow-hidden ring-1 ring-slate-100">
                      <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-100">
                          <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Status: Connected</span>
                      </div>
                      <div className="p-10 font-mono text-xs text-slate-600 space-y-4">
                          <div className="flex gap-4">
                              <span className="text-slate-300">01</span>
                              <p className="text-slate-900 italic">// Initiating Core_Protocol.v3</p>
                          </div>
                          <div className="flex gap-4">
                              <span className="text-slate-300">02</span>
                              <p>Allocating Neural Resources [####......] 45%</p>
                          </div>
                          <div className="flex gap-4">
                              <span className="text-slate-300">03</span>
                              <p className="text-green-600">SUCCESS: Strategic alignment verified.</p>
                          </div>
                          <div className="flex gap-4 pt-4 border-t border-slate-50">
                              <span className="text-slate-300">04</span>
                              <div className="space-y-1">
                                  <div className="h-1 w-64 bg-slate-100 rounded-full overflow-hidden">
                                      <div className="h-full bg-slate-900 w-2/3 animate-slide-right"></div>
                                  </div>
                                  <p className="text-[8px] text-slate-300 uppercase">Processing Global Market Shifts...</p>
                              </div>
                          </div>
                          <div className="pt-8">
                             <div className="w-full aspect-video rounded-2xl bg-slate-50 flex items-center justify-center border border-dashed border-slate-200">
                                 <Code2 className="w-12 h-12 text-slate-200 animate-pulse" />
                             </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Floating Metric */}
                  <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-8 rounded-[2rem] shadow-2xl border border-white/10 hidden md:block">
                      <h4 className="text-4xl font-bold font-[Syne] mb-1 tracking-tighter">99.9%</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Precision Rate</p>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};

export default CreativeLab;
