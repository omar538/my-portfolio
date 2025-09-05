// src/components/Testimonials.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Company',
      content: 'Engr. Umar is an exceptional developer. He delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      project: 'E-commerce Platform'
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      content: 'His digital marketing skills helped us increase our online presence significantly. Our engagement rates went up by 40% within just two months of working with him.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2xpZW50JTIwVGVzdGltb25pYWxzfGVufDB8fDB8fHww',
      project: 'Marketing Campaign'
    },
    {
      name: 'Mike Johnson',
      role: 'Startup Founder',
      content: 'Working with Umar was a great experience. He is professional, skilled, and always available to help. Our website has received so many compliments since he redesigned it.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      project: 'Portfolio Website'
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      content: 'Umar has an incredible ability to understand complex requirements and translate them into elegant solutions. His technical expertise combined with his communication skills make him a valuable team member.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      project: 'SaaS Application'
    },
    {
      name: 'David Brown',
      role: 'CTO, FinTech Startup',
      content: 'We hired Umar to develop our MVP and he delivered beyond our expectations. His code is clean, well-documented, and scalable. Highly recommended for any complex project.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      project: 'FinTech Platform'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            What my clients say about my work and collaboration.
          </p>
        </motion.div>
        
        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Mark */}
            <FaQuoteLeft className="text-primary opacity-10 text-6xl absolute top-4 left-4" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'} mr-1 text-xl`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic text-lg mb-6 relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="font-bold text-dark text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-primary text-sm font-medium mt-1">
                    Project: {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1 text-sm`} 
                  />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-primary opacity-20 text-3xl absolute -top-2 -left-2" />
                <p className="text-gray-600 italic relative z-10 text-sm">
                  "{testimonial.content.length > 100 
                    ? `${testimonial.content.substring(0, 100)}...` 
                    : testimonial.content}"
                </p>
              </div>
              
              <p className="text-primary text-xs font-medium mt-3">
                Project: {testimonial.project}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;