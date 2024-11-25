import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./SkydivingPage.css";

function SkydivingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Tandem Jump": "/landActivities/skydiving/tandem-jump",
      "High Altitude": "/landActivities/skydiving/high-altitude",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="skydiving-page-container">
        <div className="skydiving-title">
          <Title text="Skydiving" />
        </div>
        <div className="skydiving-page-cards">
          <PlaceCard
            name="Tandem Jump"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tandem Jump")}
          />
          <PlaceCard
            name="High Altitude"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("High Altitude")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SkydivingPage;
