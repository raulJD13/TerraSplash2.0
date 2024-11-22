import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import "./CanoeingPage.css";

function CanoeingPage() {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión de los botones
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Transparent Kayak": "/waterActivities/canoeing/transparent-kayak",
      "Crystal Clear Waters": "/waterActivities/canoeing/crystal-clear-waters",
      "Relaxing Paddle": "/waterActivities/canoeing/relaxing-paddle",
      "Tropical Canoeing": "/waterActivities/canoeing/tropical-canoeing",
      "Adventure Ride": "/waterActivities/canoeing/adventure-ride",
      "Serene Waters": "/waterActivities/canoeing/serene-waters",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  const handleEditActivity = () => {
    alert("Editar una actividad existente");
  };

  const handleDeleteActivity = () => {
    alert("Eliminar una actividad");
  };

  const toggleButtons = () => {
    setIsExpanded(!isExpanded); 
  };

  return (
    <>
      <Header />
      <div className="canoeing-page-container">
        <div className="title-conoeing">
        <Title text="Canoeing" />
        </div>
        <div className="canoeing-page-cards">
          <PlaceCard
            name="Transparent Kayak"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Transparent Kayak")}
          />
          <PlaceCard
            name="Crystal Clear Waters"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Crystal Clear Waters")}
          />
          <PlaceCard
            name="Relaxing Paddle"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Relaxing Paddle")}
          />
          <PlaceCard
            name="Tropical Canoeing"
            rating={2}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Canoeing")}
          />
          <PlaceCard
            name="Adventure Ride"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Adventure Ride")}
          />
          <PlaceCard
            name="Serene Waters"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Serene Waters")}
          />
        </div>

        {/* Contenedor de botones flotantes */}
        <div className="floating-buttons-container">
          <FloatingButton
            icon="+"
            onClick={toggleButtons} // Toggle para mostrar los otros botones
            style={{ backgroundColor: "#28a745" }}
          />
          {isExpanded && (
            <>
              <FloatingButton
                icon="✎" // Editar
                onClick={handleEditActivity}
                style={{
                  backgroundColor: "#ffc107",
                  width: "40px", // Botón más pequeño
                  height: "40px", // Botón más pequeño
                }}
              />
              <FloatingButton
                icon="🗑️" // Eliminar
                onClick={handleDeleteActivity}
                style={{
                  backgroundColor: "#dc3545",
                  width: "40px", // Botón más pequeño
                  height: "40px", // Botón más pequeño
                }}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CanoeingPage;
