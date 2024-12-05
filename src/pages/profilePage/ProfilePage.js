import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import PlaceCard from "../../components/placeCard/PlaceCard";
import activityData from "../../data/activities.json";
import { useAuth } from "../../contexts/AuthContext";
import "./ProfilePage.css";

const BASE_URL = "http://localhost:3001/users"; // Endpoint para actualizar usuario

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("favourites");
  const [data, setData] = useState(activityData);
  const { currentUser, login } = useAuth(); 
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login"); 
    return null;
  }

  const handleImageChange = async (type) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = async () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async () => {
          const updatedUser = { ...currentUser, [type]: reader.result };

          try {
            const response = await fetch(`${BASE_URL}/${currentUser.id}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ [type]: reader.result }),
            });
            if (!response.ok) throw new Error("Error updating user.");

            login(updatedUser); 
          } catch (err) {
            alert("Error updating image. Please try again.");
          }
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  };

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
    setData(updatedData); 
  };

  const renderTabContent = () => {
    if (activeTab === "favourites") {
      return (
        <div className="favourites-grid">
          {favourites.map((activity, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => navigate(activity.route)} 
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
          onToggleBookmark={() => toggleBookmark(bookmark.name)} 
          onClick={() => navigate(bookmark.route)}
        />
      ));
    } else if (activeTab === "activities") {
      return activities.map((activity, index) => (
        <PlaceCard
          key={index}
          name={activity.name}
          rating={activity.rating}
          imageUrl={activity.image}
          onClick={() => navigate(activity.route)}
        />
      ));
    } else {
      return <p>No content available.</p>;
    }
  };

  return (
    <>
      <div className="profile-container">
        <div
          className="cover-image"
          onClick={() => handleImageChange("coverImage")}
        >
          <img
            src={currentUser.coverImage || "/images/default-image.png"}
            alt="Cover"
          />
        </div>

        <div className="profile-section">
          <div className="user-info">
            <img
              src={currentUser.profileImage || "/images/user-placeholder.jpg"}
              alt="User"
              className="user-image"
              onClick={() => handleImageChange("profileImage")}
            />
            <h2 className="user-name">{currentUser.username || "Username"}</h2>
            <p className="user-location">
              {currentUser.location || "Location"}
            </p>
          </div>

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
