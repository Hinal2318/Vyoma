import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = 'Building the Future of Learning';
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 75 : 120;
    const pauseTime = isDeleting ? 1500 : 3000;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, start typing again after pause
          setTimeout(() => setIsDeleting(false), pauseTime);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);
  
  // Split text to highlight "Future"
  const renderText = () => {
    const text = displayText;
    const futureIndex = text.indexOf('Future');
    
    if (futureIndex !== -1 && futureIndex + 6 <= text.length) {
      const beforeFuture = text.substring(0, futureIndex);
      const futureWord = text.substring(futureIndex, futureIndex + 6);
      const afterFuture = text.substring(futureIndex + 6);
      
      return (
        <>
          {beforeFuture}
          <span className="text-skyBlue">{futureWord}</span>
          {afterFuture}
        </>
      );
    }
    
    return text;
  };
  
  return (
    <span className="inline-block min-h-[1.2em]" style={{ minWidth: '100%' }}>
      <span className="inline-block">
        {renderText()}
        <span className="animate-pulse text-skyBlue ml-1">|</span>
      </span>
    </span>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotateValue = useTransform(scrollY, [0, 500], [0, 15]);

  const curioLogoUrl = './images/logos/curio.png';

  return (
    <div className="hero-section flex items-center overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-skyBlue/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] bg-softOrange/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-deepBlue/5 text-deepBlue font-semibold text-sm mb-6 border border-deepBlue/10"
          >
            Future-Ready Learning Hub
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-darkNavy leading-tight mb-8 text-contrast hero-title">
            <TypewriterText />
          </h1>
          <p className="text-xl text-mutedSlate mb-10 leading-relaxed max-w-lg text-contrast">
            Vyoma Learning Systems Pvt. Ltd. builds intelligent EdTech ecosystems that bridge classrooms and careers through AI and real-world engagements.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-skyBlue hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 group shadow-xl transition-colors text-sm sm:text-base"
            >
              Step into Our World
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
            <motion.a
              href="#vision"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-darkNavy border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <PlayCircle className="text-softOrange" size={18} />
              Witness the future
            </motion.a>
          </div>
        </motion.div>

        <div className="hidden lg:block relative perspective-1000">
          <motion.div
            style={{ y: y1, rotateZ: rotateValue }}
            className="relative w-full aspect-square mx-auto"
          >
            <div className="absolute inset-0 bg-deepBlue rounded-[3.5rem] shadow-2xl transform rotate-3" />
            <div className="absolute inset-3 bg-white/95 rounded-[3rem] shadow-inner flex items-center justify-center overflow-hidden border border-gray-100">
               <div className="absolute inset-0 bg-grid opacity-30" />
               
               <div className="z-20 text-center flex flex-col items-center">
                 <div className="mb-4">
                   <div className="text-xl font-heading font-bold text-deepBlue tracking-tighter">VYOMA</div>
                   <div className="text-[0.6rem] text-darkNavy/60 uppercase tracking-[0.2em] font-bold">Learning Systems Pvt. Ltd.</div>
                 </div>
                 <div className="mt-6">
                   <h3 className="text-darkNavy font-heading font-bold text-4xl mb-1">The</h3>
                   <h3 className="text-darkNavy font-heading font-bold text-4xl mb-2">Vyoma</h3>
                   <h3 className="text-darkNavy font-heading font-bold text-4xl mb-3">Sphere</h3>
                   <div className="h-0.5 w-12 bg-skyBlue mx-auto mb-3" />
                   <p className="text-mutedSlate text-sm font-medium">AI Powered Education</p>
                 </div>
               </div>

               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[80%] h-[80%] border-2 border-dashed border-skyBlue/20 rounded-full"
               >
                 <motion.div 
                   className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500 rounded-3xl shadow-xl flex items-center justify-center text-white font-bold"
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 >
                   NOVA
                 </motion.div>

                 <motion.div 
                   className="absolute top-1/2 -right-10 -translate-y-1/2 w-20 h-20 bg-softOrange rounded-3xl shadow-xl flex items-center justify-center text-white font-bold"
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 >
                   VIBE
                 </motion.div>

                 <motion.div 
                   className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden p-4 border border-gray-100"
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 >
                   <img 
                    src={curioLogoUrl} 
                    alt="CURIO" 
                    className="w-full h-full object-contain" 
                   />
                 </motion.div>
               </motion.div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-36 h-24 bg-white rounded-3xl shadow-2xl p-5 flex flex-col justify-between border border-gray-50 z-30"
            >
              <div className="w-full h-1.5 bg-skyBlue rounded-full" />
              <div className="w-3/4 h-1.5 bg-gray-100 rounded-full" />
              <div className="w-full h-1.5 bg-softOrange rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;