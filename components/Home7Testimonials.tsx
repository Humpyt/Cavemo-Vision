
import React, { useState } from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const TESTIMONIALS = [
  { 
    name: 'Devon Lane', 
    role: 'CEO', 
    img: 'https://i.pravatar.cc/150?img=11',
    text: "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations our goals faster than imagined."
  },
  { 
    name: 'Guy Hawkins', 
    role: 'Co-Founder', 
    img: 'https://i.pravatar.cc/150?img=12',
    text: "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations our goals faster than imagined. We truly feel like a valued partner."
  },
  { 
    name: 'Ralph Edwards', 
    role: 'Marketing Head', 
    img: 'https://i.pravatar.cc/150?img=13',
    text: "They operate in 3025 while the rest of us are stuck in 2024. Their strategic vision dismantle the traditional corporate identity and build a weapon of market dominance."
  },
];

const Home7Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="bg-[#050505] py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">Client Feedback</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-white leading-none mb-24 tracking-tighter">
              Our Clients Share Their <br /> Success Stories.
          </h2>

          <div className="max-w-4xl mx-auto mb-20 min-h-[160px]">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed animate-fade-in" key={activeIdx}>
                  "{TESTIMONIALS[activeIdx].text}"
              </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {TESTIMONIALS.map((t, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveIdx(i)}
                    className={`flex items-center gap-6 cursor-pointer transition-all ${activeIdx === i ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-60 grayscale'}`}
                  >
                      <img src={t.img} className="w-20 h-20 rounded-full border-4 border-white/10" alt="" />
                      <div className="text-left">
                          <h4 className="text-white font-bold text-xl font-[Syne]">{t.name}</h4>
                          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{t.role}</p>
                      </div>
                      {activeIdx === i && (
                          <div className="flex gap-1 ml-4">
                              {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 text-teal-400 fill-teal-400" />)}
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Home7Testimonials;
