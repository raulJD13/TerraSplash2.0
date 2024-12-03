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

  const sportData = data.sports?.find(
    (s) => s.type === type && s.name.toLowerCase() === sport?.toLowerCase()
  );

  const activityData = sportData?.activities?.find((a) =>
    a.route.endsWith(activity)
  );

  const [isFavourite, setIsFavourite] = useState(activityData?.favourite || false);
  const [isJoined, setIsJoined] = useState(activityData?.joined || false);
  const [rating, setRating] = useState(activityData?.rating || 0);

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
    activityData.favourite = newValue;
  };

  const handleJoinClick = () => {
    const newValue = !isJoined;
    setIsJoined(newValue);
    activityData.joined = newValue;
  };

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    activityData.rating = newRating; 
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
          <div className="rating-section">
            <RatingStars rating={rating} onClick={handleRatingClick} />
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

const RatingStars = ({ rating, onClick }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= (hover || rating) ? "star selected" : "star"}
            onClick={() => onClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default ActivityPage;
