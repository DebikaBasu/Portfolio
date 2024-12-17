import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Sarah Parker
          </motion.h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <FileDown size={16} />
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};