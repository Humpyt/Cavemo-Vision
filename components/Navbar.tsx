
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight, Layout, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
    activeVariant?: 'classic' | 'creative';
    onVariantChange: (variant: 'classic' | 'creative') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeVariant = 'classic', onVariantChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center transition-all duration-500 px-2 md:px-4`}>
        <div 
            className={`
            flex items-center justify-between relative
            ${scrolled || hoveredLink === 'Home'
                ? 'w-full max-w-[1400px] bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-900/5 rounded-2xl py-3 px-6' 
                : 'w-[96%] bg-transparent py-4 px-2 md:px-6'
            }
            transition-all duration-500
            `}
            onMouseLeave={() => setHoveredLink(null)}
        >
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onVariantChange('classic')}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg ${scrolled || hoveredLink === 'Home' || activeVariant === 'classic' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                C
              </div>
              <span className={`font-extrabold text-2xl tracking-tighter ${scrolled || hoveredLink === 'Home' || activeVariant === 'classic' ? 'text-slate-900' : 'text-white'}`}>Cavemo<span className="text-teal-500">.</span></span>
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center px-2 py-1`}>
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group/menu">
                    <a
                    href={link.href}
                    className={`
                        relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1
                        ${scrolled || hoveredLink === 'Home' || activeVariant === 'classic'
                            ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50' 
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }
                    `}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    >
                        {link.label}
                        {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover/menu:rotate-180 transition-transform" />}
                    </a>

                    {/* Mega Menu for Home */}
                    {link.label === 'Home' && hoveredLink === 'Home' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2rem] shadow-2xl ring-1 ring-slate-900/5 p-2 overflow-hidden">
                                <div className="grid grid-cols-2 gap-2">
                                    {/* Classic Option */}
                                    <div 
                                        className={`group/card relative rounded-[1.5rem] p-4 cursor-pointer transition-all border-2 ${activeVariant === 'classic' ? 'bg-slate-50 border-teal-500' : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}`}
                                        onClick={() => {
                                            onVariantChange('classic');
                                            setHoveredLink(null);
                                        }}
                                    >
                                        <div className="aspect-[16/10] rounded-xl bg-slate-900 mb-4 overflow-hidden relative shadow-inner">
                                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500">
                                                <Layout className="w-10 h-10 text-white/20" />
                                            </div>
                                            {/* Preview Mockup */}
                                            <div className="absolute inset-2 bg-slate-950 rounded-lg flex flex-col p-2 opacity-80">
                                                <div className="w-1/2 h-2 bg-white/20 rounded-full mb-2"></div>
                                                <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-slate-900">Classic Consultancy</h4>
                                                <p className="text-xs text-slate-500">Corporate & Professional</p>
                                            </div>
                                            {activeVariant === 'classic' && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                                        </div>
                                    </div>

                                    {/* Creative Option */}
                                    <div 
                                        className={`group/card relative rounded-[1.5rem] p-4 cursor-pointer transition-all border-2 ${activeVariant === 'creative' ? 'bg-slate-950 border-purple-500' : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}`}
                                        onClick={() => {
                                            onVariantChange('creative');
                                            setHoveredLink(null);
                                        }}
                                    >
                                        <div className="aspect-[16/10] rounded-xl bg-black mb-4 overflow-hidden relative shadow-inner">
                                             <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500">
                                                <Sparkles className="w-10 h-10 text-white/20" />
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <h1 className="text-white text-[10px] font-[Syne] font-bold">CREATIVE</h1>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className={`font-bold ${activeVariant === 'creative' ? 'text-white' : 'text-slate-900'}`}>Creative Studio</h4>
                                                <p className={`text-xs ${activeVariant === 'creative' ? 'text-slate-400' : 'text-slate-500'}`}>Bold & Immersive</p>
                                            </div>
                                            {activeVariant === 'creative' && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled || hoveredLink === 'Home' || activeVariant === 'classic' ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <Search className="w-4 h-4" />
              </button>
              <button className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${scrolled || hoveredLink === 'Home' || activeVariant === 'classic' ? 'bg-slate-900 text-white hover:bg-teal-600' : 'bg-white text-slate-900 hover:bg-teal-400'}`}>
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
               <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled || activeVariant === 'classic' ? 'text-slate-900' : 'text-white'}`}>
                  {isOpen ? <X /> : <Menu />}
               </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 lg:hidden">
          <div className="space-y-2">
            <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Select Experience</p>
                <div className="flex gap-2">
                    <button 
                        onClick={() => { onVariantChange('classic'); setIsOpen(false); }}
                        className={`flex-1 py-3 rounded-xl font-bold text-sm ${activeVariant === 'classic' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
                    >
                        Classic
                    </button>
                    <button 
                        onClick={() => { onVariantChange('creative'); setIsOpen(false); }}
                        className={`flex-1 py-3 rounded-xl font-bold text-sm ${activeVariant === 'creative' ? 'bg-purple-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
                    >
                        Creative
                    </button>
                </div>
            </div>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="block text-3xl font-extrabold text-slate-900 py-3 border-b border-slate-100 font-[Syne]">
                {link.label}
              </a>
            ))}
            <button className="w-full mt-8 bg-teal-600 text-white py-4 rounded-xl font-bold text-lg">
                Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
