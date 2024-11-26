import { useNavigate } from "react-router-dom";
import "./Header.css";
import { UserOutlined } from "@ant-design/icons";

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
      <div className="logo-container" onClick={goToHomePage}>
      <img src="/images/logo.png" alt="TerraSplash Logo" className="logoHeader" />
      </div>
      <h1 className="app-name">TerraSplash</h1>
      <div className="user-icon" onClick={goToProfilePage}>
        <UserOutlined style={{ fontSize: "32px", color: "#333" }} />
      </div>
    </header>
  );
}

export default Header;
