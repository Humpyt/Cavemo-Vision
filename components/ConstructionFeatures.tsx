
import React from 'react';
import { Trophy, HardHat, Clock, Users } from 'lucide-react';

const ConstructionFeatures: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-[#1A1A1A] rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {[
                    { icon: Trophy, label: "Awards Won", value: "150+" },
                    { icon: HardHat, label: "Safety Score", value: "100%" },
                    { icon: Clock, label: "On-Time Delivery", value: "99%" },
                    { icon: Users, label: "Expert Engineers", value: "450+" },
                ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-start border-l border-white/10 pl-8 group hover:border-yellow-500 transition-colors duration-500">
                        <stat.icon className="w-8 h-8 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-5xl font-bold text-white mb-2 font-[Manrope]">{stat.value}</h3>
                        <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionFeatures;
