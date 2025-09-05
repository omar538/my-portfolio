// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  FaHandshake, FaChevronDown, FaCode, FaLaptopCode, FaBullhorn, 
  FaBriefcase, FaStar, FaRocket, FaLightbulb, FaYoutube, FaFacebook, 
  FaInstagram, FaGithub, FaLinkedin, FaEnvelope 
} from 'react-icons/fa';

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const skills = [
    { name: 'Website Development', icon: <FaLaptopCode /> },
    { name: 'Digital Marketing', icon: <FaBullhorn /> },
    { name: 'Facebook Ads', icon: <FaBullhorn /> },
    { name: 'MERN Stack Development', icon: <FaCode /> }
  ];
  
  // Social media links
  const socialLinks = [
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@umarcreations3199?si=J1VClKF7ZzEkxXol', color: 'text-red-600' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/share/1CrjM8ziPP/', color: 'text-blue-600' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/umar_ramzan577', color: 'text-pink-600' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/omar538', color: 'text-gray-800' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/engr-umar-farooq', color: 'text-blue-700' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:engrumarofficial@gmail.com', color: 'text-gray-600' }
  ];
  
  // Mouse move effect for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Rotate through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  // Calculate mouse position for interactive elements
  const calculateTransform = (x, y, intensity = 0.01) => {
    const moveX = (x - window.innerWidth / 2) * intensity;
    const moveY = (y - window.innerHeight / 2) * intensity;
    return { x: moveX, y: moveY };
  };
  
  const { x: bgMoveX, y: bgMoveY } = calculateTransform(mousePosition.x, mousePosition.y, 0.005);
  const { x: floatMoveX, y: floatMoveY } = calculateTransform(mousePosition.x, mousePosition.y, 0.02);
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          style={{
            transform: `translate(${bgMoveX}px, ${bgMoveY}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 filter blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${floatMoveX}px, ${floatMoveY}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-52 h-52 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-indigo-400/20 to-pink-400/20 filter blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${-floatMoveX}px, ${-floatMoveY}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        
        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
        
        {/* Interactive Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div 
          className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <span className="text-sm sm:text-base font-medium text-primary flex items-center">
            <FaStar className="mr-1 sm:mr-2 text-yellow-400" />
            Welcome to my portfolio
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engr. Umar
        </motion.h1>
        
        {/* Subheading */}
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 text-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MERN Stack Developer
        </motion.h2>
        
        {/* Skills Carousel */}
        <motion.div 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 h-14 sm:h-16 md:h-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center">
            <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">I specialize in</span>
            <motion.div
              key={currentSkillIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center font-bold text-primary"
            >
              <div className="p-1.5 sm:p-2 rounded-full bg-primary/10 mr-1.5 sm:mr-2">
                {skills[currentSkillIndex].icon}
              </div>
              <span>{skills[currentSkillIndex].name}</span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="max-w-xl sm:max-w-2xl mx-auto text-gray-600 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Passionate about creating innovative web solutions that drive business growth and deliver exceptional user experiences.
        </motion.p>
        
        {/* Social Links */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-white/20 ${social.color} hover:shadow-lg transition-all duration-300`}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <span className="text-lg sm:text-xl">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a 
            href="#contact" 
            className="btn-primary group text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandshake className="group-hover:animate-bounce mr-2" /> 
            Hire Me
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn-outline group text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase className="group-hover:animate-bounce mr-2" /> 
            View Projects
          </motion.a>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm border border-white/20">
            <div className="text-xl sm:text-2xl font-bold text-primary">1+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm border border-white/20">
            <div className="text-xl sm:text-2xl font-bold text-primary">10+</div>
            <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm border border-white/20">
            <div className="text-xl sm:text-2xl font-bold text-primary">25+</div>
            <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm border border-white/20">
            <div className="text-xl sm:text-2xl font-bold text-primary">99%</div>
            <div className="text-xs sm:text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.a 
            href="#about" 
            className="text-primary flex flex-col items-center"
            whileHover={{ y: 5 }}
          >
            <FaChevronDown size={20} className="sm:size-6 animate-bounce" />
            <span className="text-xs mt-1">Scroll Down</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;