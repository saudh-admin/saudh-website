import "../../App.scss";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";
// import Sliderr from "../Contact/slider";
import Navbar from "../Navbar/navbar";
// import Cursor from "../Cursor/Cursor";

import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import FAQ from "../FAQ/faq";
import { Link } from 'react-router-dom';

const adBgVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const adTitleVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
};



const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const scrollImgRef = useRef(null);
  const minY = initialOffset - window.innerHeight / 2;
  const translateY = Math.max(Math.min(-scrollY * 0.9, 0), -maxScrollY);
  const pageHintRef = useRef(null);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navBtn = document.querySelector(".nav-btn");

    if (nav && navBtn) {
      navBtn.addEventListener("click", () => {
        if (nav.classList.contains("nav-open")) {
          const randomX = Math.random() * window.innerWidth;
          const randomY = Math.random() * window.innerHeight;
          nav.style.setProperty("--nav-close-x", `${randomX}px`);
          nav.style.setProperty("--nav-close-y", `${randomY}px`);

          setTimeout(() => {
            document.body.classList.remove("nav-open");
          }, 1200);
        } else {
          document.body.classList.add("nav-open");
        }
      });
    }
  }, []);
  useEffect(() => {
    const pageHint = pageHintRef.current;
    const adBg = document.querySelector(".ad-bg");
    const adTitle = document.querySelector(".ad-title");

    const updatePageHint = () => {
      if (pageHint) {
        pageHint.classList.add("loaded");
      }
    };

    const handleScroll = () => {
      if (adBg && adTitle && pageHint) {
        const adBgRect = adBg.getBoundingClientRect();
        const adTitleRect = adTitle.getBoundingClientRect();

        if (
          adBgRect.top <= window.innerHeight &&
          adBgRect.bottom >= 0 &&
          adTitleRect.top <= window.innerHeight &&
          adTitleRect.bottom >= 0
        ) {
          pageHint.classList.add("visible");
        } else {
          pageHint.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const checkElementsLoaded = () => {
      if (adBg && adTitle) {
        updatePageHint();
      } else {
        setTimeout(checkElementsLoaded, 100);
      }
    };

    checkElementsLoaded();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const footerElement = footerRef.current;
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight;
        setHideStartLabel(isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [hideStartLabel, setHideStartLabel] = useState(false);
  const footerRef = useRef(null);
  const servicesHomeRef = useRef(null);
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const featureProjectsRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ["95%", "-100%"]);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ["-2%", "100%"]);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef(null);
  const CATEGORIES = {
    // 'MALL_IN_YOUR_POCKET': 'Mall in your pocket',
    'DIGITAL_CATALOUGES': 'Digital Catalogue',
    'LOYALTY': 'Loyalty Program',
    'AI_ENABLED_ANALYTICS': 'AI Analytics',
    'WHATSAPP_AUTOMATION': 'Whatsapp Automation',
    'GAMIFICATION': ' Lead Generation',
  }
  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
    if (category) {
      controls.start({ x: 10, transition: { yoyo: Infinity, duration: 1 } });
    } else {
      controls.stop();
      controls.set({ x: 0 });
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    animateCategories();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimationIndex(0);
    clearInterval(animationInterval.current);
  };

  const animateCategories = () => {
    const categories = [
      // "Branding",
      "Interface Design",
      "Analytics",
      "Digital Marketing",
      "Ongoing Support",
    ];
    let currentIndex = 0;

    const animationLoop = () => {
      const category = categories[currentIndex];
      handleCategoryHover(category);

      currentIndex = (currentIndex + 1) % categories.length;
      animationInterval.current = setTimeout(animationLoop, 3000);
    };

    animationLoop();
  };

  useEffect(() => {
    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollImgElement = scrollImgRef.current;
    if (scrollImgElement) {
      const circleElement = document.querySelector(".home-circle");
      const circleCenter =
        circleElement.offsetTop + circleElement.offsetHeight / 2;
      const maxScroll = circleCenter - window.innerHeight / 2 + 200;
      setInitialOffset(scrollImgElement.offsetTop);
      setMaxScrollY(maxScroll);
    }
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrollImgElement = scrollImgRef.current;
        if (scrollImgElement) {
          setInitialOffset(scrollImgElement.offsetTop - window.innerHeight / 2);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    const homeCircleElement = document.querySelector(".home-circle");
    if (homeCircleElement) {
      observer.observe(homeCircleElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverS = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const serviceHeadinggRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const serviceHeadinggElement = serviceHeadinggRef.current;
    if (serviceHeadinggElement) {
      serviceHeadinggElement.classList.add('service-headingg-curtain');
    }


    setTimeout(() => {
      setShowImage(true);
    }, 100);


    setTimeout(() => {
      setShowBackground(true);
    }, 100);
  }, []);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowImage(true);
        setTimeout(() => {
          setShowBackground(true);
        }, 100);
      }, 100);
    }, 100);
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="main-content">
          <div className="container">
            <motion.h1
              className="ad-title"
              variants={adTitleVariants}
              initial="initial"
              animate="animate"
              when="afterChildren"
            >
              We build extraordinary <br /> digital experiences.
            </motion.h1>

            <div className="heading-content">
              <div className="text-container">
                At Saudh, we're all about action.
                Want more people to subscribe to your brand? Or perhaps your goal is simply to generate more leads for your company's growth?
                What are the specific actions that fuel your products and services?
                What drives more consumers to buy your product, join your list, download your app, or learn about the actions you're targeting?
                Saudh can help.
              </div>
              {/* <div className="learn-content">
                <div className="Big-text">
                  Agarwal Digital has the people, the ideas, and the know-how to
                  get your business where you want it to go.{" "}
                </div>
                <div className="learn-text">
                  <motion.img
                    src="right-arrow.png"
                    alt="Right Arrow"
                    className="arrow-icon"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  Learn more about us
                  <Cursor />
                </div>
                
              </div> */}
            </div>
          </div>
          <div className="feature-projects" ref={featureProjectsRef}>
            <motion.div className="feature-heading" style={{ x: xRange1 }}>
              Services
            </motion.div>
            <motion.div className="feature-heading" style={{ x: xRange2 }}>
              We Offer
            </motion.div>
            {/* <Sliderr /> */}
          </div>
          <div ref={servicesHomeRef} className="services-home">
            <div className="services-container">
              <div className="service-header">
                <div className="service-title">What We Do</div>
                <div className="service-categories">
                  <Link to="/Services/Digital-catalogue" style={{ textDecoration: 'none' }}>
                    <motion.h2
                      style={{ cursor: 'pointer', color: '#000' }}
                      animate={
                        hoveredCategory === CATEGORIES.DIGITAL_CATALOUGES
                          ? { x: 20 }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => handleCategoryHover(CATEGORIES.DIGITAL_CATALOUGES)}
                      onMouseLeave={() => handleCategoryHover(null)}
                    >
                      {CATEGORIES.DIGITAL_CATALOUGES}
                    </motion.h2>
                  </Link>
                  <Link to="/Services/Loyalty" style={{ textDecoration: 'none' }}>
                    <motion.h2
                      style={{ cursor: 'pointer', color: '#000', }}
                      animate={
                        hoveredCategory === CATEGORIES.LOYALTY
                          ? { x: 20 }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => handleCategoryHover(CATEGORIES.LOYALTY)}
                      onMouseLeave={() => handleCategoryHover(null)}
                    >
                      {CATEGORIES.LOYALTY}
                    </motion.h2>
                  </Link>
                  <Link to="/Services/Gamification" style={{ textDecoration: 'none' }}>
                    <motion.h2
                      style={{ cursor: 'pointer', color: '#000' }}
                      animate={
                        hoveredCategory === CATEGORIES.GAMIFICATION
                          ? { x: 20 }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => handleCategoryHover(CATEGORIES.GAMIFICATION)}
                      onMouseLeave={() => handleCategoryHover(null)}
                    >
                      {CATEGORIES.GAMIFICATION}
                    </motion.h2>
                  </Link>
                  <Link to="/Services/Analytics" style={{ textDecoration: 'none' }}>
                    <motion.h2
                      style={{ cursor: 'pointer', color: '#000' }}
                      animate={
                        hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS ? { x: 20 } : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => handleCategoryHover(CATEGORIES.AI_ENABLED_ANALYTICS)}
                      onMouseLeave={() => handleCategoryHover(null)}
                    >
                      {CATEGORIES.AI_ENABLED_ANALYTICS}
                    </motion.h2>
                  </Link>
                  <Link to="/Services/Whatsapp-automation" style={{ textDecoration: 'none' }}>
                    <motion.h2
                      style={{ cursor: 'pointer', color: '#000' }}
                      animate={
                        hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION
                          ? { x: 20 }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      onMouseEnter={() => handleCategoryHover(CATEGORIES.WHATSAPP_AUTOMATION)}
                      onMouseLeave={() => handleCategoryHover(null)}
                    >
                      {CATEGORIES.WHATSAPP_AUTOMATION}
                    </motion.h2>
                  </Link>

                </div>
                <div className="service-action">
                  <motion.img
                    src="right-arrow.png"
                    alt="Right Arrow"
                    className="arrow-icon"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  Explore Our Capabilities
                </div>
              </div>
              <motion.div className="Circle-pattern">
                <motion.div
                  className="shape-circle dark"
                  animate={{
                    x:
                      hoveredCategory === "Branding"
                        ? -175 :
                        hoveredCategory === CATEGORIES.DIGITAL_CATALOUGES
                          ? -175 :
                          hoveredCategory === CATEGORIES.LOYALTY
                            ? -175
                            : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS
                              ? -175
                              : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION
                                ? -175
                                : hoveredCategory === CATEGORIES.GAMIFICATION
                                  ? -185
                                  : -175,
                    y:
                      hoveredCategory === "Branding"
                        ? 20 :
                        hoveredCategory === CATEGORIES.DIGITAL_CATALOUGES
                          ? -25
                          : hoveredCategory === CATEGORIES.LOYALTY
                            ? -25
                            : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS
                              ? -185
                              : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION
                                ? -185
                                : hoveredCategory === CATEGORIES.GAMIFICATION
                                  ? -55
                                  : -185,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                ></motion.div>
                <motion.div
                  className="shape-center"
                  style={{ width: '10rem', height: '10rem' }}
                  animate={{
                    x:
                      hoveredCategory === "Branding"
                        ? -90 :
                        hoveredCategory === CATEGORIES.DIGITAL_CATALOUGES
                          ? -80
                          : hoveredCategory === CATEGORIES.LOYALTY
                            ? -80
                            : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS
                              ? -80
                              : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION
                                ? -75
                                : hoveredCategory === CATEGORIES.GAMIFICATION
                                  ? -90
                                  : -80,
                    y:
                      hoveredCategory === "Branding"
                        ? 20 :
                        hoveredCategory === CATEGORIES.DIGITAL_CATALOUGES
                          ? -185
                          :
                          hoveredCategory === CATEGORIES.LOYALTY
                            ? -185
                            : hoveredCategory === CATEGORIES.AI_ENABLED_ANALYTICS
                              ? 120
                              : hoveredCategory === CATEGORIES.WHATSAPP_AUTOMATION
                                ? 5
                                : hoveredCategory === CATEGORIES.GAMIFICATION
                                  ? 20
                                  : -80,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                ></motion.div>
                <motion.div
                  className="shape-circle light"
                  animate={{
                    x:
                      hoveredCategory === "Branding"
                        ? -185 :
                        hoveredCategory === "CATEGORIES.DIGITAL_CATALOUGES"
                          ? -175 :
                          hoveredCategory === "CATEGORIES.LOYALTY"
                            ? -175
                            : hoveredCategory === "CATEGORIES.AI_ENABLED_ANALYTICS"
                              ? -175
                              : hoveredCategory === "CATEGORIES.WHATSAPP_AUTOMATION"
                                ? -170
                                : hoveredCategory === "CATEGORIES.GAMIFICATION"
                                  ? -185
                                  : -175,
                    y:
                      hoveredCategory === "Branding"
                        ? -175 :
                        hoveredCategory === "CATEGORY.DIGITAL_CATALOUGES"
                          ? -185
                          : hoveredCategory === "CATEGORIES.LOYALTY"
                            ? -185
                            : hoveredCategory === "CATEGORIES.AI_ENABLED_ANALYTICS"
                              ? 20
                              : hoveredCategory === "CATEGORIES.WHATSAPP_AUTOMATION"
                                ? -130
                                : hoveredCategory === "CATEGORIES.GAMIFICATION"
                                  ? -175
                                  : -185,
                    scale: hoveredCategory === "CATEGORIES.WHATSAPP_AUTOMATION" ? 0.7 : 1,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  }}
                ></motion.div>
              </motion.div>
            </div>
            {/* <div className="proj-logo" ref={serviceHeadinggRef} style={{ position: 'relative', textAlign: 'center' }}>
              <svg className="proj-text" viewBox="0 0 200 100" style={{ fontSize: '20rem', fontWeight: 'bold', fill: 'transparent' }}>
                <defs>
                  <clipPath id="text-clip">
                    <text x="50%" y="80" fontSize="100" fontWeight="normal" textAnchor="middle">
                      AD
                    </text>
                  </clipPath>
                </defs>
                <text x="50%" y="80" fontSize="100" fontWeight="normal" textAnchor="middle">
                  AD
                </text>
                {showImage && (
                  <image className="proj-image" xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" style={{ opacity: showImage ? 1 : 0, animation: showImage ? 'fillImage 1s ease-in-out forwards' : 'none', animationDelay: '1s' }} />
                )}
              </svg>
              {showBackground && (
                <div className="proj-background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '48%', transform: 'translateY(-100%)', animation: showBackground ? 'curtainFall 1s ease-in-out forwards' : 'none', animationDelay: '2s', zIndex: 1, backgroundColor: 'var(--color-green)' }}></div>
              )}
              <svg className="proj-outline" viewBox="0 0 200 100" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', fill: 'none', stroke: '#ccc', strokeWidth: '0.2px', zIndex: 2 }}>
                <text x="50%" y="80" fontSize="100" fontWeight="normal" textAnchor="middle">
                  AD
                </text>
              </svg>
            </div> */}

          </div>
          

          <motion.div
            className='top-button'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ><hr /> <motion.button whileHover={{ scale: 1.1 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top!</motion.button></motion.div>
          <motion.div
            className='contact-home'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2>Have a project?</h2>
            <h2>Let's talk.</h2>
            <motion.div
              className='contact-action'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className='contact-action-circle'></div>
              <div className='contact-action-word'>Contact</div>
            </motion.div>
          </motion.div>
          <FAQ page="home" />
        </div>
      </main>
      
      <Footer />

    </>
  );
};
export default Home;