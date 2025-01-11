import { useParams, Link } from 'react-router-dom';
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
    const background = document.querySelector('.background') as HTMLElement;
    if (background && project) {
      // Preload the image
      const img = new Image();
      background.classList.add('transitioning');

      img.onload = () => {
        background.style.backgroundImage = `url(${project.backgroundImage})`;
        // Short delay to ensure smooth transition
        setTimeout(() => {
          background.classList.remove('transitioning');
        }, 50);
      };

      img.src = project.backgroundImage;
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="project-page">
      <div className="project-hero">
        <div className="project-hero-overlay">
          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p className="project-type">{project.description}</p>
          </div>
        </div>
      </div>
      
      <div className="project-details">
        <div className="project-body">
          <p>{project.body}</p>
        </div>
        
        {project.credits && project.credits.length > 0 && (
          <div className="project-credits">
            <h3>Credits</h3>
            {project.credits.map((credit, index) => (
              <div key={index} className="credit-item">
                <div className="credit-role">{credit.role}</div>
                <div className="credit-name">{credit.name}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="project-links-section">
          <h3>Listen Now</h3>
          <div className="project-platforms">
            {Object.entries(project.links).map(([platform, url]) => (
              <a 
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link"
              >
                {platform === 'appleMusic' ? 'Apple Music' : 
                 platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="project-navigation">
        {prevProject && (
          <Link to={`/project/${prevProject.id}`} className="nav-link prev">
            <span className="nav-label">Previous Project</span>
            <span className="nav-title">{prevProject.title}</span>
          </Link>
        )}
        {nextProject && (
          <Link to={`/project/${nextProject.id}`} className="nav-link next">
            <span className="nav-label">Next Project</span>
            <span className="nav-title">{nextProject.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}; 