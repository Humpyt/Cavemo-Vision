import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TEAM = [
  { name: 'Sarah Jenning', role: 'Managing Partner', active: true },
  { name: 'Arthur Pendelton', role: 'Head of Strategy', active: false },
  { name: 'Michael Vance', role: 'Director of Global Markets', active: false },
  { name: 'Elena Rostova', role: 'Chief Financial Analyst', active: false }
];

const Classic4Team: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
           
           <div className="md:w-1/3">
              <h2 className="text-5xl font-[Syne] font-bold tracking-tighter text-[#0b1215] mb-8">
                Executive <br />Syndicate.
              </h2>
              <p className="text-slate-500 font-light text-xl leading-relaxed mb-10">
                A consortium of industry veterans demanding absolute excellence from every engagement.
              </p>
              <button className="flex items-center gap-4 text-white bg-[#0b1215] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors hover:bg-[#20A69A]">
                Join The Firm
              </button>
           </div>

           <div className="md:w-2/3 flex flex-col border-t border-slate-100">
              {TEAM.map((member, idx) => (
                 <div key={idx} className="flex items-center justify-between border-b border-slate-100 py-8 group cursor-pointer hover:pl-4 transition-all duration-300">
                    <div>
                       <h3 className="text-3xl md:text-4xl font-[Syne] font-bold text-[#0b1215] mb-2 group-hover:text-[#20A69A] transition-colors">{member.name}</h3>
                       <p className="text-slate-400 font-medium">{member.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-[#0b1215] group-hover:border-[#0b1215] group-hover:text-white transition-all -rotate-45 group-hover:rotate-0">
                       <ArrowUpRight className="w-5 h-5"/>
                    </div>
                 </div>
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};

export default Classic4Team;
