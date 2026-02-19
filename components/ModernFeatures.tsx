
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
  { title: 'Strategic Audits', desc: 'Deep-tissue analysis of your corporate infrastructure to find latent value.' },
  { title: 'Brand Curation', desc: 'Editorial-grade identity systems that command premium market positioning.' },
  { title: 'Operational Logic', desc: 'Streamlining complex workflows with architectural precision and tech.' },
  { title: 'Digital Flux', desc: 'High-performance web ecosystems built for the next generation of users.' },
];

const ModernFeatures: React.FC = () => {
  return (
    <section className="py-32 bg-[#FDFDFD] px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {FEATURES.map((f, i) => (
            <div key={i} className="group cursor-pointer">
              <span className="block text-[10px] font-bold text-slate-300 mb-6 uppercase tracking-widest">0{i + 1} //</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-[Syne] tracking-tight group-hover:translate-x-2 transition-transform">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
                {f.desc}
              </p>
              <div className="w-8 h-px bg-slate-200 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
