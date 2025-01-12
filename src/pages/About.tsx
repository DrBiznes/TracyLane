import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.main 
        className={`about-page ${isLoaded ? 'loaded' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="about-hero"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-hero-overlay">
            <motion.div 
              className="about-hero-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                ABOUT ME
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="about-text"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <p>
              After working several summers at the Menlo Circus club, I have now began studies as a full time student 
              at the University of Oregon. I am currently studying advertising with a personal interest in music and cinema.
            </p>
          </motion.div>

          <motion.div 
            className="contact-section"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <h2>Contact</h2>
            <div className="contact-links">
              <motion.a 
                href="mailto:contact@tracylane.work" 
                className="contact-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-icons">email</span>
                <span>Email Me</span>
              </motion.a>
              <motion.a 
                href="/Tracy Lane Resume.pdf" 
                className="contact-link" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-icons">description</span>
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="skills-section"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          >
            <h2>Skills & Interests</h2>
            <div className="skills-categories">
              {[
                {
                  title: 'Audio Engineering',
                  icon: 'music_note',
                  skills: [
                    { icon: 'graphic_eq', text: 'Recording & Mixing' },
                    { icon: 'queue_music', text: 'Music Production' },
                    { icon: 'edit', text: 'Creative Directing' }
                  ]
                },
                {
                  title: 'Professional Skills',
                  icon: 'work',
                  skills: [
                    { icon: 'groups', text: 'Team Leadership' },
                    { icon: 'support_agent', text: 'Customer Service' },
                    { icon: 'child_care', text: 'Child Development' }
                  ]
                },
                {
                  title: 'Technical Skills',
                  icon: 'laptop_mac',
                  skills: [
                    { icon: 'piano', text: 'FL Studio' },
                    { icon: 'description', text: 'Google Docs & Office' },
                    { icon: 'theater_comedy', text: 'Acting' }
                  ]
                },
                {
                  title: 'Personal Interests',
                  icon: 'interests',
                  skills: [
                    { icon: 'sports_basketball', text: 'Basketball' },
                    { icon: 'headphones', text: 'Music' },
                    { icon: 'edit_note', text: 'Screenwriting' }
                  ]
                }
              ].map((category, index) => (
                <motion.div 
                  key={category.title}
                  className="skills-category"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <h3>
                    <span className="material-icons">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill.text}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <span className="material-icons">{skill.icon}</span>
                        {skill.text}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}; 