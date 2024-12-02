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
import activitiesData from "../../data/activities.json";
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
  const cardLandRef = useRef(null);
  const eventRef = useRef(null);
  const carouselRef = useRef(null);

  // Detectar visibilidad
  const isSelectionVisible = useIntersectionObserver(selectionRef);
  const isCardWaterVisible = useIntersectionObserver(cardWaterRef);
  const isCardLandVisible = useIntersectionObserver(cardLandRef);
  const isEventVisible = useIntersectionObserver(eventRef);
  const isCarouselVisible = useIntersectionObserver(carouselRef);

  // Extraer actividades
  const extractActivities = (filterKey) =>
    activitiesData.sports.flatMap((category) =>
      category.activities.filter((activity) => activity[filterKey])
    );

  const eventsOfWeek = extractActivities("event");
  const trendingActivities = extractActivities("trend");

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
       {eventsOfWeek.length > 0 && (
        <div
          className={`event-of-the-week ${
            isEventVisible ? "visible" : "hidden"
          }`}
          ref={eventRef}
        >
          <div className="event-week-title">
            <Title text="Event Of The Week" />
          </div>
          <div
            className={`card-event-week ${
              isEventVisible ? "visible" : "hidden"
            }`}
          >
            <EventWeek
              image={eventsOfWeek[0].image}
              name={eventsOfWeek[0].name}
              location={eventsOfWeek[0].details.location}
              price={eventsOfWeek[0].price}
              rating={eventsOfWeek[0].rating}
              description={eventsOfWeek[0].details.description}
            />
          </div>
        </div>
      )}

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
          {trendingActivities.map((activity) => (
            <ImageCard
              key={activity.name}
              imageUrl={activity.image}
              name={activity.name}
              rating={activity.rating}
            />
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;
