import React from 'react';

const TEAM = [
  { name: 'Arthur Pendelton', role: 'Founding Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sarah Jenning', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Michael Vance', role: 'Head of Global', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
];

const Classic3Team: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
              <span className="text-[#20A69A] font-bold uppercase tracking-widest text-xs mb-4 block">Executive Board</span>
              <h2 className="text-5xl lg:text-[6rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9]">
                Expertise <br/>embodied.
              </h2>
           </div>
           <button className="text-[#0b1215] font-bold uppercase tracking-widest text-sm pb-2 border-b-2 border-[#0b1215] hover:border-[#20A69A] hover:text-[#20A69A] transition-colors">
             View Full Directory
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
           {TEAM.map((member, idx) => (
             <div key={idx} className="group cursor-pointer">
                <div className="rounded-[2.5rem] overflow-hidden h-[500px] relative mb-6 shadow-xl border border-slate-100">
                   <img src={member.img} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]"/>
                   <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#0b1215]/90 to-transparent flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-4 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xs hover:bg-[#20A69A] transition-colors">IN</div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xs hover:bg-[#20A69A] transition-colors">TW</div>
                      </div>
                   </div>
                </div>
                <div className="text-center">
                   <h3 className="text-2xl font-[Syne] font-bold text-[#0b1215] mb-2">{member.name}</h3>
                   <p className="text-slate-500 font-medium text-sm">{member.role}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Classic3Team;
