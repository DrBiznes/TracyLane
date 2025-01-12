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
import aboutBackground from './assets/aboutbg.png';
import { MenuProvider } from './context/MenuContext';
import { projectsData } from './data/projects';

// Separate component to handle location-based effects
function AppContent() {
  const location = useLocation();
  const [currentBackground, setCurrentBackground] = useState<string>(backgroundImage);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const background = document.querySelector('.background') as HTMLElement;
    if (background) {
      // Skip transition class on initial load of home page
      if (!(isInitialLoad && location.pathname === '/')) {
        background.classList.add('transitioning');
      }

      // Check if we're on a project page
      const projectId = location.pathname.match(/\/project\/([^/]+)/)?.[1];
      const project = projectId ? projectsData.projects.find(p => p.id === projectId) : null;

      // Wait for fade out (skip delay on initial load)
      const timeoutDuration = isInitialLoad && location.pathname === '/' ? 0 : 800;
      setTimeout(() => {
        let newBackground = backgroundImage;
        
        // Set background based on route
        if (project?.backgroundImage) {
          newBackground = project.backgroundImage;
        } else if (location.pathname === '/about') {
          newBackground = aboutBackground;
        }

        // Special handling for interests page
        if (location.pathname === '/interests') {
          background.classList.add('hidden');
        } else {
          background.classList.remove('hidden');
          setCurrentBackground(newBackground);
        }
        
        // Remove transitioning class to fade in
        background.classList.remove('transitioning');
        
        // Set isInitialLoad to false after first load
        if (isInitialLoad) {
          setIsInitialLoad(false);
        }
      }, timeoutDuration);
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
