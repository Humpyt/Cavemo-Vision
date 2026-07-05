import React from 'react';

const TEAM = [
  { name: 'Arthur Pendelton', role: 'Founding Partner', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sarah Jenning', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Michael Vance', role: 'Head of Global Expansion', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Elena Rostova', role: 'Chief Financial Analyst', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop' }
];

const Classic2Team: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#0b1215]/20"></div>
            <p className="text-[#0b1215] font-bold tracking-[0.2em] uppercase text-xs">Our Leadership</p>
            <div className="w-12 h-px bg-[#0b1215]/20"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.95] mb-6">
            Architects of <br />capital strategy.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden overflow-hidden h-[400px] relative mb-6 shadow-md">
                <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1215]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-[Syne] font-bold text-[#0b1215] mb-2">{member.name}</h3>
                <p className="text-[#20A69A] font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classic2Team;
