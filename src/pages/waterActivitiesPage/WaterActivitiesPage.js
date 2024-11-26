import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import { useNavigate } from "react-router-dom";

import "./WaterActivitesPage.css";

function WaterActivitiesPage() {
  const navigate = useNavigate();
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Array de actividades con sus nombres y rutas
  const activities = [
    { text: "Canoeing", route: "/waterActivities/canoeing" },
    { text: "Fishing", route: "/waterActivities/fishing" },
    { text: "Diving", route: "/waterActivities/diving" },
    { text: "Windsurfing", route: "/waterActivities/windsurfing" },
    { text: "Parasailing", route: "/waterActivities/parasailing" },
    { text: "Jet Skiing", route: "/waterActivities/jet-skiing" },
  ];

  const handleCardClick = (route) => {
    navigate(route); 
  };

  return (
    <>
      <Header />
      <div className="water-container">
        <div className="water-title"></div>
        <Title text={"Water Activities"} />
        <div className="water-activities-grid">
          {/* Renderizar tarjetas dinámicamente con map */}
          {activities.map((activity, index) => (
            <ActivitesCard
              key={index} 
              imageUrl={TestImage} 
              text={activity.text} 
              onClick={() => handleCardClick(activity.route)} 
              index={index} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WaterActivitiesPage;
