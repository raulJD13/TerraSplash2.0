import React, { useState } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { FaBookmark } from "react-icons/fa";
import "./PlaceCard.css";

function PlaceCard({ name, rating, imageUrl, onClick }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        i <= rating ? (
          <StarFilled key={i} style={{ color: "#FFD700" }} />
        ) : (
          <StarOutlined key={i} style={{ color: "#d3d3d3" }} />
        )
      );
    }
    return stars;
  };

  return (
    <div className="place-card" onClick={onClick}>
      <div className="place-card-left">
        <h3 className="place-name">{name}</h3>
        <div className="place-card-bottom">
          <div className="place-rating">{renderStars()}</div>
          <FaBookmark
            className={`bookmark-place-card-icon ${isBookmarked ? "selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); 
              toggleBookmark();
            }}
          />
        </div>
      </div>
      <div
        className="place-card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
}

export default PlaceCard;
