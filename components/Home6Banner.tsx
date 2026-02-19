
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home6Banner: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto rounded-[3rem] overflow-hidden h-[400px] relative group cursor-pointer shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100" 
            alt="Marketing" 
          />
          <div className="absolute inset-0 bg-slate-950/40"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-16">
              <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Connect</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white font-[Syne] max-w-2xl leading-none">
                  Integrated Marketing <br /> Campaign
              </h2>
          </div>

          <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUpRight className="w-8 h-8" />
          </div>
      </div>
    </section>
  );
};

export default Home6Banner;
