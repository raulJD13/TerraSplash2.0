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

  return (
    <>
      <Header />
      <div className="parasailing-page-container">
        <div className="parasailing-title">
          <Title text="Parasailing" />
        </div>
        <div className="parasailing-page-cards">
          <PlaceCard
            name="Sky High Parasailing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Sky High Parasailing")}
          />
          <PlaceCard
            name="Ocean View Parasailing"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Ocean View Parasailing")}
          />
          <PlaceCard
            name="Sunset Parasailing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Sunset Parasailing")}
          />
          <PlaceCard
            name="Island Parasailing"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Island Parasailing")}
          />
          <PlaceCard
            name="Tropical Skies"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Skies")}
          />
          <PlaceCard
            name="Adventure Parasailing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Adventure Parasailing")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ParasailingPage;
