import React from "react";
import { ArrowUpRight, Play, Globe, ChevronRight } from "lucide-react";

const CorporateHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>

      {/* Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1600px] w-full mx-auto px-6 relative z-10 flex flex-col items-center mt-20">
        {/* Top Badge */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/80">
              Corporate Intelligence 2026
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div
          className="text-center max-w-5xl mx-auto animate-fade-in-up mb-12"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold font-[Manrope] text-white leading-[0.9] tracking-tighter">
            Architecting <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                Global Dominance.
              </span>
            </span>
          </h1>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl text-center leading-relaxed font-light mb-16 mx-auto">
            We engineer strategic paradigms for Fortune 500 enterprises, merging
            predictive data models with elite operational execution.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up mb-24"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <button className="relative group px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-3">
              View Capabilities{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-blue-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 delay-75"></div>
          </button>

          <button className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all backdrop-blur-sm">
              <Play className="w-4 h-4 fill-current ml-1" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              Watch Showreel
            </span>
          </button>
        </div>

        {/* Bottom Grid / Stats */}
        <div
          className="w-full grid md:grid-cols-3 gap-6 animate-fade-in-up border-t border-white/10 pt-12 mt-auto"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          {[
            {
              value: "$4.2B",
              label: "Capital Directed",
              desc: "Across global markets",
            },
            {
              value: "142+",
              label: "Enterprise Clients",
              desc: "Fortune 500 scale",
            },
            {
              value: "99.4%",
              label: "Execution Rate",
              desc: "Precision delivery",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default"
            >
              <h4 className="text-4xl lg:text-5xl font-bold font-[Manrope] text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </h4>
              <p className="text-sm font-bold text-white/50 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-xs text-white/30 mt-2 font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateHero;
