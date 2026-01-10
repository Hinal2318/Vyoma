import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, ChevronRight, ExternalLink } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'NOVA',
      grade: 'Classes 9–10',
      description: 'Foundational learning platform focused on conceptual clarity, curiosity, and academic readiness through interactive and visual learning.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      icon: <BookOpen className="text-purple-600" size={32} />,
      accent: 'border-purple-200',
      status: 'development',
      statusText: 'In Development',
      statusColor: 'bg-gray-500',
      link: '#contact'
    },
    {
      name: 'CURIO',
      grade: 'Classes 11–12 Science',
      description: 'AI-powered immersive learning platform delivering deep conceptual understanding using 3D visualization, smart assessments, and AI tutoring.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      icon: (
        <img 
          src="/images/logos/curio.png" 
          alt="Curio" 
          className="w-full h-full object-contain"
        />
      ),
      accent: 'border-blue-200',
      status: 'live',
      statusText: 'Live',
      statusColor: 'bg-green-500',
      link: 'https://curioteach.com/',
      isExternal: true
    },
    {
      name: 'VIBE',
      grade: 'Industry Connect',
      description: 'Connects students with internships, industry projects, mentors, and startups, enabling skill-based matching and real-world learning.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      icon: <Rocket className="text-orange-600" size={32} />,
      accent: 'border-orange-200',
      status: 'development',
      statusText: 'In Development',
      statusColor: 'bg-gray-500',
      link: '#contact'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkNavy mb-6">The Vyoma Ecosystem</h2>
        <p className="text-xl text-mutedSlate max-w-2xl mx-auto">
          From school foundations to industrial readiness, our suite of platforms covers the entire learning lifecycle.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`group relative h-full rounded-[2.5rem] border ${product.accent} p-8 overflow-hidden transition-all duration-500`}
          >
            <div className={`absolute inset-0 ${product.lightColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 ${product.lightColor} rounded-2xl flex items-center justify-center`}>
                  {product.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${product.statusColor} uppercase tracking-wide`}>
                  {product.statusText}
                </div>
              </div>
              
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${product.color} mb-4 uppercase tracking-widest`}>
                {product.grade}
              </div>
              <h3 className="text-3xl font-heading font-bold text-darkNavy mb-6">{product.name}</h3>
              <p className="text-mutedSlate leading-relaxed text-lg mb-8 flex-grow">
                {product.description}
              </p>
              
              <motion.a 
                href={product.link}
                target={product.isExternal ? "_blank" : "_self"}
                rel={product.isExternal ? "noopener noreferrer" : undefined}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 font-bold text-darkNavy group-hover:text-skyBlue transition-colors ${
                  product.status === 'development' ? 'opacity-75' : ''
                }`}
              >
                {product.status === 'live' ? 'Visit Platform' : 'Learn More'}
                {product.isExternal ? <ExternalLink size={20} /> : <ChevronRight size={20} />}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;