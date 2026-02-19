
import React from 'react';
import { Lightbulb, Trophy, Headset, ArrowRight } from 'lucide-react';

const Home6Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
              { 
                  icon: Lightbulb, 
                  title: 'Innovative Solutions', 
                  desc: 'Our approach to customer experience is comprehensive and leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.' 
              },
              { 
                  icon: Trophy, 
                  title: 'Award-Winning Expertise', 
                  desc: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.' 
              },
              { 
                  icon: Headset, 
                  title: 'Dedicated Support', 
                  desc: 'Our team is always available to address your concerns, providing quick and effective solution to keep your business.' 
              },
          ].map((f, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-10 group-hover:bg-teal-500 group-hover:text-white transition-all">
                      <f.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-[Syne]">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10">{f.desc}</p>
                  <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                  </div>
              </div>
          ))}
      </div>
    </section>
  );
};

export default Home6Features;
