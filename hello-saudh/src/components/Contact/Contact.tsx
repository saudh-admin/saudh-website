import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b9ff2703-1f23-448a-b852-bdb83a31a402");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
      setEmail('');
      setMessage('');
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white pt-[70px]">
        <div className="contact-content flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Contact Form */}
          <div className="contact-form flex-1 order-2 lg:order-1">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ffd00a] focus:ring-2 focus:ring-[#ffd00a]/20 transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Business email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ffd00a] focus:ring-2 focus:ring-[#ffd00a]/20 transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="WhatsApp Contact Number"
                  required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ffd00a] focus:ring-2 focus:ring-[#ffd00a]/20 transition-all text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="form-group">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Please tell us a bit about your project.."
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#ffd00a] focus:ring-2 focus:ring-[#ffd00a]/20 transition-all text-gray-900 placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#ffd00a] text-gray-900 font-medium rounded-lg hover:bg-[#ffbd00] transition-colors duration-300 text-base sm:text-lg"
              >
                Send
              </button>

              {result && (
                <div className="form-result-message text-center py-3 px-4 bg-gray-100 rounded-lg text-gray-900 font-medium">
                  {result}
                </div>
              )}
            </form>
          </div>

          {/* Contact Title & Image */}
          <div className="contact-title flex-1 flex flex-col justify-center items-center text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 sm:mb-8 leading-tight tracking-wide px-2">
              Tell us about your goals, and we'll get back to you right away!
            </h1>
            <img
              src="/contact.webp"
              alt="Contact illustration"
              className="max-w-full h-auto rounded-lg w-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
