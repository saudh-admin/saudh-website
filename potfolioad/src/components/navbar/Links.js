import React from 'react';
import {motion} from 'framer-motion';

const variants={
  open:{
    transition:{
      staggerChildren:0.1,
      
    }
  },
  closed:{
    transition:{
      staggerChildren:0.3,
      staggerDirection:-1,
      
    }
  }
};
const itemvVariants={
  open:{
    y:"0%", opacity:1,
    
  },
  closed:{
    y:50,
    opacity:0,
  }
};

const Links = () => {
  const items=['Services', 'Projects', 'Us', 'Journal', 'Contact'];
  return (
    <motion.div className='links' variants={variants}>
    {items.map((item)=>(
      <motion.a href={`${item}`} key={item} variants={itemvVariants} whileHover={{x: 25}} >   
        {item}
      </motion.a>
    ))}
    </motion.div>
  )
}

export default Links
