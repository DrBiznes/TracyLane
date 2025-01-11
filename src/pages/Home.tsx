import { Project as ProjectComponent } from '../components/Project';
import { useMenu } from '../context/MenuContext';
import { projectsData, Project } from '../data/projects';

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
          All My Work
        </button>
      </header>

      <main className="projects-container">
        {projectsData.projects.map((project: Project, index: number) => (
          <ProjectComponent 
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