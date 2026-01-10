import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const partners = [
    { name: 'iHub', logo: '/images/partners/ihub.png' },
    { name: 'SSIP Gujarat', logo: '/images/partners/ssip.png' },
    { name: 'GTU Ventures', logo: '/images/partners/Gtu.webp' },
    { name: 'NVIDIA', logo: '/images/partners/nvidia.webp' },
    { name: 'Startup India', logo: '/images/partners/startup.jpeg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-mutedSlate font-semibold text-sm uppercase tracking-[0.2em] mb-12">Trusted By & Partnered With</h3>
      
      <div className="relative overflow-hidden group py-6">
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex items-center gap-16 md:gap-28 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 transition-all duration-500 px-4 opacity-80 hover:opacity-100"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-10 md:h-14 w-auto object-contain max-w-[200px]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const span = document.createElement('span');
                      span.className = 'text-2xl font-bold text-darkNavy';
                      span.innerText = partner.name;
                      target.parentElement.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;