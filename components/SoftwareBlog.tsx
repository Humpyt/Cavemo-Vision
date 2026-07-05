import React from "react";
import { Terminal, ArrowUpRight, Code } from "lucide-react";

const BLOGS = [
  {
    date: "2026-07-28",
    title: "Migrating Core Infrastructure to Edge Functions",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    date: "2026-11-06",
    title: "Type-Safe Routing in Distributed Micro-Frontends",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
  },
  {
    date: "2026-08-24",
    title: "Optimizing Node Scaling for High-Concurrency",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2015&auto=format&fit=crop",
  },
];

const SoftwareBlog: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 border-t border-cyan-500/10 text-white font-mono">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <div className="inline-block border border-cyan-500/30 px-3 py-1 mb-8 bg-cyan-500/5 backdrop-blur-sm">
            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
              <Terminal className="w-3 h-3" /> /var/log/engineering
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Journal.
            </span>
          </h2>
          <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
            Deep dives into systems architecture, deployment orchestrations, and
            algorithmic design patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((b, i) => (
            <div
              key={i}
              className="group cursor-pointer flex flex-col bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative bg-black overflow-hidden">
                <img
                  src={b.img}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity"
                  alt={b.title}
                />
                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-1 border border-white/10">
                  <span className="block text-cyan-400 font-mono text-[10px]">
                    {b.date}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest mb-4">
                  <Code className="w-3 h-3" /> Engineering
                </div>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors mb-6">
                  {b.title}
                </h3>
                <button className="mt-auto text-white/50 text-[10px] uppercase tracking-widest flex items-center justify-between group-hover:text-white transition-colors border-t border-white/10 pt-4">
                  Read Documentation <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareBlog;
