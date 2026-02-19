
import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const Home6Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10"></div>
      
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
              <span className="text-teal-500 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Client Feedback</span>
              <h2 className="text-5xl md:text-[5rem] font-bold font-[Syne] text-white leading-none mb-10 tracking-tighter">
                  Our Clients Share <br /> Their Success <br /> Stories
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                  Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current.
              </p>
              <button className="bg-teal-500 text-black px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all">
                  Explore More <ArrowUpRight className="w-5 h-5" />
              </button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 relative">
              <div className="flex items-center gap-6 mb-12 pb-12 border-b border-white/10">
                  <img src="https://i.pravatar.cc/150?img=12" className="w-20 h-20 rounded-full border-4 border-white/10" alt="" />
                  <div>
                      <h4 className="text-white font-bold text-2xl font-[Syne]">Guy Hawkins</h4>
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Co-Founder</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-teal-400 fill-teal-400" />)}
                  </div>
              </div>

              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-12">
                  "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations our goals faster than imagined. We truly feel like a valued partner."
              </p>
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-[80px]"></div>
          </div>
      </div>
    </section>
  );
};

export default Home6Testimonials;
