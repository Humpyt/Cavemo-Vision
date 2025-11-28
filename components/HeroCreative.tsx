
import React from 'react';
import { Play, ArrowRight, Star, MousePointer2 } from 'lucide-react';

const HeroCreative: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-600/20 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 h-full flex flex-col justify-center min-h-[80vh]">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold tracking-widest uppercase text-white/80">The Creative Studio</span>
            </div>
        </div>

        {/* Massive Typography */}
        <div className="relative text-center z-10">
            <h1 className="font-[Syne] text-[12vw] leading-[0.8] font-extrabold tracking-tighter mix-blend-exclusion">
                <span className="block hover:text-transparent hover:text-stroke hover:scale-105 transition-all duration-500 cursor-default">IGNITE</span>
                <div className="flex items-center justify-center gap-4 md:gap-12 my-2 md:my-6">
                    <span className="block h-[1px] w-12 md:w-32 bg-white/50"></span>
                    <span className="text-[4vw] font-handwriting text-teal-400 font-light -rotate-6">the unknown</span>
                    <span className="block h-[1px] w-12 md:w-32 bg-white/50"></span>
                </div>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 animate-gradient bg-300% hover:tracking-wide transition-all duration-700">REALITY</span>
            </h1>
        </div>

        {/* Floating Images (Parallax feel) */}
        <div className="absolute top-1/4 left-[5%] w-[15vw] aspect-[3/4] hidden lg:block rotate-[-6deg] hover:rotate-0 transition-transform duration-700 hover:z-20 group">
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-lg opacity-60 group-hover:opacity-100 transition-opacity" alt="Abstract 1" />
        </div>
        <div className="absolute bottom-1/4 right-[5%] w-[18vw] aspect-[4/3] hidden lg:block rotate-[6deg] hover:rotate-0 transition-transform duration-700 hover:z-20 group">
             <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover rounded-lg opacity-60 group-hover:opacity-100 transition-opacity" alt="Abstract 2" />
        </div>

        {/* Action Strip */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="#contact" className="group relative px-10 py-5 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                    Start Project <MousePointer2 className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <button className="flex items-center gap-4 text-white hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-teal-400 group-hover:bg-teal-400/10 transition-all">
                    <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold tracking-wide text-sm">WATCH SHOWREEL</span>
            </button>
        </div>
      </div>

      {/* Scrolling Footer Text */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
        <div className="flex w-max whitespace-nowrap animate-scroll">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 mx-4 opacity-50">
                    <span className="text-xl font-bold font-[Syne] uppercase">Strategy</span>
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span className="text-xl font-bold font-[Syne] uppercase text-stroke">Design</span>
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-xl font-bold font-[Syne] uppercase">Development</span>
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                </div>
            ))}
        </div>
      </div>
      
      <style>{`
        .bg-300% { background-size: 300% 300%; }
        .animate-gradient { animation: gradient 8s ease infinite; }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.5); color: transparent; }
        .animate-scroll { animation: scroll 20s linear infinite; }
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroCreative;
