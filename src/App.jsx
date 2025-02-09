import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import the components
import Navbar from './components/navbar.jsx';
// Import the pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
// Import the CSS
import './App.css';

// Create the App component
function App() {
  // Create a state to store the theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // Return the JSX
  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/skills" element={<Skills theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
      </Routes>
    </Router>
  );
}

export default App;