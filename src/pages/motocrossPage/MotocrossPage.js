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

  // Array con los lugares y sus datos
  const places = [
    { name: "Desert Tracks", rating: 5 },
    { name: "Forest Trails", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="motocross-page-container">
        <div className="motocross-title">
          <Title text="Motocross" />
        </div>
        <div className="motocross-page-cards">
          {/* Mapeo dinámico de las tarjetas con retraso escalonado */}
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              rating={place.rating}
              imageUrl={TestImage}
              onClick={() => handleCardClick(place.name)}
              index={index} // Pasamos el índice para manejar el retraso de la animación
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MotocrossPage;
