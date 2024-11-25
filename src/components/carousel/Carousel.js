import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
    setIsManual(true);
  }, [children.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
    setIsManual(true);
  }, [children.length]);

  useEffect(() => {
    if (isManual) return; // Si es manual, no activar el temporizador automático
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, children.length, isManual]);

  useEffect(() => {
    if (isManual) {
      // Desactiva el modo manual después de un tiempo para que el temporizador vuelva
      const manualTimeout = setTimeout(() => setIsManual(false), 5000);
      return () => clearTimeout(manualTimeout);
    }
  }, [isManual]);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        {"<"}
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div className="carousel-item" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
