import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LogoMarquee from './components/LogoMarquee';
import Process from './components/Process';
import About from './components/About';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LogoMarquee />
        <Process />
        <About />
        <Solutions />
        <Portfolio />
        <Team />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;