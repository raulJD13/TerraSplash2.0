import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";

import "./LandActivitiesPage.css";

function LandActivitiesPage() {
  const navigate = useNavigate();

  // Función para manejar el clic en una tarjeta
  const handleCardClick = (type) => {
    // Define las rutas basadas en el texto de la tarjeta
    const routes = {
      Hiking: "/landActivities/hiking",
      Climbing: "/landActivities/climbing",
      Cycling: "/landActivities/cycling",
      Horseback: "/landActivities/horseback",
      Skydiving: "/landActivities/skydiving",
      Motocross: "/landActivities/motocross",
    };

    // Navega a la ruta correspondiente si existe
    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  return (
    <>
      <Header />
      <div className="land-container">
        <Title text={"Land Activities"} />
        <div className="land-activities-grid">
          {/* Conecta cada tarjeta con handleCardClick */}
          <ActivitesCard
            imageUrl={TestImage}
            text={"Hiking"}
            onClick={() => handleCardClick("Hiking")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Climbing"}
            onClick={() => handleCardClick("Climbing")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Cycling"}
            onClick={() => handleCardClick("Cycling")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Horseback"}
            onClick={() => handleCardClick("Horseback")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Skydiving"}
            onClick={() => handleCardClick("Skydiving")}
          />
          <ActivitesCard
            imageUrl={TestImage}
            text={"Motocross"}
            onClick={() => handleCardClick("Motocross")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandActivitiesPage;
