import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';
import FAQ from '../FAQ/FAQ';

const Dev = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-[70px]">
        <motion.section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">AI Enabled Analytics</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">Track, analyze, and optimize every customer interaction with AI-powered insights.</p>
            </motion.div>
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <motion.img src="/AIenabled.webp.jpg" alt="AI enabled Analytics" className="w-full rounded-2xl shadow-2xl" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }} />
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Insights that Drive Growth.</h2>
              <motion.ul className="space-y-4">
                {['Customer Behavior Analysis', 'Sentiment Detection', 'Performance Dashboards', 'Predictive Insights'].map((item, idx) => (
                  <motion.li key={item} className="flex items-start gap-3 text-lg text-gray-700" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}>
                    <span className="text-[#ffd00a] text-2xl">•</span><span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div className="text-lg text-gray-700 leading-relaxed space-y-4" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              <p>Data without insights is just noise. AI-powered analytics transforms customer feedback, behavior patterns, and interactions into actionable strategies.</p>
              <p>Know what your customers love, where they struggle, and what drives them to act — all powered by intelligent analysis that learns and adapts.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div className="py-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <hr className="max-w-xs mx-auto mb-6 border-gray-300" />
          <motion.button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors" whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top!</motion.button>
        </motion.div>

        <motion.div className="py-24 px-4 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Have a project?</h2>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">Let's talk.</h2>
          <motion.a href="/contact" className="inline-block" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="w-32 h-32 rounded-full bg-[#ffd00a] flex items-center justify-center"><span className="text-gray-900 text-xl font-bold">Contact</span></div>
          </motion.a>
        </motion.div>
      </main>
      <FAQ page="analytics" />
      <Footer />
    </>
  );
};

export default Dev;
