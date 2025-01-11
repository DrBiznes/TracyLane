import { useEffect, useState } from 'react';
import './Interests.css';

export const Interests = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`interests-page ${isLoaded ? 'loaded' : ''}`}>
      <div className="interests-content">
        <h1>What I'm Into</h1>
        
        <div className="interests-grid">
          <div className="interest-item">
            <span className="material-icons">tv</span>
            <h2>The Fall of the House of Usher</h2>
            <p>
              I've been a fan of nearly everything Mike Flanagan has put up on Netflix. 
              This latest show of his is amazing!
            </p>
          </div>

          <div className="interest-item">
            <span className="material-icons">album</span>
            <h2>Utopia</h2>
            <p>
              Travis Scott has gone more experimental with this new project. It seems he wasn't thinking 
              about one-upping Astroworld. That being said I very much appreciate the album for what it is. 
              It's nice to hear his early sound again.
            </p>
          </div>

          <div className="interest-item">
            <span className="material-icons">movie</span>
            <h2>Oppenheimer</h2>
            <p>
              If you consider that it has only been three years so far, I would give the hot take that 
              this might be the best film of the decade so far.
            </p>
          </div>

          <div className="interest-item">
            <span className="material-icons">headphones</span>
            <h2>Music Production</h2>
            <p>
              Currently working on new beats and exploring different sound design techniques. 
              Always excited to experiment with new styles and push creative boundaries.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}; 