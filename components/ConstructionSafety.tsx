import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, HardHat, HeartPulse, Construction, AlertTriangle } from 'lucide-react';

const ConstructionSafety: React.FC = () => {
  return (
    <section className="py-32 bg-yellow-500 relative overflow-hidden">
      {/* Industrial Warning Stripes */}
      <div className="absolute top-0 left-0 w-full h-8 bg-black bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#facc15_20px,#facc15_40px)] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-black bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#facc15_20px,#facc15_40px)] opacity-20"></div>
      
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Bold Typography */}
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-black text-yellow-500 rounded-lg mb-8">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Zero Harm Policy</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter mb-10">
                SAFETY IS <br/>
                <span className="text-white">NON-NEGOTIABLE.</span>
              </h2>
              <p className="text-black/70 text-xl leading-relaxed font-medium max-w-xl">
                We believe that every worker should return home exactly as they arrived. Our safety protocols are the most rigorous in the industrial sector.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                    Safety Report 2024
                </button>
                <button className="px-10 py-5 border-2 border-black text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-all">
                    Our Certifications
                </button>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: HardHat, title: "PPE Protocol", desc: "Mandatory smart-gear integration for all personnel." },
              { icon: HeartPulse, title: "Health Monitoring", desc: "Real-time vitals tracking for high-risk operations." },
              { icon: Construction, title: "Site Security", desc: "AI-driven hazard detection and automated alerts." },
              { icon: AlertTriangle, title: "Risk Mitigation", desc: "Predictive modeling to identify potential site failures." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black rounded-[2.5rem] text-white group hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center text-black mb-8 group-hover:rotate-12 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-black/5 pointer-events-none select-none">
        SAFETY
      </div>
    </section>
  );
};

export default ConstructionSafety;
