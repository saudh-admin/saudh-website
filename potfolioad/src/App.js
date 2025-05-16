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
import Journal from './components/Journal/journal';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/us" element={<Us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services/Branding" element={<Branding/>} />
          <Route path="/Services/Interface-design" element={<Interface />} />
          <Route path="/Services/Development" element={<Dev />} />
          <Route path="/Services/Digital-marketing" element={<Digital />} />
          <Route path="/Services/Ongoing-support" element={<Support />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
