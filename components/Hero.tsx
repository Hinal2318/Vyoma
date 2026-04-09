import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

// ── Typewriter ────────────────────────────────────────────────────────────────
const TypewriterText: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Building the Future of Learning';

  useEffect(() => {
    const typeSpeed = isDeleting ? 75 : 120;
    const pauseTime = isDeleting ? 1500 : 3000;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setTimeout(() => setIsDeleting(false), pauseTime);
        }
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting]);

  const renderText = () => {
    const text = displayText;
    const futureIndex = text.indexOf('Future');
    if (futureIndex !== -1 && futureIndex + 6 <= text.length) {
      return (
        <>
          {text.substring(0, futureIndex)}
          <span style={{ color: '#4A6CF7' }}>{text.substring(futureIndex, futureIndex + 6)}</span>
          {text.substring(futureIndex + 6)}
        </>
      );
    }
    return text;
  };

  return (
    <span className="inline-block min-h-[1.2em]">
      {renderText()}
      <span className="animate-pulse ml-1" style={{ color: '#4A6CF7' }}>|</span>
    </span>
  );
};

// ── Icons ─────────────────────────────────────────────────────────────────────
const NovaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2.4 5.8 6.6.5-5 4.3 1.5 6.4L12 15.7l-5.5 3.3 1.5-6.4L3 8.3l6.6-.5L12 2z" fill="#4A6CF7" />
  </svg>
);

const CurioIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="10" r="3.2" stroke="#7C3AED" strokeWidth="1.7" />
    <circle cx="16" cy="10" r="3.2" stroke="#7C3AED" strokeWidth="1.7" />
    <path d="M8 13C8 15.5 10 17.5 12 17.5s4-2 4-4.5" stroke="#7C3AED" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M11.5 10h1" stroke="#7C3AED" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const VibeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2.2" fill="#C026D3" />
    <circle cx="5" cy="7.5" r="1.5" fill="#C026D3" />
    <circle cx="19" cy="7.5" r="1.5" fill="#C026D3" />
    <circle cx="5" cy="16.5" r="1.5" fill="#C026D3" />
    <circle cx="19" cy="16.5" r="1.5" fill="#C026D3" />
    <line x1="12" y1="12" x2="5" y2="7.5" stroke="#C026D3" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="19" y2="7.5" stroke="#C026D3" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="5" y2="16.5" stroke="#C026D3" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="19" y2="16.5" stroke="#C026D3" strokeWidth="1.2" />
  </svg>
);

// ── ProductCard — orbits the sphere centre ─────────────────────────────────────
interface ProductCardProps {
  label: string;
  subtitle: string;
  orbitRadius: number;
  startAngleDeg: number;
  duration: number;
  iconBg: string;
  iconEl: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  label, subtitle, orbitRadius, startAngleDeg, duration, iconBg, iconEl,
}) => (
  <motion.div
    animate={{ rotate: startAngleDeg + 360 }}
    initial={{ rotate: startAngleDeg }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    style={{ position: 'absolute', width: 0, height: 0, top: '50%', left: '50%', zIndex: 20 }}
  >
    <div style={{ position: 'absolute', width: orbitRadius, height: 0, top: 0, left: 0 }}>
      <motion.div
        animate={{ rotate: -(startAngleDeg + 360) }}
        initial={{ rotate: -startAngleDeg }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: orbitRadius - 60,
          top: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: '#ffffff',
          borderRadius: 11,
          padding: '7px 11px',
          boxShadow: '0 4px 20px rgba(26,43,94,0.14)',
          border: '1px solid rgba(26,43,94,0.07)',
          whiteSpace: 'nowrap',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7, flexShrink: 0,
            background: iconBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {iconEl}
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 11, color: '#1a2b5e', letterSpacing: '-0.01em' }}>{label}</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: '#8a9ab0', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{subtitle}</div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// ── 3D Orbital Ring — tilted CSS 3D plane ─────────────────────────────────────
const OrbitalRing: React.FC<{
  diameter: number;
  rotateX: number;
  rotateZ: number;
  color: string;
  opacity: number;
  animDuration: number;
  dashed?: boolean;
}> = ({ diameter, rotateX, rotateZ, color, opacity, animDuration, dashed }) => (
  <motion.div
    animate={{ rotateY: 360 }}
    transition={{ duration: animDuration, repeat: Infinity, ease: 'linear' }}
    style={{
      position: 'absolute',
      width: diameter, height: diameter,
      borderRadius: '50%',
      border: `1.5px ${dashed ? 'dashed' : 'solid'} ${color}`,
      opacity,
      transformStyle: 'preserve-3d',
      transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
      pointerEvents: 'none',
    }}
  />
);

// ── Floating molecule dot ──────────────────────────────────────────────────────
const MoleculeDot: React.FC<{
  size: number; color: string; top: string; left: string;
  delay: number; blur?: number;
}> = ({ size, color, top, left, delay, blur = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.15, 1] }}
    transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    style={{
      position: 'absolute', width: size, height: size, borderRadius: '50%',
      background: color, top, left,
      filter: blur ? `blur(${blur}px)` : undefined,
      boxShadow: `0 0 ${size * 2}px ${color}88`,
      zIndex: 8,
    }}
  />
);

