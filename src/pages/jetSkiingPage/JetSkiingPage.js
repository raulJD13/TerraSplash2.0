import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./JetSkiingPage.css";

function JetSkiingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Ocean Jet Skiing": "/waterActivities/jetskiing/ocean-jet-skiing",
      "Beachside Rides": "/waterActivities/jetskiing/beachside-rides",
      "Sunset Skiing": "/waterActivities/jetskiing/sunset-skiing",
      "Tropical Waves": "/waterActivities/jetskiing/tropical-waves",
      "Adrenaline Jet Skiing":
        "/waterActivities/jetskiing/adrenaline-jet-skiing",
      "Professional Jet Skiing":
        "/waterActivities/jetskiing/professional-jet-skiing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="jetskiing-page-container">
        <div className="jet-title">
          <Title text="Jet Skiing" />   
        </div>
     
        <div className="jetskiing-page-cards">
          <PlaceCard
            name="Ocean Jet Skiing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Ocean Jet Skiing")}
          />
          <PlaceCard
            name="Beachside Rides"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Beachside Rides")}
          />
          <PlaceCard
            name="Sunset Skiing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Sunset Skiing")}
          />
          <PlaceCard
            name="Tropical Waves"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Waves")}
          />
          <PlaceCard
            name="Adrenaline Jet Skiing"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Adrenaline Jet Skiing")}
          />
          <PlaceCard
            name="Professional Jet Skiing"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Professional Jet Skiing")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JetSkiingPage;
