//whatsapp automation
// import { CATEGORIES } from '../../utils/constants';
import '../Branding/branding.scss';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import React from 'react';
import { motion } from 'framer-motion';
import FAQ from '../FAQ/faq';

const Digital = () => {
        return (
                <>
                        <Navbar></Navbar>
                        <main className="saudh-main-bg">
                                {/* Hero Section - Two Column Layout */}
                                <motion.section
                                        className="saudh-hero-section"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                >
                                        <div className="saudh-flex-row">
                                                {/* Left: Text */}
                                                <motion.div
                                                        className="saudh-flex-half text-block"
                                                        initial={{ x: -50, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                >
                                                        <h1 className="saudh-hero-title">
                                                                Whatsapp Business Automation
                                                        </h1>
                                                        <p className="saudh-hero-desc">
                                                                Let stores capture leads, send offers, answer FAQs, and take orders—all through WhatsApp.
                                                        </p>
                                                </motion.div>
                                                {/* Right: Image */}
                                                <motion.div
                                                        className="saudh-flex-half"
                                                        initial={{ y: -50, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.8, delay: 0.4 }}
                                                >
                                                        <motion.img
                                                                src="/Whatsapp Automation.webp.jpg"
                                                                alt="Whatsapp Automation"
                                                                whileHover={{ scale: 1.05 }}
                                                                transition={{ type: 'spring', stiffness: 200 }}
                                                                style={{ maxWidth: '420px', width: '100%', height: 'auto', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                                                        />
                                                </motion.div>
                                        </div>
                                </motion.section>
                                {/* Main Content - Two Column Layout */}
                                <motion.section
                                        className="saudh-main-section"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                        {/* Left: Heading and Features */}
                                        <motion.div
                                                className="saudh-flex-half"
                                                initial={{ x: -40, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                        >
                                                <h2 className="saudh-main-title">
                                                        Conversations that Convert.
                                                </h2>
                                                <motion.ul
                                                        className="saudh-feature-list"
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true }}
                                                        variants={{
                                                                hidden: {},
                                                                visible: {
                                                                        transition: {
                                                                                staggerChildren: 0.15
                                                                        }
                                                                }
                                                        }}
                                                >
                                                        {['Product Enquiry Bots', 'Offer & Campaign Broadcasts', 'Auto Replies + FAQ Answers', 'Customer Tagging & Segmentation'].map((item, idx) => (
                                                                <motion.li
                                                                        key={item}
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                                                                >
                                                                        {item}
                                                                </motion.li>
                                                        ))}
                                                </motion.ul>
                                        </motion.div>
                                        {/* Right: Description */}
                                        <motion.div
                                                className="saudh-flex-half description-block"
                                                initial={{ x: 40, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                                Your customers live on WhatsApp — shouldn't your services be there too? From finding stores to exploring offers or booking services, people want quick, friendly answers on their preferred platforms.<br /><br />
                                                FlowChat by Saudh powers smart, automated conversations that convert. Whether capturing leads, answering product questions, or sending offers — everything happens seamlessly within WhatsApp. Built for speed, it serves industries from salons to food courts, spas to fashion outlets.<br /><br />
                                                In an era of shrinking attention spans, WhatsApp automation strengthens relationships, speeds up responses, and keeps your business top-of-mind — right in your customers' favorite chat app.
                                        </motion.div>
                                </motion.section>
                                <motion.div
                                        className='top-button'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                ><hr /> <motion.button whileHover={{ scale: 1.1 }}>Top!</motion.button></motion.div>
                                <motion.div
                                        className='contact-home'
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                        <h2>Have a project?</h2>
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
                        <FAQ page="digital" />
                        <Footer />
                </>
        );
}

export default Digital;



