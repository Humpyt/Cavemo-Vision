
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    
    {/* Dark Gradient Overlay for Contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>

    {/* Floating Glass Card Content */}
    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex items-end justify-between group-hover:bg-slate-900/80 transition-colors duration-300">
        <div>
          <span className="block text-teal-400 font-bold text-xs tracking-[0.2em] uppercase mb-2">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight font-[Syne]">
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

const Portfolio: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="w-8 h-0.5 bg-teal-500"></span>
               <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">Recent Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 font-[Syne] tracking-tight leading-[1.1]">
              Featured Projects <br />
              <span className="text-slate-300">That Inspire.</span>
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
               image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
               category="Corporate"
               title="Tech Innovations HQ"
               className="h-full"
             />
          </div>
          
          <div className="lg:col-span-7 h-[500px] md:h-[600px]">
             <ProjectCard 
               image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
               category="Marketing"
               title="Global Brand Campaign"
               className="h-full"
               hasArrow={true}
             />
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-7 h-[500px] md:h-[600px]">
             <ProjectCard 
               image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
               category="Strategy"
               title="Financial Growth Plan"
               className="h-full"
             />
          </div>

          <div className="lg:col-span-5 h-[500px] md:h-[600px]">
             <ProjectCard 
               image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
               category="Development"
               title="Cloud Infrastructure"
               className="h-full"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
    