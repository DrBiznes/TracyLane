import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import './ProjectPage.css';
import { useEffect } from 'react';

const PlatformIcons = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  ),
  appleMusic: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  )
} as const;

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);
  const projectIndex = projectsData.projects.findIndex(p => p.id === id);
  const nextProject = projectsData.projects[projectIndex + 1];
  const prevProject = projectsData.projects[projectIndex - 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.article 
        key={id}
        className="project-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div 
          className="project-hero"
          variants={contentVariants}
        >
          <div className="project-hero-overlay">
            <motion.div 
              className="project-hero-content"
              variants={contentVariants}
            >
              <motion.h1 variants={contentVariants}>
                {project.title}
              </motion.h1>
              <motion.p 
                className="project-type"
                variants={contentVariants}
              >
                {project.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="project-details"
          variants={contentVariants}
        >
          <motion.div 
            className="project-body"
            variants={contentVariants}
          >
            <p>{project.body}</p>
          </motion.div>
          
          {project.credits && project.credits.length > 0 && (
            <motion.div 
              className="project-credits"
              variants={contentVariants}
            >
              <h3>Credits</h3>
              <div className="credits-list">
                {project.credits.map((credit, index) => (
                  <motion.div 
                    key={index} 
                    className="credit-item"
                    variants={contentVariants}
                  >
                    <div className="credit-role">{credit.role}</div>
                    <div className="credit-name">{credit.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          <motion.div 
            className="project-links-section"
            variants={contentVariants}
          >
            <h3>Links</h3>
            <div className="project-platforms">
              {Object.entries(project.links).map(([platform, url]) => (
                <motion.a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`platform-link ${platform}`}
                  variants={contentVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {PlatformIcons[platform as keyof typeof PlatformIcons]}
                  {platform === 'appleMusic' ? 'Apple Music' : 
                   platform.charAt(0).toUpperCase() + platform.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.nav 
          className="project-navigation"
          variants={contentVariants}
        >
          <div className="nav-links-container">
            {prevProject && (
              <motion.div
                className="nav-item prev-nav"
                variants={contentVariants}
                whileHover={{ x: -5 }}
              >
                <Link to={`/project/${prevProject.id}`} className="nav-link prev">
                  <span className="nav-label">Previous Project</span>
                  <span className="nav-title">{prevProject.title}</span>
                </Link>
              </motion.div>
            )}
            {nextProject && (
              <motion.div
                className="nav-item next-nav"
                variants={contentVariants}
                whileHover={{ x: 5 }}
              >
                <Link to={`/project/${nextProject.id}`} className="nav-link next">
                  <span className="nav-label">Next Project</span>
                  <span className="nav-title">{nextProject.title}</span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.nav>
      </motion.article>
    </AnimatePresence>
  );
}; 