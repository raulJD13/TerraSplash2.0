import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import { useNavigate } from "react-router-dom";
import "./SkydivingPage.css";

function SkydivingPage() {
  const navigate = useNavigate();
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  const handleCardClick = (type) => {
    const routes = {
      "Tandem Jump": "/landActivities/skydiving/tandem-jump",
      "High Altitude": "/landActivities/skydiving/high-altitude",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  // Array de los lugares para el mapeo dinámico
  const places = [
    { name: "Tandem Jump", rating: 5 },
    { name: "High Altitude", rating: 4 },
  ];

  return (
    <>
      <Header />
      <div className="skydiving-page-container">
        <div className="skydiving-title">
          <Title text="Skydiving" />
        </div>
        <div className="skydiving-page-cards">
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

export default SkydivingPage;
