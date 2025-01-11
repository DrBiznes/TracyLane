import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
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
      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.137-1.564-.14-.05-.002-.1-.005-.15-.005H5.988c-.107.003-.215.005-.322.012-.707.041-1.397.152-2.062.373-1.62.537-2.815 1.607-3.476 3.17-.147.34-.25.698-.333 1.063-.1.44-.155.893-.18 1.352-.013.232-.02.465-.022.697v11.544c.006.497.037.992.095 1.484.122 1.007.456 1.95 1.016 2.794.735 1.106 1.754 1.865 2.99 2.298.593.207 1.212.337 1.84.395.425.04.853.06 1.28.064h12.022c.335-.004.67-.016 1.002-.048l.38-.043c.196-.025.393-.055.588-.094 1.388-.282 2.543-1.045 3.39-2.162.8-1.06 1.162-2.274 1.22-3.6.002-.046.003-.093.003-.14V6.124zm-2.021 9.465c-.005.396-.027.79-.09 1.18-.17 1.047-.723 1.87-1.647 2.465-.523.338-1.097.563-1.727.62-.176.016-.354.02-.532.02-1.494-.002-2.987-.004-4.48-.004-2.366 0-4.733-.004-7.1.005-.356.002-.717-.046-1.06-.14-1.04-.285-1.84-.936-2.338-1.91-.325-.64-.48-1.333-.51-2.05-.022-.504-.014-1.01-.014-1.514V6.31c0-.714.022-1.426.155-2.126.254-1.342 1.058-2.293 2.286-2.84.786-.35 1.622-.46 2.47-.423.094.004.188.01.282.01h11.56c.6 0 1.195.062 1.772.24 1.063.33 1.883.966 2.404 1.946.296.557.444 1.157.502 1.784.03.306.036.614.036.92v10.445l-.034.223zm-6.112-5.203c-.977-.483-2.013-.712-3.11-.67-.604.024-1.192.14-1.75.386-.696.308-1.24.794-1.555 1.496-.368.82-.35 1.657.043 2.466.292.607.774 1.043 1.367 1.37.876.482 1.825.665 2.825.607.923-.054 1.776-.35 2.47-1.006.544-.514.858-1.14.897-1.89.053-1.075-.375-1.94-1.187-2.76zm.71 3.968c-.557.667-1.594.885-2.352.732-1.085-.22-1.626-.946-1.913-1.68-.402-1.035-.29-2.055.407-2.765.566-.575 1.295-.806 2.087-.822.71-.013 1.38.164 1.984.56.424.28.745.646.952 1.106.394.885.276 1.874-.33 2.63-.197.244-.43.447-.69.63-.156.108-.333.196-.507.28l.036-.04z"/>
    </svg>
  )
};

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
                className={`platform-link ${platform}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
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