import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  hasNextProject?: boolean;
  index?: number;
}

export const Project = ({ 
  id,
  title, 
  description, 
  imageUrl, 
  imageAlt,
  aspectRatio = 'square',
  hasNextProject = false,
  index = 0
}: ProjectProps) => {
  const scrollToNextProject = () => {
    const nextProject = document.querySelector(`[data-project-index="${index + 1}"]`);
    if (nextProject) {
      nextProject.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <motion.section 
      className="project-container" 
      id={`project-${id}`}
      data-project-index={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div 
        className={`project-image ${aspectRatio}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="image-wrapper"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
        >
          <img 
            src={imageUrl} 
            alt={imageAlt || title}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="project-content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.4
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.5
          }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="project-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            delay: 0.6
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/project/${id}`} className="project-button">
              View Project
            </Link>
          </motion.div>
          {hasNextProject && (
            <motion.button 
              onClick={scrollToNextProject} 
              className="next-project-button"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <span>Next Project</span>
              <div className="scroll-arrows">
                <motion.span 
                  className="material-icons"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  keyboard_arrow_down
                </motion.span>
                <motion.span 
                  className="material-icons"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                >
                  keyboard_arrow_down
                </motion.span>
              </div>
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}; 