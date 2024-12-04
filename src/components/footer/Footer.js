import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Importamos el contexto de autenticación
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Obtenemos el usuario actual

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="footer-icon" onClick={() => handleNavigation("/home")}>
        <HomeOutlined />
      </div>
      <div className="footer-icon" onClick={() => handleNavigation("/profile")}>
        <HeartOutlined />
      </div>
      <div
        className="footer-icon bookmark-footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <FaRegBookmark />
      </div>
      <div className="footer-icon" onClick={() => handleNavigation("/profile")}>
        {currentUser?.profileImage ? (
          <img
            src={currentUser.profileImage}
            alt="User Profile"
            className="footer-profile-icon"
          />
        ) : (
          <UserOutlined />
        )}
      </div>
    </div>
  );
};

export default Footer;
