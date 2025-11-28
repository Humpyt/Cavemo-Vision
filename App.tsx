
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LogoMarquee from './components/LogoMarquee';
import Process from './components/Process';
import About from './components/About';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import GlobalImpact from './components/GlobalImpact';
import Pricing from './components/Pricing';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

// Creative Components
import HeroCreative from './components/HeroCreative';
import CreativeMarquee from './components/CreativeMarquee';
import CreativeAbout from './components/CreativeAbout';
import CreativeWork from './components/CreativeWork';
import CreativeServices from './components/CreativeServices';
import CreativeFooter from './components/CreativeFooter';
import CreativeLab from './components/CreativeLab';
import CreativeTeam from './components/CreativeTeam';
import CreativeReviews from './components/CreativeReviews';

function App() {
  const [heroVariant, setHeroVariant] = useState<'classic' | 'creative'>('classic');

  return (
    <div className={`min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 transition-colors duration-700 ${heroVariant === 'creative' ? 'bg-[#050505] text-white' : 'bg-gray-50'}`}>
      <Navbar activeVariant={heroVariant} onVariantChange={setHeroVariant} />
      
      <main>
        {heroVariant === 'classic' ? (
            // CLASSIC LAYOUT
            <>
                <div className="animate-fade-in transition-all duration-700">
                    <Hero />
                </div>
                <Features />
                <LogoMarquee />
                <Process />
                <About />
                <Solutions />
                <Portfolio />
                <Team />
                <GlobalImpact />
                <Pricing />
                <FaqSection />
                <Footer />
            </>
        ) : (
            // CREATIVE STUDIO LAYOUT
            <>
                <div className="animate-fade-in transition-all duration-700">
                    <HeroCreative />
                </div>
                
                <CreativeMarquee />
                
                <CreativeAbout />
                
                <CreativeWork />

                <CreativeLab />

                {/* Reuse Process but purely as dark background, it fits well */}
                <Process />

                <CreativeServices />

                <CreativeTeam />
                
                <CreativeReviews />

                <CreativeFooter />
            </>
        )}
      </main>
      
    </div>
  );
}

export default App;
