import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Next.js', icon: '▲' },
];

export const TechStack = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2 bg-purple-600/10 dark:bg-purple-400/10 px-4 py-2 rounded-full"
        >
          <span className="text-xl">{tech.icon}</span>
          <span className="text-gray-800 dark:text-gray-200">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};