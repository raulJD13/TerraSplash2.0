import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./WindsurfingPage.css";

function WindsurfingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Ocean Windsurfing": "/waterActivities/windsurfing/ocean-windsurfing",
      "Beachside Windsurfing":
        "/waterActivities/windsurfing/beachside-windsurfing",
      "Windsurfing Adventures":
        "/waterActivities/windsurfing/windsurfing-adventures",
      "Tropical Wind Waves": "/waterActivities/windsurfing/tropical-wind-waves",
      "Sunset Windsurfing": "/waterActivities/windsurfing/sunset-windsurfing",
      "Professional Windsurfing":
        "/waterActivities/windsurfing/professional-windsurfing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="windsurfing-page-container">
        <div className="windsurfing-title">
          <Title text="Windsurfing" />
        </div>
        <div className="windsurfing-page-cards">
          <PlaceCard
            name="Ocean Windsurfing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Ocean Windsurfing")}
          />
          <PlaceCard
            name="Beachside Windsurfing"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Beachside Windsurfing")}
          />
          <PlaceCard
            name="Windsurfing Adventures"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Windsurfing Adventures")}
          />
          <PlaceCard
            name="Tropical Wind Waves"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Wind Waves")}
          />
          <PlaceCard
            name="Sunset Windsurfing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Sunset Windsurfing")}
          />
          <PlaceCard
            name="Professional Windsurfing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Professional Windsurfing")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WindsurfingPage;
