import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-darkNavy mb-4 md:mb-6">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-mutedSlate max-w-xl mx-auto md:mx-0">
            A diverse group of educators, engineers, and visionaries dedicated to transforming learning.
          </p>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-darkNavy text-white px-8 py-3 rounded-full font-bold inline-block text-center"
        >
          Join Our Mission
        </motion.a>
      </div>

      <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square mb-6 transition-transform duration-500 shadow-xl group-hover:shadow-2xl group-hover:scale-105">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepBlue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-deepBlue hover:bg-skyBlue hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <h4 className="text-xl font-heading font-bold text-darkNavy text-center mb-1">{member.name}</h4>
            <p className="text-mutedSlate text-sm font-medium text-center uppercase tracking-wider">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;