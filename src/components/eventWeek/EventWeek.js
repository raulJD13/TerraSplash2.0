import React from 'react';
import './EventWeek.css'; // Archivo CSS para estilos
import { FaBookmark, FaStar, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EventWeek = ({ image, name, location, price, rating, description }) => {
  const navigate = useNavigate();

  // Redirige a la página con más detalles del evento
  const handleMoreInfo = () => {
    navigate(`/event/${name.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="star-icon filled" />
        ) : (
          <FaRegStar key={i} className="star-icon" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-image" />
      <div className="event-info">
        <div className="event-header">
          <div>
            <h3 className="event-name">{name}</h3>
            <p className="event-location">{location}</p>
          </div>
          <FaBookmark className="bookmark-icon" />
        </div>
        <p className="event-description">{description}</p>
        <div className="event-footer">
          <div className="event-rating">{renderStars()}</div>
          <button className="more-info-button" onClick={handleMoreInfo}>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventWeek;
