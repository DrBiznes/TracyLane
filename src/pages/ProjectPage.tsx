import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import './ProjectPage.css';
import { useEffect } from 'react';

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);
  const projectIndex = projectsData.projects.findIndex(p => p.id === id);
  const nextProject = projectsData.projects[projectIndex + 1];
  const prevProject = projectsData.projects[projectIndex - 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]); // Re-run when project ID changes

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.article 
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="project-hero"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="project-hero-overlay">
          <motion.div 
            className="project-hero-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="project-type"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="project-details"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className="project-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>{project.body}</p>
        </motion.div>
        
        {project.credits && project.credits.length > 0 && (
          <motion.div 
            className="project-credits"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>Credits</h3>
            {project.credits.map((credit, index) => (
              <motion.div 
                key={index} 
                className="credit-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="credit-role">{credit.role}</div>
                <div className="credit-name">{credit.name}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="project-links-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3>Listen Now</h3>
          <div className="project-platforms">
            {Object.entries(project.links).map(([platform, url], index) => (
              <motion.a 
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {platform === 'appleMusic' ? 'Apple Music' : 
                 platform.charAt(0).toUpperCase() + platform.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.nav 
        className="project-navigation"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {prevProject && (
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/project/${prevProject.id}`} className="nav-link prev">
              <span className="nav-label">Previous Project</span>
              <span className="nav-title">{prevProject.title}</span>
            </Link>
          </motion.div>
        )}
        {nextProject && (
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/project/${nextProject.id}`} className="nav-link next">
              <span className="nav-label">Next Project</span>
              <span className="nav-title">{nextProject.title}</span>
            </Link>
          </motion.div>
        )}
      </motion.nav>
    </motion.article>
  );
}; 