import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Rocket, ChevronRight, ExternalLink, X,
  Target, Brain, BarChart3, Gamepad2, Microscope, Atom,
  FlaskConical, Users, Briefcase, TrendingUp, Check, Sparkles, Zap, Search
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SHARED MINI-UI ATOMS
// ─────────────────────────────────────────────────────────────────────────────
const MiniChip = ({ label, color, bg }: { label: string; color: string; bg: string }) => (
  <span style={{ fontSize: 9, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", color, background: bg, padding: '2px 7px', borderRadius: 99, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{label}</span>
);
const MiniCard = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(15,25,35,0.05)', ...style }}>{children}</div>
);

// ─────────────────────────────────────────────────────────────────────────────
// NOVA TOUR SCREENS
// ─────────────────────────────────────────────────────────────────────────────
const NovaTour: React.FC<{ step: number }> = ({ step }) => {
  const screens = [
    <div key={0} style={{ height: '100%', background: 'linear-gradient(145deg,#0d1a35,#1a2b5e)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.06em' }}>3D MODEL VIEWER</span>
        <MiniChip label="LIVE" color="#22c55e" bg="rgba(34,197,94,0.18)" />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%,#6b8ff7,#1a2b5e)', boxShadow: '0 0 30px rgba(74,108,247,0.6)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -12, borderRadius: '50%', border: '1.5px dashed rgba(74,108,247,0.5)' }} />
          <div style={{ position: 'absolute', inset: -22, borderRadius: '50%', border: '1px dashed rgba(74,108,247,0.25)' }} />
        </motion.div>
        {[0, 72, 144, 216, 288].map((deg, i) => (
          <motion.div key={i} animate={{ rotate: 360 }} initial={{ rotate: deg }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', width: 124, height: 124, top: '50%', left: '50%', marginTop: -62, marginLeft: -62 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4A6CF7', position: 'absolute', top: 0, left: '50%', marginLeft: -2.5, boxShadow: '0 0 6px #4A6CF7' }} />
          </motion.div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {['Physics', 'Chem', 'Bio', 'Math'].map((s, i) => (
          <div key={s} style={{ flex: 1, background: i === 0 ? 'rgba(74,108,247,0.35)' : 'rgba(74,108,247,0.12)', borderRadius: 6, padding: '4px 0', textAlign: 'center', fontSize: 8, color: i === 0 ? '#a8c0ff' : '#6b80b0', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{s}</div>
        ))}
      </div>
    </div>,

    <div key={1} style={{ height: '100%', background: '#f8faff', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>SMART QUIZ</span>
        <MiniChip label="Q 3/10" color="#4A6CF7" bg="rgba(74,108,247,0.1)" />
      </div>
      <MiniCard>
        <p style={{ fontSize: 9, fontWeight: 600, color: '#0f1923', fontFamily: "'DM Sans', sans-serif", margin: '0 0 8px' }}>Newton's 2nd Law states F =</p>
        {['ma', 'mv', 'm/a', 'a/m'].map((opt, i) => (
          <motion.div key={opt} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', borderRadius: 7, marginBottom: 4, border: '1px solid', borderColor: i === 0 ? '#4A6CF7' : 'rgba(15,25,35,0.08)', background: i === 0 ? 'rgba(74,108,247,0.07)' : '#fff' }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1.5px solid', borderColor: i === 0 ? '#4A6CF7' : '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {i === 0 && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4A6CF7' }} />}
            </div>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>{opt}</span>
          </motion.div>
        ))}
      </MiniCard>
      <div style={{ display: 'flex', gap: 3 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 3, borderRadius: 99, background: i < 3 ? '#4A6CF7' : '#e2e8f0' }} />
        ))}
      </div>
    </div>,

    <div key={2} style={{ height: '100%', background: '#f8faff', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>PROGRESS DASHBOARD</span>
        <MiniChip label="THIS WEEK" color="#F97316" bg="rgba(249,115,22,0.1)" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {[{ label: 'Score', val: '84%', color: '#4A6CF7' }, { label: 'Streak', val: '12d', color: '#F97316' }, { label: 'Quizzes', val: '47', color: '#7C3AED' }, { label: 'Rank', val: '#3', color: '#22c55e' }].map(s => (
          <MiniCard key={s.label} style={{ textAlign: 'center', padding: '8px 6px' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: s.color, fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{s.label}</div>
          </MiniCard>
        ))}
      </div>
      <MiniCard style={{ flex: 1 }}>
        <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>Subject Performance</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 40 }}>
          {[{ h: '90%', c: '#4A6CF7', l: 'Phy' }, { h: '65%', c: '#7C3AED', l: 'Che' }, { h: '80%', c: '#F97316', l: 'Bio' }, { h: '55%', c: '#0ea5e9', l: 'Mat' }].map(b => (
            <div key={b.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
              <motion.div initial={{ height: 0 }} animate={{ height: b.h }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ width: '100%', background: b.c, borderRadius: '3px 3px 0 0', opacity: 0.85 }} />
              <span style={{ fontSize: 7, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>{b.l}</span>
            </div>
          ))}
        </div>
      </MiniCard>
    </div>,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }} style={{ height: '100%' }}>
        {screens[step % screens.length]}
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CURIO TOUR SCREENS
// ─────────────────────────────────────────────────────────────────────────────
const CurioTour: React.FC<{ step: number }> = ({ step }) => {
  const screens = [
    <div key={0} style={{ height: '100%', background: '#faf7ff', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>AI TUTOR</span>
        <MiniChip label="ONLINE" color="#22c55e" bg="rgba(34,197,94,0.12)" />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#4A6CF7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={10} color="#fff" />
          </div>
          <div style={{ background: '#fff', borderRadius: '0 10px 10px 10px', padding: '7px 10px', boxShadow: '0 2px 8px rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.1)', maxWidth: '80%' }}>
            <p style={{ fontSize: 9, color: '#0f1923', fontFamily: "'DM Sans', sans-serif", margin: 0, lineHeight: 1.5 }}>Let's explore the Bohr model! Electrons orbit in fixed energy levels 🔬</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#7C3AED', borderRadius: '10px 0 10px 10px', padding: '7px 10px', maxWidth: '70%' }}>
            <p style={{ fontSize: 9, color: '#fff', fontFamily: "'DM Sans', sans-serif", margin: 0, lineHeight: 1.5 }}>Why can't electrons be between levels?</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#4A6CF7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={10} color="#fff" />
          </div>
          <div style={{ background: '#fff', borderRadius: '0 10px 10px 10px', padding: '8px 12px', boxShadow: '0 2px 8px rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.1)' }}>
            <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {[0, 0.2, 0.4].map(d => (
                <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                  style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#fff', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 8, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 8, color: '#b0bac8', fontFamily: "'DM Sans', sans-serif", flex: 1 }}>Ask anything…</span>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronRight size={9} color="#fff" />
        </div>
      </div>
    </div>,

    <div key={1} style={{ height: '100%', background: 'linear-gradient(145deg,#1a0a2e,#3b1070)', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>3D SCIENCE LAB</span>
        <MiniChip label="AR MODE" color="#e879f9" bg="rgba(232,121,249,0.2)" />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'relative', width: 50, height: 80 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div key={i} animate={{ scaleX: [1, 0.3, 1], opacity: [0.9, 0.4, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.12 }}
              style={{ position: 'absolute', top: i * 10, left: 0, right: 0, height: 4, borderRadius: 99, background: i % 2 === 0 ? '#7C3AED' : '#e879f9', boxShadow: `0 0 6px ${i % 2 === 0 ? '#7C3AED' : '#e879f9'}` }} />
          ))}
        </div>
        <div style={{ position: 'absolute', top: 8, right: 10, fontSize: 8, color: '#e879f9', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, background: 'rgba(232,121,249,0.12)', padding: '2px 6px', borderRadius: 4 }}>Adenine</div>
        <div style={{ position: 'absolute', bottom: 8, left: 6, fontSize: 8, color: '#a78bfa', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, background: 'rgba(124,58,237,0.15)', padding: '2px 6px', borderRadius: 4 }}>Thymine</div>
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {['DNA', 'Cell', 'Atom', 'Wave'].map((t, i) => (
          <div key={t} style={{ flex: 1, textAlign: 'center', padding: '4px 0', background: i === 0 ? 'rgba(232,121,249,0.2)' : 'rgba(255,255,255,0.06)', borderRadius: 6, fontSize: 8, color: i === 0 ? '#e879f9' : 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{t}</div>
        ))}
      </div>
    </div>,

    <div key={2} style={{ height: '100%', background: '#f8faff', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>EXAM READINESS</span>
        <MiniChip label="JEE PREP" color="#7C3AED" bg="rgba(124,58,237,0.1)" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {[{ sub: 'Physics', pct: 78, color: '#4A6CF7' }, { sub: 'Chem', pct: 91, color: '#7C3AED' }, { sub: 'Maths', pct: 63, color: '#F97316' }].map(s => (
          <MiniCard key={s.sub} style={{ textAlign: 'center', padding: '8px 4px' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" style={{ display: 'block', margin: '0 auto 4px' }}>
              <circle cx="18" cy="18" r="14" fill="none" stroke="#f0f0f0" strokeWidth="3" />
              <motion.circle cx="18" cy="18" r="14" fill="none" stroke={s.color} strokeWidth="3"
                strokeDasharray={`${s.pct * 0.88} 88`} strokeDashoffset="22" strokeLinecap="round"
                initial={{ strokeDasharray: '0 88' }} animate={{ strokeDasharray: `${s.pct * 0.88} 88` }}
                transition={{ duration: 0.8, delay: 0.2 }} />
              <text x="18" y="22" textAnchor="middle" fontSize="7" fontWeight="800" fill={s.color} fontFamily="sans-serif">{s.pct}%</text>
            </svg>
            <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>{s.sub}</div>
          </MiniCard>
        ))}
      </div>
      <MiniCard>
        <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif", marginBottom: 5 }}>Focus areas</div>
        {['Organic Chemistry', 'Rotational Motion'].map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#F97316', flexShrink: 0 }} />
            <span style={{ fontSize: 9, color: '#0f1923', fontFamily: "'DM Sans', sans-serif", flex: 1 }}>{t}</span>
            <MiniChip label="Review" color="#F97316" bg="rgba(249,115,22,0.1)" />
          </div>
        ))}
      </MiniCard>
    </div>,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }} style={{ height: '100%' }}>
        {screens[step % screens.length]}
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VIBE TOUR SCREENS
// ─────────────────────────────────────────────────────────────────────────────
const VibeTour: React.FC<{ step: number }> = ({ step }) => {
  const screens = [
    <div key={0} style={{ height: '100%', background: '#fff7f0', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>INTERNSHIP FEED</span>
        <MiniChip label="24 NEW" color="#F97316" bg="rgba(249,115,22,0.12)" />
      </div>
      <div style={{ background: '#fff', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 8, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 5 }}>
        <Search size={9} color="#F97316" />
        <span style={{ fontSize: 8, color: '#b0bac8', fontFamily: "'DM Sans', sans-serif" }}>Search roles, skills…</span>
      </div>
      {[
        { role: 'UI/UX Intern', company: 'DesignHub', tag: 'Remote', color: '#4A6CF7' },
        { role: 'ML Engineer Intern', company: 'AI Startup', tag: 'Hybrid', color: '#7C3AED' },
        { role: 'Marketing Intern', company: 'BrandCo', tag: 'On-site', color: '#F97316' },
      ].map((j, i) => (
        <motion.div key={j.role} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <MiniCard style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px' }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: j.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Briefcase size={11} color={j.color} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>{j.role}</div>
              <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>{j.company}</div>
            </div>
            <MiniChip label={j.tag} color={j.color} bg={j.color + '14'} />
          </MiniCard>
        </motion.div>
      ))}
    </div>,

    <div key={1} style={{ height: '100%', background: 'linear-gradient(145deg,#1a0e00,#7c2d00)', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>SMART MATCH</span>
        <MiniChip label="AI POWERED" color="#fbbf24" bg="rgba(251,191,36,0.2)" />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <div style={{ position: 'relative', width: 70, height: 70 }}>
          <svg width="70" height="70" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="5" />
            <motion.circle cx="35" cy="35" r="28" fill="none" stroke="#F97316" strokeWidth="5"
              strokeDasharray="176" strokeDashoffset="35" strokeLinecap="round"
              initial={{ strokeDashoffset: 176 }} animate={{ strokeDashoffset: 35 }}
              transition={{ duration: 1.2, delay: 0.2 }} />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: '#F97316', fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>92%</span>
            <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif" }}>match</span>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>DesignHub — UI/UX</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)', fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>Based on your skills & profile</div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[{ sk: 'Figma', pct: 90 }, { sk: 'Research', pct: 75 }, { sk: 'Prototyping', pct: 85 }].map(s => (
            <div key={s.sk} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif", width: 58, flexShrink: 0 }}>{s.sk}</span>
              <div style={{ flex: 1, height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.1)' }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ height: '100%', borderRadius: 99, background: '#F97316' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#F97316', borderRadius: 8, padding: '7px 0', textAlign: 'center', fontSize: 9, fontWeight: 700, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>Apply Now →</div>
    </div>,

    <div key={2} style={{ height: '100%', background: '#f8faff', borderRadius: 12, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>MY INTERNSHIP</span>
        <MiniChip label="ACTIVE" color="#22c55e" bg="rgba(34,197,94,0.12)" />
      </div>
      <MiniCard style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Briefcase size={14} color="#F97316" />
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#0f1923', fontFamily: "'DM Sans', sans-serif" }}>DesignHub · UI/UX</div>
          <div style={{ fontSize: 8, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>Week 3 of 8 · Remote</div>
        </div>
      </MiniCard>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {[
          { task: 'User Research', done: true },
          { task: 'Wireframes', done: true },
          { task: 'Prototype', done: false, active: true },
          { task: 'Handoff', done: false },
        ].map(t => (
          <div key={t.task} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: t.done ? '#22c55e' : t.active ? '#F97316' : '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {t.done ? <Check size={8} color="#fff" strokeWidth={3} /> : t.active ? <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} /> : null}
            </div>
            <span style={{ fontSize: 9, fontFamily: "'DM Sans', sans-serif", color: t.done ? '#22c55e' : t.active ? '#F97316' : '#b0bac8', fontWeight: t.active ? 700 : 500, flex: 1 }}>{t.task}</span>
            {t.active && <MiniChip label="In Progress" color="#F97316" bg="rgba(249,115,22,0.1)" />}
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(249,115,22,0.07)', borderRadius: 8, padding: 8 }}>
        <div style={{ fontSize: 8, color: '#F97316', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: 2 }}>Mentor Feedback</div>
        <div style={{ fontSize: 8, color: '#5a6a8a', fontFamily: "'DM Sans', sans-serif" }}>"Great initiative on the user flows! Keep it up 🎉"</div>
      </div>
    </div>,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }} style={{ height: '100%' }}>
        {screens[step % screens.length]}
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT TOUR CONTAINER
// ─────────────────────────────────────────────────────────────────────────────
const tourMeta: Record<string, { labels: string[]; color: string; TourComp: React.FC<{ step: number }> }> = {
  nova:  { labels: ['3D Models', 'Smart Quiz', 'Analytics'],   color: '#4A6CF7', TourComp: NovaTour },
  curio: { labels: ['AI Tutor', '3D Lab', 'Exam Prep'],       color: '#7C3AED', TourComp: CurioTour },
  vibe:  { labels: ['Browse', 'Smart Match', 'My Internship'], color: '#F97316', TourComp: VibeTour },
};

const ProductTour: React.FC<{ productId: string }> = ({ productId }) => {
  const [step, setStep] = useState(0);
  const meta = tourMeta[productId];
  if (!meta) return null;
  const { labels, color, TourComp } = meta;

  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % labels.length), 3500);
    return () => clearInterval(t);
  }, [labels.length]);

  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <div style={{ width: 3, height: 18, borderRadius: 99, background: color }} />
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#0f1923', margin: 0 }}>Product Tour</h3>
        <div style={{ flex: 1, height: 1, background: 'rgba(15,25,35,0.07)' }} />
        <span style={{ fontSize: 11, color: '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>Interactive Preview</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 190px', gap: 16, alignItems: 'start' }}>
        <div style={{ background: '#f8faff', borderRadius: 18, padding: 14, border: '1px solid rgba(15,25,35,0.07)', minHeight: 260, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10, padding: '6px 10px', background: '#fff', borderRadius: 8, border: '1px solid rgba(15,25,35,0.06)' }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ flex: 1, height: 5, borderRadius: 99, background: '#f0f4ff', marginLeft: 4 }} />
          </div>
          <div style={{ height: 228 }}>
            <TourComp step={step} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {labels.map((label, i) => (
            <button key={label} onClick={() => setStep(i)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 12, background: step === i ? color + '12' : 'transparent', border: `1.5px solid ${step === i ? color + '40' : 'rgba(15,25,35,0.07)'}`, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: step === i ? color : 'rgba(15,25,35,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: step === i ? '#fff' : '#8a9ab0', fontFamily: "'DM Sans', sans-serif" }}>{i + 1}</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: step === i ? 700 : 500, color: step === i ? color : '#5a6a8a', fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
              {step === i && <motion.div layoutId={`dot-${productId}`} style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: color }} />}
            </button>
          ))}
          <div style={{ display: 'flex', gap: 5, marginTop: 4, paddingLeft: 4 }}>
            {labels.map((_, i) => (
              <motion.div key={i} animate={{ width: step === i ? 18 : 6 }} transition={{ duration: 0.3 }}
                onClick={() => setStep(i)}
                style={{ height: 6, borderRadius: 99, background: step === i ? color : 'rgba(15,25,35,0.12)', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PRODUCTS COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Products: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  const products = [
    { id: 'nova', name: 'NOVA', tagline: 'The Future of Learning', grade: 'Classes 9–10', description: 'Immersive 3D models, interactive quizzes, and deep performance analysis—designed to make complex concepts simple, engaging, and future-ready.', icon: <BookOpen size={26} strokeWidth={1.8} />, iconBg: 'linear-gradient(135deg,#e8eeff,#d0d8ff)', iconColor: '#4A6CF7', accentColor: '#4A6CF7', accentDark: '#3a57e8', accentLight: 'rgba(74,108,247,0.08)', gradeBg: '#1a2b5e', glow: 'rgba(74,108,247,0.22)', status: 'development', statusText: 'Coming Soon', link: '#contact', highlights: ['3D Visual Models', 'Smart Quizzes', 'Progress Analytics'] },
    { id: 'curio', name: 'CURIO', tagline: 'Advanced Science Learning', grade: 'Classes 11–12 Science', description: 'AI-powered immersive learning with 3D visualization, adaptive assessments, and AI tutoring for competitive exam mastery.', icon: <img src="./images/logos/curio.png" alt="Curio" style={{ width: 26, height: 26, objectFit: 'contain' }} />, iconBg: 'linear-gradient(135deg,#f3eeff,#e2d0ff)', iconColor: '#7C3AED', accentColor: '#7C3AED', accentDark: '#6d28d9', accentLight: 'rgba(124,58,237,0.08)', gradeBg: '#7C3AED', glow: 'rgba(124,58,237,0.22)', status: 'live', statusText: 'Live Now', link: 'https://curioteach.com/', isExternal: true, highlights: ['AI Tutor', '3D Science Lab', 'Exam Analytics'] },
    { id: 'vibe', name: 'VIBE', tagline: 'Industry Connect Platform', grade: 'Industry Connect', description: 'Bridges students with SMEs and startups through smart internship matching—real-world experience from day one.', icon: <Rocket size={26} strokeWidth={1.8} />, iconBg: 'linear-gradient(135deg,#fff3eb,#ffddc4)', iconColor: '#F97316', accentColor: '#F97316', accentDark: '#ea6100', accentLight: 'rgba(249,115,22,0.08)', gradeBg: '#F97316', glow: 'rgba(249,115,22,0.22)', status: 'development', statusText: 'Coming Soon', link: '#contact', highlights: ['Smart Matching', 'Skill Building', 'Industry Access'] },
  ] as const;

  const FeatureCard = ({ icon, title, items, color, bg }: { icon: React.ReactNode; title: string; items: { title: string; text: string }[]; color: string; bg: string }) => (
    <div style={{ background: bg, borderRadius: 18, padding: 22, border: `1px solid ${color}18` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>{icon}</div>
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#0f1923', margin: 0 }}>{title}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <Check size={10} color={color} strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: '#0f1923', fontSize: 13 }}>{item.title} </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b7a90', fontSize: 13, lineHeight: 1.6 }}>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Modal with NO scroll on side — fixed overlay, inner scrollable content only
  const Modal = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <AnimatePresence>
      {activeModal === id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(10,18,35,0.65)',
            backdropFilter: 'blur(10px)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            style={{
              background: '#ffffff',
              borderRadius: '28px 28px 0 0',
              maxWidth: 880,
              width: '100%',
              height: '90vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 -20px 80px rgba(15,25,35,0.18)',
              overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '14px 0 0', flexShrink: 0 }}>
              <div style={{ width: 40, height: 4, borderRadius: 99, background: 'rgba(15,25,35,0.12)' }} />
            </div>

            {/* Close button */}
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              style={{
                position: 'absolute', top: 16, right: 20,
                background: 'rgba(15,25,35,0.06)', border: 'none', cursor: 'pointer',
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#6b7a90', transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(15,25,35,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(15,25,35,0.06)')}
            >
              <X size={18} />
            </button>

            {/* Scrollable content — ONLY this scrolls */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: '12px 28px 40px',
              // Hide scrollbar visually but keep scrollable
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(15,25,35,0.12) transparent',
            }}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .product-card { cursor: pointer; }
        .product-card:hover .card-glow { opacity: 1 !important; }

        .plan-card { transition: transform 0.25s ease; }
        .plan-card:hover { transform: translateY(-4px); }

        @media (max-width: 768px) {
          .products-grid { grid-template-columns: 1fr !important; }
          .modal-grid-2 { grid-template-columns: 1fr !important; }
          .plans-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .products-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '6px 18px', borderRadius: 999,
            background: 'rgba(62,207,178,0.08)', color: '#4A6CF7',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12,
            border: '1px solid rgba(62,207,178,0.18)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            <Sparkles size={12} /> Our Ecosystem
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800,
            color: '#0f1923', marginBottom: 16, lineHeight: 1.1,
            letterSpacing: '-0.04em',
          }}>The Vyoma Ecosystem</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(15px,2vw,17px)', color: '#6b7a90',
            maxWidth: 500, margin: '0 auto', lineHeight: 1.7, letterSpacing: '-0.01em',
          }}>
            From school foundations to industrial readiness — our suite of platforms covers the entire learning lifecycle.
          </p>
        </div>

        {/* Cards */}
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveModal(product.id)}
              role="button" tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActiveModal(product.id)}
              style={{ position: 'relative', outline: 'none' }}
            >
              {/* Glow */}
              <motion.div
                className="card-glow"
                animate={{ opacity: hoveredCard === product.id ? 1 : 0, scale: hoveredCard === product.id ? 1 : 0.9 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: 'absolute', inset: -8, borderRadius: 36,
                  background: product.glow, filter: 'blur(28px)',
                  pointerEvents: 'none', zIndex: 0,
                }}
              />

              <motion.div
                animate={{
                  y: hoveredCard === product.id ? -10 : 0,
                  boxShadow: hoveredCard === product.id
                    ? `0 28px 60px rgba(15,25,35,0.13), 0 0 0 1.5px ${product.accentColor}30`
                    : '0 2px 16px rgba(15,25,35,0.07), 0 0 0 1.5px rgba(15,25,35,0.07)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  background: '#ffffff',
                  borderRadius: 26,
                  padding: '26px 22px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg,${product.accentColor},${product.accentDark})`,
                }} />

                {/* Subtle bg pattern */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 120, height: 120,
                  background: `radial-gradient(circle at 80% 20%, ${product.accentColor}0a, transparent 60%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon + Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, marginTop: 6 }}>
                  <motion.div
                    animate={{ scale: hoveredCard === product.id ? 1.08 : 1, rotate: hoveredCard === product.id ? 3 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 54, height: 54, borderRadius: 16,
                      background: product.iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: product.iconColor, flexShrink: 0,
                      boxShadow: `0 4px 16px ${product.accentColor}28`,
                    }}
                  >
                    {product.icon}
                  </motion.div>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '5px 10px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    color: product.status === 'live' ? '#16a34a' : '#8a9ab0',
                    background: product.status === 'live' ? '#dcfce7' : 'rgba(15,25,35,0.05)',
                    border: `1px solid ${product.status === 'live' ? '#bbf7d0' : 'rgba(15,25,35,0.08)'}`,
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                  }}>
                    {product.status === 'live' && (
                      <motion.span
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}
                      />
                    )}
                    {product.statusText}
                  </div>
                </div>

                {/* Grade badge */}
                <div style={{
                  display: 'inline-flex', alignSelf: 'flex-start',
                  padding: '3px 10px', borderRadius: 999,
                  fontSize: 10, fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#fff', background: product.gradeBg,
                  textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14,
                }}>
                  {product.grade}
                </div>

                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 28, fontWeight: 800,
                  color: '#0f1923', marginBottom: 5, lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                }}>
                  {product.name}
                </h3>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, fontWeight: 700,
                  color: product.accentColor, marginBottom: 12,
                  letterSpacing: '0.01em',
                }}>
                  {product.tagline}
                </p>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#6b7a90', fontSize: 13.5,
                  lineHeight: 1.7, flexGrow: 1, marginBottom: 20,
                  letterSpacing: '-0.005em',
                }}>
                  {product.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                  {product.highlights.map(h => (
                    <motion.span
                      key={h}
                      animate={{ background: hoveredCard === product.id ? product.accentColor + '18' : product.accentLight }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: '4px 10px', borderRadius: 999,
                        color: product.accentColor,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11, fontWeight: 600,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>

                {/* Footer row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <motion.div
                    animate={{ x: hoveredCard === product.id ? 4 : 0, color: hoveredCard === product.id ? product.accentColor : '#8a9ab0' }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13 }}
                  >
                    Explore <ChevronRight size={15} strokeWidth={2.5} />
                  </motion.div>

                  {'isExternal' in product && product.isExternal && (
                    <a
                      href={product.link} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '7px 14px', borderRadius: 999,
                        background: product.accentColor, color: '#fff',
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700,
                        textDecoration: 'none', transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      Visit <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ══ NOVA MODAL ══ */}
        <Modal id="nova">
          <div style={{ background: 'linear-gradient(135deg,#1a2b5e,#2d4499,#4A6CF7)', borderRadius: 20, padding: '26px 24px', marginBottom: 26, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ width: 62, height: 62, borderRadius: 18, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><BookOpen size={28} strokeWidth={1.8} /></div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.04em' }}>NOVA</h2>
                <span style={{ padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' }}>Classes 9–10</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: 0 }}>The Future of Learning for Class 9 & 10 🚀</p>
            </div>
          </div>
          <div style={{ background: 'rgba(74,108,247,0.05)', borderRadius: 14, padding: '18px 20px', marginBottom: 22, border: '1px solid rgba(74,108,247,0.12)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#5a6a8a', lineHeight: 1.75, fontSize: 14, margin: 0 }}>Nova is a foundational learning platform designed exclusively for Class 9 and 10 students. It combines immersive 3D models, interactive quizzes, and deep performance analysis to make complex concepts simple, engaging, and future-ready.</p>
          </div>
          <ProductTour productId="nova" />
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <FeatureCard icon={<Target size={16} />} color="#4A6CF7" bg="rgba(74,108,247,0.04)" title="Why Nova?" items={[{ title: 'Conceptual Clarity:', text: 'Visualize tough topics with interactive 3D models that bring textbooks to life.' }, { title: 'Curiosity Driven:', text: 'Explore beyond rote learning with simulations that spark curiosity.' }, { title: 'Academic Readiness:', text: 'Strengthen foundations for board exams with structured, adaptive learning.' }, { title: 'Performance Insights:', text: 'Detailed analysis helps students track progress and improve.' }]} />
            <FeatureCard icon={<Brain size={16} />} color="#F97316" bg="rgba(249,115,22,0.04)" title="Key Features" items={[{ title: 'Immersive 3D Models:', text: 'Physics, Chemistry, Biology, and Math concepts explained visually.' }, { title: 'Interactive Quizzes:', text: 'Test knowledge instantly with gamified assessments.' }, { title: 'Smart Analytics:', text: 'Personalized reports that highlight strengths and areas for improvement.' }, { title: 'Engaging Interface:', text: 'A modern, student-friendly design that makes learning enjoyable.' }]} />
          </div>
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <FeatureCard icon={<Gamepad2 size={16} />} color="#7C3AED" bg="rgba(124,58,237,0.04)" title="Who Is It For?" items={[{ title: 'Students (Class 9 & 10):', text: 'Build strong foundations and prepare for exams with confidence.' }, { title: 'Teachers:', text: 'Use Nova as a teaching aid to explain complex concepts visually.' }, { title: 'Parents:', text: 'Ensure your child learns effectively with measurable outcomes.' }]} />
            <FeatureCard icon={<BarChart3 size={16} />} color="#22c55e" bg="rgba(34,197,94,0.04)" title="The Nova Advantage" items={[{ title: 'From Foundations to Futures:', text: 'Covers the entire learning journey from school readiness to career pathways.' }, { title: 'Interactive & Visual:', text: 'Moves beyond traditional learning with immersive experiences.' }, { title: 'Data-Driven Growth:', text: 'Every quiz and activity feeds into smart analytics for improvement.' }]} />
          </div>
        </Modal>

        {/* ══ CURIO MODAL ══ */}
        <Modal id="curio">
          <div style={{ background: 'linear-gradient(135deg,#3b0764,#6d28d9,#7C3AED)', borderRadius: 20, padding: '26px 24px', marginBottom: 26, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ width: 62, height: 62, borderRadius: 18, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, flexShrink: 0 }}>
              <img src="./images/logos/curio.png" alt="Curio" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.04em' }}>CURIO</h2>
                <span style={{ padding: '3px 10px', borderRadius: 999, background: '#22c55e', color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 4 }}>
                  <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'inline-block' }} /> Live Now
                </span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: 0 }}>Advanced Science Learning for Class 11 & 12 🔬</p>
            </div>
            <a href="https://curioteach.com/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px', borderRadius: 999, background: '#fff', color: '#7C3AED', fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, textDecoration: 'none', flexShrink: 0 }}>
              Visit Platform <ExternalLink size={13} />
            </a>
          </div>
          <div style={{ background: 'rgba(124,58,237,0.05)', borderRadius: 14, padding: '18px 20px', marginBottom: 22, border: '1px solid rgba(124,58,237,0.12)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#5a6a8a', lineHeight: 1.75, fontSize: 14, margin: 0 }}>Curio is a specialized learning platform crafted for Class 11 and 12 science students. It blends immersive 3D models, interactive quizzes, and in-depth performance analysis to simplify complex scientific concepts and prepare learners for competitive exams and higher studies.</p>
          </div>
          <ProductTour productId="curio" />
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <FeatureCard icon={<Target size={16} />} color="#7C3AED" bg="rgba(124,58,237,0.04)" title="Why Curio?" items={[{ title: 'Conceptual Depth:', text: 'Break down advanced Physics, Chemistry, Biology, and Math with visual clarity.' }, { title: 'Curiosity Unleashed:', text: 'Explore science through interactive 3D simulations and experiments.' }, { title: 'Exam Readiness:', text: 'Prepare for board exams, NEET, JEE, and other competitive tests.' }, { title: 'Analytical Insights:', text: 'Smart reports highlight strengths, weaknesses, and progress.' }]} />
            <FeatureCard icon={<Microscope size={16} />} color="#F97316" bg="rgba(249,115,22,0.04)" title="Key Features" items={[{ title: 'Immersive 3D Science Models:', text: 'Visualize molecules, reactions, anatomy, and physics phenomena.' }, { title: 'Interactive Quizzes:', text: 'Reinforce learning with adaptive assessments aligned to exam patterns.' }, { title: 'Performance Analytics:', text: 'Track readiness with detailed dashboards and personalized recommendations.' }, { title: 'Engaging Interface:', text: 'A sleek, student-friendly design that makes advanced science approachable.' }]} />
          </div>
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 22 }}>
            <FeatureCard icon={<Atom size={16} />} color="#22c55e" bg="rgba(34,197,94,0.04)" title="Who Is It For?" items={[{ title: 'Students (Class 11 & 12):', text: 'Build mastery in core subjects and prepare for competitive exams.' }, { title: 'Teachers:', text: 'Use Curio as a teaching aid to explain advanced concepts visually.' }, { title: 'Parents:', text: 'Ensure effective learning outcomes with measurable progress tracking.' }]} />
            <FeatureCard icon={<FlaskConical size={16} />} color="#4A6CF7" bg="rgba(74,108,247,0.04)" title="The Curio Advantage" items={[{ title: 'From Concepts to Careers:', text: 'Bridges school learning with competitive exam readiness.' }, { title: 'Immersive & Interactive:', text: 'Moves beyond rote memorization with hands-on 3D experiences.' }, { title: 'Data-Driven Success:', text: 'Every quiz feeds into analytics for smarter preparation.' }]} />
          </div>
          {/* Plans */}
          <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(15,25,35,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg,#1a2b5e,#4A6CF7)', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Zap size={17} color="#fff" />
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>Subscription Plans</h3>
            </div>
            <div className="plans-grid" style={{ background: '#f8faff', padding: 14, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {[{ tier: 'BASIC', price: '₹69', features: ['3D/AR Models', 'Topic Quiz', 'Basic Analysis', 'Technical Support'], highlight: false }, { tier: 'STANDARD', price: '₹149', features: ['3D/AR Models', 'Topic Quiz', 'Test Quiz', 'AI Chat Bot', 'Student Dashboard', 'Technical Support'], highlight: true }, { tier: 'PRO', price: '₹299', features: ['3D/AR Models', 'Topic/Test Quiz', 'AI Voice Assistant', 'AI Chat Bot', 'Advanced Dashboard', 'Technical Support'], highlight: false }].map(plan => (
                <div key={plan.tier} className="plan-card" style={{ background: plan.highlight ? 'linear-gradient(145deg,#1a2b5e,#4A6CF7)' : '#fff', borderRadius: 16, overflow: 'hidden', border: plan.highlight ? 'none' : '1.5px solid rgba(15,25,35,0.08)', boxShadow: plan.highlight ? '0 8px 28px rgba(74,108,247,0.28)' : '0 2px 10px rgba(15,25,35,0.05)', position: 'relative' }}>
                  {plan.highlight && <div style={{ position: 'absolute', top: 10, right: 10, padding: '2px 8px', borderRadius: 999, background: '#F97316', color: '#fff', fontSize: 9, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>POPULAR</div>}
                  <div style={{ padding: '18px 14px' }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#8a9ab0', marginBottom: 4, letterSpacing: '0.06em' }}>{plan.tier}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 14 }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 26, color: plan.highlight ? '#fff' : '#0f1923', letterSpacing: '-0.04em' }}>{plan.price}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: plan.highlight ? 'rgba(255,255,255,0.6)' : '#8a9ab0' }}>/mo</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {plan.features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                          <div style={{ width: 15, height: 15, borderRadius: '50%', background: plan.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(62,207,178,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Check size={8} color={plan.highlight ? '#fff' : '#4A6CF7'} strokeWidth={3} />
                          </div>
                          <span style={{ fontFamily: "'DM Sans', sans-serif", color: plan.highlight ? 'rgba(255,255,255,0.85)' : '#5a6a8a', fontSize: 12 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* ══ VIBE MODAL ══ */}
        <Modal id="vibe">
          <div style={{ background: 'linear-gradient(135deg,#7c2100,#c2510a,#F97316)', borderRadius: 20, padding: '26px 24px', marginBottom: 26, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ width: 62, height: 62, borderRadius: 18, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><Rocket size={28} strokeWidth={1.8} /></div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.04em' }}>VIBE</h2>
                <span style={{ padding: '3px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>Coming Soon</span>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: 0 }}>Connecting Students and Startups Through Internships 💼</p>
            </div>
          </div>
          <div style={{ background: 'rgba(249,115,22,0.05)', borderRadius: 14, padding: '18px 20px', marginBottom: 22, border: '1px solid rgba(249,115,22,0.12)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#5a6a8a', lineHeight: 1.75, fontSize: 14, margin: 0 }}>Vibe is an internship provider platform designed to bridge the gap between students and the industry. It connects Class 11, 12, and beyond learners with SMEs and startups, offering real-world experience while giving businesses access to fresh talent quickly and efficiently.</p>
          </div>
          <ProductTour productId="vibe" />
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            <FeatureCard icon={<Target size={16} />} color="#F97316" bg="rgba(249,115,22,0.04)" title="Why Vibe?" items={[{ title: 'For Students:', text: 'Gain hands-on exposure, build skills, and prepare for future careers.' }, { title: 'For Industry:', text: 'Access a pool of motivated interns to support growth and innovation.' }, { title: 'For Startups & SMEs:', text: 'Simplify hiring with a platform that matches interns to your needs.' }, { title: 'For Education:', text: 'Extend learning beyond classrooms into practical, industry-ready experiences.' }]} />
            <FeatureCard icon={<Briefcase size={16} />} color="#4A6CF7" bg="rgba(74,108,247,0.04)" title="Key Features" items={[{ title: 'Internship Matching:', text: 'Smart algorithms connect students with relevant opportunities in SMEs and startups.' }, { title: 'Skill Development:', text: 'Students gain practical knowledge aligned with their academic background.' }, { title: 'Industry Access:', text: 'Businesses can easily post, manage, and select interns.' }, { title: 'Analytics & Tracking:', text: 'Monitor performance and internship outcomes with detailed insights.' }]} />
          </div>
          <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <FeatureCard icon={<Users size={16} />} color="#22c55e" bg="rgba(34,197,94,0.04)" title="Who Is It For?" items={[{ title: 'Students:', text: 'Looking to gain practical experience and boost employability.' }, { title: 'Startups & SMEs:', text: 'Seeking interns to support projects, innovation, and growth.' }, { title: 'Educational Institutions:', text: 'Partnering to provide students with industry exposure.' }]} />
            <FeatureCard icon={<TrendingUp size={16} />} color="#7C3AED" bg="rgba(124,58,237,0.04)" title="The Vibe Advantage" items={[{ title: 'Bridging Education & Industry:', text: 'Connects academic learning with real-world application.' }, { title: 'Easy Access for SMEs:', text: 'Simplifies the process of finding and onboarding interns.' }, { title: 'Empowering Students:', text: 'Builds confidence, skills, and career readiness.' }, { title: 'Fueling Startups:', text: 'Provides fresh talent to drive innovation and productivity.' }]} />
          </div>
        </Modal>

      </div>
    </>
  );
};

export default Products;