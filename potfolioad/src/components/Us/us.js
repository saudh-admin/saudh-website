
import './us.scss';
import '../../App.scss';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';

const Us = () => {
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
  const circleRef = useRef(null);
  const circleRadius = useRef(0); // Initial radius
  const [circleScale, setCircleScale] = useState(1); // Scale factor for animation

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [rectangleTranslateY, setRectangleTranslateY] = useState(0);

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
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScrollY;

    const newScale = 1 + scrollProgress * 3;
    setCircleScale(newScale);

    const newTranslateY = -scrollProgress * 800;
    setRectangleTranslateY(newTranslateY);
  }, [scrollY]);

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);

    };
    return <>
      <Navbar></Navbar>
      
        <div className='us-ad-bg' >
            AD
        </div>
        <h1 className='us-ad-title'>
            We're just like a digital agency, but without all the bull$#it.
        </h1>
        <div className='us-photo-cont'>
            <img className='us-homeimg' src='/about.webp' alt='not workingg'></img>
        </div>
        <div className='us-content'>
        <div className='rectangle rectangle-purple'  style={{ transform: `translateY(${rectangleTranslateY}px)` }}></div>
  <div className='rectangle rectangle-green' style={{ transform: `translateY(${rectangleTranslateY}px) rotate(40deg)` }}></div>
  <div className='rectangle rectangle-nude' style={{ transform: `translateY(${rectangleTranslateY}px) rotate(-40deg)` }}></div>
            <div className='us-content-para'>
                <div className='us-content-circle' style={{ transform: `scale(${circleScale})` }}></div>
                <div className='us-content-para-text'>
                    We work with a wide range of clients across numerous verticals, from innovative startups to global enterprises. Whether it’s a corporate website that needs to be revamped or a hot new product launch, we like getting our hands dirty with clients that know what results they want and trust us to lead the way.
                </div>
            </div>
            <div className='us-content-title'>
                <h1>When you partner with AD, you get an all-star team with the knowledge and expertise to get your project moving quickly.</h1>
            </div>
        </div>
        <div className='us-para'>
            <img src='/about2.webp' alt='not working'></img>
            <h2>And We Mean It: No BS
            </h2>

            <h5>Our goal is to add value without adding a bunch of unnecessary "process" onto your plate. We know that you and your team have a lot going on already, so we’ve fine-tuned our approach to ensure that working with us is as efficient, fun, and painless as possible.<br /><br />

                With years of experience tackling countless digital projects, we've learned how to see around corners, eliminate costly mistakes before they occur, and deliver the results you're after — while you get to enjoy the ride.</h5>
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
}

export default Us