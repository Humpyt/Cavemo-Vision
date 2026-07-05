
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowUpRight, Layout, Sparkles, HardHat, Building, Monitor, ArrowRight, ShieldCheck, Diamond, Zap, Briefcase, Rocket, Info, Sparkle, History, Users, UserCircle, BriefcaseIcon, BookOpen, Fingerprint, Newspaper, CreditCard, MessageSquare, HelpCircle, PhoneCall, Cpu, Target, Layers } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
    activeVariant?: 'classic' | 'classic2' | 'classic3' | 'classic4' | 'classic5' | 'classic6' | 'creative' | 'construction' | 'corporate' | 'modern' | 'home6' | 'home7' | 'home8' | 'home9' | 'software';
    currentPage?: 'home' | 'about' | 'about2' | 'history' | 'team' | 'team-details' | 'careers' | 'careers-details' | 'news' | 'pricing' | 'feedback' | 'faq' | 'contact' | 'srv-classic' | 'srv-creative' | 'srv-construction' | 'srv-empower' | 'srv-executive' | 'srv-light' | 'port-creative' | 'port-corporate' | 'port-software' | 'port-construction' | 'blog-creative' | 'blog-corporate' | 'blog-software' | 'blog-construction';
    onVariantChange: (variant: 'classic' | 'classic2' | 'classic3' | 'classic4' | 'classic5' | 'classic6' | 'creative' | 'construction' | 'corporate' | 'modern' | 'home6' | 'home7' | 'home8' | 'home9' | 'software') => void;
    onPageChange: (page: 'home' | 'about' | 'about2' | 'history' | 'team' | 'team-details' | 'careers' | 'careers-details' | 'news' | 'pricing' | 'feedback' | 'faq' | 'contact' | 'srv-classic' | 'srv-creative' | 'srv-construction' | 'srv-empower' | 'srv-executive' | 'srv-light' | 'port-creative' | 'port-corporate' | 'port-software' | 'port-construction' | 'blog-creative' | 'blog-corporate' | 'blog-software' | 'blog-construction') => void;
}

