import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import activitiesData from "../../data/activities.json";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import "./ActivitiesPage.css";

function ActivitiesPage() {
  const navigate = useNavigate();
  const { type, sport } = useParams();
  const [activities, setActivities] = useState(activitiesData);

  const handleCardClick = (route) => navigate(route);

  const filteredActivities = activities.sports
    .filter(
      (activity) =>
        activity.type.toLowerCase() === type.toLowerCase() &&
        activity.name.toLowerCase() === sport.toLowerCase()
    )
    .flatMap((activity) => activity.activities);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleAdd = (newActivity) => {
    const updatedActivities = { ...activities };
    const sportIndex = updatedActivities.sports.findIndex(
      (activity) =>
        activity.type.toLowerCase() === type.toLowerCase() &&
        activity.name.toLowerCase() === sport.toLowerCase()
    );
  
    if (sportIndex !== -1) {
      updatedActivities.sports[sportIndex].activities.push(newActivity);
      setActivities(updatedActivities);
    } else {
      console.error("El deporte especificado no existe.");
    }
  };
  

  const handleEdit = () => {
    console.log("Modificar seleccionado");
  };

  const handleDelete = () => {
    console.log("Eliminar seleccionado");
  };

  return (
    <>
      <Header />
      <div className="activities-page-container">
        <div className="title-activities">
          <Title text={`${capitalizeFirstLetter(sport)} Activities`} />
        </div>
        <div className="activities-page-cards">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
              <PlaceCard
                key={index}
                name={activity.name}
                rating={activity.rating}
                imageUrl={activity.image}
                onClick={() => handleCardClick(activity.route)}
              />
            ))
          ) : (
            <p>No hay actividades disponibles para este deporte.</p>
          )}
        </div>
        <FloatingButton
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <Footer />
    </>
  );
}

export default ActivitiesPage;
