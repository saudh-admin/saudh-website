import React from 'react';
import Navbar from '../Navbar/navbar';
import '../Branding/branding.scss';

const Digital = () => {
return (
    <>
        <Navbar></Navbar>
        <main>
    <div className='service-branding'>
            <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                    Digital Marketing
                    </div>
                    <div className="service-logo-service-cat">AD</div>
                    <div className='img-heading'>
                            <img src="development.webp" alt="Branding"></img>
                            <div className='white-overlay'></div>
                            <div className='anim-circle'>
                                    <div className='shape-circle dark' style={{ transform: 'translate(-80px, -40px)' }}></div>
                                    <div className='shape-center' style={{ transform: 'translate(-40px, 40px)' }}></div>
                                    <div className='shape-circle light' style={{ transform: 'translate(-80px, -25px) scale(0.8)' }}></div>
                            </div>
                    </div>
                    <div className='service-content-text-para'>
                    Digital Marketing is a form of modern alchemy starting with capturing attention, distilling that attention into trust, and transforming trust into profit.<br /><br />
                    We tailor our digital marketing strategies to help you cut through the noise and attract the right customers for your brand. Our approach involves continual refinement and ongoing enhancements to optimize ROI and help you reach your goals. Our results are proven with custom performance tracking reports that provide KPIs at a glance.<br /><br />
 
                    </div>
            </div>
            <div className='service-content-cat'>
                    <h1> Putting your brand in front of the right people at the right time to spark long-lasting connections.</h1>
                    <div className='service-content-dropdown-cat '>
                            <div className="dropdown">
                                    <h4>Targeted Social Media Campaigns</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Search Engine Advertising</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Display Ads & Re-marketing</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Digital Marketing Campaigns</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Social Media Ads</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Social Media Management</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>SEO</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>E-Mail & Automation</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Performance Tracking</h4>

                                    

                            </div>
                            <hr />
                            <div className="dropdown">
                                    <h4>Aspirational Marketing</h4>

                                    

                            </div>
                         


                    </div>
            </div>
    </div>
    </main>
    <div className='contact-footer'>
            <div className='top-button'><hr /> <button>Top!</button></div>
            <div className='contact-home'>
                    <h2>Have a project?</h2>
                    <h2>Let's talk.</h2>
                    <div className='contact-action'>
                            <div className='contact-action-circle'></div>
                            <div className='contact-action-word'>Contact</div>
                    </div>
            </div>
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
    </div>

</>
)
}

export default Digital
