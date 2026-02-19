
import React from 'react';

const Home8Expertise: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl relative h-[600px] group">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
              <div className="absolute inset-0 bg-teal-900/10"></div>
          </div>
          
          <div className="lg:pl-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-teal-700">Choose the Best</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-slate-900 leading-[1.1] tracking-tighter mb-10">
                  Empowering Business with Expertise.
              </h2>
              <div className="space-y-8">
                  <div className="flex gap-6 pb-8 border-b border-slate-200">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 font-bold font-mono shrink-0 shadow-sm">01</div>
                      <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2 font-[Syne]">Data-Driven Strategies</h4>
                          <p className="text-slate-500 text-sm">We leverage real-time analytics to make informed decisions that maximize your ROI.</p>
                      </div>
                  </div>
                  <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 font-bold font-mono shrink-0 shadow-sm">02</div>
                      <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2 font-[Syne]">Global Network</h4>
                          <p className="text-slate-500 text-sm">Our partners span 45 countries, providing a truly international support infrastructure.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home8Expertise;
