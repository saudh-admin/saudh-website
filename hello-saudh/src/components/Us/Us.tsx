import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';

const Us = () => {
  return (
    <>
      <Navbar />
      <main className="bg-background dark:bg-background pt-[70px]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 pt-16 pb-24">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-foreground dark:text-foreground mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed mb-6">
              At Saudh, we're building the operating system for the physical world. We help malls, restaurants, salons, and retail businesses digitize their customer experience.
            </p>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed">
              From digital catalogues to AI-powered analytics, we're making it easier for businesses to connect, engage, and grow.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Us;
