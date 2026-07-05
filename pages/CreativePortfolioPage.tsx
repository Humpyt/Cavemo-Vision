import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import CreativeWork from '../components/CreativeWork';
import CreativeLab from '../components/CreativeLab';
import CreativeFooter from '../components/CreativeFooter';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onHomeClick: () => void;
  onPageChange: (page: any) => void;
  onVariantChange: (variant: any) => void;
}

const CreativePortfolioPage: React.FC<Props> = ({ onHomeClick, onPageChange, onVariantChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30">
      <Navbar 
        activeVariant="creative"
        currentPage="port-creative"
        onVariantChange={onVariantChange}
        onPageChange={onPageChange}
      />
      
      <div className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold font-mono"
        >
          <ArrowLeft className="w-4 h-4" /> Back to System
        </button>
        
        <h1 className="text-5xl md:text-8xl font-bold font-[Syne] text-white leading-none tracking-tighter mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Creative</span> <br />
          Archive.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl font-mono">
          Exploring the boundaries of high-contrast digital brutalism and sensory interaction.
        </p>
      </div>

      <CreativeWork onProjectSelect={() => {}} />
      <CreativeLab />
      
      <CreativeFooter />
    </div>
  );
};

export default CreativePortfolioPage;
