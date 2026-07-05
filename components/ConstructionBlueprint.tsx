import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Layers, Maximize, Compass } from 'lucide-react';

const ConstructionBlueprint: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Technical Drawing Aesthetic */}
          <div className="relative aspect-square bg-[#111] border border-white/10 rounded-3xl overflow-hidden group">
            {/* Animated Scan Line */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-px bg-yellow-500/50 z-20 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            />
            
            {/* Wireframe Image */}
            <div className="absolute inset-0 p-12 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
                alt="Blueprint" 
                className="w-full h-full object-contain mix-blend-screen invert"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Technical Labels */}
            <div className="absolute top-8 left-8 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500/50 uppercase tracking-widest">
                <Ruler className="w-3 h-3" />
                <span>Scale 1:500</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                <Layers className="w-3 h-3" />
                <span>Layer: Structural_Steel</span>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>
          </div>

          {/* Right: Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Technical Mastery</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                BEYOND THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">BLUEPRINT.</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed font-light">
                Our engineering process begins long before the first shovel hits the ground. We utilize advanced BIM modeling and 4D simulations to ensure every weld, bolt, and beam is perfectly positioned.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Maximize, title: "Precision Mapping", desc: "Millimeter-perfect terrain analysis using LIDAR." },
                { icon: Compass, title: "Strategic Orientation", desc: "Optimizing structural alignment for environmental efficiency." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionBlueprint;
