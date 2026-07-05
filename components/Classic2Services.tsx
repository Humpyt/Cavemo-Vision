import React from 'react';
import { ArrowRight, BarChart3, Briefcase, Globe2, Zap } from 'lucide-react';

const SERVICES = [
  {
    title: 'Financial Restructuring',
    description: 'Comprehensive strategies to optimize capital execution.',
    icon: BarChart3,
  },
  {
    title: 'Strategic M&A',
    description: 'Navigating complex transactions and enterprise acquisitions.',
    icon: Briefcase,
  },
  {
    title: 'Global Expansion',
    description: 'Data-driven roadmaps for entering new global markets.',
    icon: Globe2,
  },
  {
    title: 'Operational Transformation',
    description: 'Future-proofing legacy operational and technological models.',
    icon: Zap,
  }
];

const Classic2Services: React.FC = () => {
  return (
    <section className="bg-[#f5f5f7] py-32 px-4 md:px-8 lg:px-12 font-sans rounded-t-[3rem] -mt-10 relative z-20">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Sticky Left Column */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#0b1215]/20"></div>
              <p className="text-[#0b1215] font-bold tracking-[0.2em] uppercase text-xs">Expertise & Practices</p>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[Syne] font-bold tracking-tighter text-[#0b1215] mb-8 leading-[0.95]">
              Uncompromising <br className="hidden lg:block"/>standards.
            </h2>
            <p className="text-slate-500 font-light text-xl mb-12 max-w-md leading-relaxed">
              We bring highly specialized disciplines together, creating unified strategies that navigate the most complex corporate challenges.
            </p>
            <div className="inline-flex items-center gap-4 text-[#0b1215] hover:text-[#20A69A] font-semibold text-sm uppercase tracking-widest cursor-pointer group transition-colors">
              View full capabilities
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#20A69A] group-hover:bg-[#20A69A] group-hover:text-white transition-all shadow-sm">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrollable Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between group hover:-translate-y-1 transition-all duration-500 border border-slate-100 hover:border-slate-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#0b1215] group-hover:text-white transition-colors duration-500 text-[#0b1215] border border-slate-100 group-hover:border-transparent">
                  <service.icon strokeWidth={1} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-[Syne] font-bold text-[#0b1215] mb-3 tracking-tight group-hover:text-[#20A69A] transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-light text-lg">{service.description}</p>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-slate-200 group-hover:text-[#0b1215] -rotate-45 group-hover:rotate-0 transition-all duration-500 hidden md:block shrink-0"/>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Classic2Services;
