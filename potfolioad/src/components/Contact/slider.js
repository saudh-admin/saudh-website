import React, { useRef, useState, useEffect } from 'react';
import './slider.scss';

const Sliderr = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const images = carousel.querySelectorAll('.carousel-image');
    const imageWidth = carousel.offsetWidth / 3;
    const totalWidth = imageWidth * images.length;
    const maxTranslate = totalWidth - carousel.offsetWidth;
    const translate = currentIndex * imageWidth;

    carousel.style.transform = `translateX(-${translate}px)`;

    if (translate > maxTranslate) {
      carousel.style.transform = `translateX(-${maxTranslate}px)`;
    }
  }, [currentIndex]);

  const imageTitles = ['Ferrari Beverly Hills', 'Exer Urgent Care', 'Postie', 'Palm Springs Bureau Tourism'];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`carousel-image ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={`image${index + 1}.webp`} alt={`Image ${index + 1}`} />
              <div className="image-title">{imageTitles[index]}</div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliderr;