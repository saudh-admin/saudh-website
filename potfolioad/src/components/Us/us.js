import './us.scss';
import '../../App.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';
// import FAQ from '../FAQ/faq';

const adBgVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const adTitleVariants = {
  initial: {
    y: 100,
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

const adphotoVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

const Us = () => {
  const [scrollY, setScrollY] = useState(0);
  const [circleScale, setCircleScale] = useState(1);
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

  return (
    <>
      <Navbar />
      <motion.div
        className="us-ad-bg"
        variants={adBgVariants}
        initial="initial"
        animate="animate"
      >
        AD
      </motion.div>
      <motion.h1
        className="us-ad-title"
        variants={adTitleVariants}
        initial="initial"
        animate="animate"
      >
        We're just like a digital agency, but without all the bull$#it.
      </motion.h1>
      <motion.div
        className="us-photo-cont"
        variants={adphotoVariants}
        initial="initial"
        animate="animate"
      >
        <img className="us-homeimg" src="/about.webp" alt="not workingg" />
      </motion.div>
      <div className="us-content">
        <div
          className="rectangle rectangle-purple"
          style={{ transform: `translateY(${rectangleTranslateY}px)` }}
        ></div>
        <div
          className="rectangle rectangle-green"
          style={{ transform: `translateY(${rectangleTranslateY}px) rotate(40deg)` }}
        ></div>
        <div
          className="rectangle rectangle-nude"
          style={{ transform: `translateY(${rectangleTranslateY}px) rotate(-40deg)` }}
        ></div>
        <div className="us-content-para">
          <div
            className="us-content-circle"
            style={{ transform: `scale(${circleScale})` }}
          ></div>
          <div className="us-content-para-text">
            We work with a wide range of clients across numerous verticals, from innovative
            startups to global enterprises. Whether it's a corporate website that needs to be
            revamped or a hot new product launch, we like getting our hands dirty with clients
            that know what results they want and trust us to lead the way.
          </div>
        </div>
        <div className="us-content-title">
          <h1>
            When you partner with AD, you get an all-star team with the knowledge and expertise
            to get your project moving quickly.
          </h1>
        </div>
      </div>
      <div className="us-para">
        <img src="/about2.webp" alt="not working" />
        <h2>And We Mean It: No BS</h2>
        <h5>
          Our goal is to add value without adding a bunch of unnecessary "process" onto your
          plate. We know that you and your team have a lot going on already, so we've fine-tuned
          our approach to ensure that working with us is as efficient, fun, and painless as
          possible.
          <br />
          <br />
          With years of experience tackling countless digital projects, we've learned how to see
          around corners, eliminate costly mistakes before they occur, and deliver the results
          you're after — while you get to enjoy the ride.
        </h5>
      </div>
      {/* <FAQ page="us" /> */}
      <div className="top-button">
        <hr /> <button>Top!</button>
      </div>
      <div className="contact-home">
        <h2>Have a project?</h2>
        <h2>Let's talk.</h2>
        <div className="contact-action">
          <div className="contact-action-circle"></div>
          <div className="contact-action-word">Contact</div>
        </div>
      </div>
      <footer className="hero-footer">
        <div className="footer-col footer-col1">
          <div className="footer-title">Reach us</div>
          <div className="footer-content">abc@gmail.com</div>
        </div>
        <div className="footer-col footer-col2">
          <div className="footer-title">Follow us</div>
          <div className="footer-content">
            <a href="" className="footer-nav">Twitter</a>
            <a href="" className="footer-nav">Facebook</a>
            <a href="" className="footer-nav">Instagram</a>
            <a href="" className="footer-nav">LinkedIn</a>
          </div>
        </div>
        <div className="footer-col footer-col3">
          <div className="footer-title">Legal Stuff</div>
          <div className="footer-content">@AD</div>
        </div>
        <div className="footer-col footer-col4">
          <div className="subscribe-title">
            INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US, DIRECT TO YOUR
            INBOX.
          </div>
          <div className="subscribe-box">
            <h4>Enter your email</h4>
            <h5>Subscribe</h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Us;