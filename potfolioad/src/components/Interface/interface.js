import '../Branding/branding.scss';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import { FaChevronDown } from 'react-icons/fa';
import { CATEGORIES } from '../../utils/constants';

const Interface = () => {

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
    
        serviceContentLayout.style.opacity = '0';
    
        setTimeout(() => {
            serviceLogoServiceCat.style.opacity = '1';
        }, 500);
    
        setTimeout(() => {
            serviceHeadingCat.style.transform = 'translateY(0)';
            imgHeading.style.opacity = '1';
            imgHeading.style.transform = 'translateY(0)';
            serviceLogoWrapper.style.clipPath = 'inset(0 0 calc(100% - 55vh) 0)'; 
        }, 2000);
    
        setTimeout(() => {
            serviceContentLayout.style.opacity = '1';
            serviceContentLayout.style.transition = 'opacity 1s ease';
        }, 3500);
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <main>
            <div className='service-branding'>
                <div className="service-logo-wrapper">
                    <div className="service-logo-service-cat">AD</div>
                </div>
                <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                       {CATEGORIES.DIGITAL_CATALOUGES}
                    </div>
                </div>
                    <div className='img-heading'>
                        <img src="/branding.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-65px, -25px)', width: `8rem`, height: `8rem`, scale:`0.9` }}></div>
                            <div className='shape-center' style={{ transform: 'translate(-30px, -80px)',width: `4rem`, height: `4rem` }}></div>
                            <div className='shape-circle light' style={{transform: 'translate(-50px, -55px)', width: `8rem`, height: `8rem`, scale:`1.2` }}></div>
                        </div>

                    </div>
                    

                    <div className='service-content-layout'>
                        <div className='service-content-cat'>
                            <h1>Make Discovery Digital</h1>
                            <div className='service-content-dropdown-cat'>
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>QR Code Menus & Product Lists</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Pricing & Availability Indicators</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Multilingual Support</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Brand Customization Options</h4>
                                        </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className='service-content-text-para'>
                        Printed menus and static product brochures age fast — and they cost time, money, and flexibility. Whether you're a salon updating services or a café introducing specials, paper can't keep up with how quickly your business evolves.<br /><br />
                            Digital Catalogues give restaurants, spas, salons, and retail stores a sleek, real-time way to present their offerings. With just a QR scan, customers can explore detailed menus, product images, pricing, and even customizations — all in their preferred language and without downloading an app. Updates happen instantly, so your catalogue always reflects what’s available now. <br /><br />
                            This isn’t just about going digital — it’s about creating a smoother, more informed customer journey. You reduce friction, increase conversions, and gain insights into what people browse the most. It’s the modern storefront your business deserves.
                        </div>
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
            </main>
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

    );
}

export default Interface;

