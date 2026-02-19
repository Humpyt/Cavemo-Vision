
import React from 'react';
import { Globe, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const CorporateStats: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0B] px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Info Card */}
          <div className="md:col-span-5 bg-white p-12 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                  <h2 className="text-4xl font-bold text-slate-900 font-[Syne] mb-6 leading-tight">
                      Innovation. Your Trusted Partner for Sustainable Business Success.
                  </h2>
                  <button className="text-slate-900 font-bold flex items-center gap-2 border-b border-black pb-1 hover:text-teal-600 hover:border-teal-600 transition-all">
                      Learn More <ArrowUpRight className="w-4 h-4" />
                  </button>
              </div>
              <div className="mt-12 overflow-hidden rounded-2xl aspect-video relative group">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" alt="team" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 cursor-pointer shadow-xl">
                          <ArrowUpRight className="w-5 h-5" />
                      </div>
                  </div>
              </div>
          </div>

          {/* Stats Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-[#14B8A6] p-10 rounded-[2.5rem] text-white flex flex-col justify-between group hover:shadow-2xl hover:shadow-teal-500/20 transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-10">
                      <Globe className="w-6 h-6" />
                  </div>
                  <div>
                      <p className="text-teal-50 text-xs font-bold uppercase mb-2">Reach Worldwide</p>
                      <h4 className="text-6xl font-bold font-[Syne] mb-4">20M</h4>
                      <p className="text-teal-100/70 text-sm">Expanding global operations every day.</p>
                  </div>
              </div>

              <div className="bg-[#1A1A1B] p-10 rounded-[2.5rem] border border-white/5 text-white flex flex-col justify-between group hover:border-teal-500/50 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-teal-400">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="text-slate-500 font-mono text-sm">03.</span>
                  </div>
                  <div className="mt-20">
                      <p className="text-slate-400 text-xs font-bold uppercase mb-2">Faster Growth</p>
                      <h4 className="text-6xl font-bold font-[Syne] mb-4">8.5X</h4>
                      <p className="text-slate-500 text-sm">Our strategy boosts ROI significantly.</p>
                  </div>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] md:col-span-2 flex items-center justify-between group">
                  <div className="flex items-center gap-6">
                      <div className="flex -space-x-3">
                           {[1,2,3].map(i => (
                               <img key={i} src={`https://i.pravatar.cc/150?img=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white" alt="" />
                           ))}
                           <div className="w-12 h-12 rounded-full bg-teal-500 border-4 border-white flex items-center justify-center text-white font-bold text-sm">+</div>
                      </div>
                      <div>
                          <h4 className="text-slate-900 font-bold text-xl">100+ Happy Customers</h4>
                          <p className="text-slate-500 text-sm">Join our network of winners</p>
                      </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-teal-500 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                  </div>
              </div>

          </div>

      </div>
    </section>
  );
};

export default CorporateStats;
