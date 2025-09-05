// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/engr-umar-farooq', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/omar538', label: 'GitHub' },
    { icon: <FaYoutube />, href: 'https://youtube.com/@umarcreations3199?si=J1VClKF7ZzEkxXol', label: 'YouTube' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1CrjM8ziPP/', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/umar_ramzan577', label: 'Instagram' },
    { icon: <FaEnvelope />, href: 'mailto:engrumarofficial@gmail.com', label: 'Email' },
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">Engr. Umar</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              MERN Stack Developer & Digital Marketing Specialist passionate about creating innovative web solutions.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
            >
              <FaArrowUp className="mr-1 sm:mr-2" /> Back to top
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">Facebook Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">MERN Stack Development</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-sm sm:text-base">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-3 sm:mb-0 text-sm sm:text-base">
            &copy; {currentYear} Engr. Umar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Designed with <span className="text-red-500">❤</span> by Engr. Umar Farooq
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;