import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Frontend Developer',
      description: 'Specialized in React, JavaScript, and modern web technologies'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Project Experience',
      description: 'Successfully delivered multiple full-stack applications'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Technical Skills',
      description: 'Proficient in React, Django, MySQL, and more'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Download my resume to learn more about my experience and qualifications
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mr-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{highlight.title}</h3>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-block p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
            >
              <FileText className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to learn more about my experience?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download my comprehensive resume to see my full work history, education, 
              certifications, and detailed project descriptions.
            </p>

            <motion.a
              href="/AjayKumarCV.docx"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />
              <Download className="mr-3" size={20} />
              <span className="relative z-10">Download Resume</span>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-500 mt-4"
            >
              PDF format • Updated January 2025
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;