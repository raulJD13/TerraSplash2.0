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
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function HomePage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    if (type === "land") {
      navigate("/landActivities");
    } else if (type === "water") {
      navigate("/waterActivities");
    }
  };

  // Refs para los contenedores
  const selectionRef = useRef(null);
  const cardWaterRef = useRef(null);
  const cardLandRef = useRef(null);
  const eventRef = useRef(null);
  const carouselRef = useRef(null);

  // Detectar visibilidad
  const isSelectionVisible = useIntersectionObserver(selectionRef);
  const isCardWaterVisible = useIntersectionObserver(cardWaterRef);
  const isCardLandVisible = useIntersectionObserver(cardLandRef);
  const isEventVisible = useIntersectionObserver(eventRef);
  const isCarouselVisible = useIntersectionObserver(carouselRef);

  return (
    <div className="homepage-container">
      <Header />

      <div
        className={`selection-container ${isSelectionVisible ? "visible" : "hidden"}`}
        ref={selectionRef}
      >
        <Title text="Select location" />
      </div>

      <div
        className={`cardlocation-water-container ${isCardWaterVisible ? "visible" : "hidden"}`}
        ref={cardWaterRef}
      >
        <CardLocation
          type="water"
          imageUrl={TestImage}
          onClick={() => handleCardClick("water")}
        />
      </div>

      <div
        className={`cardlocation-land-container ${isCardLandVisible ? "visible" : "hidden"}`}
        ref={cardLandRef}
      >
        <CardLocation
          type="land"
          imageUrl={TestImage}
          onClick={() => handleCardClick("land")}
        />
      </div>

      <div
        className={`event-of-the-week ${isEventVisible ? "visible" : "hidden"}`}
        ref={eventRef}
      >
        <Title text="Event Of The Week" />
      </div>
      <div
        className={`card-event-week ${isEventVisible ? "visible" : "hidden"}`}
        ref={eventRef}
      >
        <EventWeek
          image={TestImage}
          name="Beach Party"
          location="Las Palmas de Gran Canaria"
          price={25}
          rating={4}
          description="Join us for an amazing beach party with live music, drinks, and great vibes!"
        />
      </div>
      <div
        className={`most-visited ${isCarouselVisible ? "visible" : "hidden"}`}
        ref={carouselRef}
      >
        <Title text="Most Visited Activities" />
      </div>

      <div
        className={`carousel-section ${isCarouselVisible ? "visible" : "hidden"}`}
        ref={carouselRef}
      >
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
