interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  link: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  hasNextProject?: boolean;
  index?: number;
}

export const Project = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt,
  link,
  aspectRatio = 'square',
  hasNextProject = false,
  index = 0
}: ProjectProps) => {
  const scrollToNextProject = () => {
    const nextProject = document.querySelector(`[data-project-index="${index + 1}"]`);
    if (nextProject) {
      nextProject.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section 
      className="project-container" 
      id={`project-${title}`}
      data-project-index={index}
    >
      <div className={`project-image ${aspectRatio}`}>
        <div className="image-wrapper">
          <img 
            src={imageUrl} 
            alt={imageAlt || title}
            loading="lazy"
          />
        </div>
      </div>
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-actions">
          <a href={link} className="project-button">
            View Project
          </a>
          {hasNextProject && (
            <button onClick={scrollToNextProject} className="next-project-button">
              <span>Next Project</span>
              <div className="scroll-arrows">
                <span className="material-icons">keyboard_arrow_down</span>
                <span className="material-icons">keyboard_arrow_down</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}; 