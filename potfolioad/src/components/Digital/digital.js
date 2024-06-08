
import '../Branding/branding.scss';
import Navbar from '../Navbar/navbar';


import React, { useState, useEffect } from 'react';




const Digital = () => {

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
                                                        Digital Marketing
                                                </div>
                                        </div>
                                        <div className='img-heading'>
                                                <img src="/branding.webp" alt="Branding"></img>
                                                <div className='white-overlay'></div>
                                                <div className='anim-circle'>
                                                        <div className='shape-circle dark' style={{ transform: 'translate(-50px, -50px)', width: `8rem`, height: `8rem`, scale:`1.3` }}></div>
                                                        <div className='shape-center' style={{ transform: 'translate(-32px, 20px)', width: `4rem`, height: `4rem` }}></div>
                                                        <div className='shape-circle light' style={{ transform: 'translate(-70px, -42px)', width: `8rem`, height: `8rem`, scale:`0.9` }}></div>
                                                </div>

                                        </div>

                                        <div className='service-content-layout'>
                                                <div className='service-content-cat'>
                                                        <h1>Putting your brand in front of the right people at the right time to spark long-lasting connections.</h1>
                                                        <div className='service-content-dropdown-cat'>
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Digital Marketing Campaigns</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Social Media Ads</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Social Media Management</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>SEO</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Targeted Social Media Campaigns</h4>
                                                                        </div>
                                                                </div>
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Search Engine Advertising</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Display Ads & Re-marketing</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>E-Mail & Automation</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Performance Tracking</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Aspirational Marketing</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />



                                                        </div>
                                                </div>
                                                <div className='service-content-text-para'>
                                                        Digital Marketing is a form of modern alchemy starting with capturing attention, distilling that attention into trust, and transforming trust into profit.<br /><br />
                                                        We tailor our digital marketing strategies to help you cut through the noise and attract the right customers for your brand. Our approach involves continual refinement and ongoing enhancements to optimize ROI and help you reach your goals. Our results are proven with custom performance tracking reports that provide KPIs at a glance.<br /><br />
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

export default Digital;



