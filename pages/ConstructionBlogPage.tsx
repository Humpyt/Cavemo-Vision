import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ConstructionBlog from "../components/ConstructionBlog";
import ConstructionFooter from "../components/ConstructionFooter";
import { ArrowLeft, Ruler } from "lucide-react";

interface Props {
  onHomeClick: () => void;
  onPageChange: (page: any) => void;
  onVariantChange: (variant: any) => void;
}

const ConstructionBlogPage: React.FC<Props> = ({
  onHomeClick,
  onPageChange,
  onVariantChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-slate-900 font-sans selection:bg-orange-500/30">
      <Navbar
        activeVariant="construction"
        currentPage="blog-construction"
        onVariantChange={onVariantChange}
        onPageChange={onPageChange}
      />

      <div className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto bg-slate-900 rounded-b-[4rem] text-white -mt-[100px] pt-[140px] mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086225-f6412f1db123?q=80&w=2000&auto=format&fit=crop')] opacity-10 object-cover mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

        <div className="relative z-10">
          <button
            onClick={onHomeClick}
            className="flex items-center gap-2 text-white/60 hover:text-orange-400 transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Base
          </button>

          <div className="inline-block bg-orange-500 text-white px-4 py-2 mb-8 uppercase tracking-[0.2em] text-xs font-bold font-mono flex items-center w-fit gap-3">
            <Ruler className="w-4 h-4" /> Hard Hat News
          </div>

          <h1 className="text-5xl md:text-8xl font-black font-[Syne] leading-none mb-6 text-white uppercase tracking-tighter">
            Industry <br />{" "}
            <span className="text-orange-500 border-b-8 border-orange-500 pb-2 inline-block">
              Updates.
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mt-10">
            News and insights from the frontlines of industrial development and
            large scale architectural deployment.
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <ConstructionBlog />
      </div>

      <ConstructionFooter />
    </div>
  );
};

export default ConstructionBlogPage;
