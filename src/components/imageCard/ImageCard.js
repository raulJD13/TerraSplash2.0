import "./ImageCard.css";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";

const ImageCard = ({ imageUrl, name, rating }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation(); 
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="image-card">
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
