import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SoftwareBlog from "../components/SoftwareBlog";
import SoftwareFooter from "../components/SoftwareFooter";
import { ArrowLeft, Terminal } from "lucide-react";

interface Props {
  onHomeClick: () => void;
  onPageChange: (page: any) => void;
  onVariantChange: (variant: any) => void;
}

const SoftwareBlogPage: React.FC<Props> = ({
  onHomeClick,
  onPageChange,
  onVariantChange,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navbar
        activeVariant="software"
        currentPage="blog-software"
        onVariantChange={onVariantChange}
        onPageChange={onPageChange}
      />

      <div className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.1),transparent_50%)]">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-2 text-white/50 hover:text-cyan-400 transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> &lt;Go_Back /&gt;
        </button>

        <div className="inline-block border border-cyan-500/30 px-4 py-2 mb-8 bg-cyan-500/5 backdrop-blur-sm rounded-lg">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> ~/learning/logs
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-mono tracking-tighter text-white leading-[1.1] mb-6">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Journal.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl font-mono leading-relaxed border-l-2 border-cyan-500/30 pl-4">
          A catalogue of our engineering thoughts, highlighting resilient node
          networks and edge-computed scaling techniques.
        </p>
      </div>

      <SoftwareBlog />

      <SoftwareFooter />
    </div>
  );
};

export default SoftwareBlogPage;
