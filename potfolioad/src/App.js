import './App.scss';

import Navbar from './components/navbar/Navbar';
import { motion } from 'framer-motion';



const textVariants = {
  initial: {
    y: 500,
    opacity: 0,

  },

  animate: {
    y: 0,
    opacity: 1,
    transistion: {
      duration: 0.01,
      staggerChildren: 0.1,
    },
  },
}


function App() {




  return (
    <div className="App">
      <Navbar />
      <div className='arrowlogo'></div>
      <motion.h1 className='ad-title' variants={textVariants} initial='initial' animate='animate'>We launch winning brands and build extraordinary digital experiences.</motion.h1>
      <motion.div className='ad-bg'>AD</motion.div>
      <div className='photo-cont'>
        <img className='homeimg' src='/home.png' alt='not workingg'></img>
      </div>
      <div className='scrollimg'> <div className='home-circle'></div>
        <img className='landimg' src='/landimg.avif' alt='not workingg'></img></div>
      <div className='heading-content'>
        <div className='text-container'>At Agarwal Digital, we’re all about action. What are the specific actions that fuel your company's growth? Do you need more consumers to buy your product? Want more people to subscribe to your list, download your app, or learn about your brand? Or perhaps your goal is simply to generate more leads for your products and services? Whatever actions you're targeting, Agarwal Digital can help.</div>
        <div className='learn-content'>
          <div className='Big-text'>Agarwal Digital has the people, the ideas, and the know-how to get your business where you want it to go. </div>
          <div className='learn-text'>Learn more about us</div>
        </div>
      </div>
      <div className='feature-projects'>
        <div className='feature-heading'>Featured Projects</div>
        <div className='feature-head'>Featured Projects</div>
        <div className='feature-carousel'>
          CAROUSEL
        </div>
      </div>
      <div className='services-home'>
        <div className='services-container'>
          <div className='service-header'>
            <div className='service-title'>What We Do</div>
            <div className='service-categories'>
              <h2>Branding</h2>
              <h2>Interface Design</h2>
              <h2>Development</h2>
              <h2>Digital Marketing</h2>
              <h2>Ongoing Support</h2>
            </div>
            <div className='service-action'>Explore Our Capabilities</div>
          </div>
          <div className='Circle-pattern'>
            <div className='shape-circle'></div>
            <div className='shape-center'></div>
            <div className='shape-circle'></div>
          </div>
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
            <h4>Subscribe</h4>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
