import React from "react";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <motion.div
      className="py-24 px-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Want to take your Business Online
      </h3>
      <h5 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-12">
        Let's talk.
      </h5>
      <motion.a
        href="/contact"
        data-cursor-contact
        className="inline-block relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#ffd00a] flex items-center justify-center text-gray-900 text-xl font-bold transition-transform duration-300 hover:scale-110">
            Contact
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default CTA;
