import { Project } from '../components/Project';
import { useMenu } from '../context/MenuContext';
import projectsData from '../data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export const Home = () => {
  const { openMenu } = useMenu();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <header className="hero">
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Tracy Lane
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Music • Film • Creative Direction
          </motion.p>
          <motion.button 
            onClick={() => openMenu('projects')} 
            className="see-work-button"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            See My Work
          </motion.button>
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
          {projectsData.projects.map((project, index) => (
            <Project 
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