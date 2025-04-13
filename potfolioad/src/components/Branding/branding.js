import React, { useState, useEffect } from 'react';
import './branding.scss';
import Navbar from '../Navbar/navbar';
import { FaChevronDown } from 'react-icons/fa';
import { CATEGORIES } from '../../utils/constants';

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
                    <div className="service-logo-service-cat">Saudh</div>
                </div>
                <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                        {CATEGORIES.MALL_IN_YOUR_POCKET}
                    </div>
                </div>
                    <div className='img-heading'>
                        <img src="/branding.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-65px, -32px)', width: `8rem`, height: `8rem` }}></div>
                            <div className='shape-center' style={{ width: `4rem`, height: `4rem` }}></div>
                            <div className='shape-circle light' style={{ transform: 'translate(-65px, -95px)', width: `8rem`, height: `8rem` }}></div>
                        </div>

                    </div>

                    <div className='service-content-layout'>
                        <div className='service-content-cat'>
                            <h1>Digitize the Entire Mall</h1>
                            <div className='service-content-dropdown-cat'>
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Floor-Wise Navigation</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Real-Time Promotions</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Amenities & Facility Map</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Analytics Dashboard for Admins</h4>
                                        </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                        <div className="dropdown-header">
                                                <h4>Food Court Menus</h4>
                                        </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className='service-content-text-para'>
                        Today's malls are physical powerhouses but digital deserts. Visitors arrive with expectations shaped by apps, speed, and personalization — only to encounter printed maps and scattered signage. In a world of instant access, the mall experience remains oddly disconnected. <br /><br />
                        MallOS transforms your property into an intuitive, QR-powered digital platform. From floor navigation to real-time offers, event listings to food menus — visitors access everything with a single tap, no app required. For mall management, it's a powerful backend system enabling smarter control, data-driven decisions, and seamless tenant coordination. <br /><br />
                        With MallOS, every mall becomes future-ready. Discovery becomes effortless. Promotions gain visibility. And customers return for an experience that's as smart as it is physical. <br /><br />
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

export default Branding;

