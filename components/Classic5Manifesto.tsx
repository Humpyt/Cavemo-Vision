import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Pause, Volume2, ShieldAlert, Award, FileText } from 'lucide-react';

const Classic5Manifesto: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioTimer, setAudioTimer] = useState<number>(0);
  const [activeNoteIdx, setActiveNoteIdx] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioTimer(prev => (prev >= 174 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formattingTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const corporateTenets = [
    { title: "Dynamic Arbitrage", text: "Traditional strategies rely on steady markets. True sovereignty exploits volatile fluctuations through dynamic algorithmic redirection." },
    { title: "Sovereign Shielding", text: "We isolate corporate units inside specialized legal, fiscal, and operational cages, fully insulating core capital from peripheral vulnerabilities." },
    { title: "Total Integration", text: "We do not believe in standard software patches. Our teams perform systemic re-scaffolding, merging digital structures with physical supply paths." }
  ];

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#187A70]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: The Typography rich Manifesto & Tenets list */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Vol. V // Operational Philosophy</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-bold font-[Syne] tracking-tight leading-[0.93] text-[#0B1215] mb-8">
                GROWTH IS A <br />
                <span className="font-light italic text-[#187A70] font-sans">Mechanical</span> <br />
                CONSTANT.
              </h2>
            </div>

            {/* Tenet Grid Separator */}
            <div className="space-y-8 border-t border-[#0B1215]/10 pt-10">
              <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed max-w-3xl">
                "Legacy paradigms fail because they treat market positioning as static. We design business ecosystems as fluid organic entities capable of immediate self-insulating transformation."
              </p>
              
              {/* Interactive Tenet Switcher */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {corporateTenets.map((tenet, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveNoteIdx(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeNoteIdx === idx ? 'bg-white border-[#187A70] shadow-md' : 'bg-transparent border-[#0B1215]/10 hover:border-[#0B1215]/30'}`}
                  >
                    <span className="font-mono text-xs text-[#187A70] font-bold tracking-widest block mb-2">TENET 0{idx+1}</span>
                    <h4 className="font-[Syne] font-bold text-[#0B1215] mb-2">{tenet.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{tenet.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium Simulated Audio Briefing Player Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="bg-[#0B1215] text-[#FAF9F5] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col justify-between aspect-[1.15/1] sm:aspect-[1.2/1] lg:aspect-square group max-w-lg mx-auto w-full">
              {/* Concentric radial texture */}
              <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_right,rgba(24,122,112,0.15),transparent)] rounded-t-[2.5rem] pointer-events-none"></div>

              {/* Running header of player */}
              <div className="flex justify-between items-start relative z-10 border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#187A70] animate-pulse"></span>
                  <span className="text-[9px] font-mono tracking-widest text-[#187A70] uppercase font-black">BRIEFING FEED</span>
                </div>
                <span className="text-[9px] font-mono text-white/40 tracking-widest">Q3 INTEL RE-TRANSMISSION</span>
              </div>

              {/* Player Info */}
              <div className="relative z-10 my-auto text-center">
                <p className="text-[#187A70] text-xs font-mono tracking-widest uppercase mb-2">DIAGNOSTIC EXECUTIVE TAPE</p>
                <h3 className="text-2xl sm:text-3xl font-[Syne] font-bold text-white leading-tight mb-2">
                  Sovereign Architecture Protocol
                </h3>
                <p className="text-white/40 font-light text-xs max-w-xs mx-auto">Recorded by K. Vance (Master Partner) for Portfolio Committee</p>
              </div>

              {/* Interactive Player Controls */}
              <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center justify-between mt-4">
                
                {/* Simulated Audio Visualizer Bars */}
                <div className="flex items-end gap-1 h-8 w-16">
                  {[12, 28, 16, 32, 20, 10, 24, 18].map((baseHeight, barIdx) => {
                    const randomScale = isPlaying ? Math.random() * 0.8 + 0.4 : 0.3;
                    return (
                      <span 
                        key={barIdx} 
                        style={{ height: `${baseHeight * randomScale}px` }} 
                        className={`w-1 rounded-full bg-[#187A70] transition-all duration-300 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}
                      ></span>
                    );
                  })}
                </div>

                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-[#FAF9F5] text-[#0B1215] flex items-center justify-center hover:bg-[#187A70] hover:text-[#FAF9F5] transition-all duration-300 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  )}
                </button>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/40 uppercase block mb-0.5">PLAYBACK HEAD</span>
                  <span className="font-mono text-xs font-bold text-[#faf9f5]">
                    {formattingTime(audioTimer)} / 2:54
                  </span>
                </div>

              </div>

              <div className="flex items-center gap-2 mt-6 justify-center text-white/40 text-[10px] uppercase tracking-wider relative z-10">
                <Volume2 className="w-3.5 h-3.5 text-[#187A70]" />
                <span>Simulated Secure Enclave Audio</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Classic5Manifesto;
