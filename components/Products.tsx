import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Rocket, ChevronRight, ExternalLink, X, Target, Brain, BarChart3, Gamepad2, Microscope, Atom, FlaskConical, Users, Briefcase, TrendingUp } from 'lucide-react';

const Products: React.FC = () => {
  const [showNovaDetails, setShowNovaDetails] = useState(false);
  const [showCurioDetails, setShowCurioDetails] = useState(false);
  const [showVibeDetails, setShowVibeDetails] = useState(false);
  const products = [
    {
      name: 'NOVA',
      grade: 'Classes 9–10',
      description: 'The Future of Learning for Class 9 & 10 🚀 A foundational learning platform with immersive 3D models, interactive quizzes, and deep performance analysis.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      icon: <BookOpen className="text-purple-600" size={32} />,
      accent: 'border-purple-200',
      status: 'development',
      statusText: 'In Development',
      statusColor: 'bg-gray-500',
      link: '#contact',
      hasDetails: true
    },
    {
      name: 'CURIO',
      grade: 'Classes 11–12 Science',
      description: 'Advanced Science Learning for Class 11 & 12 🔬 AI-powered immersive learning platform delivering deep conceptual understanding using 3D visualization, smart assessments, and AI tutoring.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      icon: (
        <img 
          src="./images/logos/curio.png" 
          alt="Curio" 
          className="w-full h-full object-contain"
        />
      ),
      accent: 'border-blue-200',
      status: 'live',
      statusText: 'Live',
      statusColor: 'bg-green-500',
      link: 'https://curioteach.com/',
      isExternal: true,
      hasDetails: true
    },
    {
      name: 'VIBE',
      grade: 'Industry Connect',
      description: 'Connecting Students and Startups Through Internships 💼 Bridges the gap between students and industry, connecting learners with SMEs and startups for real‑world experience.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      icon: <Rocket className="text-orange-600" size={32} />,
      accent: 'border-orange-200',
      status: 'development',
      statusText: 'In Development',
      statusColor: 'bg-gray-500',
      link: '#contact',
      hasDetails: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-darkNavy mb-4 md:mb-6">The Vyoma Ecosystem</h2>
        <p className="text-lg md:text-xl text-mutedSlate max-w-2xl mx-auto">
          From school foundations to industrial readiness, our suite of platforms covers the entire learning lifecycle.
        </p>
      </div>

      <div className="product-grid grid lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`product-card group relative h-full rounded-[2.5rem] border ${product.accent} p-8 overflow-hidden transition-all duration-500`}
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
              
              <div className="flex gap-3">
                <motion.a 
                  href={product.hasDetails ? '#' : product.link}
                  target={product.isExternal && !product.hasDetails ? "_blank" : "_self"}
                  rel={product.isExternal && !product.hasDetails ? "noopener noreferrer" : undefined}
                  onClick={product.hasDetails ? (e) => { 
                    e.preventDefault(); 
                    if (product.name === 'NOVA') setShowNovaDetails(true);
                    if (product.name === 'CURIO') setShowCurioDetails(true);
                    if (product.name === 'VIBE') setShowVibeDetails(true);
                  } : undefined}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 font-bold text-darkNavy group-hover:text-skyBlue transition-colors cursor-pointer ${
                    product.status === 'development' ? 'opacity-75' : ''
                  }`}
                >
                  {product.hasDetails ? 'Learn More' : product.status === 'live' ? 'Visit Platform' : 'Learn More'}
                  <ChevronRight size={20} />
                </motion.a>
                
                {product.isExternal && product.hasDetails && (
                  <motion.a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 font-bold text-darkNavy group-hover:text-skyBlue transition-colors"
                  >
                    Visit Platform
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nova Details Modal */}
      <AnimatePresence>
        {showNovaDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001] flex items-start justify-center p-4 py-8 overflow-y-auto"
            onClick={() => setShowNovaDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content bg-white rounded-3xl max-w-4xl w-full my-8 modal-scroll p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowNovaDetails(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <div className="modal-header flex items-center gap-4 mb-4">
                  <div className="modal-icon w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <BookOpen className="text-purple-600" size={32} />
                  </div>
                  <div>
                    <h2 className="modal-title text-4xl font-heading font-bold text-gray-900">NOVA</h2>
                    <p className="modal-subtitle text-purple-600 font-semibold">The Future of Learning for Class 9 & 10 🚀</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Introduction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nova is a foundational learning platform designed exclusively for Class 9 and 10 students. 
                    It combines immersive 3D models, interactive quizzes, and deep performance analysis to make 
                    complex concepts simple, engaging, and future‑ready.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="text-purple-600" size={24} />
                      Why Nova?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Conceptual Clarity:</p>
                          <p className="text-gray-600">Visualize tough topics with interactive 3D models that bring textbooks to life.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Curiosity Driven:</p>
                          <p className="text-gray-600">Explore beyond rote learning with simulations that spark curiosity and deeper understanding.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Academic Readiness:</p>
                          <p className="text-gray-600">Strengthen foundations for board exams and beyond with structured, adaptive learning.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Performance Insights:</p>
                          <p className="text-gray-600">Detailed analysis helps students track progress, identify gaps, and improve effectively.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Brain className="text-purple-600" size={24} />
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Immersive 3D Models:</p>
                          <p className="text-gray-600">Physics, Chemistry, Biology, and Math concepts explained visually.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Interactive Quizzes:</p>
                          <p className="text-gray-600">Test knowledge instantly with gamified assessments.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Smart Analytics:</p>
                          <p className="text-gray-600">Personalized reports that highlight strengths and areas for improvement.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Engaging Interface:</p>
                          <p className="text-gray-600">A modern, student‑friendly design that makes learning enjoyable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Gamepad2 className="text-purple-600" size={24} />
                      Who Is It For?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Students (Class 9 & 10):</p>
                          <p className="text-gray-600">Build strong foundations and prepare for exams with confidence.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Teachers:</p>
                          <p className="text-gray-600">Use Nova as a teaching aid to explain complex concepts visually.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Parents:</p>
                          <p className="text-gray-600">Ensure your child learns effectively with measurable outcomes.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="text-purple-600" size={24} />
                      Advantages
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">From Foundations to Futures:</p>
                          <p className="text-gray-600">Covers the entire learning journey from school readiness to career pathways.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Interactive & Visual:</p>
                          <p className="text-gray-600">Moves beyond traditional learning with immersive experiences.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Data‑Driven Growth:</p>
                          <p className="text-gray-600">Every quiz and activity feeds into smart analytics for continuous improvement.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curio Details Modal */}
      <AnimatePresence>
        {showCurioDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001] flex items-start justify-center p-4 py-8 overflow-y-auto"
            onClick={() => setShowCurioDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full my-8 modal-scroll p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCurioDetails(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center p-2">
                    <img 
                      src="./images/logos/curio.png" 
                      alt="Curio" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-gray-900">CURIO</h2>
                    <p className="text-blue-600 font-semibold">Advanced Science Learning for Class 11 & 12 🔬</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Introduction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Curio is a specialized learning platform crafted for Class 11 and 12 science students. 
                    It blends immersive 3D models, interactive quizzes, and in‑depth performance analysis to simplify complex 
                    scientific concepts and prepare learners for competitive exams and higher studies.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="text-blue-600" size={24} />
                      Why Curio?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Conceptual Depth:</p>
                          <p className="text-gray-600">Break down advanced Physics, Chemistry, Biology, and Math topics with clear, visual explanations.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Curiosity Unleashed:</p>
                          <p className="text-gray-600">Explore science beyond textbooks through interactive 3D simulations and experiments.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Exam Readiness:</p>
                          <p className="text-gray-600">Strengthen preparation for board exams, NEET, JEE, and other competitive tests.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Analytical Insights:</p>
                          <p className="text-gray-600">Smart reports highlight strengths, weaknesses, and progress for targeted improvement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Microscope className="text-blue-600" size={24} />
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Immersive 3D Science Models:</p>
                          <p className="text-gray-600">Visualize molecules, reactions, anatomy, and physics phenomena in detail.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Interactive Quizzes:</p>
                          <p className="text-gray-600">Reinforce learning with adaptive assessments aligned to exam patterns.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Performance Analytics:</p>
                          <p className="text-gray-600">Track readiness with detailed dashboards and personalized recommendations.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Engaging Interface:</p>
                          <p className="text-gray-600">A sleek, student‑friendly design that makes advanced science approachable.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Atom className="text-blue-600" size={24} />
                      Who Is It For?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Students (Class 11 & 12 Science):</p>
                          <p className="text-gray-600">Build mastery in core subjects and prepare for competitive exams.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Teachers:</p>
                          <p className="text-gray-600">Use Curio as a teaching aid to explain advanced concepts visually.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Parents:</p>
                          <p className="text-gray-600">Ensure effective learning outcomes with measurable progress tracking.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FlaskConical className="text-blue-600" size={24} />
                      The Curio Advantage
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">From Concepts to Careers:</p>
                          <p className="text-gray-600">Bridges school learning with competitive exam readiness.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Immersive & Interactive:</p>
                          <p className="text-gray-600">Moves beyond rote memorization with hands‑on 3D experiences.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Data‑Driven Success:</p>
                          <p className="text-gray-600">Every quiz and activity feeds into analytics for smarter preparation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subscription Plans Section */}
                <div className="mb-8">
                  <div className="bg-blue-600 rounded-t-2xl p-4 text-center">
                    <h3 className="text-2xl font-bold text-white">SUBSCRIPTION PLAN</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-b-2xl">
                    {/* Basic Plan */}
                    <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-lg">
                      <div className="bg-orange-500 text-white text-center py-3">
                        <h4 className="font-bold text-lg">BASIC</h4>
                      </div>
                      <div className="bg-blue-600 text-white p-4">
                        <div className="bg-orange-500 inline-block px-4 py-2 rounded-lg mb-4">
                          <span className="text-2xl font-bold">Rs.69</span>
                          <span className="text-sm">/Month</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>3D/AR Models</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Topic Quiz</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Basic Analysis</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Technical Support</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Standard Plan */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <div className="bg-orange-500 text-white text-center py-3">
                        <h4 className="font-bold text-lg">STANDARD</h4>
                      </div>
                      <div className="bg-blue-600 text-white p-4">
                        <div className="bg-orange-500 inline-block px-4 py-2 rounded-lg mb-4">
                          <span className="text-2xl font-bold">Rs.149</span>
                          <span className="text-sm">/Month</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>3D/AR Models</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Topic Quiz</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Test Quiz</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>AI Chat Bot</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Student Analysis Dashboard</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Technical Support</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <div className="bg-orange-500 text-white text-center py-3">
                        <h4 className="font-bold text-lg">PRO</h4>
                      </div>
                      <div className="bg-blue-600 text-white p-4">
                        <div className="bg-orange-500 inline-block px-4 py-2 rounded-lg mb-4">
                          <span className="text-2xl font-bold">Rs.299</span>
                          <span className="text-sm">/Month</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>3D/AR Models</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Topic/Test Quiz</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>AI Voice Assistant</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>AI Chat Bot</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Advance Analysis Student Dashboard</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span>Technical Support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vibe Details Modal */}
      <AnimatePresence>
        {showVibeDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001] flex items-start justify-center p-4 py-8 overflow-y-auto"
            onClick={() => setShowVibeDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full my-8 modal-scroll p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVibeDetails(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Rocket className="text-orange-600" size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-bold text-gray-900">VIBE</h2>
                    <p className="text-orange-600 font-semibold">Connecting Students and Startups Through Internships 💼</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Introduction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vibe is an internship provider platform designed to bridge the gap between students and the industry. 
                    It connects Class 11, 12, and beyond learners with SMEs and startups, offering real‑world experience 
                    while giving businesses access to fresh talent quickly and efficiently.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="text-orange-600" size={24} />
                      Why Vibe?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">For Students:</p>
                          <p className="text-gray-600">Gain hands‑on exposure, build skills, and prepare for future careers.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">For Industry:</p>
                          <p className="text-gray-600">Access a pool of motivated interns to support growth and innovation.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">For Startups & SMEs:</p>
                          <p className="text-gray-600">Simplify hiring with a platform that matches interns to your needs.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">For Education:</p>
                          <p className="text-gray-600">Extend learning beyond classrooms into practical, industry‑ready experiences.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="text-orange-600" size={24} />
                      Key Features
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Internship Matching:</p>
                          <p className="text-gray-600">Smart algorithms connect students with relevant opportunities in SMEs and startups.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Skill Development:</p>
                          <p className="text-gray-600">Students gain practical knowledge aligned with their academic background.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Industry Access:</p>
                          <p className="text-gray-600">Businesses can easily post, manage, and select interns.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Analytics & Tracking:</p>
                          <p className="text-gray-600">Monitor student performance and internship outcomes with detailed insights.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="text-orange-600" size={24} />
                      Who Is It For?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Students:</p>
                          <p className="text-gray-600">Looking to gain practical experience and boost employability.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Startups & SMEs:</p>
                          <p className="text-gray-600">Seeking interns to support projects, innovation, and growth.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Educational Institutions:</p>
                          <p className="text-gray-600">Partnering to provide students with industry exposure.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="text-orange-600" size={24} />
                      The Vibe Advantage
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Bridging Education & Industry:</p>
                          <p className="text-gray-600">Connects academic learning with real‑world application.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Easy Access for SMEs:</p>
                          <p className="text-gray-600">Simplifies the process of finding and onboarding interns.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Empowering Students:</p>
                          <p className="text-gray-600">Builds confidence, skills, and career readiness.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-gray-900">Fueling Startups:</p>
                          <p className="text-gray-600">Provides fresh talent to drive innovation and productivity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;