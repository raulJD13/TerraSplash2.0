import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        {"<"}
      </button>
      <div className="carousel-content">
        {children.map((child, index) => (
          <div
            className={`carousel-item ${
              index === currentIndex ? "active" : "inactive"
            }`}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
