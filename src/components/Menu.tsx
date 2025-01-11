import { LinkedInIcon } from './icons/LinkedInIcon';
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu-content">
        <nav className="menu-nav">
          <Link to="/" className="menu-item" onClick={onClose}>My Work</Link>
          <Link to="/interests" className="menu-item" onClick={onClose}>What I'm Into</Link>
          <Link to="/about" className="menu-item" onClick={onClose}>About Me</Link>
          <a 
            href="https://www.linkedin.com/in/tracy-lane-441741256/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="menu-social"
          >
            <LinkedInIcon />
          </a>
        </nav>
      </div>
    </div>
  );
}; 