// ── VyomaSphere — responsive size via prop ─────────────────────────────────────
const VyomaSphere: React.FC<{ size: number }> = ({ size }) => {
  const scale = size / 580;
  const sphereD  = Math.round(200 * scale);   // core sphere diameter
  const orbitR   = Math.round(210 * scale);   // product-card orbit radius

  // Ring diameters
  const ring1 = Math.round(500 * scale);
  const ring2 = Math.round(390 * scale);
  const ring3 = Math.round(280 * scale);

  // Molecule dot sizes
  const dotLg = Math.round(12 * scale);
  const dotMd = Math.round(8  * scale);
  const dotSm = Math.round(5  * scale);

  // Specular highlight & shadow sizes
  const specW = Math.round(70 * scale);
  const specH = Math.round(40 * scale);

  return (
    <div
      style={{
        position: 'relative',
        width: size, height: size,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        perspective: size * 2.2,          // CSS 3D perspective on container
        perspectiveOrigin: '50% 45%',
      }}
    >
      {/* ── Ambient glow behind everything ── */}
      <div style={{
        position: 'absolute',
        width: Math.round(320 * scale), height: Math.round(320 * scale),
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,108,247,0.18) 0%, rgba(124,58,237,0.10) 40%, transparent 70%)',
        filter: 'blur(32px)',
        zIndex: 0,
      }} />

      {/* ── 3D tilted orbital rings ── */}
      {/* Outermost — nearly horizontal, slow */}
      <OrbitalRing diameter={ring1} rotateX={72} rotateZ={-18} color="rgba(74,108,247,0.70)" opacity={1} animDuration={28} />
      {/* Middle — medium tilt */}
      <OrbitalRing diameter={ring2} rotateX={55} rotateZ={30}  color="rgba(124,58,237,0.75)" opacity={1} animDuration={20} dashed />
      {/* Inner — steep tilt, fastest */}
      <OrbitalRing diameter={ring3} rotateX={20} rotateZ={60}  color="rgba(249,115,22,0.70)" opacity={1} animDuration={14} />

      {/* ── Core sphere — deeply lit ── */}
      <div style={{
        position: 'absolute',
        width: sphereD, height: sphereD,
        borderRadius: '50%',
        // Multi-layer radial gradient for 3D depth: bright top-left highlight, dark lower-right
        background: `
          radial-gradient(circle at 30% 28%, rgba(120,160,255,0.55) 0%, transparent 38%),
          radial-gradient(circle at 68% 72%, rgba(0,0,0,0.55) 0%, transparent 45%),
          radial-gradient(circle at 38% 32%, #2e4a8a 0%, #1a3060 28%, #0d1a3a 58%, #060e1f 100%)
        `,
        boxShadow: `
          0 ${Math.round(24 * scale)}px ${Math.round(60 * scale)}px rgba(6,14,31,0.70),
          0 ${Math.round(4 * scale)}px ${Math.round(16 * scale)}px rgba(74,108,247,0.30),
          inset 0 ${Math.round(-8 * scale)}px ${Math.round(20 * scale)}px rgba(0,0,0,0.50),
          inset 0 ${Math.round(6 * scale)}px ${Math.round(18 * scale)}px rgba(100,140,255,0.20)
        `,
        zIndex: 4,
        overflow: 'hidden',
      }}>
        {/* Inner rim light — top edge */}
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: '35%',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(140,180,255,0.28) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        {/* Specular highlight — small bright spot top-left */}
        <div style={{
          position: 'absolute',
          width: specW, height: specH,
          top: `${Math.round(14 * scale)}px`, left: `${Math.round(22 * scale)}px`,
          background: 'radial-gradient(ellipse, rgba(200,220,255,0.70) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          transform: 'rotate(-20deg)',
        }} />
        {/* Secondary micro-highlight */}
        <div style={{
          position: 'absolute',
          width: Math.round(14 * scale), height: Math.round(9 * scale),
          top: `${Math.round(26 * scale)}px`, left: `${Math.round(44 * scale)}px`,
          background: 'rgba(255,255,255,0.55)',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }} />
        {/* Surface grid lines — latitude/longitude feel */}
        <svg
          width="100%" height="100%"
          viewBox="0 0 100 100"
          style={{ position: 'absolute', inset: 0, opacity: 0.10 }}
        >
          {/* Latitude lines */}
          {[25, 40, 50, 60, 75].map(y => (
            <ellipse key={y} cx="50" cy={y} rx="50" ry="5" fill="none" stroke="rgba(150,190,255,1)" strokeWidth="0.4" />
          ))}
          {/* Longitude lines */}
          {[20, 35, 50, 65, 80].map(x => (
            <ellipse key={x} cx={x} cy="50" rx="4" ry="50" fill="none" stroke="rgba(150,190,255,1)" strokeWidth="0.4" />
          ))}
        </svg>
      </div>

      {/* Drop shadow disc beneath sphere */}
      <div style={{
        position: 'absolute',
        width: Math.round(170 * scale), height: Math.round(30 * scale),
        bottom: `${Math.round(80 * scale)}px`,
        borderRadius: '50%',
        background: 'rgba(6,14,31,0.30)',
        filter: 'blur(18px)',
        zIndex: 2,
      }} />

      {/* ── Centre text — on the dark sphere ── */}
      <div style={{
        position: 'absolute', zIndex: 6,
        textAlign: 'center', userSelect: 'none', pointerEvents: 'none',
      }}>
        <div style={{
          width: Math.round(28 * scale), height: 3, borderRadius: 2,
          background: '#F97316', margin: `0 auto ${Math.round(6 * scale)}px`,
        }} />
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: Math.max(7, Math.round(9 * scale)),
          fontWeight: 800, color: 'rgba(255,255,255,0.90)',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          marginBottom: 1,
        }}>
          VYOMA
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: Math.max(5, Math.round(6.5 * scale)),
          color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em',
          textTransform: 'uppercase', fontWeight: 500,
          marginBottom: Math.round(8 * scale),
        }}>
          Learning Systems Pvt. Ltd.
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: Math.max(14, Math.round(22 * scale)),
          fontWeight: 800, color: '#ffffff',
          lineHeight: 1.08, letterSpacing: '-0.04em',
        }}>
          The<br />Vyoma<br />Sphere
        </div>
        <div style={{
          height: 2, width: Math.round(28 * scale),
          background: 'linear-gradient(90deg, #4A6CF7, #7C3AED)',
          margin: `${Math.round(6 * scale)}px auto ${Math.round(5 * scale)}px`,
          borderRadius: 2,
        }} />
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: Math.max(6, Math.round(8 * scale)),
          color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.05em',
        }}>
          AI Powered Education
        </div>
      </div>

      {/* ── Orbiting product cards ── */}
      <ProductCard label="Nova"  subtitle="AI Guidance" orbitRadius={orbitR} startAngleDeg={270} duration={18} iconBg="rgba(74,108,247,0.11)"  iconEl={<NovaIcon />}  />
      <ProductCard label="Curio" subtitle="Cognitive"   orbitRadius={orbitR} startAngleDeg={150} duration={18} iconBg="rgba(124,58,237,0.09)"  iconEl={<CurioIcon />} />
      <ProductCard label="Vibe"  subtitle="Network"     orbitRadius={orbitR} startAngleDeg={30}  duration={18} iconBg="rgba(192,38,211,0.08)"  iconEl={<VibeIcon />}  />
    </div>
  );
};

