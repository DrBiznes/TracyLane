import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Interests.css';

export const Interests = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.main
      className="interests-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            className="interests-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What I'm Into
            </motion.h1>
            
            <div className="interests-grid">
              <motion.div className="interest-item" variants={itemVariants}>
                <span className="material-icons">tv</span>
                <h2>The Fall of the House of Usher</h2>
                <p>
                  I've been a fan of nearly everything Mike Flanagan has put up on Netflix. 
                  This latest show of his is amazing!
                </p>
              </motion.div>

              <motion.div className="interest-item" variants={itemVariants}>
                <span className="material-icons">album</span>
                <h2>Utopia</h2>
                <p>
                  Travis Scott has gone more experimental with this new project. It seems he wasn't thinking 
                  about one-upping Astroworld. That being said I very much appreciate the album for what it is. 
                  It's nice to hear his early sound again.
                </p>
              </motion.div>

              <motion.div className="interest-item" variants={itemVariants}>
                <span className="material-icons">movie</span>
                <h2>Oppenheimer</h2>
                <p>
                  If you consider that it has only been three years so far, I would give the hot take that 
                  this might be the best film of the decade so far.
                </p>
              </motion.div>

              <motion.div className="interest-item" variants={itemVariants}>
                <span className="material-icons">headphones</span>
                <h2>Music Production</h2>
                <p>
                  Currently working on new beats and exploring different sound design techniques. 
                  Always excited to experiment with new styles and push creative boundaries.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}; 