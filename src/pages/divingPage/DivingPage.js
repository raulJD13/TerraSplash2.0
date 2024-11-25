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
      "Coral Reef Exploration":
        "/waterActivities/diving/coral-reef-exploration",
      "Deep Diving Adventure": "/waterActivities/diving/deep-diving-adventure",
      "Underwater Caves": "/waterActivities/diving/underwater-caves",
      "Tropical Diving": "/waterActivities/diving/tropical-diving",
      "Marine Life Exploration":
        "/waterActivities/diving/marine-life-exploration",
      "Diving in Paradise": "/waterActivities/diving/diving-in-paradise",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="diving-page-container">
        <div className="diving-title">
          <Title text="Diving" />
        </div>
        <div className="diving-page-cards">
          <PlaceCard
            name="Coral Reef Exploration"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Coral Reef Exploration")}
          />
          <PlaceCard
            name="Deep Diving Adventure"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Deep Diving Adventure")}
          />
          <PlaceCard
            name="Underwater Caves"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Underwater Caves")}
          />
          <PlaceCard
            name="Tropical Diving"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Diving")}
          />
          <PlaceCard
            name="Marine Life Exploration"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Marine Life Exploration")}
          />
          <PlaceCard
            name="Diving in Paradise"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Diving in Paradise")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DivingPage;
