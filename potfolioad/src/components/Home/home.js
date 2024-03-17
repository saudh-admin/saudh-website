import '../../App.scss';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
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

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [initialOffset, setInitialOffset] = useState(0);
  const scrollImgRef = useRef(null);
  const minY = initialOffset - window.innerHeight / 2;
  const translateY = Math.max(Math.min(-scrollY * 0.9, 0), minY);

  const servicesHomeRef = useRef(null);
  const controls = useAnimation();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryHover = async (category) => {
    setHoveredCategory(category);
    if (category) {
      await controls.start({ x: 10, transition: { yoyo: Infinity, duration: 1 } });
    } else {
      await controls.start({ x: 0 });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleCategoryHover('Branding');
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (servicesHomeRef.current) {
      observer.observe(servicesHomeRef.current);
    }

    return () => {
      if (servicesHomeRef.current) {
        observer.unobserve(servicesHomeRef.current);
      }
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
      setInitialOffset(scrollImgElement.offsetTop);
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
      <Navbar />
      {/* <div className='arrowlogo'><img className="home-arrow" src='/down-arrow.png'></img></div> */}
      <motion.div className='ad-bg' variants={adBgVariants} initial='initial' animate='animate'>
        AD
      </motion.div>
      <motion.h1 className='ad-title' variants={adTitleVariants} initial='initial' animate='animate' when="afterChildren">
        We launch winning brands and build extraordinary digital experiences.
      </motion.h1>
      <div className='photo-cont'>
        <img className='homeimg' src='/home.png' alt='not workingg'></img>
      </div>
      <div className='scrollimg'> <div className='home-circle'></div>
        <motion.div
          className='landimg-container'
          ref={scrollImgRef}
          style={{ y: Math.min(-scrollY * 0.9, 0) + initialOffset }}
        >
          <img className='landimg' src='/landimg.avif' alt='not working'></img>
        </motion.div>
      </div>
      <div className='heading-content'>
        <div className='text-container'>At <b>Agarwal Digital</b>, we’re all about <b>action</b>. What are the specific <b>actions</b> that fuel your company's growth? Do you need more consumers to <b>buy</b> your product? Want more people to <b>subscribe</b> to your list, <b>download</b> your app, or <b>learn</b> about your brand? Or perhaps your goal is simply to <b>generate</b> more leads for your products and services? Whatever <b>actions</b> you're targeting, <b>Agarwal Digital</b> can help.</div>
        <div className='learn-content'>
          <div className='Big-text'>Agarwal Digital has the people, the ideas, and the know-how to get your business where you want it to go. </div>
          <div className='learn-text'><img src='right-arrow.png'></img> Learn more about us</div>
        </div>
      </div>
      <div className='feature-projects'>
        <div className='feature-heading'>Featured projects</div>
        <div className='feature-heading'>Featured projects</div>
        <CarouselSlider />
      </div>
      <div ref={servicesHomeRef} className='services-home'>
        <div className='services-container'>
          <div className='service-header'>
            <div className='service-title'>What We Do</div>
            <div className='service-categories'>
              <motion.h2
                whileHover={{ x: 10, transition: { yoyo: Infinity, duration: 1 } }}
                onMouseEnter={() => handleCategoryHover('Branding')}
                onMouseLeave={() => handleCategoryHover(null)}

              >
                Branding
              </motion.h2>
              <motion.h2
                whileHover={{ x: 10, transition: { yoyo: Infinity, duration: 1 } }}
                onMouseEnter={() => handleCategoryHover('Interface Design')}
                onMouseLeave={() => handleCategoryHover(null)}>
                Interface Design
              </motion.h2>
              <motion.h2
                whileHover={{ x: 10, transition: { yoyo: Infinity, duration: 1 } }}
                onMouseEnter={() => handleCategoryHover('Development')}
                onMouseLeave={() => handleCategoryHover(null)}
              >
                Development
              </motion.h2>
              <motion.h2
                whileHover={{ x: 10 }}
                onMouseEnter={() => handleCategoryHover('Digital Marketing')}
                onMouseLeave={() => handleCategoryHover(null)}
              >
                Digital Marketing
              </motion.h2>
              <motion.h2
                whileHover={{ x: 10 }}
                onMouseEnter={() => handleCategoryHover('Ongoing Support')}
                onMouseLeave={() => handleCategoryHover(null)}
              >
                Ongoing Support
              </motion.h2>
            </div>
            <div className='service-action'><img src='right-arrow.png'></img>Explore Our Capabilities</div>
          </div>
          <motion.div className='Circle-pattern'>
            <motion.div className='shape-circle dark' animate={{
              x: hoveredCategory === 'Branding' ? -175 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -175,
              y: hoveredCategory === 'Branding' ? 20 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -185,
            }}></motion.div>
            <motion.div className='shape-center' animate={{
              x: hoveredCategory === 'Branding' ? -90 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -80,
              y: hoveredCategory === 'Branding' ? 20 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : -80,
            }}></motion.div>
            <motion.div className='shape-circle light' animate={{
              x: hoveredCategory === 'Branding' ? -185 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -175,
              y: hoveredCategory === 'Branding' ? -175 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -185,
              scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
            }}></motion.div>
          </motion.div>
        </div>
        <div className="service-logo">AD</div>
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
