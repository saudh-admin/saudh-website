//digital catalogue
import '../Branding/branding.scss';
import React from 'react';
import Navbar from '../Navbar/navbar';
// import { FaChevronDown } from 'react-icons/fa';
// import { CATEGORIES } from '../../utils/constants';
import Footer from '../Footer/footer';
import { motion } from 'framer-motion';

const Interface = () => {

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
                                Digital Catalogue
                            </h1>
                            <p className="saudh-hero-desc">
                                Instantly update menus, product lists, and more—no printing required.
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
                                src="/Digital Catalogue.webp.jpg"
                                alt="Digital Catalogue"
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
                            Make Discovery Digital
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
                            {['QR Code Menus & Product Lists', 'Pricing & Availability Indicators', 'Multilingual Support', 'Brand Customization Options'].map((item, idx) => (
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
                        Printed menus and static product brochures age fast — and they cost time, money, and flexibility. Whether you're a salon updating services or a café introducing specials, paper can't keep up with how quickly your business evolves.<br /><br />
                        Digital Catalogues give restaurants, spas, salons, and retail stores a sleek, real-time way to present their offerings. With just a QR scan, customers can explore detailed menus, product images, pricing, and even customizations — all in their preferred language and without downloading an app. Updates happen instantly, so your catalogue always reflects what's available now. <br /><br />
                        This isn't just about going digital — it's about creating a smoother, more informed customer journey. You reduce friction, increase conversions, and gain insights into what people browse the most. It's the modern storefront your business deserves.
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

export default Interface;

