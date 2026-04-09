import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const Team: React.FC = () => {
  const team = [
    {
      name: "Jesa Kodiyatar",
      role: "Founder & CEO",
      image: "./images/team/jesa.jpg",
      linkedin:
        "https://www.linkedin.com/in/jesa-kodiyatar-512774281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Muskaan Rughvani",
      role: "Co-Founder & CBO",
      image: "./images/team/muskan.jpeg",
      linkedin:
        "https://www.linkedin.com/in/muskaan-rughvani-773649297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Jatin Parmar",
      role: "CTO",
      image: "./images/team/jatin.jpg",
      linkedin:
        "https://www.linkedin.com/in/jateenparmar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Krish Vaghela",
      role: "Backend Lead",
      image: "./images/team/krish.png",
      linkedin:
        "https://www.linkedin.com/in/krishvaghela1212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Arman Amaliya",
      role: "Frontend Lead",
      image: "./images/team/arman.jpg",
      linkedin:
        "https://www.linkedin.com/in/arman-amreliya-ab90132b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        style={{ marginBottom: 64 }}
      >
        <div className="text-center md:text-left">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(74,108,247,0.07)",
              color: "#4A6CF7",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              border: "1px solid rgba(74,108,247,0.15)",
              marginBottom: 16
            }}
          >
            The People Behind Vyoma
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#1a2b5e",
              marginBottom: 16,
              lineHeight: 1.2
            }}
          >
            Meet Our Team
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 18,
              color: "#5a6a8a",
              maxWidth: 480,
              lineHeight: 1.7
            }}
          >
            A diverse group of educators, engineers, and visionaries dedicated to transforming learning.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #1a2b5e, #4A6CF7)",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: 12,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            display: "inline-block",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(74,108,247,0.28)",
            whiteSpace: "nowrap"
          }}
        >
          Join Our Mission
        </motion.a>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="group"
            style={{
              background: "#ffffff",
              borderRadius: 20,
              border: "1px solid rgba(26,43,94,0.08)",
              boxShadow: "0 4px 24px rgba(26,43,94,0.07)",
              padding: "32px 20px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "box-shadow 0.3s, transform 0.3s"
            }}
          >

            {/* Image */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: 20,
                border: "3px solid rgba(74,108,247,0.15)",
                boxShadow: "0 4px 16px rgba(74,108,247,0.15)"
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>

            {/* Name */}
            <motion.h4
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#1a2b5e",
                textAlign: "center",
                marginBottom: 6
              }}
            >
              {member.name}
            </motion.h4>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#8a9ab0",
                textAlign: "center",
                marginBottom: 20
              }}
            >
              {member.role}
            </motion.p>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: 1,
                background: "rgba(26,43,94,0.08)",
                marginBottom: 20
              }}
            />

            {/* LinkedIn */}
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 18px",
                borderRadius: 999,
                border: "1.5px solid rgba(74,108,247,0.2)",
                background: "rgba(74,108,247,0.05)",
                color: "#4A6CF7",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                textDecoration: "none"
              }}
            >
              <Linkedin size={14} />
              LinkedIn
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* ══ JOIN TEAM CTA ══ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)',
          borderRadius: 24,
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
          border: '1px solid rgba(74,108,247,0.10)',
          boxShadow: '0 4px 24px rgba(74,108,247,0.07)',
        }}
      >
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              fontWeight: 700,
              color: '#1a2b5e',
              marginBottom: 8,
            }}
          >
            Want to build the future of education?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.18 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: '#5a6a8a',
              margin: 0,
            }}
          >
            We're always looking for passionate people to join our growing team.
          </motion.p>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.26 }}
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#1a2b5e',
            padding: '14px 32px',
            borderRadius: 999,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            border: '1.5px solid rgba(26,43,94,0.18)',
            boxShadow: '0 2px 12px rgba(26,43,94,0.08)',
            whiteSpace: 'nowrap',
          }}
        >
          See Open Roles
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Team;