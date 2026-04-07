import { useState, useEffect } from 'react';
import '../styles/Carousel.css';

export default function Carousel({ images, title, autoPlay = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="carousel-container">
      {title && <h2 className="carousel-title">{title}</h2>}
      
      <div className="carousel-wrapper">
        <div className="carousel-main">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
          
          {images[currentIndex].caption && (
            <div className="carousel-caption">
              <p>{images[currentIndex].caption}</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-btn prev-btn" onClick={prevSlide} title="Previous">
          ❮
        </button>
        <button className="carousel-btn next-btn" onClick={nextSlide} title="Next">
          ❯
        </button>

        {/* Play/Pause Button */}
        <button
          className="carousel-play-btn"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          title={isAutoPlay ? 'Pause' : 'Play'}
        >
          {isAutoPlay ? '⏸' : '▶'}
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            title={image.alt}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
