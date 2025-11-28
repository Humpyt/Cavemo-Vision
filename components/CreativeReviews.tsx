
import React from 'react';
import { Quote, Star } from 'lucide-react';

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
    <section className="bg-[#050505] py-32 px-4 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between mb-20">
                <h2 className="text-4xl font-bold text-white font-[Syne] uppercase">
                    Signal / Noise
                </h2>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-slate-500 font-mono text-xs uppercase">Live Feed</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS.map((review, idx) => (
                    <div key={idx} className="group bg-[#0a0a0a] border border-white/5 p-8 md:p-12 relative hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                        {/* Brutalist Corner Markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-teal-500 transition-colors"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-teal-500 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-teal-500 transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-teal-500 transition-colors"></div>

                        <div className="mb-8">
                            <Quote className="w-8 h-8 text-teal-900 fill-teal-900 mb-4" />
                            <p className="text-xl md:text-2xl font-bold text-white leading-tight font-[Syne]">
                                "{review.text}"
                            </p>
                        </div>

                        <div className="flex items-end justify-between border-t border-white/5 pt-6">
                            <div>
                                <p className="text-teal-400 font-bold text-sm tracking-wide uppercase mb-1">{review.client}</p>
                                <p className="text-slate-500 text-xs font-mono">{review.author} — {review.role}</p>
                            </div>
                            <div className="flex gap-1">
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default CreativeReviews;
