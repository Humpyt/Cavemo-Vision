
import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, MapPin, ArrowUpRight, HardHat } from 'lucide-react';

const ConstructionFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0a0a] pt-60 pb-12 mt-20 text-white">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[200px] left-1/2 transform -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-900/10 blur-[120px] rounded-full"></div>
        </div>

        {/* Floating CTA Banner */}
        <div className="absolute top-0 left-0 w-full transform -translate-y-1/2 px-4 z-50">
             <div className="max-w-7xl mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Abstract Patterns */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between p-12 lg:p-16 relative z-10 gap-10 text-center lg:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                         <div className="flex -space-x-4 hidden md:flex">
                             <div className="w-16 h-16 rounded-full border-4 border-yellow-500 bg-slate-800 flex items-center justify-center">
                                 <HardHat className="w-8 h-8 text-white" />
                             </div>
                         </div>
                         <div>
                             <h3 className="text-3xl font-bold mb-2 text-black font-[Manrope]">Ready to Build?</h3>
                             <p className="text-black/80 text-lg">Let's create a landmark together.</p>
                         </div>
                    </div>
                    <button className="bg-black text-white px-10 py-5 font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-black/20 flex items-center gap-3 group transform hover:-translate-y-1">
                        Start a Project <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </button>
                </div>
             </div>
        </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
            
            {/* Column 1: Brand */}
            <div>
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold text-2xl shadow-lg">R</div>
                    <span className="font-bold text-3xl tracking-tight text-white font-[Manrope]">Renovex</span>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Industrial construction excellence. Building the future with precision and integrity since 1985.
                </p>
                <div className="flex gap-4">
                    {/* Social Icons */}
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className="font-bold text-white text-lg mb-8">Quick Links</h4>
                <ul className="space-y-4">
                    {['About Us', 'Our Services', 'Portfolio', 'Safety Record', 'Contact'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Services */}
            <div>
                <h4 className="font-bold text-white text-lg mb-8">Services</h4>
                <ul className="space-y-4">
                    {['General Contracting', 'Design-Build', 'Civil Engineering', 'Renovation', 'Project Management'].map(link => (
                        <li key={link}>
                            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
                <h4 className="font-bold text-white text-lg mb-8">Contact Info</h4>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Phone Number</span>
                            <span className="text-white font-bold">+1 (800) BUILD-IT</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Email Address</span>
                            <span className="text-white font-bold">hello@renovex.com</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Location</span>
                            <span className="text-white font-bold">123 Industrial Park, NY</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2025 <span className="text-white font-bold">Renovex</span> Construction. All rights reserved.</p>
          <div className="flex items-center gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ConstructionFooter;
