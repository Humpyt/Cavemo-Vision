
import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, MapPin, ArrowUpRight, HardHat, Terminal, ShieldCheck } from 'lucide-react';

const ConstructionFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] pt-60 pb-12 mt-20 text-white overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
            <div className="text-[40vw] font-black absolute -bottom-20 -left-20 leading-none select-none">BUILD</div>
        </div>

        {/* Floating CTA Banner */}
        <div className="absolute top-0 left-0 w-full transform -translate-y-1/2 px-4 z-50">
             <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto bg-yellow-500 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(234,179,8,0.2)] relative group"
             >
                {/* Technical Patterns */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between p-12 lg:p-20 relative z-10 gap-12 text-center lg:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                         <div className="w-24 h-24 rounded-3xl bg-black flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                             <HardHat className="w-12 h-12 text-yellow-500" />
                         </div>
                         <div>
                             <h3 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-tighter">READY TO BUILD?</h3>
                             <p className="text-black/60 text-xl font-medium">Let's engineer a landmark together.</p>
                         </div>
                    </div>
                    <button className="group bg-black text-white px-12 py-6 font-black text-sm tracking-[0.2em] uppercase rounded-full hover:bg-zinc-900 transition-all shadow-2xl flex items-center gap-4 active:scale-95">
                        Start Project <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </button>
                </div>
             </motion.div>
        </div>

      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 border-b border-white/5 pb-20">
            
            {/* Column 1: Brand */}
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(234,179,8,0.3)]">R</div>
                    <span className="font-black text-3xl tracking-tighter text-white uppercase">Renovex</span>
                </div>
                <p className="text-white/30 mb-10 leading-relaxed text-sm font-light">
                    Industrial construction excellence. Building the future with precision, integrity, and heavy-tonnage mastery since 1985.
                </p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-500">
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
                <div className="flex items-center gap-2 text-yellow-500 mb-10">
                  <Terminal className="w-4 h-4" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-[0.3em]">Navigation</h4>
                </div>
                <ul className="space-y-5">
                    {['About Us', 'Our Services', 'Portfolio', 'Safety Record', 'Contact'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-white/30 hover:text-yellow-500 transition-colors flex items-center gap-3 group text-sm uppercase tracking-widest font-bold">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"></div>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Capabilities */}
            <div>
                <div className="flex items-center gap-2 text-yellow-500 mb-10">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-[0.3em]">Capabilities</h4>
                </div>
                <ul className="space-y-5">
                    {['General Contracting', 'Design-Build', 'Civil Engineering', 'Renovation', 'Project Management'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-white/30 hover:text-yellow-500 transition-colors flex items-center gap-3 group text-sm uppercase tracking-widest font-bold">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"></div>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
                <div className="flex items-center gap-2 text-yellow-500 mb-10">
                  <MapPin className="w-4 h-4" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-[0.3em]">Headquarters</h4>
                </div>
                <ul className="space-y-8">
                    <li className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-yellow-500 shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-white/20 uppercase font-black tracking-widest mb-1">Direct Line</span>
                            <span className="text-white font-bold text-lg tracking-tight">+1 (800) BUILD-IT</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-yellow-500 shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-white/20 uppercase font-black tracking-widest mb-1">Email Protocol</span>
                            <span className="text-white font-bold text-lg tracking-tight">hello@renovex.com</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          <p>&copy; 2026 <span className="text-white font-bold">Renovex</span> Industrial. All rights reserved.</p>
          <div className="flex items-center gap-10">
             <a href="#" className="hover:text-yellow-500 transition-colors">Privacy_Policy</a>
             <a href="#" className="hover:text-yellow-500 transition-colors">Terms_of_Service</a>
             <a href="#" className="hover:text-yellow-500 transition-colors">Safety_Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConstructionFooter;
