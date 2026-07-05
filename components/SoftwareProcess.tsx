import React from 'react';
import { motion } from 'motion/react';
import { Network, Server, Fingerprint, Lock } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: Network,
    title: 'Topological Mapping',
    desc: 'Deep analysis of requirements. We blueprint the entire system state, defining data models, microservices boundaries, and edge routing.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20'
  },
  {
    icon: Server,
    title: 'Containerization',
    desc: 'Iterative build cycles. Features are packaged into immutable Docker images and deployed across ephemeral staging clusters.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    icon: Fingerprint,
    title: 'Cryptographic QA',
    desc: 'Penetration testing, fuzzing, and automated state-machine validation. We break our own software before it touches production.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    icon: Lock,
    title: 'Production Lock',
    desc: 'Zero-downtime blue/green deployment. The system goes live globally with automated scaling policies and anomaly detection.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20'
  }
];

const SoftwareProcess: React.FC = () => {
  return (
    <section className="py-32 bg-[#020202] relative border-t border-white/5 overflow-hidden">
      {/* Background Matrix */}
       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-left mb-20 max-w-2xl">
          <div className="inline-block border border-white/10 px-3 py-1 mb-8">
              <span className="text-purple-400 font-mono text-[10px] uppercase tracking-widest">Execute / Pipeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-[Syne]">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Protocol</span>
          </h2>
          <p className="text-white/50 text-lg font-mono">
            Our build pipeline is deterministic. From topological mapping to production lock, every step is automated, secure, and infinitely reproducible.
          </p>
        </div>

        <div className="relative">
          {/* Cyber Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent hidden lg:block overflow-hidden">
              <div className="w-1/4 h-full bg-white blur-[2px] animate-[slide_3s_linear_infinite]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10 pt-4">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Node */}
                <div className={`w-16 h-16 backdrop-blur-md border flex items-center justify-center mb-8 mx-0 shadow-lg ${step.bg} ${step.color} relative z-20 group-hover:-translate-y-2 transition-transform duration-300`}>
                  <step.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="text-left">
                  <div className="text-xs font-mono text-white/30 mb-3 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-current transition-colors"></span>
                      SEQ_{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-mono">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed font-mono text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProcess;
