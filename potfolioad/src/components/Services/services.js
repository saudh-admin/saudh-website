import './services.scss';
import Navbar from '../navbar/Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);

    };
    return (
        <>
            <Navbar />
            <div className='service-heading'>
                <div className='service-heading-text'>
                    Services
                </div>
                <div className="service-logo-service">AD</div>
            </div>
            <div className='service-content'>
                <div className='service-col-1'>
                    <motion.div className='service-col-heading'
                        onMouseEnter={() => handleCategoryHover('Branding')}
                        onMouseLeave={() => handleCategoryHover(null)} >
                        <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                        <motion.div className='anim-circle'>
                            <motion.div className='shape-circle dark' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -40,
                            }}></motion.div>
                            <motion.div className='shape-center' animate={{
                                x: hoveredCategory === 'Branding' ? -40 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -40,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : 0,
                            }}></motion.div>
                            <motion.div className='shape-circle light' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -40,
                                scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                            }}></motion.div>
                        </motion.div>
                        <div className='service-col-heading-text'>
                            <div className='head'><h1>Branding</h1><h3>Explore</h3></div>
                            <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                        </div>
                    </motion.div>
                    <motion.div className='service-col-heading'
                        onMouseEnter={() => handleCategoryHover('Branding')}
                        onMouseLeave={() => handleCategoryHover(null)} >
                        <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                        <motion.div className='anim-circle'>
                            <motion.div className='shape-circle dark' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -40,
                            }}></motion.div>
                            <motion.div className='shape-center' animate={{
                                x: hoveredCategory === 'Branding' ? -40 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -40,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : 0,
                            }}></motion.div>
                            <motion.div className='shape-circle light' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -40,
                                scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                            }}></motion.div>
                        </motion.div>
                        <div className='service-col-heading-text'>
                            <div className='head'><h1>Branding</h1><h3>Explore</h3></div>
                            <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                        </div>
                    </motion.div>
                    <motion.div className='service-col-heading'
                        onMouseEnter={() => handleCategoryHover('Branding')}
                        onMouseLeave={() => handleCategoryHover(null)} >
                        <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                        <motion.div className='anim-circle'>
                            <motion.div className='shape-circle dark' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -40,
                            }}></motion.div>
                            <motion.div className='shape-center' animate={{
                                x: hoveredCategory === 'Branding' ? -40 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -40,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : 0,
                            }}></motion.div>
                            <motion.div className='shape-circle light' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -40,
                                scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                            }}></motion.div>
                        </motion.div>
                        <div className='service-col-heading-text'>
                            <div className='head'><h1>Branding</h1><h3>Explore</h3></div>
                            <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                        </div>
                    </motion.div>
                </div>
                <div className='service-col-2'>
                   <div className='service-home-heading'>
                    Where can we take you?
                   </div>
                   <motion.div className='service-col-heading'
                        onMouseEnter={() => handleCategoryHover('Branding')}
                        onMouseLeave={() => handleCategoryHover(null)} >
                        <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                        <motion.div className='anim-circle'>
                            <motion.div className='shape-circle dark' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -40,
                            }}></motion.div>
                            <motion.div className='shape-center' animate={{
                                x: hoveredCategory === 'Branding' ? -40 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -40,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : 0,
                            }}></motion.div>
                            <motion.div className='shape-circle light' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -40,
                                scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                            }}></motion.div>
                        </motion.div>
                        <div className='service-col-heading-text'>
                            <div className='head'><h1>Branding</h1><h3>Explore</h3></div>
                            <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                        </div>
                    </motion.div>
                    <motion.div className='service-col-heading'
                        onMouseEnter={() => handleCategoryHover('Branding')}
                        onMouseLeave={() => handleCategoryHover(null)} >
                        <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                        <motion.div className='anim-circle'>
                            <motion.div className='shape-circle dark' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -175 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -25 : hoveredCategory === 'Development' ? -185 : hoveredCategory === 'Digital Marketing' ? -185 : hoveredCategory === 'Ongoing Support' ? -55 : -40,
                            }}></motion.div>
                            <motion.div className='shape-center' animate={{
                                x: hoveredCategory === 'Branding' ? -40 : hoveredCategory === 'Interface Design' ? -80 : hoveredCategory === 'Development' ? -80 : hoveredCategory === 'Digital Marketing' ? -75 : hoveredCategory === 'Ongoing Support' ? -90 : -40,
                                y: hoveredCategory === 'Branding' ? 0 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 120 : hoveredCategory === 'Digital Marketing' ? 5 : hoveredCategory === 'Ongoing Support' ? 20 : 0,
                            }}></motion.div>
                            <motion.div className='shape-circle light' animate={{
                                x: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -175 : hoveredCategory === 'Development' ? -175 : hoveredCategory === 'Digital Marketing' ? -170 : hoveredCategory === 'Ongoing Support' ? -185 : -80,
                                y: hoveredCategory === 'Branding' ? -80 : hoveredCategory === 'Interface Design' ? -185 : hoveredCategory === 'Development' ? 20 : hoveredCategory === 'Digital Marketing' ? -130 : hoveredCategory === 'Ongoing Support' ? -175 : -40,
                                scale: hoveredCategory === 'Digital Marketing' ? 0.7 : 1,
                            }}></motion.div>
                        </motion.div>
                        <div className='service-col-heading-text'>
                            <div className='head'><h1>Branding</h1><h3>Explore</h3></div>
                            <div className='para'>We help you to create a unique brand identity that will make you stand out from the crowd.</div>
                        </div>
                    </motion.div>
                </div>
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
    )
}

export default Services