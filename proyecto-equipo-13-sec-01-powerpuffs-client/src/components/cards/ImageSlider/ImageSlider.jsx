import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  { url: 'https://placekitten.com/600/400', name: 'Cat 1' },
  { url: 'https://placekitten.com/601/400', name: 'Cat 2' },
  { url: 'https://placekitten.com/602/400', name: 'Cat 3' },
  { url: 'https://placekitten.com/603/400', name: 'Cat 4' },
  { url: 'https://placekitten.com/604/400', name: 'Cat 5' },
  { url: 'https://placekitten.com/605/400', name: 'Cat 6' },
  { url: 'https://placekitten.com/606/400', name: 'Cat 7' },
  { url: 'https://placekitten.com/607/400', name: 'Cat 8' },
  // Add more image URLs and names as needed
];

const ArrowButton = ({ direction, onClick }) => (
  <button className={`arrow-button ${direction}`} onClick={onClick}>
    <span>&#8594;</span>
  </button>
);

const ImageSlider = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [showOneImage, setShowOneImage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowOneImage(window.innerWidth < 600);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup + 1) % Math.ceil(images.length / (showOneImage ? 1 : 4)));
  };

  const prevGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup - 1 + Math.ceil(images.length / (showOneImage ? 1 : 4))) % Math.ceil(images.length / (showOneImage ? 1 : 4)));
  };

  const startIndex = currentGroup * (showOneImage ? 1 : 4);
  const endIndex = startIndex + (showOneImage ? 1 : 4);
  const currentImages = images.slice(startIndex, endIndex);

  return (
    <div className="image-slider">
      <ArrowButton direction="prev" onClick={prevGroup} />
      <div className={`slider-group ${showOneImage ? 'single-image' : ''}`}>
        {currentImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.url} alt={`Slide ${index + 1}`} />
            <div className="image-label">{image.name}</div>
          </div>
        ))}
      </div>
      <ArrowButton direction="next" onClick={nextGroup} />
    </div>
  );
};

export default ImageSlider;
