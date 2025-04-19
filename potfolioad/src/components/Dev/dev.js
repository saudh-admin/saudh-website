
import { CATEGORIES } from '../../utils/constants';
import '../Branding/branding.scss';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';


import React, { useState, useEffect } from 'react';




const Dev= () => {

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
                    {CATEGORIES.AI_ENABLED_ANALYTICS}
                    </div>
                </div>
                    <div className='img-heading'>
                        <img src="/branding.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-65px, -90px)', width: `8rem`, height: `8rem` }}></div>
                            <div className='shape-center' style={{ transform: 'translate(-32px, 0px)', width: `4rem`, height: `4rem` }}></div>
                            <div className='shape-circle light' style={{ transform: 'translate(-65px, -34px)', width: `8rem`, height: `8rem` }}></div>
                        </div>

                    </div>

                    <div className='service-content-layout'>
                        <div className='service-content-cat'>
                            <h1>Make Discovery Digital.</h1>
                            <div className='service-content-dropdown-cat'>
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Product/Service Popularity</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Custom KPI Dashboard</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Event & Campaign Performance</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Automated Weekly Reports</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Customer Sentiment via Feedback</h4>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown">
                                    <div className="dropdown-header">
                                        <h4>Visitor Flow Heatmaps</h4>
                                    </div>
                                </div>
                                <hr />
                                
                               
                                
                                
                            </div>
                        </div>
                        <div className='service-content-text-para'>
                        Most businesses know what they offer — but few know what works. In a sea of menus, offers, and footfall, crucial insights often slip away. What attracts customers? What do they ignore? Where do they lose interest?<br /><br />
                        Saudh Insights transforms data into clarity. Our AI-powered analytics track every catalogue interaction, offer redemption, scan pattern, and customer feedback — presented in intuitive dashboards. From time-of-day behavior to top-performing services, we help you make decisions backed by real signals.<br /><br />
                        Better data leads to smarter campaigns, faster optimizations, and more confident growth. With Saudh Insights, your business doesn't just run — it evolves intelligently.
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

export default Dev;


