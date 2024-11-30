import { StarFilled, StarOutlined } from "@ant-design/icons";
import { FaBookmark } from "react-icons/fa";
import "./PlaceCard.css";


import "./PlaceCard.css";

function PlaceCard({ name, rating, imageUrl, onClick, index, isBookmarked, onToggleBookmark }) {
  return (
    <div
      className="place-card"
      onClick={onClick}
      style={{
        animationDelay: `${index * 0.2}s`, // Retraso dinámico
      }}
    >
      <div className="place-card-left">
        <h3 className="place-name">{name}</h3>
        <div className="place-card-bottom">
          <div className="place-rating">{renderStars(rating)}</div>
          <FaBookmark
            className={`bookmark-place-card-icon ${isBookmarked ? "selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(); // Actualiza el estado en el componente padre
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

// Función auxiliar para renderizar estrellas
function renderStars(rating) {
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
}


export default PlaceCard;
