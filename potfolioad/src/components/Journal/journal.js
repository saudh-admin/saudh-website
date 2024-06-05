import React, { useState, useEffect, useRef } from 'react';
import './journal.scss';
import Navbar from '../Navbar/navbar';

const Journal = () => {
  const footerRef = useRef(null);
  return (
    <>
    <Navbar></Navbar>
    <div className="journal-container">
      <h1 className="journal-heading">Journal</h1>
      <div className="journal-grid">
        <div className="journal-item empty"></div>
        <div className="journal-item">
          <div className="journal-item-content">
            <img src="branding.webp" alt="Image 1" />
            <div className="journal-item-text">
              <h2>Is it Time for a Logo Redesign?</h2>
            </div>
          </div>
        </div>
        <div className="journal-item">
          <div className="journal-item-content">
            <img src="contact.webp" alt="Image 2" />
            <div className="journal-item-text">
              <h2>Three Branding Questions For Growing Businesses</h2>
            </div>
          </div>
        </div>
        <div className="journal-item empty"></div>
        <div className="journal-item empty"></div>
        <div className="journal-item">
          <div className="journal-item-content">
            <img src="marketing.webp" alt="Image 3" />
            <div className="journal-item-text">
              <h2>Building Deeper Connections With a Content Strategy</h2>
            </div>
          </div>
        </div>
        <div className="journal-item">
          <div className="journal-item-content">
            <img src="dev.webp" alt="Image 4" />
            <div className="journal-item-text">
              <h2>The Power of Storytelling in Marketing</h2>
            </div>
          </div>
        </div>
        <div className="journal-item empty"></div>
      </div>
    </div>
    <div className="top-button">
            <hr /> <button>Top!</button>
          </div>
          <div className="contact-home">
            <h2>Have a project?</h2>
            <h2>Let's talk.</h2>
            <div className="contact-action">
              <div className="contact-action-circle"></div>
              <div className="contact-action-word">Contact</div>
            </div>
          </div>
        
      <footer ref={footerRef} class="hero-footer">
        <div class="footer-col footer-col1">
          <div class="footer-title">Reach us</div>
          <div class="footer-content">abc@gmail.com</div>
        </div>
        <div class="footer-col footer-col2">
          <div class="footer-title">Follow us</div>
          <div class="footer-content">
            <a href="" class="footer-nav">
              Twitter
            </a>
            <a href="" class="footer-nav">
              Facebook
            </a>
            <a href="" class="footer-nav">
              Instagram
            </a>
            <a href="" class="footer-nav">
              LinkedIn
            </a>
          </div>
        </div>
        <div class="footer-col footer-col3">
          <div class="footer-title">Legal Stuff</div>
          <div class="footer-content">@AD</div>
        </div>
        <div class="footer-col footer-col4">
          <div class="subscribe-title">
            INSPIRATION AND INNOVATION COME IN SHORT SUPPLY. GET A REFUEL ON US,
            DIRECT TO YOUR INBOX.
          </div>
          <div class="subscribe-box">
            <h4>Enter your email</h4>
            <h5>Subscribe</h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Journal;