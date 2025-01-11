import { LinkedInIcon } from './icons/LinkedInIcon';
import { Link } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import projectsData from '../data/projects.json';

export const Menu = () => {
  const { isOpen, mode, closeMenu, switchMode } = useMenu();

  const renderProjects = () => (
    <div className="menu-projects">
      <h2 className="menu-projects-title">Projects</h2>
      <div className="menu-projects-grid">
        {projectsData.projects.map((project) => (
          <Link 
            key={project.id}
            to={`/project/${project.id}`}
            className="menu-project-item"
            onClick={closeMenu}
          >
            <div className="menu-project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const renderMenu = () => (
    <nav className="menu-nav">
      <button 
        className="menu-item"
        onClick={() => switchMode('projects')}
      >
        My Work
      </button>
      <Link to="/interests" className="menu-item" onClick={closeMenu}>
        What I'm Into
      </Link>
      <Link to="/about" className="menu-item" onClick={closeMenu}>
        About Me
      </Link>
      <a 
        href="https://www.linkedin.com/in/tracy-lane-441741256/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="menu-social"
      >
        <LinkedInIcon />
      </a>
    </nav>
  );

  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <div className={`menu-modes-container ${mode}`}>
          {renderMenu()}
          {renderProjects()}
        </div>
      </div>
    </div>
  );
}; 