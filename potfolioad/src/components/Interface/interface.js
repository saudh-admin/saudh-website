import React from 'react';
import '../Branding/branding.scss';

const Interface = () => {
    return (
        <>

            <div className='service-branding'>
                <div className='service-heading-cat'>
                    <div className='service-heading-text-cat'>
                        Interface design
                    </div>
                    <div className="service-logo-service-cat">AD</div>
                    <div className='img-heading'>
                        <img src="interface.webp" alt="Branding"></img>
                        <div className='white-overlay'></div>
                        <div className='anim-circle'>
                            <div className='shape-circle dark' style={{ transform: 'translate(-80px, 15px) scale(0.7)' }}></div>
                            <div className='shape-center' style={{ transform: 'translate(-40px, -40px)' }}></div>
                            <div className='shape-circle light' style={{ transform: 'translate(-80px, -40px)' }}></div>
                        </div>
                    </div>
                    <div className='service-content-text-para'>
                        When it comes to designing websites and apps, the bar is set pretty high. People have come to expect a stunning user interface, dead-simple usability, and easy access to the tools they need, when they need them. Clever use of imagery, beautiful typography, and straightforward design are the name of the game if you want to resonate with today’s consumers.
                        Basically, your stuff needs to be awesome. And we only do awesome stuff.<br /><br />
                        We build digital experiences that get users exactly where they need to go, and make the journey a treat for the senses. Who are your users? What are their objectives? Answering these questions through feedback, testing, research, and intuition honed by experience, is vital to building a website or app that people love to use.
                    </div>
                </div>
                <div className='service-content-cat'>
                    <h1> It's really quite simple: Give your users what they want.</h1>
                    <div className='service-content-dropdown-cat interface'>
                        <div className="dropdown">
                            <h4>UX Strategy</h4>

                            <div className="dropdown-content">
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
                        <div className="dropdown">
                            <h4>UI Design</h4>

                            <div className="dropdown-content">
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

export default Interface
