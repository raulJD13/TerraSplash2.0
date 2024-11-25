import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./HorsebackPage.css";

function HorsebackPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Countryside Rides": "/landActivities/horseback/countryside-rides",
      "Beach Rides": "/landActivities/horseback/beach-rides",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="horseback-page-container">
        <div className="horseback-title">
          <Title text="Horseback Riding" />
        </div>

        <div className="horseback-page-cards">
          <PlaceCard
            name="Countryside Rides"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Countryside Rides")}
          />
          <PlaceCard
            name="Beach Rides"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Beach Rides")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HorsebackPage;
