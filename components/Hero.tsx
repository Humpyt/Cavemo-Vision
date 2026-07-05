import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, Award, Plus, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    title: (
      <>
        Driving Excellence <br />
        Through Evolution <br />
        and <span className="text-[#20A69A]">Trust.</span>
      </>
    ),
    desc: 'Represents growth, expansion, and modern business solution present growth, expansion.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: (
      <>
        Empowering Growth <br />
        With Strategic <br />
        <span className="text-[#20A69A]">Innovation.</span>
      </>
    ),
    desc: 'Transforming visionary ideas into measurable market advantages through data-driven planning.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: (
      <>
        Building Legacies <br />
        Through Global <br />
        <span className="text-[#20A69A]">Intelligence.</span>
      </>
    ),
    desc: 'Architecting sustainable corporate dominance across international business environments.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section id="hero-classic" className="w-full h-[100svh] min-h-[700px] flex flex-col lg:flex-row overflow-hidden font-sans group">
       {/* LEFT PANEL */}
       <div className="w-full lg:w-1/2 h-full bg-[#112325] relative flex flex-col justify-center p-10 md:p-16 lg:p-24 overflow-hidden text-white shadow-xl z-10 isolate transition-all duration-700">
           {/* Background Lines/Texture */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }}></div>
           <div className="absolute inset-0 bg-gradient-to-r from-[#112325] via-[#112325]/90 to-transparent -z-10"></div>

           {/* Scroll Down Vertical Text */}
           <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 flex items-center gap-4 -rotate-90 origin-left text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap hidden sm:flex">
               <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center rotate-90">
                    <ArrowLeft className="w-4 h-4 text-white/70" />
               </div>
               Scroll Down
           </div>

           <div className="pl-0 sm:pl-12 lg:pl-16 relative z-10 w-full flex-1 flex flex-col justify-center">
               {/* Top Badge */}
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-dashed border-white/20 mb-8 sm:mb-12 w-fit">
                   <Award className="w-4 h-4 text-[#20A69A]" />
                   <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">
                       Recognized for Excellence
                   </span>
               </div>

               {/* Main Title Container */}
               <div className="relative h-[220px] sm:h-[260px] md:h-[300px] xl:h-[340px] w-full">
                   {SLIDES.map((slide, idx) => (
                       <div 
                           key={idx} 
                           className={`absolute top-0 left-0 w-full transition-all duration-1000 transform ${
                               idx === currentSlide ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
                           }`}
                       >
                           <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold font-[Syne] text-white leading-[1.05] tracking-tight max-w-3xl">
                               {slide.title}
                           </h1>
                       </div>
                   ))}
               </div>

               {/* Bottom info section */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 max-w-xl border-t border-white/10 pt-10 mt-auto relative h-[140px] sm:h-[100px]">
                   <div className="w-16 h-16 shrink-0 border border-white/20 rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-[#112325] transition-all bg-transparent shadow-lg">
                       <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1} />
                   </div>
                   <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                   <div className="relative w-full h-full flex items-center">
                       {SLIDES.map((slide, idx) => (
                           <p 
                               key={idx}
                               className={`absolute top-1/2 -translate-y-1/2 left-0 text-slate-300 text-sm leading-relaxed max-w-xs font-light transition-opacity duration-1000 ${
                                   idx === currentSlide ? 'opacity-100' : 'opacity-0'
                               }`}
                           >
                               {slide.desc}
                           </p>
                       ))}
                   </div>
               </div>
           </div>

           {/* Custom Slider Controls */}
           <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-auto sm:right-12 flex gap-3 z-30">
               <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#112325] transition-colors">
                   <ChevronLeft className="w-5 h-5" />
               </button>
               <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#112325] transition-colors">
                   <ChevronRight className="w-5 h-5" />
               </button>
           </div>
       </div>

       {/* RIGHT PANEL */}
       <div className="w-full lg:w-1/2 h-full relative overflow-hidden hidden md:block">
           {SLIDES.map((slide, idx) => (
               <img 
                   key={idx}
                   src={slide.img} 
                   className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[2s] ease-in-out ${
                       idx === currentSlide 
                           ? 'opacity-100 scale-100' 
                           : 'opacity-0 scale-105'
                   }`} 
                   alt={`Slide ${idx + 1}`} 
               />
           ))}
           <div className="absolute inset-0 bg-[#112325]/10"></div>

           {/* Creative Slider Dots */}
           <div className="absolute top-12 right-12 flex gap-3 z-20">
                {SLIDES.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                            idx === currentSlide ? 'w-10 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
                        }`}
                    />
                ))}
           </div>

           {/* White Floating Card */}
           <div className="absolute bottom-12 left-12 bg-white rounded-3xl p-8 shadow-2xl w-[280px] transition-transform duration-700 hover:scale-105">
               <div className="flex -space-x-4 mb-6">
                   <img src="https://i.pravatar.cc/100?img=11" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" alt="User 1"/>
                   <img src="https://i.pravatar.cc/100?img=21" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" alt="User 2"/>
                   <img src="https://i.pravatar.cc/100?img=33" className="w-14 h-14 rounded-full border-[3px] border-white object-cover shadow-sm" alt="User 3"/>
                   <div className="w-14 h-14 rounded-full border-[3px] border-white bg-[#20A69A] text-white flex items-center justify-center relative z-10 shadow-sm cursor-pointer hover:bg-teal-600 transition-colors">
                       <Plus className="w-5 h-5" />
                   </div>
               </div>
               <h4 className="text-5xl font-bold font-[Syne] tracking-tight text-slate-900 mb-2">30K</h4>
               <p className="text-slate-500 text-sm font-medium leading-relaxed">
                   Happy customer we have world-wide.
               </p>
           </div>

           {/* Small floating document button */}
           <div className="absolute bottom-12 right-12 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 hover:bg-white transition-all">
               <FileText className="w-6 h-6 text-rose-500 fill-current opacity-90" />
           </div>
       </div>
    </section>
  );
};

export default Hero;
