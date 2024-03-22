import Navbar from '../navbar/Navbar';
import './us.scss';

const Us = () => {
    return <>
        <Navbar />
        <div className='us-ad-bg' >
            AD
        </div>
        <h1 className='us-ad-title'>
            We're just like a digital agency, but without all the bull$#it.
        </h1>
        <div className='us-photo-cont'>
            <img className='us-homeimg' src='/about.webp' alt='not workingg'></img>
        </div>
        <div className='us-content'>
            <div className='us-content-para'>
                <div className='us-content-circle'></div>
                <div className='us-content-para-text'>
                    We work with a wide range of clients across numerous verticals, from innovative startups to global enterprises. Whether it’s a corporate website that needs to be revamped or a hot new product launch, we like getting our hands dirty with clients that know what results they want and trust us to lead the way.
                </div>
            </div>
            <div className='us-content-title'>
                <h1>When you partner with AD, you get an all-star team with the knowledge and expertise to get your project moving quickly.</h1>
            </div>
        </div>
        <div className='us-para'>
            <img src='/about2.webp' alt='not working'></img>
            <h2>And We Mean It: No BS
            </h2>

            <h5>Our goal is to add value without adding a bunch of unnecessary "process" onto your plate. We know that you and your team have a lot going on already, so we’ve fine-tuned our approach to ensure that working with us is as efficient, fun, and painless as possible.<br /><br />

                With years of experience tackling countless digital projects, we've learned how to see around corners, eliminate costly mistakes before they occur, and deliver the results you're after — while you get to enjoy the ride.</h5>
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
}

export default Us