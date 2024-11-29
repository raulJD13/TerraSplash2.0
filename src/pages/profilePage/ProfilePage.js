import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import PlaceCard from "../../components/placeCard/PlaceCard";
import activityData from "../../data/activities.json";
import userData from "../../data/users.json";
import "./ProfilePage.css";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favourites");
  const [user, setUser] = useState({});

  // Cargar datos del usuario al montar el componente
  useEffect(() => {
    setUser(userData); // Supone que userData contiene los datos de un único usuario
  }, []);

  // Filtrar actividades por categorías
  const favourites = activityData.sports
    ?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.favourite)
    ) || [];

  const bookmarks = activityData.sports
    ?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.bookmark)
    ) || [];

  const activities = activityData.sports
    ?.flatMap((sport) =>
      sport.activities.filter((activity) => activity.joined)
    ) || [];

  // Renderizado del contenido de las pestañas
  const renderTabContent = () => {
    if (activeTab === "favourites") {
      return (
        <div className="favourites-grid">
          {favourites.map((activity, index) => (
            <div key={index} className="grid-item">
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
        />
      ));
    } else if (activeTab === "activities") {
      return activities.map((activity, index) => (
        <PlaceCard
          key={index}
          name={activity.name}
          rating={activity.rating}
          imageUrl={activity.image}
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
            src={user.coverImage || "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg"}
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
