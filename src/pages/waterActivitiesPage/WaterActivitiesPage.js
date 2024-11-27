import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import { useNavigate } from "react-router-dom";
// import sports from "../../data/sports.json";
import activitiesData from "../../data/activities.json"

import "./WaterActivitesPage.css";

function WaterActivitiesPage() {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  // solo agua
  const waterActivities =  activitiesData.sports.filter((activity) => activity.type === "water");


  return (
    <>
      <Header />
      <div className="water-container">
        <div className="water-activites-title">
          </div><Title text="Water Activities" />
        <div className="water-activities-grid">
          {waterActivities.map((activity, index) => (
            <ActivitesCard
              key={index}
              imageUrl={activity.imageUrl}
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