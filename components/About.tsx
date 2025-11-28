import React from 'react';
import { BadgeCheck, Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Composition */}
            <div className="relative">
                {/* Decorative blobs */}
                <div className="absolute top-10 -left-10 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-10 -right-10 w-72 h-72 bg-slate-100 rounded-full blur-3xl -z-10"></div>

                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                        alt="Business Team" 
                        className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-1000"
                    />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl max-w-xs hidden md:block animate-fade-in border border-gray-100">
                     <div className="flex items-start gap-5">
                        <div className="bg-teal-600 p-3 rounded-lg text-white shadow-lg shadow-teal-600/30">
                            <BadgeCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="font-extrabold text-slate-900 text-2xl mb-1">100%</p>
                            <p className="text-sm text-slate-500 font-medium">Client Satisfaction Guaranteed</p>
                        </div>
                     </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-8">
                <span className="text-teal-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Get To Know Us</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                    We Build Future <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">With Experience.</span>
                </h2>
                
                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                    At Cavemo, we define success by the results we deliver. Our team of experts combines creative strategy with data-driven insights to help you build a sustainable competitive advantage.
                </p>
                
                <div className="space-y-5 mb-12">
                    {[
                        "Global Network of Industry Partners",
                        "Award-Winning Strategic Methodologies",
                        "24/7 Dedicated Support Team"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-default">
                            <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-600 group-hover:border-teal-600 transition-colors">
                                <Check className="w-3.5 h-3.5 text-teal-600 group-hover:text-white" />
                            </div>
                            <span className="text-slate-700 font-bold text-lg">{item}</span>
                        </div>
                    ))}
                </div>
                
                <div className="flex items-center gap-8">
                    <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-xl shadow-slate-900/10">
                        Discover More
                    </button>
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Ceo & Founder</span>
                        <span className="font-handwriting text-2xl text-slate-900 font-bold signature">James Anderson</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;