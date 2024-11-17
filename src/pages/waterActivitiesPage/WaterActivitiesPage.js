import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

import "./WaterActivitesPage.css";

function WaterActivitiesPage() {
  return (
    <>
      <Header />
      <div className="water-container">
        <Title text={"Water Activities"} />
        <div className="water-activities-grid">
          <ActivitesCard imageUrl={TestImage} text={"Canoeing"} />
          <ActivitesCard imageUrl={TestImage} text={"Fishing"} />
          <ActivitesCard imageUrl={TestImage} text={"Diving"} />
          <ActivitesCard imageUrl={TestImage} text={"Windsurfing"} />
          <ActivitesCard imageUrl={TestImage} text={"Parasailing"} />
          <ActivitesCard imageUrl={TestImage} text={"Jet Skiing"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WaterActivitiesPage;
