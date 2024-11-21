import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaRegBookmark } from "react-icons/fa";  // Cambié FaBookmark a FaRegBookmark
import { useNavigate } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/home")}
      >
        <HomeOutlined />
      </div>
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <HeartOutlined />
      </div>
      <div
        className="footer-icon bookmark-footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <FaRegBookmark />  {/* Usé FaRegBookmark aquí */}
      </div>
      <div
        className="footer-icon"
        onClick={() => handleNavigation("/profile")}
      >
        <UserOutlined />
      </div>
    </div>
  );
};

export default Footer;
