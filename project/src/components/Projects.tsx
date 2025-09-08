import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'University Management System',
      description: 'Comprehensive system with multiple dashboards for Vice-Principal and Placement Training Office management. Streamlines academic and administrative operations with secure authentication.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Django'],
      links: [
        { name: 'Vice-Principal Dashboard', url: 'https://vice-principal.vercel.app/' },
        { name: 'Placement Dashboard', url: 'https://placementtrainingofficedashboard.vercel.app/' }
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Attendance Portal',
      description: 'Real-time attendance tracking system with comprehensive data visualization, automated report generation, and intuitive dashboard for monitoring student attendance patterns.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      links: [
        { name: 'View Project', url: '#' }
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Forest Fire Detection System',
      description: 'CNN-based intelligent system for detecting fire and smoke from surveillance footage using computer vision and deep learning techniques for early warning systems.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      links: [
        { name: 'View Project', url: '#' }
      ],
      gradient: 'from-red-500 to-orange-600'
    },
    {
      title: 'NLP Automation Examination System',
      description: 'Intelligent examination system with automatic question generation, smart evaluation algorithms, and comprehensive reporting using natural language processing.',
      tech: ['Python', 'NLP', 'Django', 'Flask', 'SQL'],
      links: [
        { name: 'View Project', url: '#' }
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A showcase of my recent work and technical expertise
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-gray-800 mb-4"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${project.gradient}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="space-y-2">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mr-3 mb-2`}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
          >
            Want to see more of my work?
          </motion.p>
          <motion.a
            href="https://github.com/AjayKumar-98"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github className="mr-2" size={20} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;