import React from 'react';
import { Target, Lightbulb, Compass } from 'lucide-react';

const FEATURES = [
  {
    title: 'Strategic Alignment',
    description: 'We calibrate your organization\'s core operations with shifting global economies, establishing distinctive resilient frameworks.',
    icon: Target,
  },
  {
    title: 'Market Dominance',
    description: 'Leveraging data-driven insights and aggressive positioning to capture and sustain majority market share.',
    icon: Lightbulb,
  },
  {
    title: 'Capital Velocity',
    description: 'Optimizing resource allocation and operational cadences to accelerate high-yield project completions.',
    icon: Compass,
  }
];

const Classic2Features: React.FC = () => {
  return (
    <section className="bg-[#0b1215] py-32 px-4 md:px-8 lg:px-12 text-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter mb-16 md:mb-32 border-b border-white/10 pb-12 leading-[0.9]">
          The Blueprint.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group relative">
              {/* Huge background number */}
              <span className="text-[#20A69A] text-[10rem] lg:text-[14rem] font-black opacity-[0.03] absolute -top-16 lg:-top-24 -left-8 lg:-left-12 group-hover:-translate-y-4 group-hover:opacity-10 transition-all duration-700 pointer-events-none select-none drop-shadow-2xl">
                0{idx + 1}
              </span>
              
              <div className="relative z-10 pt-12 border-t border-white/10 group-hover:border-[#20A69A]/50 transition-colors duration-500">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#20A69A] shadow-xl">
                  <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-[Syne] font-bold mb-6 tracking-tighter group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-lg max-w-sm group-hover:text-white/80 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2Features;
