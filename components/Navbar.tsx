import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'vision', 'about', 'products', 'team', 'partners', 'faq', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vision', href: '#vision' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Team', href: '#team' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`navbar-fixed transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/95 navbar-blur shadow-lg border-b border-gray-100/50' : 'py-6 bg-white/10 navbar-blur'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col group cursor-pointer"
        >
          <span className="text-2xl font-heading font-bold text-darkNavy tracking-tighter group-hover:text-deepBlue transition-colors leading-tight text-contrast">
            VYOMA
          </span>
          <span className="text-xs text-mutedSlate font-medium tracking-wide leading-tight text-contrast">
            Learning Systems Pvt. Ltd.
          </span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-all relative group ${
                  isActive ? 'text-deepBlue' : 'text-mutedSlate hover:text-deepBlue'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-skyBlue transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            );
          })}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-bold shadow-lg transition-all ${
              activeSection === 'contact' 
              ? 'bg-skyBlue text-white' 
              : 'bg-skyBlue hover:bg-blue-600 text-white shadow-blue-500/20'
            }`}
          >
            Get in Touch
          </motion.a>
        </div>

        <button 
          className="md:hidden text-darkNavy p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 navbar-blur border-t border-gray-100 shadow-xl overflow-hidden"
            style={{ zIndex: 999 }}
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-xl font-bold py-2 ${
                    activeSection === link.href.slice(1) ? 'text-skyBlue' : 'text-darkNavy'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-skyBlue hover:bg-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold text-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;