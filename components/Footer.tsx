import React from 'react';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1120] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-8 items-start">
              <a href="#home" className="text-4xl font-heading font-bold text-white tracking-tighter mb-2 hover:text-skyBlue transition-colors">
                VYOMA
              </a>
              <p className="text-sm text-gray-400 font-medium tracking-wide">Learning Systems Pvt. Ltd.</p>
            </div>
            
            <h3 className="text-xl font-heading font-bold mb-4">Vyoma Learning Systems Pvt. Ltd.</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm">
              An education ecosystem integrating academics, skills, and industry exposure to shape the future of learning.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-skyBlue transition-colors group">
                <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-skyBlue transition-colors group">
                <Twitter size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-skyBlue transition-colors group">
                <Instagram size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#vision" className="text-gray-400 hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Ecosystem</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4">
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="flex justify-between items-center mb-8">
               <h4 className="text-lg font-bold">Get in Touch</h4>
               <div className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center">
                  <Code2 size={16} className="text-gray-400" />
               </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/20">
                <div className="mt-1 text-skyBlue shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  i-Hub, KCG Campus, University Area<br />
                  Ahmedabad – 380015, Gujarat, India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/20">
                  <div className="text-skyBlue shrink-0">
                    <Phone size={18} />
                  </div>
                  <span className="text-gray-400 text-sm">+91 87803 75687</span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/20">
                  <div className="text-skyBlue shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-gray-400 text-sm">connect@vyoma.learning</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vyoma Learning Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;