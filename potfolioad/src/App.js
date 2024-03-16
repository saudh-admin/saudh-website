import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Projects from './components/Projects/project';
import Contact from './components/Contact/contact';
import Us from './components/Us/us';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Us />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
