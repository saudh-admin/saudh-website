//Ai enabled analytics
// import { CATEGORIES } from '../../utils/constants';
import '../Branding/branding.scss';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import { motion } from 'framer-motion';
import FAQ from '../FAQ/faq';

import React from 'react';



const Dev = () => {

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
                                AI Enabled Analytics
                            </h1>
                            <p className="saudh-hero-desc">
                                Track, analyze, and optimize every customer interaction with AI-powered insights.
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
                                src="/AIenabled.webp.jpg"
                                alt="AI enabled Analytics"
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
                            Insights that Drive Growth.
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
                            {['Product/Service Popularity', 'Custom KPI Dashboard', 'Event & Campaign Performance', 'Automated Weekly Reports', 'Customer Sentiment via Feedback', 'Visitor Flow Heatmaps'].map((item, idx) => (
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
                        Most businesses know what they offer — but few know what works. In a sea of menus, offers, and footfall, crucial insights often slip away. What attracts customers? What do they ignore? Where do they lose interest?<br /><br />
                        Saudh Insights transforms data into clarity. Our AI-powered analytics track every catalogue interaction, offer redemption, scan pattern, and customer feedback — presented in intuitive dashboards. From time-of-day behavior to top-performing services, we help you make decisions backed by real signals.<br /><br />
                        Better data leads to smarter campaigns, faster optimizations, and more confident growth. With Saudh Insights, your business doesn't just run — it evolves intelligently.
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
            <FAQ page="analytics" />
            <Footer />

        </>

    );
}

export default Dev;


