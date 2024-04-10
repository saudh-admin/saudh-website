import React, { useRef, useState, useEffect } from 'react';
import './slider.scss';

const Sliderr = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll('img');
    images.forEach((img, index) => {
      if (index === currentIndex) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper">
      <div className="pagination">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-images">
          {[0, 1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={`image${index + 1}.webp`}
              alt={`Image ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliderr;