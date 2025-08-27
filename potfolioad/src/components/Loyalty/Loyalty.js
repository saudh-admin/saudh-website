//loyalty engine
import { CATEGORIES } from '../../utils/constants';
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
                                                              Loyalty Program
                                                        </h1>
                                                        <p className="saudh-hero-desc">
                                                                Build lasting relationships with your customers through personalized rewards and engagement.
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
                                                                src="/loyalty.png"
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
                                                        Loyalty that Lasts.
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
                                                        {['Points-Based Reward System','Tiered Loyalty Programs','Customer Lifetime Value Tracking','Automated Birthday & Milestone Rewards'].map((item, idx) => (
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
                                                
                                                Loyalty isn’t bought — it’s built. Let’s build it better.
<br /><br />
Your best customers deserve more than just a “thank you.” With Saudh’s Loyalty Engine, you can reward them in ways that matter — from points-based perks to exclusive tiered benefits, all tailored to fit your brand and audience.
<br /><br />
Whether you're running a café, salon, fashion outlet, or fitness studio, our system is built to drive repeat business, grow customer lifetime value, and keep your brand top-of-mind.
<br /><br />
Smart rewards, seamless tracking, and powerful insights — all working together to turn first-time buyers into loyal brand advocates.
                                                    

                                                
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



