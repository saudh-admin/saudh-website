import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor/Cursor';

// Import components (we'll create these)
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Branding from './components/Branding/Branding';
import Us from './components/Us/Us';
import Interface from './components/Interface/Interface';
import Dev from './components/Dev/Dev';
import Digital from './components/Digital/Digital';
import Support from './components/Support/Support';
import Journal from './components/Journal/Journal';
import Loyalty from './components/Loyalty/Loyalty';
import PricingPage from './components/Pricing/PricingPage';

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
          <Route path="/Services/Branding" element={<Branding />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Services/Digital-catalogue" element={<Interface />} />
          <Route path="/Services/Loyalty" element={<Loyalty />} />
          <Route path="/Services/Analytics" element={<Dev />} />
          <Route path="/Services/Whatsapp-automation" element={<Digital />} />
          <Route path="/Services/Gamification" element={<Support />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
