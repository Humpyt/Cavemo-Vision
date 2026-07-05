import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CorporateBlog from "../components/CorporateBlog";
import CorporateFooter from "../components/CorporateFooter";
import { ArrowLeft } from "lucide-react";

interface Props {
  onHomeClick: () => void;
  onPageChange: (page: any) => void;
  onVariantChange: (variant: any) => void;
}

const CorporateBlogPage: React.FC<Props> = ({
  onHomeClick,
  onPageChange,
  onVariantChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A0B] min-h-screen text-slate-900 font-sans">
      <Navbar
        activeVariant="corporate"
        currentPage="blog-corporate"
        onVariantChange={onVariantChange}
        onPageChange={onPageChange}
      />

      <div className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Headquarters
        </button>

        <h1 className="text-5xl md:text-8xl font-bold font-[Syne] text-white leading-[1.1] mb-6">
          Global <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Insights.
          </span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Examining transformational impact and M&A execution strategies across
          Fortune 500 enterprises.
        </p>
      </div>

      <div className="bg-white">
        <CorporateBlog />
      </div>

      <CorporateFooter />
    </div>
  );
};

export default CorporateBlogPage;
