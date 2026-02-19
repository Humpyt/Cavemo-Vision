
import React from 'react';
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const CorporateFooter: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0B] pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
          
          {/* Newsletter Section */}
          <div className="bg-[#141416] p-12 md:p-20 rounded-[3rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
              <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500 flex items-center justify-center text-black">
                      <Send className="w-8 h-8" />
                  </div>
                  <div>
                      <h3 className="text-3xl font-bold text-white font-[Syne]">Bexon</h3>
                      <p className="text-slate-500 text-sm">Innovating your business future</p>
                  </div>
              </div>

              <div className="flex-1 max-w-xl w-full">
                  <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Enter email" 
                        className="w-full bg-[#1A1A1C] border border-white/5 rounded-full px-8 py-5 text-white focus:outline-none focus:border-teal-500/50 transition-all"
                      />
                      <button className="absolute right-2 top-2 bg-teal-500 text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white transition-all">
                          Send Message <ArrowUpRight className="w-4 h-4" />
                      </button>
                  </div>
              </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-1">
                  <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">About Bexon</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      Professional business consultancy providing high-end solutions for modern enterprises.
                  </p>
                  <div className="flex gap-4">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                          <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-400 transition-all">
                              <Icon className="w-4 h-4" />
                          </a>
                      ))}
                  </div>
              </div>

              <div>
                  <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
                  <ul className="space-y-4 text-slate-500 text-sm">
                      <li className="hover:text-white cursor-pointer transition-colors">Digital Strategy</li>
                      <li className="hover:text-white cursor-pointer transition-colors">ESG Consulting</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Risk Management</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Training Dev</li>
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
                  <ul className="space-y-4 text-slate-500 text-sm">
                      <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Blog & News</li>
                      <li className="hover:text-white cursor-pointer transition-colors">Newsletter</li>
                      <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                  </ul>
              </div>

              <div>
                  <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Our Office</h4>
                  <p className="text-slate-500 text-sm mb-4">123 Business Avenue<br/>New York, NY 10001</p>
                  <p className="text-white font-bold text-sm">hello@bexon.studio</p>
              </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <p>© 2025 BEXON CONSULTING. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-8">
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Use</a>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
