import { useEffect } from 'react';
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

// Separate component to handle location-based effects
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const background = document.querySelector('.background') as HTMLElement;
    if (background) {
      background.classList.add('transitioning');

      if (!location.pathname.includes('/project/')) {
        // Wait for fade out
        setTimeout(() => {
          background.style.backgroundImage = `url(${backgroundImage})`;
          // Remove transitioning class to fade in
          background.classList.remove('transitioning');
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="app">
      <div className="background"></div>
      <div className="overlay"></div>
      
      <Header />
      <Menu />
      
      <Routes>
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
