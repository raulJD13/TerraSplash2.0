import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import { useNavigate } from "react-router-dom";
import "./FishingPage.css";

function FishingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    // Vector de rutas
    const routes = {
      "Deep Sea Fishing": "/waterActivities/fishing/deep-sea-fishing",
      "Lake Serenity": "/waterActivities/fishing/lake-serenity",
      "River Rapids Fishing": "/waterActivities/fishing/river-rapids-fishing",
      "Fishing Paradise": "/waterActivities/fishing/fishing-paradise",
      "Catch and Release": "/waterActivities/fishing/catch-and-release",
      "Tropical Fishing": "/waterActivities/fishing/tropical-fishing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Array de lugares para mapear las tarjetas
  const places = [
    { name: "Deep Sea Fishing", rating: 5 },
    { name: "Lake Serenity", rating: 4 },
    { name: "River Rapids Fishing", rating: 3 },
    { name: "Fishing Paradise", rating: 5 },
    { name: "Catch and Release", rating: 4 },
    { name: "Tropical Fishing", rating: 3 },
  ];

  return (
    <>
      <Header />
      <div className="fishing-page-container">
        <div className="fishing-title">
          <Title text="Fishing" />
        </div>
        <div className="fishing-page-cards">
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

export default FishingPage;
