import React, { useState } from "react";
import "./ImageCard.css";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ route, imageUrl, name, rating, onBookmarkToggle }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route); // Navegar a la ruta proporcionada en el JSON
  };

  const toggleBookmark = (e) => {
    e.stopPropagation(); // Prevenir la propagación del clic
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    if (onBookmarkToggle) {
      onBookmarkToggle(route, newBookmarkState); // Actualizar el bookmark en el padre
    } else {
      console.error("onBookmarkToggle is not defined");
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="image-card" onClick={handleNavigate}>
      <img src={imageUrl} alt={name} className="image-card-img" />
      <div
        className={`bookmark-profile-icon ${isBookmarked ? "selected" : ""}`}
        onClick={toggleBookmark}
      >
        <FaBookmark />
      </div>
      <div className="image-info">
        <div className="image-name">{name}</div>
        <div className="image-rating">{renderStars()}</div>
      </div>
    </div>
  );
};

export default ImageCard;
