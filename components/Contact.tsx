import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

// ── Vyoma Palette ─────────────────────────────────────────────────────────────
// --vyoma-navy:    #1a2b5e   --vyoma-blue:    #4A6CF7
// --vyoma-purple:  #7C3AED   --vyoma-orange:  #F97316
// --vyoma-bg:      #f0f4ff   --vyoma-surface: #ffffff
// --vyoma-body:    #5a6a8a   --vyoma-muted:   #8a9ab0
// --vyoma-border:  rgba(26,43,94,0.08)

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    background: '#f0f4ff',
    border: `1.5px solid ${focusedField === field ? '#4A6CF7' : 'rgba(26,43,94,0.08)'}`,
    borderRadius: 12,
    padding: '14px 18px',
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#1a2b5e',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focusedField === field ? '0 0 0 4px rgba(74,108,247,0.08)' : 'none',
    resize: 'none' as const,
  });

  const contactItems = [
    {
      icon: <MapPin size={26} />,
      iconBg: 'rgba(74,108,247,0.08)',
      iconColor: '#4A6CF7',
      label: 'Our Office',
      value: 'IHub, Ahmedabad, Gujarat, India',
    },
    {
      icon: <Mail size={26} />,
      iconBg: 'rgba(249,115,22,0.08)',
      iconColor: '#F97316',
      label: 'Email Us',
      value: 'connect@vyoma.learning',
    },
    {
      icon: <Phone size={26} />,
      iconBg: 'rgba(124,58,237,0.08)',
      iconColor: '#7C3AED',
      label: 'Call Us',
      value: '+91 87803 75687',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
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
            marginBottom: 24,
          }}>
            Let's Talk
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 700,
            color: '#1a2b5e',
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            Ready to{' '}
            <span style={{ color: '#4A6CF7' }}>Transform</span>
            {' '}Education with Us?
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            color: '#5a6a8a',
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: 52,
          }}>
            Invite institutions, partners, investors, and learners to connect. Whether you have a question or a partnership proposal, we're ready to talk.
          </p>

          {/* Contact items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {contactItems.map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{
                  width: 64, height: 64,
                  background: item.iconBg,
                  color: item.iconColor,
                  borderRadius: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(26,43,94,0.08)',
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: '#1a2b5e',
                    marginBottom: 4,
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    color: '#5a6a8a',
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          {/* Glow blobs */}
          <div style={{ position: 'absolute', top: -24, right: -24, width: 96, height: 96, background: 'rgba(249,115,22,0.12)', borderRadius: '50%', filter: 'blur(32px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -24, left: -24, width: 96, height: 96, background: 'rgba(74,108,247,0.12)', borderRadius: '50%', filter: 'blur(32px)', pointerEvents: 'none' }} />

          {/* Form card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(26,43,94,0.08)',
            borderRadius: 40,
            padding: '48px',
            boxShadow: '0 24px 64px rgba(26,43,94,0.09)',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Top accent bar */}
            <div style={{
              height: 4, width: 56, borderRadius: 99,
              background: 'linear-gradient(to right, #1a2b5e, #4A6CF7)',
              marginBottom: 32,
            }} />

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

              {/* Name */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a2b5e', marginBottom: 8 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle('name')}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a2b5e', marginBottom: 8 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle('email')}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, color: '#1a2b5e', marginBottom: 8 }}>
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={inputStyle('message')}
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                style={{
                  width: '100%',
                  padding: '18px',
                  borderRadius: 14,
                  border: 'none',
                  cursor: submitted ? 'default' : 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  background: submitted
                    ? '#22c55e'
                    : 'linear-gradient(135deg, #1a2b5e, #4A6CF7)',
                  boxShadow: submitted
                    ? '0 8px 24px rgba(34,197,94,0.3)'
                    : '0 12px 32px rgba(74,108,247,0.28)',
                  transition: 'background 0.3s, box-shadow 0.3s',
                }}
              >
                {submitted ? "Success! We'll be in touch." : <><span>Send Message</span><Send size={18} /></>}
              </motion.button>

            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;