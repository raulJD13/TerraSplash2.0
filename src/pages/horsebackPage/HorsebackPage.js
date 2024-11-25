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

  // Array de lugares para mapear las tarjetas
  const places = [
    { name: "Countryside Rides", rating: 5 },
    { name: "Beach Rides", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="horseback-page-container">
        <div className="horseback-title">
          <Title text="Horseback Riding" />
        </div>
        <div className="horseback-page-cards">
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

export default HorsebackPage;
