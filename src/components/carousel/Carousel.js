import React from 'react';
import Slider from 'react-slick';
import { FaHeart, FaStar } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="carousel-container">
      {images.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img src={image.src} alt={image.name} className="carousel-image" />
          <FaHeart className="heart-icon" />
          <div className="image-info">
            <div className="image-name">{image.name}</div>
            <div className="image-rating">
              {[...Array(5)].map((star, i) => (
                <FaStar
                  key={i}
                  className={i < image.rating ? 'star-filled' : 'star-empty'}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