// ── Hook: window width ─────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  const width = useWindowWidth();

  // Responsive breakpoints
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  // Sphere size: scales smoothly with viewport
  const sphereSize = isMobile
    ? Math.min(width - 32, 320)   // nearly full-width on phone, capped at 320
    : isTablet
    ? 360
    : Math.min(580, width * 0.44); // desktop: proportion of viewport

  return (
    <div
      className="hero-section relative overflow-hidden"
      style={{
        paddingTop: isMobile ? '60px' : '80px',
        paddingBottom: isMobile ? '60px' : '80px',
        minHeight: isMobile ? 'auto' : '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 65% 70% at 75% 50%, rgba(74,108,247,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 10% 20%, rgba(26,43,94,0.05) 0%, transparent 55%),
          #f0f4ff
        `,
      }} />
      {/* Dot-grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(26,43,94,0.10) 1px, transparent 1px)',
        backgroundSize: '28px 28px', opacity: 0.55,
      }} />

      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px',
          // Stack vertically on mobile/tablet, side-by-side on desktop
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          alignItems: isDesktop ? 'center' : 'center',
          justifyContent: isDesktop ? 'space-between' : 'center',
          gap: isMobile ? 40 : isTablet ? 48 : 40,
        }}
      >
        {/* ── Text content ── */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isDesktop ? -20 : 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: isDesktop ? '0 0 auto' : undefined,
            maxWidth: isDesktop ? 540 : '100%',
            width: '100%',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 999,
              background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(10px)',
              color: '#1a2b5e', fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: isMobile ? 12 : 14,
              border: '1px solid rgba(26,43,94,0.12)',
              boxShadow: '0 4px 16px rgba(26,43,94,0.08)', marginBottom: 22,
            }}
          >
           
            Future-Ready Learning Hub
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 800, color: '#1a2b5e',
              lineHeight: 1.08, margin: '0 0 18px',
              fontSize: isMobile ? '32px' : isTablet ? '42px' : 'clamp(36px, 4.5vw, 62px)',
              letterSpacing: '-0.04em',
            }}
          >
            Transforming Education
            {!isMobile && <br />}
            {isMobile ? ' ' : ''}
            <span style={{ display: isMobile ? 'inline' : 'block', marginTop: isMobile ? 0 : 4 }}>
              Through{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #4A6CF7 60%, #2d4a9e 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                AI-Powered
              </span>{' '}Learning
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? '15px' : 'clamp(15px, 1.8vw, 20px)',
              fontWeight: 500, color: '#3d5080', margin: '0 0 14px', letterSpacing: '-0.02em',
            }}
          >
            <TypewriterText />
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: isMobile ? '14px' : 'clamp(14px, 1.3vw, 16px)',
              color: '#5a6a8a', lineHeight: 1.75, margin: '0 auto 32px',
              maxWidth: isMobile ? '100%' : 600,
              letterSpacing: '-0.01em',
            }}
          >
            Vyoma Learning Systems Pvt. Ltd. builds intelligent EdTech ecosystems
            that bridge classrooms and careers through AI and real-world engagements.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.50, duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              alignItems: isMobile ? 'center' : 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: '100%',
            }}
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(26,43,94,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#1a2b5e', color: '#fff',
                padding: isMobile ? '14px 28px' : '15px 30px',
                borderRadius: 999,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 14 : 15, fontWeight: 700,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 24px rgba(26,43,94,0.25)', letterSpacing: '-0.02em',
                transition: 'box-shadow 0.2s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              Step into Our World
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ChevronRight size={13} />
              </span>
            </motion.a>

            <motion.a
              href="#vision"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(26,43,94,0.12)', color: '#1a2b5e',
                padding: isMobile ? '14px 28px' : '15px 30px',
                borderRadius: 999,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? 14 : 15, fontWeight: 600,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(26,43,94,0.06)', letterSpacing: '-0.02em',
                transition: 'all 0.2s',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <PlayCircle style={{ color: '#F97316' }} size={17} />
              Witness the future
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Sphere — visible on ALL screen sizes ── */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isDesktop ? 40 : 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}
        >
          <VyomaSphere size={sphereSize} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;