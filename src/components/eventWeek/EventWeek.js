import React from 'react';
import './EventWeek.css'; // Archivo CSS para estilos
import { FaBookmark } from 'react-icons/fa';

const EventWeek = ({ image, name, location, price }) => {
  return (
    <div className="event-card">
      <img src={image} alt={name} className="event-image" />
      <div className="event-info">
        <div className="event-name-price">
          <div className="event-name">{name}</div>
          <div className="event-price">€{price}</div>
        </div>
        <FaBookmark className="bookmark-icon" />
      </div>
    </div>
  );
};

export default EventWeek;
