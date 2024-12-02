import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import PlaceCard from "../../components/placeCard/PlaceCard";
import activityData from "../../data/activities.json";
import userData from "../../data/users.json";
import "./ProfilePage.css";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favourites");
  const [user, setUser] = useState({});
  const [data, setData] = useState(activityData);
  const navigate = useNavigate();

  // Cargar datos del usuario al montar el componente
  useEffect(() => {
    setUser(userData);
  }, []);

  const favourites =
    data.sports?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.favourite)
    ) || [];

  const bookmarks =
    data.sports?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.bookmark)
    ) || [];

  const activities =
    data.sports?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.joined)
    ) || [];

  const toggleBookmark = (activityName) => {
    const updatedData = { ...data };
    updatedData.sports.forEach((sport) => {
      sport.activities.forEach((activity) => {
        if (activity.name === activityName) {
          activity.bookmark = !activity.bookmark;
        }
      });
    });
    setData(updatedData); // Actualiza el estado con la actividad modificada
  };

  // Renderizado del contenido de las pestañas
  const renderTabContent = () => {
    if (activeTab === "favourites") {
      return (
        <div className="favourites-grid">
          {favourites.map((activity, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => navigate(activity.route)} // Navegar a la ruta
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="favourites-image"
              />
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "bookmarks") {
      return bookmarks.map((bookmark, index) => (
        <PlaceCard
          key={index}
          name={bookmark.name}
          rating={bookmark.rating}
          imageUrl={bookmark.image}
          isBookmarked={bookmark.bookmark}
          onToggleBookmark={() => toggleBookmark(bookmark.name)} // Alternar bookmark
          onClick={() => navigate(bookmark.route)} // Navegar al hacer clic
        />
      ));
    } else if (activeTab === "activities") {
      return activities.map((activity, index) => (
        <PlaceCard
          key={index}
          name={activity.name}
          rating={activity.rating}
          imageUrl={activity.image}
          onClick={() => navigate(activity.route)} // Navegar al hacer clic
        />
      ));
    } else {
      return <p>No content available.</p>;
    }
  };

  return (
    <>
      <div className="profile-container">
        {/* Imagen de portada */}
        <div className="cover-image">
          <img
            src={
              user.coverImage || "/images/deafult-image.jpg"
            }
            alt="Cover"
          />
        </div>

        {/* Sección del perfil */}
        <div className="profile-section">
          <div className="user-info">
            <img
              src={user.profileImage || "/images/user-placeholder.jpg"}
              alt="User"
              className="user-image"
            />
            <h2 className="user-name">{user.username || "Username"}</h2>
            <p className="user-location">{user.location || "Location"}</p>
          </div>

          {/* Estadísticas */}
          <div className="profile-stats">
            <div className="stat">
              <h3>{favourites.length}</h3>
              <p>Favourites</p>
            </div>
            <div className="stat">
              <h3>{bookmarks.length}</h3>
              <p>Bookmarks</p>
            </div>
            <div className="stat">
              <h3>{activities.length}</h3>
              <p>Activities</p>
            </div>
          </div>
        </div>

        {/* Navegación entre pestañas */}
        <div className="profile-tabs">
          <div className="tabs-header">
            <button
              className={`tab ${activeTab === "favourites" ? "active" : ""}`}
              onClick={() => setActiveTab("favourites")}
            >
              Favourites
            </button>
            <button
              className={`tab ${activeTab === "bookmarks" ? "active" : ""}`}
              onClick={() => setActiveTab("bookmarks")}
            >
              Bookmarks
            </button>
            <button
              className={`tab ${activeTab === "activities" ? "active" : ""}`}
              onClick={() => setActiveTab("activities")}
            >
              Activities
            </button>
          </div>
          <div className="tabs-content">{renderTabContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
