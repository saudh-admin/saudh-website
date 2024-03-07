import Services from './pages/Services/services';
import Projects  from './pages/Projects/project';
import Contact from "./pages/Contact/contact";
import Us from  './pages/Us/us';
import Home from './pages/Home/index';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import './App.scss';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });
  console.log(mousePosition);

  useEffect(()=>{

    const mouseMove=e=>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener("mousemove", mouseMove);
    return () => {window.removeEventListener('mousemove', mouseMove)};
  },[]);

  const variants = {
    default:{
      x:mousePosition.x-16,
      y:mousePosition.y-16
    }
  }

  return (
    <>
    <motion.div className='cursor' variants={variants} animate="default"/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Us />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
