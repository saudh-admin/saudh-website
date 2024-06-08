import '../Branding/branding.scss';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import { FaChevronDown } from 'react-icons/fa';

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
                       Interface Design
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
                            <h1>It's really quite simple: Give your users what they want.</h1>
                            <div className='service-content-dropdown-cat'>
                                <div className="dropdown" onClick={() => toggleDropdown(1)}>
                                    <div className="dropdown-header">
                                        <FaChevronDown className="dropdown-icon" />
                                        <h4>UX Strategy</h4>
                                    </div>
                                    <div className={`dropdown-content ${activeDropdowns[1] ? 'active' : ''}`}>
                                    <h5>- User Research</h5>
                                <h5>- Competitor Analysis</h5>
                                <h5>- Value Proposition</h5>
                                <h5>- Product Vision and Roadmap</h5>
                                <h5>- Persona Development</h5>
                                <h5>- Journey Mapping</h5>
                                <h5>- Usability and Accessibility</h5>
                                <h5>- Stakeholder Engagement</h5>
                                <h5>- Metrics and Analytics</h5>
                                <h5>- Prototyping and Validation</h5>
                                    </div>
                                </div>
                                <hr />
                                <div className="dropdown" onClick={() => toggleDropdown(2)}>
                                    <div className="dropdown-header">
                                        <FaChevronDown className="dropdown-icon" />
                                        <h4>UI Design</h4>
                                    </div>
                                    <div className={`dropdown-content ${activeDropdowns[2] ? 'active' : ''}`}>
                                    <h5>- Website Design</h5>
                                <h5>- Visual Design</h5>
                                <h5>- Interaction Design</h5>
                                <h5>- User Experience(UX) Alignment</h5>
                                <h5>- Consistency and Branding</h5>
                                <h5>- Responsiveness and Adaptability</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='service-content-text-para'>
                            People form habits around what makes them feel good. It could be pleasure, it could be responsibility, integrity, value, or prudence. Your brand is a powerful vehicle packed full of positive reinforcement.<br /><br />
                            Your brand is also <b>you</b>. All of you — the founders, the architects, the daily contributors. Everything that has been put into a venture, by every individual. <br /><br />
                            The first step to branding is understanding what you're all about. "Who" is your business? And what ecosystem of users, competitors, or partners does it inhabit? <br /><br />
                            Once we understand your world, we bring you into ours. How can you consistently communicate the singular vision of your company, at just a glance? Well, that's where we come in.
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

