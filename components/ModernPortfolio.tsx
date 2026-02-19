
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    { title: 'The Aether', category: 'Identity', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Monceau', category: 'Digital', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Vortex', category: 'Strategy', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop' },
    { title: 'Lumina', category: 'Architecture', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop' },
];

const ModernPortfolio: React.FC = () => {
  return (
    <section className="py-40 bg-[#FDFDFD] px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <h2 className="text-5xl md:text-8xl font-bold font-[Syne] text-slate-900 tracking-tighter leading-none">
                    Curated <br /> <span className="text-slate-200">Exhibitions.</span>
                </h2>
                <p className="text-slate-500 font-light text-xl max-w-sm mb-4">
                    A selection of partnerships where vision met precision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {PROJECTS.map((p, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-8 relative">
                            <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={p.title} />
                            <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0"></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">{p.category}</span>
                                <h3 className="text-3xl font-bold font-[Syne] text-slate-900">{p.title}</h3>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ModernPortfolio;
