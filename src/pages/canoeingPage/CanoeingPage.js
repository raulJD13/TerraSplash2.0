import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

import "./CanoeingPage.css";

function CanoeingPage() {
  return (
    <>
      <Header />
      <div className="canoeing-page-container">
        <Title text="Canoeing" />
        <div className="canoeing-page-cards">
          <PlaceCard name="Transparent Kayak" rating={3} imageUrl={TestImage} />
          <PlaceCard name="Crystal Clear Waters" rating={4} imageUrl={TestImage} />
          <PlaceCard name="Relaxing Paddle" rating={5} imageUrl={TestImage} />
          <PlaceCard name="Tropical Canoeing" rating={2} imageUrl={TestImage} />
          <PlaceCard name="Adventure Ride" rating={4} imageUrl={TestImage} />
          <PlaceCard name="Serene Waters" rating={3} imageUrl={TestImage} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CanoeingPage;
