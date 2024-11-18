import "./ActivitiesCard.css";

function ActivitesCard({ imageUrl, text, onClick }) {
  return (
    <div
      className="activities-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
    >
      <div className="activities-card-text">{text}</div>
    </div>
  );
}

export default ActivitesCard;
