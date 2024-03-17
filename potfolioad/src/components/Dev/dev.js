import React from 'react';
import Navbar from '../navbar/Navbar';
import '../Branding/branding.scss';

const Dev = () => {
  return (
    <>
            <Navbar />
            <div className='service-branding'>
                <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                    Development
                    </div>
                    <div className="service-logo-service-cat">AD</div>
                    <div className='img-heading'>
                        <img src="development.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-80px, -80px)' }}></div>
                            <div className='shape-center' style={{ transform: 'translate(-40px, 40px)' }}></div>
                            <div className='shape-circle light' style={{ transform: 'translate(-80px, 0px)' }}></div>
                        </div>
                    </div>
                    <div className='service-content-text-para'>
                    You can’t see it, but it’s there. The thousands of lines of code that are responsible for dynamically generating a user interface and channelling information into the palm of your customer's hand.<br /><br />
                    At AD, all of that magic is handled by some of the world’s most talented and dedicated engineers who work alongside our creative team to ensure that every detail, every interaction, and every workflow is implemented as carefully and thoughtfully as it was designed.<br /><br />
                    Our capabilities include all of the must-haves, like front-end/back-end dev, Javascript, CMS development in WordPress, Drupal, and Symphony, and eCommerce integrations. We also build custom web apps, SaaS products, and mobile apps for iOS and Android.
                    </div>
                </div>
                <div className='service-content-cat'>
                    <h1> What's under the hood is just as important as what you see on the surface.</h1>
                    <div className='service-content-dropdown-cat dev'>
                        <div className="dropdown">
                            <h4>Product Strategy</h4>

                           

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>iOS + Android Apps</h4>

                            

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>WordPress Dev</h4>

                           

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>E-Commerce</h4>

                            

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>SaaS Development</h4>

                           

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>Quality Assurance</h4>

                            

                        </div>
                        <hr />
                        <div className="dropdown">
                            <h4>Web Apps</h4>

                           

                        </div>
                       


                    </div>
                </div>
            </div>
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

export default Dev
