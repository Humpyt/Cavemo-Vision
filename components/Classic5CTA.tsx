import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, Loader2, Sparkles, Check } from 'lucide-react';

const Classic5CTA: React.FC = () => {
  const [formStep, setFormStep] = useState<number>(1); // 1: Topic select, 2: Info, 3: Success
  const [targetFocus, setTargetFocus] = useState<string>('capital');
  const [aumSize, setAUMSize] = useState<string>('$1B - $5B');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsSubmitting(true);
      // Simulate highly secure handshake protocol
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStep(3);
      }, 2500);
    }
  };

  const resetConsole = () => {
    setFormStep(1);
    setEmail('');
  };

  return (
    <section id="dialogue" className="bg-[#FAF9F5] py-32 px-4 md:px-8 lg:px-12 font-sans relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#187A70]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto bg-[#0B1215] rounded-[3.5rem] p-8 sm:p-12 md:p-20 relative overflow-hidden text-[#FAF9F5] shadow-2xl border border-white/5">
         
         {/* Premium concentric circles graphic underlay */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#187A70]/10 rounded-full pointer-events-none mix-blend-screen scale-75 md:scale-100"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#187A70]/10 rounded-full pointer-events-none mix-blend-screen scale-75 md:scale-100"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-[#187A70]/15 rounded-full pointer-events-none mix-blend-screen scale-75 md:scale-100 animate-pulse"></div>

         <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* Left: Sweeping Copy Block (7 Columns) */}
            <div className="lg:col-span-7 text-left">
               <span className="text-xs font-mono font-bold text-[#187A70] tracking-[0.3em] uppercase block mb-8">
                  [ INTITIATE ADVISORY PROTOCOL ]
               </span>
               
               <h2 className="text-4xl sm:text-6xl md:text-[5.5rem] font-bold font-[Syne] tracking-tight text-white mb-8 leading-[0.9] uppercase">
                  COMMAND THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#187A70] to-white">FUTURE STATE.</span>
               </h2>
               
               <p className="text-white/60 font-light text-lg sm:text-xl leading-relaxed max-w-xl mb-12">
                  Initiate a secure executive handshake. Configure your focus parameters directly inside our dialogue panel to designate a dedicated Master Partner.
               </p>

               <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2.5 text-xs text-white/50 font-mono">
                     <Lock className="w-4.5 h-4.5 text-[#187A70]" />
                     <span>Secure AES-256 Handshake</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/50 font-mono">
                     <ShieldCheck className="w-4.5 h-4.5 text-[#187A70]" />
                     <span>Confidentiality Protected</span>
                  </div>
               </div>
            </div>

            {/* Right: Embedded Interactive Inquiry Console Form (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
               
               <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[2.5rem] shadow-xl backdrop-blur-md relative min-h-[440px] flex flex-col justify-between w-full max-w-md mx-auto">
                  
                  {/* Console Header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                     <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#187A70]"></span>
                        <span className="text-[9px] font-mono tracking-widest text-[#187A70] uppercase font-black">Advisory Console V5</span>
                     </div>
                     <span className="text-[9px] font-mono text-white/40 uppercase">Handshake Portal</span>
                  </div>

                  {/* STEP 1: Practice line target */}
                  {formStep === 1 && (
                     <div className="flex-1 flex flex-col justify-between">
                        <div>
                           <p className="text-xs font-mono uppercase text-white/60 mb-3">1. Select Target Practice Core</p>
                           <div className="space-y-2.5">
                              {[
                                 { id: 'capital', title: 'Asset & Capital Overhaul', code: 'PRAC #001' },
                                 { id: 'velocity', title: 'System Strategy & Velocity', code: 'PRAC #002' },
                                 { id: 'insulation', title: 'Ecosystem Insulation Vaults', code: 'PRAC #003' }
                              ].map((item) => (
                                 <div
                                    key={item.id}
                                    onClick={() => setTargetFocus(item.id)}
                                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${targetFocus === item.id ? 'bg-[#187A70]/20 border-[#187A70]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                                 >
                                    <div className="flex justify-between items-center">
                                       <span className="text-xs font-bold font-[Syne] text-white">{item.title}</span>
                                       <span className="text-[9px] font-mono text-white/30">{item.code}</span>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <button 
                           onClick={() => setFormStep(2)}
                           className="w-full py-4 rounded-xl bg-white text-[#0B1215] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#187A70] hover:text-white transition-all mt-6 shadow-md"
                        >
                           <span>Proceed to Contact Enigma</span>
                           <ArrowRight className="w-4 h-4" />
                        </button>
                     </div>
                  )}

                  {/* STEP 2: Client configuration parameters */}
                  {formStep === 2 && (
                     <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                        <div>
                           <div className="mb-4">
                              <label className="text-xs font-mono uppercase text-white/60 block mb-2">Estimated Enterprise AUM</label>
                              <div className="grid grid-cols-3 gap-2">
                                 {['<$1B', '$1B - $5B', '$5B+'].map((cap) => (
                                    <button
                                       type="button"
                                       key={cap}
                                       onClick={() => setAUMSize(cap)}
                                       className={`py-2 px-1 border rounded-lg text-[10px] font-mono uppercase font-black tracking-wider transition-all ${aumSize === cap ? 'bg-[#187A70] border-[#187A70] text-white' : 'bg-white/5 border-white/10 text-white/60'}`}
                                    >
                                       {cap}
                                    </button>
                                 ))}
                              </div>
                           </div>

                           <div>
                              <label className="text-xs font-mono uppercase text-white/60 block mb-2">Secure Routing Email</label>
                              <input 
                                 type="email" 
                                 placeholder="comms@enterprise-vault.com"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 text-xs font-mono focus:outline-none focus:border-[#187A70] transition-colors"
                                 required
                              />
                           </div>
                        </div>

                        <div className="flex gap-2 mt-6">
                           <button 
                              type="button"
                              onClick={() => setFormStep(1)}
                              className="py-4 px-4 rounded-xl border border-white/10 hover:border-white/20 text-xs font-mono uppercase text-white/60 transition-colors"
                           >
                              Back
                           </button>
                           
                           <button 
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 py-4 rounded-xl bg-[#187A70] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#187A70]/80 transition-all disabled:opacity-55"
                           >
                              {isSubmitting ? (
                                 <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Binding Handshake...</span>
                                 </>
                              ) : (
                                 <>
                                    <span>Initiate Dialogue</span>
                                    <Check className="w-4 h-4" />
                                 </>
                              )}
                           </button>
                        </div>
                     </form>
                  )}

                  {/* STEP 3: Complete execution confirmation */}
                  {formStep === 3 && (
                     <div className="flex-1 flex flex-col justify-between text-center items-center py-6">
                        <div className="w-16 h-16 rounded-full bg-[#187A70]/10 border border-[#187A70]/30 flex items-center justify-center mb-6 text-[#187A70]">
                           <ShieldCheck className="w-8 h-8 animate-scale-up" />
                        </div>

                        <div>
                           <p className="text-[10px] font-mono text-[#187A70] tracking-[0.25em] font-black uppercase mb-1">ENVELOPE ESCROW SECURED</p>
                           <h4 className="text-xl font-[Syne] font-bold text-white mb-2">Escrow Registry Hash #FA-0019</h4>
                           <p className="text-xs text-white/50 leading-relaxed max-w-xs mx-auto">
                              Your portfolio variables have been securely registered. A Master Partner has been notified to execute a secure dialogue call inside 24 hours.
                           </p>
                        </div>

                        <button 
                           onClick={resetConsole}
                           className="mt-6 text-[10px] font-mono text-[#187A70] uppercase tracking-widest hover:text-white transition-colors"
                        >
                           Re-Open Escrow Handshake
                        </button>
                     </div>
                  )}

               </div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Classic5CTA;
