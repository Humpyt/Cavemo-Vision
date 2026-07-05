import React from "react";
import { ArrowUpRight } from "lucide-react";

const BLOGS = [
  {
    date: "28 JUL",
    title: "The Future of Corporate AI Integration",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
  },
  {
    date: "06 NOV",
    title: "Strategies for Sustainable Market Growth",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Growth",
  },
  {
    date: "24 AUG",
    title: "Managing Global Remote Engineering Teams",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    category: "Leadership",
  },
];

const CorporateBlog: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              Corporate Press
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Syne] text-slate-900 leading-tight">
              Intelligence &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Insights.
              </span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-[10px] pb-2 border-b-2 border-slate-900 hover:text-blue-600 hover:border-blue-600 transition-colors">
            View All Reports <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOGS.map((b, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative bg-slate-200">
                <img
                  src={b.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={b.title}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl">
                  <span className="block text-slate-900 font-bold text-xs uppercase tracking-widest">
                    {b.category}
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center pt-2">
                  <span className="block text-slate-900 font-bold text-2xl leading-none font-[Syne]">
                    {b.date.split(" ")[0]}
                  </span>
                  <span className="block text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">
                    {b.date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-[Syne] text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {b.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateBlog;
