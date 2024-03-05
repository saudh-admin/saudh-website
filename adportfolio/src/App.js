import Services from './pages/Services';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
