import "./CardLocation.css";

const CardLocation = ({ type, imageUrl ,onClick}) => {
  return (
    <div
      className="card-location"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
    >
      <div className="overlay">{type === "land" ? "LAND" : "WATER"}</div>
    </div>
  );
};

export default CardLocation;
