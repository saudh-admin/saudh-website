import React from 'react';
import { motion } from 'framer-motion';


const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="32" height="20" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                pathLength: { duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 0.5, ease: "easeInOut" },
              },
            },
            
          }}
          

        />
        <motion.path
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  )
}

export default ToggleButton
