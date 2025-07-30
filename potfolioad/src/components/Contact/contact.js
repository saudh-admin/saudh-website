import './contact.scss';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer'

const Contact = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [showImage, setShowImage] = useState(false);
  // const [showBackground, setShowBackground] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const serviceHeadinggRef = useRef(null);
  useEffect(() => {
    const serviceHeadinggElement = serviceHeadinggRef.current;
    if (serviceHeadinggElement) {
      serviceHeadinggElement.classList.add('service-headingg-curtain');
    }


    // setTimeout(() => {
    //   setShowImage(true);
    // }, 500);


    // setTimeout(() => {
    //   setShowBackground(true);
    // }, 800);
  }, []);
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b9ff2703-1f23-448a-b852-bdb83a31a402");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setTimeout(() => {
  //       setShowImage(true);
  //       // setTimeout(() => {
  //       //   setShowBackground(true);
  //       // }, 500);
  //     }, 500);
  //   }, 800);
  // }, []);

  return (
    <>
      <Navbar></Navbar>
      <main>
        {/* <div className="projects-heading">
        <div className={`proj-logo ${showImage ? 'show-image' : ''} ${showBackground ? 'show-background' : ''}`} ref={serviceHeadinggRef}>
                        <svg className={`proj-text ${window.location.pathname === '/Services' ? 'white-background' : window.location.pathname === '/contact' ? 'white-background' : window.location.pathname === '/projects' ? 'gray-background' : ''}`} viewBox="0 0 200 100">
                            <defs>
                                <clipPath id="text-clip">
                                    <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                        AD
                                    </text>
                                </clipPath>
                            </defs>
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle" fill="#fff" stroke="#ccc" strokeWidth="1">
                                AD
                            </text>
                            {showImage && (
                                <image className="proj-image" xlinkHref="marketing.webp" width="100%" height="100%" clipPath="url(#text-clip)" preserveAspectRatio="xMidYMid slice" />
                            )}
                        </svg>
                        {showBackground && (
                            <div className={`proj-background ${window.location.pathname === '/Services' ? 'green-background' : window.location.pathname === '/contact' ? 'blue-background' : window.location.pathname === '/projects' ? 'white-background' : ''}`}></div>
                        )}
                        <svg className="proj-outline" viewBox="0 0 200 100">
                            <text x="50%" y="100" fontSize="100" fontWeight="normal" textAnchor="middle">
                                AD
                            </text>
                        </svg>
                        <h2 className="projects-title">Let's build something awesome together.</h2>
                    </div>
        </div> */}
        <div className='contact-content'>
          <div className='contact-form'>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input type='text' id='name' name='name' placeholder='Your name' required />
              </div>

              <div className='form-group'>
                <input type='email' id='email' name='email' placeholder='Business email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>

              <div className='form-group'>
                <input type='tel' id='phone' name='phone' placeholder='WhatsApp Contact Number' required />
              </div>

              {/* <div className='form-group'>
                <div className='budget-container'>
                  <input type='text' id='budgetdiv' name='budgetdiv' placeholder='What is your budget?' required />
                  <select id='budget' name='budget' required>
                    <option value='' disabled selected>Select a price range</option>
                    <option value='under30k'>Under $30,000</option>
                    <option value='30k-50k'>$30,000 - $50,000</option>
                    <option value='50k-100k'>$50,000 - $100,000</option>
                    <option value='over100k'>$100,000+</option>
                    <option value='tbd'>TBD</option>
                  </select>
                </div>
              </div> */}

              {/* <div className='form-group'>
                <div className='budget-container'>
                  <label htmlFor='attachment' className='attach'>Any docs to attach?</label>
                  <input type='file' id='attachment' name='attachment' className='file-input' />
                  <label htmlFor='attachment' className='file-label'>Select a file</label>
                </div>
              </div> */}

              <div className='form-group'>
                <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} id='message' name='message' placeholder='Please tell us a bit about your project..' required></textarea>
              </div>

              <button type='submit'>Send</button>
              {result && (
                <div className="form-result-message">{result}</div>
              )}
            </form>
          </div>
          <div className='contact-title'>
            <h1>Tell us about your goals, and we'll get back to you right away!</h1>
            <img src='contact.webp' alt='not working'></img>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;