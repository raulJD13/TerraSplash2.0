import { useNavigate } from 'react-router-dom';
import DarkButton from '../../components/darkButton/DarkButton'
import LightButton from "../../components/lightButton/LightButton";
import "./FrontPage.css";
import BackgroundImage from "../../images/daniel-roe-lpjb_UMOyx8-unsplash.jpg";
import { ReactComponent as Logo } from "../../images/inicialLogo.svg";

function FrontPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
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
          <Logo className="frontpage-logo" />
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
