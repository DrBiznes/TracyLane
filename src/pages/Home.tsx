import { Project } from '../components/Project';
import { useMenu } from '../context/MenuContext';
import projectsData from '../data/projects.json';

export const Home = () => {
  const { openMenu } = useMenu();

  return (
    <>
      <header className="hero">
        <h1 className="hero-title">Tracy Lane</h1>
        <p className="hero-subtitle">Music • Film • Creative Direction</p>
        <button 
          onClick={() => openMenu('projects')} 
          className="see-work-button"
        >
          See My Work
        </button>
      </header>

      <main className="projects-container">
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
      </main>
    </>
  );
}; 