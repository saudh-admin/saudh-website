import React, { useRef, useState, useEffect } from 'react';
import './slider.scss';

const Sliderr = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const images = carousel.querySelectorAll('.carousel-image');
    const totalWidth = carousel.offsetWidth;
    const imageWidth = totalWidth / 3.5; 
    const translate = currentIndex * (imageWidth + 20);

    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.transform = 'scale(1.2)';
      } else {
        image.style.transform = 'scale(1)';
      }
    });

    carousel.style.transform = `translateX(-${translate}px)`;
  }, [currentIndex]);

  const imageTitles = ['Ferrari Beverly Hills', 'Exer Urgent Care', 'Postie', 'Palm Springs Bureau Tourism', 'Exer Urgent Care', 'Postie', 'Palm Springs Bureau Tourism'];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {[null, ...imageTitles].map((title, index) => (
            <div
              key={index}
              className={`carousel-image ${currentIndex === index - 1 ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index - 1)}
            >
              {title && (
                <>
                  <img src={`image${index}.webp`} alt={`Image ${index}`} />
                  <div className="image-title">{title}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Sliderr;