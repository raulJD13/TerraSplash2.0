import "./ActivitiesCard.css";

function ActivitesCard({ imageUrl, text, onClick, index }) {
  return (
    <div
      className="activities-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        animationDelay: `${index * 0.2}s`, // Retraso dinámico (0.2s entre tarjetas)
      }}
      onClick={onClick}
    >
      <div className="activities-card-text">{text}</div>
    </div>
  );
}

export default ActivitesCard;
