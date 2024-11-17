
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import ActivitesCard from "../../components/activitiesCard/ActivitiesCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";

import "./LandActivitiesPage.css";

function LandActivitiesPage() {
  return (
    <>
      <Header />
      <div className="land-container">
        <Title text={"Land Activities"} />
        <div className="land-activities-grid">
          <ActivitesCard imageUrl={TestImage} text={"Hiking"} />
          <ActivitesCard imageUrl={TestImage} text={"Climbing"} />
          <ActivitesCard imageUrl={TestImage} text={"Cycling"} />
          <ActivitesCard imageUrl={TestImage} text={"Horseback"} />
          <ActivitesCard imageUrl={TestImage} text={"Skydiving"} />
          <ActivitesCard imageUrl={TestImage} text={"Motocross"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandActivitiesPage;
