import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import { About } from './pages/About';
import { Interests } from './pages/Interests';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import './App.css';
import backgroundImage from './assets/background.jpg';
import { MenuProvider } from './context/MenuContext';
import { projectsData } from './data/projects';

// Separate component to handle location-based effects
function AppContent() {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState<string>(backgroundImage);

  useEffect(() => {
    const background = document.querySelector('.background') as HTMLElement;
    if (background) {
      background.classList.add('transitioning');

      // Check if we're on a project page
      const projectId = location.pathname.match(/\/project\/([^/]+)/)?.[1];
      const project = projectId ? projectsData.projects.find(p => p.id === projectId) : null;

      // Wait for fade out
      setTimeout(() => {
        let newBackground = backgroundImage;
        
        // Set background based on route
        if (project?.backgroundImage) {
          newBackground = project.backgroundImage;
        } else if (location.pathname === '/about') {
          newBackground = 'src/assets/aboutbg.png';
        }

        // Hide background for interests page
        if (location.pathname === '/interests') {
          background.style.display = 'none';
        } else {
          background.style.display = 'block';
          setCurrentBackground(newBackground);
          background.style.backgroundImage = `url(${newBackground})`;
        }
        
        // Remove transitioning class to fade in
        background.classList.remove('transitioning');
      }, 800);
    }
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="background" style={{ backgroundImage: `url(${currentBackground})` }}></div>
      <div className="overlay"></div>
      
      <Header />
      <Menu />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MenuProvider>
        <AppContent />
      </MenuProvider>
    </Router>
  );
}

export default App;
