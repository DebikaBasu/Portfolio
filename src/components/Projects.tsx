import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform built with React and Redux",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 128
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 89
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 156
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 156
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 156
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 156
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://demo.com",
    stars: 156
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 dark:from-purple-500/80 dark:to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-purple-200 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};