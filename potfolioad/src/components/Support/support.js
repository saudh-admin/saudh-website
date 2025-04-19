import '../Branding/branding.scss';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import { FaChevronDown } from 'react-icons/fa';
import { CATEGORIES } from '../../utils/constants';
import Footer from '../Footer/footer';

const Support = () => {

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
                       {CATEGORIES.GAMIFICATION}
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
                          <h1>Turn Attention into Action</h1>
                          <div className='service-content-dropdown-cat'>
                                  <div className="dropdown">
                                          <div className="dropdown-header">
                                                  <h4>Spin-the-Wheel Campaigns</h4>
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
                        Discounts are everywhere — but experiences stand out. In a crowded marketplace, giving customers a reason to engage can transform casual visits into loyal relationships.<br /><br />
                        SpinEngage by Saudh transforms promotions into fun, memorable games. Whether through Spin the Wheel, scratch cards, or time-limited streak bonuses — our gamification engine helps you reward interaction, drive footfall, and track engagement with real-time insights. <br /><br />
                        It's not just play — it's smart business. Higher interaction. More conversions. Better data. SpinEngage helps businesses deliver more than deals — it creates delight.
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

export default Support;

