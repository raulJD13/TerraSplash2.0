import { useState } from "react";
import Footer from "../../components/footer/Footer";
import PlaceCard from "../../components/placeCard/PlaceCard";
import "./ProfilePage.css";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favourites");
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  // Datos de ejemplo
  const favourites = [
    TestImage,
    TestImage,
    TestImage,
    TestImage,
    TestImage,
    TestImage,
  ];
  const bookmarks = [
    { id: 1, name: "Teide Volcano", rating: 5, imageUrl: TestImage },
    { id: 2, name: "Cueva de los Verdes", rating: 4, imageUrl: TestImage },
  ];
  const activities = [
    { id: 1, name: "Roque Nublo", rating: 4, imageUrl: TestImage },
    { id: 2, name: "Barranco de la Vaca", rating: 5, imageUrl: TestImage },
  ];

  const renderTabContent = () => {
    if (activeTab === "favourites") {
      return (
        <div className="favourites-grid">
          {favourites.map((imageUrl, index) => (
            <div key={index} className="grid-item">
              <img src={imageUrl} alt={`Favourite ${index + 1}`} />
            </div>
          ))}
        </div>
      );
    } else if (activeTab === "bookmarks") {
      return bookmarks.map((bookmark) => (
        <PlaceCard
          key={bookmark.id}
          name={bookmark.name}
          rating={bookmark.rating}
          imageUrl={bookmark.imageUrl}
        />
      ));
    } else if (activeTab === "activities") {
      return activities.map((activity) => (
        <PlaceCard
          key={activity.id}
          name={activity.name}
          rating={activity.rating}
          imageUrl={activity.imageUrl}
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
          <img src={TestImage} alt="Cover" />
        </div>

        {/* Sección del perfil */}
        <div className="profile-section">
          <div className="user-info">
            <img src={TestImage} alt="User" className="user-image" />
            <h2 className="user-name">Paco</h2>
            <p className="user-location">Las Palmas de Gran Canaria</p>
          </div>

          {/* Estadísticas */}
          <div className="profile-stats">
            <div className="stat">
              <h3>12</h3>
              <p>Favourites</p>
            </div>
            <div className="stat">
              <h3>7</h3>
              <p>Bookmarks</p>
            </div>
            <div className="stat">
              <h3>2</h3>
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

          {/* Contenido dinámico según pestaña activa */}
          <div className="tabs-content">{renderTabContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
