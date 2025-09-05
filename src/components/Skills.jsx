// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBullhorn, FaFacebook, FaServer, FaStar, FaCode, FaDatabase, FaReact } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90, icon: <FaCode className="text-yellow-500" /> },
    { name: 'React', level: 85, icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', level: 80, icon: <FaServer className="text-green-500" /> },
    { name: 'MongoDB', level: 75, icon: <FaDatabase className="text-green-600" /> },
    { name: 'Express', level: 80, icon: <FaServer className="text-gray-600" /> },
    { name: 'HTML/CSS', level: 95, icon: <FaLaptopCode className="text-orange-500" /> },
  ];

  const professionalSkills = [
    { name: 'Website Development', icon: <FaLaptopCode />, color: 'from-blue-500 to-blue-700' },
    { name: 'Digital Marketing', icon: <FaBullhorn />, color: 'from-purple-500 to-purple-700' },
    { name: 'Facebook Ads', icon: <FaFacebook />, color: 'from-indigo-500 to-indigo-700' },
    { name: 'MERN Stack', icon: <FaServer />, color: 'from-cyan-500 to-cyan-700' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've honed my skills in both technical and professional domains to deliver comprehensive solutions.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-dark">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="card hover-lift reveal"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <span className="mr-3 text-xl">{skill.icon}</span>
                    <span className="font-medium text-lg text-dark">{skill.name}</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < Math.floor(skill.level / 20) ? 'text-yellow-400' : 'text-gray-300'} ml-1`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-dark">Professional Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl shadow-lg hover-lift reveal`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white h-full p-6 rounded-xl flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl mb-4`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-lg text-dark">{skill.name}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Expert level proficiency with real-world project experience
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;