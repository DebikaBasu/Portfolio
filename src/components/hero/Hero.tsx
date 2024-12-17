import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TechStack } from './TechStack';
import picofme from '../../../public/picofme_gradient.png';

export const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
            />
            <AnimatedText
              text="Crafting Digital Experiences with Code and Creativity"
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            />
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Frontend Developer specializing in building exceptional digital experiences
              that combine aesthetics with functionality.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-purple-600 dark:bg-purple-500 text-white px-8 py-3 rounded-full"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full"
              >
                Contact Me <Sparkles size={18} />
              </motion.a>
            </div>
            <TechStack />
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20 dark:opacity-40"
                />
                <img
                  // src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  src={picofme}
                  alt="Sarah Parker"
                  className="rounded-full relative z-10 rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Code2 className="text-purple-600 dark:text-purple-400" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  5+ Years of Experience
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};