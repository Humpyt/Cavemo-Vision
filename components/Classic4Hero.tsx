import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Classic4Hero: React.FC = () => {
  return (
    <section className="bg-[#000000] text-white min-h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#20A69A]/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Top Nav Spacer */}
      <div className="h-32"></div>

      <div className="flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-8">
             <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#20A69A] animate-pulse"></span>
                <span className="text-sm font-semibold tracking-widest uppercase text-white/80">Corporate Intelligence</span>
             </div>

             <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[9.5rem] font-[Syne] font-bold tracking-tighter leading-[0.85] mb-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
               Engineering <br /> Advantage.
             </h1>

             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-16">
               <p className="text-white/60 text-xl md:text-2xl font-light max-w-xl leading-relaxed">
                 We synthesize complex macroeconomic data into agile market strategies, architecting sustainable growth for the world's leading brands.
               </p>
               <button className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#20A69A] hover:text-white transition-all duration-500 group shrink-0">
                 <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
               </button>
             </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block h-full min-h-[500px]">
             <div className="absolute inset-0 rounded-t-[20rem] rounded-b-[2rem] overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Executive" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
             </div>
             
             {/* Floating Info */}
             <div className="absolute bottom-10 -left-10 bg-[#111] border border-white/10 p-6 rounded-2xl w-64 shadow-2xl backdrop-blur-xl">
                <p className="text-[#20A69A] font-bold text-4xl mb-1">2026</p>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Strategic Outlook</p>
             </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-white/5 relative z-10 px-4 md:px-8 lg:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md">
         <div className="flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest">
           <span>Scroll for Insights</span>
         </div>
         <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
      </div>
    </section>
  );
};

export default Classic4Hero;
