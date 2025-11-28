import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className={`
          flex items-center justify-between 
          ${scrolled 
            ? 'w-full max-w-[1400px] bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-900/5 rounded-2xl py-3 px-6' 
            : 'w-[96%] bg-transparent py-4 px-2 md:px-6'
          }
          transition-all duration-500
        `}>
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg ${scrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
                C
              </div>
              <span className={`font-extrabold text-2xl tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>Cavemo<span className="text-teal-500">.</span></span>
            </div>

            {/* Desktop Menu - Pill Shape */}
            <div className={`hidden lg:flex items-center px-2 py-1`}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full
                    ${scrolled 
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50' 
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </span>
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                <Search className="w-4 h-4" />
              </button>
              <button className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${scrolled ? 'bg-slate-900 text-white hover:bg-teal-600' : 'bg-white text-slate-900 hover:bg-teal-400'}`}>
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
               <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  {isOpen ? <X /> : <Menu />}
               </button>
            </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 lg:hidden">
          <div className="space-y-2">
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