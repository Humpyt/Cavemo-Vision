import React from 'react';
import { motion } from 'motion/react';

const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust', 
  'PostgreSQL', 'Redis', 'MongoDB', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'GCP'
];

const SoftwareTechStack: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden flex flex-col justify-center">
      <div className="text-center mb-12">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Powered by modern technologies</p>
      </div>
      
      <div className="relative flex overflow-x-hidden w-full">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          className="flex whitespace-nowrap items-center gap-16 px-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Double the array to create seamless loop */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <span 
              key={idx} 
              className="text-4xl md:text-6xl font-black text-slate-200 hover:text-teal-500 transition-colors cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareTechStack;
