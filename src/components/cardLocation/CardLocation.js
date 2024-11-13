import "./CardLocation.css";

const CardLocation = ({ type, imageUrl }) => {
  return (
    <div
      className="card-location"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="overlay">{type === "land" ? "LAND" : "WATER"}</div>
    </div>
  );
};

export default CardLocation;
