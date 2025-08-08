import React, { useState, useEffect } from 'react';
import './branding.scss';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import FAQ from '../FAQ/faq';
import { motion } from 'framer-motion';

const Branding = () => {
    const [activeDropdowns, setActiveDropdowns] = useState({});

    const toggleDropdown = (index) => {
        setActiveDropdowns((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    useEffect(() => {
        const serviceHeadingCat = document.querySelector('.service-heading-cat');
        const imgHeading = document.querySelector('.img-heading');
        const serviceLogoServiceCat = document.querySelector('.service-logo-service-cat');
        const serviceContentLayout = document.querySelector('.service-content-layout');
        const serviceLogoWrapper = document.querySelector('.service-logo-wrapper');

        if (serviceContentLayout) {
            serviceContentLayout.style.opacity = '0';
        }

        setTimeout(() => {
            if (serviceLogoServiceCat) {
                serviceLogoServiceCat.style.opacity = '1';
            }
        }, 500);

        setTimeout(() => {
            if (serviceHeadingCat) {
                serviceHeadingCat.style.transform = 'translateY(0)';
            }
            if (imgHeading) {
                imgHeading.style.opacity = '1';
                imgHeading.style.transform = 'translateY(0)';
            }
            if (serviceLogoWrapper) {
                serviceLogoWrapper.style.clipPath = 'inset(0 0 calc(100% - 55vh) 0)';
            }
        }, 2000);

        setTimeout(() => {
            if (serviceContentLayout) {
                serviceContentLayout.style.opacity = '1';
                serviceContentLayout.style.transition = 'opacity 1s ease';
            }
        }, 3500);
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <main className="saudh-main-bg">
                <motion.section
                    className="saudh-hero-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="saudh-flex-row">
                        <motion.div
                            className="saudh-flex-half text-block"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="saudh-hero-title">
                                Branding & Identity Design
                            </h1>
                            <p className="saudh-hero-desc">
                                Create a powerful brand identity that resonates with your audience and sets you apart from the competition.
                            </p>
                        </motion.div>
                        <motion.div
                            className="saudh-flex-half image-block"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <img src="/branding.webp" alt="Branding Services" />
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    className="saudh-content-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="saudh-container">
                        <motion.div
                            className="saudh-content-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="saudh-content-item">
                                <h3>Logo Design</h3>
                                <p>Professional logo design that captures your brand essence and works across all platforms.</p>
                            </div>
                            <div className="saudh-content-item">
                                <h3>Brand Guidelines</h3>
                                <p>Comprehensive brand guidelines ensuring consistent application across all touchpoints.</p>
                            </div>
                            <div className="saudh-content-item">
                                <h3>Visual Identity</h3>
                                <p>Complete visual identity system including color palettes, typography, and design elements.</p>
                            </div>
                            <div className="saudh-content-item">
                                <h3>Brand Strategy</h3>
                                <p>Strategic brand positioning and messaging that connects with your target audience.</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.div
                    className='contact-home'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h2>Ready to build your brand?</h2>
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
            </main>
            <FAQ page="branding" />
            <Footer />
        </>
    );
};

export default Branding;

