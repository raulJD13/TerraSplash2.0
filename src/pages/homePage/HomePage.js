import "./HomePage.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import CardLocation from "../../components/cardLocation/CardLocation";

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
          imageUrl="/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg"
        />
      </div>

      <div className="cardlocation-land-container">
        <CardLocation
          type="land"
          imageUrl="/images/aleks-dahlberg-pVATCBKLH8w-unsplash.jpg"
        />
      </div>

      <div className="event-of-the-week">
        <Title text="Event Of The Week" />
      </div>
    </div>
  );
}

export default HomePage;
