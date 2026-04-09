import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, BookOpen, Award, ArrowRight } from 'lucide-react';

// Reusable fade-up reveal
const FadeUp = ({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-60px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    style={style}
  >
    {children}
  </motion.div>
);

// Word-by-word stagger for a text string
const StaggerWords = ({
  text,
  delay = 0,
  style,
  wordStyle,
}: {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
}) => {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.28em', ...wordStyle }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const About: React.FC = () => {
  const videoSrc = './images/about-video.mp4';
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: <Users size={18} strokeWidth={2} />, value: '50K+', label: 'Learners', color: '#4A6CF7', bg: 'rgba(74,108,247,0.08)' },
    { icon: <Zap size={18} strokeWidth={2} />, value: '3', label: 'AI Products', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
    { icon: <BookOpen size={18} strokeWidth={2} />, value: '200+', label: 'Courses', color: '#F97316', bg: 'rgba(249,115,22,0.08)' },
    { icon: <Award size={18} strokeWidth={2} />, value: '98%', label: 'Satisfaction', color: '#0ea5e9', bg: 'rgba(14,165,233,0.08)' },
  ];

  const pills = ['AI-Driven', 'Cognitive Science', 'EdTech', 'Deep Learning'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >

        {/* ── LEFT: Text ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Eyebrow pill — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 16 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#4A6CF7',
              background: 'rgba(74,108,247,0.08)',
              padding: '6px 14px', borderRadius: 999,
              border: '1px solid rgba(74,108,247,0.14)',
            }}>
              Infrastructure for Education
            </span>
          </motion.div>

          {/* Heading — word-by-word stagger */}
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(27px, 4vw, 47px)',
            fontWeight: 800,
            color: '#1a2b5e',
            lineHeight: 1.18,
            margin: '0 0 22px',
            letterSpacing: '-0.04em',
          }}>
            <StaggerWords text="More than just courses." delay={0.05} />
            <br />
            <StaggerWords text="We build the" delay={0.28} />
            {' '}
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7C3AED, #4A6CF7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              future infrastructure
            </motion.span>
            {' '}
            <StaggerWords text="of digital learning." delay={0.8} />
          </h2>

          {/* Primary paragraph — line by line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              color: '#5a6a8a',
              lineHeight: 1.78,
              margin: '0 0 16px',
            }}
          >
            Vyoma Learning Systems Pvt. Ltd. is an EdTech company focused on building
            learning infrastructure, not just digital courses. We blend education, AI,
            and design to create platforms that support learners at every stage of their journey.
          </motion.p>

          {/* Secondary paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: '#6b7a90',
              lineHeight: 1.78,
              margin: '0 0 28px',
            }}
          >
            Our approach integrates deep cognitive science with cutting-edge technology
            to ensure that knowledge isn't just consumed—it's mastered.
          </motion.p>

          {/* Keyword pills — cascade in */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {pills.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, fontWeight: 600,
                  color: '#1a2b5e',
                  background: 'rgba(26,43,94,0.06)',
                  border: '1px solid rgba(26,43,94,0.10)',
                  padding: '5px 13px', borderRadius: 999,
                  letterSpacing: '-0.01em',
                  display: 'inline-block',
                }}
              >
                {p}
              </motion.span>
            ))}
          </div>

          {/* Accent divider — grows from left */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 3, width: 56, borderRadius: 99,
              background: 'linear-gradient(90deg, #1a2b5e, #4A6CF7)',
              transformOrigin: 'left',
              marginBottom: 36,
            }}
          />

          

        </div>

        {/* ── RIGHT: Video ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Glow blobs */}
          <div style={{
            position: 'absolute', top: -40, left: -30, width: 180, height: 180,
            borderRadius: '50%', background: 'rgba(249,115,22,0.14)', filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -40, right: -30, width: 220, height: 220,
            borderRadius: '50%', background: 'rgba(74,108,247,0.14)', filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />

          {/* Video card */}
          <div
            className="relative z-10"
            style={{
              aspectRatio: '4/5',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(26,43,94,0.16)',
              border: '6px solid #ffffff',
              background: '#e8edf8',
            }}
          >
            <video
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay loop muted playsInline preload="auto"
              title="About Vyoma Video"
            >
              Your browser does not support the video tag.
            </video>

            {/* Inner border overlay */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              borderRadius: '2.25rem',
              border: '1px solid rgba(26,43,94,0.06)',
            }} />

            {/* Branded corner badge */}
            <div style={{
              position: 'absolute', top: 20, left: 20,
              background: 'rgba(26,43,94,0.82)',
              backdropFilter: 'blur(10px)',
              borderRadius: 12, padding: '8px 14px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#F97316',
                boxShadow: '0 0 8px rgba(249,115,22,0.8)',
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, fontWeight: 700, color: '#fff',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>Live</span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: '42%', right: -20,
              background: '#ffffff',
              padding: '16px 20px',
              borderRadius: 18,
              boxShadow: '0 20px 48px rgba(26,43,94,0.14)',
              border: '1px solid rgba(26,43,94,0.08)',
              zIndex: 20,
            }}
            className="hidden md:block"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(74,108,247,0.10)', color: '#4A6CF7',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: 13, color: '#1a2b5e',
                }}>
                  AI Mentorship
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: '#8a9ab0', marginTop: 1,
                }}>
                  Active on Nova/Curio
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second floating badge — bottom left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            style={{
              position: 'absolute', bottom: '14%', left: -18,
              background: '#1a2b5e',
              padding: '14px 18px',
              borderRadius: 16,
              boxShadow: '0 16px 40px rgba(26,43,94,0.28)',
              zIndex: 20,
            }}
            className="hidden md:block"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'rgba(249,115,22,0.18)', color: '#F97316',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Zap size={17} />
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: 12, color: '#fff',
                }}>
                  Powered by AI
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, color: 'rgba(255,255,255,0.55)', marginTop: 1,
                }}>
                  Nova · Curio · Vibe
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;