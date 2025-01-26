import "./ActivitiesCard.css";

function ActivitesCard({ imageUrl, text, onClick, index }) {
  return (
    <div
      data-testid="activities-card" 
      className="activities-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        animationDelay: `${index * 0.2}s`,
      }}
      onClick={onClick}
    >
      <div className="activities-card-text">{text}</div>
    </div>
  );
}

export default ActivitesCard;
