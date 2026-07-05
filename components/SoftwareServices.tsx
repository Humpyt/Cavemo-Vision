import React from 'react';
import { motion } from 'motion/react';
import { Layers, CloudCog, Cpu, Database, Binary, Key, Plus } from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    icon: Layers,
    title: 'Frontend Architecture',
    desc: 'React, Next.js, and WebGL architectures built for extreme performance and instantaneous rendering.',
    color: 'group-hover:text-cyan-400'
  },
  {
    id: "02",
    icon: CloudCog,
    title: 'Cloud Orchestration',
    desc: 'Multi-cloud deployments using Terraform, Docker, and Kubernetes for self-healing infrastructure.',
    color: 'group-hover:text-purple-400'
  },
  {
    id: "03",
    icon: Cpu,
    title: 'AI Integration',
    desc: 'Embedding localized LLMs and embedding models into production environments with zero latency.',
    color: 'group-hover:text-emerald-400'
  },
  {
    id: "04",
    icon: Database,
    title: 'Data Pipelines',
    desc: 'Streaming event architectures using Kafka and high-throughput vector databases.',
    color: 'group-hover:text-blue-400'
  },
  {
    id: "05",
    icon: Binary,
    title: 'Microservices',
    desc: 'Decoupled, extremely fast backend logic written in Go, Rust, and Node.js primitives.',
    color: 'group-hover:text-pink-400'
  },
  {
    id: "06",
    icon: Key,
    title: 'Auth & Security',
    desc: 'Deep cryptographic hashing, zero-trust RBAC, and SOC2 compliant architectures.',
    color: 'group-hover:text-teal-400'
  },
];

const SoftwareServices: React.FC = () => {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-block border border-white/10 px-3 py-1 mb-8">
                  <span className="text-blue-400 font-mono text-[10px] uppercase tracking-widest">Core / Capabilities</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-[Syne]">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Modules</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm font-mono max-w-sm">
              Modular computing components that snap together to form impenetrable software stacks.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] p-8 lg:p-10 group relative overflow-hidden transition-colors hover:bg-[#0a0a0a]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-5 h-5 text-white/30" />
              </div>

              <div className="flex justify-between items-start mb-12">
                  <div className="text-white/30 group-hover:text-white transition-colors duration-300">
                    <service.icon strokeWidth={1} className={`w-10 h-10 ${service.color}`} />
                  </div>
                  <span className="text-2xl font-mono text-white/10 group-hover:text-white/20 transition-colors duration-300 select-none">
                    {service.id}
                  </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-mono tracking-tight">{service.title}</h3>
              <p className="text-white/40 font-mono text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareServices;
