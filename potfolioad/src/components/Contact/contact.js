import './contact.scss';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';

const Contact = () => {

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




const [hideStartLabel, setHideStartLabel] = useState(false);
const footerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const xRange1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);
  const xRange2 = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);


  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationInterval = useRef(null);

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

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);

    };
    return (

        <>
            <Navbar></Navbar>
            <main className='main-content'>
            <div className='service-heading'>
                <div className='service-heading-text'>
                Let's build something awesome together.
                </div>
                <div className="service-logo">
                    <div class="ad-text">AD</div>
                </div>
            </div>
            <div className='contact-content'>
                <div className='contact-form'>
                    <form>
                        <div className='form-group'>
                            <input type='text' id='name' name='name' placeholder='Your name' required />
                        </div>

                        <div className='form-group'>
                            <input type='email' id='email' name='email' placeholder='Work email' required />
                        </div>

                        <div className='form-group'>
                            <input type='tel' id='phone' name='phone' placeholder='Phone' required />
                        </div>

                        <div className='form-group'>
                            <div className='budget-container'>
                                <input type='text' id='budgetdiv' name='budgetdiv' placeholder='What is your budget?' required />
                                <select id='budget' name='budget' required>
                                    <option value='' disabled selected>Select a price range</option>
                                    <option value='under30k'>Under $30,000</option>
                                    <option value='30k-50k'>$30,000 - $50,000</option>
                                    <option value='50k-100k'>$50,000 - $100,000</option>
                                    <option value='over100k'>$100,000+</option>
                                    <option value='tbd'>TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group'>
                            <div className='budget-container'>
                                <label htmlFor='attachment' className='attach'>Any docs to attach?</label>
                                <input type='file' id='attachment' name='attachment' className='file-input' />
                                <label htmlFor='attachment' className='file-label'>Select a file</label>
                            </div>
                        </div>

                        <div className='form-group'>
                            <textarea id='message' name='message' placeholder='Please tell us a bit about your project..' required></textarea>
                        </div>

                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='contact-title'>
                    <h1>Tell us about your goals, and we'll get back to you right away!</h1>
                    <img src='contact.webp' alt='not working'></img>
                </div>
            </div>
            </main>
            <footer  ref={footerRef} class='hero-footer'>
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
};

export default Contact;