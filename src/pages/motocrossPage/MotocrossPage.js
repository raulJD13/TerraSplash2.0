import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./MotocrossPage.css";

function MotocrossPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Desert Tracks": "/landActivities/motocross/desert-tracks",
      "Forest Trails": "/landActivities/motocross/forest-trails",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="motocross-page-container">
        <div className="motocross-title">
          <Title text="Motocross" />
        </div>

        <div className="motocross-page-cards">
          <PlaceCard
            name="Desert Tracks"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Desert Tracks")}
          />
          <PlaceCard
            name="Forest Trails"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Forest Trails")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MotocrossPage;
