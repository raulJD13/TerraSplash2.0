import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkButton from "../../components/darkButton/DarkButton";
import LightButton from "../../components/lightButton/LightButton";
import "./FrontPage.css";

function FrontPage() {
  const navigate = useNavigate();
  const BackgroundImage = "/images/daniel-roe-lpjb_UMOyx8-unsplash.jpg";
  const Logo = "/images/inicialLogo.svg";
  const InfoIcon = "/images/icon-informacion.svg"; 

  const [showInfoIcon, setShowInfoIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfoIcon(true);
    }, 3000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="frontpage-container">
      {/* Icono de información con animación de aparición */}
      {showInfoIcon && (
        <a
          href="/DocumentacionAyuda/DocumentacionAyuda/Manual%20de%20Usuario%20TerraSplash.html"
          target="_blank"
          rel="noopener noreferrer"
          className="front-info-icon fade-in"
        >
          <img src={InfoIcon} alt="Información" />
        </a>
      )}

      <div className="frontpage-image-section">
        <img
          src={BackgroundImage}
          alt="Background"
          className="frontpage-background-image"
        />
        <div className="frontpage-logo-container">
          <img src={Logo} alt="Logo" className="frontpage-logo" />
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
