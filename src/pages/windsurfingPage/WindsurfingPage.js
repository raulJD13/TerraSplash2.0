import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import { useNavigate } from "react-router-dom";
import "./WindsurfingPage.css";

function WindsurfingPage() {
  const navigate = useNavigate();
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

  const handleCardClick = (type) => {
    const routes = {
      "Ocean Windsurfing": "/waterActivities/windsurfing/ocean-windsurfing",
      "Beachside Windsurfing": "/waterActivities/windsurfing/beachside-windsurfing",
      "Windsurfing Adventures": "/waterActivities/windsurfing/windsurfing-adventures",
      "Tropical Wind Waves": "/waterActivities/windsurfing/tropical-wind-waves",
      "Sunset Windsurfing": "/waterActivities/windsurfing/sunset-windsurfing",
      "Professional Windsurfing": "/waterActivities/windsurfing/professional-windsurfing",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  // Array de actividades para mapear las tarjetas
  const activities = [
    { name: "Ocean Windsurfing", rating: 5 },
    { name: "Beachside Windsurfing", rating: 4 },
    { name: "Windsurfing Adventures", rating: 3 },
    { name: "Tropical Wind Waves", rating: 4 },
    { name: "Sunset Windsurfing", rating: 3 },
    { name: "Professional Windsurfing", rating: 5 },
  ];

  return (
    <>
      <Header />
      <div className="windsurfing-page-container">
        <div className="windsurfing-title">
          <Title text="Windsurfing" />
        </div>
        <div className="windsurfing-page-cards">
          {activities.map((activity, index) => (
            <PlaceCard
              key={index}
              name={activity.name}
              rating={activity.rating}
              imageUrl={TestImage}
              onClick={() => handleCardClick(activity.name)}
              index={index} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WindsurfingPage;
