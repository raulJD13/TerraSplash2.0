import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";

import "./WaterActivitesPage.css";

function WaterActivitiesPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    // Vector de rutas
    const routes = {
      Canoeing: "/waterActivities/canoeing",
      Fishing: "/waterActivities/fishing",
      Diving: "/waterActivities/diving",
      Windsurfing: "/waterActivities/windsurfing",
      Parasailing: "/waterActivities/parasailing",
      "Jet Skiing": "/waterActivities/jet-skiing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="water-container">
        <Title text={"Water Activities"} />
        <div className="water-activities-grid">
          <ActivitesCard
            imageUrl={TestImage}
            text={"Canoeing"}
            onClick={() => handleCardClick("Canoeing")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Fishing"}
            onClick={() => handleCardClick("Fishing")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Diving"}
            onClick={() => handleCardClick("Diving")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Windsurfing"}
            onClick={() => handleCardClick("Windsurfing")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Parasailing"}
            onClick={() => handleCardClick("Parasailing")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Jet Skiing"}
            onClick={() => handleCardClick("Jet Skiing")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WaterActivitiesPage;
