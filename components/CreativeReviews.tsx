
import React from 'react';
import { Quote } from 'lucide-react';

const REVIEWS = [
    {
        client: "FUTURE CORP",
        text: "They didn't just redesign our brand. They dismantled it and built a weapon.",
        author: "J. S.",
        role: "Director"
    },
    {
        client: "NEBULA SYSTEMS",
        text: "Chaos in the best possible way. The output was unlike anything in our sector.",
        author: "M. K.",
        role: "Product Lead"
    },
    {
        client: "APEX LABS",
        text: "Cavemo operates in 3025 while the rest of us are stuck in 2024.",
        author: "R. L.",
        role: "Founder"
    }
];

const CreativeReviews: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4 border-t-[12px] border-black text-black">
        <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                <h2 className="text-6xl md:text-[8vw] leading-none font-black text-black font-[Syne] uppercase tracking-tighter">
                    CLIENT <br/> INTELLIGENCE
                </h2>
                <div className="flex items-center gap-2 bg-[#CCFF00] px-4 py-2 border-2 border-black font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse border border-black"></div>
                    <span className="text-black font-mono text-xs uppercase tracking-widest">Live Feed //</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-[4px] border-black">
                {REVIEWS.map((review, idx) => (
                    <div key={idx} className={`group bg-white p-8 md:p-12 relative transition-all duration-300 hover:bg-[#CCFF00] flex flex-col ${idx !== 2 ? 'border-b-[4px] md:border-b-0 md:border-r-[4px] border-black' : ''}`}>
                        
                        <div className="mb-12 flex-grow">
                            <Quote className="w-12 h-12 text-black/20 fill-black/20 mb-8 transform group-hover:rotate-180 transition-transform duration-500" />
                            <p className="text-2xl md:text-3xl font-black text-black leading-[1.1] font-[Syne] uppercase">
                                "{review.text}"
                            </p>
                        </div>

                        <div className="border-t-[4px] border-black pt-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-black font-black text-lg tracking-wide uppercase">{review.client}</p>
                                <div className="text-black font-mono font-bold text-xs">A++</div>
                            </div>
                            <p className="text-black/60 text-xs font-mono font-bold">{review.author} — {review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default CreativeReviews;
