import React from "react";
import {
  ArrowLeft,
  Target,
  Diamond,
  Zap,
  Briefcase,
  Globe,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ExecutiveServicesPageProps {
  onBack: () => void;
}

const ExecutiveServicesPage: React.FC<ExecutiveServicesPageProps> = ({
  onBack,
}) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-teal-50 selection:text-teal-900 font-sans">
      {/* HERO */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-slate-50 rounded-full blur-[140px] -z-10"></div>
        <div className="max-w-[1400px] mx-auto text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold text-[10px] tracking-widest mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> DISCONNECT_BOARD
          </button>
          <h1 className="text-6xl md:text-[9rem] font-bold font-[Syne] leading-[0.8] tracking-tighter mb-12 uppercase">
            BOARDROOM <br />{" "}
            <span className="text-teal-600 italic">MASTERY.</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-20">
            A boutique strategic partnership for{" "}
            <span className="text-slate-900 font-bold italic underline decoration-teal-500 underline-offset-8">
              high-stakes transformation
            </span>{" "}
            and executive performance curation.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-4">
          {[
            { icon: Target, title: "M&A Advisory", val: "Elite Tier" },
            {
              icon: Diamond,
              title: "Brand Asset Curation",
              val: "Premium Only",
            },
            {
              icon: ShieldCheck,
              title: "High-Level Governance",
              val: "Secure Ops",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="group border-b border-slate-100 py-12 flex flex-col md:flex-row items-center justify-between transition-all hover:px-8 hover:bg-slate-50 rounded-3xl"
            >
              <div className="flex items-center gap-12">
                <span className="font-mono text-slate-200 text-4xl font-bold">
                  0{i + 1}
                </span>
                <h3 className="text-4xl font-bold font-[Syne] group-hover:translate-x-4 transition-transform uppercase">
                  {s.title}
                </h3>
              </div>
              <div className="flex items-center gap-12 mt-8 md:mt-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {s.val}
                </span>
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INNER CIRCLE */}
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto border border-slate-100 rounded-[3rem] p-16 md:p-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[100px] -z-10"></div>
          <Briefcase className="w-16 h-16 text-teal-600 mb-12" />
          <h2 className="text-4xl md:text-5xl font-bold font-[Syne] tracking-tighter uppercase mb-8">
            The Executive <br /> Network.
          </h2>
          <p className="text-slate-500 max-w-2xl text-xl leading-relaxed font-light mb-16">
            We do not operate in the public domain. Our strategies elevate
            family offices, sovereign wealth funds, and private boards through
            closed-door architectural alignment.
          </p>
          <div className="flex gap-4 flex-wrap">
            {[
              "Family Offices",
              "Private Equity",
              "Board of Directors",
              "Silent Partners",
            ].map((tag, i) => (
              <div
                key={i}
                className="px-6 py-2 border border-slate-200 bg-white rounded-full font-bold text-slate-800 uppercase tracking-widest text-[10px]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-slate-900 text-white p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200')] mix-blend-overlay opacity-20 grayscale object-cover pointer-events-none"></div>
            <ShieldCheck className="w-12 h-12 text-teal-500 mb-8" />
            <h3 className="text-4xl font-bold font-[Syne] uppercase mb-4">
              Total Discretion.
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Absolute operational secrecy. NDAs are embedded in our core
              framework before a single strategy is discussed.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold font-[Syne] tracking-tighter uppercase mb-8">
              Secure <br /> Protocols.
            </h2>
            <ul className="space-y-8 max-w-md">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0"></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                    Air-gapped Infrastructure
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Off-grid systems for absolute sovereign data protection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-teal-500 shrink-0"></div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                    Vetted Network
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Every partner undergoes level 3 clearance before
                    on-boarding.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-3 gap-20">
          <div className="text-center">
            <h4 className="text-7xl font-bold font-[Syne] mb-4">$2.4B</h4>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Market Cap Impact
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-7xl font-bold font-[Syne] mb-4">15+</h4>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Years Portfolio Tenure
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-7xl font-bold font-[Syne] mb-4">100%</h4>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Discretion Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-6xl md:text-[8rem] font-bold font-[Syne] tracking-tighter leading-none mb-12 uppercase">
            Join the <br /> Circle.
          </h2>
          <button className="bg-slate-900 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-teal-600 transition-all shadow-2xl">
            Initialize Partnership
          </button>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-slate-100 text-slate-300 font-bold uppercase tracking-[0.5em] text-[10px]">
        © 2025 BEXON — EXECUTIVE UNIT
      </footer>
    </div>
  );
};

export default ExecutiveServicesPage;
