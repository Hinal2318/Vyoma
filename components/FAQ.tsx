
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-darkNavy group-hover:text-skyBlue transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-mutedSlate"
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-mutedSlate leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { question: "What is Vyoma Learning Systems?", answer: "Vyoma is an EdTech powerhouse building comprehensive learning infrastructure. We don't just provide courses; we create platforms like Nova, Curio, and Vibe to support students from grade 9 through industrial placement." },
    { question: "What products do you offer?", answer: "We offer Nova (foundations for classes 9-10), Curio (science immersive for classes 11-12), and Vibe (industry connection and internships for higher education)." },
    { question: "Who can use the platforms?", answer: "Our platforms are designed for individual students, educational institutions, and corporate partners looking to hire vetted talent." },
    { question: "How does AI enhance learning on your platforms?", answer: "We use AI for personalized learning paths, smart assessments, virtual tutoring, and matching students to the best-fit industry opportunities based on their skill growth." },
    { question: "Can institutions partner with Vyoma?", answer: "Yes! We work with schools and universities to integrate our platforms into their curriculum and offer better outcomes for their students." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-bold text-darkNavy mb-4">Frequently Asked Questions</h2>
        <p className="text-mutedSlate text-lg">Everything you need to know about Vyoma.</p>
      </div>
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-100">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
