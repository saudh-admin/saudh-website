import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';

const Loyalty = () => {
  return (
    <>
      <Navbar />
      <main className="bg-background dark:bg-background pt-[70px]">
        <motion.section className="py-24 px-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-6xl md:text-7xl font-bold text-foreground dark:text-foreground mb-6">Loyalty Program</h1>
              <p className="text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed">Build lasting relationships with your customers through personalized rewards and engagement.</p>
            </motion.div>
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <motion.img src="/loyalty.png" alt="Loyalty Program" className="w-full max-w-md rounded-2xl shadow-2xl mx-auto" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }} />
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="py-24 px-4 bg-muted/50 dark:bg-muted/20" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
              <h2 className="text-4xl font-bold text-foreground dark:text-foreground mb-8">Loyalty that Lasts.</h2>
              <motion.ul className="space-y-4">
                {['Points & Rewards System', 'Tiered Membership', 'Personalized Offers', 'Retention Analytics'].map((item, idx) => (
                  <motion.li key={item} className="flex items-start gap-3 text-lg text-muted-foreground dark:text-muted-foreground" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}>
                    <span className="text-[#ffd00a] dark:text-[#ffd00a] text-2xl">•</span><span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed space-y-4" initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              <p>Acquiring a new customer costs 5x more than retaining an existing one. Loyalty programs turn one-time buyers into repeat customers and brand advocates.</p>
              <p>Reward visits, track points, offer exclusive perks, and keep customers coming back — all through a seamless digital experience.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div className="py-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <hr className="max-w-xs mx-auto mb-6 border-border dark:border-border" />
          <motion.button className="px-8 py-3 bg-foreground dark:bg-foreground text-background dark:text-background rounded-full font-semibold hover:opacity-90 transition-opacity" whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top!</motion.button>
        </motion.div>

        <motion.div className="py-24 px-4 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground dark:text-foreground mb-4">Have a project?</h2>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground dark:text-foreground mb-12">Let's talk.</h2>
          <motion.a href="/contact" className="inline-block" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="w-32 h-32 rounded-full bg-[#ffd00a] flex items-center justify-center"><span className="text-gray-900 text-xl font-bold">Contact</span></div>
          </motion.a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Loyalty;
