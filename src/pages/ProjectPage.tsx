import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './ProjectPage.css';

export const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);
  const projectIndex = projectsData.projects.findIndex(p => p.id === id);
  const nextProject = projectsData.projects[projectIndex + 1];
  const prevProject = projectsData.projects[projectIndex - 1];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="project-page">
      <div 
        className="project-hero"
        style={{ 
          backgroundImage: `url(${project.backgroundImage})`
        }}
      >
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