import { Project } from '../components/Project';

const projects = [
  {
    title: "On The Line",
    description: "Music Production & Creative Direction",
    imageUrl: "/projects/OnTheLine.jpg",
    imageAlt: "On The Line Album Cover",
    aspectRatio: "square",
    link: "#"
  },
  {
    title: "Through Space and Time",
    description: "Music Production & Creative Direction", 
    imageUrl: "/projects/ThroughSpace.jpg",
    imageAlt: "Through Space and Time Album Cover",
    aspectRatio: "square",
    link: "#"
  }
] as const;

export const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-container');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="hero">
        <h1 className="hero-title">Tracy Lane</h1>
        <p>Music • Film • Creative Direction</p>
        <button onClick={scrollToProjects} className="scroll-indicator">
          <span>My Work</span>
          <div className="scroll-arrows">
            <span className="material-icons">keyboard_arrow_down</span>
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </button>
      </header>

      <main className="projects-container">
        {projects.map((project, index) => (
          <Project 
            key={project.title} 
            {...project} 
            hasNextProject={index < projects.length - 1}
            index={index}
          />
        ))}
      </main>
    </>
  );
}; 