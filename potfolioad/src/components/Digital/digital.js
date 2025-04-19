
import { CATEGORIES } from '../../utils/constants';
import '../Branding/branding.scss';
import Footer from '../Footer/footer';
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
                                                        {CATEGORIES.WHATSAPP_AUTOMATION}
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
                                                        <h1>Conversations that Convert.</h1>
                                                        <div className='service-content-dropdown-cat'>
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Product Enquiry Bots</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Offer & Campaign Broadcasts</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Auto Replies + FAQ Answers</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                                <div className="dropdown">
                                                                        <div className="dropdown-header">
                                                                                <h4>Customer Tagging & Segmentation</h4>
                                                                        </div>
                                                                </div>
                                                                <hr />
                                                        </div>
                                                </div>
                                                <div className='service-content-text-para'>
                                                Your customers live on WhatsApp — shouldn't your services be there too? From finding stores to exploring offers or booking services, people want quick, friendly answers on their preferred platforms.<br /><br />
                                                FlowChat by Saudh powers smart, automated conversations that convert. Whether capturing leads, answering product questions, or sending offers — everything happens seamlessly within WhatsApp. Built for speed, it serves industries from salons to food courts, spas to fashion outlets.<br /><br />
                                                In an era of shrinking attention spans, WhatsApp automation strengthens relationships, speeds up responses, and keeps your business top-of-mind — right in your customers' favorite chat app.
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
                        <Footer />
                </>

        );
}

export default Digital;



