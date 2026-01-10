
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card p-10 rounded-3xl h-full flex flex-col items-start transition-all hover:translate-y-[-10px] duration-500 bg-white/90 border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <Globe size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To build an inclusive, technology-driven education ecosystem that nurtures curiosity, deep understanding, and real-world readiness.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card p-10 rounded-3xl h-full flex flex-col items-start transition-all hover:translate-y-[-10px] duration-500 bg-white/90 border border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To design scalable, AI-powered learning platforms that transform how learners understand, apply, and grow through education.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
