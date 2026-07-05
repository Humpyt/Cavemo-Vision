import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { id: '01', title: 'Corporate Restructuring', detail: 'In-depth analysis and execution of structural realignments to eliminate operational drag and enhance agility.' },
  { id: '02', title: 'Mergers & Acquisitions', detail: 'End-to-end advisory on complex transactions, focusing strictly on high-yield and synergistic acquisitions.' },
  { id: '03', title: 'Market Positioning', detail: 'Data-backed recalibration of brand and market footprint to capture majority segment share.' },
  { id: '04', title: 'Performance Engineering', detail: 'Designing and deploying new metric-driven cadences that enforce high-performance corporate cultures.' },
];

const Classic3Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-32 px-4 md:px-8 lg:px-12 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 mb-16">
           <div className="w-12 h-px bg-[#20A69A]"></div>
           <span className="text-[#20A69A] font-bold uppercase tracking-widest text-xs">Capabilities</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2 className="text-5xl lg:text-[5.5rem] font-[Syne] font-bold tracking-tighter text-[#0b1215] leading-[0.9] mb-12">
              Services <br />architected <br />for growth.
            </h2>
            <div className="rounded-[2rem] overflow-hidden h-[400px] group shadow-2xl">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" alt="Building"/>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-8">
            {SERVICES.map((srv, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => setActiveTab(idx)}
                className={`border-b border-slate-200 pb-8 cursor-pointer transition-all duration-500 ${activeTab === idx ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className="flex items-start gap-8">
                  <span className="text-xl font-bold text-[#20A69A] pt-1">{srv.id}</span>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-[Syne] font-bold text-[#0b1215] mb-4">{srv.title}</h3>
                    <div className={`overflow-hidden transition-all duration-500 ${activeTab === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-500 font-light text-lg leading-relaxed mb-6">
                        {srv.detail}
                      </p>
                      <button className="flex items-center gap-2 text-[#0b1215] font-bold uppercase tracking-widest text-xs group-hover:text-[#20A69A] transition-colors">
                        Explore Strategy <ArrowUpRight className="w-4 h-4"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classic3Services;
