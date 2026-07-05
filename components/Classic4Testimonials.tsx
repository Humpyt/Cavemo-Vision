import React from 'react';

const Classic4Testimonials: React.FC = () => {
  return (
    <section className="bg-[#0b1215] text-white py-32 px-4 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative">
         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-white/[0.02] font-black pointer-events-none select-none">"</span>
         
         <p className="text-[#20A69A] font-bold uppercase tracking-widest text-sm mb-16 relative z-10">Client Validation</p>
         
         <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-[Syne] font-bold tracking-tighter leading-[1.2] mb-16 relative z-10 max-w-5xl mx-auto">
           "The speed at which they diagnosed our structural flaws and deployed a new operational matrix was unprecedented. They simply do not miss."
         </h2>
         
         <div className="flex flex-col items-center gap-4 relative z-10">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop" className="w-20 h-20 rounded-full object-cover border-2 border-white/10" alt="Elena Rostova" />
            <div>
               <h4 className="font-bold text-lg uppercase tracking-wider mb-1">Elena Rostova</h4>
               <p className="text-white/50 text-sm">CEO, Nexus Financial Group</p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Classic4Testimonials;
