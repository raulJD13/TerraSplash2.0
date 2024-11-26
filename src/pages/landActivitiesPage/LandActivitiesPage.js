import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import { useNavigate } from "react-router-dom";

import "./LandActivitiesPage.css";

function LandActivitiesPage() {
  const navigate = useNavigate();
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Array de actividades con sus nombres y rutas
  const activities = [
    { text: "Hiking", route: "/landActivities/hiking" },
    { text: "Climbing", route: "/landActivities/climbing" },
    { text: "Cycling", route: "/landActivities/cycling" },
    { text: "Horseback", route: "/landActivities/horseback" },
    { text: "Skydiving", route: "/landActivities/skydiving" },
    { text: "Motocross", route: "/landActivities/motocross" },
  ];

  // Función para manejar el clic en una tarjeta
  const handleCardClick = (route) => {
    navigate(route); // Navega a la ruta correspondiente
  };

  return (
    <>
      <Header />
      <div className="land-container">
        <div className="land-title"></div>
        <Title text={"Land Activities"} />
        <div className="land-activities-grid">
          {/* Renderizar tarjetas con map */}
          {activities.map((activity, index) => (
            <ActivitesCard
              key={index} // Clave única para React
              imageUrl={TestImage} // Imagen de prueba
              text={activity.text} // Texto de la actividad
              onClick={() => handleCardClick(activity.route)} // Evento onClick
              index={index} // Pasar índice para animaciones dinámicas
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandActivitiesPage;
