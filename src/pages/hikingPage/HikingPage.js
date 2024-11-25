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

  // Array de lugares para mapear las tarjetas
  const places = [
    { name: "Mountain Trails", rating: 5 },
    { name: "Scenic Views", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="hiking-page-container">
        <div className="hiking-title">
          <Title text="Hiking" />
        </div>
        <div className="hiking-page-cards">
          {/* Mapeo de las tarjetas con un retraso escalonado usando el índice */}
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              rating={place.rating}
              imageUrl={TestImage}
              onClick={() => handleCardClick(place.name)}
              index={index} // Pasamos el índice para controlar el retraso de la animación
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HikingPage;
