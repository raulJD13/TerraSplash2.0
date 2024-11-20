import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./HikingPage.css";

function HikingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Mountain Trails": "/landActivities/hiking/mountain-trails",
      "Scenic Views": "/landActivities/hiking/scenic-views",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="hiking-page-container">
        <Title text="Hiking" />
        <div className="hiking-page-cards">
          <PlaceCard
            name="Mountain Trails"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Mountain Trails")}
          />
          <PlaceCard
            name="Scenic Views"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Scenic Views")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HikingPage;
