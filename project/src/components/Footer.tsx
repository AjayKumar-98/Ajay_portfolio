import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/AjayKumar-98',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/punna-ajay-kumar-119a59239',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <p className="text-gray-300 flex items-center justify-center md:justify-start">
              © 2025 Punna Ajay Kumar. All rights reserved.
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${link.color} transition-colors duration-300`}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <motion.p
            className="text-gray-500 text-xs mt-2"
            whileHover={{ scale: 1.05 }}
          >
            Designed and developed with passion in Hyderabad, India
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;