import React from "react";
import {
  ArrowLeft,
  Cpu,
  Target,
  Zap,
  Globe,
  Activity,
  Rocket,
  Command,
  ArrowUpRight,
} from "lucide-react";

interface EmpowerServicesPageProps {
  onBack: () => void;
}

const EmpowerServicesPage: React.FC<EmpowerServicesPageProps> = ({
  onBack,
}) => {
  return (
    <div className="bg-[#0A1F1F] text-white min-h-screen selection:bg-teal-500 selection:text-black font-sans">
      {/* HERO */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-teal-500/10 rounded-full blur-[200px]"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-widest mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> INITIALIZE_SYNC
          </button>
          <h1 className="text-7xl md:text-[11rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12">
            NEURAL <br />{" "}
            <span className="text-transparent text-stroke-teal">SCALING.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-xl">
              Empowering enterprise logic through proprietary neural models and
              high-frequency strategic execution.
            </p>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Activity className="w-8 h-8 text-teal-400" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Algorithmic Growth",
              desc: "Using predictive data models to identify market voids before they exist.",
            },
            {
              title: "Neural Brand Logic",
              desc: "Self-optimizing visual systems that adapt to user sentiment in real-time.",
            },
            {
              title: "Digital Sovereignty",
              desc: "Building high-performance decentralized infrastructures for global reach.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] group hover:bg-white hover:text-black transition-all duration-700"
            >
              <span className="block font-mono text-xs text-teal-500 mb-8 uppercase tracking-widest">
                Protocol 0{i + 1}
              </span>
              <h3 className="text-4xl font-bold font-[Syne] mb-8 leading-tight">
                {s.title}
              </h3>
              <p className="text-slate-500 group-hover:text-slate-600 text-lg mb-12">
                {s.desc}
              </p>
              <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-black flex items-center justify-center transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI METRICS */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto border-t border-b border-white/10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { val: "45ms", lbl: "Avg Inference Time" },
              { val: "99.8%", lbl: "Prediction Accuracy" },
              { val: "1.2B", lbl: "Parameters Checked" },
              { val: "0.01%", lbl: "Error Threshold" },
            ].map((m, i) => (
              <div key={i} className="px-8 text-center">
                <h4 className="text-4xl md:text-6xl font-bold font-[Syne] text-teal-400 mb-2">
                  {m.val}
                </h4>
                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  {m.lbl}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEURAL MATRIX */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-teal-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Matrix Infrastructure
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-[Syne] tracking-tighter uppercase mb-6 leading-none">
              The <br /> <span className="text-slate-300">Architecture.</span>
            </h2>
            <p className="text-slate-400 max-w-lg leading-relaxed mb-12">
              We do not build software, we engineer neural pathways. Every
              deployment is a living ecosystem that learns from user
              interaction, market shifts, and computational loads.
            </p>
            <ul className="space-y-6">
              {[
                "LLM Integration & Fine-Tuning",
                "Vector Database Storage",
                "Real-time Edge Execution",
                "Zero-Trust Security Models",
              ].map((li, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sm font-mono text-slate-300 border border-white/5 bg-white/5 p-4 rounded-2xl"
                >
                  <Command className="w-5 h-5 text-teal-500" /> {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-teal-500/20 blur-[120px] rounded-full"></div>
            <div className="w-full h-full border border-white/10 rounded-[4rem] relative z-10 overflow-hidden bg-[#0A1F1F]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-teal-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-teal-500/50 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 w-16 h-16 rounded-full shadow-[0_0_50px_rgba(20,184,166,1)] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto bg-teal-600 rounded-[4rem] p-12 md:p-32 text-center text-black shadow-[0_40px_100px_-20px_rgba(20,184,166,0.5)]">
          <h2 className="text-6xl md:text-[10rem] font-bold font-[Syne] tracking-tighter leading-[0.75] mb-20 uppercase">
            Scale <br /> Your Vision.
          </h2>
          <button className="bg-black text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-white hover:text-black transition-all shadow-2xl">
            Connect Node
          </button>
        </div>
      </section>

      <footer className="py-20 text-center bg-[#050505] text-slate-800 font-bold uppercase tracking-[0.5em] text-[10px]">
        © 2025 BEXON — EMPOWER UNIT
      </footer>
      <style>{`.text-stroke-teal { -webkit-text-stroke: 1px #14b8a6; color: transparent; }`}</style>
    </div>
  );
};

export default EmpowerServicesPage;
