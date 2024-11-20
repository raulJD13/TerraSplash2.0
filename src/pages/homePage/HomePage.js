import "./HomePage.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CardLocation from "../../components/cardLocation/CardLocation";
import EventWeek from "../../components/eventWeek/EventWeek";
import ImageCard from "../../components/imageCard/ImageCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    if (type === "land") {
      navigate("/landActivities");
    } else if (type === "water") {
      navigate("/waterActivities");
    }
  };

  return (
    <div className="homepage-container">
      <Header />

      <div className="selection-container">
        <Title text="Select location" />
      </div>

      <div className="cardlocation-water-container">
        <CardLocation
          type="water"
          imageUrl={TestImage}
          onClick={() => handleCardClick("water")}
        />
      </div>

      <div className="cardlocation-land-container">
        <CardLocation
          type="land"
          imageUrl={TestImage}
          onClick={() => handleCardClick("land")}
        />
      </div>

      <div className="event-of-the-week">
        <Title text="Event Of The Week" />
      </div>
      <div className="card-event-week">
        <EventWeek
          image={TestImage}
          name="Beach Party"
          location="Las Palmas de Gran Canaria"
          price={25}
          rating={4}
          description="Join us for an amazing beach party with live music, drinks, and great vibes!"
        />
      </div>
      <div className="most-visited">
        <Title text="Most Visited Activities" />
      </div>

      <div className="carousel-section">
        <Carousel>
          <ImageCard
            imageUrl={TestImage}
            name="Playa de Maspalomas"
            rating={4}
          />
          <ImageCard imageUrl={TestImage} name="Puerto de Mogán" rating={5} />
          <ImageCard imageUrl={TestImage} name="Roque Nublo" rating={3} />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
