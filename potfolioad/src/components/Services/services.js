import './services.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';
import { CATEGORIES } from '../../utils/constants';
import Footer from '../Footer/footer';

const Services = () => {

    const [exploreHovered, setExploreHovered] = useState(false);

    const handleExploreHover = (isHovered) => {
        setExploreHovered(isHovered);
    };
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = async (category) => {
        setHoveredCategory(category);
    };

    const serviceHeadinggRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [showImage, setShowImage] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const serviceHeadinggElement = serviceHeadinggRef.current;
        if (serviceHeadinggElement) {
            serviceHeadinggElement.classList.add('service-headingg-curtain');
        }


        setTimeout(() => {
            setShowImage(true);
        }, 500);


        setTimeout(() => {
            setShowBackground(true);
        }, 800);
    }, []);



    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowImage(true);
                setTimeout(() => {
                    setShowBackground(true);
                }, 500);
            }, 500);
        }, 800);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <main>
                {/* <div className="projects-heading">
                    <div className={`proj-logo ${showImage ? 'show-image' : ''} ${showBackground ? 'show-background' : ''}`} ref={serviceHeadinggRef}>
                        <svg className={`proj-text ${window.location.pathname === '/Services' ? 'white-background' : window.location.pathname === '/contact' ? 'white-background' : window.location.pathname === '/projects' ? 'gray-background' : ''}`} viewBox="0 0 200 100">
                            <defs>
                                <clipPath id="text-clip">
                                    <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                        AD
                                    </text>
                                </clipPath>
                            </defs>
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle" fill="#fff" stroke="#ccc" strokeWidth="1">
                                AD
                            </text>
                            {showImage && (
                                <image className="proj-image" xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" />
                            )}
                        </svg>
                        {showBackground && (
                            <div className={`proj-background ${window.location.pathname === '/Services' ? 'green-background' : window.location.pathname === '/contact' ? 'blue-background' : window.location.pathname === '/projects' ? 'white-background' : ''}`}></div>
                        )}
                        <svg className="proj-outline" viewBox="0 0 200 100">
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                AD
                            </text>
                        </svg>
                        <h2 className="projects-title">Services</h2>
                    </div>
                </div> */}
                <div className='service-content'>
                    <div className='heading-mobile'>
                        <h1>What We Offer</h1>
                    </div>
                    <div className='service-col-1'>
                        {/* <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Branding')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Branding'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='branding.webp' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Branding' ? -80 : -80,
                                        y: hoveredCategory === 'Branding' ? 0 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Branding' ? -40 : -40,
                                        y: hoveredCategory === 'Branding' ? 0 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Branding' ? -80 : -80,
                                        y: hoveredCategory === 'Branding' ? -80 : -40,
                                    }}></motion.div>
                                </motion.div> */}
                        {/* <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.MALL_IN_YOUR_POCKET}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div> 
                                 <div className='para'>Digitize your mall with a single smart QR code. Give visitors instant access to floors, stores, offers, amenities, and more.</div> */}
                        {/* </div> */}
                        {/* </a> */}
                        {/* </motion.div> */}
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Analytics')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Analytics'>
                                <div className='img-wrapper'>
                                    <img className='service-col-heading-img' src='AIenabled.webp.jpg' alt='landimg' />
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Analytics' ? -80 : -80,
                                        y: hoveredCategory === 'Analytics' ? -80 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Analytics' ? -40 : -40,
                                        y: hoveredCategory === 'Analytics' ? 40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Analytics' ? -80 : -80,
                                        y: hoveredCategory === 'Analytics' ? 0 : -40,

                                    }}></motion.div>
                                </motion.div>
                                {/* //Ai enabled */}
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.AI_ENABLED_ANALYTICS}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>Track visitor engagement, measure conversions, and optimize performance with real-time, AI-powered insights.</div>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Ongoing Support')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Gamification'>
                                <div className='img-wrapper'>
                                    {isMobile ? (
                                        <img className='service-col-heading-img' src='spinwinphone.jpg' alt='phone' />
                                    ) : (
                                        <img className='service-col-heading-img' src='Gamification.webp.jpg' alt='landimg' />
                                    )}
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -80 : -80,
                                        y: hoveredCategory === 'Ongoing Support' ? -40 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -40 : -40,
                                        y: hoveredCategory === 'Ongoing Support' ? 0 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Ongoing Support' ? -80 : -80,
                                        y: hoveredCategory === 'Ongoing Support' ? -80 : -40,
                                    }}></motion.div>
                                </motion.div>
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.GAMIFICATION}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>Drive engagement and boost conversions with interactive reward games that increase foot traffic.</div>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Digital Marketing')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Whatsapp-automation'>
                                <div className='img-wrapper'>
                                    {isMobile ? (
                                        <img className='service-col-heading-img' src='wamobile.jpg' alt='phone' />
                                    ) : (
                                        <img className='service-col-heading-img' src='Whatsapp Automation.webp.jpg' alt='landimg' />
                                    )}
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                        y: hoveredCategory === 'Digital Marketing' ? 40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -25 : -40,
                                        scale: hoveredCategory === 'Digital Marketing' ? 0.8 : 1,

                                    }}></motion.div>
                                </motion.div>
                                {/* Whatsapp */}
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.WHATSAPP_AUTOMATION}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>Let stores capture leads, send offers, answer FAQs, and take orders—all through WhatsApp.</div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                    <div className='service-col-2'>
                        <div className='service-home-heading'>
                            Where can we take you?
                        </div>
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Interface Design')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Digital-catalogue'>
                                <div className='img-wrapper'>
                                    {isMobile ? (
                                        <img className='service-col-heading-img' src='digitalcataloguemobile.jpg' alt='phone' />
                                    ) : (
                                        <img className='service-col-heading-img' src='Digital Catalogue.webp.jpg' alt='landimg' />
                                    )}
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -80 : -80,
                                        y: hoveredCategory === 'Interface Design' ? 15 : -40,
                                        scale: hoveredCategory === 'Interface Design' ? 0.7 : 1,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -40 : -40,
                                        y: hoveredCategory === 'Interface Design' ? -40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Interface Design' ? -80 : -80,
                                        y: hoveredCategory === 'Interface Design' ? -40 : -40,

                                    }}></motion.div>
                                </motion.div>
                                {/* digital catalogue */}
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.DIGITAL_CATALOUGES}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>Showcase business menus, services, and product listings in a tap-friendly, mobile-first format.</div>
                                </div>
                            </a>
                        </motion.div>
                        {/* loyalty */}
                        <motion.div className='service-col-heading'
                            onMouseEnter={() => handleCategoryHover('Digital Marketing')}
                            onMouseLeave={() => handleCategoryHover(null)} >
                            <a href='/Services/Loyalty'>
                                <div className='img-wrapper'>
                                    {isMobile ? (
                                        <img className='service-col-heading-img' src='wamobile.jpg' alt='phone' />
                                    ) : (
                                        <img className='service-col-heading-img' src='loyalty.png' alt='landimg' />
                                    )}
                                </div>
                                <motion.div className='anim-circle'>
                                    <motion.div className='shape-circle dark' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                    }}></motion.div>
                                    <motion.div className='shape-center' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -40 : -40,
                                        y: hoveredCategory === 'Digital Marketing' ? 40 : 0,
                                    }}></motion.div>
                                    <motion.div className='shape-circle light' animate={{
                                        x: hoveredCategory === 'Digital Marketing' ? -80 : -80,
                                        y: hoveredCategory === 'Digital Marketing' ? -25 : -40,
                                        scale: hoveredCategory === 'Digital Marketing' ? 0.8 : 1,

                                    }}></motion.div>
                                </motion.div>
                                {/* Loyalty */}
                                <div className='service-col-heading-text'>
                                    <div className='head'>
                                        <h1>{CATEGORIES.LOYALTY}</h1>
                                        <div className='explore'
                                            onMouseEnter={() => handleExploreHover(true)}
                                            onMouseLeave={() => handleExploreHover(false)}
                                        >
                                            <motion.img
                                                src="right-arrow.png"
                                                alt="Right Arrow"
                                                className="arrow-icon-service"
                                                animate={{ opacity: exploreHovered ? 0 : 1, x: exploreHovered ? 10 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <h3>Explore</h3>
                                        </div>
                                    </div>
                                    <div className='para'>Build customer loyalty and drive repeat business with a custom rewards program.</div>
                                </div>
                            </a>

                        </motion.div>

                    </div>

                </div>

            </main>
            <div className='contact-footer'>
                <div className='top-button'><hr /> <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top!</button></div>
                <div className='contact-home'>
                    <h2 className='contact-title'>Have a project?</h2>
                    <h2>Let's talk.</h2>
                    <div className='contact-action'>
                        <div className='contact-action-circle'></div>
                        <div className='contact-action-word '>Contact</div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Services