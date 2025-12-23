import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ["95%", "-100%"]);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ["-2%", "100%"]);

  const CATEGORIES = {
    DIGITAL_CATALOGUES: 'Digital Catalogue',
    LOYALTY: 'Loyalty Program',
    AI_ENABLED_ANALYTICS: 'AI Analytics',
    WHATSAPP_AUTOMATION: 'Whatsapp Automation',
    GAMIFICATION: 'Lead Generation',
  };

  const handleCategoryHover = (category: string | null) => {
    setHoveredCategory(category);
  };

  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <div className="main-content">
          {/* Hero Section */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20 md:pb-24 text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-normal text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight tracking-wide px-2"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              We build extraordinary <br className="hidden sm:block" /> digital experiences.
            </motion.h1>

            <div className="heading-content max-w-3xl mx-auto px-4">
              <div className="text-container text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                At Saudh, we're all about action.
                Want more people to subscribe to your brand? Or perhaps your goal is simply to generate more leads for your company's growth?
                What are the specific actions that fuel your products and services?
                What drives more consumers to buy your product, join your list, download your app, or learn about the actions you're targeting?
                Saudh can help.
              </div>
            </div>
          </div>

          {/* Services Heading */}
          <div 
            className="feature-projects py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
            style={{ backgroundImage: 'linear-gradient(135deg, rgb(248, 249, 250), rgb(233, 236, 239))' }}
          >
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin text-gray-900 whitespace-nowrap"
              style={{ x: xRange1 }}
            >
              Services
            </motion.div>
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-thin text-gray-900 whitespace-nowrap"
              style={{ x: xRange2 }}
            >
              We Offer
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="services-home py-12 sm:py-16 md:py-20 lg:py-24 bg-[#ffd00a]">
            <div className="services-container max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 items-start justify-between">
                {/* Service Categories */}
                <div className="service-header flex-1 w-full lg:w-auto">
                  <div className="service-title text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 sm:mb-8">
                    What We Do
                  </div>
                  <div className="service-categories space-y-4 sm:space-y-5 md:space-y-6">
                    <Link to="/Services/Digital-catalogue" className="block no-underline">
                      <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 cursor-pointer hover:text-white transition-colors"
                        animate={hoveredCategory === CATEGORIES.DIGITAL_CATALOGUES ? { x: 20 } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => handleCategoryHover(CATEGORIES.DIGITAL_CATALOGUES)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        {CATEGORIES.DIGITAL_CATALOGUES}
                      </motion.h2>
                    </Link>

                    <Link to="/Services/Loyalty" className="block no-underline">
                      <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 cursor-pointer hover:text-white transition-colors"
                        animate={hoveredCategory === CATEGORIES.LOYALTY ? { x: 20 } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => handleCategoryHover(CATEGORIES.LOYALTY)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        {CATEGORIES.LOYALTY}
                      </motion.h2>
                    </Link>

                    <Link to="/Services/Gamification" className="block no-underline">
                      <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 cursor-pointer hover:text-white transition-colors"
                        animate={hoveredCategory === CATEGORIES.GAMIFICATION ? { x: 20 } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => handleCategoryHover(CATEGORIES.GAMIFICATION)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        {CATEGORIES.GAMIFICATION}
                      </motion.h2>
                    </Link>

                    <Link to="/Services/Analytics" className="block no-underline">
                      <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 cursor-pointer hover:text-white transition-colors"
                        animate={hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS ? { x: 20 } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => handleCategoryHover(CATEGORIES.AI_ENABLED_ANALYTICS)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        {CATEGORIES.AI_ENABLED_ANALYTICS}
                      </motion.h2>
                    </Link>

                    <Link to="/Services/Whatsapp-automation" className="block no-underline">
                      <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 cursor-pointer hover:text-white transition-colors"
                        animate={hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION ? { x: 20 } : { x: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => handleCategoryHover(CATEGORIES.WHATSAPP_AUTOMATION)}
                        onMouseLeave={() => handleCategoryHover(null)}
                      >
                        {CATEGORIES.WHATSAPP_AUTOMATION}
                      </motion.h2>
                    </Link>
                  </div>

                  <motion.a
                    href="/Services"
                    className="service-action mt-12 inline-flex items-center gap-3 text-gray-700 hover:text-[#ffd00a] transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <motion.img
                      src="/right-arrow.png"
                      alt="Right Arrow"
                      className="w-6 h-6"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="font-thin">Explore Our Capabilities</span>
                  </motion.a>
                </div>

                {/* Animated Circles */}
                <motion.div className="relative w-full lg:w-[500px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] hidden lg:flex items-center justify-center">
                  {/* First circle - dark with border */}
                  <motion.div
                    className="absolute w-88 h-88 rounded-full bg-transparent border border-black  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: 'translateX(0px) translateY(0px)' }}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: 0,
                      y: hoveredCategory === CATEGORIES.DIGITAL_CATALOGUES ? -25
                        : hoveredCategory === CATEGORIES.LOYALTY ? -25
                          : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS ? -185
                            : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION ? -185
                              : hoveredCategory === CATEGORIES.GAMIFICATION ? -55
                                : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                  
                  {/* Center circle - colored */}
                  <motion.div
                    className="absolute w-40 h-40 rounded-full bg-transparent border border-gray-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: 'translateX(0px) translateY(0px)' }}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: 0,
                      y: hoveredCategory === CATEGORIES.DIGITAL_CATALOGUES ? -185
                        : hoveredCategory === CATEGORIES.LOYALTY ? -185
                          : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS ? 120
                            : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION ? 5
                              : hoveredCategory === CATEGORIES.GAMIFICATION ? 20
                                : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                  
                  {/* Third circle - light with border */}
                  <motion.div
                    className="absolute w-88 h-88 rounded-full bg-transparent border border-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: 'translateX(0px) translateY(0px)' }}
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: 0,
                      y: hoveredCategory === CATEGORIES.DIGITAL_CATALOGUES ? -185
                        : hoveredCategory === CATEGORIES.LOYALTY ? -185
                          : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS ? 20
                            : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION ? -130
                              : hoveredCategory === CATEGORIES.GAMIFICATION ? -175
                                : 0,
                      scale: hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION ? 0.7 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Top Button */}
          <motion.div
            className="top-button py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <hr className="max-w-xs mx-auto mb-6 border-gray-300" />
            <motion.button
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-thin hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Top!
            </motion.button>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="contact-home py-12 sm:py-16 md:py-20 lg:py-24 px-4 text-center bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-3 sm:mb-4 tracking-wide px-2">Have a project?</h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-wide px-2">Let's talk.</h2>
            <motion.a
              href="/contact"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative inline-flex items-center justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#ffd00a] flex items-center justify-center">
                  <span className="text-gray-900 text-lg sm:text-xl font-thin">Contact</span>
                </div>
              </div>
            </motion.a>
          </motion.div>

          <FAQ page="home" />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
