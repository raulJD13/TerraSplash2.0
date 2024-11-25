import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./CyclingPage.css";

function CyclingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Forest Trails": "/landActivities/cycling/forest-trails",
      "City Rides": "/landActivities/cycling/city-rides",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="cycling-page-container">
        <div className="cycling-title">
          <Title text="Cycling" />
        </div>
        <div className="cycling-page-cards">
          <PlaceCard
            name="Forest Trails"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Forest Trails")}
          />
          <PlaceCard
            name="City Rides"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("City Rides")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CyclingPage;
