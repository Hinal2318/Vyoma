
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import About from './components/About';
import Products from './components/Products';
import Team from './components/Team';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen font-sans selection:bg-skyBlue selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-skyBlue origin-left"
        style={{ scaleX, zIndex: 1001 }}
      />

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="vision" className="py-24 bg-white">
          <VisionMission />
        </section>

        <section id="about" className="py-24 bg-offwhite overflow-hidden">
          <About />
        </section>

        <section id="products" className="py-24 bg-white">
          <Products />
        </section>

        <section id="team" className="py-24 bg-offwhite">
          <Team />
        </section>

        <section id="partners" className="py-16 bg-white">
          <Partners />
        </section>

        <section id="faq" className="py-24 bg-offwhite">
          <FAQ />
        </section>

        <section id="contact" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
