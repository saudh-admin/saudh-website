import React, { useRef, useState, useEffect } from 'react';
import './slider.scss';

const Sliderr = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const stopDragging = () => {
    isDragging = false;
  };

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll('img');
    const activeImage = images[currentIndex];
    const prevImage = images[currentIndex - 1];
    const nextImage = images[currentIndex + 1];

    images.forEach((img) => img.classList.remove('active', 'prev', 'next'));
    activeImage.classList.add('active');
    prevImage?.classList.add('prev');
    nextImage?.classList.add('next');

    const carouselWidth = carouselRef.current.clientWidth;
    const activeImageWidth = activeImage.clientWidth;
    const activeImageOffset = activeImage.offsetLeft;

    let scrollLeft;
    if (currentIndex === 0) {
      scrollLeft = 0;
    } else if (currentIndex === images.length - 1) {
      scrollLeft = activeImageOffset;
    } else {
      scrollLeft = activeImageOffset - (carouselWidth - activeImageWidth) / 2;
    }

    carouselRef.current.scrollLeft = scrollLeft;
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper">
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
      <div className="pagination">
        {[0, 1, 2, 3, 4].map((index) => (
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