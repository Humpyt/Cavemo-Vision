import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Twitter, Linkedin, Server, ArrowRight } from 'lucide-react';

const SoftwareFooter: React.FC = () => {
  return (
    <footer className="bg-[#000000] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 p-4 inline-flex">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-xl font-bold text-white tracking-tight font-mono uppercase tracking-widest">NEXUS<span className="text-cyan-400">_SYSTEMS</span></span>
            </div>
            <p className="text-white/40 mb-8 leading-relaxed font-mono text-sm max-w-sm">
              Architecting the digital future. We build scalable, secure, and high-performance software solutions for ambitious protocols.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-mono uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> Modules
            </h4>
            <ul className="space-y-4">
              {['Web Applications', 'Mobile Development', 'Cloud Architecture', 'AI Integration', 'Data Engineering'].map((link, idx) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-cyan-400 transition-colors text-sm font-mono flex items-center gap-2 group">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">&gt;</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-mono uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Root
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Open Source', 'Contact'].map((link, idx) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-purple-400 transition-colors text-sm font-mono flex items-center gap-2 group">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">&gt;</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-mono uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span> Telemetry Feed
            </h4>
            <p className="text-white/40 mb-6 text-sm font-mono">
              Subscribe to the raw execution logs. Engineering best practices and architecture teardowns.
            </p>
            <form className="relative flex items-center mt-8">
              <Server className="absolute left-4 w-4 h-4 text-cyan-400" />
              <input 
                type="email" 
                placeholder="socket://email_address" 
                className="w-full bg-black border border-white/20 py-4 pl-12 pr-32 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500 font-mono text-sm transition-all"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white/10 hover:bg-cyan-500 hover:text-black border border-white/10 text-white px-4 font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
                 Execute
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
            &copy; {new Date().getFullYear()} NEXUS_SYSTEMS / ALL_RIGHTS_RESERVED
          </p>
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Sec_Protocols</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SoftwareFooter;
