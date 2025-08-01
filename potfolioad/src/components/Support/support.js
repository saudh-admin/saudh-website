//Gamification
import '../Branding/branding.scss';
import React from 'react';
import Navbar from '../Navbar/navbar';
// import { FaChevronDown } from 'react-icons/fa';
// import { CATEGORIES } from '../../utils/constants';
import Footer from '../Footer/footer';
import { motion } from 'framer-motion';

const Support = () => {

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
                                Gamification
                            </h1>
                            <p className="saudh-hero-desc">
                                Turn attention into action with interactive campaigns and rewards.
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
                                src="/Gamification.webp.jpg"
                                alt="Gamification"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 200 }}
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
                            Campaigns that Engage.
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
                            {['Spin-the-Wheel Campaigns', 'Offer & Campaign Broadcasts', 'Auto Replies + FAQ Answers', 'Customer Tagging & Segmentation'].map((item, idx) => (
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
                        Discounts are everywhere — but experiences stand out. In a crowded marketplace, giving customers a reason to engage can transform casual visits into loyal relationships.<br /><br />
                        SpinEngage by Saudh transforms promotions into fun, memorable games. Whether through Spin the Wheel, scratch cards, or time-limited streak bonuses — our gamification engine helps you reward interaction, drive footfall, and track engagement with real-time insights. <br /><br />
                        It's not just play — it's smart business. Higher interaction. More conversions. Better data. SpinEngage helps businesses deliver more than deals — it creates delight.
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
            <Footer />
        </>
    );
}

export default Support;

