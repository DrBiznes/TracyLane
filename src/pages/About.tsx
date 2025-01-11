import { useEffect, useState } from 'react';
import './About.css';

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`about-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="about-hero">
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1>About Me</h1>
            <p className="about-subtitle">Student at University of Oregon</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            After working several summers at the Menlo Circus club, I have now began studies as a full time student 
            at the University of Oregon. I am currently studying advertising with a personal interest in music and cinema.
          </p>
        </div>

        <div className="contact-section">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:Tjlane2301@gmail.com" className="contact-link">
              <span className="material-icons">email</span>
              <span>Email Me</span>
            </a>
            <a href="/Tracy Lane Resume.pdf" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="material-icons">description</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="skills-section">
          <h2>Skills & Interests</h2>
          <div className="skills-categories">
            <div className="skills-category">
              <h3>
                <span className="material-icons">music_note</span>
                Audio Engineering
              </h3>
              <ul className="skills-list">
                <li>
                  <span className="material-icons">graphic_eq</span>
                  Recording & Mixing
                </li>
                <li>
                  <span className="material-icons">queue_music</span>
                  Music Production
                </li>
                <li>
                  <span className="material-icons">edit</span>
                  Creative Directing
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3>
                <span className="material-icons">work</span>
                Professional Skills
              </h3>
              <ul className="skills-list">
                <li>
                  <span className="material-icons">groups</span>
                  Team Leadership
                </li>
                <li>
                  <span className="material-icons">support_agent</span>
                  Customer Service
                </li>
                <li>
                  <span className="material-icons">child_care</span>
                  Child Development
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3>
                <span className="material-icons">laptop_mac</span>
                Technical Skills
              </h3>
              <ul className="skills-list">
                <li>
                  <span className="material-icons">piano</span>
                  FL Studio
                </li>
                <li>
                  <span className="material-icons">description</span>
                  Google Docs & Office
                </li>
                <li>
                  <span className="material-icons">theater_comedy</span>
                  Acting
                </li>
              </ul>
            </div>

            <div className="skills-category">
              <h3>
                <span className="material-icons">interests</span>
                Personal Interests
              </h3>
              <ul className="skills-list">
                <li>
                  <span className="material-icons">sports_basketball</span>
                  Basketball
                </li>
                <li>
                  <span className="material-icons">headphones</span>
                  Music
                </li>
                <li>
                  <span className="material-icons">edit_note</span>
                  Screenwriting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}; 