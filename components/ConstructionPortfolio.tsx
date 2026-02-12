
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONSTRUCTION_PROJECTS } from '../constants';

interface ProjectProps {
  image: string;
  category: string;
  title: string;
  className?: string;
  hasArrow?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ image, category, title, className, hasArrow }) => (
  <div className={`group relative rounded-[2rem] overflow-hidden cursor-pointer ${className}`}>
    {/* Background Image with Zoom Effect */}
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
    />
    
    {/* Dark Gradient Overlay for Contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>

    {/* Floating Glass Card Content */}
    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex items-end justify-between group-hover:bg-yellow-500 transition-colors duration-300">
        <div>
          <span className="block text-yellow-400 group-hover:text-black font-bold text-xs tracking-[0.2em] uppercase mb-2">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-black leading-tight font-[Manrope]">
            {title}
          </h3>
        </div>
        
        {hasArrow && (
           <div className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center text-slate-900 transform group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
           </div>
        )}
      </div>
    </div>
  </div>
);

const ConstructionPortfolio: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-8 h-0.5 bg-yellow-500"></span>
               <span className="text-yellow-600 font-bold text-xs uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 font-[Manrope] tracking-tight leading-[1.1]">
              Built To <br />
              <span className="text-slate-300">Endure.</span>
            </h2>
          </div>
          
          <button className="bg-white border border-slate-200 px-8 py-3 rounded-full font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm hover:shadow-lg flex items-center gap-2 group">
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Row 1 */}
          <div className="lg:col-span-5 h-[500px] md:h-[600px]">
             <ProjectCard 
               image={CONSTRUCTION_PROJECTS[0].image}
               category={CONSTRUCTION_PROJECTS[0].category}
               title={CONSTRUCTION_PROJECTS[0].title}
               className="h-full"
             />
          </div>
          
          <div className="lg:col-span-7 h-[500px] md:h-[600px]">
             <ProjectCard 
               image={CONSTRUCTION_PROJECTS[1].image}
               category={CONSTRUCTION_PROJECTS[1].category}
               title={CONSTRUCTION_PROJECTS[1].title}
               className="h-full"
               hasArrow={true}
             />
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-7 h-[500px] md:h-[600px]">
             <ProjectCard 
               image={CONSTRUCTION_PROJECTS[2].image}
               category={CONSTRUCTION_PROJECTS[2].category}
               title={CONSTRUCTION_PROJECTS[2].title}
               className="h-full"
             />
          </div>

          <div className="lg:col-span-5 h-[500px] md:h-[600px]">
             <ProjectCard 
               image={CONSTRUCTION_PROJECTS[3].image}
               category={CONSTRUCTION_PROJECTS[3].category}
               title={CONSTRUCTION_PROJECTS[3].title}
               className="h-full"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionPortfolio;
