import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase, Zap } from 'lucide-react';

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const stats = [
    { label: 'Learners Empowered', value: 10000, suffix: '+', icon: <Users /> },
    { label: 'Platform Uptime', value: 99, suffix: '%', icon: <Zap /> },
    { label: 'Partner Schools', value: 50, suffix: '+', icon: <Award /> },
    { label: 'Career Outcomes', value: 85, suffix: '%', icon: <Briefcase /> },
  ];

  // Local video file path
  const videoSrc = './images/about-video.mp4';

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-skyBlue font-bold uppercase tracking-widest text-sm mb-4">Infrastructure for Education</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkNavy mb-8 leading-tight">
            More than just courses. We build the <span className="text-deepBlue">future infrastructure</span> of digital learning.
          </h2>
          <p className="text-xl text-mutedSlate mb-8 leading-relaxed">
            Vyoma Learning Systems Pvt. Ltd. is an EdTech company focused on building learning infrastructure, not just digital courses. We blend education, AI, and design to create platforms that support learners at every stage of their journey.
          </p>
          <p className="text-lg text-mutedSlate mb-12">
            Our approach integrates deep cognitive science with cutting-edge technology to ensure that knowledge isn't just consumed—it's mastered.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-deepBlue mb-2">{stat.icon}</div>
                <div className="text-3xl font-heading font-bold text-darkNavy">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-mutedSlate font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5] border-8 border-white group">
            <video 
              src={videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              title="About Vyoma Video"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-[2.25rem]" />
          </div>

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-softOrange/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-skyBlue/20 rounded-full blur-3xl" />
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 -right-12 bg-white p-6 rounded-2xl shadow-2xl hidden md:block z-20 border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Users size={24} />
              </div>
              <div>
                <div className="font-bold text-darkNavy">AI Mentorship</div>
                <div className="text-xs text-mutedSlate">Active on Nova/Curio</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;