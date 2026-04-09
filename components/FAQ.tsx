import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.45 }}
      style={{ borderBottom: "1px solid rgba(26,43,94,0.08)" }}
      className="last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "24px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          gap: 16
        }}
      >
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 18,
            fontWeight: 600,
            color: isOpen ? "#4A6CF7" : "#1a2b5e",
            lineHeight: 1.4
          }}
        >
          {question}
        </span>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ duration: 0.25 }}
          style={{
            color: isOpen ? "#4A6CF7" : "#8a9ab0",
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen
              ? "rgba(74,108,247,0.08)"
              : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: "#5a6a8a",
                lineHeight: 1.75,
                paddingBottom: 24,
                paddingRight: 40
              }}
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Vyoma Learning Systems?",
      answer:
        "Vyoma is an EdTech powerhouse building comprehensive learning infrastructure. We don't just provide courses; we create platforms like Nova, Curio, and Vibe to support students from grade 9 through industrial placement."
    },
    {
      question: "What products do you offer?",
      answer:
        "We offer Nova (foundations for classes 9-10), Curio (science immersive for classes 11-12), and Vibe (industry connection and internships for higher education)."
    },
    {
      question: "Who can use the platforms?",
      answer:
        "Our platforms are designed for individual students, educational institutions, and corporate partners looking to hire vetted talent."
    },
    {
      question: "How does AI enhance learning on your platforms?",
      answer:
        "We use AI for personalized learning paths, smart assessments, virtual tutoring, and matching students to the best-fit industry opportunities based on their skill growth."
    },
    {
      question: "Can institutions partner with Vyoma?",
      answer:
        "Yes! We work with schools and universities to integrate our platforms into their curriculum and offer better outcomes for their students."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 64 }}
      >
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
          Got Questions?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#1a2b5e",
            marginBottom: 12
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            color: "#5a6a8a",
            lineHeight: 1.6
          }}
        >
          Everything you need to know about Vyoma.
        </motion.p>
      </motion.div>

      {/* FAQ Container */}
      <motion.div
        style={{
          background: "#ffffff",
          borderRadius: 32,
          padding: "8px 40px",
          border: "1px solid rgba(26,43,94,0.08)",
          boxShadow: "0 8px 40px rgba(26,43,94,0.07)"
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {/* Accent bar */}
        <div
          style={{
            height: 4,
            width: 56,
            borderRadius: 99,
            background: "linear-gradient(to right, #1a2b5e, #4A6CF7)",
            margin: "28px 0 8px"
          }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQ;