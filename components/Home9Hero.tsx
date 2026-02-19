
import React from 'react';
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Home9Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden bg-[#0A1F1F]">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-teal-500/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[140px]"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-8">
                  <h1 className="text-7xl md:text-[9rem] font-bold font-[Syne] text-white leading-[0.8] tracking-tighter mb-20 flex flex-col">
                      <span className="block">Empower <span className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20 mx-4 align-middle"><div className="w-12 h-12 rounded-full bg-white"></div></span>Your</span>
                      <span className="block mt-4">Business.</span>
                  </h1>

                  <div className="grid md:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                          <h3 className="text-2xl font-bold text-white font-[Syne]">Solutions That <br /> Scale.</h3>
                          <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                              Recognized by the industry leaders, our award-winning team has a Proven record of delivering excellence across projects.
                          </p>
                          <button className="bg-teal-500 text-black px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all group">
                              Get Started <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                          </button>
                      </div>

                      <div className="flex gap-4">
                          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                              <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer">
                                  <Icon className="w-5 h-5" />
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Right Column (Image Reveal) */}
              <div className="lg:col-span-4 self-end">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                        alt="Discussion" 
                      />
                      <div className="absolute inset-0 bg-teal-900/10 group-hover:opacity-0 transition-opacity"></div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};

export default Home9Hero;
