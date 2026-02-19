
import React from 'react';

const ModernMarquee: React.FC = () => {
  return (
    <section className="py-32 bg-teal-600 text-white overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                    <span className="text-[10vw] font-bold font-[Syne] tracking-tighter uppercase opacity-30">Ship</span>
                    <div className="w-[15vw] h-[10vw] rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&h=300&fit=crop" className="w-full h-full object-cover" alt="" />
                    </div>
                    <span className="text-[10vw] font-bold font-[Syne] tracking-tighter uppercase">Enterprise</span>
                    <div className="w-[15vw] h-[10vw] rounded-[2rem] overflow-hidden -rotate-2 hover:rotate-0 transition-transform shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&h=300&fit=crop" className="w-full h-full object-cover" alt="" />
                    </div>
                    <span className="text-[10vw] font-bold font-[Syne] tracking-tighter uppercase opacity-30">Growth</span>
                </div>
            ))}
        </div>
    </section>
  );
};

export default ModernMarquee;
