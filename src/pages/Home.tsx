import { Project } from '../components/Project';

// Add the projects data
const projects = [
  {
    title: "Project One",
    description: "Description of project one goes here.",
    imageUrl: "/project1.jpg", // Make sure this image exists in your public folder
    link: "#"
  },
  {
    title: "Project Two",
    description: "Description of project two goes here.",
    imageUrl: "/project2.jpg", // Make sure this image exists in your public folder
    link: "#"
  }
  // Add more projects as needed
];

export const Home = () => {
  return (
    <>
      <header className="hero">
        <h1 className="hero-title">Tracy Lane</h1>
        <p>Music • Film • Creative Direction</p>
      </header>

      <main>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </main>
    </>
  );
}; 