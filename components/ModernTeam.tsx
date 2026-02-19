
import React from 'react';

const ModernTeam: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc] px-6">
      <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-12">
              <span className="w-4 h-px bg-teal-500"></span>
              Meet Our Team
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 border border-slate-100 rounded-[2.5rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700">
              <div className="md:w-1/3 aspect-square relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Darlene Robertson" />
              </div>
              <div className="md:w-2/3 p-12">
                  <h3 className="text-4xl font-bold font-[Syne] text-slate-900 mb-2">Darlene Robertson</h3>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-8">Business Director</p>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                      Darlene brings over 15 years of experience in corporate strategy and operational excellence. Her visionary leadership has been instrumental in our most successful global campaigns.
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
};

export default ModernTeam;
