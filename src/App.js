import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'; // <-- 1. IMPORT IT
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills /> {/* <-- 2. ADD IT HERE */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
