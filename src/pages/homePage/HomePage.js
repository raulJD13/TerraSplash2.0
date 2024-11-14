import "./HomePage.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CardLocation from "../../components/cardLocation/CardLocation";
import EventWeek from "../../components/eventWeek/EventWeek";
import ImageCard from "../../components/imageCard/ImageCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
// import Carousel from "../../components/carousel/Carousel";

// const images = [
//   { src: '../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg', name: 'Playa de Maspalomas', rating: 4 },
//   { src: '../../images/aleks-dahlberg-pVATCBKLH8w-unsplash.jpg', name: 'Puerto de Mogán', rating: 5 },
//   { src: '../../images/descarga.jpg', name: 'Roque Nublo', rating: 3 },
// ];

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />

      <div className="selection-container">
        <Title text="Select location" />
      </div>

      <div className="cardlocation-water-container">
        <CardLocation
          type="water"
          imageUrl="../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg"
        />
      </div>

      <div className="cardlocation-land-container">
        <CardLocation
          type="land"
          imageUrl="../../images/aleks-dahlberg-pVATCBKLH8w-unsplash.jpg"
        />
      </div>

      <div className="event-of-the-week">
        <Title text="Event Of The Week" />
      </div>
      <div className="card-event-week">
        <EventWeek
          image={"../../images/carolin-thiergart-InmE4I_bqWA-unsplash.jpg"}
          name="Roque nublo"
          location="Gran Canaria"
          price="12€"
        />
      </div>
      <div className="most-visited">
        <Title text="Most Visited Activities" />
      </div>
      <div className="image-card-container">
        <ImageCard imageUrl={TestImage} name="Playa de Maspalomas" rating={4} />
      </div>
    </div>
  );
}

export default HomePage;
