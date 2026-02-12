
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
import WorkDetails from './components/WorkDetails';

// Construction Components - New Creative Layouts
import ConstructionHero from './components/ConstructionHero';
import ConstructionFeatures from './components/ConstructionFeatures'; // Stats Bar
import ConstructionProcess from './components/ConstructionProcess';
import ConstructionAbout from './components/ConstructionAbout';
import ConstructionServices from './components/ConstructionServices'; // Bento Grid
import ConstructionProjects from './components/ConstructionProjects'; // List/Preview
import ConstructionTeam from './components/ConstructionTeam';
import ConstructionImpact from './components/ConstructionImpact';
import ConstructionPricing from './components/ConstructionPricing';
import ConstructionFaq from './components/ConstructionFaq';
import ConstructionFooter from './components/ConstructionFooter';

function App() {
  const [heroVariant, setHeroVariant] = useState<'classic' | 'creative' | 'construction'>('classic');
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  const handleVariantChange = (variant: 'classic' | 'creative' | 'construction') => {
      setHeroVariant(variant);
      setSelectedWorkId(null);
  };

  const renderContent = () => {
      if (heroVariant === 'creative') {
          if (selectedWorkId) {
              return <WorkDetails id={selectedWorkId} onBack={() => setSelectedWorkId(null)} />;
          }
          return (
            <>
                <div className="animate-fade-in transition-all duration-700">
                    <HeroCreative />
                </div>
                <CreativeMarquee />
                <CreativeAbout />
                <CreativeWork onProjectSelect={setSelectedWorkId} />
                <CreativeLab />
                <Process />
                <CreativeServices />
                <CreativeTeam />
                <CreativeReviews />
                <CreativeFooter />
            </>
          );
      }

      if (heroVariant === 'construction') {
          return (
              <>
                <div className="animate-fade-in transition-all duration-700">
                    <ConstructionHero />
                </div>
                <ConstructionFeatures />
                <LogoMarquee />
                <ConstructionAbout />
                <ConstructionServices />
                <ConstructionProjects />
                <ConstructionProcess />
                <ConstructionTeam />
                <ConstructionImpact />
                <ConstructionPricing />
                <ConstructionFaq />
                <ConstructionFooter />
              </>
          );
      }

      // Classic Layout (Default)
      return (
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
      );
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 transition-colors duration-700 ${heroVariant === 'creative' ? 'bg-[#050505] text-white' : 'bg-white'}`}>
      
      {!selectedWorkId && (
          <Navbar activeVariant={heroVariant} onVariantChange={handleVariantChange} />
      )}
      
      <main>
        {renderContent()}
      </main>
      
      <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
      `}</style>
    </div>
  );
}

export default App;
