import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

// ── Vyoma Palette ─────────────────────────────────────────────────────────────
// --vyoma-navy:    #1a2b5e   --vyoma-blue:    #4A6CF7
// --vyoma-purple:  #7C3AED   --vyoma-orange:  #F97316
// --vyoma-sky:     #0ea5e9   --vyoma-bg:      #f0f4ff
// --vyoma-surface: #ffffff   --vyoma-body:    #5a6a8a
// --vyoma-muted:   #8a9ab0   --vyoma-border:  rgba(26,43,94,0.08)

const Team: React.FC = () => {
  const team = [
    {
      name: 'Jesa Kodiyatar',
      role: 'Founder & CEO',
      image: './images/team/jesa.jpg',
      linkedin: 'https://www.linkedin.com/in/jesa-kodiyatar-512774281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Muskaan Rughvani',
      role: 'Co-Founder & CBO',
      image: './images/team/muskan.jpeg',
      linkedin: 'https://www.linkedin.com/in/muskaan-rughvani-773649297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Jatin Parmar',
      role: 'CTO',
      image: './images/team/jatin.jpg',
      linkedin: 'https://www.linkedin.com/in/jateenparmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Krish Vaghela',
      role: 'Backend Lead',
      image: './images/team/krish.png',
      linkedin: 'https://www.linkedin.com/in/krishvaghela1212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Arman Amaliya',
      role: 'Frontend Lead',
      image: './images/team/arman.jpg',
      linkedin: 'https://www.linkedin.com/in/arman-amreliya-ab90132b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* ── Header row ── */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        style={{ marginBottom: 64 }}
      >
        <div className="text-center md:text-left">
          {/* Eyebrow */}
          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 999,
            background: 'rgba(74,108,247,0.07)',
            color: '#4A6CF7',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            border: '1px solid rgba(74,108,247,0.15)',
            marginBottom: 16,
          }}>
            The People Behind Vyoma
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: '#1a2b5e',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            Meet Our Team
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: '#5a6a8a',
            maxWidth: 480,
            lineHeight: 1.7,
          }}>
            A diverse group of educators, engineers, and visionaries dedicated to transforming learning.
          </p>
        </div>

        {/* CTA button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, #1a2b5e, #4A6CF7)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 12,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(74,108,247,0.28)',
            whiteSpace: 'nowrap',
          }}
        >
          Join Our Mission
        </motion.a>
      </div>

      {/* ── Team grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="group"
            style={{
              background: '#ffffff',
              borderRadius: 20,
              border: '1px solid rgba(26,43,94,0.08)',
              boxShadow: '0 4px 24px rgba(26,43,94,0.07)',
              padding: '32px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.3s, transform 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(74,108,247,0.18)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(26,43,94,0.07)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Circular Photo */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 20,
                border: '3px solid rgba(74,108,247,0.15)',
                boxShadow: '0 4px 16px rgba(74,108,247,0.15)',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Name */}
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: '#1a2b5e',
              textAlign: 'center',
              marginBottom: 6,
              lineHeight: 1.3,
            }}>
              {member.name}
            </h4>

            {/* Role */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              color: '#8a9ab0',
              textAlign: 'center',
              marginBottom: 20,
            }}>
              {member.role}
            </p>

            {/* Divider */}
            <div style={{
              width: '100%',
              height: 1,
              background: 'rgba(26,43,94,0.08)',
              marginBottom: 20,
            }} />

            {/* LinkedIn Button */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 18px',
                borderRadius: 999,
                border: '1.5px solid rgba(74,108,247,0.2)',
                background: 'rgba(74,108,247,0.05)',
                color: '#4A6CF7',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#4A6CF7';
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.borderColor = '#4A6CF7';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(74,108,247,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#4A6CF7';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,108,247,0.2)';
              }}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </motion.div>
        ))}
      </div>
    </div>
    
  );
};

export default Team;