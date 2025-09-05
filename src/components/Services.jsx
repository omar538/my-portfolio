// src/components/Services.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLaptopCode, FaBullhorn, FaFacebook, FaServer, FaCheck, FaArrowRight, FaChartLine, FaUsers, FaSearch, FaMobileAlt, FaShoppingCart, FaCode, FaDatabase, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  // Color mapping for consistent theming
  const colorMap = {
    blue: { light: '#dbeafe', main: '#3b82f6', hover: '#2563eb' },
    purple: { light: '#e9d5ff', main: '#8b5cf6', hover: '#7c3aed' },
    indigo: { light: '#e0e7ff', main: '#6366f1', hover: '#4f46e5' },
    cyan: { light: '#cffafe', main: '#06b6d4', hover: '#0891b2' }
  };
  
  // Social media links
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/engrumar', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/engr-umar-farooq', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/engrumar', label: 'Instagram' }
  ];
  
  const services = [
    {
      title: 'Website Development',
      icon: <FaLaptopCode />,
      description: 'Creating responsive and modern websites using the latest technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatibility'],
      color: 'from-blue-500 to-blue-700',
      colorName: 'blue',
      hoverColor: 'from-blue-600 to-blue-800',
      detailedDescription: 'I specialize in creating custom websites that are not only visually appealing but also highly functional and optimized for performance. Using modern frameworks like React, I build websites that provide exceptional user experiences across all devices.',
      process: [
        { step: 1, title: 'Discovery', description: 'Understanding your requirements and goals' },
        { step: 2, title: 'Planning', description: 'Creating a detailed project plan and timeline' },
        { step: 3, title: 'Design', description: 'Developing wireframes and visual designs' },
        { step: 4, title: 'Development', description: 'Building the website with clean, efficient code' },
        { step: 5, title: 'Testing', description: 'Thorough testing across devices and browsers' },
        { step: 6, title: 'Launch', description: 'Deploying the website and providing ongoing support' }
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
    },
    {
      title: 'Digital Marketing',
      icon: <FaBullhorn />,
      description: 'Promoting your brand and reaching your target audience effectively.',
      features: ['Brand Strategy', 'Content Marketing', 'Analytics', 'ROI Optimization'],
      color: 'from-purple-500 to-purple-700',
      colorName: 'purple',
      hoverColor: 'from-purple-600 to-purple-800',
      detailedDescription: 'I help businesses grow their online presence through strategic digital marketing campaigns. From social media marketing to content creation, I develop comprehensive strategies that drive engagement and conversions.',
      process: [
        { step: 1, title: 'Research', description: 'Market and competitor analysis' },
        { step: 2, title: 'Strategy', description: 'Developing a tailored marketing plan' },
        { step: 3, title: 'Implementation', description: 'Executing campaigns across channels' },
        { step: 4, title: 'Monitoring', description: 'Tracking performance and metrics' },
        { step: 5, title: 'Optimization', description: 'Refining strategies based on data' }
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'Mailchimp', 'SEMrush']
    },
    {
      title: 'Facebook Ads',
      icon: <FaFacebook />,
      description: 'Managing and optimizing Facebook ad campaigns for maximum ROI.',
      features: ['Audience Targeting', 'A/B Testing', 'Conversion Tracking', 'Budget Optimization'],
      color: 'from-indigo-500 to-indigo-700',
      colorName: 'indigo',
      hoverColor: 'from-indigo-600 to-indigo-800',
      detailedDescription: 'I specialize in creating and managing Facebook ad campaigns that deliver results. With a focus on precise targeting and compelling ad creatives, I help businesses reach their ideal customers and achieve their marketing objectives.',
      process: [
        { step: 1, title: 'Objective Setting', description: 'Defining clear campaign goals' },
        { step: 2, title: 'Audience Research', description: 'Identifying and segmenting target audiences' },
        { step: 3, title: 'Creative Development', description: 'Designing engaging ad creatives' },
        { step: 4, title: 'Campaign Setup', description: 'Configuring campaigns with optimal settings' },
        { step: 5, title: 'Monitoring', description: 'Tracking performance and making adjustments' },
        { step: 6, title: 'Reporting', description: 'Analyzing results and providing insights' }
      ],
      technologies: ['Facebook Ads Manager', 'Facebook Pixel', 'Canva', 'Google Analytics']
    },
    {
      title: 'MERN Stack Development',
      icon: <FaServer />,
      description: 'Building full-stack applications with MongoDB, Express, React, and Node.js.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Real-time Features'],
      color: 'from-cyan-500 to-cyan-700',
      colorName: 'cyan',
      hoverColor: 'from-cyan-600 to-cyan-800',
      detailedDescription: 'I develop robust full-stack applications using the MERN stack. From concept to deployment, I create scalable, efficient, and maintainable web applications that solve real business problems.',
      process: [
        { step: 1, title: 'Requirements Analysis', description: 'Understanding project needs and specifications' },
        { step: 2, title: 'Architecture Design', description: 'Planning the application structure' },
        { step: 3, title: 'Frontend Development', description: 'Building the user interface with React' },
        { step: 4, title: 'Backend Development', description: 'Creating APIs and server logic' },
        { step: 5, title: 'Database Integration', description: 'Setting up MongoDB and data models' },
        { step: 6, title: 'Testing & Deployment', description: 'Quality assurance and production deployment' }
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Socket.io']
    }
  ];

  const serviceIcons = {
    'Website Development': [
      { icon: <FaMobileAlt />, name: 'Responsive' },
      { icon: <FaCode />, name: 'Clean Code' },
      { icon: <FaChartLine />, name: 'Performance' },
      { icon: <FaSearch />, name: 'SEO Friendly' }
    ],
    'Digital Marketing': [
      { icon: <FaUsers />, name: 'Audience Growth' },
      { icon: <FaChartLine />, name: 'Analytics' },
      { icon: <FaBullhorn />, name: 'Brand Awareness' },
      { icon: <FaShoppingCart />, name: 'Conversion' }
    ],
    'Facebook Ads': [
      { icon: <FaUsers />, name: 'Targeting' },
      { icon: <FaChartLine />, name: 'ROI' },
      { icon: <FaBullhorn />, name: 'Reach' },
      { icon: <FaShoppingCart />, name: 'Sales' }
    ],
    'MERN Stack Development': [
      { icon: <FaCode />, name: 'Frontend' },
      { icon: <FaServer />, name: 'Backend' },
      { icon: <FaDatabase />, name: 'Database' },
      { icon: <FaMobileAlt />, name: 'Full Stack' }
    ]
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I offer a range of services to help businesses establish and grow their online presence with cutting-edge technology and strategic marketing.
          </p>
        </motion.div>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.title}
            </motion.button>
          ))}
        </div>
        
        {/* Active Service Display */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={activeService}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Service Image/Icon Section */}
            <div className="lg:w-2/5 bg-gradient-to-br p-8 flex items-center justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
                
                {/* Service Icon */}
                <motion.div 
                  className={`w-32 h-32 rounded-full bg-gradient-to-r ${services[activeService].color} flex items-center justify-center text-white text-5xl relative z-10 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {services[activeService].icon}
                </motion.div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4">
                  {serviceIcons[services[activeService].title]?.[0]?.icon && (
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lg shadow-md"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`bg-gradient-to-r ${services[activeService].color} text-transparent bg-clip-text`}>
                        {serviceIcons[services[activeService].title][0].icon}
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="absolute -bottom-4 -left-4">
                  {serviceIcons[services[activeService].title]?.[1]?.icon && (
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lg shadow-md"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`bg-gradient-to-r ${services[activeService].color} text-transparent bg-clip-text`}>
                        {serviceIcons[services[activeService].title][1].icon}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Service Details Section */}
            <div className="lg:w-3/5 p-8">
              <h3 className="text-2xl font-bold mb-4 text-dark">{services[activeService].title}</h3>
              <p className="text-gray-600 mb-6">{services[activeService].detailedDescription}</p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-dark">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                      whileHover={{ x: 5, backgroundColor: '#f0f9ff' }}
                    >
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Process */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-dark">Process</h4>
                <div className="space-y-3">
                  {services[activeService].process.map((step, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${services[activeService].color} flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0`}>
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-medium text-dark">{step.title}</h5>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-dark">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <motion.button
                className={`px-6 py-3 bg-gradient-to-r ${services[activeService].color} text-white rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Service Cards Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-dark">All Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const colors = colorMap[service.colorName];
              return (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-1 rounded-xl shadow-lg hover-lift cursor-pointer`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveService(index)}
                >
                  <div className="bg-white h-full p-6 rounded-xl flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-4`}>
                      {service.icon}
                    </div>
                    <h4 className="font-bold text-lg text-dark mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mt-auto w-full">
                      <div className="flex justify-center space-x-1 mb-4">
                        {serviceIcons[service.title]?.slice(0, 3).map((icon, idx) => (
                          <div key={idx} className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: colors.light }}>
                            <div style={{ color: colors.main }}>
                              {icon.icon}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-center space-x-3 mb-4">
                        {socialLinks.map((social, idx) => (
                          <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                            style={{ backgroundColor: colors.light }}
                            whileHover={{ scale: 1.1, y: -3, backgroundColor: colors.main }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={social.label}
                          >
                            <div style={{ color: colors.main }}>
                              {social.icon}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                      
                      <motion.button
                        className="text-xs font-medium flex items-center justify-center w-full"
                        style={{ color: colors.main }}
                        whileHover={{ x: 3 }}
                      >
                        View Details
                        <FaArrowRight className="ml-1 text-xs" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;