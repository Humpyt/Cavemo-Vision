
import React from 'react';
import { CONSTRUCTION_BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

const ConstructionBlog: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
             <h2 className="text-4xl font-bold text-[#111] font-[Manrope]">NEWS & <br/>INSIGHTS</h2>
             <button className="text-sm font-bold border-b border-black pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors hidden md:block">
                 View All Articles
             </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CONSTRUCTION_BLOGS.map((blog, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="h-[300px] overflow-hidden mb-6 relative">
                         <img src={blog.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" alt={blog.title} />
                         <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                             {blog.category}
                         </div>
                    </div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 block">{blog.date}</span>
                    <h3 className="text-xl font-bold text-[#111] mb-4 group-hover:text-yellow-600 transition-colors leading-tight">
                        {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#111] uppercase tracking-wide group-hover:gap-4 transition-all">
                        Read Story <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionBlog;
