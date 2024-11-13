import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  const goToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <header className="header">
      <img
        src={logo}
        alt="TerraSplash Logo"
        className="logoHeader"
        onClick={goToHomePage}
      />
      <h1 className="app-name">TerraSplash</h1>
      <i className="user-icon" onClick={goToProfilePage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M13.468 12.37C12.758 11.226 11.364 10.5 8 10.5s-4.758.726-5.468 1.87A6.978 6.978 0 0 0 8 15a6.978 6.978 0 0 0 5.468-2.63z" />
          <path
            fillRule="evenodd"
            d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1z"
          />
        </svg>
      </i>
    </header>
  );
}

export default Header;
