import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-darkNavy mb-8 leading-[1.1]">
            Ready to <span className="text-skyBlue">Transform</span> Education with Us?
          </h2>
          <p className="text-xl text-mutedSlate mb-12 leading-relaxed max-w-xl">
            Invite institutions, partners, investors, and learners to connect. Whether you have a question or a partnership proposal, we're ready to talk.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#EEF2FF] text-[#3B82F6] rounded-[1.25rem] flex items-center justify-center shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <div className="font-bold text-darkNavy text-xl mb-1">Our Office</div>
                <div className="text-mutedSlate text-lg">IHub, Ahmedabad, Gujarat, India</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#FFF7ED] text-[#F97316] rounded-[1.25rem] flex items-center justify-center shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <div className="font-bold text-darkNavy text-xl mb-1">Email Us</div>
                <div className="text-mutedSlate text-lg">connect@vyoma.learning</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F1F5F9] text-[#1E3A8A] rounded-[1.25rem] flex items-center justify-center shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <div className="font-bold text-darkNavy text-xl mb-1">Call Us</div>
                <div className="text-mutedSlate text-lg">+91 87803 75687</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10 border border-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-darkNavy mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border-gray-200 border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-darkNavy mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border-gray-200 border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all"
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-darkNavy mb-2">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-gray-50 border-gray-200 border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-skyBlue/20 focus:border-skyBlue transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className={`w-full py-5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shadow-xl ${submitted ? 'bg-green-500' : 'bg-deepBlue hover:bg-skyBlue'}`}
              >
                {submitted ? (
                  <>Success! We'll be in touch.</>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-softOrange rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-skyBlue rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;