import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';
import FAQ from '../FAQ/FAQ';

const Digital = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[70px]">
        <motion.section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">Whatsapp Business Automation</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">Let stores capture leads, send offers, answer FAQs, and take orders—all through WhatsApp.</p>
            </motion.div>
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <motion.img src="/Whatsapp Automation.webp.jpg" alt="Whatsapp Automation" className="w-full max-w-md rounded-2xl shadow-2xl mx-auto" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }} />
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Conversations that Convert.</h2>
              <motion.ul className="space-y-3 sm:space-y-4">
                {['Automated Customer Support', 'Broadcast Messaging', 'Order Management', 'Lead Qualification'].map((item, idx) => (
                  <motion.li key={item} className="flex items-start gap-3 text-base sm:text-lg text-gray-700" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}>
                    <span className="text-[#ffd00a] text-xl sm:text-2xl">•</span><span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              <p>WhatsApp is where your customers already are — scrolling, messaging, and making decisions. Why not meet them there with automation that feels personal?</p>
              <p>WhatsApp Business Automation lets you communicate at scale without losing the human touch. From sending personalized offers to answering common questions instantly, your business stays connected 24/7.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div className="py-8 sm:py-10 md:py-12 text-center px-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <hr className="max-w-xs mx-auto mb-4 sm:mb-6 border-gray-300" />
          <motion.button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors" whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top!</motion.button>
        </motion.div>

        <motion.div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Have a project?</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 px-2">Let's talk.</h2>
          <motion.a href="/contact" className="inline-block" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#ffd00a] flex items-center justify-center"><span className="text-gray-900 text-lg sm:text-xl font-bold">Contact</span></div>
          </motion.a>
        </motion.div>
      </main>
      <FAQ page="digital" />
      <Footer />
    </>
  );
};

export default Digital;
