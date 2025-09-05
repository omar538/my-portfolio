// src/components/Projects.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaFilter, FaCode, FaChartLine, FaMobile, FaShoppingCart, FaGlobe, FaSearch, FaUsers, FaCalendar, FaStar, FaEye, FaCodeBranch, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce website built with MERN stack, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://media.istockphoto.com/id/2160966987/photo/smartphone-with-application-online-shopping-platform-and-shopping-cart-icon-during-sitting-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=ebd86X7bFFRXBfARVU8e52Gc_nPdtjyiqCOg4RQaahM=',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
      stats: { views: '12.5K', stars: 42, forks: 15 },
      date: '2023-06-15',
      duration: '3 months',
      client: 'Fashion Retail Inc.'
    },
    {
      id: 2,
      title: 'Digital Marketing Dashboard',
      description: 'A comprehensive dashboard for tracking digital marketing campaigns with real-time analytics and reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'marketing',
      tags: ['React', 'Charts.js', 'API', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '8.2K', stars: 28, forks: 9 },
      date: '2023-04-22',
      duration: '2 months',
      client: 'Marketing Pro Agency'
    },
    {
      id: 3,
      title: 'Facebook Ads Manager',
      description: 'A tool for managing and optimizing Facebook ad campaigns with advanced targeting and ROI tracking.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'marketing',
      tags: ['React', 'Facebook API', 'Node.js', 'Express'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '10.7K', stars: 35, forks: 12 },
      date: '2023-03-10',
      duration: '1.5 months',
      client: 'Social Boost Co.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website for a professional with modern design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'web',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '15.3K', stars: 56, forks: 21 },
      date: '2023-05-30',
      duration: '1 month',
      client: 'Creative Designer'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration.',
      image: 'https://media.istockphoto.com/id/2232014061/photo/stressed-business-team-facing-a-problem-on-a-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=mRqzs7Ur70GgOfl7_1MF0OkYf2NYTzHCwJSCnTZ3lds=',
      category: 'web',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
      stats: { views: '18.9K', stars: 67, forks: 24 },
      date: '2023-07-18',
      duration: '4 months',
      client: 'Tech Startup Inc.'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking with comprehensive reporting and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'marketing',
      tags: ['React', 'D3.js', 'API Integration', 'Node.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '9.4K', stars: 31, forks: 11 },
      date: '2023-02-05',
      duration: '2.5 months',
      client: 'Digital Agency'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '14.2K', stars: 48, forks: 17 },
      date: '2023-01-20',
      duration: '5 months',
      client: 'Elite Properties'
    },
    {
      id: 8,
      title: 'Learning Management System',
      description: 'An LMS platform with course creation, student management, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVhcm5pbmclMjBNYW5hZ2VtZW50JTIwU3lzdGVtfGVufDB8fDB8fHww',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      stats: { views: '11.7K', stars: 39, forks: 14 },
      date: '2022-11-15',
      duration: '6 months',
      client: 'EduTech Solutions'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaGlobe />, count: projects.length },
    { id: 'web', name: 'Web Development', icon: <FaCode />, count: projects.filter(p => p.category === 'web').length },
    { id: 'marketing', name: 'Digital Marketing', icon: <FaChartLine />, count: projects.filter(p => p.category === 'marketing').length },
  ];

  // Filter projects based on selected category and search term
  useEffect(() => {
    let result = projects;
    
    if (filter !== 'all') {
      result = result.filter(project => project.category === filter);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProjects(result);
  }, [filter, searchTerm]);

  const featuredProjects = projects.filter(project => project.featured);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>
        
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            
            {/* Results Count */}
            <div className="text-gray-600 font-medium">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex p-1 bg-white rounded-lg shadow flex-nowrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                    filter === category.id
                      ? 'bg-primary text-black shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.icon && <span className="mr-2">{category.icon}</span>}
                  {category.name}
                  <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-dark flex items-center justify-center">
              <FaStar className="text-yellow-400 mr-2" />
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover-lift"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <FaStar className="mr-1" />
                      Featured
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2" />
                        <div>
                          <div className="text-xs text-gray-400">Duration</div>
                          <div>{project.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="mr-2" />
                        <div>
                          <div className="text-xs text-gray-400">Client</div>
                          <div>{project.client}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FaEye className="mr-2" />
                        <div>
                          <div className="text-xs text-gray-400">Views</div>
                          <div>{project.stats.views}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-2 text-yellow-400" />
                        <div>
                          <div className="text-xs text-gray-400">Stars</div>
                          <div>{project.stats.stars}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <a 
                        href={project.liveLink} 
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-1" /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-dark">
            {filter === 'all' ? 'All Projects' : categories.find(c => c.id === filter)?.name}
          </h3>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm ? `No projects match "${searchTerm}"` : 'No projects in this category'}
              </p>
              <button 
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg font-medium"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover-lift"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <FaStar className="mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Stats */}
                    <div className="flex justify-between mb-6 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FaEye className="mr-1" />
                        {project.stats.views}
                      </div>
                      <div className="flex items-center">
                        <FaStar className="mr-1 text-yellow-400" />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center">
                        <FaCodeBranch className="mr-1" />
                        {project.stats.forks}
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <a 
                        href={project.liveLink} 
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-1" /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;