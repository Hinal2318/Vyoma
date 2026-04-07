import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
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
  }, [mobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav')) setMobileMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home',     href: '#home'     },
    { name: 'Vision',   href: '#vision'   },
    { name: 'About',    href: '#about'    },
    { name: 'Products', href: '#products' },
    { name: 'Team',     href: '#team'     },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ',      href: '#faq'      },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 md:py-4' : 'py-4 md:py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid rgba(26,43,94,0.10)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(26,43,94,0.08)' : 'none',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex justify-between items-center"
        style={{ padding: '0 20px' }}
      >

        {/* ── Logo ── */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          {/* Logo mark */}
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #1a2b5e 0%, #2d4a9e 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(26,43,94,0.28)',
          }}>
            <span style={{
              color: '#fff', fontWeight: 800, fontSize: 16,
              fontFamily: "'DM Sans', sans-serif", letterSpacing: '-0.02em',
            }}>V</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 19, fontWeight: 800, color: '#1a2b5e',
              letterSpacing: '-0.04em', lineHeight: 1.15,
            }}>
              VYOMA
            </span>
            {/* Hide subtitle on very small screens */}
            <span
              className="hidden xs:block"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9, color: '#8a9ab0', fontWeight: 500,
                letterSpacing: '0.06em', lineHeight: 1.2, textTransform: 'uppercase',
              }}
            >
              Learning Systems Pvt. Ltd.
            </span>
          </div>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <div className="hidden lg:flex items-center" style={{ gap: 2 }}>
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  padding: '7px 13px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  color: isActive ? '#1a2b5e' : '#5a6a7e',
                  backgroundColor: isActive ? 'rgba(26,43,94,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = '#1a2b5e';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(26,43,94,0.06)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = '#5a6a7e';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.name}
              </motion.a>
            );
          })}

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginLeft: 10,
              background: '#1a2b5e', color: '#fff',
              borderRadius: 999, padding: '10px 20px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: 14,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 7,
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 16px rgba(26,43,94,0.25)',
              transition: 'box-shadow 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(26,43,94,0.38)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(26,43,94,0.25)'; }}
          >
            Get in Touch
            
          </motion.a>
        </div>

        {/* ── Right side on tablet/mobile: CTA + Hamburger ── */}
        <div className="flex lg:hidden items-center" style={{ gap: 10 }}>
          {/* Mini CTA — visible on tablet (sm+), hidden on phone */}
          <a
            href="#contact"
            className="hidden sm:inline-flex"
            style={{
              background: '#1a2b5e', color: '#fff',
              borderRadius: 999, padding: '9px 18px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: 13,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 14px rgba(26,43,94,0.22)',
            }}
          >
            Get in Touch
            <ArrowUpRight size={13} />
          </a>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'transparent',
              border: '1.5px solid rgba(26,43,94,0.15)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#1a2b5e',
              flexShrink: 0,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,43,94,0.05)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X size={20} /></motion.span>
                : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={20} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-3 right-3"
            style={{
              marginTop: 8,
              backgroundColor: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: 20,
              border: '1px solid rgba(26,43,94,0.09)',
              boxShadow: '0 20px 60px rgba(26,43,94,0.14), 0 0 0 1px rgba(26,43,94,0.04)',
              zIndex: 999,
              overflow: 'hidden',
            }}
          >
            {/* Nav links */}
            <div style={{ padding: '16px 12px 8px' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 16, fontWeight: isActive ? 700 : 500,
                      padding: '12px 14px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      backgroundColor: isActive ? 'rgba(74,108,247,0.07)' : 'transparent',
                      color: isActive ? '#1a2b5e' : '#3d5080',
                      letterSpacing: '-0.02em',
                      transition: 'all 0.15s',
                      marginBottom: 2,
                    }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(26,43,94,0.04)';
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#4A6CF7', flexShrink: 0,
                      }} />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(26,43,94,0.07)', margin: '0 16px' }} />

            {/* CTA row */}
            <div style={{ padding: '12px 12px 16px' }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #1a2b5e, #2d4a9e)',
                  color: '#fff',
                  padding: '14px',
                  borderRadius: 14,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  boxShadow: '0 6px 20px rgba(26,43,94,0.28)',
                }}
              >
                Get in Touch
                <span style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;