import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
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
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Definimos las tarjetas con sus datos
  const places = [
    { name: "Forest Trails", rating: 5 },
    { name: "City Rides", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="cycling-page-container">
        <div className="cycling-title">
          <Title text="Cycling" />
        </div>
        <div className="cycling-page-cards">
          {/* Renderizamos las tarjetas de lugar, pasando el índice */}
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              rating={place.rating}
              imageUrl={TestImage}
              onClick={() => handleCardClick(place.name)}
              index={index} // Pasamos el índice para el retraso dinámico
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CyclingPage;
