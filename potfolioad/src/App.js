import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Services from './components/Services/services';
import Projects from './components/Projects/project';
import Contact from './components/Contact/contact';
import Branding from './components/Branding/branding';
import Us from './components/Us/us';
import Interface from './components/Interface/interface';
import Dev from './components/Dev/dev';
import Digital from './components/Digital/digital';
import Support from './components/Support/support';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/us" element={<Us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branding" element={<Branding/>} />
          <Route path="/interface-design" element={<Interface />} />
          <Route path="/development" element={<Dev />} />
          <Route path="/digital-marketing" element={<Digital />} />
          <Route path="/ongoing-support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
