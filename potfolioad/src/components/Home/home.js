import '../../App.scss';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import CarouselSlider from '../carousel/carousel_slider';

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
    }
  }
};

const adTitleVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      delay: 1,
    }
  }
};

const featureHeadingVariants = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 1 } },
};

const featureHeadingVariants2 = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 1 } },
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const scrollImgRef = useRef(null);
  const minY = initialOffset - window.innerHeight / 2;
  const translateY = Math.max(Math.min(-scrollY * 0.9, 0), -maxScrollY);
  const pageHintRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [showHome, setShowHome] = useState(false);
  const [showHello, setShowHello] = useState(true);

  const handleHover = () => {
    setShowHome(true);
    setShowHello(false);
  };

  const handleHoverLeave = () => {
    setShowHome(false);
    setShowHello(true);
  };


  const toggleNav = () => {
    document.body.classList.toggle('nav-open');
    setIsNavOpen(!isNavOpen);
  };

  const videoRef = useRef(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleNavItemHover = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
  };

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.src = currentVideoUrl;
  //     video.play();
  //   }
  // }, [currentVideoUrl]);

  useEffect(() => {
    const pageHint = pageHintRef.current;
    const adBg = document.querySelector('.ad-bg');
    const adTitle = document.querySelector('.ad-title');

    // Function to show the page hint
    const showPageHint = () => {
      pageHint.classList.add('visible');
    };

    // Function to hide the page hint
    const hidePageHint = () => {
      pageHint.classList.remove('visible');
    };

    // Function to update the page hint after loading
    const updatePageHint = () => {
      pageHint.classList.add('loaded');
    };

    // Show the page hint when the component mounts
    showPageHint();

    // Function to handle scroll events
    const handleScroll = () => {
      const adBgRect = adBg.getBoundingClientRect();
      const adTitleRect = adTitle.getBoundingClientRect();

      // Check if the ad-bg or ad-title is visible on the screen
      if (
        adBgRect.top <= window.innerHeight &&
        adBgRect.bottom >= 0 &&
        adTitleRect.top <= window.innerHeight &&
        adTitleRect.bottom >= 0
      ) {
        showPageHint();
      } else {
        hidePageHint();
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check if both ad-bg and ad-title elements are loaded
    const checkElementsLoaded = () => {
      if (adBg && adTitle) {
        // Update the page hint when the elements are loaded
        updatePageHint();
      } else {
        // If the elements are not loaded, check again after a short delay
        setTimeout(checkElementsLoaded, 100);
      }
    };

    // Start checking for the elements
    checkElementsLoaded();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const servicesHomeRef = useRef(null);
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const featureProjectsRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);


  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef(null);
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
    const categories = ['Branding', 'Interface Design', 'Development', 'Digital Marketing', 'Ongoing Support'];
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollImgElement = scrollImgRef.current;
    if (scrollImgElement) {
      const circleElement = document.querySelector('.home-circle');
      const circleCenter = circleElement.offsetTop + circleElement.offsetHeight / 2;
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

    const homeCircleElement = document.querySelector('.home-circle');
    if (homeCircleElement) {
      observer.observe(homeCircleElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div class="page-hint visible" ref={pageHintRef} ><span class="hint__text hint__text--loading">Loading</span> <svg aria-hidden="true" width="11" height="56" viewBox="0 0 11 56" class="icon-arrow-scroll">
            <path d="M5.5,0 L5.5,56 M0,50.5 L5.5,56 L11,50.5" stroke="#000" stroke-width="1" fill="none"></path>
          </svg></div>
          <div className="row row--items-middle">
            <div className="col-1 col-nav-btn">
              <button id="nav-btn" type="button" aria-label="menu" className="nav-btn d-block" onClick={toggleNav}>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-1 nav-btn__bar--closed"></span>
                <span aria-hidden="true" className="nav-btn__bar nav-btn__bar-2 nav-btn__bar--closed"></span>
              </button>
            </div>
            <div className="col-6 col-offset-2 col-md-3 col-offset-md-0 col-lg-1 col-logo" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
              <a href="/" id="logo" className="header__logo">
                AD
              </a>
            </div>
            <div className="col-2 col-offset-1 col-header-title">
              {!isNavOpen ? (
                <>
                  <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Hello</h1>
                  <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                </>
              ) : (
                <>
                  <h1 className={`header__text header__text--title ${showHello ? 'show' : 'hide'}`}>Index</h1>
                  <h1 className={`header__text header__text--title ${showHome ? 'show' : 'hide'}`}>Home</h1>
                </>
              )}
            </div>
          </div>
          <div className='start-project'>
            <div className='start-cont'>
              <a href="/contact" className='nav-contact'>
                <div className='start-circle'></div>
                <span className='start-label'>Start a project</span>
              </a>
            </div>
          </div>
        </div>

      </header>
      <nav id="nav" className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <div className="nav-overlay"></div>
        <div id="nav-container" className="nav-container">
          <div className="nav__logo">
            <div className="nav__logo-text">AD</div>
            <div className="nav__logo-video">
              <video ref={videoRef} loop muted></video>
            </div>
          </div>
          <div className="container">
            <div className="row row--items-middle nav-row">
              <ul id="nav-list" className="col-11 col-offset-1 col-md-6 col-offset-md-3 nav-list nopad">
                <li id="nav-item-services" data-node-id="49" className="nav-item">
                  {/* onMouseEnter={() => handleNavItemHover('/assets/videos/services.mp4')} */}
                  <motion.a whileHover={{ x: 25 }} id="nav-link-services" href="/services" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Services</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-projects" data-node-id="7" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-projects" data-mask-video="/files/24b3e92e/projects.mp4" data-header-image="/assets/w1700-s5-q75-p1/f0b76847/viviana_rishe_j2330n6bg3i_unsplash.jpg" href="/projects" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Projects</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-us" data-node-id="4" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-us" data-mask-video="/files/24b3e92e/us.mp4" href="/us" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Us</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-journal" data-node-id="10" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-journal" data-mask-video="/files/bdbab894/blog.mp4" href="/journal" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Journal</motion.span>
                  </motion.a>
                </li>
                <li id="nav-item-contact-us" data-node-id="12" className="nav-item">
                  <motion.a whileHover={{ x: 25 }} id="nav-link-contact-us" data-mask-video="/files/bdbab894/contact.mp4" data-header-image="/assets/w1700-s5-q75-p1/42b28034/luca_bravo_9l_326fiszk_unsplash.jpg" href="/contact-us" className="nav-link">
                    <motion.span whileHover={{ x: 25 }} className="nav-link-label">Contact</motion.span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
      <main>
        <div className="main-content">
          <div className="container">
            <motion.div className='ad-bg' variants={adBgVariants} initial='initial' animate='animate'>
              AD
            </motion.div>
            <motion.h1 className='ad-title' variants={adTitleVariants} initial='initial' animate='animate' when="afterChildren">
              We launch winning brands and build extraordinary digital experiences.
            </motion.h1>
            <div className='photo-cont'>
              <img className='homeimg' src='/home.png' alt='not workingg'></img>
            </div>
            <div className='scrollimg'>
              <div className='home-circle'></div>
              <motion.div
                className='landimg-container'
                ref={scrollImgRef}
                style={{ y: translateY + initialOffset }}
              >
                <img className='landimg' src='/landimg.avif' alt='not working'></img>
              </motion.div>
            </div>
            <div className='heading-content'>
              <div className='text-container'>At <b>Agarwal Digital</b>, we’re all about <b>action</b>. What are the specific <b>actions</b> that fuel your company's growth? Do you need more consumers to <b>buy</b> your product? Want more people to <b>subscribe</b> to your list, <b>download</b> your app, or <b>learn</b> about your brand? Or perhaps your goal is simply to <b>generate</b> more leads for your products and services? Whatever <b>actions</b> you're targeting, <b>Agarwal Digital</b> can help.</div>
              <div className='learn-content'>
                <div className='Big-text'>Agarwal Digital has the people, the ideas, and the know-how to get your business where you want it to go. </div>
                <div className='learn-text'><motion.img
                  src='right-arrow.png'
                  alt='Right Arrow'
                  className='arrow-icon'
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />Learn more about us</div>
              </div>
            </div>

          </div>
          <div className='feature-projects' ref={featureProjectsRef}>
            <motion.div
              className='feature-heading'
              style={{ x: xRange1 }}
            >
              Featured projects
            </motion.div>
            <motion.div
              className='feature-heading'
              style={{ x: xRange2 }}
            >
              Featured projects
            </motion.div>
            {/* <CarouselSlider /> */}
          </div>
          <div ref={servicesHomeRef} className='services-home'>
            <div className='services-container'>
              <div className='service-header'>
                <div className='service-title'>What We Do</div>
                <div className='service-categories'>
                  <motion.h2
                    animate={hoveredCategory === 'Branding' ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => handleCategoryHover('Branding')}
                    onMouseLeave={() => handleCategoryHover(null)}

                  >
                    Branding
                  </motion.h2>
                  <motion.h2
                    animate={hoveredCategory === 'Interface Design' ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => handleCategoryHover('Interface Design')}
                    onMouseLeave={() => handleCategoryHover(null)}>
                    Interface Design
                  </motion.h2>
                  <motion.h2
                    animate={hoveredCategory === 'Development' ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => handleCategoryHover('Development')}
                    onMouseLeave={() => handleCategoryHover(null)}
                  >
                    Development
                  </motion.h2>
                  <motion.h2
                    animate={hoveredCategory === 'Digital Marketing' ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => handleCategoryHover('Digital Marketing')}
                    onMouseLeave={() => handleCategoryHover(null)}
                  >
                    Digital Marketing
                  </motion.h2>
                  <motion.h2
                    animate={hoveredCategory === 'Ongoing Support' ? { x: 20 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={() => handleCategoryHover('Ongoing Support')}
                    onMouseLeave={() => handleCategoryHover(null)}
                  >
                    Ongoing Support
                  </motion.h2>
                </div>
                <div className='service-action'><motion.img
                  src='right-arrow.png'
                  alt='Right Arrow'
                  className='arrow-icon'
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />Explore Our Capabilities</div>
              </div>
              <motion.div className='Circle-pattern'>
                <motion.div className='shape-circle dark' animate={{
                  x: hoveredCategory === 'Branding' ? -175 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -175,
                  y: hoveredCategory === 'Branding' ? 20 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -185,
                  transition: { type: 'spring', stiffness: 200, damping: 20 }
                }}></motion.div>
                <motion.div className='shape-center' animate={{
                  x: hoveredCategory === 'Branding' ? -90 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -80,
                  y: hoveredCategory === 'Branding' ? 20 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : -80,
                  transition: { type: 'spring', stiffness: 200, damping: 20 }
                }}></motion.div>
                <motion.div className='shape-circle light' animate={{
                  x: hoveredCategory === 'Branding' ? -185 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -175,
                  y: hoveredCategory === 'Branding' ? -175 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -185,
                  scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                  transition: { type: 'spring', stiffness: 200, damping: 20 }
                }}></motion.div>
              </motion.div>
            </div>
            <div className="service-logo"> <div className="clipped-image"> <img src="landimg.avif" alt="Clipped Image" /> </div> AD </div>
          </div>
          <div className='top-button'><hr /> <button>Top!</button></div>
          <div className='contact-home'>
            <h2>Have a project?</h2>
            <h2>Let's talk.</h2>
            <div className='contact-action'>
              <div className='contact-action-circle'></div>
              <div className='contact-action-word'>Contact</div>
            </div>
          </div>
        </div>
      </main>
      <footer class='hero-footer'>
        <div class='footer-col footer-col1'>
          <div class='footer-title'>Reach us</div>
          <div class='footer-content'>abc@gmail.com</div>
        </div>
        <div class='footer-col footer-col2'>
          <div class='footer-title'>Follow us</div>
          <div class='footer-content'>
            <a href='' class='footer-nav'>Twitter</a>
            <a href='' class='footer-nav'>Facebook</a>
            <a href='' class='footer-nav'>Instagram</a>
            <a href='' class='footer-nav'>LinkedIn</a>
          </div>
        </div>
        <div class='footer-col footer-col3'>
          <div class='footer-title'>Legal Stuff</div>
          <div class='footer-content'>@AD</div>
        </div>
        <div class='footer-col footer-col4'>
          <div class='subscribe-title'>INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US, DIRECT TO YOUR INBOX.</div>
          <div class='subscribe-box'>
            <h4>Enter your email</h4>
            <h5>Subscribe</h5>
          </div>
        </div>
      </footer>


    </>
  );
}

export default Home;
