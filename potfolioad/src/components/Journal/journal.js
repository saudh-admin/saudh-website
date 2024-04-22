import React from 'react';
import './journal.scss';

const Journal = () => {
  return (
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
  );
};

export default Journal;