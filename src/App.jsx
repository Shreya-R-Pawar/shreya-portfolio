import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages/index';
import Skills from './pages/Skills';
import Education from './pages/Education'; 

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen w-full relative">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;