
import React, { useState } from 'react';
import { Phone, Plus, Minus, MessagesSquare } from 'lucide-react';
import { FAQS } from '../constants';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Image with Overlap Card */}
          <div className="relative order-2 lg:order-1 pt-12">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
                    alt="Contact Support" 
                    className="w-full h-[600px] object-cover"
                 />
                 <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 left-10 w-full h-full border-2 border-slate-100 rounded-2xl -z-0"></div>

            {/* Overlapping Teal Card */}
            <div className="absolute bottom-10 -right-4 lg:-right-16 bg-slate-900 text-white p-8 lg:p-10 rounded-2xl shadow-2xl max-w-sm w-full z-20 border-t-4 border-teal-500">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Have Questions?</h3>
                <div className="bg-teal-600 p-2 rounded-lg">
                    <MessagesSquare className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">Ready to transform your business? Reach out to our experts today.</p>
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="bg-teal-500 text-white p-3 rounded-full shadow-lg shadow-teal-500/30">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <span className="block text-[10px] uppercase tracking-wider text-teal-400 font-bold mb-0.5">Free Consultation</span>
                    <span className="font-bold text-xl tracking-wide text-white">1-888-452-1505</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
                <span className="text-teal-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Faq & Questions</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Frequently Asked <br/> Questions
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">Everything you need to know about working with us. We believe in transparency and clear communication.</p>
            </div>
            
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className={`rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-slate-50' : 'bg-white border border-gray-100'}`}>
                  <button
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-teal-700' : 'text-slate-800'}`}>
                        {faq.question}
                    </span>
                    <div className={`p-2 rounded-full flex-shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-teal-600 text-white rotate-180' : 'bg-gray-100 text-slate-400'}`}>
                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div
                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="h-px w-full bg-slate-200 mb-6"></div>
                    <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
