import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    { name: 'iHub',          logo: './images/partners/ihub.png'     },
    { name: 'SSIP Gujarat',  logo: './images/partners/ssip.png'     },
    { name: 'GTU Ventures',  logo: './images/partners/Gtu.webp'     },
    { name: 'NVIDIA',        logo: './images/partners/nvidia.webp'  },
    { name: 'Startup India', logo: './images/partners/startup.jpeg' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600&display=swap');

        .partners-strip {
          position: relative;
          background: #fff;
          border-radius: 24px;
          border: 1px solid rgba(26,43,94,0.07);
          box-shadow: 0 2px 20px rgba(26,43,94,0.05);
          overflow: hidden;
          padding: 28px 0;
        }

        /* Fade masks */
        .partners-strip::before,
        .partners-strip::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          z-index: 10;
          pointer-events: none;
        }
        .partners-strip::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 20%, transparent);
        }
        .partners-strip::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 20%, transparent);
        }

        .partner-item {
          flex-shrink: 0;
          padding: 0 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: default;
        }

        .partner-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 20px;
        }

        .partner-item img {
          height: 42px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          filter: opacity(0.82);
          transition: filter 0.3s ease;
          display: block;
        }

        .partner-item:active img {
          filter: opacity(1) drop-shadow(0 0 10px rgba(74,108,247,0.55)) drop-shadow(0 0 24px rgba(74,108,247,0.25));
        }

        .partner-fallback {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: rgba(26,43,94,0.35);
          transition: color 0.3s;
          white-space: nowrap;
        }
        .partner-item:hover .partner-fallback {
          color: #1a2b5e;
        }

        .divider-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(26,43,94,0.12);
          flex-shrink: 0;
          align-self: center;
        }

        /* Pause on hover of the whole strip */
        .scroll-track {
          display: flex;
          align-items: center;
          width: max-content;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}
        >
          <div style={{ flex: 1, height: 1, background: 'rgba(26,43,94,0.07)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {/* Small coloured dots */}
            {['#4A6CF7', '#7C3AED', '#F97316'].map((c, i) => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600, fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#8a9ab0',
              marginLeft: 4,
            }}>
              Trusted Partners &amp; Backed By
            </span>
            {['#F97316', '#7C3AED', '#4A6CF7'].map((c, i) => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div style={{ flex: 1, height: 1, background: 'rgba(26,43,94,0.07)' }} />
        </motion.div>

        {/* ── Scrolling Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="partners-strip"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <motion.div
              className="scroll-track"
              animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
              transition={{
                x: {
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                },
              }}
            >
              {[...partners, ...partners].map((partner, idx) => (
                <React.Fragment key={idx}>
                  <div className="partner-item">
                    <div className="partner-logo-wrap">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          const span = document.createElement('span');
                          span.className = 'partner-fallback';
                          span.innerText = partner.name;
                          img.parentElement?.appendChild(span);
                        }}
                      />
                    </div>
                  </div>
                  {/* Separator dot between items */}
                  {idx < [...partners, ...partners].length - 1 && (
                    <div className="divider-dot" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Count hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          style={{
            textAlign: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12,
            color: '#b0bac8',
            marginTop: 20,
            letterSpacing: '0.04em',
          }}
        >
          {partners.length} institutional partners &amp; growing
        </motion.p>

        {/* ══ BECOME A PARTNER CTA ══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{
            marginTop: 48,
            background: 'linear-gradient(135deg, #e8f4ff 0%, #eef2ff 100%)',
            borderRadius: 24,
            padding: '48px 40px',
            textAlign: 'center',
            border: '1px solid rgba(74,108,247,0.12)',
            boxShadow: '0 4px 32px rgba(74,108,247,0.07)',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#4A6CF7',
              marginBottom: 16,
            }}
          >
            PARTNERSHIP OPPORTUNITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              fontWeight: 800,
              color: '#0f1923',
              marginBottom: 12,
              letterSpacing: '-0.02em',
            }}
          >
            Interested in partnering with Vyoma?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              color: '#5a6a8a',
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            Whether you're an institution, corporation, or government body —<br />
            let's build the future of education together.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #1a2b5e, #4A6CF7)',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: 999,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(74,108,247,0.30)',
              letterSpacing: '0.01em',
            }}
          >
            Become a Partner →
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Partners;