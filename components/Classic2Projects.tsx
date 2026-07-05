import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    client: 'Stellar Dynamics',
    category: 'M&A Strategy',
    title: 'Executing a $1.2B merger across three distinct continental markets.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop',
    stats: '+45% Market Share'
  },
  {
    client: 'Nexus Financial',
    category: 'Digital Transformation',
    title: 'Modernizing legacy banking infrastructure for the decentralized era.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1500&auto=format&fit=crop',
    stats: '-32% Operational Costs'
  },
  {
    client: 'AeroLogistics',
    category: 'Global Expansion',
    title: 'Strategic entry into emerging Asian markets securing vital supply chains.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1500&auto=format&fit=crop',
    stats: '2.5x Revenue Growth'
  }
];

const Classic2Projects: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#0b1215]/20"></div>
              <p className="text-[#0b1215] font-bold tracking-[0.2em] uppercase text-xs">Featured Work</p>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.95]">
              Proven <br />outcomes.
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#0b1215] font-bold tracking-widest uppercase text-sm group">
            All Case Studies
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0b1215] group-hover:text-white transition-all ml-2">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden overflow-hidden h-[450px] relative mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-2xl transition-all duration-700">
                <img src={project.image} alt={project.client} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-[#0b1215]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                
                {/* Float tag */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold text-[#0b1215]">
                  {project.stats}
                </div>
              </div>
              <div className="flex items-start justify-between border-b border-slate-100 pb-6 group-hover:border-[#0b1215]/20 transition-colors">
                <div>
                  <p className="text-[#20A69A] font-bold uppercase tracking-wider text-xs mb-3">{project.category}</p>
                  <h3 className="text-2xl font-[Syne] font-bold text-[#0b1215] mb-2">{project.client}</h3>
                  <p className="text-slate-500 font-light leading-relaxed max-w-sm">{project.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b1215] group-hover:border-[#0b1215] group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0 mt-8">
                  <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2Projects;
