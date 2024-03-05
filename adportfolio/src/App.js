import Services from './pages/Services';
import Home from './pages/Home';
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
      </Routes>
    </>
  );
}

export default App;
