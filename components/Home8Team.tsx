
import React from 'react';

const TEAM = [
    { img: 'https://i.pravatar.cc/150?img=11', name: 'James Anderson', role: 'Ceo & Founder' },
    { img: 'https://i.pravatar.cc/150?img=12', name: 'Sarah Chen', role: 'Head of Strategy' },
    { img: 'https://i.pravatar.cc/150?img=13', name: 'Elena Rodriguez', role: 'Creative Director' }
];

const Home8Team: React.FC = () => {
  return (
    <section className="bg-[#f0f9f9] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-24">
              <div className="md:col-span-4">
                  <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Meet our team</span>
                  <h2 className="text-5xl md:text-7xl font-bold font-[Syne] text-slate-900 tracking-tighter leading-none">
                      Meet the Mind <br /> Behind Our <br /> Success.
                  </h2>
              </div>
              <div className="md:col-span-8 flex flex-col md:flex-row justify-center items-center gap-12">
                  {TEAM.map((member, i) => (
                      <div key={i} className="group cursor-pointer text-center">
                          <div className="w-56 h-56 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl relative">
                              <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                              <div className="absolute inset-0 bg-teal-900/10 group-hover:opacity-0 transition-opacity"></div>
                          </div>
                          <h4 className="text-2xl font-bold text-slate-900 font-[Syne] mb-1">{member.name}</h4>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{member.role}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </section>
  );
};

export default Home8Team;
