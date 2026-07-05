
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
import ConstructionBlueprint from './components/ConstructionBlueprint';
import ConstructionTimeline from './components/ConstructionTimeline';
import ConstructionSafety from './components/ConstructionSafety';

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

// Software Components
import SoftwareHero from './components/SoftwareHero';
import SoftwareLogos from './components/SoftwareLogos';
import SoftwareTechStack from './components/SoftwareTechStack';
import SoftwareServices from './components/SoftwareServices';
import SoftwareProcess from './components/SoftwareProcess';
import SoftwareAbout from './components/SoftwareAbout';
import SoftwareProjects from './components/SoftwareProjects';
import SoftwareTeam from './components/SoftwareTeam';
import SoftwareImpact from './components/SoftwareImpact';
import SoftwarePricing from './components/SoftwarePricing';
import SoftwareFaq from './components/SoftwareFaq';
import SoftwareFooter from './components/SoftwareFooter';
import CreativePortfolioPage from './pages/CreativePortfolioPage';
import CorporatePortfolioPage from './pages/CorporatePortfolioPage';
import SoftwarePortfolioPage from './pages/SoftwarePortfolioPage';
import ConstructionPortfolioPage from './pages/ConstructionPortfolioPage';
import CreativeBlogPage from './pages/CreativeBlogPage';
import CorporateBlogPage from './pages/CorporateBlogPage';
import SoftwareBlogPage from './pages/SoftwareBlogPage';
import ConstructionBlogPage from './pages/ConstructionBlogPage';

import Classic2Hero from './components/Classic2Hero';
import Classic2Features from './components/Classic2Features';
import Classic2About from './components/Classic2About';
import Classic2Services from './components/Classic2Services';
import Classic2Metrics from './components/Classic2Metrics';
import Classic2Projects from './components/Classic2Projects';
import Classic2Process from './components/Classic2Process';
import Classic2Testimonials from './components/Classic2Testimonials';
import Classic2News from './components/Classic2News';
import Classic2Team from './components/Classic2Team';
import Classic2FAQ from './components/Classic2FAQ';
import Classic2CTA from './components/Classic2CTA';

import Classic3Hero from './components/Classic3Hero';
import Classic3Logos from './components/Classic3Logos';
import Classic3About from './components/Classic3About';
import Classic3Features from './components/Classic3Features';
import Classic3Services from './components/Classic3Services';
import Classic3Metrics from './components/Classic3Metrics';
import Classic3Projects from './components/Classic3Projects';
import Classic3Process from './components/Classic3Process';
import Classic3Testimonials from './components/Classic3Testimonials';
import Classic3Team from './components/Classic3Team';
import Classic3FAQ from './components/Classic3FAQ';
import Classic3CTA from './components/Classic3CTA';

import Classic4Hero from './components/Classic4Hero';
import Classic4Logos from './components/Classic4Logos';
import Classic4About from './components/Classic4About';
import Classic4Features from './components/Classic4Features';
import Classic4Services from './components/Classic4Services';
import Classic4Process from './components/Classic4Process';
import Classic4Metrics from './components/Classic4Metrics';
import Classic4Projects from './components/Classic4Projects';
import Classic4Testimonials from './components/Classic4Testimonials';
import Classic4Team from './components/Classic4Team';
import Classic4News from './components/Classic4News';
import Classic4CTA from './components/Classic4CTA';

import Classic5Hero from './components/Classic5Hero';
import Classic5Logos from './components/Classic5Logos';
import Classic5Manifesto from './components/Classic5Manifesto';
import Classic5Features from './components/Classic5Features';
import Classic5Services from './components/Classic5Services';
import Classic5Metrics from './components/Classic5Metrics';
import Classic5Projects from './components/Classic5Projects';
import Classic5Process from './components/Classic5Process';
import Classic5Testimonials from './components/Classic5Testimonials';
import Classic5Team from './components/Classic5Team';
import Classic5News from './components/Classic5News';
import Classic5CTA from './components/Classic5CTA';

import Classic6Hero from './components/Classic6Hero';
import Classic6Logos from './components/Classic6Logos';
import Classic6Manifesto from './components/Classic6Manifesto';
import Classic6Features from './components/Classic6Features';
import Classic6Services from './components/Classic6Services';
import Classic6Metrics from './components/Classic6Metrics';
import Classic6Projects from './components/Classic6Projects';
import Classic6Process from './components/Classic6Process';
import Classic6Testimonials from './components/Classic6Testimonials';
import Classic6Team from './components/Classic6Team';
import Classic6News from './components/Classic6News';
import Classic6CTA from './components/Classic6CTA';

type AppVariant = 'classic' | 'classic2' | 'classic3' | 'classic4' | 'classic5' | 'classic6' | 'creative' | 'construction' | 'corporate' | 'modern' | 'home6' | 'home7' | 'home8' | 'home9' | 'software';
type ViewPage = 'home' | 'about' | 'about2' | 'history' | 'team' | 'team-details' | 'careers' | 'careers-details' | 'news' | 'pricing' | 'feedback' | 'faq' | 'contact' | 'srv-classic' | 'srv-creative' | 'srv-construction' | 'srv-empower' | 'srv-executive' | 'srv-light' | 'port-creative' | 'port-corporate' | 'port-software' | 'port-construction' | 'blog-creative' | 'blog-corporate' | 'blog-software' | 'blog-construction';

