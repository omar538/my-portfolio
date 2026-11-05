// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaBriefcase, FaUser, FaCode, FaChartLine, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const profileImageUrl = "/umar-profile.png";

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Get to know me better - my background, skills, and what drives me as a developer
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="lg:w-2/5 relative reveal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* Image with full cover */}
                <div className="aspect-[2/3] w-full">
                  <img 
                    src={profileImageUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Profile info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                      <FaUser className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">Engr. Umar Farooq</h3>
                      <p className="text-white/80 text-sm sm:text-base">MERN Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-yellow-400/20 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-blue-400/20 backdrop-blur-sm"></div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-dark flex flex-col sm:flex-row items-center">
              <span className="mr-0 sm:mr-3 mb-2 sm:mb-0">Hello, I'm</span>
              <span className="gradient-text">Umar Farooq</span>
            </h3>
            
            <div className="mb-6 sm:mb-8">
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                I am a passionate MERN Stack Developer with expertise in Website Development, Digital Marketing, and Facebook Ads. 
                I have a strong educational background in Computer Science and a keen interest in creating innovative web solutions that drive business growth.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                With over 1 years of experience in web development and digital marketing, I've helped numerous businesses establish their online presence and achieve their digital goals. My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally well.
              </p>
            </div>
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Education Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-primary mr-2 sm:mr-3">
                    <FaGraduationCap className="text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">Education</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-sm">•</span>
                    <div>
                      <p className="font-medium text-sm">BS-CS (GCUF)</p>
                      <p className="text-xs text-gray-500">2019 - 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-sm">•</span>
                    <div>
                      <p className="font-medium text-sm">F.Sc</p>
                      <p className="text-xs text-gray-500">2016 - 2018</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-sm">•</span>
                    <div>
                      <p className="font-medium text-sm">Matric</p>
                      <p className="text-xs text-gray-500">2014 - 2016</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Achievements Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-500/30 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-full bg-green-100 text-green-600 mr-2 sm:mr-3">
                    <FaAward className="text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">Achievements</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1 text-sm">•</span>
                    <p className="text-sm">Dean's List for Academic Excellence</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1 text-sm">•</span>
                    <p className="text-sm">Best Project Award in University</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1 text-sm">•</span>
                    <p className="text-sm">Top 10% in Computer Science</p>
                  </li>
                </ul>
              </div>
              
              {/* Experience Card */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-500/30 transform hover:-translate-y-1">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-full bg-purple-100 text-purple-600 mr-2 sm:mr-3">
                    <FaBriefcase className="text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg">Experience</h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1 text-sm">•</span>
                    <div>
                      <p className="font-medium text-sm">Web Developer</p>
                      <p className="text-xs text-gray-500">1+ years</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2 mt-1 text-sm">•</span>
                    <div>
                      <p className="font-medium text-sm">Digital Marketing</p>
                      <p className="text-xs text-gray-500">1+ years</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 mb-6 sm:mb-8">
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center">
                <FaCode className="text-primary mr-2" />
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-blue-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  JavaScript
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-green-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  React
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-yellow-50 text-yellow-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-yellow-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Node.js
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  MongoDB
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-red-50 text-red-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-red-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Digital Marketing
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:bg-indigo-100 hover:shadow-sm">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Facebook Ads
                </span>
              </div>
            </div>
            
            {/* Personal Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-5 rounded-xl border border-blue-100">
                <div className="p-2 sm:p-3 rounded-full bg-blue-500 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  <FaLightbulb className="text-sm sm:text-base" />
                </div>
                <h5 className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">Innovative</h5>
                <p className="text-xs sm:text-sm text-blue-600">Creative solutions to complex problems</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 sm:p-5 rounded-xl border border-green-100">
                <div className="p-2 sm:p-3 rounded-full bg-green-500 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  <FaChartLine className="text-sm sm:text-base" />
                </div>
                <h5 className="font-semibold text-green-800 mb-1 text-sm sm:text-base">Results-Driven</h5>
                <p className="text-xs sm:text-sm text-green-600">Focused on delivering measurable outcomes</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 sm:p-5 rounded-xl border border-purple-100">
                <div className="p-2 sm:p-3 rounded-full bg-purple-500 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3">
                  <FaUser className="text-sm sm:text-base" />
                </div>
                <h5 className="font-semibold text-purple-800 mb-1 text-sm sm:text-base">Client-Centric</h5>
                <p className="text-xs sm:text-sm text-purple-600">Dedicated to client satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;