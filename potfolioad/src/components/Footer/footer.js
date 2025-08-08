import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
        return (
                <footer className='hero-footer'>
                        <div className='footer-container'>
                                {/* Main Footer Content */}
                                <div className='footer-main'>
                                        {/* Company Info Section */}
                                        <div className='footer-col footer-col1'>
                                                <motion.div
                                                        className='footer-title'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6 }}
                                                >
                                                        SAUDH
                                                </motion.div>
                                                <motion.div
                                                        className='footer-content'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.1 }}
                                                >
                                                        <p className='footer-description'>
                                                                Transforming businesses through innovative digital solutions.
                                                                We create experiences that matter.
                                                        </p>
                                                </motion.div>
                                                <motion.div
                                                        className='footer-contact'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                >
                                                        <div className='contact-item'>
                                                                <span className='contact-label'>Email</span>
                                                                <a href="mailto:rounak@saudh.com" className="footer-anim-email">rounak@saudh.com</a>
                                                        </div>
                                                        <div className='contact-item'>
                                                                <span className='contact-label'>Phone</span>
                                                                <a href="tel:9234441398" className="footer-anim-phone">+91 9234441398</a>
                                                        </div>
                                                </motion.div>
                                        </div>

                                        {/* Services Section */}
                                        <div className='footer-col footer-col2'>
                                                <motion.div
                                                        className='footer-title'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.1 }}
                                                >
                                                        Services
                                                </motion.div>
                                                <motion.div
                                                        className='footer-content'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                >
                                                        <a href='Services/digital-catalogue' className='footer-anim-link'>Digital Catalogues</a>
                                                        <a href='/Services/Loyalty' className='footer-anim-link'>Loyalty Engine</a>
                                                        <a href='/Services/Gamification' className='footer-anim-link'>Gamified Lead Generation</a>
                                                        <a href='/Services/Analytics' className='footer-anim-link'>AI Enabled Insights</a>
                                                        <a href='/Services/Whatsapp-Automation' className='footer-anim-link'>WhatsApp Business Automation</a>
                                                        
                                                        {/* <a href='#branding' className='footer-anim-link'>Branding</a> */}
                                                        {/* <a href='#development' className='footer-anim-link'>Development</a> */}
                                                </motion.div>
                                        </div>

                                        {/* Social & Connect Section */}
                                        <div className='footer-col footer-col3'>
                                                <motion.div
                                                        className='footer-title'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.2 }}
                                                >
                                                        Connect With Us
                                                </motion.div>
                                                <motion.div
                                                        className='footer-content'
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, delay: 0.3 }}
                                                >
                                                        <div className='social-links'>
                                                                <a href='https://x.com/contactsaudh' className='footer-anim-link social-link' target='_blank' rel='noopener noreferrer'>
                                                                        <span>Twitter</span>
                                                                </a>
                                                                <a href='https://www.facebook.com/profile.php?id=61550264025212' className='footer-anim-link social-link' target='_blank' rel='noopener noreferrer'>
                                                                        <span>Facebook</span>
                                                                </a>
                                                                <a href='https://www.instagram.com/saudh.ai/' className='footer-anim-link social-link' target='_blank' rel='noopener noreferrer'>
                                                                        <span>Instagram</span>
                                                                </a>
                                                                <a href='https://www.linkedin.com/company/saudh/?viewAsMember=true' className='footer-anim-link social-link' target='_blank' rel='noopener noreferrer'>
                                                                        <span>LinkedIn</span>
                                                                </a>
                                                                <a href='https://www.youtube.com/@saudh_india' className='footer-anim-link social-link' target='_blank' rel='noopener noreferrer'>
                                                                        <span>YouTube</span>
                                                                </a>
                                                        </div>
                                                </motion.div>
                                        </div>
                                </div>

                                {/* Footer Bottom */}
                                <motion.div
                                        className='footer-bottom'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                        <div className='footer-bottom-content'>
                                                <div className='footer-legal'>
                                                        <span className='footer-copyright'>© 2025 SAUDH. All rights reserved.</span>
                                                </div>
                                                <div className='footer-legal-links'>
                                                        <a href='#privacy' className='footer-anim-link'>Privacy Policy</a>
                                                        <a href='#terms' className='footer-anim-link'>Terms of Service</a>
                                                        <a href='#cookies' className='footer-anim-link'>Cookie Policy</a>
                                                </div>
                                        </div>
                                </motion.div>
                        </div>
                </footer>
        );
};

export default Footer;