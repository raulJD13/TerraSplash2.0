import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./DivingPage.css";

function DivingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Coral Reef Exploration": "/waterActivities/diving/coral-reef-exploration",
      "Deep Diving Adventure": "/waterActivities/diving/deep-diving-adventure",
      "Underwater Caves": "/waterActivities/diving/underwater-caves",
      "Tropical Diving": "/waterActivities/diving/tropical-diving",
      "Marine Life Exploration": "/waterActivities/diving/marine-life-exploration",
      "Diving in Paradise": "/waterActivities/diving/diving-in-paradise",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  // Array de lugares
  const places = [
    { name: "Coral Reef Exploration", rating: 5 },
    { name: "Deep Diving Adventure", rating: 4 },
    { name: "Underwater Caves", rating: 5 },
    { name: "Tropical Diving", rating: 3 },
    { name: "Marine Life Exploration", rating: 4 },
    { name: "Diving in Paradise", rating: 3 },
  ];

  return (
    <>
      <Header />
      <div className="diving-page-container">
        <div className="diving-title">
          <Title text="Diving" />
        </div>
        <div className="diving-page-cards">
          {/* Mapear las tarjetas de lugar con índice para la animación */}
          {places.map((place, index) => (
            <PlaceCard
              key={index}
              name={place.name}
              rating={place.rating}
              imageUrl={TestImage}
              onClick={() => handleCardClick(place.name)}
              index={index} // Pasamos el índice para el retraso de la animación
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DivingPage;
