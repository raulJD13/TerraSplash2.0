import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import { useNavigate } from "react-router-dom";
import sports from "../../data/sports.json";
import "./LandActivitiesPage.css";

function LandActivitiesPage() {
  const navigate = useNavigate();
  const handleCardClick = (route) => {
    navigate(route);
  };

  // solo terrestres
  const landActivities = sports.filter((activity) => activity.type === "land");

  return (
    <>
      <Header />
      <div className="land-container">
        <div className="land-activities-title"></div>
        <Title text="Land Activities" />
        <div className="land-activities-grid">
          {landActivities.map((activity, index) => (
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

export default LandActivitiesPage;
