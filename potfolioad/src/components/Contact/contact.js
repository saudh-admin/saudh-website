import './contact.scss';
import Navbar from '../navbar/Navbar';
import Sliderr from './slider';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='service-heading'>
                <div className='service-heading-text'>
                    Let's build something awesome together.
                </div>
                <div className="service-logo-service">AD</div>
            </div>
            <div className='contact-content'>
                <div className='contact-form'>
                    <form>
                        <div className='form-group'>
                            <input type='text' id='name' name='name' placeholder='Your name' required />
                        </div>

                        <div className='form-group'>
                            <input type='email' id='email' name='email' placeholder='Work email' required />
                        </div>

                        <div className='form-group'>
                            <input type='tel' id='phone' name='phone' placeholder='Phone' required />
                        </div>

                        <div className='form-group'>
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
                        </div>

                        <div className='form-group'>
                            <div className='budget-container'>
                                <label htmlFor='attachment' className='attach'>Any docs to attach?</label>
                                <input type='file' id='attachment' name='attachment' className='file-input' />
                                <label htmlFor='attachment' className='file-label'>Select a file</label>
                            </div>
                        </div>

                        <div className='form-group'>
                            <textarea id='message' name='message' placeholder='Please tell us a bit about your project..' required></textarea>
                        </div>

                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='contact-title'>
                    <h1>Tell us about your goals, and we'll get back to you right away!</h1>
                    <img src='contact.webp' alt='not working'></img>
                </div>
            </div>
            <Sliderr />
        </>
    );
};

export default Contact;