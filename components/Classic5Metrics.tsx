import React, { useState } from 'react';
import { TrendingUp, Award, BarChart4, ChevronRight } from 'lucide-react';

const LEDGER_TABS = [
  { 
    id: 'yield', 
    label: 'Asset Yield Index', 
    stat: '10.8x Return', 
    desc: 'Average return multipliers recorded across multi-phase structural portfolio integrations.',
    chartData: [45, 62, 58, 80, 75, 96], // Year over Year values
    years: ["'21", "'22", "'23", "'24", "'25", "'26"]
  },
  { 
    id: 'sync', 
    label: 'Compliance Sync', 
    stat: '94% Aligned', 
    desc: 'Total organizational synchronization accomplished inside 120 days post-merger handover.',
    chartData: [20, 38, 55, 78, 85, 94],
    years: ["'21", "'22", "'23", "'24", "'25", "'26"]
  },
  { 
    id: 'nodes', 
    label: 'Global Node Capture', 
    stat: '140+ Markets', 
    desc: 'Sovereign financial hubs established and audited under rigid domestic law structures.',
    chartData: [32, 54, 78, 110, 125, 142],
    years: ["'21", "'22", "'23", "'24", "'25", "'26"]
  }
];

const Classic5Metrics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('yield');
  
  const currentTabInfo = LEDGER_TABS.find(t => t.id === activeTab) || LEDGER_TABS[0];
  
  // Custom interactive SVG chart math helper
  const maxVal = Math.max(...currentTabInfo.chartData);
  const minVal = Math.min(...currentTabInfo.chartData);
  const dataRange = maxVal - minVal;

  const points = currentTabInfo.chartData.map((val, idx) => {
    // Distribute X along 500px width
    const x = 50 + (idx * 90); 
    // Scale Y along 180px height
    const normalizedY = dataRange === 0 ? 0.5 : (val - minVal) / dataRange;
    const y = 200 - (normalizedY * 140); 
    return { x, y, value: val };
  });

  // SVG Polyline Path generator
  const pathString = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <section className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans border-y border-[#0B1215]/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
         
         <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
            
            {/* Left Col: Explainer and Interactive Tab Selector (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                    <span className="text-[10px] font-mono tracking-[0.3em] text-[#0B1215]/60 uppercase">Vol. V // Empirical Metrics</span>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-[5rem] font-bold font-[Syne] tracking-tight leading-[0.93] text-[#0B1215] mb-8">
                     EMPIRICAL <br />
                     <span className="font-light italic text-[#187A70] font-sans">Performance.</span>
                  </h2>
                  
                  <p className="text-slate-500 font-light text-base leading-relaxed max-w-md">
                     We reject generalized consulting projections. Every transaction is subjected to automated mathematical monitoring, ensuring verifiable balance sheet expansion.
                  </p>
               </div>

               {/* Metric Tab Options */}
               <div className="space-y-3">
                  {LEDGER_TABS.map((tab) => {
                     const isSelected = activeTab === tab.id;
                     return (
                        <div 
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex justify-between items-center ${isSelected ? 'bg-white border-[#187A70] shadow-sm' : 'bg-transparent border-[#0B1215]/10 hover:border-[#0B1215]/25'}`}
                        >
                           <div className="flex flex-col">
                              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">METRIC GROUP</span>
                              <span className="font-[Syne] font-bold text-[#0B1215] mt-0.5">{tab.label}</span>
                           </div>
                           
                           <div className="text-right flex items-center gap-3">
                              <span className={`font-[Syne] font-extrabold text-[#187A70] ${isSelected ? 'text-lg sm:text-xl' : 'text-sm text-[#0B1215]/60'}`}>
                                 {tab.stat}
                              </span>
                              <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 text-[#187A70]' : 'text-slate-300'}`} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* Right Col: Custom Mathematical Interactive SVG Chart Panel (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
               
               <div className="bg-white border border-[#0B1215]/5 rounded-[2.5rem] p-8 sm:p-10 shadow-lg relative flex flex-col justify-between min-h-[460px] w-full">
                  
                  {/* Chart Running Head */}
                  <div className="flex justify-between items-start border-b border-[#0B1215]/5 pb-4 mb-4">
                     <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#187A70]" />
                        <span className="text-[10px] font-mono tracking-widest text-[#0B1215]/60 uppercase font-bold">ANALYSIS LEDGER PANEL // {currentTabInfo.id.toUpperCase()}</span>
                     </div>
                     <span className="text-[10px] font-mono text-[#187A70] uppercase font-black bg-[#187A70]/10 px-2 py-0.5 rounded-sm">COMPILATION TRUE</span>
                  </div>

                  {/* Informational Summary of active metric */}
                  <div className="mb-6">
                     <span className="text-[9px] font-mono text-[#187A70] tracking-widest block mb-1">REAL-TIME TREND REPORT</span>
                     <h3 className="text-2xl font-[Syne] font-bold text-[#0B1215] leading-tight mb-2">
                        {currentTabInfo.label} Growth Arc
                     </h3>
                     <p className="text-slate-500 font-light text-xs max-w-xl">
                        {currentTabInfo.desc}
                     </p>
                  </div>

                  {/* Real-time Responsive Interactive SVG Graph Area */}
                  <div className="bg-[#FAF9F5] border border-[#0B1215]/5 p-6 rounded-2xl relative flex-1 flex flex-col justify-end min-h-[220px]">
                     
                     <div className="w-full h-full relative overflow-visible">
                        <svg className="w-full h-full min-h-[180px] overflow-visible" viewBox="0 0 520 220" preserveAspectRatio="none">
                           
                           {/* Grid Lines behind the SVG curve */}
                           <line x1="50" y1="30" x2="500" y2="30" stroke="#000" strokeWidth="1" strokeDasharray="3 3" opacity="0.05" />
                           <line x1="50" y1="90" x2="500" y2="90" stroke="#000" strokeWidth="1" strokeDasharray="3 3" opacity="0.05" />
                           <line x1="50" y1="150" x2="500" y2="150" stroke="#000" strokeWidth="1" strokeDasharray="3 3" opacity="0.05" />
                           <line x1="50" y1="200" x2="500" y2="200" stroke="#000" strokeWidth="1.5" opacity="0.1" />

                           {/* Gradient area filling beneath plot curve */}
                           <defs>
                              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="#187A70" stopOpacity="0.12" />
                                 <stop offset="100%" stopColor="#187A70" stopOpacity="0" />
                              </linearGradient>
                           </defs>
                           
                           <path 
                              d={`M 50,200 L ${pathString} L 500,200 Z`} 
                              fill="url(#chartGrad)" 
                              className="transition-all duration-700 ease-in-out"
                           />

                           {/* The actual line curve */}
                           <polyline 
                              fill="none" 
                              stroke="#187A70" 
                              strokeWidth="2.5" 
                              points={pathString}
                              className="transition-all duration-700 ease-in-out"
                           />

                           {/* Circles plotted at coordinates */}
                           {points.map((pt, i) => (
                              <g key={i} className="group/dot cursor-pointer transition-all duration-500">
                                 <circle 
                                    cx={pt.x} 
                                    cy={pt.y} 
                                    r="5.5" 
                                    fill="#187A70" 
                                    stroke="#fff" 
                                    strokeWidth="1.5" 
                                    className="transition-all duration-700 ease-in-out hover:scale-125"
                                 />
                                 
                                 {/* Hover tooltip values inside SVG */}
                                 <text 
                                    x={pt.x} 
                                    y={pt.y - 12} 
                                    textAnchor="middle" 
                                    className="font-mono text-[9px] font-bold fill-[#0B1215] opacity-60 group-hover/dot:opacity-100 transition-opacity"
                                 >
                                    {pt.value}
                                 </text>
                              </g>
                           ))}
                        </svg>
                        
                        {/* Custom horizontal labels beneath timeline */}
                        <div className="flex justify-between px-[45px] mt-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                           {currentTabInfo.years.map((yr, idx) => (
                              <span key={idx}>{yr}</span>
                           ))}
                        </div>
                     </div>

                  </div>

               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5Metrics;
