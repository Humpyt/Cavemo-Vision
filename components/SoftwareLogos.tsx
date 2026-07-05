import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const SoftwareLogos: React.FC = () => {
  return (
    <div className="bg-[#000000] border-y border-white/5 py-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-4 mb-8 relative z-10">
          <p className="text-center text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">Trusted Nodes Linked</p>
      </div>
      <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative z-10">
        <div className="flex animate-[scroll_40s_linear_infinite]">
          {[...Array(4)].flatMap(() => CLIENT_LOGOS).map((logo, idx) => (
            <div key={idx} className="mx-12 lg:mx-16 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src={logo.url} alt={logo.name} className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareLogos;
