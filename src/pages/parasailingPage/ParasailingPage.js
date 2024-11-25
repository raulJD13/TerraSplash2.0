import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./ParasailingPage.css";

function ParasailingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Sky High Parasailing":
        "/waterActivities/parasailing/sky-high-parasailing",
      "Ocean View Parasailing":
        "/waterActivities/parasailing/ocean-view-parasailing",
      "Sunset Parasailing": "/waterActivities/parasailing/sunset-parasailing",
      "Island Parasailing": "/waterActivities/parasailing/island-parasailing",
      "Tropical Skies": "/waterActivities/parasailing/tropical-skies",
      "Adventure Parasailing":
        "/waterActivities/parasailing/adventure-parasailing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  // Array de los lugares para el mapeo dinámico
  const places = [
    { name: "Sky High Parasailing", rating: 5 },
    { name: "Ocean View Parasailing", rating: 4 },
    { name: "Sunset Parasailing", rating: 3 },
    { name: "Island Parasailing", rating: 4 },
    { name: "Tropical Skies", rating: 5 },
    { name: "Adventure Parasailing", rating: 3 },
  ];

  return (
    <>
      <Header />
      <div className="parasailing-page-container">
        <div className="parasailing-title">
          <Title text="Parasailing" />
        </div>
        <div className="parasailing-page-cards">
          {/* Mapeo dinámico de las tarjetas con un retraso escalonado */}
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

export default ParasailingPage;
