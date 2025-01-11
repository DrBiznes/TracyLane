interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const Project = ({ title, description, imageUrl, link }: ProjectProps) => {
  return (
    <section className="project-container">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className="project-button">View Project</a>
      </div>
    </section>
  );
}; 