import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./ClimbingPage.css";

function ClimbingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Mountain Peaks": "/landActivities/climbing/mountain-peaks",
      "Rock Walls": "/landActivities/climbing/rock-walls",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="climbing-page-container">
        <div className="title-climbing">
          <Title text="Climbing" />
        </div>
        <div className="climbing-page-cards">
          <PlaceCard
            name="Mountain Peaks"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Mountain Peaks")}
          />
          <PlaceCard
            name="Rock Walls"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Rock Walls")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClimbingPage;
