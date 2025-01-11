import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Interests } from './pages/Interests';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div 
          className="background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="overlay"></div>
        </div>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
