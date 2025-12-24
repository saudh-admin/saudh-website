import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: 'Digital Catalogue', link: '/Services/Digital-catalogue', desc: 'Interactive digital menus and product catalogs' },
    { title: 'Loyalty Program', link: '/Services/Loyalty', desc: 'Build lasting customer relationships' },
    { title: 'Lead Generation', link: '/Services/Gamification', desc: 'Gamified campaigns that engage' },
    { title: 'AI Analytics', link: '/Services/Analytics', desc: 'Data-driven insights for growth' },
    { title: 'WhatsApp Automation', link: '/Services/Whatsapp-automation', desc: 'Scale customer communication' },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-background dark:bg-background pt-[70px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-24">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-foreground dark:text-foreground mb-12"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <Link key={service.title} to={service.link} className="block no-underline">
                <motion.div
                  className="p-8 border border-border dark:border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:border-[#ffd00a] dark:hover:border-[#ffd00a] group bg-card dark:bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-3xl font-bold text-foreground dark:text-foreground mb-4 group-hover:text-[#ffd00a] dark:group-hover:text-[#ffd00a] transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground text-lg">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
