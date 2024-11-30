import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import Map from "../../components/map/Map";
import CommentsSection from "../../components/commentsSection/CommentsSection";
import data from "../../data/activities.json";
import "./ActivityPage.css";

const ActivityPage = () => {
  const { type, sport, activity } = useParams();

  // Encuentra el deporte y la actividad correspondiente
  const sportData = data.sports?.find(
    (s) => s.type === type && s.name.toLowerCase() === sport?.toLowerCase()
  );

  const activityData = sportData?.activities?.find((a) =>
    a.route.endsWith(activity)
  );

  // Estados iniciales (definidos siempre, aunque no se encuentren datos)
  const [isFavourite, setIsFavourite] = useState(activityData?.favourite || false);
  const [isJoined, setIsJoined] = useState(activityData?.joined || false);

  if (!sportData) {
    return <p>Sport not found!</p>;
  }

  if (!activityData) {
    return <p>Activity not found!</p>;
  }

  const { details } = activityData;

  const handleFavouriteClick = () => {
    const newValue = !isFavourite;
    setIsFavourite(newValue);
    activityData.favourite = newValue; // Actualiza localmente
  };

  const handleJoinClick = () => {
    const newValue = !isJoined;
    setIsJoined(newValue);
    activityData.joined = newValue; // Actualiza localmente
  };

  return (
    <>
      <Header />
      <div className="activity-container">
        <div className="activity-title-container">
          <Title text={activityData.name} />
        </div>
        <div className="activity-details">
          <div className="activity-info">
            <p>
              <strong>Location:</strong> {details.location}
            </p>
            <p>
              <strong>Difficulty:</strong> {details.difficulty}
            </p>
            <p>
              <strong>Distance:</strong> {details.distance}
            </p>
            <p>
              <strong>Availability:</strong> {details.availability}
            </p>
          </div>
          <img
            src={activityData.image}
            alt={activityData.name}
            className="activity-image"
          />
        </div>
        <div className="activity-description">
          <p>{details.description}</p>
        </div>
        <div className="action-section">
          <div className="favourite-section">
            <button
              className={`favourite-button ${isFavourite ? "favourited" : ""}`}
              onClick={handleFavouriteClick}
            >
              {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
            </button>
          </div>
          <div className="join-section">
            <button
              className={`join-button ${isJoined ? "joined" : ""}`}
              onClick={handleJoinClick}
            >
              {isJoined ? "Leave" : "Join"}
            </button>
          </div>
        </div>
        <div className="activity-map">
          <Map location={{ lat: details.latitude, lng: details.longitude }} />
        </div>
        <CommentsSection />
      </div>
      <Footer />
    </>
  );
};

export default ActivityPage;
