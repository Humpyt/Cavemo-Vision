
import React from 'react';
import { Box, Layers, Zap, Hexagon } from 'lucide-react';

const CreativeServices: React.FC = () => {
  return (
    <section className="bg-[#050505] py-32 px-4 border-t border-white/5">
       <div className="max-w-[1400px] mx-auto">
           <div className="mb-20">
               <h2 className="text-4xl md:text-6xl font-bold text-white font-[Syne]">
                   CAPABILITIES
               </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               
               {/* Large Card 1 */}
               <div className="md:col-span-2 bg-[#0F0F0F] rounded-3xl p-10 border border-white/5 hover:border-teal-500/50 transition-colors group min-h-[400px] relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/20 transition-colors"></div>
                   <div>
                       <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-teal-400">
                           <Box className="w-6 h-6" />
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-4">Digital Ecosystems</h3>
                       <p className="text-slate-400 max-w-md">We architect full-scale digital environments. From complex web apps to immersive 3D experiences, we build the infrastructure of your brand's digital existence.</p>
                   </div>
                   <div className="flex gap-2 mt-8">
                       {['React', 'WebGL', 'Node.js', 'AWS'].map(tag => (
                           <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">{tag}</span>
                       ))}
                   </div>
               </div>

               {/* Tall Card */}
               <div className="md:row-span-2 bg-[#0F0F0F] rounded-3xl p-10 border border-white/5 hover:border-purple-500/50 transition-colors group relative overflow-hidden flex flex-col">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                       <Zap className="w-6 h-6" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Brand Velocity</h3>
                   <p className="text-slate-400 mb-8">Speed is a feature. We optimize not just for load times, but for market impact.</p>
                   
                   <div className="mt-auto space-y-4">
                       {[1,2,3].map((_, i) => (
                           <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-purple-500 w-2/3 animate-pulse" style={{width: `${80 + (i*10)}%`}}></div>
                           </div>
                       ))}
                   </div>
               </div>

               {/* Standard Card 2 */}
               <div className="bg-[#0F0F0F] rounded-3xl p-10 border border-white/5 hover:border-pink-500/50 transition-colors group">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-pink-400">
                       <Layers className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">UI/UX Design</h3>
                   <p className="text-slate-400 text-sm">Interfaces that feel inevitable. Intuitive, fluid, and beautiful.</p>
               </div>

               {/* Standard Card 3 */}
               <div className="bg-[#0F0F0F] rounded-3xl p-10 border border-white/5 hover:border-blue-500/50 transition-colors group">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                       <Hexagon className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">3D & Motion</h3>
                   <p className="text-slate-400 text-sm">Adding depth to the flat web. WebGL, Three.js, and kinetic typography.</p>
               </div>

           </div>
       </div>
    </section>
  );
};

export default CreativeServices;
