import { useState } from "react";
import "./EventWeek.css";
import { FaBookmark, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventWeek = ({
  id,
  image,
  name,
  location,
  price,
  rating,
  description,
  route,
  isBookmarked: initialBookmark,
  onBookmarkToggle,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmark);
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    navigate(route); 
  };

  const toggleBookmark = (e) => {
    e.stopPropagation(); 
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    if (onBookmarkToggle) {
      onBookmarkToggle(id, newBookmarkState); 
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => 
      i < rating ? <FaStar key={i} className="star-icon filled" /> : <FaRegStar key={i} className="star-icon" />
    );
  };

  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={image} alt={name} className="event-image" />
        <div className="event-overlay">
          <span className="event-location">{location}</span>
          <span className="event-price">€{price}</span>
        </div>
        <FaBookmark
          className={`bookmark-event-week-icon ${
            isBookmarked ? "selected" : ""
          }`}
          onClick={toggleBookmark}
        />
      </div>
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
