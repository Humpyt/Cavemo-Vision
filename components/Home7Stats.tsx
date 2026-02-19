
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Home7Stats: React.FC = () => {
  return (
    <section className="bg-[#f8fafc] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Heading & Large Image */}
              <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-8">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Get to Know Us</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold font-[Syne] text-slate-900 leading-tight mb-12">
                      Powering Innovations Through out Partnerships with our Brands and Many Companies.
                  </h2>
                  <div className="rounded-[3rem] overflow-hidden aspect-[16/9] shadow-2xl relative">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale opacity-80" 
                        alt="Discussion" 
                      />
                      <div className="absolute inset-0 bg-teal-900/10"></div>
                  </div>
              </div>

              {/* Right Column: Grid Stats */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-6 h-full">
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center">
                      <h4 className="text-5xl font-bold font-[Syne] mb-2">8.5X</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Built for Super Speed</p>
                  </div>
                  
                  <div className="rounded-[3rem] overflow-hidden shadow-sm aspect-square">
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" className="w-full h-full object-cover" alt="" />
                  </div>

                  <div className="bg-teal-600 p-10 rounded-[3rem] text-white flex flex-col justify-between col-span-1">
                      <p className="text-sm font-medium leading-relaxed">
                          Enabling startups to raise $25M+ in venture funding.
                      </p>
                      <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-8 group">
                          Contact us <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </button>
                  </div>

                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-10">
                          <span className="text-slate-400 font-mono text-sm">02.</span>
                      </div>
                      <h4 className="text-5xl font-bold font-[Syne] mb-2">20M</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Corporate Service Holders</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home7Stats;
