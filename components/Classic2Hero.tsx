import React from 'react';
import { ArrowUpRight, BarChart3, Globe } from 'lucide-react';

const Classic2Hero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-4 md:px-8 lg:px-12 min-h-[95svh] flex flex-col justify-center font-sans">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid xl:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Text) */}
          <div className="xl:col-span-7 flex flex-col justify-center animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-[#20A69A]"></div>
              <p className="text-[#20A69A] font-bold tracking-[0.2em] uppercase text-xs">Strategy & Execution</p>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-bold font-[Syne] tracking-tighter text-[#0b1215] leading-[0.9] mb-12">
              Defining<br/>Corporate<br/>Tomorrow.
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-8 border-t border-slate-100 pt-10">
              <p className="text-slate-500 font-light max-w-md text-lg leading-relaxed">
                We bridge the gap between visionary strategy and tangible market execution, delivering uncompromising results for global enterprises.
              </p>
              <button className="w-16 h-16 rounded-full bg-[#0b1215] text-white flex items-center justify-center hover:bg-[#20A69A] hover:scale-110 transition-all duration-500 shrink-0 shadow-2xl hover:shadow-[#20A69A]/30 group">
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
              </button>
            </div>
          </div>

          {/* Right Column (Bento Grid) */}
          <div className="xl:col-span-5 grid grid-cols-2 gap-4 h-[500px] sm:h-[600px] xl:h-[700px] w-full">
            {/* Large top image */}
            <div className="col-span-2 h-[55%] md:h-[60%] rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Corporate office" />
              <div className="absolute inset-0 bg-[#0b1215]/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            {/* Bottom left stat */}
            <div className="h-full rounded-3xl bg-[#0b1215] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#20A69A]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#20A69A]/20 transition-colors duration-700"></div>
              <BarChart3 className="w-8 h-8 text-[#20A69A]"/>
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-[Syne] font-bold mb-1 tracking-tighter">2.4x</h3>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">Average Growth</p>
              </div>
            </div>
            
            {/* Bottom right image */}
            <div className="h-full rounded-3xl overflow-hidden relative group bg-slate-100">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" alt="Executive" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Classic2Hero;
