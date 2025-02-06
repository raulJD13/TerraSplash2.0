import "./HomePage.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CardLocation from "../../components/cardLocation/CardLocation";
import EventWeek from "../../components/eventWeek/EventWeek";
import ImageCard from "../../components/imageCard/ImageCard";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import activitiesData from "../../data/activities.json";
import locations from "../../data/locations.json";
import { useEffect } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState(activitiesData);
  const [showInfoIcon, setShowInfoIcon] = useState(false); 

  const images = {
    "sam-wermut": "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg",
    "aleks-dahlberg": "/images/aleks-dahlberg-pVATCBKLH8w-unsplash.jpg",
  };

  const InfoIcon = "/images/icon-informacion.svg";

  const handleCardClick = (route) => {
    navigate(route);
  };

  const handleBookmarkToggle = (identifier, isBookmarked) => {
    // Actualizar el estado de las actividades
    const updatedActivities = { ...activities };
    updatedActivities.sports.forEach((category) => {
      category.activities.forEach((activity) => {
        if (activity.route === identifier || activity.name === identifier) {
          activity.bookmark = isBookmarked;
        }
      });
    });
    setActivities(updatedActivities);
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
    activities.sports.flatMap((category) =>
      category.activities.filter((activity) => activity[filterKey])
    );

  const eventsOfWeek = extractActivities("event");
  const trendingActivities = extractActivities("trend");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfoIcon(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="homepage-container">
      <Header />
      {/* Icono de información */}
      {showInfoIcon && (
        <a
          href="/manual-de-usuario.html"
          target="_blank"
          rel="noopener noreferrer"
          className="home-info-icon fade-in"
        >
          <img src={InfoIcon} alt="Información" />
        </a>
      )}

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
              id={eventsOfWeek[0].name}
              route={eventsOfWeek[0].route}
              image={eventsOfWeek[0].image}
              name={eventsOfWeek[0].name}
              location={eventsOfWeek[0].details.location}
              price={eventsOfWeek[0].price}
              rating={eventsOfWeek[0].rating}
              description={eventsOfWeek[0].details.description}
              isBookmarked={eventsOfWeek[0].bookmark}
              onBookmarkToggle={handleBookmarkToggle}
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
              route={activity.route}
              imageUrl={activity.image}
              name={activity.name}
              rating={activity.rating}
              isBookmarked={activity.bookmark}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
