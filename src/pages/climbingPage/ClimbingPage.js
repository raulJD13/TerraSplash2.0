import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
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
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Definimos las tarjetas y sus propiedades
  const places = [
    { name: "Mountain Peaks", rating: 5 },
    { name: "Rock Walls", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="climbing-page-container">
        <div className="title-climbing">
          <Title text="Climbing" />
        </div>
        <div className="climbing-page-cards">
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

export default ClimbingPage;
