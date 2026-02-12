
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConstructionAbout: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Sticky Heading */}
            <div className="lg:col-span-5">
                <div className="sticky top-32">
                    <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Manifesto</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-[#111] font-[Manrope] leading-[0.9] tracking-tight mb-8">
                        WE BUILD <br/> THE WORLD <br/> YOU LIVE IN.
                    </h2>
                    <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest mt-12 hover:text-yellow-600 transition-colors">
                        Read Our Story 
                        <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="lg:col-span-7 space-y-20">
                <div>
                    <p className="text-2xl md:text-3xl text-slate-800 leading-snug font-light">
                        "Construction is not just about concrete and steel. It’s about <span className="font-bold text-[#111] bg-yellow-100 px-2">vision</span>. It’s about taking a sketch on a napkin and turning it into a skyline-defining monument."
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Site Work" 
                        className="w-full h-64 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-center">
                        <h4 className="font-bold text-xl mb-4">Precision Engineering</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            We utilize the latest BIM technology to model every bolt before it's placed. Errors are eliminated in the cloud, not on the ground.
                        </p>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-200"></div>

                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold mb-2">James Anderson</h3>
                        <p className="text-sm text-slate-500 uppercase tracking-widest">Founder & CEO</p>
                    </div>
                    <img src="https://i.pravatar.cc/150?img=11" alt="CEO" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" />
                </div>
            </div>

        </div>
    </section>
  );
};

export default ConstructionAbout;