function App() {
  const [heroVariant, setHeroVariant] = useState<AppVariant>('classic6');
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
      if (currentView === 'blog-creative') return <CreativeBlogPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'blog-corporate') return <CorporateBlogPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'blog-software') return <SoftwareBlogPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'blog-construction') return <ConstructionBlogPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      
      if (currentView === 'port-creative') return <CreativePortfolioPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'port-corporate') return <CorporatePortfolioPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'port-software') return <SoftwarePortfolioPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      if (currentView === 'port-construction') return <ConstructionPortfolioPage onHomeClick={() => navigateTo('home')} onPageChange={navigateTo} onVariantChange={handleVariantChange} />;
      
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

      if (heroVariant === 'classic6') {
          return (
              <div className="bg-[#FAFAFA] text-[#050505] border-x-hidden font-sans">
                  <div className="animate-fade-in transition-all duration-700"><Classic6Hero /></div>
                  <Classic6Logos />
                  <Classic6Manifesto />
                  <Classic6Features />
                  <Classic6Services />
                  <Classic6Metrics />
                  <Classic6Projects />
                  <Classic6Process />
                  <Classic6Testimonials />
                  <Classic6Team />
                  <Classic6News />
                  <Classic6CTA />
                  <CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'classic5') {
          return (
              <div className="bg-[#fcfbf7] text-[#0b1215] border-x-hidden font-sans">
                  <div className="animate-fade-in transition-all duration-700"><Classic5Hero /></div>
                  <Classic5Logos />
                  <Classic5Manifesto />
                  <Classic5Features />
                  <Classic5Services />
                  <Classic5Metrics />
                  <Classic5Projects />
                  <Classic5Process />
                  <Classic5Testimonials />
                  <Classic5Team />
                  <Classic5News />
                  <Classic5CTA />
                  <CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'classic4') {
          return (
              <div className="bg-white text-slate-900 border-x-hidden font-sans">
                  <div className="animate-fade-in transition-all duration-700"><Classic4Hero /></div>
                  <Classic4Logos />
                  <Classic4About />
                  <Classic4Features />
                  <Classic4Services />
                  <Classic4Process />
                  <Classic4Metrics />
                  <Classic4Projects />
                  <Classic4Testimonials />
                  <Classic4Team />
                  <Classic4News />
                  <Classic4CTA />
                  <CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'classic3') {
          return (
              <div className="bg-white text-slate-900 border-x-hidden font-sans">
                  <div className="animate-fade-in transition-all duration-700"><Classic3Hero /></div>
                  <Classic3Logos />
                  <Classic3About />
                  <Classic3Features />
                  <Classic3Services />
                  <Classic3Metrics />
                  <Classic3Projects />
                  <Classic3Process />
                  <Classic3Testimonials />
                  <Classic3Team />
                  <Classic3FAQ />
                  <Classic3CTA />
                  <CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'classic2') {
          return (
              <div className="bg-white text-slate-900 border-x-hidden font-sans">
                  <div className="animate-fade-in transition-all duration-700"><Classic2Hero /></div>
                  <Classic2Features />
                  <Classic2Services />
                  <Classic2About />
                  <Classic2Metrics />
                  <Classic2Projects />
                  <Classic2Process />
                  <Classic2Testimonials />
                  <Classic2News />
                  <Classic2Team />
                  <Classic2FAQ />
                  <Classic2CTA />
                  <CorporateFooter />
              </div>
          );
      }

      if (heroVariant === 'creative') {
          if (selectedWorkId) {
              return <WorkDetails id={selectedWorkId} onBack={() => setSelectedWorkId(null)} />;
          }
          return (
            <>
                <div className="animate-fade-in transition-all duration-700"><HeroCreative /></div>
                <CreativeMarquee /><CreativeAbout /><CreativeServices /><CreativeWork onProjectSelect={setSelectedWorkId} />
                <CreativeLab /><CreativeTeam /><CreativeReviews /><CreativeFooter />
            </>
          );
      }

      if (heroVariant === 'construction') {
          return (
              <div className="bg-[#0a0a0a] text-white">
                <div className="animate-fade-in transition-all duration-700"><ConstructionHero /></div>
                <ConstructionFeatures />
                <ConstructionBlueprint />
                <LogoMarquee />
                <ConstructionAbout />
                <ConstructionTimeline />
                <ConstructionServices />
                <ConstructionProjects />
                <ConstructionSafety />
                <ConstructionProcess />
                <ConstructionTeam />
                <ConstructionImpact />
                <ConstructionPricing />
                <ConstructionFaq />
                <ConstructionFooter />
              </div>
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

      if (heroVariant === 'software') {
          return (
              <div className="bg-[#030303] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
                  <div className="animate-fade-in"><SoftwareHero /></div>
                  <SoftwareLogos />
                  <SoftwareAbout />
                  <SoftwareProcess />
                  <SoftwareServices />
                  <SoftwareProjects />
                  <SoftwareTeam />
                  <SoftwareImpact />
                  <SoftwarePricing />
                  <SoftwareFaq />
                  <SoftwareFooter />
              </div>
          );
      }

      if (heroVariant === 'home9') {
          return (
              <div className="bg-[#0A0A0B] text-white selection:bg-teal-500/30 overflow-x-hidden font-sans">
                  <div className="animate-fade-in"><Home9Hero /></div>
                  <Home9Features />
                  <Home9Marquee />
                  <Home9Grid />
                  <SoftwarePricing />
                  <CorporateFooter />
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
