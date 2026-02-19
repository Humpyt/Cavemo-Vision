
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

// Construction Components
import ConstructionHero from './components/ConstructionHero';
import ConstructionFeatures from './components/ConstructionFeatures';
import ConstructionAbout from './components/ConstructionAbout';
import ConstructionServices from './components/ConstructionServices';
import ConstructionProjects from './components/ConstructionProjects';
import ConstructionProcess from './components/ConstructionProcess';
import ConstructionTeam from './components/ConstructionTeam';
import ConstructionImpact from './components/ConstructionImpact';
import ConstructionPricing from './components/ConstructionPricing';
import ConstructionFaq from './components/ConstructionFaq';
import ConstructionFooter from './components/ConstructionFooter';

// Modern Corporate (Bexon) Components
import CorporateHero from './components/CorporateHero';
import CorporateStats from './components/CorporateStats';
import CorporateServices from './components/CorporateServices';
import CorporateTestimonials from './components/CorporateTestimonials';
import CorporatePricing from './components/CorporatePricing';
import CorporateFooter from './components/CorporateFooter';

// Home 5: Modern Minimalist Components
import ModernHero from './components/ModernHero';
import ModernFeatures from './components/ModernFeatures';
import ModernAbout from './components/ModernAbout';
import ModernSolutions from './components/ModernSolutions';
import ModernPortfolio from './components/ModernPortfolio';
import ModernMarquee from './components/ModernMarquee';
import ModernTeam from './components/ModernTeam';
import ModernBlog from './components/ModernBlog';
import ModernFAQ from './components/ModernFAQ';

// Home 6: Exact Bexon Clone Components
import Home6Hero from './components/Home6Hero';
import Home6Features from './components/Home6Features';
import Home6Awards from './components/Home6Awards';
import Home6Banner from './components/Home6Banner';
import Home6Testimonials from './components/Home6Testimonials';
import Home6Services from './components/Home6Services';

// Home 7: New Bexon Minimalist Components
import Home7Hero from './components/Home7Hero';
import Home7Stats from './components/Home7Stats';
import Home7Portfolio from './components/Home7Portfolio';
import Home7Testimonials from './components/Home7Testimonials';
import Home7CTA from './components/Home7CTA';

// Home 8: Bexon Executive Components
import Home8Hero from './components/Home8Hero';
import Home8Impact from './components/Home8Impact';
import Home8Expertise from './components/Home8Expertise';
import Home8Services from './components/Home8Services';
import Home8Portfolio from './components/Home8Portfolio';
import Home8Awards from './components/Home8Awards';
import Home8Team from './components/Home8Team';
import Home8Marquee from './components/Home8Marquee';

// Home 9: Bexon "Empower" Layout Components
import Home9Hero from './components/Home9Hero';
import Home9Features from './components/Home9Features';
import Home9Marquee from './components/Home9Marquee';
import Home9Grid from './components/Home9Grid';

// Pages
import AboutPage from './pages/AboutPage';
import AboutPage2 from './pages/AboutPage2';
import HistoryPage from './pages/HistoryPage';
import TeamPage from './pages/TeamPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import CareersPage from './pages/CareersPage';
import CareersDetailsPage from './pages/CareersDetailsPage';
import NewsPage from './pages/NewsPage';
import PricingPage from './pages/PricingPage';
import FeedbackPage from './pages/FeedbackPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import ClassicServicesPage from './pages/services/ClassicServicesPage';
import CreativeServicesPage from './pages/services/CreativeServicesPage';
import ConstructionServicesPage from './pages/services/ConstructionServicesPage';
import EmpowerServicesPage from './pages/services/EmpowerServicesPage';
import ExecutiveServicesPage from './pages/services/ExecutiveServicesPage';
import LightServicesPage from './pages/services/LightServicesPage';

type AppVariant = 'classic' | 'creative' | 'construction' | 'corporate' | 'modern' | 'home6' | 'home7' | 'home8' | 'home9';
type ViewPage = 'home' | 'about' | 'about2' | 'history' | 'team' | 'team-details' | 'careers' | 'careers-details' | 'news' | 'pricing' | 'feedback' | 'faq' | 'contact' | 'srv-classic' | 'srv-creative' | 'srv-construction' | 'srv-empower' | 'srv-executive' | 'srv-light';

