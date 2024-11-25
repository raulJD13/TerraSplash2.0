import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PlaceCard from "../../components/placeCard/PlaceCard";
import TestImage from "../../images/sam-wermut-XvKaRS_0Jik-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import FloatingButton from "../../components/floatingButton/FloatingButton";
import "./CanoeingPage.css";

function CanoeingPage() {
  const navigate = useNavigate();

  const handleCardClick = (type) => {
    const routes = {
      "Transparent Kayak": "/waterActivities/canoeing/transparent-kayak",
      "Crystal Clear Waters": "/waterActivities/canoeing/crystal-clear-waters",
      "Relaxing Paddle": "/waterActivities/canoeing/relaxing-paddle",
      "Tropical Canoeing": "/waterActivities/canoeing/tropical-canoeing",
      "Adventure Ride": "/waterActivities/canoeing/adventure-ride",
      "Serene Waters": "/waterActivities/canoeing/serene-waters",
    };

    if (routes[type]) {
      navigate(routes[type]);
    }
  };

  const handleAdd = () => {
    console.log("Añadir archivo seleccionado");
  };

  const handleEdit = () => {
    console.log("Modificar seleccionado");
  };

  const handleDelete = () => {
    console.log("Eliminar seleccionado");
  };

  return (
    <>
      <Header />
      <div className="canoeing-page-container">
        <div className="title-conoeing">
          <Title text="Canoeing" />
        </div>
        <div className="canoeing-page-cards">
          <PlaceCard
            name="Transparent Kayak"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Transparent Kayak")}
          />
          <PlaceCard
            name="Crystal Clear Waters"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Crystal Clear Waters")}
          />
          <PlaceCard
            name="Relaxing Paddle"
            rating={5}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Relaxing Paddle")}
          />
          <PlaceCard
            name="Tropical Canoeing"
            rating={2}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Tropical Canoeing")}
          />
          <PlaceCard
            name="Adventure Ride"
            rating={4}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Adventure Ride")}
          />
          <PlaceCard
            name="Serene Waters"
            rating={3}
            imageUrl={TestImage}
            onClick={() => handleCardClick("Serene Waters")}
          />
        </div>
        <FloatingButton
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          
        />
      </div>
      <Footer />
    </>
  );
}

export default CanoeingPage;
