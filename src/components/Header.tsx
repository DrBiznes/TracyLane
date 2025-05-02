import { Link } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { isOpen, mode, openMenu, goBack } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only apply the scrolled class if the menu is closed
  const headerClass = `main-header ${isScrolled && !isOpen ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-left">
        <Link to="/" className="logo">TL</Link>
      </div>
      <div className="header-right">
        <button 
          className={`menu-button ${isOpen ? 'open' : ''} ${mode === 'projects' ? 'projects-mode' : ''}`}
          onClick={() => isOpen ? goBack() : openMenu('menu')}
        >
          <span className="material-icons icon-close">close</span>
          <span className="material-icons icon-arrow">arrow_back</span>
          <span className="text-menu">Menu</span>
        </button>
      </div>
    </header>
  );
};