
import React from 'react';
import { Lightbulb, Trophy, Headset, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.'
  },
  {
    icon: Trophy,
    title: 'Award-Winning Expertise',
    description: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.'
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'Our team is always available to address your concerns, providing quick and effective solutions to keep your business.'
  },
];

const Home7Hero: React.FC = () => {
  return (
    <section className="bg-white pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-teal-50/50 rounded-full blur-[140px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-teal-700">Empowering Business</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-[Syne] text-slate-900 leading-[0.9] tracking-tighter mb-20 max-w-5xl mx-auto">
              Empowering Business <br /> with <span className="text-teal-500 italic">Expertise.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((f, i) => (
                  <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group text-left">
                      <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-10 group-hover:bg-teal-500 group-hover:text-white transition-all">
                          <f.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 font-[Syne]">{f.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-10">{f.description}</p>
                      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-teal-500 transition-colors">
                          Read More <ArrowUpRight className="w-4 h-4" />
                      </button>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home7Hero;
