import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activityToEdit, setActivityToEdit] = useState(null);

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

  const handleDelete = (activityName) => {
    const updatedActivities = { ...activities };

    const sportIndex = updatedActivities.sports.findIndex(
      (activity) =>
        activity.type.toLowerCase() === type.toLowerCase() &&
        activity.name.toLowerCase() === sport.toLowerCase()
    );

    if (sportIndex !== -1) {
      const activityList = updatedActivities.sports[sportIndex].activities;
      const filteredActivities = activityList.filter(
        (activity) => activity.name.toLowerCase() !== activityName.toLowerCase()
      );

      updatedActivities.sports[sportIndex].activities = filteredActivities;
      setActivities(updatedActivities);
    } else {
      console.error("El deporte especificado no existe.");
    }
  };

  const handleDeleteConfirm = () => {
    if (activityToDelete) {
      handleDelete(activityToDelete.name);
    }
    setActivityToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setActivityToDelete(null);
    setIsDeleteModalOpen(false);
  };
  const toggleBookmark = (activityName) => {
    const updatedActivities = { ...activities };

    updatedActivities.sports.forEach((sport) => {
      sport.activities.forEach((activity) => {
        if (activity.name === activityName) {
          activity.bookmark = !activity.bookmark;
        }
      });
    });

    setActivities(updatedActivities);
  };

  const handleEdit = (activity) => {
    setActivityToEdit(activity);
    setIsEditModalOpen(true);
  };
  const handleSaveEdit = (editedActivity) => {
    const updatedActivities = { ...activities };
    const sportIndex = updatedActivities.sports.findIndex(
      (activity) =>
        activity.type.toLowerCase() === type.toLowerCase() &&
        activity.name.toLowerCase() === sport.toLowerCase()
    );

    if (sportIndex !== -1) {
      const activityIndex = updatedActivities.sports[
        sportIndex
      ].activities.findIndex(
        (activity) => activity.name === editedActivity.name
      );

      if (activityIndex !== -1) {
        updatedActivities.sports[sportIndex].activities[activityIndex] = {
          ...editedActivity,
          details: {
            ...editedActivity.details,
          },
        };
        setActivities(updatedActivities);
      }
    }

    setIsEditModalOpen(false);
    setActivityToEdit(null);
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
                isBookmarked={activity.bookmark}
                onClick={() => handleCardClick(activity.route)}
                onToggleBookmark={() => toggleBookmark(activity.name)}
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
        <Modal
          title="Confirmar Eliminación"
          open={isDeleteModalOpen}
          onOk={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          okText="Eliminar"
          cancelText="Cancelar"
        >
          <p>
            ¿Estás seguro de que quieres eliminar la actividad:{" "}
            <strong>{activityToDelete?.name}</strong>?
          </p>
        </Modal>

        {/* Modal de edición de actividad */}
        <Modal
          title="Editar Actividad"
          open={isEditModalOpen}
          onCancel={() => setIsEditModalOpen(false)}
          onOk={() => handleSaveEdit(activityToEdit)}
        >
          <div>
            <label>Nombre de la actividad</label>
            <input
              type="text"
              value={activityToEdit?.name || ""}
              onChange={(e) =>
                setActivityToEdit({ ...activityToEdit, name: e.target.value })
              }
            />
          </div>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default ActivitiesPage;
