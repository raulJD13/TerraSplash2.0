import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import Map from "../../components/map/Map";
import CommentsSection from "../../components/commentsSection/CommentsSection";
import "./TransparentKayackPage.css";

function TransparentKayackPage() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const location = "Las Canteras, Las Palmas";
  const difficulty = "Beginner";
  const distance = "2.3 km";
  const availability = "3//4";
  const latitude = 28.1275;
  const length = -15.4314 ;
  const TestImage = "/images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

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
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Difficulty:</strong> {difficulty}
            </p>
            <p>
              <strong>Distance:</strong> {distance}
            </p>
            <p>
              <strong>Availability:</strong> {availability}
            </p>
          </div>
          <img
            src={TestImage}
            alt="Transparent Kayak"
            className="activity-image"
          />
        </div>
        <div className="activity-description">
          <p>{text}</p>
        </div>
        <button className="join-button">Join</button>
        <div className="activity-map">
          <Map location={{ lat: {latitude}, lng: {length} }} />
        </div>
        <CommentsSection />
      </div>
      <Footer />
    </>
  );
}

export default TransparentKayackPage;
