import { StarFilled, StarOutlined } from "@ant-design/icons";
import { FaBookmark } from "react-icons/fa";
import "./PlaceCard.css";

function PlaceCard({
  name,
  rating,
  imageUrl,
  onClick,
  isBookmarked,
  onToggleBookmark,
}) {
  const handleBookmarkClick = (e) => {
    e.stopPropagation(); 
    if (onToggleBookmark) {
      onToggleBookmark();
    }
  };

  return (
    <div className="place-card" onClick={onClick}>
      <div className="place-card-left">
        <h3 className="place-name">{name}</h3>
        <div className="place-card-bottom">
          <div className="place-rating">{renderStars(rating)}</div>
          <FaBookmark
            className={`bookmark-place-card-icon ${
              isBookmarked ? "selected" : ""
            }`}
            onClick={handleBookmarkClick}
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

function renderStars(rating) {
  const totalStars = 5;
  return Array.from({ length: totalStars }, (_, i) =>
    i < rating ? (
      <StarFilled key={i} style={{ color: "#FFD700" }} />
    ) : (
      <StarOutlined key={i} style={{ color: "#d3d3d3" }} />
    )
  );
}

export default PlaceCard;
