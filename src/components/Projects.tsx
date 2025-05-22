import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { projects, Project } from '../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects.filter(p => p.featured));
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleShowAll = () => {
    setVisibleProjects(projects);
    setShowAll(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="projects" title="Meus Projetos" className="bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {visibleProjects.map(project => (
          <motion.div key={project.id} variants={cardVariants}>
            <Card 
              hover={true}
              className="h-full flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {!showAll && projects.length > visibleProjects.length && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={handleShowAll}>
            Ver Todos os Projetos
          </Button>
        </motion.div>
      )}

      {/* Modal do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">{selectedProject.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Ver Demonstração
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;