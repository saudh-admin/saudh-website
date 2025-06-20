import React from "react";
const Footer = () => {
        return (<footer class='hero-footer'>
                <div class='footer-col footer-col1'>
                        <div class='footer-title'>Contact us</div>
                        <div class='footer-content'>
                                <a href="mailto:rounak@saudh.com" className="footer-anim-email">rounak@saudh.com</a>
                        </div>
                        <div class='footer-content'>
                                <a href="tel:9234441398" className="footer-anim-phone">9234441398</a>
                        </div>
                </div>
                <div class='footer-col footer-col2'>
                        <div class='footer-title'>Follow us</div>
                        <div class='footer-content'>
                                <a href='https://x.com/contactsaudh' className='footer-anim-twitter' target='_blank' rel='noopener noreferrer'>Twitter</a>
                                <a href='https://www.facebook.com/profile.php?id=61550264025212' className='footer-anim-link' target='_blank' rel='noopener noreferrer'>Facebook</a>
                                <a href='https://www.instagram.com/saudh.ai/' className='footer-anim-link' target='_blank' rel='noopener noreferrer'>Instagram</a>
                                <a href='https://www.linkedin.com/company/saudh/?viewAsMember=true' className='footer-anim-link' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                                <a href='https://www.youtube.com/@saudh_india' className='footer-anim-link' target='_blank' rel='noopener noreferrer'>YouTube</a>
                        </div>
                </div>
                <div class='footer-col footer-col3'>
                        <div class='footer-title'>Legal Stuff</div>
                        <div class='footer-content'><span className='footer-anim-link'>@SAUDH</span></div>
                </div>
                {/* <div class='footer-col footer-col4'>
                <div class='subscribe-title'>INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US, DIRECT TO YOUR INBOX.</div>
                <div class='subscribe-box'>
                        <h4>Enter your email</h4>
                        <h5>Subscribe</h5>
                </div>
        </div> */}
        </footer>)
}

export default Footer;