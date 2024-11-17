import "./ActivitiesCard.css";

function ActivitesCard({ imageUrl, text }) {
  return (
    <div className="activities-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="activities-card-text">{text}</div>
    </div>
  );
}

export default ActivitesCard;
