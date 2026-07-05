import React from "react";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Box,
  Layers,
  Globe,
  ArrowUpRight,
  MousePointer2,
  PlayCircle,
  Eye,
  Command,
} from "lucide-react";

interface CreativeServicesPageProps {
  onBack: () => void;
}

const CreativeServicesPage: React.FC<CreativeServicesPageProps> = ({
  onBack,
}) => {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-teal-500 selection:text-black pt-32 pb-20 font-sans">
      {/* 1. KINETIC HERO */}
      <section className="px-6 mb-40 relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[180px]"></div>
        <div className="max-w-[1400px] mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase font-mono text-[10px] mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Revert_to_Root
          </button>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10">
                <Command className="w-3 h-3 text-teal-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
                  Anomaly Lab v3.0
                </span>
              </div>
              <h1 className="text-7xl md:text-[12rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12 uppercase">
                IDENTITY <br />{" "}
                <span className="text-transparent text-stroke-dark hover:text-white transition-all duration-700">
                  FLUX.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-slate-400 text-2xl font-light italic leading-relaxed">
                "Normal is invisible. We engineer the anomaly in every brand
                interaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO LAB */}
      <section className="px-6 mb-40">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#0A0A0B] border border-white/5 p-16 rounded-[4rem] hover:border-teal-500/50 transition-all duration-700 flex flex-col justify-between group h-[600px]">
            <div className="flex justify-between items-start">
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-teal-400">
                <Layers className="w-10 h-10" />
              </div>
              <span className="font-mono text-xs text-slate-700">
                EXPERIMENT_012
              </span>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-[Syne] mb-6 uppercase tracking-tighter">
                Digital Ecosystems.
              </h3>
              <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
                Full-scale web environments using WebGL, Three.js and kinetic
                typography to command absolute attention.
              </p>
              <button className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-teal-400">
                Launch Protocol <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6">
            <div className="bg-teal-500 text-black p-12 rounded-[4rem] flex flex-col justify-between group h-[288px] cursor-pointer hover:bg-white transition-colors duration-700">
              <Zap className="w-12 h-12 mb-8 transition-transform group-hover:rotate-12" />
              <h3 className="text-3xl font-bold font-[Syne] leading-none uppercase tracking-tighter">
                BRAND <br /> VELOCITY.
              </h3>
            </div>
            <div className="bg-[#0A0A0B] border border-white/5 p-12 rounded-[4rem] flex flex-col justify-between h-[288px] group hover:border-purple-500 transition-colors">
              <Box className="w-12 h-12 text-purple-400" />
              <h3 className="text-3xl font-bold font-[Syne] leading-none uppercase tracking-tighter">
                3D_MOTION <br /> DESIGN.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWREEL SECTION */}
      <section className="py-40 bg-white text-slate-900 rounded-[5rem] mb-40">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold font-[Syne] tracking-tighter uppercase mb-12 leading-none">
              THE <br /> REEL.
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12">
              Visual proof of our technical mastery. High-frequency visuals
              distilled into pure energy.
            </p>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">
              <li className="flex items-center gap-4 text-teal-600">
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>{" "}
                GEN_IDENTITY v4
              </li>
              <li className="flex items-center gap-4 opacity-30">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>{" "}
                THREE.JS SYSTEMS
              </li>
              <li className="flex items-center gap-4 opacity-30">
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>{" "}
                KINETIC DATA FLOW
              </li>
            </ul>
          </div>
          <div className="relative aspect-square bg-slate-900 rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200"
              className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-[2s]"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-32 h-32 text-white/20 group-hover:text-teal-500 transition-all duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. LAB PROCESS */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-[Syne] tracking-tighter uppercase mb-6">
            THE <span className="text-teal-500">FORMULA.</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl mb-20 line-clamp-3">
            How we manufacture digital anomalies and command absolute user
            attention.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                id: "01",
                title: "DISSECTION",
                desc: "Breaking down core brand assumptions.",
              },
              {
                id: "02",
                title: "WIREFRAME",
                desc: "Establishing skeletal interaction pathways.",
              },
              {
                id: "03",
                title: "AESTHETIC INJECTION",
                desc: "Applying high-contrast brutalist logic.",
              },
              {
                id: "04",
                title: "KINETIC RENDER",
                desc: "Deploying motion and WebGL shaders.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-colors group"
              >
                <div className="text-teal-500 font-mono font-bold text-xs mb-8">
                  {step.id}
                </div>
                <h4 className="text-xl font-bold font-[Syne] uppercase mb-4 text-white group-hover:text-teal-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.8. TECH CORE */}
      <section className="px-6 pb-40">
        <div className="max-w-[1400px] mx-auto bg-slate-900 border border-white/5 rounded-[4rem] p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[Syne] uppercase tracking-tighter mb-6">
              SYSTEM <br />{" "}
              <span className="text-transparent text-stroke-dark">
                ARCHITECTURE.
              </span>
            </h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-auto">
              We don't rely on templates. Our creative output is powered by
              cutting-edge display technologies.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 relative z-10 justify-end md:w-1/2">
            {[
              "WebGL / Three.js",
              "React Framework",
              "GSAP Animation",
              "Framer Motion",
              "Tailwind CSS",
              "GLSL Shaders",
            ].map((tech, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white font-mono text-xs uppercase tracking-widest hover:border-teal-500 hover:text-teal-400 transition-colors cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL IGNITION */}
      <section className="py-40 text-center">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-[160px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-6xl md:text-[14rem] font-bold font-[Syne] tracking-tighter leading-none mb-20 relative z-10">
            IGNITE.
          </h2>
          <button className="bg-white text-black px-16 py-8 rounded-full font-bold text-2xl flex items-center gap-4 mx-auto hover:bg-teal-500 transition-all shadow-2xl relative z-10 group/btn">
            Initialize Project{" "}
            <MousePointer2 className="w-8 h-8 group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <footer className="py-20 text-center bg-black text-slate-800 font-bold uppercase tracking-[0.5em] text-[10px]">
        © 2025 BEXON — STUDIO UNIT
      </footer>
      <style>{`.text-stroke-dark { -webkit-text-stroke: 1px rgba(255,255,255,0.15); color: transparent; }`}</style>
    </div>
  );
};

export default CreativeServicesPage;
