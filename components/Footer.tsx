import React from 'react';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail, Code2 } from 'lucide-react';

// ── Vyoma Palette ─────────────────────────────────────────────────────────────
// --vyoma-navy:    #1a2b5e   --vyoma-blue:    #4A6CF7
// --vyoma-purple:  #7C3AED   --vyoma-orange:  #F97316
// --vyoma-sky:     #0ea5e9   --vyoma-bg:      #f0f4ff
// --vyoma-surface: #ffffff   --vyoma-body:    #5a6a8a
// --vyoma-muted:   #8a9ab0   --vyoma-border:  rgba(26,43,94,0.08)

const Footer: React.FC = () => {
  return (
    <footer className="text-white pt-20 pb-10" style={{ background: '#0d1829' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-4">
            <div className="flex flex-col mb-8 items-start">
              <a
                href="#home"
                className="text-4xl font-heading font-bold text-white tracking-tighter mb-2 transition-colors"
                style={{ color: '#ffffff' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#4A6CF7')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
              >
                VYOMA
              </a>
              <p className="text-sm font-medium tracking-wide" style={{ color: '#8a9ab0' }}>Learning Systems Pvt. Ltd.</p>
            </div>

            <h3 className="text-xl font-heading font-bold mb-4">Vyoma Learning Systems Pvt. Ltd.</h3>
            <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: '#5a6a8a' }}>
              An education ecosystem integrating academics, skills, and industry exposure to shape the future of learning.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                  style={{ background: 'rgba(74,108,247,0.10)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#4A6CF7')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(74,108,247,0.10)')}
                >
                  <Icon size={18} style={{ color: '#8a9ab0' }} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              {[['#vision','Our Vision'],['#products','Ecosystem'],['#faq','FAQs'],['#partners','Partners']].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ color: '#8a9ab0', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#8a9ab0')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              {[['#team','Leadership'],['#about','About Us'],['#','Careers'],['#contact','Contact']].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{ color: '#8a9ab0', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#8a9ab0')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-bold">Get in Touch</h4>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(74,108,247,0.10)' }}
              >
                <Code2 size={16} style={{ color: '#8a9ab0' }} />
              </div>
            </div>

            <div className="space-y-4">
              <div
                className="flex gap-4 p-4 rounded-xl"
                style={{ border: '1px solid rgba(26,43,94,0.25)', background: 'rgba(74,108,247,0.05)' }}
              >
                <div className="mt-1 p-2 rounded-lg shrink-0" style={{ background: 'rgba(74,108,247,0.15)', color: '#4A6CF7' }}>
                  <MapPin size={20} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#5a6a8a' }}>
                  i-Hub, KCG Campus, University Area<br />
                  Ahmedabad – 380015, Gujarat, India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ border: '1px solid rgba(26,43,94,0.25)', background: 'rgba(74,108,247,0.05)' }}
                >
                  <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(74,108,247,0.15)', color: '#4A6CF7' }}>
                    <Phone size={18} />
                  </div>
                  <span className="text-sm" style={{ color: '#5a6a8a' }}>+91 87803 75687</span>
                </div>

                <div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ border: '1px solid rgba(26,43,94,0.25)', background: 'rgba(249,115,22,0.05)' }}
                >
                  <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(249,115,22,0.15)', color: '#F97316' }}>
                    <Mail size={18} />
                  </div>
                  <span className="text-sm" style={{ color: '#5a6a8a' }}>connect@vyoma.learning</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(26,43,94,0.25)' }}
        >
          <p className="text-sm" style={{ color: '#8a9ab0' }}>
            © {new Date().getFullYear()} Vyoma Learning Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map(label => (
              <a
                key={label}
                href="#"
                className="text-xs transition-colors"
                style={{ color: '#8a9ab0' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#8a9ab0')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;