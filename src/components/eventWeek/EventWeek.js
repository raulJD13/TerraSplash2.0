import React, { useState } from "react";
import "./EventWeek.css"; // Archivo CSS actualizado
import { FaBookmark, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventWeek = ({ image, name, location, price, rating, description }) => {
  const [isBookmarked, setIsBookmarked] = useState(false); // Estado para el ícono de bookmark
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(`/event/${name.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const toggleBookmark = (e) => {
    e.stopPropagation(); // Evitar que se active `handleMoreInfo` si se hace clic en el ícono
    setIsBookmarked((prev) => !prev);
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
      {/* Imagen con barra inferior para precio y ubicación */}
      <div className="event-image-container">
        <img src={image} alt={name} className="event-image" />
        <div className="event-overlay">
          <span className="event-location">{location}</span>
          <span className="event-price">€{price}</span>
        </div>
        {/* Bookmark con estado */}
        <FaBookmark
          className={`bookmark-event-week-icon ${isBookmarked ? "selected" : ""}`}
          onClick={toggleBookmark}
        />
      </div>

      {/* Información del evento */}
      <div className="event-info">
        <h3 className="event-name">{name}</h3>
        <div className="event-details">
          <div className="event-rating">{renderStars()}</div>
        </div>
        <p className="event-description">{description}</p>
        <button className="more-info-button" onClick={handleMoreInfo}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default EventWeek;
