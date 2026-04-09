import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Sparkles } from 'lucide-react';

// Word-by-word stagger reveal
const StaggerWords = ({
  text,
  delay = 0,
  style,
}: {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <span style={{ display: 'inline', ...style }}>
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.45, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'inline-block', marginRight: '0.28em' }}
      >
        {word}
      </motion.span>
    ))}
  </span>
);

// Bubbles float in the section background, outside the cards
const sectionBubbles = [
  // Blue (vision) — left side
  { size: 14, top: '8%',  left: '2%',  color: '#4A6CF7', delay: 0,   duration: 6.5 },
  { size: 10, top: '25%', left: '6%',  color: '#4A6CF7', delay: 1.2, duration: 8 },
  { size: 8,  top: '55%', left: '1%',  color: '#4A6CF7', delay: 0.5, duration: 7 },
  { size: 12, top: '75%', left: '4%',  color: '#4A6CF7', delay: 2,   duration: 9 },
  { size: 9,  top: '42%', left: '9%',  color: '#4A6CF7', delay: 1.8, duration: 7.5 },

  // Orange (mission) — right side
  { size: 13, top: '10%', left: '93%', color: '#F97316', delay: 0.3, duration: 7 },
  { size: 9,  top: '30%', left: '97%', color: '#F97316', delay: 1.5, duration: 8.5 },
  { size: 11, top: '60%', left: '91%', color: '#F97316', delay: 0.8, duration: 6.8 },
  { size: 8,  top: '80%', left: '95%', color: '#F97316', delay: 2.2, duration: 9 },
  { size: 10, top: '47%', left: '88%', color: '#F97316', delay: 1,   duration: 7.2 },

  // Mixed — top & bottom gaps
  { size: 8,  top: '3%',  left: '38%', color: '#4A6CF7', delay: 0.7, duration: 8 },
  { size: 7,  top: '3%',  left: '60%', color: '#F97316', delay: 1.4, duration: 7 },
  { size: 9,  top: '95%', left: '35%', color: '#4A6CF7', delay: 0.4, duration: 9 },
  { size: 7,  top: '95%', left: '62%', color: '#F97316', delay: 1.9, duration: 6.5 },
];

const VisionMission: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<'vision' | 'mission' | null>(null);

  const cards = [
    {
      id: 'vision' as const,
      icon: <Globe size={28} strokeWidth={1.8} />,
      iconBg: 'rgba(74,108,247,0.12)',
      iconColor: '#4A6CF7',
      glowColor: 'rgba(74,108,247,0.18)',
      accentColor: '#4A6CF7',
      accentGradient: 'linear-gradient(135deg, #1a2b5e, #4A6CF7)',
      tag: "Where we're headed",
      tagBg: 'rgba(74,108,247,0.08)',
      tagColor: '#4A6CF7',
      title: 'Our Vision',
      text: 'To create a connected learning world where technology fuels curiosity, mastery and future ready skills for all.',
      stat: '2027',
      statLabel: 'Target Year',
      borderHover: 'rgba(74,108,247,0.35)',
      dotColor: '#4A6CF7',
    },
    {
      id: 'mission' as const,
      icon: <Target size={28} strokeWidth={1.8} />,
      iconBg: 'rgba(249,115,22,0.10)',
      iconColor: '#F97316',
      glowColor: 'rgba(249,115,22,0.16)',
      accentColor: '#F97316',
      accentGradient: 'linear-gradient(135deg, #F97316, #ea6100)',
      tag: 'How we operate',
      tagBg: 'rgba(249,115,22,0.08)',
      tagColor: '#F97316',
      title: 'Our Mission',
      text: 'To build a transformative education systems enabled by AI-Driven solution that drive industry growth deeper learning and practical application.',
      stat: '10x',
      statLabel: 'Learning Impact',
      borderHover: 'rgba(249,115,22,0.35)',
      dotColor: '#F97316',
    },
  ];

  return (
    <div style={{ position: 'relative' }}>

      {/* ── Floating bubbles — section background, outside cards ── */}
      <div style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', overflow: 'hidden', zIndex: 0,
      }}>
        {sectionBubbles.map((b, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 35%, ${b.color}30, ${b.color}08)`,
              border: `1px solid ${b.color}28`,
              boxShadow: `0 2px 8px ${b.color}18`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#4A6CF7',
            background: 'rgba(74,108,247,0.08)',
            padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(74,108,247,0.14)',
          }}>
            <Sparkles size={12} />
            What drives us
          </span>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ position: 'relative', cursor: 'default' }}
            >
              {/* Glow halo */}
              <motion.div
                animate={{
                  opacity: hoveredCard === card.id ? 1 : 0,
                  scale: hoveredCard === card.id ? 1 : 0.85,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', inset: -2, borderRadius: 28,
                  background: card.glowColor,
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />

              {/* Card body */}
              <motion.div
                animate={{
                  y: hoveredCard === card.id ? -8 : 0,
                  boxShadow: hoveredCard === card.id
                    ? `0 32px 64px rgba(26,43,94,0.14), 0 0 0 1.5px ${card.borderHover}`
                    : '0 4px 24px rgba(26,43,94,0.07), 0 0 0 1px rgba(26,43,94,0.08)',
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                  position: 'relative', zIndex: 1,
                  background: '#ffffff',
                  borderRadius: 24,
                  padding: '36px 32px 32px',
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                {/* Top gradient stripe */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3, background: card.accentGradient,
                }} />

                {/* Tag pill — pops in */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -8 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: card.tagBg, color: card.tagColor,
                    borderRadius: 999, padding: '5px 12px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                    textTransform: 'uppercase', marginBottom: 24,
                    alignSelf: 'flex-start',
                    border: `1px solid ${card.tagColor}22`,
                  }}
                >
                  {card.tag}
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: hoveredCard === card.id ? 1.12 : 1 }}
                  viewport={{ once: false, margin: '-60px' }}
                  animate={{ scale: hoveredCard === card.id ? 1.12 : 1 }}
                  transition={{ duration: 0.35, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: card.iconBg, color: card.iconColor,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22,
                    boxShadow: `0 6px 20px ${card.glowColor}`,
                  }}
                >
                  {card.icon}
                </motion.div>

                {/* Title — word stagger */}
                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800,
                  color: '#1a2b5e', margin: '0 0 14px',
                  letterSpacing: '-0.03em', lineHeight: 1.15,
                }}>
                  <StaggerWords text={card.title} delay={i * 0.15 + 0.25} />
                </h3>

                {/* Body text — blur fade */}
                <motion.p
                  initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.15 + 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#5a6a8a',
                    lineHeight: 1.75, margin: '0 0 28px', flex: 1,
                  }}
                >
                  {card.text}
                </motion.p>

                {/* Stat row — slides up last */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 20, borderTop: '1px solid rgba(26,43,94,0.07)',
                  }}
                >
                  <div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 28, fontWeight: 800, color: card.accentColor,
                      letterSpacing: '-0.04em', lineHeight: 1,
                    }}>
                      {card.stat}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, fontWeight: 600, color: '#8a9ab0',
                      letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: 3,
                    }}>
                      {card.statLabel}
                    </div>
                  </div>
                </motion.div>

                {/* Decorative dot cluster */}
                <div style={{
                  position: 'absolute', bottom: 20, right: 20,
                  display: 'grid', gridTemplateColumns: 'repeat(3, 6px)', gap: 4,
                  opacity: 0.18,
                }}>
                  {Array.from({ length: 9 }).map((_, k) => (
                    <div key={k} style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: card.dotColor,
                    }} />
                  ))}
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;