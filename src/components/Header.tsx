import { useEffect, useState } from 'react';
import { Menu } from './Menu';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <a href="/" className="logo">Tracy Lane</a>
        </div>
        <div className="header-right">
          <button className="menu-button" onClick={() => setIsMenuOpen(true)}>Menu</button>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}; 