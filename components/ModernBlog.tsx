
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BLOGS = [
  { date: '28 JUL', title: 'The Future of Corporate AI Integration', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
  { date: '06 NOV', title: 'Strategies for Sustainable Market Growth', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
  { date: '24 AUG', title: 'Why Minimalist UX Drives Better Conversions', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
];

const ModernBlog: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
              <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Read Blogs</span>
              <h2 className="text-4xl md:text-5xl font-bold font-[Syne] text-slate-900">
                  Strategies and Insights.
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOGS.map((b, i) => (
                  <div key={i} className="group cursor-pointer">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                          <img src={b.img} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" alt={b.title} />
                          <div className="absolute top-4 left-4 bg-white p-3 rounded-xl text-center shadow-lg">
                              <span className="block text-slate-900 font-bold text-lg leading-none">{b.date.split(' ')[0]}</span>
                              <span className="block text-slate-500 font-bold text-[10px] uppercase">{b.date.split(' ')[1]}</span>
                          </div>
                      </div>
                      <h3 className="text-2xl font-bold font-[Syne] text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">
                          {b.title}
                      </h3>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default ModernBlog;
