import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-600 to-purple-600' },
    { name: 'Tailwind CSS', level: 88, color: 'from-teal-500 to-blue-500' },
    { name: 'Django', level: 75, color: 'from-green-600 to-emerald-600' },
    { name: 'MySQL', level: 80, color: 'from-blue-700 to-indigo-700' },
    { name: 'Git', level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'REST APIs', level: 82, color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${skill.color}`}
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Badges */}
        <motion.div
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-800 mb-8"
          >
            Additional Technologies
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Flask', 'Vercel', 'GitHub'].map((tech) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;