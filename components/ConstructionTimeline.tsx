import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react';

const TIMELINE_DATA = [
  { stage: 'Site Preparation', date: 'Q1 2024', status: 'complete', progress: 100 },
  { stage: 'Foundation & Piling', date: 'Q2 2024', status: 'complete', progress: 100 },
  { stage: 'Structural Steel', date: 'Q3 2024', status: 'active', progress: 65 },
  { stage: 'Envelope & Glazing', date: 'Q4 2024', status: 'pending', progress: 0 },
  { stage: 'Interior Systems', date: 'Q1 2025', status: 'pending', progress: 0 },
  { stage: 'Final Commissioning', date: 'Q2 2025', status: 'pending', progress: 0 },
];

const ConstructionTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-[#080808] border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Project Lifecycle</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              EXECUTION <span className="text-white/20 italic">TIMELINE.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">On Schedule</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-yellow-500" />
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Next Update: 14:00 GMT</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {TIMELINE_DATA.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 group ${
                item.status === 'active' 
                ? 'bg-yellow-500 border-yellow-500' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Status Icon */}
              <div className="mb-8 flex justify-between items-start">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  item.status === 'active' ? 'bg-black text-yellow-500' : 'bg-white/5 text-white/20'
                }`}>
                  {item.status === 'complete' ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : 
                   item.status === 'active' ? <Clock className="w-6 h-6 animate-spin-slow" /> : 
                   <Circle className="w-6 h-6" />}
                </div>
                <span className={`font-mono text-[10px] font-bold tracking-widest ${
                  item.status === 'active' ? 'text-black/60' : 'text-white/20'
                }`}>
                  0{i + 1}
                </span>
              </div>

              <h3 className={`text-xl font-bold mb-2 tracking-tight ${
                item.status === 'active' ? 'text-black' : 'text-white'
              }`}>
                {item.stage}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-8 ${
                item.status === 'active' ? 'text-black/60' : 'text-white/30'
              }`}>
                {item.date}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className={item.status === 'active' ? 'text-black/40' : 'text-white/20'}>Progress</span>
                  <span className={item.status === 'active' ? 'text-black' : 'text-white/40'}>{item.progress}%</span>
                </div>
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                  item.status === 'active' ? 'bg-black/10' : 'bg-white/5'
                }`}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`h-full rounded-full ${
                      item.status === 'active' ? 'bg-black' : 'bg-emerald-500'
                    }`}
                  />
                </div>
              </div>

              {/* Active Indicator */}
              {item.status === 'active' && (
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-black text-yellow-500 text-[8px] font-black uppercase tracking-[0.2em] rounded-full border border-yellow-500/50 animate-pulse">
                  Live Phase
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ConstructionTimeline;
