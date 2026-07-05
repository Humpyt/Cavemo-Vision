
import React from 'react';
import { motion } from 'motion/react';
import { Trophy, HardHat, Clock, Users, Zap } from 'lucide-react';

const ConstructionFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { icon: Trophy, label: "Awards Won", value: "150+", color: "text-yellow-500" },
                { icon: HardHat, label: "Safety Score", value: "100%", color: "text-emerald-500" },
                { icon: Clock, label: "On-Time Delivery", value: "99%", color: "text-blue-500" },
                { icon: Users, label: "Expert Engineers", value: "450+", color: "text-purple-500" },
            ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#111] border border-white/5 p-10 rounded-3xl group hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-all"></div>
                    
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} mb-8 group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-5xl font-black text-white mb-3 tabular-nums tracking-tighter">
                        {stat.value}
                    </h3>
                    <p className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-bold">
                        {stat.label}
                    </p>
                    
                    {/* Technical Detail */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-yellow-500" />
                            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Live Data</span>
                        </div>
                        <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              animate={{ x: [-48, 48] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="h-full w-full bg-yellow-500/50"
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionFeatures;
