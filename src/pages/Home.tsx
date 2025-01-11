import { Project as ProjectComponent } from '../components/Project';
import { useMenu } from '../context/MenuContext';
import { projectsData, Project } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export const Home = () => {
  const { openMenu } = useMenu();

  useEffect(() => {
    // Any effects you need
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="hero">
          <h1 className="hero-title">Tracy Lane</h1>
          <p className="hero-subtitle">Music • Film • Creative Direction</p>
          <button 
            onClick={() => openMenu('projects')} 
            className="see-work-button"
          >
            All My Work
          </button>
        </header>

        <motion.main 
          className="projects-container"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {projectsData.projects.map((project: Project, index: number) => (
            <ProjectComponent 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              aspectRatio={project.aspectRatio}
              hasNextProject={index < projectsData.projects.length - 1}
              index={index}
            />
          ))}
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}; 