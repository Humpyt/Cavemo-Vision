
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight, Layout, Sparkles, HardHat, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
    activeVariant?: 'classic' | 'creative' | 'construction';
    onVariantChange: (variant: 'classic' | 'creative' | 'construction') => void;
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

  const getNavbarStyles = () => {
      if (activeVariant === 'creative') {
          return scrolled || hoveredLink === 'Home' 
            ? 'w-full max-w-[1400px] bg-black/90 backdrop-blur-xl shadow-xl shadow-purple-900/10 rounded-2xl py-3 px-6 text-white' 
            : 'w-[96%] bg-transparent py-4 px-2 md:px-6 text-white';
      }
      if (activeVariant === 'construction') {
           return 'w-full bg-[#1A1A1A] py-4 px-8 text-white border-b border-white/5';
      }
      return scrolled || hoveredLink === 'Home'
        ? 'w-full max-w-[1400px] bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-900/5 rounded-2xl py-3 px-6 text-slate-900' 
        : 'w-[96%] bg-transparent py-4 px-2 md:px-6 text-white';
  };

  const getLogoStyles = () => {
      if (activeVariant === 'creative') return 'bg-white text-black';
      if (activeVariant === 'construction') return 'bg-transparent text-white'; // Custom logic below for icon
      return scrolled || hoveredLink === 'Home' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900';
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${activeVariant === 'construction' ? 'mt-0' : 'mt-4 md:mt-6'}`}>
        <div 
            className={`
            flex items-center justify-between relative
            ${getNavbarStyles()}
            transition-all duration-500
            `}
            onMouseLeave={() => setHoveredLink(null)}
        >
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onVariantChange('classic')}>
              {activeVariant === 'construction' ? (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                         <div className="w-4 h-4 bg-yellow-500 rounded-sm rotate-45"></div>
                    </div>
                    <span className="font-extrabold text-xl tracking-wide text-white uppercase font-[Manrope]">
                        Renovex<span className="text-yellow-500">.</span>
                    </span>
                </div>
              ) : (
                  <>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg ${getLogoStyles()}`}>
                        C
                    </div>
                    <span className={`font-extrabold text-2xl tracking-tighter ${activeVariant === 'creative' ? 'text-white' : scrolled || hoveredLink === 'Home' ? 'text-slate-900' : 'text-white'}`}>
                        Cavemo<span className="text-teal-500">.</span>
                    </span>
                  </>
              )}
            </div>

            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center px-2 py-1`}>
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group/menu">
                    <a
                    href={link.href}
                    className={`
                        relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1
                        ${activeVariant === 'construction' 
                            ? 'text-slate-300 hover:text-white text-[13px] tracking-wide'
                            : (scrolled || hoveredLink === 'Home') && activeVariant === 'classic'
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2rem] shadow-2xl ring-1 ring-slate-900/5 p-2 overflow-hidden">
                                <div className="grid grid-cols-3 gap-2">
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
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-slate-900">Classic</h4>
                                                <p className="text-xs text-slate-500">Corporate</p>
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
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className={`font-bold ${activeVariant === 'creative' ? 'text-black' : 'text-slate-900'}`}>Creative</h4>
                                                <p className="text-xs text-slate-500">Studio</p>
                                            </div>
                                            {activeVariant === 'creative' && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                                        </div>
                                    </div>

                                    {/* Construction Option */}
                                    <div 
                                        className={`group/card relative rounded-[1.5rem] p-4 cursor-pointer transition-all border-2 ${activeVariant === 'construction' ? 'bg-yellow-50 border-yellow-500' : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}`}
                                        onClick={() => {
                                            onVariantChange('construction');
                                            setHoveredLink(null);
                                        }}
                                    >
                                        <div className="aspect-[16/10] rounded-xl bg-slate-800 mb-4 overflow-hidden relative shadow-inner">
                                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500">
                                                <div className="absolute inset-0 bg-yellow-500/80 mix-blend-multiply"></div>
                                                <HardHat className="w-10 h-10 text-white/50 relative z-10" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className={`font-bold ${activeVariant === 'construction' ? 'text-black' : 'text-slate-900'}`}>Construction</h4>
                                                <p className="text-xs text-slate-500">Industrial</p>
                                            </div>
                                            {activeVariant === 'construction' && <div className="w-2 h-2 rounded-full bg-yellow-500"></div>}
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
            <div className="hidden lg:flex items-center gap-6">
              {activeVariant === 'construction' ? (
                   <button className="bg-yellow-400 text-black px-6 py-3 font-bold text-sm hover:bg-white transition-colors flex items-center gap-2">
                       Get In Touch <ArrowRight className="w-4 h-4" />
                   </button>
              ) : (
                <>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeVariant === 'creative' ? 'bg-white/10 text-white hover:bg-white/20' : (scrolled || hoveredLink === 'Home') ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                        <Search className="w-4 h-4" />
                    </button>
                    <button className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${
                        activeVariant === 'creative'
                            ? 'bg-white text-black hover:bg-purple-400'
                            : (scrolled || hoveredLink === 'Home') 
                                ? 'bg-slate-900 text-white hover:bg-teal-600' 
                                : 'bg-white text-slate-900 hover:bg-teal-400'
                    }`}>
                        Let's Talk
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
               <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${activeVariant === 'construction' ? 'text-yellow-500' : ((scrolled || activeVariant === 'classic') ? 'text-slate-900' : 'text-white')}`}>
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
                <div className="flex flex-col gap-2">
                    <button 
                        onClick={() => { onVariantChange('classic'); setIsOpen(false); }}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-left ${activeVariant === 'classic' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
                    >
                        Classic Consultancy
                    </button>
                    <button 
                        onClick={() => { onVariantChange('creative'); setIsOpen(false); }}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-left ${activeVariant === 'creative' ? 'bg-purple-600 text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
                    >
                        Creative Studio
                    </button>
                    <button 
                        onClick={() => { onVariantChange('construction'); setIsOpen(false); }}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-left ${activeVariant === 'construction' ? 'bg-yellow-500 text-black' : 'bg-white border border-slate-200 text-slate-600'}`}
                    >
                        Construction
                    </button>
                </div>
            </div>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="block text-3xl font-extrabold text-slate-900 py-3 border-b border-slate-100 font-[Syne]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
