import { useNavigate } from "react-router-dom";
import DarkButton from "../../components/darkButton/DarkButton";
import LightButton from "../../components/lightButton/LightButton";
import "./FrontPage.css";

function FrontPage() {
  const navigate = useNavigate();
  const BackgroundImage = "/images/daniel-roe-lpjb_UMOyx8-unsplash.jpg";
  const Logo = "/images/inicialLogo.svg";  // Ruta correcta para la imagen

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="frontpage-container">
      <div className="frontpage-image-section">
        <img
          src={BackgroundImage}
          alt="Background"
          className="frontpage-background-image"
        />
        <div className="frontpage-logo-container">
          <img src={Logo} alt="Logo" className="frontpage-logo" />  {/* Usamos la ruta */}
        </div>
      </div>
      <div className="frontpage-button-section">
        <LightButton onClick={handleLoginClick} />
        <DarkButton onClick={handleRegisterClick} />
      </div>
    </div>
  );
}

export default FrontPage;
