import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
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

  return (
    <>
      <Header />
      <div className="fishing-page-container">
        <div className="fishing-title">
          <Title text="Fishing" />
        </div>
        <div className="fishing-page-cards">
          <PlaceCard
            name="Deep Sea Fishing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Deep Sea Fishing")}
          />
          <PlaceCard
            name="Lake Serenity"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Lake Serenity")}
          />
          <PlaceCard
            name="River Rapids Fishing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("River Rapids Fishing")}
          />
          <PlaceCard
            name="Fishing Paradise"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Fishing Paradise")}
          />
          <PlaceCard
            name="Catch and Release"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Catch and Release")}
          />
          <PlaceCard
            name="Tropical Fishing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Fishing")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FishingPage;
