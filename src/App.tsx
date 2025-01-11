import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <MenuProvider>
        <div className="app">
          <div 
            className="background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="overlay"></div>
          </div>
          
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
      </MenuProvider>
    </Router>
  );
}

export default App;
