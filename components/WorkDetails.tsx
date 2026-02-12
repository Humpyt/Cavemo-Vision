
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { CREATIVE_WORKS } from '../constants';

interface WorkDetailsProps {
    id: string;
    onBack: () => void;
}

const WorkDetails: React.FC<WorkDetailsProps> = ({ id, onBack }) => {
    const project = CREATIVE_WORKS.find(p => p.id === id) || CREATIVE_WORKS[0];
    const nextProject = CREATIVE_WORKS.find(p => parseInt(p.id) === parseInt(id) + 1) || CREATIVE_WORKS[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="bg-[#050505] min-h-screen text-white relative z-50 animate-fade-in">
            {/* Sticky Navigation / Back Button */}
            <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white font-mono text-sm hover:text-teal-400 transition-colors uppercase tracking-widest group"
                >
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    Back to Grid
                </button>
                <div className="text-white font-mono text-xs hidden md:block">
                    CASE STUDY: {project.id}
                </div>
            </div>

            {/* Hero Section */}
            <div className="w-full h-[80vh] relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-20">
                    <h1 className="text-[12vw] leading-none font-bold font-[Syne] uppercase mix-blend-difference text-white">
                        {project.title}
                    </h1>
                </div>
            </div>

            {/* Content Split */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-32 flex flex-col lg:flex-row gap-20">
                
                {/* Left: Sticky Info */}
                <div className="lg:w-1/3">
                    <div className="lg:sticky lg:top-32 space-y-12">
                        <div>
                            <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">The Brief</p>
                            <h3 className="text-2xl md:text-3xl font-bold font-[Syne] leading-tight mb-8">
                                {project.description}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-slate-500 text-xs font-mono uppercase mb-2">Client</span>
                                <span className="block text-xl font-bold">{project.client}</span>
                            </div>
                            <div>
                                <span className="block text-slate-500 text-xs font-mono uppercase mb-2">Year</span>
                                <span className="block text-xl font-bold">{project.year}</span>
                            </div>
                            <div>
                                <span className="block text-slate-500 text-xs font-mono uppercase mb-2">Category</span>
                                <span className="block text-xl font-bold">{project.category}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {project.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Scrolling Visuals */}
                <div className="lg:w-2/3 space-y-12">
                    {project.gallery?.map((img, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-lg">
                            <img 
                                src={img} 
                                alt={`Detail ${idx}`} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Number Marker */}
                             <div className="absolute top-4 right-4 font-mono text-xs text-black bg-white px-2 py-1 rounded mix-blend-screen">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-[#111] p-12 rounded-lg border border-white/5">
                        <p className="font-mono text-teal-500 mb-4">// RESULT</p>
                        <p className="text-2xl md:text-4xl font-bold font-[Syne] leading-tight">
                            "A masterclass in digital brutality. The output exceeded every KPI and redefined our visual landscape."
                        </p>
                    </div>
                </div>
            </div>

            {/* Next Project Footer */}
            <div 
                className="bg-white text-black py-32 px-4 md:px-12 cursor-pointer group hover:bg-teal-400 transition-colors duration-500"
                onClick={onBack} // Ideally this would switch to next project ID, but for now we go back or could simulate next
            >
                <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                    <div>
                        <span className="block font-mono text-xs uppercase tracking-widest mb-4">Next Case Study</span>
                        <h2 className="text-6xl md:text-9xl font-bold font-[Syne] uppercase group-hover:translate-x-4 transition-transform duration-500">
                            {nextProject.title}
                        </h2>
                    </div>
                    <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowRight className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;