const VARIANTS = [
    { id: 'classic', name: 'Classic Corporate', desc: 'Traditional consulting edge.', tag: 'Standard', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&h=250&fit=crop', icon: Layout },
    { id: 'classic2', name: 'Classic Corporate 2', desc: 'Modern high-impact classic.', tag: 'New', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&h=250&fit=crop', icon: Target },
    { id: 'classic3', name: 'Classic Corporate 3', desc: 'Futuristic premium corporate.', tag: 'Hot', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=250&fit=crop', icon: Layout },
    { id: 'classic4', name: 'Classic Corporate 4', desc: 'Sleek dark mode corporate.', tag: 'Dark', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=250&fit=crop', icon: Zap },
    { id: 'classic5', name: 'Classic Corporate 5', desc: 'Luxury ivory design scheme.', tag: 'Luxury', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&h=250&fit=crop', icon: Diamond },
    { id: 'classic6', name: 'Classic Corporate 6', desc: 'Monolithic Swiss Grid design.', tag: 'Swiss', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&h=250&fit=crop', icon: Target },
    { id: 'creative', name: 'Creative Studio', desc: 'Dark mode agency energy.', tag: 'Agency', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=250&fit=crop', icon: Sparkles },
    { id: 'construction', name: 'Build & Industrial', desc: 'Heavy-duty construction.', tag: 'Industry', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400&h=250&fit=crop', icon: HardHat },
    { id: 'software', name: 'Software & Web', desc: 'High-tech engineering.', tag: 'Tech', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=250&fit=crop', icon: Cpu },
    { id: 'home9', name: 'Bexon Empower', desc: 'Deep teal mesh tones.', tag: 'Featured', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=250&fit=crop', icon: Rocket },
    { id: 'home8', name: 'Bexon Executive', desc: 'High-impact executive.', tag: 'Premium', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&h=250&fit=crop', icon: Briefcase },
    { id: 'home7', name: 'Bexon Light', desc: 'Airy minimalist layout.', tag: 'Empowering', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&h=250&fit=crop', icon: Zap },
] as const;

const Navbar: React.FC<NavbarProps> = ({ activeVariant = 'classic', currentPage = 'home', onVariantChange, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuHoverIdx, setMenuHoverIdx] = useState<number>(VARIANTS.findIndex(v => v.id === activeVariant));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkTheme = activeVariant === 'creative' || activeVariant === 'corporate' || activeVariant === 'home6' || activeVariant === 'home9' || (currentPage !== 'home');

  const getNavbarStyles = () => {
      if (isDarkTheme) {
          return scrolled || hoveredLink
            ? 'w-full max-w-[1400px] bg-black/90 backdrop-blur-xl shadow-xl rounded-2xl py-3 px-6 text-white border border-white/5' 
            : 'w-[96%] bg-transparent py-4 px-2 md:px-6 text-white';
      }
      return scrolled || hoveredLink
        ? 'w-full max-w-[1400px] bg-white shadow-xl rounded-2xl py-3 px-6 text-slate-900 border border-slate-100'
        : 'w-full bg-white/50 backdrop-blur-md py-4 px-8 text-slate-900 border-b border-slate-100';
  };

  const PageItem = ({ icon: Icon, title, desc, onClick }: any) => (
    <button onClick={onClick} className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
        <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-teal-500 group-hover/item:text-white transition-all">
            <Icon className="w-4 h-4" />
        </div>
        <div className="text-left">
            <h4 className="font-bold text-xs text-slate-900">{title}</h4>
            <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">{desc}</p>
        </div>
    </button>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${!isDarkTheme && !scrolled ? 'mt-0' : 'mt-4 md:mt-6'}`}>
        <div 
            className={`flex items-center justify-between relative ${getNavbarStyles()} transition-all duration-500`}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onPageChange('home')}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg ${isDarkTheme ? 'bg-white text-black' : 'bg-teal-500 text-white'}`}>
                    B
                </div>
                <span className={`font-extrabold text-2xl tracking-tighter ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
                    Bexon<span className="text-teal-500">.</span>
                </span>
            </div>

            <div className="hidden lg:flex items-center px-2 py-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group/menu">
                    <button
                        className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1
                            ${isDarkTheme ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'}
                        `}
                        onMouseEnter={() => setHoveredLink(link.label)}
                    >
                        {link.label}
                        {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover/menu:rotate-180 transition-transform" />}
                    </button>

                    {/* Home Mega Dropdown */}
                    {link.label === 'Home' && hoveredLink === 'Home' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[850px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex">
                                <div className="w-1/2 p-4 bg-slate-50/50 border-r border-slate-100">
                                    <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Select Experience</p>
                                    <div className="space-y-1">
                                        {VARIANTS.map((v, idx) => (
                                            <div key={v.id} onMouseEnter={() => setMenuHoverIdx(idx)} onClick={() => { onVariantChange(v.id as any); setHoveredLink(null); }} className={`group/item flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${menuHoverIdx === idx ? 'bg-white shadow-lg ring-1 ring-slate-200' : 'hover:bg-white/50'}`}>
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${menuHoverIdx === idx ? 'bg-slate-900 text-white scale-110' : 'bg-slate-200 text-slate-500'}`}><v.icon className="w-5 h-5" /></div>
                                                <div className="flex-1 text-slate-900"><h4 className="font-bold text-sm">{v.name}</h4><p className="text-[11px] text-slate-400 leading-tight">{v.desc}</p></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-1/2 p-8 flex flex-col justify-between bg-white relative">
                                    <img src={VARIANTS[menuHoverIdx]?.img} className="aspect-video rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition-all mb-4" />
                                    <h3 className="text-xl font-bold text-slate-900 font-[Syne]">Explore {VARIANTS[menuHoverIdx]?.name}</h3>
                                    <button onClick={() => { onVariantChange(VARIANTS[menuHoverIdx].id as any); setHoveredLink(null); }} className="mt-6 w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-teal-600 transition-all">Live Preview <ArrowRight className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Services Mega Dropdown */}
                    {link.label === 'Services' && hoveredLink === 'Services' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[1100px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex p-6 gap-6">
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-teal-600 uppercase tracking-[0.3em] mb-4">Strategic</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Target} title="Classic Logic" desc="Consulting Excellence" onClick={() => onPageChange('srv-classic')} />
                                        <PageItem icon={Briefcase} title="Executive M&A" desc="Boardroom Mastery" onClick={() => onPageChange('srv-executive')} />
                                        <PageItem icon={ShieldCheck} title="Risk Audit" desc="Integrity Division" onClick={() => onPageChange('srv-classic')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-blue-600 uppercase tracking-[0.3em] mb-4">Technical</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Cpu} title="Empower Tech" desc="Neural Infrastructures" onClick={() => onPageChange('srv-empower')} />
                                        <PageItem icon={HardHat} title="Build & Build" desc="Structural Integrity" onClick={() => onPageChange('srv-construction')} />
                                        <PageItem icon={Layers} title="Digital Flux" desc="System Optimizers" onClick={() => onPageChange('srv-light')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2">
                                    <h5 className="px-4 text-[9px] font-extrabold text-purple-600 uppercase tracking-[0.3em] mb-4">Creative</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Sparkles} title="Studio Lab" desc="Identity Engineering" onClick={() => onPageChange('srv-creative')} />
                                        <PageItem icon={Zap} title="Light Growth" desc="Minimalist Scaling" onClick={() => onPageChange('srv-light')} />
                                        <PageItem icon={Diamond} title="Premium Work" desc="Elite Production" onClick={() => onPageChange('srv-executive')} />
                                    </div>
                                </div>
                                <div className="w-[300px] bg-slate-900 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-transparent"></div>
                                    <h4 className="text-xl font-bold text-white mb-2 font-[Syne]">Ready for <br /> Transformation?</h4>
                                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-6">Expertise available 24/7</p>
                                    <button onClick={() => onPageChange('contact')} className="flex items-center gap-2 text-white font-bold text-xs uppercase hover:text-teal-400 transition-colors">
                                        Start Your Audit <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {link.label === 'Pages' && hoveredLink === 'Pages' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[1100px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex p-6 gap-6">
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-teal-600 uppercase tracking-[0.3em] mb-4">Narrative</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Info} title="About 01" desc="Cinema Narrative" onClick={() => onPageChange('about')} />
                                        <PageItem icon={Sparkle} title="About 02" desc="Experimental Logic" onClick={() => onPageChange('about2')} />
                                        <PageItem icon={History} title="Our History" desc="Chronos Archive" onClick={() => onPageChange('history')} />
                                        <PageItem icon={Newspaper} title="Latest News" desc="The Intel Log" onClick={() => onPageChange('news')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-blue-600 uppercase tracking-[0.3em] mb-4">Collective</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Users} title="Our Team" desc="Meet Operators" onClick={() => onPageChange('team')} />
                                        <PageItem icon={UserCircle} title="Team Details" desc="Operator Spec" onClick={() => onPageChange('team-details')} />
                                        <PageItem icon={MessageSquare} title="Feedback" desc="Client Signals" onClick={() => onPageChange('feedback')} />
                                        <PageItem icon={Fingerprint} title="Our Values" desc="Core Logic" onClick={() => onPageChange('about')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-orange-600 uppercase tracking-[0.3em] mb-4">Opportunity</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={BriefcaseIcon} title="Careers" desc="Join Anomaly" onClick={() => onPageChange('careers')} />
                                        <PageItem icon={Zap} title="Role Spec" desc="Unit Details" onClick={() => onPageChange('careers-details')} />
                                        <PageItem icon={CreditCard} title="Pricing Plan" desc="Investment Models" onClick={() => onPageChange('pricing')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2">
                                    <h5 className="px-4 text-[9px] font-extrabold text-purple-600 uppercase tracking-[0.3em] mb-4">Utility</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={HelpCircle} title="FAQ" desc="Protocol Manual" onClick={() => onPageChange('faq')} />
                                        <PageItem icon={PhoneCall} title="Contact" desc="Initialize Uplink" onClick={() => onPageChange('contact')} />
                                        <PageItem icon={Rocket} title="Mission" desc="The Strategy" onClick={() => onPageChange('history')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {link.label === 'Portfolio' && hoveredLink === 'Portfolio' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex p-6 gap-6">
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-indigo-600 uppercase tracking-[0.3em] mb-4">Enterprise</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Briefcase} title="Corporate Work" desc="Global M&A" onClick={() => onPageChange('port-corporate')} />
                                        <PageItem icon={HardHat} title="Construction" desc="Built Environments" onClick={() => onPageChange('port-construction')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-pink-600 uppercase tracking-[0.3em] mb-4">Tech & Design</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Sparkles} title="Creative Hub" desc="Identity Lab" onClick={() => onPageChange('port-creative')} />
                                        <PageItem icon={Cpu} title="Software Log" desc="Systems Built" onClick={() => onPageChange('port-software')} />
                                    </div>
                                </div>
                                <div className="w-[250px] bg-slate-50 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-end border border-slate-100">
                                    <h4 className="text-sm font-bold text-slate-900 mb-2 font-[Syne]">View all cases</h4>
                                    <p className="text-slate-500 text-[10px] mb-4">Explore our entire catalogue of successful transformations.</p>
                                    <button className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase hover:text-teal-700 transition-colors">
                                        View Archive <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {link.label === 'Blog' && hoveredLink === 'Blog' && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px] animate-fade-in-up origin-top">
                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex p-6 gap-6">
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-teal-600 uppercase tracking-[0.3em] mb-4">Enterprise</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Briefcase} title="Corporate Press" desc="Global Insights" onClick={() => onPageChange('blog-corporate')} />
                                        <PageItem icon={HardHat} title="Construction News" desc="Industry Updates" onClick={() => onPageChange('blog-construction')} />
                                    </div>
                                </div>
                                <div className="flex-1 p-2 border-r border-slate-50">
                                    <h5 className="px-4 text-[9px] font-extrabold text-blue-600 uppercase tracking-[0.3em] mb-4">Tech & Design</h5>
                                    <div className="space-y-1">
                                        <PageItem icon={Sparkles} title="The Journal" desc="Culture & Chaos" onClick={() => onPageChange('blog-creative')} />
                                        <PageItem icon={Cpu} title="Engineering Log" desc="Technical Dives" onClick={() => onPageChange('blog-software')} />
                                    </div>
                                </div>
                                <div className="w-[250px] bg-slate-900 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-end border border-slate-800">
                                    <h4 className="text-sm font-bold text-white mb-2 font-[Syne]">Read the Latest</h4>
                                    <p className="text-slate-400 text-[10px] mb-4">Stay updated with our newest publications and research.</p>
                                    <button className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase hover:text-white transition-colors">
                                        View All Posts <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkTheme ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-900'}`}><Search className="w-4 h-4" /></button>
                <button onClick={() => onPageChange('contact')} className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${isDarkTheme ? 'bg-white text-black hover:bg-teal-400' : 'bg-slate-900 text-white hover:bg-teal-600'}`}>Let's Talk <ArrowUpRight className="w-4 h-4" /></button>
            </div>
            <div className="lg:hidden">
               <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 lg:hidden">
            <div className="space-y-4">
                {['home', 'about', 'news', 'team', 'careers', 'pricing', 'faq', 'contact'].map(p => (
                    <button key={p} onClick={() => { onPageChange(p as any); setIsOpen(false); }} className="block w-full text-left text-3xl font-extrabold text-slate-900 py-3 border-b border-slate-100 font-[Syne] capitalize">{p}</button>
                ))}
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