function App() {
  const [heroVariant, setHeroVariant] = useState<AppVariant>('home9');
  const [currentView, setCurrentView] = useState<ViewPage>('home');
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  const handleVariantChange = (variant: AppVariant) => {
      setHeroVariant(variant);
      setCurrentView('home');
      setSelectedWorkId(null);
  };

  const navigateTo = (view: ViewPage) => {
      setCurrentView(view);
      window.scrollTo(0, 0);
  };

  const renderContent = () => {
      if (currentView === 'about') return <AboutPage onHomeClick={() => navigateTo('home')} />;
      if (currentView === 'about2') return <AboutPage2 onHomeClick={() => navigateTo('home')} />;
      if (currentView === 'history') return <HistoryPage onHomeClick={() => navigateTo('home')} />;
      if (currentView === 'team') return <TeamPage onHomeClick={() => navigateTo('home')} />;
      if (currentView === 'team-details') return <TeamDetailsPage onBack={() => navigateTo('team')} />;
      if (currentView === 'careers') return <CareersPage onApplyClick={() => navigateTo('careers-details')} />;
      if (currentView === 'careers-details') return <CareersDetailsPage onBack={() => navigateTo('careers')} />;
      if (currentView === 'news') return <NewsPage />;
      if (currentView === 'pricing') return <PricingPage onBack={() => navigateTo('home')} />;
      if (currentView === 'feedback') return <FeedbackPage onBack={() => navigateTo('home')} />;
      if (currentView === 'faq') return <FaqPage />;
      if (currentView === 'contact') return <ContactPage />;

      // New Service Routes
      if (currentView === 'srv-classic') return <ClassicServicesPage onBack={() => navigateTo('home')} />;
      if (currentView === 'srv-creative') return <CreativeServicesPage onBack={() => navigateTo('home')} />;
      if (currentView === 'srv-construction') return <ConstructionServicesPage onBack={() => navigateTo('home')} />;
      if (currentView === 'srv-empower') return <EmpowerServicesPage onBack={() => navigateTo('home')} />;
      if (currentView === 'srv-executive') return <ExecutiveServicesPage onBack={() => navigateTo('home')} />;
      if (currentView === 'srv-light') return <LightServicesPage onBack={() => navigateTo('home')} />;

      if (heroVariant === 'creative') {
          if (selectedWorkId) {
              return <WorkDetails id={selectedWorkId} onBack={() => setSelectedWorkId(null)} />;
          }
          return (
            <>
                <div className="animate-fade-in transition-all duration-700"><HeroCreative /></div>
                <CreativeMarquee /><CreativeAbout /><CreativeWork onProjectSelect={setSelectedWorkId} />
                <CreativeLab /><Process /><CreativeServices /><CreativeTeam /><CreativeReviews /><CreativeFooter />
            </>
          );
      }

      if (heroVariant === 'construction') {
          return (
              <>
                <div className="animate-fade-in transition-all duration-700"><ConstructionHero /></div>
                <ConstructionFeatures /><LogoMarquee /><ConstructionAbout /><ConstructionServices /><ConstructionProjects />
                <ConstructionProcess /><ConstructionTeam /><ConstructionImpact /><ConstructionPricing /><ConstructionFaq /><ConstructionFooter />
              </>
          );
      }

      if (heroVariant === 'corporate') {
          return (
              <>
                <div className="animate-fade-in transition-all duration-700"><CorporateHero /></div>
                <CorporateStats /><LogoMarquee /><CorporateServices /><About /><CorporateTestimonials /><GlobalImpact /><CorporatePricing /><CorporateFooter />
              </>
          );
      }

      if (heroVariant === 'modern') {
          return (
              <div className="bg-[#fcfcfc] text-slate-900">
                <div className="animate-fade-in transition-all duration-700"><ModernHero /></div>
                <ModernFeatures /><ModernAbout /><ModernSolutions /><ModernPortfolio /><CreativeLab /><ModernMarquee /><ModernTeam /><ModernBlog /><ModernFAQ /><CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'home6') {
          return (
              <div className="bg-[#fcfcfc] text-slate-900">
                  <div className="animate-fade-in"><Home6Hero /></div>
                  <Home6Features /><CorporateStats /><CreativeMarquee /><Home6Services /><Home6Banner /><Process /><Home6Awards /><CreativeLab /><Home6Testimonials /><LogoMarquee /><CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'home7') {
          return (
              <div className="bg-white text-slate-900">
                  <div className="animate-fade-in"><Home7Hero /></div>
                  <ModernMarquee /><Home7Stats /><CreativeMarquee /><CorporateServices /><Home7Testimonials /><Home7Portfolio /><ModernFAQ /><Home7CTA /><CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'home8') {
          return (
              <div className="bg-white text-slate-900">
                  <div className="animate-fade-in"><Home8Hero /></div>
                  <Home8Marquee /><Home8Impact /><LogoMarquee /><Home8Expertise /><CreativeMarquee /><Home8Services /><Home8Portfolio /><Home8Awards /><CreativeLab /><Home8Team /><Home7Testimonials /><CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'home9') {
          return (
              <div className="bg-white text-slate-900">
                  <div className="animate-fade-in"><Home9Hero /></div>
                  <Home9Features /><Home9Marquee /><CreativeLab /><Home9Grid /><CreativeMarquee /><Home8Team /><Home7Testimonials /><CorporateFooter />
              </div>
          );
      }

      return (
        <>
            <div className="animate-fade-in transition-all duration-700"><Hero /></div>
            <Features /><LogoMarquee /><Process /><About /><Solutions /><Portfolio /><Team /><GlobalImpact /><Pricing /><FaqSection /><Footer />
        </>
      );
  };

  const isDarkPage = currentView !== 'home' || heroVariant === 'creative' || heroVariant === 'corporate' || heroVariant === 'home6' || heroVariant === 'home9';

  return (
    <div className={`min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 transition-colors duration-700 ${isDarkPage ? 'bg-[#050505] text-white' : 'bg-white'}`}>
      {!selectedWorkId && (
          <Navbar 
            activeVariant={heroVariant} 
            onVariantChange={handleVariantChange} 
            onPageChange={navigateTo}
            currentPage={currentView}
          />
      )}
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
