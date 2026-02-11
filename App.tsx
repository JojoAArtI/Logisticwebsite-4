
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Vision from './components/Vision';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-orange-500 selection:text-white">
      <Header scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 md:py-32 bg-white">
          <About />
        </section>

        <section id="services" className="py-20 md:py-32 bg-gray-50">
          <Services />
        </section>

        <section id="process" className="py-20 md:py-32 bg-white">
          <Process />
        </section>

        <section id="vision" className="py-20 md:py-32 bg-white">
          <Vision />
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Assistant */}
      <AIConsultant />
    </div>
  );
};

export default App;
