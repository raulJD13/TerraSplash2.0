import { useNavigate } from "react-router-dom";
import "./Header.css";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts/AuthContext"; // Importamos el contexto de autenticación

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Obtenemos el usuario actual

  const goToHomePage = () => {
    navigate("/home");
  };

  const goToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={goToHomePage}>
        <img src="/images/logo.png" alt="TerraSplash Logo" className="logoHeader" />
      </div>
      <h1 className="app-name">TerraSplash</h1>
      <div className="user-icon" onClick={goToProfilePage}>
        {currentUser?.profileImage ? (
          <img
            src={currentUser.profileImage}
            alt="User Profile"
            className="user-profile-icon"
          />
        ) : (
          <UserOutlined style={{ fontSize: "32px", color: "#333" }} />
        )}
      </div>
    </header>
  );
}

export default Header;
