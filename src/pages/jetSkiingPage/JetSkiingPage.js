import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import { useNavigate } from "react-router-dom";
import "./JetSkiingPage.css";

function JetSkiingPage() {
  const navigate = useNavigate();
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  const handleCardClick = (type) => {
    const routes = {
      "Ocean Jet Skiing": "/waterActivities/jetskiing/ocean-jet-skiing",
      "Beachside Rides": "/waterActivities/jetskiing/beachside-rides",
      "Sunset Skiing": "/waterActivities/jetskiing/sunset-skiing",
      "Tropical Waves": "/waterActivities/jetskiing/tropical-waves",
      "Adrenaline Jet Skiing": "/waterActivities/jetskiing/adrenaline-jet-skiing",
      "Professional Jet Skiing": "/waterActivities/jetskiing/professional-jet-skiing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  // Array con los lugares y sus datos
  const places = [
    { name: "Ocean Jet Skiing", rating: 5 },
    { name: "Beachside Rides", rating: 4 },
    { name: "Sunset Skiing", rating: 3 },
    { name: "Tropical Waves", rating: 4 },
    { name: "Adrenaline Jet Skiing", rating: 5 },
    { name: "Professional Jet Skiing", rating: 3 },
  ];

  return (
    <>
      <Header />
      <div className="jetskiing-page-container">
        <div className="jet-title">
          <Title text="Jet Skiing" />
        </div>
        <div className="jetskiing-page-cards">
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

export default JetSkiingPage;
