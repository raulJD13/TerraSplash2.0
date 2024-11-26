import "./HomePage.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CardLocation from "../../components/cardLocation/CardLocation";
import EventWeek from "../../components/eventWeek/EventWeek";
import ImageCard from "../../components/imageCard/ImageCard";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import eventOfWeek from "../../data/eventOfWeek.json";
import mostVisited from "../../data/mostVisited.json";
import locations from "../../data/locations.json";

function HomePage() {
  const navigate = useNavigate();
  const images = {
    "sam-wermut": "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg",
    "aleks-dahlberg": "/images/aleks-dahlberg-pVATCBKLH8w-unsplash.jpg",
  };

  const handleCardClick = (route) => {
    navigate(route);
  };

  // Refs para los contenedores
  const selectionRef = useRef(null);
  const cardWaterRef = useRef(null);
  const cardLandRef = useRef(null); // Ref para las cartas de "land"
  const eventRef = useRef(null);
  const carouselRef = useRef(null);

  // Detectar visibilidad
  const isSelectionVisible = useIntersectionObserver(selectionRef);
  const isCardWaterVisible = useIntersectionObserver(cardWaterRef);
  const isCardLandVisible = useIntersectionObserver(cardLandRef); // Usamos esto para las cartas de "land"
  const isEventVisible = useIntersectionObserver(eventRef);
  const isCarouselVisible = useIntersectionObserver(carouselRef);

  return (
    <div className="homepage-container">
      <Header />

      <div
        className={`selection-container ${
          isSelectionVisible ? "visible" : "hidden"
        }`}
        ref={selectionRef}
      >
        <Title text="Select location" />
      </div>

      {/* Mostrar cartas de tipo "water" */}
      <div
        className={`cardlocation-water-container ${
          isCardWaterVisible ? "visible" : "hidden"
        }`}
        ref={cardWaterRef}
      >
        <div className="card-location-container">
          {locations
            .filter((location) => location.type === "water")
            .map((location) => (
              <CardLocation
                key={location.type}
                type={location.type}
                imageUrl={images[location.imageId]}
                onClick={() => handleCardClick(location.route)}
              />
            ))}
        </div>
      </div>

      {/* Mostrar cartas de tipo "land" */}
      <div
        className={`cardlocation-land-container ${
          isCardLandVisible ? "visible" : "hidden"
        }`}
        ref={cardLandRef}
      >
        <div className="card-location-container">
          {locations
            .filter((location) => location.type === "land")
            .map((location) => (
              <CardLocation
                key={location.type}
                type={location.type}
                imageUrl={images[location.imageId]}
                onClick={() => handleCardClick(location.route)}
              />
            ))}
        </div>
      </div>

      {/* Event Of The Week */}
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
          image={eventOfWeek.image}
          name={eventOfWeek.name}
          location={eventOfWeek.location}
          price={eventOfWeek.price}
          rating={eventOfWeek.rating}
          description={eventOfWeek.description}
        />
      </div>

      {/* Most Visited */}
      <div
        className={`most-visited ${isCarouselVisible ? "visible" : "hidden"}`}
        ref={carouselRef}
      >
        <Title text="Most Visited Activities" />
      </div>

      <div
        className={`carousel-section ${
          isCarouselVisible ? "visible" : "hidden"
        }`}
        ref={carouselRef}
      >
        <Carousel>
          {mostVisited.map((activity) => (
            <ImageCard
              key={activity.name}
              imageUrl={activity.imageUrl}
              name={activity.name}
              rating={activity.rating}
            />
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
