
import React from 'react';
import { Star, Quote } from 'lucide-react';

const CorporateTestimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image Card */}
            <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="customer" />
                    <div className="absolute inset-0 bg-teal-900/10"></div>
                </div>

                {/* Overlap Rating Card */}
                <div className="absolute -bottom-10 -right-10 bg-[#0A0A0B] p-10 rounded-[2rem] text-white shadow-2xl border border-white/10 w-64 animate-float">
                    <h4 className="text-6xl font-bold mb-2">4.9</h4>
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">(90+ Client Reviews)</p>
                </div>

                <div className="absolute top-10 left-10">
                    <h2 className="text-4xl font-bold text-white font-[Syne] drop-shadow-lg">Hear from Our <br/><span className="text-teal-400">Customer.</span></h2>
                </div>
            </div>

            {/* Right: Quote Content */}
            <div className="lg:pl-12">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 mb-10">
                    <Quote className="w-8 h-8 fill-current" />
                </div>
                
                <p className="text-2xl md:text-3xl text-slate-700 font-light leading-relaxed mb-12">
                    "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we've seen after partnering."
                </p>

                <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                    <img src="https://i.pravatar.cc/150?img=11" className="w-16 h-16 rounded-full grayscale" alt="CEO" />
                    <div>
                        <h4 className="text-slate-900 font-bold text-xl">Guy Hawkins</h4>
                        <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Sr. Executive</p>
                    </div>
                </div>

                {/* Progress Bar Style Nav */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="h-1 w-24 bg-teal-500 rounded-full"></div>
                    <div className="h-1 w-4 bg-slate-200 rounded-full"></div>
                    <div className="h-1 w-4 bg-slate-200 rounded-full"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateTestimonials;
