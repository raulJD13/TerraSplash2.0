import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import Map from "../../components/map/Map";
import CommentsSection from "../../components/commentsSection/CommentsSection";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import "./TransparentKayackPage.css";

function TransparentKayackPage() {
  return (
    <>
      <Header />
      <div className="transparent-kayack-container">
        <div className="transparent-kayack-title-container ">
          <Title text="Transparent Kayak" />
        </div>
        <div className="activity-details">
          <div className="activity-info">
            <p>
              <strong>Location:</strong> Las Canteras, Las Palmas
            </p>
            <p>
              <strong>Difficulty:</strong> Beginner
            </p>
            <p>
              <strong>Distance:</strong> 2.3 km
            </p>
            <p>
              <strong>Availability:</strong> 4/5
            </p>
          </div>
          <img
            src={TestImage} 
            alt="Transparent Kayak"
            className="activity-image"
          />
        </div>
        <div className="activity-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <button className="join-button">Join</button>
        <div className="activity-map">
          <Map location={{ lat: 28.1275, lng: -15.4314 }} />
        </div>
        <CommentsSection />
      </div>
      <Footer />
    </>
  );
}

export default TransparentKayackPage;
