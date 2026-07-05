import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const BLOGS = [
  {
    date: "28 JUL",
    title: "The Future of Brutalist Web Design",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    date: "06 NOV",
    title: "Interactive Typography in 2026",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    date: "24 AUG",
    title: "Sensory Feedback in Digital Spaces",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2015&auto=format&fit=crop",
  },
];

const CreativeBlog: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden text-white border-t border-white/10">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-pink-500 font-extrabold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> The Journal
            </span>
            <h2 className="text-4xl md:text-7xl font-bold font-[Syne] tracking-tighter leading-[0.9]">
              Culture & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Chaos.
              </span>
            </h2>
          </div>
          <button className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
            <ArrowRight className="w-6 h-6 group-hover:-rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 space-y-8">
          {BLOGS.map((b, i) => (
            <div
              key={i}
              className="group cursor-pointer flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-8"
            >
              <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden relative bg-slate-900 shrink-0">
                <img
                  src={b.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  alt={b.title}
                />
              </div>
              <div className="w-full">
                <span className="block text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                  {b.date}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold font-[Syne] tracking-tighter leading-none group-hover:text-purple-400 transition-colors mb-6">
                  {b.title}
                </h3>
                <button className="text-white/60 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                  Read Article{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeBlog;
