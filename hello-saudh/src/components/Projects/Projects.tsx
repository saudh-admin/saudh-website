import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';

const Projects = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[70px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-24">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Coming soon...
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
