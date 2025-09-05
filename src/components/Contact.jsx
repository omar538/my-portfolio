// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaUser, FaBuilding, FaGlobe, FaClock, FaArrowRight, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      // Simulate random success/failure for demo purposes
      const isSuccess = Math.random() > 0.2; // 80% success rate
      
      if (isSuccess) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(true);
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitError(false), 5000);
      }
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'engrumarofficial@gmail.com',
      link: 'mailto:engrumarofficial@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+123 456 7890',
      link: 'tel:+1234567890',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/engr-umar-farooq',
      link: 'https://linkedin.com/in/engr-umar-farooq',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const quickContactMethods = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+123 456 7890',
      link: 'https://wa.me/1234567890',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaFacebookMessenger />,
      title: 'Messenger',
      value: 'engrumarofficial',
      link: 'https://m.me/engrumarofficial',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-dark flex items-center">
                <FaUser className="text-primary mr-3" />
                Contact Information
              </h3>
              
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                        target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                        rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-dark mb-4">Quick Contact</h4>
                <div className="grid grid-cols-2 gap-4">
                  {quickContactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white flex flex-col items-center justify-center transition-all duration-300 shadow-md`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-2xl mb-2">
                        {method.icon}
                      </div>
                      <div className="text-sm font-medium">
                        {method.title}
                      </div>
                      <div className="text-xs opacity-80">
                        {method.value}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100 shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <FaClock className="mr-2" />
                  Working Hours
                </h4>
                <p className="text-blue-600 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: By appointment
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-dark flex items-center">
                <FaPaperPlane className="text-primary mr-3" />
                Send Me a Message
              </h3>
              
              {/* Success Message */}
              {submitSuccess && (
                <motion.div 
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle className="text-green-500 text-xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-600 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
              
              {/* Error Message */}
              {submitError && (
                <motion.div 
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaExclamationCircle className="text-red-500 text-xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-red-800">Something Went Wrong</h4>
                    <p className="text-red-600 text-sm">Please try again later or contact me directly via email.</p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-dark flex items-center">
                      <FaUser className="text-gray-400 mr-2 text-sm" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <FaExclamationCircle className="mr-1" /> {errors.name}
                      </motion.p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-dark flex items-center">
                      <FaEnvelope className="text-gray-400 mr-2 text-sm" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1 flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <FaExclamationCircle className="mr-1" /> {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-dark flex items-center">
                    <FaPaperPlane className="text-gray-400 mr-2 text-sm" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-primary'
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <motion.p 
                      className="text-red-500 text-sm mt-1 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <FaExclamationCircle className="mr-1" /> {errors.subject}
                    </motion.p>
                    )}
                  </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-dark flex items-center">
                    <FaPaperPlane className="text-gray-400 mr-2 text-sm" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-primary'
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <motion.p 
                      className="text-red-500 text-sm mt-1 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <FaExclamationCircle className="mr-1" /> {errors.message}
                    </motion.p>
                    )}
                  </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black rounded-lg font-medium text-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="flex items-center">
                        Send Message
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </>
                  )}
                </motion.button>
                
                {/* Alternative Contact Methods */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center mb-4">
                    Prefer other contact methods?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.a
                      href="mailto:engrumarofficial@gmail.com"
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEnvelope className="mr-2" />
                      Email Directly
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/engr-umar-farooq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin className="mr-2" />
                      Connect on LinkedIn
                    </motion.a>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;