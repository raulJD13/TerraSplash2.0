import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import Map from "../../components/map/Map";
import CommentsSection from "../../components/commentsSection/CommentsSection";
import data from "../../data/activities.json"; // Importa tu JSON
import "./ActivityPage.css";

function ActivityPage() {
  const { type, sport, activity } = useParams(); // Obtiene los parámetros de la URL

  // Encuentra el deporte y la actividad correspondiente
  const sportData = data.sports.find((s) => s.type === type && s.name.toLowerCase() === sport.toLowerCase());
  const activityData = sportData.activities.find((a) => a.route.endsWith(activity));

  if (!activityData) {
    return <p>Activity not found!</p>; // Manejo de error si no se encuentra la actividad
  }

  // Extrae detalles
  const { details } = activityData;

  return (
    <>
      <Header />
      <div className="activity-container">
        <div className="activity-title-container">
          <Title text={activityData.name} />
        </div>
        <div className="activity-details">
          <div className="activity-info">
            <p>
              <strong>Location:</strong> {details.location}
            </p>
            <p>
              <strong>Difficulty:</strong> {details.difficulty}
            </p>
            <p>
              <strong>Distance:</strong> {details.distance}
            </p>
            <p>
              <strong>Availability:</strong> {details.availability}
            </p>
          </div>
          <img src={activityData.image} alt={activityData.name} className="activity-image" />
        </div>
        <div className="activity-description">
          <p>{details.description}</p>
        </div>
        <button className="join-button">Join</button>
        <div className="activity-map">
          <Map location={{ lat: details.latitude, lng: details.longitude }} />
        </div>
        <CommentsSection />
      </div>
      <Footer />
    </>
  );
}

export default ActivityPage;
